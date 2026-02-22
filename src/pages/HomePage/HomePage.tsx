import { NavLink } from 'react-router-dom';
import { easeOut, motion, useInView, useScroll, useTransform, backOut } from 'framer-motion';
import {
  FaArrowRight,
  FaEuroSign,
  FaRobot,
  FaShareAlt,
  FaBullhorn,
  FaBolt,
  FaChartLine,
  FaHandsHelping,
  FaHammer,
  FaHeartbeat,
  FaIndustry,
  FaMapMarkerAlt,
  FaGlobe,
  FaCode,
} from 'react-icons/fa';
import { useRef } from 'react';
import LiveMetric from '../../components/Motion/LiveMetric';
import TerminalType from '../../components/Motion/TerminalType';
import HeroVideo from '../../components/Motion/HeroVideo';
import Partners from '../../components/PartnersBanner/PartnersBanner';

const revealUp = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0 },
};

const Home: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const contentY = useTransform(scrollYProgress, [0, 0.45], [0, -24]);
  const trustRef = useRef<HTMLElement | null>(null);
  const trustInView = useInView(trustRef, { once: true, amount: 0.4 });

  return (
    <div className='page'>
      <div className='container'>
        <motion.section
          className='hero hero-with-video'
          initial='hidden'
          animate='show'
          variants={revealUp}
          transition={{ duration: 0.85, ease: backOut }}
        >
          <HeroVideo />

          <motion.div
            className='hero-content'
            style={{ y: contentY }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easeOut }}
          >
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
              <NavLink to='/kontakt' className='btn btn-primary'>
                <FaArrowRight /> Projekt anfragen
              </NavLink>
              <NavLink to='/preise' className='btn btn-secondary'>
                <FaEuroSign /> Preise ansehen
              </NavLink>
              <a href='#faq' className='btn btn-secondary'>
                <FaArrowRight /> Zum FAQ
              </a>
            </div>
          </motion.div>
        </motion.section>

        <section className='section'>
          <Partners
            rows={[
              {
                title: 'Highlights, Zielgruppen und Leistungen',
                direction: 'right',
                speed: 58,
                items: [
                  { group: 'Highlights', label: 'Schnell geladen', description: 'Seite lädt in Sekunden', icon: <FaBolt />, iconColor: '#FFD25F', iconBg: 'rgba(255,210,95,.2)' },
                  { group: 'Highlights', label: 'Mehr Anfragen', description: 'Mehr Kontakte über Formulare', icon: <FaChartLine />, iconColor: '#58D68D', iconBg: 'rgba(88,214,141,.2)' },
                  { group: 'Highlights', label: 'Klare Preise', description: 'Du kennst Kosten im Voraus', icon: <FaEuroSign />, iconColor: '#5DADE2', iconBg: 'rgba(93,173,226,.2)' },
                  { group: 'Highlights', label: 'Persönliche Hilfe', description: 'Direkter Support ohne Warteschlange', icon: <FaHandsHelping />, iconColor: '#F5B7B1', iconBg: 'rgba(245,183,177,.2)' },
                  { group: 'Für wen', label: 'Handwerker', description: 'Anfragen pro Stadt und Leistung', icon: <FaHammer />, iconColor: '#F8C471', iconBg: 'rgba(248,196,113,.2)' },
                  { group: 'Für wen', label: 'Praxen', description: 'Patienten finden schneller Termine', icon: <FaHeartbeat />, iconColor: '#EC7063', iconBg: 'rgba(236,112,99,.2)' },
                  { group: 'Für wen', label: 'Werkstätten', description: 'Klare Service-Seiten mit Tracking', icon: <FaIndustry />, iconColor: '#AF7AC5', iconBg: 'rgba(175,122,197,.2)' },
                  { group: 'Für wen', label: 'Lokale Services', description: 'Mehr Sichtbarkeit vor Ort', icon: <FaMapMarkerAlt />, iconColor: '#E74C3C', iconBg: 'rgba(231,76,60,.2)' },
                  { group: 'Leistungen', label: 'Websites', description: 'Modern, schnell, mobil optimiert', icon: <FaGlobe />, iconColor: '#48C9B0', iconBg: 'rgba(72,201,176,.2)' },
                  { group: 'Leistungen', label: 'Web-Apps', description: 'Tools für Team und Kunden', icon: <FaCode />, iconColor: '#85C1E9', iconBg: 'rgba(133,193,233,.2)' },
                  { group: 'Leistungen', label: 'AI Integration', description: 'Chatbot für Fragen und Leads', icon: <FaRobot />, iconColor: '#F7DC6F', iconBg: 'rgba(247,220,111,.2)' },
                  { group: 'Leistungen', label: 'Social Media', description: 'Website + Instagram/Meta verbunden', icon: <FaShareAlt />, iconColor: '#5DADE2', iconBg: 'rgba(93,173,226,.2)' },
                  { group: 'Leistungen', label: 'Social Ads', description: 'Gezielte Werbung mit messbaren Ergebnissen', icon: <FaBullhorn />, iconColor: '#F1948A', iconBg: 'rgba(241,148,138,.2)' },
                ],
              },
            ]}
          />
        </section>

        <section className='section' ref={trustRef}>
          <h2>
            {trustInView ? (
              <TerminalType text='Trust mit konkreten Ergebnissen' durationMs={6200} storageKey='trust_title_v3' />
            ) : (
              'Trust mit konkreten Ergebnissen'
            )}
          </h2>
          <div className='grid-3'>
            <article className='card'>
              <h3>
                <LiveMetric start={21} max={38} target={38} step={1} prefix='+' suffix='%' storageKey='trust_metric_1' />
              </h3>
              <p className='muted'>mehr Kontaktanfragen in 60 Tagen.</p>
            </article>
            <article className='card'>
              <h3>
                <LiveMetric start={12} max={41} target={41} step={1} prefix='-' suffix='%' storageKey='trust_metric_2' />
              </h3>
              <p className='muted'>geringere Cost-per-Lead nach Tracking-Fix.</p>
            </article>
            <article className='card'>
              <h3>
                <LiveMetric start={2.9} max={2.1} target={2.1} step={0.1} decimals={1} suffix='s' storageKey='trust_metric_3' />
              </h3>
              <p className='muted'>durchschnittliche Ladezeit auf Mobil.</p>
            </article>
          </div>
        </section>

        <section id='faq' className='section'>
          <h2>
            <TerminalType text='FAQ' durationMs={2200} storageKey='faq_title_v2' />
          </h2>
          <div className='faq'>
            <details>
              <summary>Wie schnell könnt ihr starten?</summary>
              <div className='faq-answer'>
                <p>In der Regel starten wir innerhalb von 3-5 Werktagen. Direkt nach deiner Anfrage bekommst du einen kurzen Plan mit den ersten Schritten.</p>
              </div>
            </details>
            <details>
              <summary>Was brauche ich als Kunde am Anfang?</summary>
              <div className='faq-answer'>
                <p>Nur Basisinfos zu deinem Angebot, Zielgruppe und Kontaktwegen. Wir helfen dir dann bei Struktur, Texten und Prioritäten.</p>
              </div>
            </details>
            <details>
              <summary>Wie läuft die Zusammenarbeit ab?</summary>
              <div className='faq-answer'>
                <p>Wir arbeiten in kurzen Etappen: Konzept, Design, Umsetzung, Launch. Du bekommst klare Updates, damit du immer weißt, was als Nächstes passiert.</p>
              </div>
            </details>
            <details>
              <summary>Ist das für kleine Unternehmen geeignet?</summary>
              <div className='faq-answer'>
                <p>Ja. Unsere Pakete sind bewusst für lokale Betriebe aufgebaut: klare Preise, schneller Start und Fokus auf echte Anfragen statt nur Optik.</p>
              </div>
            </details>
            <details>
              <summary>Was passiert nach dem Launch?</summary>
              <div className='faq-answer'>
                <p>Nach dem Launch prüfen wir Daten, verbessern Conversion-Punkte und unterstützen dich beim Feinschliff, damit die Seite dauerhaft besser performt.</p>
              </div>
            </details>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
