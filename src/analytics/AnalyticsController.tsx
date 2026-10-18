import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { captureUtmAttribution, handleConsentChange, initializeAnalytics, trackEvent, trackPageView } from './analytics';

const getLinkEvent = (href: string) => {
  const normalized = href.toLowerCase();
  if (normalized.startsWith('tel:')) return 'click_phone' as const;
  if (normalized.startsWith('mailto:')) return 'click_email' as const;
  if (normalized.includes('wa.me/') || normalized.includes('whatsapp.com/')) return 'click_whatsapp' as const;
  return null;
};

export const AnalyticsController = () => {
  const location = useLocation();

  useEffect(() => {
    captureUtmAttribution();
    initializeAnalytics();

    const onConsent = () => {
      handleConsentChange();
      trackPageView(`${window.location.pathname}${window.location.search}`);
    };
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

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => trackPageView(`${location.pathname}${location.search}`));
    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.search]);

  return null;
};

