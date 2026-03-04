import { useEffect, useMemo, useState } from 'react';
import { motion, easeOut } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaArrowRight, FaChartLine, FaFilter, FaDatabase, FaCalendarAlt, FaArrowUp } from 'react-icons/fa';
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
  niche: Niche;
  labelKey: `references.niches.${Niche}`;
  metricLabelKey: string;
  metricValue: string;
  timeframe: string;
  source: string;
  sparkline: number[];
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

const NICHE_METRICS: NicheMetric[] = [
  { niche: 'handwerk', labelKey: 'references.niches.handwerk', metricLabelKey: 'references.metrics.moreRequests', metricValue: '+41%', timeframe: '30-90', source: 'GA4 / Google Ads', sparkline: [16, 18, 22, 24, 27, 31, 34] },
  { niche: 'praxen', labelKey: 'references.niches.praxen', metricLabelKey: 'references.metrics.moreAppointments', metricValue: '+33%', timeframe: '30-90', source: 'GA4 / Meta Ads', sparkline: [14, 15, 19, 23, 25, 27, 30] },
  { niche: 'werkstatt', labelKey: 'references.niches.werkstatt', metricLabelKey: 'references.metrics.moreCalls', metricValue: '+46%', timeframe: '30-90', source: 'GA4 / Google Ads', sparkline: [11, 14, 17, 22, 26, 31, 36] },
  { niche: 'gastronomie', labelKey: 'references.niches.gastronomie', metricLabelKey: 'references.metrics.moreReservations', metricValue: '+27%', timeframe: '30-90', source: 'GA4 / Meta Ads', sparkline: [16, 16, 19, 21, 22, 24, 27] },
  { niche: 'beauty', labelKey: 'references.niches.beauty', metricLabelKey: 'references.metrics.moreBookings', metricValue: '+31%', timeframe: '30-90', source: 'GA4 / Meta Ads', sparkline: [13, 16, 18, 21, 23, 25, 29] },
  { niche: 'immobilien', labelKey: 'references.niches.immobilien', metricLabelKey: 'references.metrics.moreLeads', metricValue: '+22%', timeframe: '30-90', source: 'GA4 / Search Console', sparkline: [9, 11, 12, 14, 16, 17, 19] },
  { niche: 'kanzlei', labelKey: 'references.niches.kanzlei', metricLabelKey: 'references.metrics.moreIntroCalls', metricValue: '+24%', timeframe: '30-90', source: 'GA4 / Google Ads', sparkline: [11, 12, 14, 15, 17, 18, 20] },
  { niche: 'fitnessPhysio', labelKey: 'references.niches.fitnessPhysio', metricLabelKey: 'references.metrics.moreTrialSessions', metricValue: '+29%', timeframe: '30-90', source: 'GA4 / Meta Ads', sparkline: [10, 13, 15, 18, 20, 22, 25] },
  { niche: 'reinigung', labelKey: 'references.niches.reinigung', metricLabelKey: 'references.metrics.moreOffers', metricValue: '+35%', timeframe: '30-90', source: 'GA4 / Google Ads', sparkline: [12, 14, 17, 20, 22, 25, 28] },
  { niche: 'umzugTransport', labelKey: 'references.niches.umzugTransport', metricLabelKey: 'references.metrics.moreQualifiedLeads', metricValue: '+26%', timeframe: '30-90', source: 'GA4 / Google Ads', sparkline: [11, 13, 14, 17, 18, 20, 23] },
  { niche: 'coachingBeratung', labelKey: 'references.niches.coachingBeratung', metricLabelKey: 'references.metrics.moreFirstContacts', metricValue: '+28%', timeframe: '30-90', source: 'GA4 / Meta Ads', sparkline: [10, 12, 14, 16, 18, 20, 22] },
  { niche: 'bildungKurse', labelKey: 'references.niches.bildungKurse', metricLabelKey: 'references.metrics.moreCourseSignups', metricValue: '+32%', timeframe: '30-90', source: 'GA4 / Search Console / Ads', sparkline: [8, 10, 13, 15, 17, 20, 23] },
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
    timeframe: '30-90',
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
    timeframe: '30-90',
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
    timeframe: '30-90',
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
    timeframe: '30-90',
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
    timeframe: '30-90',
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
    timeframe: '30-90',
    source: 'GA4 / Google Ads',
    beforeImage: caseBefore3,
    afterImage: caseAfter2,
  },
];

