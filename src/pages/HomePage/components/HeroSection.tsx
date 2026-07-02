import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { backOut, easeOut, motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaArrowRight, FaBolt, FaBullseye, FaIdCard, FaLifeRing, FaSearch } from 'react-icons/fa';
import TerminalType from '../../../components/Motion/TerminalType';
import HeroVideo from '../../../components/Motion/HeroVideo';
import { revealUp } from './homePageData';
import { HeroSectionScope } from './styles/HeroSection.styles';

type HeroSectionProps = {
  reducedMotion: boolean;
};

const HeroSection: React.FC<HeroSectionProps> = ({ reducedMotion }) => {
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll();
  const contentY = useTransform(scrollYProgress, [0, 0.45], [0, -24]);
  const videoY = useTransform(scrollYProgress, [0, 0.4], [0, 30]);
  const [magnet, setMagnet] = useState({ x: 0, y: 0 });

  const onMagneticMove: React.MouseEventHandler<HTMLAnchorElement> = event => {
    if (reducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) / 12;
    const y = (event.clientY - rect.top - rect.height / 2) / 12;
    setMagnet({ x: Math.max(-8, Math.min(8, x)), y: Math.max(-8, Math.min(8, y)) });
  };

  const resetMagnet = () => setMagnet({ x: 0, y: 0 });

  return (
    <HeroSectionScope>
      <motion.section
        className='hero hero-with-video'
        initial='hidden'
        animate='show'
        variants={revealUp}
        transition={{ duration: 0.85, ease: backOut }}
      >
        <motion.div className='hero-video-parallax' style={{ y: videoY }}>
          <HeroVideo />
        </motion.div>

        <motion.div
          className='hero-content'
          style={{ y: contentY }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeOut }}
        >
          <h1>
            <TerminalType
              text={t('home.heroTitle', { defaultValue: 'Mehr Kundenanfragen durch eine moderne Website' })}
              durationMs={6200}
              storageKey='hero_terminal_once'
            />
          </h1>
          <p>
            {t('home.heroSubtitle', {
              defaultValue:
                'VS Web Studio erstellt schnelle Websites, Landingpages und Lead-Systeme für lokale Unternehmen in Hildesheim und Niedersachsen.',
            })}
          </p>
          <p className='hero-supporting'>
            {t('home.heroSupporting', {
              defaultValue:
                'Für Handwerker, Restaurants, Praxen, Studios und Dienstleister, die online professioneller wirken und mehr Anfragen bekommen wollen.',
            })}
          </p>
          <div className='btn-row'>
            <NavLink
              to='/kontakt'
              className='btn btn-primary btn-magnetic'
              onMouseMove={onMagneticMove}
              onMouseLeave={resetMagnet}
              style={{ transform: `translate(${magnet.x}px, ${magnet.y}px)` }}
            >
              <FaArrowRight /> {t('home.heroPrimaryCta', { defaultValue: 'Kostenlose Erstberatung' })}
            </NavLink>
            {/* <NavLink to='/portfolio' className='btn btn-secondary'>
              <FaIdCard /> {t('home.heroPortfolioCta', { defaultValue: 'Website-Beispiele ansehen' })}
            </NavLink> */}
          </div>
          <p className='hero-trustline'>
            {t('home.heroTrustline', {
              defaultValue:
                'Webdesign · SEO-Grundstruktur · Mobile Optimierung · Kontaktformular · Google Business Unterstützung',
            })}
          </p>
        </motion.div>

        <aside className='hero-bento'>
          <article className='bento-tile'>
            <span>{t('home.hero.bento.speed.label', { defaultValue: 'Geschwindigkeit' })}</span>
            <strong>{t('home.hero.bento.speed.value', { defaultValue: '90+ Lighthouse' })}</strong>
            <FaBolt className='bento-icon-bg' aria-hidden='true' />
          </article>
          <article className='bento-tile'>
            <span>{t('home.hero.bento.seo.label', { defaultValue: 'SEO' })}</span>
            <strong>{t('home.hero.bento.seo.value', { defaultValue: 'Technisches Fundament' })}</strong>
            <FaSearch className='bento-icon-bg' aria-hidden='true' />
          </article>
          <article className='bento-tile'>
            <span>{t('home.hero.bento.leads.label', { defaultValue: 'Anfragen' })}</span>
            <strong>{t('home.hero.bento.leads.value', { defaultValue: 'Klare CTA und Formulare' })}</strong>
            <FaBullseye className='bento-icon-bg' aria-hidden='true' />
          </article>
          <article className='bento-tile'>
            <span>{t('home.hero.bento.support.label', { defaultValue: 'Support' })}</span>
            <strong>{t('home.hero.bento.support.value', { defaultValue: 'Nach dem Launch' })}</strong>
            <FaLifeRing className='bento-icon-bg' aria-hidden='true' />
          </article>
        </aside>
      </motion.section>
    </HeroSectionScope>
  );
};

export default HeroSection;
