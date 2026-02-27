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
            <span>{'\u0428\u0432\u0438\u0434\u043a\u0456\u0441\u0442\u044c'}</span>
            <strong>90+ Lighthouse</strong>
            <FaBolt className='bento-icon-bg' aria-hidden='true' />
          </article>
          <article className='bento-tile'>
            <span>SEO</span>
            <strong>{'\u0422\u0435\u0445\u043d\u0456\u0447\u043d\u0438\u0439 \u0444\u0443\u043d\u0434\u0430\u043c\u0435\u043d\u0442'}</strong>
            <FaSearch className='bento-icon-bg' aria-hidden='true' />
          </article>
          <article className='bento-tile'>
            <span>{'\u0417\u0430\u044f\u0432\u043a\u0438'}</span>
            <strong>{'\u0427\u0456\u0442\u043a\u0456 CTA \u0456 \u0444\u043e\u0440\u043c\u0438'}</strong>
            <FaBullseye className='bento-icon-bg' aria-hidden='true' />
          </article>
          <article className='bento-tile'>
            <span>{'\u041f\u0456\u0434\u0442\u0440\u0438\u043c\u043a\u0430'}</span>
            <strong>{'\u041f\u0456\u0441\u043b\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0443'}</strong>
            <FaLifeRing className='bento-icon-bg' aria-hidden='true' />
          </article>
        </aside>
      </motion.section>
    </HeroSectionScope>
  );
};

export default HeroSection;
