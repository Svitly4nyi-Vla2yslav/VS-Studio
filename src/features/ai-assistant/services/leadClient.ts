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

    for (const endpoint of resolveLeadEndpoints()) {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
      });

      if (response.ok) {
        return response.json();
      }

      if (response.status !== 404) {
        const errorText = await response.text();
        throw new Error(errorText || `Lead request failed with status ${response.status}`);
      }
    }

    throw new Error('Lead endpoint unavailable');
  },
};
