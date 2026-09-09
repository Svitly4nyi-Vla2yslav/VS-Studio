import { z } from 'zod';
import { jsonResponse, HandlerEvent } from './_lib/http';
import { buildAvailabilityResponse, getBookingConfig } from './_lib/googleCalendar';

const querySchema = z.object({
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
});

export const handler = async (event: HandlerEvent) => {
  if (event.httpMethod === 'OPTIONS') {
    return jsonResponse(200, { ok: true });
  }

  if (event.httpMethod !== 'GET') {
    return jsonResponse(405, { ok: false, error: 'Method not allowed' });
  }

  try {
    const query = event.queryStringParameters
      ? new URLSearchParams(event.queryStringParameters)
      : new URLSearchParams(event.rawQuery || '');
    const parsed = querySchema.parse({ date: query.get('date') });
    const response = await buildAvailabilityResponse(parsed.date);
    return jsonResponse(200, {
      ok: response.ok,
      date: parsed.date,
      timezone: getBookingConfig().timezone,
      durationMinutes: getBookingConfig().durationMinutes,
      slots: 'slots' in response ? response.slots : [],
      fallbackUrl: response.fallbackUrl ?? null,
      error: response.error ?? null,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return jsonResponse(400, { ok: false, error: error.issues[0]?.message || 'Invalid request' });
    }
    return jsonResponse(500, { ok: false, error: error instanceof Error ? error.message : 'Availability request failed' });
  }
};
