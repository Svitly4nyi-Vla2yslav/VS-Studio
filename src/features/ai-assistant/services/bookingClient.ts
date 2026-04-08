import type { AssistantBookingPayload } from '../types';

const resolveBookingEndpoints = () => {
  if (import.meta.env.DEV && window.location.port === '5173') {
    return ['http://localhost:8888/.netlify/functions/booking-request', '/.netlify/functions/booking-request'];
  }

  return ['/.netlify/functions/booking-request'];
};

export const bookingClient = {
  async createBookingRequest(payload: AssistantBookingPayload) {
    const body = JSON.stringify(payload);

    for (const endpoint of resolveBookingEndpoints()) {
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
        throw new Error(errorText || `Booking request failed with status ${response.status}`);
      }
    }

    throw new Error('Booking endpoint unavailable');
  },
};
