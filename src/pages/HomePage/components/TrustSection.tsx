import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { trustDeliverables } from './homePageData';
import { TrustSectionScope } from './styles/TrustSection.styles';
import { fadeInUp, scaleIn, staggerContainer } from '../../../components/Motion/reveal';

const TrustSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <TrustSectionScope>
      <motion.section
        className='section'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className='section-header'>
          <h2>{t('home.trust.title', { defaultValue: 'Was Sie in 14 Tagen bekommen' })}</h2>
          <p className='section-description'>
            {t('home.trust.desc', { defaultValue: 'Konkrete Start-Ergebnisse: eine anfrageorientierte Website, eingerichtete Analytics und ein Plan für weiteres Wachstum.' })}
          </p>
        </div>
        <motion.div className='grid-2 trust-grid' variants={staggerContainer}>
          {trustDeliverables.map(item => (
            <motion.article className='card' key={item} variants={scaleIn}>
              <h3>
                {t(`home.trust.deliverables.${item}.title`, {
                  defaultValue: {
                    d1: 'Prototyp in 48h',
                    d2: 'Website für Anfragen',
                    d3: 'Analytics und Tracking',
                    d4: '30-Tage-Optimierungsplan',
                  }[item],
                })}
              </h3>
              <p className='muted'>
                {t(`home.trust.deliverables.${item}.text`, {
                  defaultValue: {
                    d1: 'Wir zeigen Struktur und CTA vor dem Coding, damit Entscheidungen planbar bleiben.',
                    d2: 'Formular, Anruf, Messenger und mobile Version für schnelle Kontaktaufnahme.',
                    d3: 'GA4 plus Events, damit sichtbar wird, wo Anfragen entstehen.',
                    d4: 'Klare nächste Schritte zur Conversion-Steigerung nach Launch.',
                  }[item],
                })}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>
    </TrustSectionScope>
  );
};

export default TrustSection;
