import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { captureUtmAttribution, handleConsentChange, initializeAnalytics, trackEvent, trackPageView } from './analytics';

/** Перетворює абсолютний або протокольний href на підтримувану подію контакту; для інших посилань повертає `null`. */
const getLinkEvent = (href: string) => {
  const normalized = href.toLowerCase();
  if (normalized.startsWith('tel:')) return 'click_phone' as const;
  if (normalized.startsWith('mailto:')) return 'click_email' as const;
  if (normalized.includes('wa.me/') || normalized.includes('whatsapp.com/')) return 'click_whatsapp' as const;
  return null;
};

/**
 * Координує аналітику без власної розмітки: одноразово захоплює UTM-атрибуцію,
 * підписується на зміну cookie-згоди й делеговані кліки, а при зміні маршруту
 * реєструє перегляд сторінки. Слухачі та запланований animation frame очищаються.
 */
export const AnalyticsController = () => {
  const location = useLocation();

  useEffect(() => {
    captureUtmAttribution();
    initializeAnalytics();

    // Після зміни згоди повторно застосовує налаштування аналітики й фіксує поточний маршрут.
    const onConsent = () => {
      handleConsentChange();
      trackPageView(`${window.location.pathname}${window.location.search}`);
    };
    // Делегований слухач знаходить найближче посилання і враховує лише телефон, email або WhatsApp.
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href]');
      if (!link) return;
      const eventName = getLinkEvent(link.href);
      if (eventName) trackEvent(eventName, { page_location: window.location.href });
    };

    window.addEventListener('cookie-consent-changed', onConsent);
    document.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('cookie-consent-changed', onConsent);
      document.removeEventListener('click', onClick);
    };
  }, []);

  // Відкладає page_view до наступного кадру, щоб маршрут уже відповідав оновленому DOM.
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => trackPageView(`${location.pathname}${location.search}`));
    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.search]);

  return null;
};

