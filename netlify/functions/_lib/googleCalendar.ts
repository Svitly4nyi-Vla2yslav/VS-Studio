import { randomUUID } from 'node:crypto';

export type FreeSlot = {
  start: string;
  end: string;
  label: string;
};

const BOOKING_DURATION_MINUTES = Number(process.env.PLEHN_BOOKING_DURATION_MINUTES || 20);
const BOOKING_TIMEZONE = process.env.PLEHN_BOOKING_TIMEZONE || 'Europe/Berlin';
const BOOKING_WORKDAY_START = process.env.PLEHN_BOOKING_WORKDAY_START || '09:00';
const BOOKING_WORKDAY_END = process.env.PLEHN_BOOKING_WORKDAY_END || '17:00';
const BOOKING_BUFFER_MINUTES = Number(process.env.PLEHN_BOOKING_BUFFER_MINUTES || 0);
const BOOKING_MIN_NOTICE_HOURS = Number(process.env.PLEHN_BOOKING_MIN_NOTICE_HOURS || 2);
const BOOKING_DAYS_AHEAD = Number(process.env.PLEHN_BOOKING_DAYS_AHEAD || 21);
const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID || 'primary';
const RECRUITER_EMAIL = process.env.PLEHN_RECRUITER_EMAIL || 'svetli4nuyvla2islav@gmail.com';

const addMinutes = (date: Date, minutes: number) => new Date(date.getTime() + minutes * 60 * 1000);

const isConfigured = () => Boolean(
  process.env.GOOGLE_CALENDAR_CLIENT_ID &&
  process.env.GOOGLE_CALENDAR_CLIENT_SECRET &&
  process.env.GOOGLE_CALENDAR_REFRESH_TOKEN &&
  process.env.GOOGLE_CALENDAR_ID
);

const getAccessToken = async () => {
  if (!isConfigured()) {
    return null;
  }

  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: process.env.GOOGLE_CALENDAR_CLIENT_ID!,
      client_secret: process.env.GOOGLE_CALENDAR_CLIENT_SECRET!,
      refresh_token: process.env.GOOGLE_CALENDAR_REFRESH_TOKEN!,
      grant_type: 'refresh_token',
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Google OAuth refresh failed: ${response.status} ${text}`);
  }

  const json = (await response.json()) as { access_token?: string };
  if (!json.access_token) {
    throw new Error('Google OAuth refresh returned no access token.');
  }

  return json.access_token;
};

const stringToDateInBerlin = (value: string) => {
  const [year, month, day] = value.split('-').map(Number);
  const berlinNow = new Date();
  const berlinTime = new Date(Date.UTC(year, (month ?? 1) - 1, day, 12, 0, 0));
  const utcDiffMinutes = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Europe/Berlin',
    timeZoneName: 'shortOffset',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).formatToParts(berlinNow).find(part => part.type === 'timeZoneName')?.value || '+01:00';
  const offset = utcDiffMinutes.includes('GMT') ? (utcDiffMinutes.includes('+') ? Number(utcDiffMinutes.replace(/[^+\-\d]/g, '')) : 0) : 60;
  return new Date(berlinTime.getTime() - (offset * 60 * 1000));
};

const parseTimeString = (time: string) => {
  const [hours, minutes] = time.split(':').map(Number);
  return { hours, minutes };
};

const inRange = (start: Date, end: Date, candidate: { start: Date; end: Date }) =>
  candidate.start < end && candidate.end > start;

export const validateBookingDate = (dateString: string) => {
  const match = /^\d{4}-\d{2}-\d{2}$/.test(dateString);
  if (!match) return { valid: false, error: 'Date must be YYYY-MM-DD.' };

  const date = new Date(`${dateString}T12:00:00Z`);
  if (Number.isNaN(date.getTime())) {
    return { valid: false, error: 'Date is invalid.' };
  }

  const now = new Date();
  const horizonLimit = addMinutes(now, BOOKING_DAYS_AHEAD * 24 * 60);
  if (date < new Date(now.getTime() - 60 * 1000)) {
    return { valid: false, error: 'Past dates are not allowed.' };
  }

  if (date > horizonLimit) {
    return { valid: false, error: 'Date is outside the allowed booking horizon.' };
  }

  return { valid: true, date };
};

const getCalendarRange = (dateString: string) => {
  const date = stringToDateInBerlin(dateString);
  const dayStart = new Date(date);
  dayStart.setUTCHours(0, 0, 0, 0);
  const dayEnd = new Date(date);
  dayEnd.setUTCHours(23, 59, 59, 999);
  return { dayStart, dayEnd };
};

const buildBusyRanges = (busyItems: Array<{ start?: string; end?: string }>) => {
  return busyItems
    .filter(item => item.start && item.end)
    .map(item => ({ start: new Date(item.start!), end: new Date(item.end!) }));
};

export const queryCalendarAvailability = async (dateString: string): Promise<FreeSlot[]> => {
  if (!isConfigured()) {
    return [];
  }

  const { valid, error } = validateBookingDate(dateString);
  if (!valid) {
    throw new Error(error ?? 'Invalid date');
  }

  const accessToken = await getAccessToken();
  if (!accessToken) {
    return [];
  }

  const { dayStart, dayEnd } = getCalendarRange(dateString);
  const queryStart = new Date(Math.max(Date.now(), dayStart.getTime() - BOOKING_MIN_NOTICE_HOURS * 60 * 60 * 1000)).toISOString();
  const queryEnd = dayEnd.toISOString();

  const response = await fetch(`https://www.googleapis.com/calendar/v3/freeBusy?key=${process.env.GOOGLE_CALENDAR_CLIENT_ID}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      items: [{ id: CALENDAR_ID }],
      timeMin: queryStart,
      timeMax: queryEnd,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`FreeBusy query failed: ${response.status} ${text}`);
  }

  const json = (await response.json()) as { calendars?: Record<string, { busy?: Array<{ start: string; end: string }> }> };
  const busy = buildBusyRanges(json.calendars?.[CALENDAR_ID]?.busy ?? []);

  const startParts = parseTimeString(BOOKING_WORKDAY_START);
  const endParts = parseTimeString(BOOKING_WORKDAY_END);
  const startCursor = new Date(dayStart);
  startCursor.setUTCHours(startParts.hours, startParts.minutes, 0, 0);

  const endCursor = new Date(dayStart);
  endCursor.setUTCHours(endParts.hours, endParts.minutes, 0, 0);

  const slots: FreeSlot[] = [];
  let cursor = new Date(startCursor);

  while (cursor.getTime() + BOOKING_DURATION_MINUTES * 60 * 1000 <= endCursor.getTime()) {
    const slotEnd = addMinutes(cursor, BOOKING_DURATION_MINUTES);
    const isBusy = busy.some(range => inRange(cursor, slotEnd, range));
    if (!isBusy) {
      const label = new Intl.DateTimeFormat('de-DE', {
        timeZone: BOOKING_TIMEZONE,
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).format(cursor);
      slots.push({
        start: cursor.toISOString(),
        end: slotEnd.toISOString(),
        label,
      });
    }
    cursor = addMinutes(cursor, BOOKING_DURATION_MINUTES + BOOKING_BUFFER_MINUTES);
  }

  return slots;
};

