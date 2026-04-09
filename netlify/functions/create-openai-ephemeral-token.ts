import { z } from 'zod';
import { coerceLanguage } from './_lib/assistant';
import { HandlerEvent, HandlerResponse, jsonResponse, parseJsonBody } from './_lib/http';

const requestSchema = z.object({
  language: z.string().optional(),
  capabilities: z.array(z.string()).optional(),
});

export const handler = async (event: HandlerEvent): Promise<HandlerResponse> => {
  if (event.httpMethod === 'OPTIONS') return jsonResponse(200, { ok: true });
  if (event.httpMethod !== 'POST') return jsonResponse(405, { ok: false, error: 'Method not allowed' });

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return jsonResponse(501, { ok: false, error: 'Voice mode is not configured yet.' });
  }

  try {
    const parsed = requestSchema.parse(parseJsonBody(event.body));
    const language = coerceLanguage(parsed.language);
    const model = process.env.OPENAI_REALTIME_MODEL || 'gpt-realtime';

    // TODO v1.1: add client-side recorder, waveform UI, and voice-message upload state.
    // TODO v1.1: align turn detection, voice selection, and multilingual speech settings with production QA.
    const response = await fetch('https://api.openai.com/v1/realtime/client_secrets', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        session: {
          type: 'realtime',
          model,
          instructions: `Voice session for the VS Web Studio assistant. Reply in ${language}.`,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`Realtime client secret request failed with status ${response.status}`);
    }

    const payload = (await response.json()) as {
      value?: string;
      expires_at?: number;
      client_secret?: { value?: string; expires_at?: number } | null;
      session?: unknown;
    };

    const normalizedPayload = payload.client_secret
      ? payload
      : {
          ...payload,
          client_secret:
            payload.value && payload.expires_at
              ? { value: payload.value, expires_at: payload.expires_at }
              : null,
        };

    return jsonResponse(200, normalizedPayload);
  } catch (error) {
    console.error('Failed to create OpenAI ephemeral token.', error);
    return jsonResponse(500, { ok: false, error: 'Unable to create voice session token.' });
  }
};
