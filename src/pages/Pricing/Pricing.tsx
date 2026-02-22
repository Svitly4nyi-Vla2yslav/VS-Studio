import { NavLink } from 'react-router-dom';
import { motion, easeOut } from 'framer-motion';
import { FaArrowRight, FaEuroSign, FaChartLine, FaRobot, FaShareAlt, FaBullhorn } from 'react-icons/fa';
import TerminalType from '../../components/Motion/TerminalType';
import LiveMetric from '../../components/Motion/LiveMetric';

const reveal = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const PricingPage: React.FC = () => {
  return (
    <div className='page'>
      <div className='container'>
        <motion.section className='hero' initial='hidden' animate='show' variants={reveal} transition={{ duration: 0.62, ease: easeOut }}>
          <h1><TerminalType text='Preise ohne Überraschungen.' durationMs={4400} storageKey='preise_h1_once' /></h1>
          <p>Pakete mit klaren Inhalten, Timing und Support-Level.</p>
        </motion.section>

        <section className='section grid-3'>
          <article className='package'><h3><span className='icon-badge'><FaEuroSign /></span>Starter</h3><p className='price'>ab €1.490</p><p className='muted'>Aktive Projekte: <LiveMetric start={3} min={1} max={9} step={1} /></p></article>
          <article className='package'><h3><span className='icon-badge'><FaChartLine /></span>Business</h3><p className='price'>ab €2.990</p><p className='muted'>Aktive Projekte: <LiveMetric start={6} min={3} max={14} step={1} /></p></article>
          <article className='package'><h3><span className='icon-badge'><FaBullhorn /></span>Growth</h3><p className='price'>ab €5.490</p><p className='muted'>Aktive Projekte: <LiveMetric start={8} min={4} max={19} step={1} /></p></article>
        </section>

        <section className='section'>
          <h2><TerminalType text='Leistungstabelle' durationMs={2200} storageKey='table_once' /></h2>
          <div className='table-like'>
            <div className='table-row'><span><FaRobot /> AI Features</span><span>Starter / Business / Growth</span></div>
            <div className='table-row'><span><FaShareAlt /> Social Integration</span><span>Business / Growth</span></div>
            <div className='table-row'><span><FaBullhorn /> Social Ads Setup</span><span>Growth</span></div>
          </div>
        </section>

        <section className='section band'>
          <h2><TerminalType text='Nächster Schritt' durationMs={1800} storageKey='next_price_once' /></h2>
          <div className='btn-row'>
            <NavLink to='/kontakt' className='btn btn-primary'><FaArrowRight /> Projekt anfragen</NavLink>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PricingPage;
