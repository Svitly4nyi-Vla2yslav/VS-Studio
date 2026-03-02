import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Configurator from './Configurator';
import { ConfiguratorSectionScope } from './styles/ConfiguratorSection.styles';
import { fadeInUp, scaleIn } from '../../../components/Motion/reveal';

const ConfiguratorSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <ConfiguratorSectionScope>
      <motion.section
        className='section configurator'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.18 }}
        variants={fadeInUp}
      >
        <div className='section-header'>
          <h2>{t('home.configurator.title')}</h2>
          <p className='section-description'>{t('home.configurator.desc')}</p>
        </div>
        <motion.div variants={scaleIn}>
          <Configurator />
        </motion.div>
      </motion.section>
    </ConfiguratorSectionScope>
  );
};

export default ConfiguratorSection;
