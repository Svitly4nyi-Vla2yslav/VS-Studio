import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
// import { MaintenanceGate } from './components/MaintenanceGate';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';
import Home from './pages/HomePage/HomePage';
import BlogPage from './pages/Info/Info';
import AGB from './pages/Legal/AGB';
import Cookies from './pages/Legal/Cookies';
import Datenschutz from './pages/Legal/Datenschutz';
import Impressum from './pages/Legal/Impressum';
import HandwerkerLanding from './pages/Niche/Handwerker';
import PraxisLanding from './pages/Niche/Praxis';
import WerkstattLanding from './pages/Niche/Werkstatt';
import NotFound from './pages/NotFound/NotFound';
import PricingPage from './pages/Pricing/Pricing';
import ReferencesPage from './pages/References/References';
import ServicesPage from './pages/ServicePages/Service';
import LocalLandingPage from './pages/SeoLanding/SeoLanding';
import SeoHead from './seo/SeoHead';
import './site.css';

const AIAssistantDemoPage = lazy(() => import('./pages/AIAssistantDemo'));
const PortfolioPage = lazy(() => import('./portfolio/pages/PortfolioPage'));

export const App: React.FC = () => {
  return (
    // <MaintenanceGate>
    <Routes>
      <Route
        path='/portfolio'
        element={
          <Suspense fallback={null}>
            <SeoHead />
            <PortfolioPage />
          </Suspense>
        }
      />
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='services' element={<ServicesPage />} />
        <Route path='webdesign-hildesheim' element={<LocalLandingPage pageId='webdesign-hildesheim' />} />
        <Route path='website-erstellen-lassen' element={<LocalLandingPage pageId='website-erstellen-lassen' />} />
        <Route path='seo-hildesheim' element={<LocalLandingPage pageId='seo-hildesheim' />} />
        <Route path='lead-systeme' element={<LocalLandingPage pageId='lead-systeme' />} />
        <Route path='websites-fuer-handwerker' element={<LocalLandingPage pageId='websites-fuer-handwerker' />} />
        <Route path='preise' element={<PricingPage />} />
        <Route path='faq' element={<LocalLandingPage pageId='faq' />} />
        <Route path='referenzen' element={<ReferencesPage />} />
        <Route path='ueber-uns' element={<AboutUs />} />
        <Route path='kontakt' element={<Contact />} />
        <Route path='blog' element={<BlogPage />} />
        <Route
          path='ki-assistent'
          element={
            <Suspense fallback={null}>
              <AIAssistantDemoPage />
            </Suspense>
          }
        />

        <Route path='handwerker' element={<HandwerkerLanding />} />
        <Route path='praxis' element={<PraxisLanding />} />
        <Route path='werkstatt' element={<WerkstattLanding />} />

        <Route path='impressum' element={<Impressum />} />
        <Route path='datenschutz' element={<Datenschutz />} />
        <Route path='agb' element={<AGB />} />
        <Route path='cookies' element={<Cookies />} />

        <Route path='home' element={<Navigate to='/' replace />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
    // </MaintenanceGate>
  );
};
