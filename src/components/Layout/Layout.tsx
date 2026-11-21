import { useEffect } from 'react';
import { AnimatePresence, easeOut } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import { AnalyticsController } from '../../analytics/AnalyticsController';
import { FloatingAssistantWidget } from '../../features/ai-assistant/components/FloatingAssistantWidget';
import SeoHead from '../../seo/SeoHead';
import CookieConsentBanner from '../CookieConsentBanner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { MainContent, SiteShell } from './styles/Layout.styles';

/**
 * Формує спільну оболонку сторінок: аналітику, SEO, навігацію, активний дочірній маршрут і службові віджети.
 * Аргументів не приймає; `pathname` одночасно задає ключ анімації переходу та повертає вікно нагору.
 * Побічний ефект прокрутки виконується після зміни шляху, мережеві запити компонент безпосередньо не робить.
 */
export const Layout: React.FC = () => {
  const location = useLocation();

  // Query і hash на незмінному pathname не перезапускають ефект; cleanup не потрібен.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <SiteShell>
      <AnalyticsController />
      <SeoHead />
      <Header />
      <AnimatePresence mode='wait'>
        <MainContent
          key={location.pathname}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.32, ease: easeOut }}
        >
          <Outlet />
        </MainContent>
      </AnimatePresence>
      <Footer />
      <FloatingAssistantWidget />
      <CookieConsentBanner />
    </SiteShell>
  );
};
