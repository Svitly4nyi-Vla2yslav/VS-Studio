import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  FaBolt,
  FaBullhorn,
  FaChartLine,
  FaCode,
  FaEuroSign,
  FaGlobe,
  FaHammer,
  FaHandsHelping,
  FaHeartbeat,
  FaIndustry,
  FaMapMarkerAlt,
  FaRobot,
  FaShareAlt,
} from 'react-icons/fa';
import Partners from '../../../components/PartnersBanner/PartnersBanner';
import { fadeInUp } from '../../../components/Motion/reveal';

const PartnersSection: React.FC = () => {
  const { t } = useTranslation();

  const rows = useMemo(
    () => [
      {
        title: t('home.partnersTitle'),
        direction: 'right' as const,
        speed: 58,
        items: [
          {
            group: t('home.groups.highlights'),
            label: t('home.partners.fastLoad.title'),
            description: t('home.partners.fastLoad.desc'),
            icon: <FaBolt />,
            iconColor: '#FFD25F',
            iconBg: 'rgba(255,210,95,.2)',
          },
          {
            group: t('home.groups.highlights'),
            label: t('home.partners.moreLeads.title'),
            description: t('home.partners.moreLeads.desc'),
            icon: <FaChartLine />,
            iconColor: '#58D68D',
            iconBg: 'rgba(88,214,141,.2)',
          },
          {
            group: t('home.groups.highlights'),
            label: t('home.partners.clearPrices.title'),
            description: t('home.partners.clearPrices.desc'),
            icon: <FaEuroSign />,
            iconColor: '#5DADE2',
            iconBg: 'rgba(93,173,226,.2)',
          },
          {
            group: t('home.groups.highlights'),
            label: t('home.partners.personalHelp.title'),
            description: t('home.partners.personalHelp.desc'),
            icon: <FaHandsHelping />,
            iconColor: '#F5B7B1',
            iconBg: 'rgba(245,183,177,.2)',
          },
          {
            group: t('home.groups.forWhom'),
            label: t('home.partners.handwerker.title'),
            description: t('home.partners.handwerker.desc'),
            icon: <FaHammer />,
            iconColor: '#F8C471',
            iconBg: 'rgba(248,196,113,.2)',
          },
          {
            group: t('home.groups.forWhom'),
            label: t('home.partners.praxen.title'),
            description: t('home.partners.praxen.desc'),
            icon: <FaHeartbeat />,
            iconColor: '#EC7063',
            iconBg: 'rgba(236,112,99,.2)',
          },
          {
            group: t('home.groups.forWhom'),
            label: t('home.partners.werkstaetten.title'),
            description: t('home.partners.werkstaetten.desc'),
            icon: <FaIndustry />,
            iconColor: '#AF7AC5',
            iconBg: 'rgba(175,122,197,.2)',
          },
          {
            group: t('home.groups.forWhom'),
            label: t('home.partners.localServices.title'),
            description: t('home.partners.localServices.desc'),
            icon: <FaMapMarkerAlt />,
            iconColor: '#E74C3C',
            iconBg: 'rgba(231,76,60,.2)',
          },
          {
            group: t('home.groups.services'),
            label: t('home.partners.websites.title'),
            description: t('home.partners.websites.desc'),
            icon: <FaGlobe />,
            iconColor: '#48C9B0',
            iconBg: 'rgba(72,201,176,.2)',
          },
          {
            group: t('home.groups.services'),
            label: t('home.partners.webApps.title'),
            description: t('home.partners.webApps.desc'),
            icon: <FaCode />,
            iconColor: '#85C1E9',
            iconBg: 'rgba(133,193,233,.2)',
          },
          {
            group: t('home.groups.services'),
            label: t('home.partners.aiIntegration.title'),
            description: t('home.partners.aiIntegration.desc'),
            icon: <FaRobot />,
            iconColor: '#F7DC6F',
            iconBg: 'rgba(247,220,111,.2)',
          },
          {
            group: t('home.groups.services'),
            label: t('home.partners.socialMedia.title'),
            description: t('home.partners.socialMedia.desc'),
            icon: <FaShareAlt />,
            iconColor: '#5DADE2',
            iconBg: 'rgba(93,173,226,.2)',
          },
          {
            group: t('home.groups.services'),
            label: t('home.partners.socialAds.title'),
            description: t('home.partners.socialAds.desc'),
            icon: <FaBullhorn />,
            iconColor: '#F1948A',
            iconBg: 'rgba(241,148,138,.2)',
          },
        ],
      },
    ],
    [t]
  );

  return (
    <motion.section
      className='section'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div className='section-header'>
        <h2>{t('home.partnersSection.title')}</h2>
        <p className='section-description'>{t('home.partnersSection.desc')}</p>
      </div>
      <Partners rows={rows} />
    </motion.section>
  );
};

export default PartnersSection;
