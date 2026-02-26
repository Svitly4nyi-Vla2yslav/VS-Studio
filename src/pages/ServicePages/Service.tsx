import { motion, easeOut } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaArrowRight, FaRobot, FaShareAlt, FaBullhorn, FaClipboardCheck, FaCode } from 'react-icons/fa';
import TerminalType from '../../components/Motion/TerminalType';
import {
  Band,
  ButtonRow,
  Card,
  Checklist,
  Grid2,
  Grid3,
  HeroSection,
  IconBadge,
  Muted,
  PageContainer,
  PageRoot,
  PrimaryButtonLink,
  Section,
} from '../shared/styles/PagePrimitives.styles';

const reveal = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageRoot>
      <PageContainer>
        <HeroSection as={motion.section} initial='hidden' animate='show' variants={reveal} transition={{ duration: 0.62, ease: easeOut }}>
          <h1><TerminalType text={t('services.h1')} durationMs={5200} storageKey='services_h1_once' /></h1>
          <p>{t('services.subtitle')}</p>
        </HeroSection>

        <Section as={motion.section} initial='hidden' whileInView='show' viewport={{ once: true, amount: 0.2 }} transition={{ staggerChildren: 0.1 }}>
          <Grid2>
            <Card as={motion.article} variants={reveal}><h3><IconBadge><FaCode /></IconBadge>{t('services.cards.websites.title')}</h3><Muted>{t('services.cards.websites.desc')}</Muted></Card>
            <Card as={motion.article} variants={reveal}><h3><IconBadge><FaRobot /></IconBadge>{t('services.cards.webAppsAi.title')}</h3><Muted>{t('services.cards.webAppsAi.desc')}</Muted></Card>
            <Card as={motion.article} variants={reveal}><h3><IconBadge><FaBullhorn /></IconBadge>{t('services.cards.ads.title')}</h3><Muted>{t('services.cards.ads.desc')}</Muted></Card>
            <Card as={motion.article} variants={reveal}><h3><IconBadge><FaShareAlt /></IconBadge>{t('services.cards.social.title')}</h3><Muted>{t('services.cards.social.desc')}</Muted></Card>
          </Grid2>
        </Section>

        <Section>
          <h2><TerminalType text={t('services.deliverablesTitle')} durationMs={2600} storageKey='deliverables_once' /></h2>
          <Checklist>
            <li><FaClipboardCheck /> {t('services.deliverables.i1')}</li>
            <li><FaClipboardCheck /> {t('services.deliverables.i2')}</li>
            <li><FaClipboardCheck /> {t('services.deliverables.i3')}</li>
            <li><FaClipboardCheck /> {t('services.deliverables.i4')}</li>
          </Checklist>
        </Section>

        <Section>
          <h2><TerminalType text={t('services.aiSocialAdsTitle')} durationMs={2800} storageKey='ai_social_services_once' /></h2>
          <Grid3>
            <Card><h3><IconBadge><FaRobot /></IconBadge>{t('services.aiCards.ai.title')}</h3><Muted>{t('services.aiCards.ai.desc')}</Muted></Card>
            <Card><h3><IconBadge><FaShareAlt /></IconBadge>{t('services.aiCards.social.title')}</h3><Muted>{t('services.aiCards.social.desc')}</Muted></Card>
            <Card><h3><IconBadge><FaBullhorn /></IconBadge>{t('services.aiCards.ads.title')}</h3><Muted>{t('services.aiCards.ads.desc')}</Muted></Card>
          </Grid3>
        </Section>

        <Band>
          <h2><TerminalType text={t('services.ctaTitle')} durationMs={2200} storageKey='angebot_once' /></h2>
          <ButtonRow>
            <PrimaryButtonLink to='/kontakt'><FaArrowRight /> {t('services.ctaButton')}</PrimaryButtonLink>
          </ButtonRow>
        </Band>
      </PageContainer>
    </PageRoot>
  );
};

export default ServicesPage;
