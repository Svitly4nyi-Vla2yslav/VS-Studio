import type { AssistantBookingPayload } from '../types';

const resolveBookingEndpoints = () => {
  if (import.meta.env.DEV && window.location.port === '5173') {
    return [
      'http://localhost:8888/.netlify/functions/booking-request',
      '/.netlify/functions/booking-request',
    ];
  }

  return ['/.netlify/functions/booking-request'];
};

export const bookingClient = {
  async createBookingRequest(payload: AssistantBookingPayload) {
    const body = JSON.stringify(payload);
    let lastNetworkError: Error | null = null;

    for (const endpoint of resolveBookingEndpoints()) {
      let response: Response;
      try {
        response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body,
        });
      } catch (error) {
        lastNetworkError =
          error instanceof Error ? error : new Error('Failed to fetch booking endpoint');
        continue;
      }

      if (response.ok) {
        return response.json();
      }

      if (response.status !== 404) {
        const errorText = await response.text();
        try {
          const parsed = JSON.parse(errorText) as { error?: string };
          throw new Error(parsed.error || `Booking request failed with status ${response.status}`);
        } catch {
          throw new Error(errorText || `Booking request failed with status ${response.status}`);
        }
      }
    }

    throw lastNetworkError ?? new Error('Booking endpoint unavailable');
  },
};
