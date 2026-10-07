import { generateAssistantLocalReply } from '../helpers';
import type { AssistantChatRequest, AssistantChatResponse, AssistantLocalReply } from '../types';

// getEndpoints приймає назву Netlify-функції та повертає впорядкований список адрес: локальний dev-proxy і відносний fallback або лише production-шлях.
const getEndpoints = (functionName: string) => {
  const relativeEndpoint = `/.netlify/functions/${functionName}`;

  if (typeof window !== 'undefined' && import.meta.env.DEV) {
    if (window.location.port === '8888') {
      return [relativeEndpoint];
    }

    return [`http://localhost:8888/.netlify/functions/${functionName}`, relativeEndpoint];
  }

  return [relativeEndpoint];
};

// postJson серіалізує payload і послідовно пробує доступні endpoint; мережеві помилки та 404 дозволяють перейти до fallback-адреси.
// Функція повертає лише JSON успішної відповіді, а для іншого content-type чи фінальної помилки кидає Error.
const postJson = async <TResponse>(functionName: string, payload: unknown): Promise<TResponse> => {
  const body = JSON.stringify(payload);
  let lastError: Error | null = null;

  for (const endpoint of getEndpoints(functionName)) {
    let response: Response;

    try {
      response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
      });
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(`Request to ${endpoint} failed`);
      continue;
    }

    if (response.ok) {
      const contentType = response.headers.get('content-type') ?? '';
      if (!contentType.includes('application/json')) {
        lastError = new Error(`Endpoint ${endpoint} did not return JSON`);
        continue;
      }

      return (await response.json()) as TResponse;
    }

    if (response.status === 404) continue;

    const errorText = await response.text();
    throw new Error(errorText || `Request failed with status ${response.status}`);
  }

  throw lastError ?? new Error(`No endpoint available for ${functionName}`);
};

// assistantClient надає два HTTP-контракти: чат і короткоживучий voice-token; обидва делегують transport у postJson.
export const assistantClient = {
  async chat(request: AssistantChatRequest): Promise<AssistantChatResponse> {
    return postJson<AssistantChatResponse>('assistant-chat', request);
  },

  async createVoiceEphemeralToken(language: string) {
    return postJson<{ client_secret?: { value: string; expires_at: number } | null }>('create-openai-ephemeral-token', {
      language,
      capabilities: ['voice'],
    });
  },
};

// buildLocalAssistantFallback перетворює запит на локальну відповідь без мережевого виклику, використовуючи німецьку як мову за замовчуванням.
export const buildLocalAssistantFallback = (request: AssistantChatRequest): AssistantLocalReply =>
  generateAssistantLocalReply({
    messages: request.messages,
    language: request.language ?? 'de',
    leadContext: request.leadContext,
    bookingContext: request.bookingContext,
  });
