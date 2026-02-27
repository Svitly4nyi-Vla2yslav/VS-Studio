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
import werkstaettenBg from '../../../assets/icons/marquee/Werkst\u00e4tten.png';
import { MarqueeSectionScope } from './styles/MarqueeSection.styles';

export const MarqueeSection: React.FC = () => {
  const items = useMemo(
    () => [
      { label: 'Handwerk', icon: <FaHammer />, backgroundImage: handwerkBg },
      { label: 'Praxen', icon: <FaHeartbeat />, backgroundImage: praxenBg },
      { label: 'Werkst\u00e4tten', icon: <FaIndustry />, backgroundImage: werkstaettenBg },
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
      },
    ],
    [items]
  );

  return (
    <MarqueeSectionScope>
      <section className='section marquee-wrap' aria-label={'\u041d\u0456\u0448\u0456'}>
        <div className='section-header'>
          <h2>{'\u041d\u0456\u0448\u0456, \u0437 \u044f\u043a\u0438\u043c\u0438 \u043f\u0440\u0430\u0446\u044e\u0454\u043c\u043e'}</h2>
          <p className='section-description'>
            {
              '\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u043d\u0430\u043f\u0440\u044f\u043c \u0456 \u043f\u043e\u0434\u0438\u0432\u0456\u0442\u044c\u0441\u044f \u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438 \u0441\u0442\u0438\u043b\u044e \u0434\u043b\u044f \u0441\u0432\u043e\u0454\u0457 \u0441\u0444\u0435\u0440\u0438. \u0426\u0435 \u0434\u043e\u043f\u043e\u043c\u043e\u0436\u0435 \u0448\u0432\u0438\u0434\u0448\u0435 \u0437\u0456\u0431\u0440\u0430\u0442\u0438 \u0442\u043e\u0447\u043d\u0438\u0439 \u043e\u0444\u0435\u0440 \u043f\u0456\u0434 \u0432\u0430\u0448 \u0431\u0456\u0437\u043d\u0435\u0441.'
            }
          </p>
        </div>
        <Partners rows={rows} />
      </section>
    </MarqueeSectionScope>
  );
};

export default MarqueeSection;
