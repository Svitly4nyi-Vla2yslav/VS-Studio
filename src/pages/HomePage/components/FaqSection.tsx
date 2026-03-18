import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import TerminalType from '../../../components/Motion/TerminalType';
import { fadeInUp, scaleIn, staggerContainer } from '../../../components/Motion/reveal';
import { homeFaq } from '../../../seo/seo';
import { FaqSectionScope } from './styles/FaqSection.styles';

const quickLinks = [
  { to: '/services', label: 'Services' },
  { to: '/preise', label: 'Preise' },
  { to: '/referenzen', label: 'Referenzen' },
  { to: '/ueber-uns', label: 'Ueber uns' },
  { to: '/kontakt', label: 'Kontakt' },
];

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
            <TerminalType
              text={t('home.faqTitle', { defaultValue: 'FAQ' })}
              durationMs={2200}
              storageKey='faq_title_v2'
            />
          </h2>
          <p className='section-description'>
            {t('home.faq.desc', {
              defaultValue:
                'Antworten auf haeufige Fragen zu Timing, Kosten, Launch-Prozess und laufender Betreuung.',
            })}
          </p>
        </div>

        <motion.div className='faq' variants={staggerContainer}>
          {homeFaq.map(item => (
            <motion.details key={item.question} variants={scaleIn}>
              <summary>{item.question}</summary>
              <div className='faq-answer'>
                <p>{item.answer}</p>
              </div>
            </motion.details>
          ))}
        </motion.div>

        <motion.div className='faq-links-card' variants={fadeInUp}>
          <div className='faq-links-header'>
            <h3>Wichtige Seiten</h3>
            <p>
              Direkte Einstiege für Leistungen, Preise, Referenzen, Agenturprofil
              und Projektanfrage.
            </p>
          </div>
          <nav className='faq-links-grid' aria-label='Wichtige Seiten'>
            {quickLinks.map(link => (
              <Link key={link.to} to={link.to} className='faq-link-pill'>
                {link.label}
              </Link>
            ))}
          </nav>
        </motion.div>
      </motion.section>
    </FaqSectionScope>
  );
};

export default FaqSection;
