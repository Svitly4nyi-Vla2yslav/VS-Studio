import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { backOut, easeOut, motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaArrowRight, FaBolt, FaBullseye, FaEuroSign, FaLifeRing, FaSearch } from 'react-icons/fa';
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
          <TerminalType text={t('home.heroTitle')} durationMs={6200} storageKey='hero_terminal_once' />
        </h1>
        <p>{t('home.heroSubtitle')}</p>
        <div className='btn-row'>
          <NavLink
            to='/kontakt'
            className='btn btn-primary btn-magnetic'
            onMouseMove={onMagneticMove}
            onMouseLeave={resetMagnet}
            style={{ transform: `translate(${magnet.x}px, ${magnet.y}px)` }}
          >
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

        <aside className='hero-bento'>
        <article className='bento-tile'>
          <span>Швидкість</span>
          <strong>90+ Lighthouse</strong>
          <FaBolt className='bento-icon-bg' aria-hidden='true' />
        </article>
        <article className='bento-tile'>
          <span>SEO</span>
          <strong>Технічний фундамент</strong>
          <FaSearch className='bento-icon-bg' aria-hidden='true' />
        </article>
        <article className='bento-tile'>
          <span>Заявки</span>
          <strong>Чіткі CTA і форми</strong>
          <FaBullseye className='bento-icon-bg' aria-hidden='true' />
        </article>
        <article className='bento-tile'>
          <span>Підтримка</span>
          <strong>Після запуску</strong>
          <FaLifeRing className='bento-icon-bg' aria-hidden='true' />
        </article>
        </aside>
      </motion.section>
    </HeroSectionScope>
  );
};

export default HeroSection;
