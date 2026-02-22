import { NavLink } from 'react-router-dom';
import { easeOut, motion, useInView, useScroll, useTransform, backOut } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  FaArrowRight,
  FaEuroSign,
  FaRobot,
  FaShareAlt,
  FaBullhorn,
  FaBolt,
  FaChartLine,
  FaHandsHelping,
  FaHammer,
  FaHeartbeat,
  FaIndustry,
  FaMapMarkerAlt,
  FaGlobe,
  FaCode,
} from 'react-icons/fa';
import { useRef } from 'react';
import LiveMetric from '../../components/Motion/LiveMetric';
import TerminalType from '../../components/Motion/TerminalType';
import HeroVideo from '../../components/Motion/HeroVideo';
import Partners from '../../components/PartnersBanner/PartnersBanner';

const revealUp = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0 },
};

const Home: React.FC = () => {
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll();
  const contentY = useTransform(scrollYProgress, [0, 0.45], [0, -24]);
  const trustRef = useRef<HTMLElement | null>(null);
  const trustInView = useInView(trustRef, { once: true, amount: 0.4 });

  return (
    <div className='page'>
      <div className='container'>
        <motion.section
          className='hero hero-with-video'
          initial='hidden'
          animate='show'
          variants={revealUp}
          transition={{ duration: 0.85, ease: backOut }}
        >
          <HeroVideo />

          <motion.div
            className='hero-content'
            style={{ y: contentY }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easeOut }}
          >
            <h1>
              <TerminalType
                text={t('home.heroTitle')}
                durationMs={6200}
                storageKey='hero_terminal_once'
              />
            </h1>
            <p>{t('home.heroSubtitle')}</p>
            <div className='btn-row'>
              <NavLink to='/kontakt' className='btn btn-primary'>
                <FaArrowRight /> {t('common.projectRequest')}
              </NavLink>
              <NavLink to='/preise' className='btn btn-secondary'>
                <FaEuroSign /> {t('common.viewPrices')}
              </NavLink>
              <a href='#faq' className='btn btn-secondary'>
                <FaArrowRight /> {t('home.toFaq')}
              </a>
            </div>
          </motion.div>
        </motion.section>

        <section className='section'>
          <Partners
            rows={[
              {
                title: t('home.partnersTitle'),
                direction: 'right',
                speed: 58,
                items: [
                  { group: t('home.groups.highlights'), label: t('home.partners.fastLoad.title'), description: t('home.partners.fastLoad.desc'), icon: <FaBolt />, iconColor: '#FFD25F', iconBg: 'rgba(255,210,95,.2)' },
                  { group: t('home.groups.highlights'), label: t('home.partners.moreLeads.title'), description: t('home.partners.moreLeads.desc'), icon: <FaChartLine />, iconColor: '#58D68D', iconBg: 'rgba(88,214,141,.2)' },
                  { group: t('home.groups.highlights'), label: t('home.partners.clearPrices.title'), description: t('home.partners.clearPrices.desc'), icon: <FaEuroSign />, iconColor: '#5DADE2', iconBg: 'rgba(93,173,226,.2)' },
                  { group: t('home.groups.highlights'), label: t('home.partners.personalHelp.title'), description: t('home.partners.personalHelp.desc'), icon: <FaHandsHelping />, iconColor: '#F5B7B1', iconBg: 'rgba(245,183,177,.2)' },
                  { group: t('home.groups.forWhom'), label: t('home.partners.handwerker.title'), description: t('home.partners.handwerker.desc'), icon: <FaHammer />, iconColor: '#F8C471', iconBg: 'rgba(248,196,113,.2)' },
                  { group: t('home.groups.forWhom'), label: t('home.partners.praxen.title'), description: t('home.partners.praxen.desc'), icon: <FaHeartbeat />, iconColor: '#EC7063', iconBg: 'rgba(236,112,99,.2)' },
                  { group: t('home.groups.forWhom'), label: t('home.partners.werkstaetten.title'), description: t('home.partners.werkstaetten.desc'), icon: <FaIndustry />, iconColor: '#AF7AC5', iconBg: 'rgba(175,122,197,.2)' },
                  { group: t('home.groups.forWhom'), label: t('home.partners.localServices.title'), description: t('home.partners.localServices.desc'), icon: <FaMapMarkerAlt />, iconColor: '#E74C3C', iconBg: 'rgba(231,76,60,.2)' },
                  { group: t('home.groups.services'), label: t('home.partners.websites.title'), description: t('home.partners.websites.desc'), icon: <FaGlobe />, iconColor: '#48C9B0', iconBg: 'rgba(72,201,176,.2)' },
                  { group: t('home.groups.services'), label: t('home.partners.webApps.title'), description: t('home.partners.webApps.desc'), icon: <FaCode />, iconColor: '#85C1E9', iconBg: 'rgba(133,193,233,.2)' },
                  { group: t('home.groups.services'), label: t('home.partners.aiIntegration.title'), description: t('home.partners.aiIntegration.desc'), icon: <FaRobot />, iconColor: '#F7DC6F', iconBg: 'rgba(247,220,111,.2)' },
                  { group: t('home.groups.services'), label: t('home.partners.socialMedia.title'), description: t('home.partners.socialMedia.desc'), icon: <FaShareAlt />, iconColor: '#5DADE2', iconBg: 'rgba(93,173,226,.2)' },
                  { group: t('home.groups.services'), label: t('home.partners.socialAds.title'), description: t('home.partners.socialAds.desc'), icon: <FaBullhorn />, iconColor: '#F1948A', iconBg: 'rgba(241,148,138,.2)' },
                ],
              },
            ]}
          />
        </section>

        <section className='section' ref={trustRef}>
          <h2>
            {trustInView ? (
              <TerminalType text={t('home.trustTitle')} durationMs={6200} storageKey='trust_title_v3' />
            ) : (
              t('home.trustTitle')
            )}
          </h2>
          <div className='grid-3'>
            <article className='card'>
              <h3>
                <LiveMetric start={21} max={38} target={38} step={1} prefix='+' suffix='%' storageKey='trust_metric_1' />
              </h3>
              <p className='muted'>{t('home.trustDesc1')}</p>
            </article>
            <article className='card'>
              <h3>
                <LiveMetric start={12} max={41} target={41} step={1} prefix='-' suffix='%' storageKey='trust_metric_2' />
              </h3>
              <p className='muted'>{t('home.trustDesc2')}</p>
            </article>
            <article className='card'>
              <h3>
                <LiveMetric start={2.9} max={2.1} target={2.1} step={0.1} decimals={1} suffix='s' storageKey='trust_metric_3' />
              </h3>
              <p className='muted'>{t('home.trustDesc3')}</p>
            </article>
          </div>
        </section>

        <section id='faq' className='section'>
          <h2>
            <TerminalType text={t('home.faqTitle')} durationMs={2200} storageKey='faq_title_v2' />
          </h2>
          <div className='faq'>
            <details>
              <summary>{t('home.faq.q1')}</summary>
              <div className='faq-answer'>
                <p>{t('home.faq.a1')}</p>
              </div>
            </details>
            <details>
              <summary>{t('home.faq.q2')}</summary>
              <div className='faq-answer'>
                <p>{t('home.faq.a2')}</p>
              </div>
            </details>
            <details>
              <summary>{t('home.faq.q3')}</summary>
              <div className='faq-answer'>
                <p>{t('home.faq.a3')}</p>
              </div>
            </details>
            <details>
              <summary>{t('home.faq.q4')}</summary>
              <div className='faq-answer'>
                <p>{t('home.faq.a4')}</p>
              </div>
            </details>
            <details>
              <summary>{t('home.faq.q5')}</summary>
              <div className='faq-answer'>
                <p>{t('home.faq.a5')}</p>
              </div>
            </details>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
