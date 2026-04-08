import { generateAssistantLocalReply } from '../helpers';
import type { AssistantChatRequest, AssistantChatResponse, AssistantLocalReply } from '../types';

const getEndpoints = (functionName: string) => {
  if (typeof window !== 'undefined' && import.meta.env.DEV) {
    if (window.location.port === '8888') {
      return [`/.netlify/functions/${functionName}`];
    }

    if (import.meta.env.VITE_ASSISTANT_FORCE_BACKEND === 'true') {
      return [`http://localhost:8888/.netlify/functions/${functionName}`, `/.netlify/functions/${functionName}`];
    }

    return [];
  }

  return [`/.netlify/functions/${functionName}`];
};

const postJson = async <TResponse>(functionName: string, payload: unknown): Promise<TResponse> => {
  const body = JSON.stringify(payload);

  for (const endpoint of getEndpoints(functionName)) {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
    });

    if (response.ok) {
      return (await response.json()) as TResponse;
    }

    if (response.status !== 404) {
      const errorText = await response.text();
      throw new Error(errorText || `Request failed with status ${response.status}`);
    }
  }

  throw new Error(`No endpoint available for ${functionName}`);
};

export const assistantClient = {
  async chat(request: AssistantChatRequest): Promise<AssistantChatResponse> {
    if (getEndpoints('assistant-chat').length === 0) {
      throw new Error('ASSISTANT_BACKEND_UNAVAILABLE_IN_VITE_DEV');
    }

    return postJson<AssistantChatResponse>('assistant-chat', request);
  },

  async createVoiceEphemeralToken(language: string) {
    return postJson<{ client_secret?: { value: string; expires_at: number } | null }>('create-openai-ephemeral-token', {
      language,
      capabilities: ['voice'],
    });
  },
};

export const buildLocalAssistantFallback = (request: AssistantChatRequest): AssistantLocalReply =>
  generateAssistantLocalReply({
    messages: request.messages,
    language: request.language ?? 'de',
    leadContext: request.leadContext,
  });