const fetchEventById = async (eventId: string, accessToken: string) => {
  const response = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events/${eventId}?conferenceDataVersion=1`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  if (!response.ok) return null;
  return (await response.json()) as {
    conferenceData?: {
      entryPoints?: Array<{ uri?: string; type?: string; label?: string; status?: string }>; 
    };
    htmlLink?: string;
    start?: { dateTime?: string };
    end?: { dateTime?: string };
  };
};

export const createGoogleMeeting = async (start: string, end: string, name: string, email: string, note: string) => {
  if (!isConfigured()) {
    return null;
  }

  const accessToken = await getAccessToken();
  if (!accessToken) {
    return null;
  }

  const payload = {
    summary: 'Bewerbungsgespräch · plehn media',
    description: `Bewerbungsgespräch für ${name}\nE-Mail: ${email}\nQuelle: plehn-application\n\nHinweis:\n${note || 'Kein zusätzlicher Hinweis.'}`,
    start: { dateTime: new Date(start).toISOString() },
    end: { dateTime: new Date(end).toISOString() },
    attendees: [{ email: RECRUITER_EMAIL }],
    conferenceData: {
      createRequest: {
        requestId: randomUUID(),
        conferenceSolutionKey: { type: 'hangoutsMeet' },
      },
    },
  };

  const response = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events?conferenceDataVersion=1&sendUpdates=all`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Event creation failed: ${response.status} ${text}`);
  }

  const event = (await response.json()) as {
    id?: string;
    htmlLink?: string;
    conferenceData?: {
      entryPoints?: Array<{ uri?: string; type?: string; label?: string; status?: string }>; 
    };
    start?: { dateTime?: string };
    end?: { dateTime?: string };
  };

  let meetUrl = event.conferenceData?.entryPoints?.find(point => point?.uri)?.uri ?? null;
  if (!meetUrl && event.id) {
    for (let attempt = 0; attempt < 3; attempt += 1) {
      await new Promise(resolve => setTimeout(resolve, 1200));
      const refreshed = await fetchEventById(event.id!, accessToken);
      const nextUrl = refreshed?.conferenceData?.entryPoints?.find(point => point?.uri)?.uri ?? null;
      if (nextUrl) {
        meetUrl = nextUrl;
        break;
      }
    }
  }

  return {
    ok: true,
    eventId: event.id ?? null,
    eventUrl: event.htmlLink ?? null,
    meetUrl,
    start: event.start?.dateTime ?? start,
    end: event.end?.dateTime ?? end,
    timezone: BOOKING_TIMEZONE,
    durationMinutes: BOOKING_DURATION_MINUTES,
  };
};

export const canUseGoogleCalendar = () => isConfigured();
export const getBookingConfig = () => ({
  durationMinutes: BOOKING_DURATION_MINUTES,
  timezone: BOOKING_TIMEZONE,
  workdayStart: BOOKING_WORKDAY_START,
  workdayEnd: BOOKING_WORKDAY_END,
  minNoticeHours: BOOKING_MIN_NOTICE_HOURS,
  daysAhead: BOOKING_DAYS_AHEAD,
  bufferMinutes: BOOKING_BUFFER_MINUTES,
});

export const getBookingFallbackUrl = () => process.env.VITE_PLEHN_BOOKING_URL || 'mailto:svetli4nuyvla2islav@gmail.com?subject=Gespräch%20vereinbaren';

export const ensureSlotIsFree = async (start: string, end: string) => {
  if (!isConfigured()) return false;
  const accessToken = await getAccessToken();
  if (!accessToken) return false;

  const response = await fetch(`https://www.googleapis.com/calendar/v3/freeBusy?key=${process.env.GOOGLE_CALENDAR_CLIENT_ID}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      items: [{ id: CALENDAR_ID }],
      timeMin: new Date(start).toISOString(),
      timeMax: new Date(end).toISOString(),
    }),
  });

  if (!response.ok) {
    return false;
  }

  const json = (await response.json()) as { calendars?: Record<string, { busy?: Array<{ start: string; end: string }> }> };
  const busy = json.calendars?.[CALENDAR_ID]?.busy ?? [];
  return busy.every(item => new Date(item.end).getTime() <= new Date(start).getTime() || new Date(item.start).getTime() >= new Date(end).getTime());
};

