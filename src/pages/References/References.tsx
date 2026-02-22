import { NavLink } from 'react-router-dom';
import { motion, easeOut } from 'framer-motion';
import { FaArrowRight, FaChartLine, FaImages } from 'react-icons/fa';
import LiveMetric from '../../components/Motion/LiveMetric';
import TerminalType from '../../components/Motion/TerminalType';

const reveal = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const ReferencesPage: React.FC = () => {
  return (
    <div className='page'>
      <div className='container'>
        <motion.section className='hero' initial='hidden' animate='show' variants={reveal} transition={{ duration: 0.62, ease: easeOut }}>
          <h1><TerminalType text='Referenzen mit klaren Ergebnissen.' durationMs={4200} storageKey='refs_h1_once' /></h1>
          <p>Kein Marketing-Sprech: nur Aufgabe, Lösung, messbarer Output.</p>
        </motion.section>

        <section className='section grid-3'>
          <article className='card'><h3><span className='icon-badge'><FaChartLine /></span>Handwerk</h3><p>Resultat: <LiveMetric start={26} min={20} max={41} step={1} prefix='+' suffix='%' /></p></article>
          <article className='card'><h3><span className='icon-badge'><FaChartLine /></span>Praxis</h3><p>Resultat: <LiveMetric start={17} min={12} max={33} step={1} prefix='-' suffix='%' /></p></article>
          <article className='card'><h3><span className='icon-badge'><FaChartLine /></span>Werkstatt</h3><p>Resultat: <LiveMetric start={31} min={22} max={46} step={1} prefix='-' suffix='%' /></p></article>
        </section>

        <section className='section'>
          <h2><TerminalType text='Before / After' durationMs={2200} storageKey='before_after_once' /></h2>
          <div className='grid-2'>
            <div className='card image-frame'>
              <h3><span className='icon-badge'><FaImages /></span>Before</h3>
              <img src='/images/before-generated.svg' alt='Before case layout' loading='lazy' />
            </div>
            <div className='card image-frame'>
              <h3><span className='icon-badge'><FaImages /></span>After</h3>
              <img src='/images/after-generated.svg' alt='After case layout' loading='lazy' />
            </div>
          </div>
        </section>

        <section className='section band'>
          <h2><TerminalType text='Ähnliches Projekt anfragen' durationMs={2000} storageKey='refs_cta_once' /></h2>
          <div className='btn-row'>
            <NavLink to='/kontakt' className='btn btn-primary'><FaArrowRight /> Ähnliches Projekt anfragen</NavLink>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ReferencesPage;
