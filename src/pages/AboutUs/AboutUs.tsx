import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaArrowRight, FaUsers, FaRobot, FaBullhorn, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import TerminalType from '../../components/Motion/TerminalType';
import aboutFounderPhoto from '../../assets/icons/about/vladyslav-founder.jpg';

const AboutUs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className='page'>
      <div className='container'>
        <section className='hero'>
          <h1><TerminalType text={t('about.h1')} durationMs={2200} storageKey='about_h1_once' /></h1>
          <p>{t('about.subtitle')}</p>
        </section>

        <section className='section about-main-grid'>
          <article className='card about-photo-card'>
            <img className='about-photo-image' src={aboutFounderPhoto} alt={t('about.photoAlt')} />
            <p className='muted about-photo-caption'>{t('about.photoCaption')}</p>
            <div className='about-geo-badges'>
              <span className='about-geo-badge'><FaMapMarkerAlt /> {t('about.geo.local')}</span>
              <span className='about-geo-badge'><FaMapMarkerAlt /> {t('about.geo.region')}</span>
              <span className='about-geo-badge'><FaMapMarkerAlt /> {t('about.geo.country')}</span>
            </div>
          </article>

          <article className='card about-text-card'>
            <p className='muted'>{t('about.intro1')}</p>
            <p className='muted'>{t('about.intro2')}</p>
            <p className='muted'>{t('about.intro3')}</p>
            <p className='about-local-priority'>{t('about.localPriority')}</p>

            <h3>{t('about.miniFactsTitle')}</h3>
            <ul className='checklist'>
              <li><FaCheckCircle /> {t('about.miniFacts.i1')}</li>
              <li><FaCheckCircle /> {t('about.miniFacts.i2')}</li>
              <li><FaCheckCircle /> {t('about.miniFacts.i3')}</li>
            </ul>
          </article>
        </section>

        <section className='section grid-3'>
          <article className='card'><h3><span className='icon-badge'><FaUsers /></span>{t('about.cards.work.title')}</h3><p className='muted'>{t('about.cards.work.desc')}</p></article>
          <article className='card'><h3><span className='icon-badge'><FaRobot /></span>{t('about.cards.ai.title')}</h3><p className='muted'>{t('about.cards.ai.desc')}</p></article>
          <article className='card'><h3><span className='icon-badge'><FaBullhorn /></span>{t('about.cards.leads.title')}</h3><p className='muted'>{t('about.cards.leads.desc')}</p></article>
        </section>

        <section className='section card'>
          <h2>{t('about.whatYouGetTitle')}</h2>
          <ul className='checklist'>
            <li><FaCheckCircle /> {t('about.whatYouGet.i1')}</li>
            <li><FaCheckCircle /> {t('about.whatYouGet.i2')}</li>
            <li><FaCheckCircle /> {t('about.whatYouGet.i3')}</li>
            <li><FaCheckCircle /> {t('about.whatYouGet.i4')}</li>
          </ul>
        </section>

        <section className='section band'>
          <h2>{t('about.contactTitle')}</h2>
          <p className='muted'>{t('about.contactText')}</p>
          <div className='btn-row'>
            <NavLink to='/kontakt' className='btn btn-primary'><FaArrowRight /> {t('about.contactButton')}</NavLink>
          </div>
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
