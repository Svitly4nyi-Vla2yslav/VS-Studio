import { z } from 'zod';
import { jsonResponse, HandlerEvent } from './_lib/http';
import { createBookingEvent, getBookingConfig } from './_lib/googleCalendar';

const bookingSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email(),
  note: z.string().max(1200).default(''),
  start: z.string().datetime(),
  timezone: z.string().default('Europe/Berlin'),
  source: z.string().default('plehn-landing'),
});

export const handler = async (event: HandlerEvent) => {
  if (event.httpMethod === 'OPTIONS') {
    return jsonResponse(200, { ok: true });
  }

  if (event.httpMethod !== 'POST') {
    return jsonResponse(405, { ok: false, error: 'Method not allowed' });
  }

  try {
    const payload = JSON.parse(event.body || '{}');
    const parsed = bookingSchema.parse(payload);
    const result = await createBookingEvent({
      name: parsed.name,
      email: parsed.email,
      note: parsed.note,
      start: parsed.start,
      timezone: parsed.timezone,
      source: parsed.source,
    });

    if (!result.ok) {
      return jsonResponse(409, {
        ok: false,
        error: result.error || 'Booking failed',
        fallbackUrl: result.fallbackUrl ?? null,
      });
    }

    return jsonResponse(200, {
      ok: true,
      message: 'Slot reserved.',
      reservation: {
        start: result.start,
        end: result.end,
        meetUrl: result.meetUrl ?? null,
        eventUrl: result.eventUrl ?? null,
        timezone: getBookingConfig().timezone,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return jsonResponse(400, { ok: false, error: error.issues[0]?.message || 'Invalid booking payload' });
    }
    if (error instanceof SyntaxError) {
      return jsonResponse(400, { ok: false, error: 'Invalid JSON payload' });
    }
    return jsonResponse(500, { ok: false, error: error instanceof Error ? error.message : 'Booking request failed' });
  }
};
