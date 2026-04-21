import { z } from 'zod';
import { buildContextBlock, coerceLanguage, detectLanguage, detectIntent, generateLocalResponse } from './_lib/assistant';
import { HandlerEvent, HandlerResponse, jsonResponse, parseJsonBody } from './_lib/http';
import type { AssistantChatRequest, AssistantChatResponse, AssistantLanguage, AssistantMessage } from '../../src/features/ai-assistant/types';

const messageSchema = z.object({
  id: z.string().optional(),
  role: z.enum(['assistant', 'user', 'system']),
  content: z.string().min(1),
  createdAt: z.string().optional(),
  language: z.enum(['de', 'en', 'uk']).optional(),
});

const requestSchema = z.object({
  messages: z.array(messageSchema).min(1),
  language: z.enum(['de', 'en', 'uk']).optional(),
  leadContext: z
    .object({
      businessType: z.string().optional(),
      requestedService: z.string().optional(),
      need: z.string().optional(),
    })
    .optional(),
  bookingContext: z
    .object({
      name: z.string().optional(),
      email: z.string().optional(),
      phone: z.string().optional(),
      businessType: z.string().optional(),
      requestedService: z.string().optional(),
      preferredDate: z.string().optional(),
      preferredTime: z.string().optional(),
      timezone: z.string().optional(),
      notes: z.string().optional(),
    })
    .optional(),
});

const responseToText = (payload: unknown) => {
  const data = payload as { output_text?: string; output?: Array<{ content?: Array<{ text?: string }> }> };
  if (typeof data.output_text === 'string' && data.output_text.trim()) return data.output_text.trim();
  return (
    data.output
      ?.flatMap(item => item.content ?? [])
      .map(item => item.text?.trim())
      .filter(Boolean)
      .join('\n')
      .trim() ?? ''
  );
};

const buildCapturedDataBlock = (request: Pick<AssistantChatRequest, 'leadContext' | 'bookingContext'>) => {
  const leadDetails = [
    request.leadContext?.businessType ? `Lead business type: ${request.leadContext.businessType}` : null,
    request.leadContext?.requestedService ? `Lead requested service: ${request.leadContext.requestedService}` : null,
    request.leadContext?.need ? `Lead need: ${request.leadContext.need}` : null,
  ].filter(Boolean);

  const bookingDetails = [
    request.bookingContext?.name ? `Booking name: ${request.bookingContext.name}` : null,
    request.bookingContext?.email ? `Booking email: ${request.bookingContext.email}` : null,
    request.bookingContext?.phone ? `Booking phone: ${request.bookingContext.phone}` : null,
    request.bookingContext?.businessType ? `Booking business type: ${request.bookingContext.businessType}` : null,
    request.bookingContext?.requestedService ? `Booking requested service: ${request.bookingContext.requestedService}` : null,
    request.bookingContext?.preferredDate ? `Booking preferred date: ${request.bookingContext.preferredDate}` : null,
    request.bookingContext?.preferredTime ? `Booking preferred time: ${request.bookingContext.preferredTime}` : null,
    request.bookingContext?.timezone ? `Booking timezone: ${request.bookingContext.timezone}` : null,
    request.bookingContext?.notes ? `Booking notes: ${request.bookingContext.notes}` : null,
  ].filter(Boolean);

  if (leadDetails.length === 0 && bookingDetails.length === 0) {
    return '';
  }

  return `

Captured enquiry data:
${[...leadDetails, ...bookingDetails].map(detail => `- ${detail}`).join('\n')}
`;
};

