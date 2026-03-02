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
            <TerminalType text={t('home.faqTitle')} durationMs={2200} storageKey='faq_title_v2' />
          </h2>
          <p className='section-description'>{t('home.faq.desc')}</p>
        </div>
        <motion.div className='faq' variants={staggerContainer}>
          <motion.details variants={scaleIn}>
            <summary>{t('home.faq.q1')}</summary>
            <div className='faq-answer'>
              <p>{t('home.faq.a1')}</p>
            </div>
          </motion.details>
          <motion.details variants={scaleIn}>
            <summary>{t('home.faq.q2')}</summary>
            <div className='faq-answer'>
              <p>{t('home.faq.a2')}</p>
            </div>
          </motion.details>
          <motion.details variants={scaleIn}>
            <summary>{t('home.faq.q3')}</summary>
            <div className='faq-answer'>
              <p>{t('home.faq.a3')}</p>
            </div>
          </motion.details>
          <motion.details variants={scaleIn}>
            <summary>{t('home.faq.q4')}</summary>
            <div className='faq-answer'>
              <p>{t('home.faq.a4')}</p>
            </div>
          </motion.details>
          <motion.details variants={scaleIn}>
            <summary>{t('home.faq.q5')}</summary>
            <div className='faq-answer'>
              <p>{t('home.faq.a5')}</p>
            </div>
          </motion.details>
        </motion.div>
      </motion.section>
    </FaqSectionScope>
  );
};

export default FaqSection;
