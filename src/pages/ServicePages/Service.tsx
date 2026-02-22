import { NavLink } from 'react-router-dom';
import { motion, easeOut } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaArrowRight, FaRobot, FaShareAlt, FaBullhorn, FaClipboardCheck, FaCode } from 'react-icons/fa';
import TerminalType from '../../components/Motion/TerminalType';

const reveal = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className='page'>
      <div className='container'>
        <motion.section className='hero' initial='hidden' animate='show' variants={reveal} transition={{ duration: 0.62, ease: easeOut }}>
          <h1><TerminalType text={t('services.h1')} durationMs={5200} storageKey='services_h1_once' /></h1>
          <p>{t('services.subtitle')}</p>
        </motion.section>

        <motion.section className='section grid-2' initial='hidden' whileInView='show' viewport={{ once: true, amount: 0.2 }} transition={{ staggerChildren: 0.1 }}>
          <motion.article className='card' variants={reveal}><h3><span className='icon-badge'><FaCode /></span>{t('services.cards.websites.title')}</h3><p className='muted'>{t('services.cards.websites.desc')}</p></motion.article>
          <motion.article className='card' variants={reveal}><h3><span className='icon-badge'><FaRobot /></span>{t('services.cards.webAppsAi.title')}</h3><p className='muted'>{t('services.cards.webAppsAi.desc')}</p></motion.article>
          <motion.article className='card' variants={reveal}><h3><span className='icon-badge'><FaBullhorn /></span>{t('services.cards.ads.title')}</h3><p className='muted'>{t('services.cards.ads.desc')}</p></motion.article>
          <motion.article className='card' variants={reveal}><h3><span className='icon-badge'><FaShareAlt /></span>{t('services.cards.social.title')}</h3><p className='muted'>{t('services.cards.social.desc')}</p></motion.article>
        </motion.section>

        <section className='section'>
          <h2><TerminalType text={t('services.deliverablesTitle')} durationMs={2600} storageKey='deliverables_once' /></h2>
          <ul className='checklist'>
            <li><FaClipboardCheck /> {t('services.deliverables.i1')}</li>
            <li><FaClipboardCheck /> {t('services.deliverables.i2')}</li>
            <li><FaClipboardCheck /> {t('services.deliverables.i3')}</li>
            <li><FaClipboardCheck /> {t('services.deliverables.i4')}</li>
          </ul>
        </section>

        <section className='section'>
          <h2><TerminalType text={t('services.aiSocialAdsTitle')} durationMs={2800} storageKey='ai_social_services_once' /></h2>
          <div className='grid-3'>
            <article className='card'><h3><span className='icon-badge'><FaRobot /></span>{t('services.aiCards.ai.title')}</h3><p className='muted'>{t('services.aiCards.ai.desc')}</p></article>
            <article className='card'><h3><span className='icon-badge'><FaShareAlt /></span>{t('services.aiCards.social.title')}</h3><p className='muted'>{t('services.aiCards.social.desc')}</p></article>
            <article className='card'><h3><span className='icon-badge'><FaBullhorn /></span>{t('services.aiCards.ads.title')}</h3><p className='muted'>{t('services.aiCards.ads.desc')}</p></article>
          </div>
        </section>

        <section className='section band'>
          <h2><TerminalType text={t('services.ctaTitle')} durationMs={2200} storageKey='angebot_once' /></h2>
          <div className='btn-row'>
            <NavLink to='/kontakt' className='btn btn-primary'><FaArrowRight /> {t('services.ctaButton')}</NavLink>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;
