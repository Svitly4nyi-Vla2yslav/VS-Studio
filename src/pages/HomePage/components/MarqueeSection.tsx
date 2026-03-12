import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  FaBalanceScale,
  FaBroom,
  FaBuilding,
  FaChalkboardTeacher,
  FaDumbbell,
  FaGraduationCap,
  FaHammer,
  FaHeartbeat,
  FaIndustry,
  FaSpa,
  FaTruck,
  FaUtensils,
} from 'react-icons/fa';
import Partners from '../../../components/PartnersBanner/PartnersBanner';
import beautyBg from '../../../assets/icons/marquee/Beauty.png';
import bildungBg from '../../../assets/icons/marquee/Bildung.png';
import coachingBg from '../../../assets/icons/marquee/Coaching.png';
import fitnessBg from '../../../assets/icons/marquee/Fitness.png';
import gastronomieBg from '../../../assets/icons/marquee/Gastronomie.png';
import handwerkBg from '../../../assets/icons/marquee/Handwerk.png';
import immobilienBg from '../../../assets/icons/marquee/Immobilien.png';
import kanzleiBg from '../../../assets/icons/marquee/Kanzlei.png';
import praxenBg from '../../../assets/icons/marquee/Praxen.png';
import reinigungBg from '../../../assets/icons/marquee/Reinigung.png';
import transportBg from '../../../assets/icons/marquee/Transport.png';
import werkstaettenBg from '../../../assets/icons/marquee/Werkst\u00e4tten.png';
import { MarqueeSectionScope } from './styles/MarqueeSection.styles';
import { fadeInUp } from '../../../components/Motion/reveal';

export const MarqueeSection: React.FC = () => {
  const { t } = useTranslation();
  const items = useMemo(
    () => [
      { label: t('home.marquee.items.handwerk', { defaultValue: 'Handwerk' }), icon: <FaHammer />, backgroundImage: handwerkBg },
      { label: t('home.marquee.items.praxen', { defaultValue: 'Praxen' }), icon: <FaHeartbeat />, backgroundImage: praxenBg },
      { label: t('home.marquee.items.werkstaetten', { defaultValue: 'Werkstätten' }), icon: <FaIndustry />, backgroundImage: werkstaettenBg },
      { label: t('home.marquee.items.gastronomie', { defaultValue: 'Gastronomie' }), icon: <FaUtensils />, backgroundImage: gastronomieBg },
      { label: t('home.marquee.items.beauty', { defaultValue: 'Beauty' }), icon: <FaSpa />, backgroundImage: beautyBg },
      { label: t('home.marquee.items.immobilien', { defaultValue: 'Immobilien' }), icon: <FaBuilding />, backgroundImage: immobilienBg },
      { label: t('home.marquee.items.kanzlei', { defaultValue: 'Kanzlei' }), icon: <FaBalanceScale />, backgroundImage: kanzleiBg },
      { label: t('home.marquee.items.fitness', { defaultValue: 'Fitness' }), icon: <FaDumbbell />, backgroundImage: fitnessBg },
      { label: t('home.marquee.items.reinigung', { defaultValue: 'Reinigung' }), icon: <FaBroom />, backgroundImage: reinigungBg },
      { label: t('home.marquee.items.transport', { defaultValue: 'Transport' }), icon: <FaTruck />, backgroundImage: transportBg },
      { label: t('home.marquee.items.coaching', { defaultValue: 'Coaching' }), icon: <FaChalkboardTeacher />, backgroundImage: coachingBg },
      { label: t('home.marquee.items.bildung', { defaultValue: 'Bildung' }), icon: <FaGraduationCap />, backgroundImage: bildungBg },
    ],
    [t]
  );

  const rows = useMemo(
    () => [
      {
        direction: 'left' as const,
        speed: 52,
        items,
      },
    ],
    [items]
  );

  return (
    <MarqueeSectionScope>
      <motion.section
        className='section marquee-wrap'
        aria-label={t('home.marquee.aria', { defaultValue: 'Branchen' })}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className='section-header'>
          <h2>{t('home.marquee.title', { defaultValue: 'Branchen, mit denen wir arbeiten' })}</h2>
          <p className='section-description'>
            {t('home.marquee.desc', { defaultValue: 'Wählen Sie eine Richtung und sehen Sie passende Stilbeispiele. So bauen wir schneller ein präzises Angebot für Ihr Unternehmen.' })}
          </p>
        </div>
        <Partners rows={rows} />
      </motion.section>
    </MarqueeSectionScope>
  );
};

export default MarqueeSection;
