import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
// import { MaintenanceGate } from './components/MaintenanceGate';
import Home from './pages/HomePage/HomePage';
import './site.css';

const AboutUs = lazy(() => import('./pages/AboutUs/AboutUs'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const BlogPage = lazy(() => import('./pages/Info/Info'));
const AGB = lazy(() => import('./pages/Legal/AGB'));
const Cookies = lazy(() => import('./pages/Legal/Cookies'));
const Datenschutz = lazy(() => import('./pages/Legal/Datenschutz'));
const Impressum = lazy(() => import('./pages/Legal/Impressum'));
const HandwerkerLanding = lazy(() => import('./pages/Niche/Handwerker'));
const PraxisLanding = lazy(() => import('./pages/Niche/Praxis'));
const WerkstattLanding = lazy(() => import('./pages/Niche/Werkstatt'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const PricingPage = lazy(() => import('./pages/Pricing/Pricing'));
const ReferencesPage = lazy(() => import('./pages/References/References'));
const ServicesPage = lazy(() => import('./pages/ServicePages/Service'));
const LocalLandingPage = lazy(() => import('./pages/SeoLanding/SeoLanding'));
const AIAssistantDemoPage = lazy(() => import('./pages/AIAssistantDemo'));
const PortfolioPage = lazy(() => import('./portfolio/pages/PortfolioPage'));
const EmmaAvatarDev = lazy(() => import('./pages/EmmaAvatarDev/EmmaAvatarDev'));
const StarfieldPreview = lazy(() => import('./pages/StarfieldPreview/StarfieldPreview'));
const Danke = lazy(() => import('./pages/Danke/Danke'));

const withSuspense = (element: React.ReactNode) => <Suspense fallback={null}>{element}</Suspense>;

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
        {import.meta.env.DEV ? (
          <>
            <Route path='dev/emma-avatar' element={withSuspense(<EmmaAvatarDev />)} />
            <Route path='dev/starfield' element={withSuspense(<StarfieldPreview />)} />
          </>
        ) : null}
        <Route index element={<Home />} />
        <Route path='services' element={withSuspense(<ServicesPage />)} />
        <Route path='webdesign-hildesheim' element={withSuspense(<LocalLandingPage pageId='webdesign-hildesheim' />)} />
        <Route path='website-erstellen-lassen' element={withSuspense(<LocalLandingPage pageId='website-erstellen-lassen' />)} />
        <Route path='seo-hildesheim' element={withSuspense(<LocalLandingPage pageId='seo-hildesheim' />)} />
        <Route path='lead-systeme' element={withSuspense(<LocalLandingPage pageId='lead-systeme' />)} />
        <Route path='websites-fuer-handwerker' element={withSuspense(<LocalLandingPage pageId='websites-fuer-handwerker' />)} />
        <Route path='preise' element={withSuspense(<PricingPage />)} />
        <Route path='faq' element={withSuspense(<LocalLandingPage pageId='faq' />)} />
        <Route path='referenzen' element={withSuspense(<ReferencesPage />)} />
        <Route path='portfolio' element={withSuspense(<PortfolioPage />)} />
        <Route path='ueber-uns' element={withSuspense(<AboutUs />)} />
        <Route path='kontakt' element={withSuspense(<Contact />)} />
        <Route path='danke' element={withSuspense(<Danke />)} />
        <Route path='blog' element={withSuspense(<BlogPage />)} />
        <Route
          path='ki-assistent'
          element={
            <Suspense fallback={null}>
              <AIAssistantDemoPage />
            </Suspense>
          }
        />

        <Route path='handwerker' element={withSuspense(<HandwerkerLanding />)} />
        <Route path='praxis' element={withSuspense(<PraxisLanding />)} />
        <Route path='werkstatt' element={withSuspense(<WerkstattLanding />)} />

        <Route path='impressum' element={withSuspense(<Impressum />)} />
        <Route path='datenschutz' element={withSuspense(<Datenschutz />)} />
        <Route path='agb' element={withSuspense(<AGB />)} />
        <Route path='cookies' element={withSuspense(<Cookies />)} />

        <Route path='home' element={<Navigate to='/' replace />} />
        <Route path='*' element={withSuspense(<NotFound />)} />
      </Route>
    </Routes>
    // </MaintenanceGate>
  );
};

