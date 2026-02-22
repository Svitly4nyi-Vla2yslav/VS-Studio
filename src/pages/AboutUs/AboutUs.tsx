import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaArrowRight, FaUsers, FaRobot, FaBullhorn } from 'react-icons/fa';
import TerminalType from '../../components/Motion/TerminalType';

const AboutUs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className='page'>
      <div className='container'>
        <section className='hero'>
          <h1><TerminalType text={t('about.h1')} durationMs={2200} storageKey='about_h1_once' /></h1>
          <p>{t('about.subtitle')}</p>
        </section>

        <section className='section grid-3'>
          <article className='card'><h3><span className='icon-badge'><FaUsers /></span>{t('about.cards.work.title')}</h3><p className='muted'>{t('about.cards.work.desc')}</p></article>
          <article className='card'><h3><span className='icon-badge'><FaRobot /></span>{t('about.cards.ai.title')}</h3><p className='muted'>{t('about.cards.ai.desc')}</p></article>
          <article className='card'><h3><span className='icon-badge'><FaBullhorn /></span>{t('about.cards.leads.title')}</h3><p className='muted'>{t('about.cards.leads.desc')}</p></article>
        </section>

        <section className='section band'>
          <h2><TerminalType text={t('about.ctaTitle')} durationMs={1500} storageKey='about_cta_once' /></h2>
          <div className='btn-row'>
            <NavLink to='/kontakt' className='btn btn-primary'><FaArrowRight /> {t('about.ctaTitle')}</NavLink>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
