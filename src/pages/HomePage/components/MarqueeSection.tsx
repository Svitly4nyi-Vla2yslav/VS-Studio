import { useMemo } from 'react';
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
import werkstaettenBg from '../../../assets/icons/marquee/Werkstätten.png';
import { MarqueeSectionScope } from './styles/MarqueeSection.styles';

export const MarqueeSection: React.FC = () => {
  const items = useMemo(
    () => [
      { label: 'Handwerk', icon: <FaHammer />, backgroundImage: handwerkBg },
      { label: 'Praxen', icon: <FaHeartbeat />, backgroundImage: praxenBg },
      { label: 'Werkstätten', icon: <FaIndustry />, backgroundImage: werkstaettenBg },
      { label: 'Gastronomie', icon: <FaUtensils />, backgroundImage: gastronomieBg },
      { label: 'Beauty', icon: <FaSpa />, backgroundImage: beautyBg },
      { label: 'Immobilien', icon: <FaBuilding />, backgroundImage: immobilienBg },
      { label: 'Kanzlei', icon: <FaBalanceScale />, backgroundImage: kanzleiBg },
      { label: 'Fitness', icon: <FaDumbbell />, backgroundImage: fitnessBg },
      { label: 'Reinigung', icon: <FaBroom />, backgroundImage: reinigungBg },
      { label: 'Transport', icon: <FaTruck />, backgroundImage: transportBg },
      { label: 'Coaching', icon: <FaChalkboardTeacher />, backgroundImage: coachingBg },
      { label: 'Bildung', icon: <FaGraduationCap />, backgroundImage: bildungBg },
    ],
    []
  );

  const rows = useMemo(
    () => [
      {
        direction: 'left' as const,
        speed: 52,
        items,
      }
    ],
    [items]
  );

  return (
    <MarqueeSectionScope>
      <section className='section marquee-wrap' aria-label='Nischen'>
        <h2>Ніші, з якими працюємо</h2>
        <p className='muted'>
          Оберіть напрямок і подивіться приклади візуального стилю для вашої сфери.
        </p>
        <Partners rows={rows} />
      </section>
    </MarqueeSectionScope>
  );
};

export default MarqueeSection;
