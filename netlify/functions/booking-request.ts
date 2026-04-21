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

  if ([year, month, day, hour, minute].some(value => Number.isNaN(value))) {
    return 'Please choose a valid date and time.';
  }

  const now = berlinParts(new Date());
  const requestedTimestamp = toPseudoTimestamp(year, month, day, hour, minute);
  const nowTimestamp = toPseudoTimestamp(now.year, now.month, now.day, now.hour, now.minute);

  if (requestedTimestamp < nowTimestamp) {
    return 'Please choose a future time slot.';
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
      `Quelle: ${payload.source}`,
    ].join('\n');

    const emailResult = await sendNotificationEmail({
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
        Quelle: payload.source,
      }),
    });

    const telegramResult = await sendTelegramPlaceholder(text);

    if (!storage.stored && !emailResult.sent && !telegramResult.sent) {
      return jsonResponse(500, {
        ok: false,
        error: storage.error || 'Booking delivery is not configured.',
      });
    }

    return jsonResponse(200, {
      ok: true,
      storageProvider: storage.provider,
      id: storage.id ?? null,
      calendarPlaceholderUrl: process.env.BOOKING_CALENDAR_EMBED_URL || null,
      storageWarning: storage.stored ? null : storage.error ?? 'Booking was delivered without database storage.',
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