export const buildAvailabilityResponse = async (date: string) => {
  if (!canUseGoogleCalendar()) {
    return {
      ok: false,
      fallbackUrl: getBookingFallbackUrl(),
      error: 'Google Calendar is not configured.',
    };
  }

  const slots = await queryCalendarAvailability(date);
  return {
    ok: true,
    date,
    timezone: BOOKING_TIMEZONE,
    durationMinutes: BOOKING_DURATION_MINUTES,
    slots,
  };
};

type BookingSuccess = {
  ok: true;
  eventId: string | null;
  eventUrl: string | null;
  meetUrl: string | null;
  start: string;
  end: string;
  timezone: string;
  durationMinutes: number;
};

type BookingFailure = {
  ok: false;
  error: string;
  fallbackUrl?: string;
};

export const createBookingEvent = async (input: {
  name: string;
  email: string;
  note: string;
  start: string;
  timezone: string;
  source: string;
}): Promise<BookingSuccess | BookingFailure> => {
  if (!canUseGoogleCalendar()) {
    return { ok: false, fallbackUrl: getBookingFallbackUrl(), error: 'Google Calendar is not configured.' };
  }

  const slotStart = new Date(input.start);
  const slotEnd = new Date(slotStart.getTime() + BOOKING_DURATION_MINUTES * 60 * 1000);
  const free = await ensureSlotIsFree(slotStart.toISOString(), slotEnd.toISOString());
  if (!free) {
    return { ok: false, error: 'Der gewählte Termin ist nicht mehr verfügbar.' };
  }

  const created = await createGoogleMeeting(slotStart.toISOString(), slotEnd.toISOString(), input.name, input.email, input.note);
  if (!created || !created.ok) {
    return { ok: false, error: 'Der Termin konnte nicht bestätigt werden.' };
  }

  return {
    ok: true,
    eventId: created.eventId,
    eventUrl: created.eventUrl,
    meetUrl: created.meetUrl,
    start: created.start,
    end: created.end,
    timezone: created.timezone,
    durationMinutes: created.durationMinutes,
  } satisfies BookingSuccess;
};
