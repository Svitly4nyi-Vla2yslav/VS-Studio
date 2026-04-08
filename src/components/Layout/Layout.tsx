import { useEffect } from 'react';
import { AnimatePresence, easeOut } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import { FloatingAssistantWidget } from '../../features/ai-assistant/components/FloatingAssistantWidget';
import SeoHead from '../../seo/SeoHead';
import CookieConsentBanner from '../CookieConsentBanner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { MainContent, SiteShell } from './styles/Layout.styles';

export const Layout: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <SiteShell>
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
