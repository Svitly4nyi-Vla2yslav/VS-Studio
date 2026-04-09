import type { AssistantLeadPayload } from '../types';

const resolveLeadEndpoints = () => {
  if (import.meta.env.DEV && window.location.port === '5173') {
    return ['http://localhost:8888/.netlify/functions/create-lead', '/.netlify/functions/create-lead'];
  }

  return ['/.netlify/functions/create-lead'];
};

export const leadClient = {
  async createLead(payload: AssistantLeadPayload) {
    const body = JSON.stringify(payload);
    let lastNetworkError: Error | null = null;

    for (const endpoint of resolveLeadEndpoints()) {
      let response: Response;
      try {
        response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body,
        });
      } catch (error) {
        lastNetworkError = error instanceof Error ? error : new Error('Failed to fetch lead endpoint');
        continue;
      }

      if (response.ok) {
        return response.json();
      }

      if (response.status !== 404) {
        const errorText = await response.text();
        try {
          const parsed = JSON.parse(errorText) as { error?: string };
          throw new Error(parsed.error || `Lead request failed with status ${response.status}`);
        } catch {
          throw new Error(errorText || `Lead request failed with status ${response.status}`);
        }
      }
    }

    throw lastNetworkError ?? new Error('Lead endpoint unavailable');
  },
};
