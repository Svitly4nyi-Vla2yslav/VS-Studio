import { NavLink } from 'react-router-dom';
import { motion, easeOut } from 'framer-motion';
import { FaArrowRight, FaRobot, FaShareAlt, FaBullhorn, FaClipboardCheck, FaCode } from 'react-icons/fa';
import TerminalType from '../../components/Motion/TerminalType';

const reveal = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const ServicesPage: React.FC = () => {
  return (
    <div className='page'>
      <div className='container'>
        <motion.section className='hero' initial='hidden' animate='show' variants={reveal} transition={{ duration: 0.62, ease: easeOut }}>
          <h1><TerminalType text='Services mit klarem Scope, Ergebnis und Zeitplan.' durationMs={5200} storageKey='services_h1_once' /></h1>
          <p>Wir bauen nicht nur Seiten, sondern einen funktionierenden Lead-Prozess.</p>
        </motion.section>

        <motion.section className='section grid-2' initial='hidden' whileInView='show' viewport={{ once: true, amount: 0.2 }} transition={{ staggerChildren: 0.1 }}>
          <motion.article className='card' variants={reveal}><h3><span className='icon-badge'><FaCode /></span>Websites</h3><p className='muted'>Inhalt: Positionierung, UX, technische Umsetzung, Tracking.</p></motion.article>
          <motion.article className='card' variants={reveal}><h3><span className='icon-badge'><FaRobot /></span>Web-Apps & AI</h3><p className='muted'>Inhalt: interne Workflows, AI-Assistenten, Formulare, Prozesse.</p></motion.article>
          <motion.article className='card' variants={reveal}><h3><span className='icon-badge'><FaBullhorn /></span>Ads & Auswertung</h3><p className='muted'>Kampagnenaufbau, Creatives, Conversion-Tracking.</p></motion.article>
          <motion.article className='card' variants={reveal}><h3><span className='icon-badge'><FaShareAlt /></span>Social Integration</h3><p className='muted'>Plattform-Integration, DM-Flows, Retargeting.</p></motion.article>
        </motion.section>

        <section className='section'>
          <h2><TerminalType text='Deliverables' durationMs={2600} storageKey='deliverables_once' /></h2>
          <ul className='checklist'>
            <li><FaClipboardCheck /> Strategie-Call + Scope-Dokument</li>
            <li><FaClipboardCheck /> Design in responsiven Breakpoints</li>
            <li><FaClipboardCheck /> Technische Umsetzung + Performance</li>
            <li><FaClipboardCheck /> Formulare, Tracking, Analytics Dashboard</li>
          </ul>
        </section>

        <section className='section'>
          <h2><TerminalType text='AI, Social, Werbung' durationMs={2800} storageKey='ai_social_services_once' /></h2>
          <div className='grid-3'>
            <article className='card'><h3><span className='icon-badge'><FaRobot /></span>KI-Integration</h3><p className='muted'>Chatbots, automatische Antworten, Lead-Priorisierung.</p></article>
            <article className='card'><h3><span className='icon-badge'><FaShareAlt /></span>Social Media</h3><p className='muted'>Content-Module, Channel-Verknüpfung, Kontaktpfade.</p></article>
            <article className='card'><h3><span className='icon-badge'><FaBullhorn /></span>Social Ads</h3><p className='muted'>Meta/TikTok/LinkedIn Kampagnen mit Tracking.</p></article>
          </div>
        </section>

        <section className='section band'>
          <h2><TerminalType text='Angebot erhalten' durationMs={2200} storageKey='angebot_once' /></h2>
          <div className='btn-row'>
            <NavLink to='/kontakt' className='btn btn-primary'><FaArrowRight /> Angebot erhalten</NavLink>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;
