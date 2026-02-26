import { motion, easeOut } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaArrowRight, FaEuroSign, FaChartLine, FaRobot, FaShareAlt, FaBullhorn } from 'react-icons/fa';
import TerminalType from '../../components/Motion/TerminalType';
import LiveMetric from '../../components/Motion/LiveMetric';
import {
  Band,
  ButtonRow,
  Card,
  HeroSection,
  IconBadge,
  Muted,
  PageContainer,
  PageRoot,
  Price,
  PrimaryButtonLink,
  Section,
  TableLike,
  TableRow,
  Grid3,
} from '../shared/styles/PagePrimitives.styles';

const reveal = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const PricingPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageRoot>
      <PageContainer>
        <HeroSection
          as={motion.section}
          initial='hidden'
          animate='show'
          variants={reveal}
          transition={{ duration: 0.62, ease: easeOut }}
        >
          <h1><TerminalType text={t('pricing.h1')} durationMs={4400} storageKey='preise_h1_once' /></h1>
          <p>{t('pricing.subtitle')}</p>
        </HeroSection>

        <Section>
          <Grid3>
            <Card>
              <h3><IconBadge><FaEuroSign /></IconBadge>{t('pricing.packages.starter')}</h3>
              <Price>ab €1.490</Price>
              <Muted>{t('pricing.activeProjects')} <LiveMetric start={3} min={1} max={9} step={1} /></Muted>
            </Card>
            <Card>
              <h3><IconBadge><FaChartLine /></IconBadge>{t('pricing.packages.business')}</h3>
              <Price>ab €2.990</Price>
              <Muted>{t('pricing.activeProjects')} <LiveMetric start={6} min={3} max={14} step={1} /></Muted>
            </Card>
            <Card>
              <h3><IconBadge><FaBullhorn /></IconBadge>{t('pricing.packages.growth')}</h3>
              <Price>ab €5.490</Price>
              <Muted>{t('pricing.activeProjects')} <LiveMetric start={8} min={4} max={19} step={1} /></Muted>
            </Card>
          </Grid3>
        </Section>

        <Section>
          <h2><TerminalType text={t('pricing.tableTitle')} durationMs={2200} storageKey='table_once' /></h2>
          <TableLike>
            <TableRow><span><FaRobot /> {t('pricing.table.aiFeatures')}</span><span>{t('pricing.table.aiValue')}</span></TableRow>
            <TableRow><span><FaShareAlt /> {t('pricing.table.socialIntegration')}</span><span>{t('pricing.table.socialValue')}</span></TableRow>
            <TableRow><span><FaBullhorn /> {t('pricing.table.socialAdsSetup')}</span><span>{t('pricing.table.adsValue')}</span></TableRow>
          </TableLike>
        </Section>

        <Band>
          <h2><TerminalType text={t('pricing.nextStep')} durationMs={1800} storageKey='next_price_once' /></h2>
          <ButtonRow>
            <PrimaryButtonLink to='/kontakt'><FaArrowRight /> {t('common.projectRequest')}</PrimaryButtonLink>
          </ButtonRow>
        </Band>
      </PageContainer>
    </PageRoot>
  );
};

export default PricingPage;