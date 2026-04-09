import { z } from 'zod';
import { createKeyValueEmailHtml, sendNotificationEmail, sendTelegramPlaceholder } from './_lib/email';
import { HandlerEvent, HandlerResponse, getHeader, jsonResponse, parseJsonBody } from './_lib/http';
import { persistRecord } from './_lib/storage';
import type { AssistantLeadPayload } from '../../src/features/ai-assistant/types';

const requestSchema = z
  .object({
    name: z.string().min(1),
    email: z.string().email().optional(),
    phone: z.string().min(5).optional(),
    businessType: z.string().min(1),
    requestedService: z.string().min(1),
    need: z.string().min(1),
    language: z.enum(['de', 'en', 'uk']),
    source: z.literal('assistant'),
  })
  .refine(payload => Boolean(payload.email || payload.phone), {
    message: 'Either email or phone is required',
    path: ['email'],
  });

export const handler = async (event: HandlerEvent): Promise<HandlerResponse> => {
  if (event.httpMethod === 'OPTIONS') return jsonResponse(200, { ok: true });
  if (event.httpMethod !== 'POST') return jsonResponse(405, { ok: false, error: 'Method not allowed' });

  try {
    const payload = requestSchema.parse(parseJsonBody<AssistantLeadPayload>(event.body));
    const submittedAt = new Date().toISOString();
    const ipAddress = getHeader(event.headers, 'x-nf-client-connection-ip') || getHeader(event.headers, 'x-forwarded-for');
    const record = {
      ...payload,
      submittedAt,
      ipAddress,
      status: 'new',
    };

    const storage = await persistRecord('assistantLeads', 'assistant_leads', record);
    if (!storage.stored) {
      return jsonResponse(500, { ok: false, error: 'Lead storage is not configured.' });
    }

    const subject = 'Neue AI-Assistant-Anfrage – VS Web Studio';
    const text = [
      subject,
      '',
      `Name: ${payload.name}`,
      `E-Mail: ${payload.email ?? '-'}`,
      `Telefon: ${payload.phone ?? '-'}`,
      `Unternehmensart: ${payload.businessType}`,
      `Leistung: ${payload.requestedService}`,
      `Bedarf: ${payload.need}`,
      `Sprache: ${payload.language}`,
      `Zeitpunkt: ${submittedAt}`,
      `Quelle: ${payload.source}`,
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
        Bedarf: payload.need,
        Sprache: payload.language,
        Zeitpunkt: submittedAt,
        Quelle: payload.source,
      }),
    });

    await sendTelegramPlaceholder(text);

    return jsonResponse(200, { ok: true, storageProvider: storage.provider, id: storage.id ?? null });
  } catch (error) {
    console.error('create-lead failed.', error);
    if (error instanceof z.ZodError) {
      return jsonResponse(400, {
        ok: false,
        error: error.issues[0]?.message || 'Invalid lead payload',
        issues: error.issues.map(issue => ({
          path: issue.path.join('.'),
          message: issue.message,
        })),
      });
    }

    return jsonResponse(500, {
      ok: false,
      error: error instanceof Error ? error.message : 'Lead request failed',
    });
  }
};
