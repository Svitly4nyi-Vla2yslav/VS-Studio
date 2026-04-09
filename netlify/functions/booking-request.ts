import { z } from 'zod';
import { createKeyValueEmailHtml, sendNotificationEmail, sendTelegramPlaceholder } from './_lib/email';
import { HandlerEvent, HandlerResponse, getHeader, jsonResponse, parseJsonBody } from './_lib/http';
import { persistRecord } from './_lib/storage';
import type { AssistantBookingPayload } from '../../src/features/ai-assistant/types';

const requestSchema = z
  .object({
    name: z.string().min(1),
    email: z.string().email().optional(),
    phone: z.string().min(5).optional(),
    businessType: z.string().min(1),
    requestedService: z.string().min(1),
    preferredDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    preferredTime: z.string().regex(/^\d{2}:\d{2}$/),
    timezone: z.literal('Europe/Berlin'),
    notes: z.string().optional(),
    language: z.enum(['de', 'en', 'uk']),
    source: z.literal('assistant'),
  })
  .refine(payload => Boolean(payload.email || payload.phone), {
    message: 'Either email or phone is required',
    path: ['email'],
  });

const berlinParts = (date: Date) => {
  const formatter = new Intl.DateTimeFormat('sv-SE', {
    timeZone: 'Europe/Berlin',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  const parts = Object.fromEntries(formatter.formatToParts(date).map(part => [part.type, part.value]));
  return {
    year: Number(parts.year),
    month: Number(parts.month),
    day: Number(parts.day),
    hour: Number(parts.hour),
    minute: Number(parts.minute),
  };
};

const toPseudoTimestamp = (year: number, month: number, day: number, hour: number, minute: number) =>
  Date.UTC(year, month - 1, day, hour, minute);

const validateSlot = (preferredDate: string, preferredTime: string) => {
  const [year, month, day] = preferredDate.split('-').map(Number);
  const [hour, minute] = preferredTime.split(':').map(Number);
  const weekday = new Date(Date.UTC(year, month - 1, day, 12, 0)).getUTCDay();

  if (weekday < 2 || weekday > 5) {
    return 'Bookings are available Tuesday to Friday only.';
  }

  if (minute % 15 !== 0) {
    return 'Please choose a time on a 15-minute grid.';
  }

  const minutes = hour * 60 + minute;
  if (minutes < 600 || minutes > 1005) {
    return 'Available start times are between 10:00 and 16:45 Europe/Berlin.';
  }

  const now = berlinParts(new Date());
  const requestedTimestamp = toPseudoTimestamp(year, month, day, hour, minute);
  const nowTimestamp = toPseudoTimestamp(now.year, now.month, now.day, now.hour, now.minute);
  const sameDay = year === now.year && month === now.month && day === now.day;

  if (sameDay && requestedTimestamp - nowTimestamp < 3 * 60 * 60 * 1000) {
    return 'Same-day bookings require at least 3 hours of notice.';
  }

  return null;
};

export const handler = async (event: HandlerEvent): Promise<HandlerResponse> => {
  if (event.httpMethod === 'OPTIONS') return jsonResponse(200, { ok: true });
  if (event.httpMethod !== 'POST') return jsonResponse(405, { ok: false, error: 'Method not allowed' });

  try {
    const payload = requestSchema.parse(parseJsonBody<AssistantBookingPayload>(event.body));
    const slotError = validateSlot(payload.preferredDate, payload.preferredTime);
    if (slotError) {
      return jsonResponse(400, { ok: false, error: slotError });
    }

    const submittedAt = new Date().toISOString();
    const ipAddress = getHeader(event.headers, 'x-nf-client-connection-ip') || getHeader(event.headers, 'x-forwarded-for');
    const record = {
      ...payload,
      submittedAt,
      ipAddress,
      status: 'requested',
      meetingDurationMinutes: 30,
      bufferMinutes: 15,
      calendarPlaceholderUrl: process.env.BOOKING_CALENDAR_EMBED_URL || null,
    };

    const storage = await persistRecord('assistantBookings', 'assistant_bookings', record);
    if (!storage.stored) {
      return jsonResponse(500, { ok: false, error: 'Booking storage is not configured.' });
    }

    const subject = 'Neue Terminanfrage über AI Assistant – VS Web Studio';
    const text = [
      subject,
      '',
      `Name: ${payload.name}`,
      `E-Mail: ${payload.email ?? '-'}`,
      `Telefon: ${payload.phone ?? '-'}`,
      `Unternehmensart: ${payload.businessType}`,
      `Leistung: ${payload.requestedService}`,
      `Wunschtermin: ${payload.preferredDate} ${payload.preferredTime} (${payload.timezone})`,
      `Notizen: ${payload.notes ?? '-'}`,
      `Sprache: ${payload.language}`,
      `Zeitpunkt: ${submittedAt}`,
    ].join('\n');

    await sendNotificationEmail({
      subject,
      replyTo: payload.email,
      text,
      html: createKeyValueEmailHtml(subject, {
        Name: payload.name,
        'E-Mail': payload.email ?? '-',
        Telefon: payload.phone ?? '-',
        Unternehmensart: payload.businessType,
        Leistung: payload.requestedService,
        Wunschtermin: `${payload.preferredDate} ${payload.preferredTime} (${payload.timezone})`,
        Notizen: payload.notes ?? '-',
        Sprache: payload.language,
        Zeitpunkt: submittedAt,
      }),
    });

    await sendTelegramPlaceholder(text);

    return jsonResponse(200, {
      ok: true,
      storageProvider: storage.provider,
      id: storage.id ?? null,
      calendarPlaceholderUrl: process.env.BOOKING_CALENDAR_EMBED_URL || null,
    });
  } catch (error) {
    console.error('booking-request failed.', error);
    if (error instanceof z.ZodError) {
      return jsonResponse(400, {
        ok: false,
        error: error.issues[0]?.message || 'Invalid booking payload',
        issues: error.issues.map(issue => ({
          path: issue.path.join('.'),
          message: issue.message,
        })),
      });
    }

    return jsonResponse(500, {
      ok: false,
      error: error instanceof Error ? error.message : 'Booking request failed',
    });
  }
};
