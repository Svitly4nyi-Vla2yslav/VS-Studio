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
          <h2>{t('home.trust.title')}</h2>
          <p className='section-description'>{t('home.trust.desc')}</p>
        </div>
        <motion.div className='grid-2 trust-grid' variants={staggerContainer}>
          {trustDeliverables.map(item => (
            <motion.article className='card' key={item} variants={scaleIn}>
              <h3>{t(`home.trust.deliverables.${item}.title`)}</h3>
              <p className='muted'>{t(`home.trust.deliverables.${item}.text`)}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>
    </TrustSectionScope>
  );
};

export default TrustSection;
