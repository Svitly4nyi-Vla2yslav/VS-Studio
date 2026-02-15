import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import Home from './pages/HomePage/HomePage';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';
import Info from './pages/Info/Info';
import { useEffect } from 'react';
import Service from './pages/ServicePages/Service';
import ArticleDetail from './components/NewsTips/NewsSection';
import Refrigeration from './pages/Refrigeration/Refrigeration';
import { AnimatePresence } from 'framer-motion';
import Dryer from './pages/Dryer/Dryer';
import DryerLG from './pages/DryerLG/DryerLG';
// Cookie consent banner removed — CCPA opt-out model for US audience
import OvenRepair from './pages/OvenRepair/OvenRepair';
import OvenKitchenAid from './pages/OvenKitchenAid/OvenKitchenAid';
import OvenThermador from './pages/OvenThermador/OvenThermador';
import OvenViking from './pages/OvenViking/OvenViking';
import OvenWolf from './pages/OvenWolf/OvenWolf';
import RefrigeratorGEMonogram from './pages/RefrigeratorGEMonogram/RefrigeratorGEMonogram';
import RefrigeratorKitchenAid from './pages/RefrigeratorKitchenAid/RefrigeratorKitchenAid';
import RefrigeratorSubZero from './pages/RefrigeratorSubZero/RefrigeratorSubZero';
import RefrigeratorThermador from './pages/RefrigeratorThermador/RefrigeratorThermador';
import RefrigeratorViking from './pages/RefrigeratorViking/RefrigeratorViking';
import { trackPageView, trackContactPhone, trackLead } from './components/metaPixel';


declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div style={{ width: '100%', position: 'relative' }}>{children}</div>;
};

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    });
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Consent Mode: granted by default for US audience (CCPA opt-out model)
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.gtag = window.gtag || function() { window.dataLayer.push(arguments as any); };

      window.gtag('consent', 'default', {
        ad_storage: 'granted',
        analytics_storage: 'granted',
        personalization_storage: 'granted',
        functionality_storage: 'granted',
        security_storage: 'granted'
      });
    }
  }, []);

  // PageView на кожну зміну маршруту (антидубль усередині lib)
  useEffect(() => {
    trackPageView();
  }, [location.pathname, location.search]);

  // Cookie consent banner removed — no need to listen for consent changes

  // Клік по tel: → Contact (антидубль усередині lib)
  useEffect(() => {
    const onClick = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const a = target.closest('a[href^="tel:"]') as HTMLAnchorElement | null;
      if (a) trackContactPhone();
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  // Submit форм із класом contact-form → Lead (антидубль усередині lib + локальний guard)
  useEffect(() => {
    const onSubmit = (e: Event) => {
      const f = e.target as HTMLFormElement;
      if (f && f.matches('form.contact-form')) {
        if (!(f as any).__leadTracked) {
          (f as any).__leadTracked = true;
          trackLead();
          setTimeout(() => { (f as any).__leadTracked = false; }, 5000);
        }
      }
    };
    document.addEventListener('submit', onSubmit, true);
    return () => document.removeEventListener('submit', onSubmit, true);
  }, []);

  return (
    <> 
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/' element={<Layout />}>
            <Route
              index
              element={
                <PageWrapper>
                  <Home />
                </PageWrapper>
              }
            />
            <Route
              path='/home'
              element={
                <PageWrapper>
                  <Home />
                </PageWrapper>
              }
            />
            <Route
              path='/service'
              element={
                <PageWrapper>
                  <Service />
                </PageWrapper>
              }
            />
            <Route
              path='/about'
              element={
                <PageWrapper>
                  <AboutUs />
                </PageWrapper>
              }
            />
            <Route path='/tips'>
              <Route
                index
                element={
                  <PageWrapper>
                    <Info />
                  </PageWrapper>
                }
              />
              <Route
                path='refrigerator-maintenance'
                element={
                  <PageWrapper>
                    <ArticleDetail articleId={1} />
                  </PageWrapper>
                }
              />
              <Route
                path='oven-repair-signs'
                element={
                  <PageWrapper>
                    <ArticleDetail articleId={2} />
                  </PageWrapper>
                }
              />
              <Route
                path='laundry-appliance-maintenance'
                element={
                  <PageWrapper>
                    <ArticleDetail articleId={3} />
                  </PageWrapper>
                }
              />
              <Route
                path='dishwasher-drainage'
                element={
                  <PageWrapper>
                    <ArticleDetail articleId={4} />
                  </PageWrapper>
                }
              />
              <Route
                path='repair-vs-replace'
                element={
                  <PageWrapper>
                    <ArticleDetail articleId={5} />
                  </PageWrapper>
                }
              />
              <Route
                path='oem-parts'
                element={
                  <PageWrapper>
                    <ArticleDetail articleId={6} />
                  </PageWrapper>
                }
              />
            </Route>
            <Route
              path='/contact'
              element={
                <PageWrapper>
                  <Contact />
                </PageWrapper>
              }
            />
            <Route
              path='/fridge'
              element={
                <PageWrapper>
                  <Refrigeration />
                </PageWrapper>
              }
            />
            <Route
              path='/dryer'
              element={
                <PageWrapper>
                  <Dryer />
                </PageWrapper>
              }
            />
            <Route
              path='/dryer/lg'
              element={
                <PageWrapper>
                  <DryerLG />
                </PageWrapper>
              }
            />
            <Route
              path='/oven-repair'
              element={
                <PageWrapper>
                  <OvenRepair />
                </PageWrapper>
              }
            />
            <Route
              path='/oven-repair/kitchenaid'
              element={
                <PageWrapper>
                  <OvenKitchenAid />
                </PageWrapper>
              }
            />
            <Route
              path='/oven-repair/thermador'
              element={
                <PageWrapper>
                  <OvenThermador />
                </PageWrapper>
              }
            />
            <Route
              path='/oven-repair/viking'
              element={
                <PageWrapper>
                  <OvenViking />
                </PageWrapper>
              }
            />
            <Route
              path='/oven-repair/wolf'
              element={
                <PageWrapper>
                  <OvenWolf />
                </PageWrapper>
              }
            />
            <Route
              path='/fridge/ge-monogram'
              element={
                <PageWrapper>
                  <RefrigeratorGEMonogram />
                </PageWrapper>
              }
            />
            <Route
              path='/fridge/kitchenaid'
              element={
                <PageWrapper>
                  <RefrigeratorKitchenAid />
                </PageWrapper>
              }
            />
            <Route
              path='/fridge/sub-zero'
              element={
                <PageWrapper>
                  <RefrigeratorSubZero />
                </PageWrapper>
              }
            />
            <Route
              path='/fridge/thermador'
              element={
                <PageWrapper>
                  <RefrigeratorThermador />
                </PageWrapper>
              }
            />
            <Route
              path='/fridge/viking'
              element={
                <PageWrapper>
                  <RefrigeratorViking />
                </PageWrapper>
              }
            />
            <Route
              path='*'
              element={
                <PageWrapper>
                  <Home />
                </PageWrapper>
              }
            />
          </Route>
        </Routes>
        
        {/* Cookie consent banner removed — CCPA opt-out model, no prior consent needed */}
        
      </AnimatePresence>
    </>
  );
};
