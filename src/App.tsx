import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import Home from './pages/HomePage/HomePage';
import ServicesPage from './pages/ServicePages/Service';
import PricingPage from './pages/Pricing/Pricing';
import ReferencesPage from './pages/References/References';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';
import BlogPage from './pages/Info/Info';
import Impressum from './pages/Legal/Impressum';
import Datenschutz from './pages/Legal/Datenschutz';
import AGB from './pages/Legal/AGB';
import Cookies from './pages/Legal/Cookies';
import HandwerkerLanding from './pages/Niche/Handwerker';
import PraxisLanding from './pages/Niche/Praxis';
import WerkstattLanding from './pages/Niche/Werkstatt';
import NotFound from './pages/NotFound/NotFound';
import './site.css';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='services' element={<ServicesPage />} />
        <Route path='preise' element={<PricingPage />} />
        <Route path='referenzen' element={<ReferencesPage />} />
        <Route path='ueber-uns' element={<AboutUs />} />
        <Route path='kontakt' element={<Contact />} />
        <Route path='blog' element={<BlogPage />} />

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
  );
};
