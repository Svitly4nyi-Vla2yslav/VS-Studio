import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import TerminalType from '../../../components/Motion/TerminalType';
import { fadeInUp, scaleIn, staggerContainer } from '../../../components/Motion/reveal';
import { FaqSectionScope } from './styles/FaqSection.styles';

const FaqSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FaqSectionScope>
      <motion.section
        id='faq'
        className='section'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.18 }}
        variants={fadeInUp}
      >
        <div className='section-header'>
          <h2>
            <TerminalType text={t('home.faqTitle', { defaultValue: 'FAQ' })} durationMs={2200} storageKey='faq_title_v2' />
          </h2>
          <p className='section-description'>
            {t('home.faq.desc', { defaultValue: 'Antworten auf häufige Fragen zu Timing, Kosten, Launch-Prozess und laufender Betreuung.' })}
          </p>
        </div>
        <motion.div className='faq' variants={staggerContainer}>
          <motion.details variants={scaleIn}>
            <summary>{t('home.faq.q1', { defaultValue: 'Wie schnell könnt ihr starten?' })}</summary>
            <div className='faq-answer'>
              <p>{t('home.faq.a1', { defaultValue: 'In der Regel starten wir innerhalb von 3-5 Werktagen. Direkt nach deiner Anfrage bekommst du einen kurzen Plan mit den ersten Schritten.' })}</p>
            </div>
          </motion.details>
          <motion.details variants={scaleIn}>
            <summary>{t('home.faq.q2', { defaultValue: 'Was brauche ich als Kunde am Anfang?' })}</summary>
            <div className='faq-answer'>
              <p>{t('home.faq.a2', { defaultValue: 'Nur Basisinfos zu deinem Angebot, Zielgruppe und Kontaktwegen. Wir helfen dir dann bei Struktur, Texten und Prioritäten.' })}</p>
            </div>
          </motion.details>
          <motion.details variants={scaleIn}>
            <summary>{t('home.faq.q3', { defaultValue: 'Wie läuft die Zusammenarbeit ab?' })}</summary>
            <div className='faq-answer'>
              <p>{t('home.faq.a3', { defaultValue: 'Wir arbeiten in kurzen Etappen: Konzept, Design, Umsetzung, Launch. Du bekommst klare Updates, damit du immer weißt, was als Nächstes passiert.' })}</p>
            </div>
          </motion.details>
          <motion.details variants={scaleIn}>
            <summary>{t('home.faq.q4', { defaultValue: 'Ist das für kleine Unternehmen geeignet?' })}</summary>
            <div className='faq-answer'>
              <p>{t('home.faq.a4', { defaultValue: 'Ja. Unsere Pakete sind bewusst für lokale Betriebe aufgebaut: klare Preise, schneller Start und Fokus auf echte Anfragen statt nur Optik.' })}</p>
            </div>
          </motion.details>
          <motion.details variants={scaleIn}>
            <summary>{t('home.faq.q5', { defaultValue: 'Was passiert nach dem Launch?' })}</summary>
            <div className='faq-answer'>
              <p>{t('home.faq.a5', { defaultValue: 'Nach dem Launch prüfen wir Daten, verbessern Conversion-Punkte und unterstützen dich beim Feinschliff, damit die Seite dauerhaft besser performt.' })}</p>
            </div>
          </motion.details>
        </motion.div>
      </motion.section>
    </FaqSectionScope>
  );
};

export default FaqSection;
