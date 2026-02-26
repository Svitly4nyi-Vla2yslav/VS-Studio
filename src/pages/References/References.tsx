import { useMemo, useRef, useState } from 'react';
import { motion, easeOut } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaArrowRight, FaChartLine, FaFilter, FaDatabase, FaCalendarAlt } from 'react-icons/fa';
import caseBefore1 from '../../assets/icons/cases/photo_2025-09-16_22-57-47.jpg';
import caseAfter1 from '../../assets/icons/cases/photo_2025-09-16_22-58-01.jpg';
import caseBefore2 from '../../assets/icons/cases/photo_2025-09-16_22-58-06.jpg';
import caseAfter2 from '../../assets/icons/cases/photo_2025-09-16_22-58-10.jpg';
import caseBefore3 from '../../assets/icons/cases/photo_2025-09-16_22-58-14.jpg';
import caseAfter3 from '../../assets/icons/cases/photo_2025-09-16_22-58-19.jpg';
import TerminalType from '../../components/Motion/TerminalType';
import {
  Band,
  ButtonRow,
  Card,
  Grid2,
  Grid3,
  HeroSection,
  Muted,
  PageContainer,
  PageRoot,
  PrimaryButtonLink,
  Section,
} from '../shared/styles/PagePrimitives.styles';
import { ReferencesPageScope } from './styles/ReferencesPage.styles';

type Niche =
  | 'handwerk'
  | 'praxen'
  | 'werkstatt'
  | 'gastronomie'
  | 'beauty'
  | 'immobilien'
  | 'kanzlei'
  | 'fitnessPhysio'
  | 'reinigung'
  | 'umzugTransport'
  | 'coachingBeratung'
  | 'bildungKurse';

interface NicheMetric {
  labelKey: `references.niches.${Niche}`;
  metricLabelKey: string;
  metricValue: string;
  timeframe: string;
  source: string;
}

interface CaseMetric {
  metricLabelKey: string;
  metricValue: string;
}

interface CaseStudy {
  id: string;
  titleKey: string;
  category: Niche;
  challengeKey: string;
  solutionKey: string;
  metrics: CaseMetric[];
  timeframe: string;
  source: string;
  beforeImage: string;
  afterImage: string;
}

const reveal = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const NICHE_FILTERS: Array<'all' | Niche> = [
  'all',
  'handwerk',
  'praxen',
  'werkstatt',
  'gastronomie',
  'beauty',
  'immobilien',
  'kanzlei',
  'fitnessPhysio',
  'reinigung',
  'umzugTransport',
  'coachingBeratung',
  'bildungKurse',
];