const FILTER_GROUPS: Array<{ label: string; items: Array<'all' | Niche> }> = [
  { label: 'references.filterGroups.all', items: ['all'] },
  { label: 'references.filterGroups.localServices', items: ['handwerk', 'werkstatt', 'reinigung', 'umzugTransport'] },
  { label: 'references.filterGroups.healthBeauty', items: ['praxen', 'fitnessPhysio', 'beauty'] },
  { label: 'references.filterGroups.professional', items: ['immobilien', 'kanzlei', 'coachingBeratung', 'bildungKurse', 'gastronomie'] },
];

const HERO_KPIS = [
  { value: '+41%', label: 'references.kpis.leads' },
  { value: '+27%', label: 'references.kpis.conversion' },
  { value: '+32%', label: 'references.kpis.traffic' },
];

const BEFORE_COMPARE = { traffic: '-12%', leads: '-18%', conversion: '-9%' };
const AFTER_COMPARE = { traffic: '+32%', leads: '+41%', conversion: '+27%' };
const DAY_LABELS = [0, 15, 30, 45, 60, 75, 90];
const BEFORE_CURVE = [11, 10, 10, 9, 10, 9, 10];
const AFTER_CURVE = [8, 14, 21, 29, 38, 48, 58];

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));
const FALLBACK_HERO_PATH = 'M 0 99 C 30 72, 70 30, 100 1';
const FALLBACK_SPARKLINE_PATH = 'M 0 39 C 35 30, 68 14, 100 1';

const HERO_BASE_Y = [98, 94, 89, 83, 77, 70, 62, 54, 46, 38, 29, 21, 12, 3];

const toSmoothPath = (points: Array<{ x: number; y: number }>): string => {
  if (points.length < 2) return FALLBACK_HERO_PATH;

  const tension = 0.1;
  let d = `M ${points[0].x.toFixed(2)} ${points[0].y.toFixed(2)}`;

  for (let i = 0; i < points.length - 1; i += 1) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;

    const cp1x = p1.x + ((p2.x - p0.x) * tension) / 6;
    const cp1y = p1.y + ((p2.y - p0.y) * tension) / 6;
    const cp2x = p2.x - ((p3.x - p1.x) * tension) / 6;
    const cp2y = p2.y - ((p3.y - p1.y) * tension) / 6;

    d += ` C ${cp1x.toFixed(2)} ${cp1y.toFixed(2)}, ${cp2x.toFixed(2)} ${cp2y.toFixed(2)}, ${p2.x.toFixed(2)} ${p2.y.toFixed(2)}`;
  }

  return d;
};

const buildHeroGrowthPath = (phase: number): string => {
  const startX = 0;
  const endX = 100;

  const points = HERO_BASE_Y.map((baseY, index) => {
    const x = startX + ((endX - startX) * index) / (HERO_BASE_Y.length - 1);
    const waveA = Math.sin(phase * 1.1 + index * 1.05) * 6.8;
    const waveB = Math.sin(phase * 0.72 + index * 0.46) * 3.4;
    const waveC = Math.sin(phase * 1.8 + index * 1.7) * 1.6;
    const y = clamp(baseY + waveA + waveB + waveC, 1, 99);
    return { x, y };
  });

  return toSmoothPath(points);
};

