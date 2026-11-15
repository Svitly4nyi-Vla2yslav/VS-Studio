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

/** Читає cookie_consent_v2 з localStorage; відсутній або пошкоджений JSON безпечно повертає як null. */
const readConsent = (): ConsentState | null => {
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    return raw ? (JSON.parse(raw) as ConsentState) : null;
  } catch {
    return null;
  }
};

/**
 * Повертає true лише для production-збірки на підтверджених доменах VS Web Studio.
 * Preview та довільні hostname навмисно не надсилають аналітику.
 */
const canSendProductionAnalytics = () =>
  import.meta.env.PROD &&
  import.meta.env.VITE_APP_ENV !== 'preview' &&
  ['vs-web-studio.de', 'www.vs-web-studio.de'].includes(window.location.hostname);

/** Повертає поточний statistics-consent без кешування, щоб врахувати останній вибір користувача. */
const analyticsAllowed = () => Boolean(readConsent()?.statistics);

/**
 * Ініціалізує dataLayer і локальну gtag-обгортку, якщо їх ще не створив зовнішній скрипт.
 * Побічний ефект обмежений глобальними полями window; мережевий скрипт тут не додається.
 */
const ensureGtag = () => {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || ((...args: unknown[]) => window.dataLayer.push(args));
};

/**
 * Зчитує підтримувані UTM-параметри з поточного URL, обрізає кожне значення до 200 символів
 * і тримає їх у пам’яті до згоди. За наявності statistics-consent також оновлює sessionStorage.
 */
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

/**
 * Повертає UTM-атрибуцію лише за наявності statistics-consent.
 * Спочатку читає sessionStorage, а пошкоджений JSON безпечно замінює значенням із пам’яті.
 */
export const getUtmAttribution = (): UtmAttribution => {
  if (!analyticsAllowed()) return {};
  try {
    const stored = window.sessionStorage.getItem(ATTRIBUTION_KEY);
    return stored ? (JSON.parse(stored) as UtmAttribution) : pendingAttribution;
  } catch {
    return pendingAttribution;
  }
};

/**
 * Фіксує UTM, перевіряє consent, measurement ID і production-домен, після чого один раз
 * налаштовує gtag та додає GA4-скрипт. Повертає true лише коли аналітика готова до надсилання.
 */
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

/**
 * Реєструє eventId у sessionStorage для дедуплікації та зберігає щонайбільше 50 останніх значень.
 * За недоступного або пошкодженого сховища працює fail-open і дозволяє подію.
 */
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

/**
 * За потреби відсіює повторний eventId, перевіряє consent і надсилає подію лише у дозволеному production.
 * У non-production debug-режимі журналює payload; результат показує, чи подію прийнято до обробки.
 */
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

/**
 * Формує абсолютний page_location і не дублює останній успішно надісланий перегляд.
 * Кеш маршруту оновлюється лише тоді, коли trackEvent повернув true.
 */
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

/**
 * Синхронізує gtag consent після зміни вибору користувача.
 * Надання згоди повторно фіксує UTM та ініціалізує аналітику; відкликання надсилає denied, якщо gtag уже активний.
 */
export const handleConsentChange = () => {
  if (analyticsAllowed()) {
    captureUtmAttribution();
    initializeAnalytics();
  } else if (initialized) {
    window.gtag?.('consent', 'update', { analytics_storage: 'denied', ad_storage: 'denied' });
  }
};

