import { NavLink } from 'react-router-dom';
import { motion, easeOut } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaArrowRight, FaChartLine, FaImages } from 'react-icons/fa';
import LiveMetric from '../../components/Motion/LiveMetric';
import TerminalType from '../../components/Motion/TerminalType';

const reveal = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const ReferencesPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className='page'>
      <div className='container'>
        <motion.section className='hero' initial='hidden' animate='show' variants={reveal} transition={{ duration: 0.62, ease: easeOut }}>
          <h1><TerminalType text={t('references.h1')} durationMs={4200} storageKey='refs_h1_once' /></h1>
          <p>{t('references.subtitle')}</p>
        </motion.section>

        <section className='section grid-3'>
          <article className='card'><h3><span className='icon-badge'><FaChartLine /></span>{t('references.handwerk')}</h3><p>{t('references.result')} <LiveMetric start={26} min={20} max={41} step={1} prefix='+' suffix='%' /></p></article>
          <article className='card'><h3><span className='icon-badge'><FaChartLine /></span>{t('references.praxis')}</h3><p>{t('references.result')} <LiveMetric start={17} min={12} max={33} step={1} prefix='-' suffix='%' /></p></article>
          <article className='card'><h3><span className='icon-badge'><FaChartLine /></span>{t('references.werkstatt')}</h3><p>{t('references.result')} <LiveMetric start={31} min={22} max={46} step={1} prefix='-' suffix='%' /></p></article>
        </section>

        <section className='section'>
          <h2><TerminalType text={t('references.beforeAfter')} durationMs={2200} storageKey='before_after_once' /></h2>
          <div className='grid-2'>
            <div className='card image-frame'>
              <h3><span className='icon-badge'><FaImages /></span>{t('references.before')}</h3>
              <img src='/images/before-generated.svg' alt={t('references.beforeAlt')} loading='lazy' />
            </div>
            <div className='card image-frame'>
              <h3><span className='icon-badge'><FaImages /></span>{t('references.after')}</h3>
              <img src='/images/after-generated.svg' alt={t('references.afterAlt')} loading='lazy' />
            </div>
          </div>
        </section>

        <section className='section band'>
          <h2><TerminalType text={t('references.cta')} durationMs={2000} storageKey='refs_cta_once' /></h2>
          <div className='btn-row'>
            <NavLink to='/kontakt' className='btn btn-primary'><FaArrowRight /> {t('references.cta')}</NavLink>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ReferencesPage;
