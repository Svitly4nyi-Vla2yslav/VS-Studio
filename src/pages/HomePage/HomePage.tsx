import { useCursorSpotlight } from '../../hooks/useCursorSpotlight';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import ConfiguratorSection from './components/ConfiguratorSection';
import FaqSection from './components/FaqSection';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import PartnersSection from './components/PartnersSection';
import ProcessSection from './components/ProcessSection';
import ProjectsSection from './components/ProjectsSection';
import TrustSection from './components/TrustSection';

const Home: React.FC = () => {
  const reducedMotion = usePrefersReducedMotion();
  useCursorSpotlight(reducedMotion);

  return (
    <div className='page'>
      <div className='container'>
        <HeroSection reducedMotion={reducedMotion} />
        <MarqueeSection />

        <div className='section-divider' />
        <PartnersSection />

        <div className='section-divider' />
        <ProcessSection />

        <div className='section-divider' />
        <ProjectsSection />

        <div className='section-divider' />
        <ConfiguratorSection />

        <div className='section-divider' />
        <TrustSection />
        <FaqSection />
      </div>
    </div>
  );
};

export default Home;