const NICHE_METRICS: NicheMetric[] = [
  { labelKey: 'references.niches.handwerk', metricLabelKey: 'references.metrics.moreRequests', metricValue: '+41%', timeframe: '30-90 Tage', source: 'GA4 / Google Ads' },
  { labelKey: 'references.niches.praxen', metricLabelKey: 'references.metrics.moreAppointments', metricValue: '+33%', timeframe: '30-90 Tage', source: 'GA4 / Meta Ads' },
  { labelKey: 'references.niches.werkstatt', metricLabelKey: 'references.metrics.moreCalls', metricValue: '+46%', timeframe: '30-90 Tage', source: 'GA4 / Google Ads' },
  { labelKey: 'references.niches.gastronomie', metricLabelKey: 'references.metrics.moreReservations', metricValue: '+27%', timeframe: '30-90 Tage', source: 'GA4 / Meta Ads' },
  { labelKey: 'references.niches.beauty', metricLabelKey: 'references.metrics.moreBookings', metricValue: '+31%', timeframe: '30-90 Tage', source: 'GA4 / Meta Ads' },
  { labelKey: 'references.niches.immobilien', metricLabelKey: 'references.metrics.moreLeads', metricValue: '+22%', timeframe: '30-90 Tage', source: 'GA4 / Search Console' },
  { labelKey: 'references.niches.kanzlei', metricLabelKey: 'references.metrics.moreIntroCalls', metricValue: '+24%', timeframe: '30-90 Tage', source: 'GA4 / Google Ads' },
  { labelKey: 'references.niches.fitnessPhysio', metricLabelKey: 'references.metrics.moreTrialSessions', metricValue: '+29%', timeframe: '30-90 Tage', source: 'GA4 / Meta Ads' },
  { labelKey: 'references.niches.reinigung', metricLabelKey: 'references.metrics.moreOffers', metricValue: '+35%', timeframe: '30-90 Tage', source: 'GA4 / Google Ads' },
  { labelKey: 'references.niches.umzugTransport', metricLabelKey: 'references.metrics.moreQualifiedLeads', metricValue: '+26%', timeframe: '30-90 Tage', source: 'GA4 / Google Ads' },
  { labelKey: 'references.niches.coachingBeratung', metricLabelKey: 'references.metrics.moreFirstContacts', metricValue: '+28%', timeframe: '30-90 Tage', source: 'GA4 / Meta Ads' },
  { labelKey: 'references.niches.bildungKurse', metricLabelKey: 'references.metrics.moreCourseSignups', metricValue: '+32%', timeframe: '30-90 Tage', source: 'GA4 / Search Console / Ads' },
];

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'c1',
    titleKey: 'references.cases.c1.title',
    category: 'handwerk',
    challengeKey: 'references.cases.c1.challenge',
    solutionKey: 'references.cases.c1.solution',
    metrics: [
      { metricLabelKey: 'references.metrics.moreRequests', metricValue: '+41%' },
      { metricLabelKey: 'references.metrics.budgetEfficiency', metricValue: '+33%' },
    ],
    timeframe: '30-90 Tage',
    source: 'GA4 / Google Ads',
    beforeImage: caseBefore1,
    afterImage: caseAfter1,
  },
  {
    id: 'c2',
    titleKey: 'references.cases.c2.title',
    category: 'praxen',
    challengeKey: 'references.cases.c2.challenge',
    solutionKey: 'references.cases.c2.solution',
    metrics: [
      { metricLabelKey: 'references.metrics.moreAppointments', metricValue: '+33%' },
      { metricLabelKey: 'references.metrics.moreInteractions', metricValue: '+46%' },
    ],
    timeframe: '30-90 Tage',
    source: 'GA4 / Meta Ads',
    beforeImage: caseBefore2,
    afterImage: caseAfter2,
  },
  {
    id: 'c3',
    titleKey: 'references.cases.c3.title',
    category: 'werkstatt',
    challengeKey: 'references.cases.c3.challenge',
    solutionKey: 'references.cases.c3.solution',
    metrics: [
      { metricLabelKey: 'references.metrics.moreQualifiedLeads', metricValue: '+32%' },
      { metricLabelKey: 'references.metrics.moreLeadsPerBudget', metricValue: '+31%' },
    ],
    timeframe: '30-90 Tage',
    source: 'GA4 / Google Ads',
    beforeImage: caseBefore3,
    afterImage: caseAfter3,
  },
  {
    id: 'c4',
    titleKey: 'references.cases.c4.title',
    category: 'gastronomie',
    challengeKey: 'references.cases.c4.challenge',
    solutionKey: 'references.cases.c4.solution',
    metrics: [
      { metricLabelKey: 'references.metrics.moreReservations', metricValue: '+27%' },
      { metricLabelKey: 'references.metrics.moreCalls', metricValue: '+21%' },
    ],
    timeframe: '30-90 Tage',
    source: 'GA4 / Meta Ads',
    beforeImage: caseBefore2,
    afterImage: caseAfter1,
  },
  {
    id: 'c5',
    titleKey: 'references.cases.c5.title',
    category: 'immobilien',
    challengeKey: 'references.cases.c5.challenge',
    solutionKey: 'references.cases.c5.solution',
    metrics: [
      { metricLabelKey: 'references.metrics.moreLeads', metricValue: '+22%' },
      { metricLabelKey: 'references.metrics.moreIntroCalls', metricValue: '+19%' },
    ],
    timeframe: '30-90 Tage',
    source: 'GA4 / Search Console / Ads',
    beforeImage: caseBefore1,
    afterImage: caseAfter3,
  },
  {
    id: 'c6',
    titleKey: 'references.cases.c6.title',
    category: 'kanzlei',
    challengeKey: 'references.cases.c6.challenge',
    solutionKey: 'references.cases.c6.solution',
    metrics: [
      { metricLabelKey: 'references.metrics.moreFirstContacts', metricValue: '+24%' },
      { metricLabelKey: 'references.metrics.moreConsultations', metricValue: '+18%' },
    ],
    timeframe: '30-90 Tage',
    source: 'GA4 / Google Ads',
    beforeImage: caseBefore3,
    afterImage: caseAfter2,
  },
];