const buildSparklinePath = (values: number[] | undefined, phase: number): string => {
  if (!values || values.length < 2) return FALLBACK_SPARKLINE_PATH;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = Math.max(1, max - min);

  const points = values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * 100;
      const normalized = (value - min) / range;
      const baseY = 39 - normalized * 38;
      const waveA = Math.sin(phase * 1.15 + index * 1.2) * 3.6;
      const waveB = Math.sin(phase * 0.74 + index * 0.52) * 2.0;
      const waveC = Math.sin(phase * 1.9 + index * 1.65) * 0.9;
      const y = clamp(baseY + waveA + waveB + waveC, 1, 39);
      return { x, y };
    });

  return toSmoothPath(points);
};

const buildStaticComparePoints = (values: number[]): Array<{ x: number; y: number; value: number }> => {
  const maxValue = 60;
  return values.map((value, index) => {
    const x = (index / (values.length - 1)) * 100;
    const y = clamp(56 - (value / maxValue) * 52, 2, 58);
    return { x, y, value };
  });
};

const getDeltaLabel = (values: number[], index: number): string => {
  if (index === 0) return '*';
  const delta = values[index] - values[index - 1];
  if (delta > 0) return `+${delta}`;
  if (delta < 0) return `${delta}`;
  return '0';
};