const createSystemPrompt = (language: AssistantLanguage, contextBlock: string, capturedDataBlock: string) => `
You are the on-site AI assistant for VS Web Studio.
Core positioning:
- Present the offer as an AI assistant for enquiry handling, lead qualification, and consultation booking across Instagram, Facebook Messenger, WhatsApp, Telegram, and website chat.
- Primary supported platforms: Instagram DM, Facebook Messenger, WhatsApp Business, Telegram, website chat.
- Secondary integrations: forms, email routing, CRM, Google Sheets, and Google Calendar.
Tone requirements:
- Calm, professional, not robotic, not hypey, not overly salesy.
- In German, sound especially calm and professional.
- Never invent company facts.
- If a user asks a general question, answer it helpfully like a normal ChatGPT-style assistant.
- Use the VS Web Studio business context only when the question is about the company, services, pricing, timelines, or booking.
- For simple implementation questions such as maps, calendars, embeds, widgets, forms, or common website integrations, answer directly and practically before suggesting a handoff.
- For questions about social media bots, comments, direct messages, Messenger, Instagram, WhatsApp, Telegram, or similar automation, answer directly and explain practical limits when platform rules matter.
- Do not imply that all social platforms allow the same automation. Mention WhatsApp 24-hour window and template limits, Telegram user-initiated contact, and official Meta limitations when relevant.
- For general knowledge questions, you may answer directly from general knowledge instead of forcing a lead or handoff.
- If confidence is low or knowledge is missing on company-specific details, say so clearly and offer human follow-up.
- Only provide rough mini-estimates when enough project detail is present.
- For high-risk topics such as legal, medical, tax, or security-sensitive advice, avoid overclaiming and recommend professional review when needed.

Language:
- Reply in ${language}.

Business knowledge:
${contextBlock}
${capturedDataBlock}
`;

const getAiNextStep = (intent: ReturnType<typeof detectIntent>) => {
  if (intent === 'booking') return 'booking' as const;
  if (intent === 'lead_capture') return 'lead' as const;
  if (intent === 'handoff') return 'handoff' as const;
  return 'none' as const;
};

const callOpenAI = async (
  messages: AssistantMessage[],
  language: AssistantLanguage,
  request: Pick<AssistantChatRequest, 'leadContext' | 'bookingContext'>
) => {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return null;

  const model = process.env.OPENAI_ASSISTANT_MODEL || process.env.OPENAI_MODEL || 'gpt-5-mini';
  const payload = {
    model,
    input: [
      {
        role: 'system',
        content: [
          {
            type: 'input_text',
            text: createSystemPrompt(language, buildContextBlock(language), buildCapturedDataBlock(request)),
          },
        ],
      },
      ...messages.map(message => ({
        role: message.role === 'system' ? 'assistant' : message.role,
        content: [{ type: 'input_text', text: message.content }],
      })),
    ],
  };

  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`OpenAI request failed with status ${response.status}`);
  }

  return responseToText(await response.json());
};

export const handler = async (event: HandlerEvent): Promise<HandlerResponse> => {
  if (event.httpMethod === 'OPTIONS') return jsonResponse(200, { ok: true });
  if (event.httpMethod !== 'POST') return jsonResponse(405, { ok: false, error: 'Method not allowed' });

  try {
    const parsed = requestSchema.parse(parseJsonBody<AssistantChatRequest>(event.body));
    const lastUserMessage = [...parsed.messages].reverse().find(message => message.role === 'user');
    const detectedLanguage = detectLanguage(lastUserMessage?.content ?? '', coerceLanguage(parsed.language));
    const fallback = generateLocalResponse(parsed.messages as AssistantMessage[], detectedLanguage, {
      leadContext: parsed.leadContext,
      bookingContext: parsed.bookingContext,
    });
    let answer = fallback.answer;

    try {
      const aiAnswer = await callOpenAI(parsed.messages as AssistantMessage[], detectedLanguage, parsed);
      if (aiAnswer) answer = aiAnswer;
    } catch (error) {
      console.error('assistant-chat falling back to local mode.', error);
    }

    const intent = detectIntent(lastUserMessage?.content ?? '');
    const usedFallback = answer === fallback.answer;
    const response: AssistantChatResponse = usedFallback
      ? {
          ...fallback,
          answer,
          detectedLanguage,
          detectedIntent: fallback.detectedIntent === 'handoff' ? 'handoff' : intent,
          fallbackMode: true,
        }
      : {
          answer,
          detectedLanguage,
          detectedIntent: intent,
          confidence: Math.max(fallback.confidence, 0.88),
          nextStep: getAiNextStep(intent),
          leadPrompt: intent === 'lead_capture' ? fallback.leadPrompt : undefined,
          bookingPrompt: intent === 'booking' ? fallback.bookingPrompt : undefined,
          fallbackMode: false,
        };

    return jsonResponse(200, response);
  } catch (error) {
    console.error('assistant-chat failed.', error);
    return jsonResponse(400, { ok: false, error: 'Invalid assistant request payload' });
  }
};