const ReferencesPage: React.FC = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<'all' | Niche>('all');
  const [sliderValue, setSliderValue] = useState(50);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const visibleCases = useMemo(
    () => CASE_STUDIES.filter(caseItem => activeFilter === 'all' || caseItem.category === activeFilter),
    [activeFilter]
  );

  const visibleNicheMetrics = useMemo(
    () => NICHE_METRICS.filter(item => activeFilter === 'all' || item.labelKey === `references.niches.${activeFilter as Niche}`),
    [activeFilter]
  );

  const sliderCase = visibleCases[0] ?? CASE_STUDIES[0];

  const updateSliderFromClientX = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const ratio = (clientX - rect.left) / rect.width;
    const next = Math.max(0, Math.min(100, Math.round(ratio * 100)));
    setSliderValue(next);
  };

  return (
    <ReferencesPageScope>
      <PageRoot className='references-page'>
        <PageContainer>
          <HeroSection
            className='references-hero'
            as={motion.section}
            initial='hidden'
            animate='show'
            variants={reveal}
            transition={{ duration: 0.62, ease: easeOut }}
          >
            <h1><TerminalType text={t('references.h1')} durationMs={2800} storageKey='refs_h1_new_once' /></h1>
            <p>{t('references.subtitle')}</p>
            <Muted>{t('references.trustline')}</Muted>
          </HeroSection>

          <Section className='references-filter-wrap'>
            <h2 className='references-title'><FaFilter /> {t('references.filterTitle')}</h2>
            <Muted>{t('references.counter', { count: visibleCases.length })}</Muted>
            <div className='references-filters' role='tablist' aria-label={t('references.filterAria')}>
              {NICHE_FILTERS.map(item => (
                <button
                  key={item}
                  type='button'
                  className={`references-filter-chip ${activeFilter === item ? 'active' : ''}`}
                  onClick={() => setActiveFilter(item)}
                  role='tab'
                  aria-selected={activeFilter === item}
                >
                  {item === 'all' ? t('references.filters.all') : t(`references.niches.${item}`)}
                </button>
              ))}
            </div>
          </Section>

          <Section className='references-metric-band'>
            <h2 className='references-title'><FaChartLine /> {t('references.growthByNiche')}</h2>
            <Grid3 className='grid-3'>
              {visibleNicheMetrics.map(item => (
                <Card className='references-metric-card' key={item.labelKey}>
                  <h3>{t(item.labelKey)}</h3>
                  <p className='references-metric-line'>{t(item.metricLabelKey)}: <span>{item.metricValue}</span></p>
                  <Muted><FaCalendarAlt /> {t('references.periodLabel')}: {item.timeframe}</Muted>
                  <Muted><FaDatabase /> {t('references.measurementLabel')}: {item.source}</Muted>
                </Card>
              ))}
            </Grid3>
          </Section>

          <Section className='references-cases'>
            <h2 className='references-title'>{t('references.selectedCases')}</h2>
            {visibleCases.length === 0 ? (
              <Card>
                <h3>{t('references.emptyTitle')}</h3>
                <Muted>{t('references.emptyText')}</Muted>
              </Card>
            ) : (
              <Grid2>
                {visibleCases.map(caseItem => (
                  <Card className='references-case-card' key={caseItem.id}>
                    <h3>{t(caseItem.titleKey)}</h3>
                    <p><strong>{t('references.challengeLabel')}:</strong> {t(caseItem.challengeKey)}</p>
                    <p><strong>{t('references.solutionLabel')}:</strong> {t(caseItem.solutionKey)}</p>
                    <div className='references-case-metrics'>
                      {caseItem.metrics.map(metric => (
                        <p key={`${caseItem.id}-${metric.metricLabelKey}`}>{t(metric.metricLabelKey)}: <span>{metric.metricValue}</span></p>
                      ))}
                    </div>
                    <Muted><FaCalendarAlt /> {t('references.periodLabel')}: {caseItem.timeframe}</Muted>
                    <Muted><FaDatabase /> {t('references.measurementLabel')}: {caseItem.source}</Muted>
                  </Card>
                ))}
              </Grid2>
            )}
          </Section>

          <Section>
            <h2 className='references-title'>{t('references.beforeAfter')}</h2>
            <div
              ref={sliderRef}
              className='references-compare'
              onMouseMove={e => {
                if (e.buttons === 1) updateSliderFromClientX(e.clientX);
              }}
              onClick={e => updateSliderFromClientX(e.clientX)}
            >
              <img className='after' src={sliderCase.afterImage} alt={t('references.afterAlt')} />
              <div className='before-wrap' style={{ width: `${sliderValue}%` }}>
                <img className='before' src={sliderCase.beforeImage} alt={t('references.beforeAlt')} />
              </div>
              <button
                type='button'
                className='references-compare-handle'
                style={{ left: `${sliderValue}%` }}
                onKeyDown={e => {
                  if (e.key === 'ArrowLeft') setSliderValue(prev => Math.max(0, prev - 2));
                  if (e.key === 'ArrowRight') setSliderValue(prev => Math.min(100, prev + 2));
                }}
                aria-label={t('references.sliderAria')}
              />
              <span className='references-compare-label before'>{t('references.before')}</span>
              <span className='references-compare-label after'>{t('references.after')}</span>
            </div>
            <Muted>{t('references.sliderHint')} {t('references.periodLabel')}: {sliderCase.timeframe} · {t('references.measurementLabel')}: {sliderCase.source}</Muted>
          </Section>

          <Band>
            <h2>{t('references.ctaTitle')}</h2>
            <Muted>{t('references.ctaText')}</Muted>
            <ButtonRow>
              <PrimaryButtonLink to='/kontakt'><FaArrowRight /> {t('references.cta')}</PrimaryButtonLink>
            </ButtonRow>
          </Band>
        </PageContainer>
      </PageRoot>
    </ReferencesPageScope>
  );
};

export default ReferencesPage;