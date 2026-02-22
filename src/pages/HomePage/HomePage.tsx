import { NavLink } from 'react-router-dom';
import { motion, useScroll, useTransform, backOut } from 'framer-motion';
import {
  FaArrowRight,
  FaBolt,
  FaChartLine,
  FaEuroSign,
  FaHandsHelping,
  FaHammer,
  FaHeartbeat,
  FaIndustry,
  FaMapMarkerAlt,
  FaRobot,
  FaShareAlt,
  FaBullhorn,
} from 'react-icons/fa';
import LiveMetric from '../../components/Motion/LiveMetric';
import TerminalType from '../../components/Motion/TerminalType';
import HeroVideo from '../../components/Motion/HeroVideo';

const revealUp = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0 },
};

const Home: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const mediaY = useTransform(scrollYProgress, [0, 0.45], [0, -56]);

  return (
    <div className='page'>
      <div className='container'>
        <motion.section className='hero' initial='hidden' animate='show' variants={revealUp} transition={{ duration: 0.8, ease: backOut }}>
          <h1>
            <TerminalType
              text='Websites, die Anfragen bringen statt nur gut aussehen.'
              durationMs={6200}
              storageKey='hero_terminal_once'
            />
          </h1>
          <p>
            Klare Positionierung, schnelle Umsetzung und transparente Pakete für lokale
            Dienstleister in Deutschland.
          </p>
          <div className='btn-row'>
            <NavLink to='/kontakt' className='btn btn-primary'><FaArrowRight /> Projekt anfragen</NavLink>
            <NavLink to='/preise' className='btn btn-secondary'><FaEuroSign /> Preise ansehen</NavLink>
            <a href='#faq' className='btn btn-secondary'><FaArrowRight /> Zum FAQ</a>
          </div>
          <motion.div className='hero-media image-frame hero-video-wrap' style={{ y: mediaY }}>
            <HeroVideo />
          </motion.div>
        </motion.section>

        <section className='section badges'>
          <article className='card'><span className='icon-badge'><FaBolt /></span>Schnell geladen</article>
          <article className='card'><span className='icon-badge'><FaChartLine /></span>Mehr Anfragen</article>
          <article className='card'><span className='icon-badge'><FaEuroSign /></span>Klare Preise</article>
          <article className='card'><span className='icon-badge'><FaHandsHelping /></span>Persönliche Hilfe</article>
        </section>

        <section className='section'>
          <h2><TerminalType text='Für wen' durationMs={3200} storageKey='fuerwen_once' /></h2>
          <div className='grid-4'>
            <article className='card'><span className='icon-badge'><FaHammer /></span>Handwerker</article>
            <article className='card'><span className='icon-badge'><FaHeartbeat /></span>Praxen</article>
            <article className='card'><span className='icon-badge'><FaIndustry /></span>Werkstätten</article>
            <article className='card'><span className='icon-badge'><FaMapMarkerAlt /></span>Lokale Services</article>
          </div>
        </section>

        <section className='section'>
          <h2><TerminalType text='AI + Social Integration' durationMs={3600} storageKey='ai_social_home_once' /></h2>
          <div className='grid-3'>
            <article className='card'>
              <h3><span className='icon-badge'><FaRobot /></span>AI im Web</h3>
              <p className='muted'>Chatbots, FAQ-Antworten, Lead-Qualifizierung und Automationen direkt auf der Website.</p>
            </article>
            <article className='card'>
              <h3><span className='icon-badge'><FaShareAlt /></span>Social Integration</h3>
              <p className='muted'>Instagram/Meta/LinkedIn Feeds, DM-CTA und Cross-Channel Lead-Routing.</p>
            </article>
            <article className='card'>
              <h3><span className='icon-badge'><FaBullhorn /></span>Social Ads</h3>
              <p className='muted'>Targeting + Creatives + Tracking mit live CPL/CPA Monitoring.</p>
            </article>
          </div>
        </section>

        <section className='section'>
          <h2><TerminalType text='Trust mit konkreten Ergebnissen' durationMs={3600} storageKey='trust_once' /></h2>
          <div className='grid-3'>
            <article className='card'><h3><LiveMetric start={33} min={30} max={59} step={1} prefix='+' suffix='%' /></h3><p className='muted'>mehr Kontaktanfragen in 60 Tagen.</p></article>
            <article className='card'><h3><LiveMetric start={19} min={15} max={45} step={1} prefix='-' suffix='%' /></h3><p className='muted'>geringere Cost-per-Lead nach Tracking-Fix.</p></article>
            <article className='card'><h3><LiveMetric start={1.6} min={1.2} max={3.1} step={0.1} decimals={1} suffix='s' /></h3><p className='muted'>durchschnittliche Ladezeit auf Mobil.</p></article>
          </div>
        </section>

        <section id='faq' className='section'>
          <h2><TerminalType text='FAQ' durationMs={1800} storageKey='faq_title_once' /></h2>
          <div className='faq'>
            <details><summary>Wie schnell könnt ihr starten?</summary><div className='faq-answer'><p>In der Regel innerhalb von 3-5 Werktagen.</p></div></details>
            <details><summary>Arbeitet ihr mit Festpreisen?</summary><div className='faq-answer'><p>Ja, mit klaren Paketen und optionalen Add-ons.</p></div></details>
            <details><summary>Kann ich bestehende Inhalte nutzen?</summary><div className='faq-answer'><p>Ja, wir übernehmen und optimieren vorhandenes Material.</p></div></details>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
