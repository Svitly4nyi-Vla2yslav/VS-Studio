import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence, easeOut } from 'framer-motion';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CookieConsentBanner from '../CookieConsentBanner';
import { MainContent, SiteShell } from './styles/Layout.styles';

export const Layout: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <SiteShell>
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
      <CookieConsentBanner />
    </SiteShell>
  );
};