const ReferencesPage: React.FC = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<'all' | Niche>('all');
  const [heroCurvePhase, setHeroCurvePhase] = useState(0);

  const visibleCases = useMemo(
    () => CASE_STUDIES.filter(caseItem => activeFilter === 'all' || caseItem.category === activeFilter),
    [activeFilter]
  );

  const visibleNicheMetrics = useMemo(
    () => NICHE_METRICS.filter(item => activeFilter === 'all' || item.niche === activeFilter),
    [activeFilter]
  );

  const compareCase = visibleCases[0] ?? CASE_STUDIES[0];
  const heroChartPath = useMemo(() => buildHeroGrowthPath(heroCurvePhase) || FALLBACK_HERO_PATH, [heroCurvePhase]);
  const beforeComparePoints = useMemo(() => buildStaticComparePoints(BEFORE_CURVE), []);
  const afterComparePoints = useMemo(() => buildStaticComparePoints(AFTER_CURVE), []);
  const beforeComparePath = useMemo(() => toSmoothPath(beforeComparePoints), [beforeComparePoints]);
  const afterComparePath = useMemo(() => toSmoothPath(afterComparePoints), [afterComparePoints]);

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setHeroCurvePhase(prev => (prev + 0.12) % (Math.PI * 8));
    }, 70);

    return () => window.clearInterval(timerId);
  }, []);

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
            <div className='references-hero-grid'>
              <div className='references-hero-copy'>
                <h1><TerminalType text={t('references.h1')} durationMs={2800} storageKey='refs_h1_new_once' /></h1>
                <p>{t('references.subtitle')}</p>
                <Muted>{t('references.trustline')}</Muted>
              </div>
              <Card
                className='references-hero-dashboard'
                as={motion.div}
                whileHover={{ y: -4 }}
                animate={{
                  boxShadow: [
                    '0 0 0 1px rgba(125, 210, 255, 0.2) inset, 0 24px 50px rgba(2, 8, 20, 0.52)',
                    '0 0 0 1px rgba(141, 218, 255, 0.32) inset, 0 30px 62px rgba(3, 12, 28, 0.62)',
                    '0 0 0 1px rgba(125, 210, 255, 0.2) inset, 0 24px 50px rgba(2, 8, 20, 0.52)',
                  ],
                  borderColor: ['rgba(124, 193, 255, 0.32)', 'rgba(124, 220, 255, 0.58)', 'rgba(124, 193, 255, 0.32)'],
                }}
                transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <p className='references-dashboard-label'>{t('references.performanceDashboard')}</p>
                <div className='references-kpi-row'>
                  {HERO_KPIS.map((kpi, index) => (
                    <motion.div
                      key={kpi.label}
                      className='references-kpi-item'
                      animate={{
                        y: [0, -6, 0],
                        opacity: [0.86, 1, 0.86],
                      }}
                      transition={{
                        duration: 3.4,
                        delay: index * 0.45,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <span className='references-kpi-value'>{kpi.value}</span>
                      <span className='references-kpi-label'>{t(kpi.label)}</span>
                    </motion.div>
                  ))}
                </div>
                <div className='references-growth-chart-wrap'>
                  <p className='references-chart-label'>{t('references.growthCurve90')}</p>
                  <svg
                    viewBox='0 0 100 100'
                    preserveAspectRatio='none'
                    className='references-growth-chart'
                    role='img'
                    aria-label={t('references.growthChartAria')}
                  >
                    <defs>
                      <linearGradient id='refsGrowth' x1='0%' y1='0%' x2='100%' y2='0%'>
                        <stop offset='0%' stopColor='#00c2ff' />
                        <stop offset='100%' stopColor='#56f5a0' />
                      </linearGradient>
                    </defs>
                    <path d={heroChartPath} />
                  </svg>
                </div>
              </Card>
            </div>
          </HeroSection>

          <Section className='references-filter-wrap'>
            <h2 className='references-title'><FaFilter /> {t('references.filterTitle')}</h2>
            <Muted>{t('references.counter', { count: visibleCases.length })}</Muted>
            <div className='references-filter-groups' role='tablist' aria-label={t('references.filterAria')}>
              {FILTER_GROUPS.map(group => (
                <div key={group.label} className='references-filter-group'>
                  <p className='references-filter-group-label'>{t(group.label)}</p>
                  <div className='references-filters'>
                    {group.items.map(item => (
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
                </div>
              ))}
            </div>
          </Section>

          <Section className='references-metric-band'>
            <h2 className='references-title'><FaChartLine /> {t('references.growthByNiche')}</h2>
            <Grid3 className='grid-3'>
              {visibleNicheMetrics.map((item, index) => (
                <Card
                  className='references-metric-card'
                  key={item.labelKey}
                  as={motion.article}
                  animate={{
                    y: [0, -5, 0],
                    borderColor: ['rgba(111, 178, 255, 0.18)', 'rgba(116, 210, 255, 0.48)', 'rgba(111, 178, 255, 0.18)'],
                    boxShadow: ['0 10px 24px rgba(0, 0, 0, 0.2)', '0 16px 34px rgba(8, 31, 61, 0.36)', '0 10px 24px rgba(0, 0, 0, 0.2)'],
                  }}
                  transition={{
                    duration: 4.2,
                    delay: index * 0.18,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <div className='references-metric-head'>
                    <h3>{t(item.labelKey)}</h3>
                    <span className='references-kpi-badge'><FaArrowUp /> {item.metricValue}</span>
                  </div>
                  <p className='references-metric-line'>{t(item.metricLabelKey)}</p>
                  <svg
                    viewBox='0 0 100 40'
                    preserveAspectRatio='none'
                    className='references-sparkline'
                    role='img'
                    aria-label={t('references.trendAria', { niche: t(item.labelKey) })}
                  >
                    <path d={buildSparklinePath(item.sparkline, heroCurvePhase + index * 0.9) || FALLBACK_SPARKLINE_PATH} />
                  </svg>
                  <Muted><FaCalendarAlt /> {t('references.periodLabel')}: {item.timeframe} {t('references.daysUnit')}</Muted>
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
                    <div className='references-case-block'>
                      <p className='references-case-label'>{t('references.challengeLabel')}</p>
                      <p>{t(caseItem.challengeKey)}</p>
                    </div>
                    <div className='references-case-block'>
                      <p className='references-case-label'>{t('references.solutionLabel')}</p>
                      <p>{t(caseItem.solutionKey)}</p>
                    </div>
                    <div className='references-case-result'>
                      <p className='references-case-label'>{t('references.resultLabel')}</p>
                      {caseItem.metrics.map(metric => (
                        <p key={`${caseItem.id}-${metric.metricLabelKey}`}>{t(metric.metricLabelKey)}: <span>{metric.metricValue}</span></p>
                      ))}
                    </div>
                    <Muted><FaCalendarAlt /> {t('references.periodLabel')}: {caseItem.timeframe} {t('references.daysUnit')}</Muted>
                    <Muted><FaDatabase /> {t('references.measurementLabel')}: {caseItem.source}</Muted>
                  </Card>
                ))}
              </Grid2>
            )}
          </Section>

          <Section>
            <h2 className='references-title'>{t('references.beforeAfter')}</h2>
            <div className='references-compare-shell'>
              <div className='references-compare-chart'>
                <svg
                  viewBox='0 0 100 60'
                  preserveAspectRatio='none'
                  className='references-compare-graph'
                  role='img'
                  aria-label={t('references.compareGraphAria')}
                >
                  {[0, 16.66, 33.33, 50, 66.66, 83.33, 100].map(x => (
                    <line key={`vx-${x}`} x1={x} y1='0' x2={x} y2='60' className='grid-line' />
                  ))}
                  {[8, 16, 24, 32, 40, 48, 56].map(y => (
                    <line key={`hy-${y}`} x1='0' y1={y} x2='100' y2={y} className='grid-line' />
                  ))}
                  <line x1='0' y1='58' x2='100' y2='58' className='axis-line' />
                  <path className='before-line' d={beforeComparePath} />
                  <path className='after-line' d={afterComparePath} />
                  {beforeComparePoints.map((point, index) => (
                    <g key={`before-point-${index}`}>
                      <circle className='before-point' cx={point.x} cy={point.y} r='1.2' />
                      <text className='point-delta before' x={point.x} y={clamp(point.y + 4.4, 4, 59)}>
                        {getDeltaLabel(BEFORE_CURVE, index)}
                      </text>
                    </g>
                  ))}
                  {afterComparePoints.map((point, index) => (
                    <g key={`after-point-${index}`}>
                      <circle className='after-point' cx={point.x} cy={point.y} r='1.4' />
                      <text className='point-delta after' x={point.x} y={clamp(point.y - 2.2, 1.5, 58)}>
                        {getDeltaLabel(AFTER_CURVE, index)}
                      </text>
                    </g>
                  ))}
                </svg>
                <div className='references-compare-days'>
                  {DAY_LABELS.map(day => (
                    <span key={day}>{t('references.dayLabel', { day })}</span>
                  ))}
                </div>
                <div className='references-compare-legend'>
                  <span><i className='dot before' /> {t('references.beforeLegend')}</span>
                  <span><i className='dot after' /> {t('references.afterLegend')}</span>
                </div>
              </div>
              <div className='references-compare-kpis'>
                <div className='kpi-panel before'>
                  <h3>{t('references.before')}</h3>
                  <p>{t('references.kpis.traffic')} <span>{BEFORE_COMPARE.traffic}</span></p>
                  <p>{t('references.kpis.leads')} <span>{BEFORE_COMPARE.leads}</span></p>
                  <p>{t('references.kpis.conversion')} <span>{BEFORE_COMPARE.conversion}</span></p>
                </div>
                <div className='kpi-panel after'>
                  <h3>{t('references.after')}</h3>
                  <p>{t('references.kpis.traffic')} <span>{AFTER_COMPARE.traffic}</span></p>
                  <p>{t('references.kpis.leads')} <span>{AFTER_COMPARE.leads}</span></p>
                  <p>{t('references.kpis.conversion')} <span>{AFTER_COMPARE.conversion}</span></p>
                </div>
              </div>
            </div>
            <Muted>{t('references.periodLabel')}: {compareCase.timeframe} {t('references.daysUnit')} · {t('references.measurementLabel')}: {compareCase.source}</Muted>
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

