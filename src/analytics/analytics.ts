export type AnalyticsEventName =
  | 'page_view'
  | 'click_phone'
  | 'click_email'
  | 'click_whatsapp'
  | 'form_start'
  | 'generate_lead'
  | 'assistant_opened'
  | 'assistant_lead';

export type UtmAttribution = Partial<Record<'utm_source' | 'utm_medium' | 'utm_campaign' | 'utm_content' | 'utm_term', string>>;

type ConsentState = { essential: true; statistics: boolean; marketing: boolean };
type Gtag = (command: 'js' | 'config' | 'event' | 'consent', target: string | Date, params?: Record<string, unknown>) => void;

const CONSENT_KEY = 'cookie_consent_v2';
const ATTRIBUTION_KEY = 'vs_utm_attribution';
const EVENT_IDS_KEY = 'vs_analytics_event_ids';
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const;
const measurementId = import.meta.env.VITE_GA4_MEASUREMENT_ID || import.meta.env.VITE_FIREBASE_MEASUREMENT_ID;
const debugMode = import.meta.env.VITE_GA4_DEBUG === 'true';
let initialized = false;
let lastPageView = '';
let pendingAttribution: UtmAttribution = {};

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: Gtag;
  }
}

const readConsent = (): ConsentState | null => {
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    return raw ? (JSON.parse(raw) as ConsentState) : null;
  } catch {
    return null;
  }
};

const canSendProductionAnalytics = () =>
  import.meta.env.PROD &&
  import.meta.env.VITE_APP_ENV !== 'preview' &&
  ['vs-web-studio.de', 'www.vs-web-studio.de'].includes(window.location.hostname);

const analyticsAllowed = () => Boolean(readConsent()?.statistics);

const ensureGtag = () => {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || ((...args: unknown[]) => window.dataLayer.push(args));
};

export const captureUtmAttribution = () => {
  const params = new URLSearchParams(window.location.search);
  const captured = Object.fromEntries(
    UTM_KEYS.flatMap(key => {
      const value = params.get(key)?.trim().slice(0, 200);
      return value ? [[key, value]] : [];
    })
  ) as UtmAttribution;

  if (Object.keys(captured).length) pendingAttribution = captured;
  if (analyticsAllowed() && Object.keys(pendingAttribution).length) {
    window.sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(pendingAttribution));
  }
};

export const getUtmAttribution = (): UtmAttribution => {
  if (!analyticsAllowed()) return {};
  try {
    const stored = window.sessionStorage.getItem(ATTRIBUTION_KEY);
    return stored ? (JSON.parse(stored) as UtmAttribution) : pendingAttribution;
  } catch {
    return pendingAttribution;
  }
};

export const initializeAnalytics = () => {
  captureUtmAttribution();
  if (initialized || !measurementId || !analyticsAllowed() || !canSendProductionAnalytics()) return false;

  ensureGtag();
  window.gtag?.('consent', 'update', { analytics_storage: 'granted', ad_storage: 'denied' });
  window.gtag?.('js', new Date());
  window.gtag?.('config', measurementId, { send_page_view: false, debug_mode: debugMode });

  if (!document.querySelector(`script[data-ga4-id="${measurementId}"]`)) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    script.dataset.ga4Id = measurementId;
    document.head.appendChild(script);
  }

  initialized = true;
  return true;
};

const rememberEventId = (eventId: string) => {
  try {
    const current = JSON.parse(window.sessionStorage.getItem(EVENT_IDS_KEY) || '[]') as string[];
    if (current.includes(eventId)) return false;
    window.sessionStorage.setItem(EVENT_IDS_KEY, JSON.stringify([...current.slice(-49), eventId]));
    return true;
  } catch {
    return true;
  }
};

export const trackEvent = (
  name: AnalyticsEventName,
  params: Record<string, string | number | boolean> = {},
  eventId?: string
) => {
  if (eventId && !rememberEventId(eventId)) return false;
  if (!analyticsAllowed()) return false;
  if (!canSendProductionAnalytics()) {
    if (import.meta.env.DEV || debugMode) console.info('[analytics debug]', name, params);
    return true;
  }
  if (!initializeAnalytics()) return false;

  window.gtag?.('event', name, {
    ...params,
    ...(eventId ? { event_id: eventId } : {}),
  });
  return true;
};

export const trackPageView = (path: string) => {
  const pageLocation = new URL(path, window.location.origin).toString();
  if (pageLocation === lastPageView) return false;
  const sent = trackEvent('page_view', {
    page_location: pageLocation,
    page_title: document.title,
  });
  if (sent) lastPageView = pageLocation;
  return sent;
};

export const handleConsentChange = () => {
  if (analyticsAllowed()) {
    captureUtmAttribution();
    initializeAnalytics();
  } else if (initialized) {
    window.gtag?.('consent', 'update', { analytics_storage: 'denied', ad_storage: 'denied' });
  }
};

