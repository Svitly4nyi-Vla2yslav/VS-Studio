import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import TerminalType from '../../../components/Motion/TerminalType';
import { fadeInUp, scaleIn, staggerContainer } from '../../../components/Motion/reveal';
import { homeFaq } from '../../../seo/seo';
import { FaqSectionScope } from './styles/FaqSection.styles';

const FaqSection: React.FC = () => {
  const { t } = useTranslation();

  const faqItems = homeFaq.map((item, index) => ({
    question: t(`home.faq.q${index + 1}`, { defaultValue: item.question }),
    answer: t(`home.faq.a${index + 1}`, { defaultValue: item.answer }),
  }));

  const quickLinks = [
    { to: '/services', label: t('header.services', { defaultValue: 'Services' }) },
    { to: '/preise', label: t('header.preise', { defaultValue: 'Preise' }) },
    { to: '/referenzen', label: t('header.referenzen', { defaultValue: 'Referenzen' }) },
    { to: '/ueber-uns', label: t('header.ueberUns', { defaultValue: 'Über uns' }) },
    { to: '/kontakt', label: t('header.kontakt', { defaultValue: 'Kontakt' }) },
  ];

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
          {faqItems.map(item => (
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
            <h3>{t('home.faq.linksTitle', { defaultValue: 'Wichtige Seiten' })}</h3>
            <p>
              {t('home.faq.linksDesc', {
                defaultValue:
                  'Direkte Einstiege fuer Leistungen, Preise, Referenzen, Agenturprofil und Projektanfrage.',
              })}
            </p>
          </div>
          <nav
            className='faq-links-grid'
            aria-label={t('home.faq.linksAria', { defaultValue: 'Wichtige Seiten' })}
          >
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
