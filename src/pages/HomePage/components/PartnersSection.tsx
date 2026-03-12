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
        title: t('home.partnersTitle', { defaultValue: 'Highlights, Zielgruppen und Leistungen' }),
        direction: 'right' as const,
        speed: 58,
        items: [
          {
            group: t('home.groups.highlights', { defaultValue: 'Highlights' }),
            label: t('home.partners.fastLoad.title', { defaultValue: 'Schnell geladen' }),
            description: t('home.partners.fastLoad.desc', { defaultValue: 'Seite lädt in Sekunden' }),
            icon: <FaBolt />,
            iconColor: '#FFD25F',
            iconBg: 'rgba(255,210,95,.2)',
          },
          {
            group: t('home.groups.highlights', { defaultValue: 'Highlights' }),
            label: t('home.partners.moreLeads.title', { defaultValue: 'Mehr Anfragen' }),
            description: t('home.partners.moreLeads.desc', { defaultValue: 'Mehr Kontakte über Formulare' }),
            icon: <FaChartLine />,
            iconColor: '#58D68D',
            iconBg: 'rgba(88,214,141,.2)',
          },
          {
            group: t('home.groups.highlights', { defaultValue: 'Highlights' }),
            label: t('home.partners.clearPrices.title', { defaultValue: 'Klare Preise' }),
            description: t('home.partners.clearPrices.desc', { defaultValue: 'Du kennst Kosten im Voraus' }),
            icon: <FaEuroSign />,
            iconColor: '#5DADE2',
            iconBg: 'rgba(93,173,226,.2)',
          },
          {
            group: t('home.groups.highlights', { defaultValue: 'Highlights' }),
            label: t('home.partners.personalHelp.title', { defaultValue: 'Persönliche Hilfe' }),
            description: t('home.partners.personalHelp.desc', { defaultValue: 'Direkter Support ohne Warteschlange' }),
            icon: <FaHandsHelping />,
            iconColor: '#F5B7B1',
            iconBg: 'rgba(245,183,177,.2)',
          },
          {
            group: t('home.groups.forWhom', { defaultValue: 'Für wen' }),
            label: t('home.partners.handwerker.title', { defaultValue: 'Handwerker' }),
            description: t('home.partners.handwerker.desc', { defaultValue: 'Anfragen pro Stadt und Leistung' }),
            icon: <FaHammer />,
            iconColor: '#F8C471',
            iconBg: 'rgba(248,196,113,.2)',
          },
          {
            group: t('home.groups.forWhom', { defaultValue: 'Für wen' }),
            label: t('home.partners.praxen.title', { defaultValue: 'Praxen' }),
            description: t('home.partners.praxen.desc', { defaultValue: 'Patienten finden schneller Termine' }),
            icon: <FaHeartbeat />,
            iconColor: '#EC7063',
            iconBg: 'rgba(236,112,99,.2)',
          },
          {
            group: t('home.groups.forWhom', { defaultValue: 'Für wen' }),
            label: t('home.partners.werkstaetten.title', { defaultValue: 'Werkstätten' }),
            description: t('home.partners.werkstaetten.desc', { defaultValue: 'Klare Service-Seiten mit Tracking' }),
            icon: <FaIndustry />,
            iconColor: '#AF7AC5',
            iconBg: 'rgba(175,122,197,.2)',
          },
          {
            group: t('home.groups.forWhom', { defaultValue: 'Für wen' }),
            label: t('home.partners.localServices.title', { defaultValue: 'Lokale Services' }),
            description: t('home.partners.localServices.desc', { defaultValue: 'Mehr Sichtbarkeit vor Ort' }),
            icon: <FaMapMarkerAlt />,
            iconColor: '#E74C3C',
            iconBg: 'rgba(231,76,60,.2)',
          },
          {
            group: t('home.groups.services', { defaultValue: 'Leistungen' }),
            label: t('home.partners.websites.title', { defaultValue: 'Websites' }),
            description: t('home.partners.websites.desc', { defaultValue: 'Modern, schnell, mobil optimiert' }),
            icon: <FaGlobe />,
            iconColor: '#48C9B0',
            iconBg: 'rgba(72,201,176,.2)',
          },
          {
            group: t('home.groups.services', { defaultValue: 'Leistungen' }),
            label: t('home.partners.webApps.title', { defaultValue: 'Web-Apps' }),
            description: t('home.partners.webApps.desc', { defaultValue: 'Tools für Team und Kunden' }),
            icon: <FaCode />,
            iconColor: '#85C1E9',
            iconBg: 'rgba(133,193,233,.2)',
          },
          {
            group: t('home.groups.services', { defaultValue: 'Leistungen' }),
            label: t('home.partners.aiIntegration.title', { defaultValue: 'AI Integration' }),
            description: t('home.partners.aiIntegration.desc', { defaultValue: 'Chatbot für Fragen und Leads' }),
            icon: <FaRobot />,
            iconColor: '#F7DC6F',
            iconBg: 'rgba(247,220,111,.2)',
          },
          {
            group: t('home.groups.services', { defaultValue: 'Leistungen' }),
            label: t('home.partners.socialMedia.title', { defaultValue: 'Social Media' }),
            description: t('home.partners.socialMedia.desc', { defaultValue: 'Website + Instagram/Meta verbunden' }),
            icon: <FaShareAlt />,
            iconColor: '#5DADE2',
            iconBg: 'rgba(93,173,226,.2)',
          },
          {
            group: t('home.groups.services', { defaultValue: 'Leistungen' }),
            label: t('home.partners.socialAds.title', { defaultValue: 'Social Ads' }),
            description: t('home.partners.socialAds.desc', { defaultValue: 'Gezielte Werbung mit messbaren Ergebnissen' }),
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
        <h2>{t('home.partnersSection.title', { defaultValue: 'Vorteile und Einsatzbereiche' })}</h2>
        <p className='section-description'>
          {t('home.partnersSection.desc', { defaultValue: 'Welche Aufgaben wir abdecken und für welche lokalen Unternehmen wir am häufigsten Websites und Lead-Funnels umsetzen.' })}
        </p>
      </div>
      <Partners rows={rows} />
    </motion.section>
  );
};

export default PartnersSection;
