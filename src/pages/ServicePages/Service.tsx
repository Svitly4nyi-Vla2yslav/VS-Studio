import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'react-i18next';
import {
  FaArrowRight,
  FaBolt,  FaBullhorn,
  FaChartLine,
  FaCheckCircle,
  FaCode,
  FaDatabase,
  FaLayerGroup,
  FaRobot,
} from 'react-icons/fa';
import LiveMetric from '../../components/Motion/LiveMetric';
import TerminalType from '../../components/Motion/TerminalType';
import { fadeInLeft, fadeInRight, fadeInUp, scaleIn, staggerContainer } from '../../components/Motion/reveal';
import servicesTranslations from './services.translations.json';
import {
  ButtonRow,
  Checklist,
  IconBadge,
  Muted,
  PageContainer,
  PageRoot,
  PrimaryButtonLink,
} from '../shared/styles/PagePrimitives.styles';

const glowPulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(58, 197, 255, 0.28); }
  70% { box-shadow: 0 0 0 14px rgba(58, 197, 255, 0); }
  100% { box-shadow: 0 0 0 0 rgba(58, 197, 255, 0); }
`;

const bgFloat = keyframes`
  0% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(0, -8px, 0); }
  100% { transform: translate3d(0, 0, 0); }
`;

const StyledPageRoot = styled(PageRoot)`
  position: relative;
  overflow: clip;
  background:
    radial-gradient(1200px 600px at 12% -8%, rgba(46, 132, 255, 0.2), transparent 60%),
    radial-gradient(1000px 680px at 88% 2%, rgba(37, 187, 255, 0.15), transparent 64%),
    #0b0f17;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 34px 34px;
    opacity: 0.38;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    inset: -20%;
    background: radial-gradient(circle at center, rgba(255, 255, 255, 0.04) 0.5px, transparent 0.5px);
    background-size: 3px 3px;
    opacity: 0.08;
    pointer-events: none;
  }
`;

const SectionShell = styled(motion.section)`
  position: relative;
  margin-top: clamp(54px, 8vw, 108px);
  padding-inline: clamp(2px, 1vw, 12px);

  h2 {
    margin: 0 0 18px;
    line-height: 1.08;
  }

  > p {
    margin: 8px 0 22px;
  }
`;

const HeroGrid = styled(motion.section)`
  display: grid;
  grid-template-columns: 1.06fr 0.94fr;
  gap: clamp(24px, 3vw, 44px);
  padding-top: clamp(44px, 6vw, 80px);

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const HeroCopy = styled.div`
  display: grid;
  gap: 20px;
  align-content: start;
`;

const Eyebrow = styled.p`
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 12px;
  color: rgba(207, 233, 255, 0.8);
`;

const HeroTitle = styled.h1`
  margin: 0;
  line-height: 0.92;
  max-width: 12ch;
  display: grid;
  gap: 6px;

  span:first-child {
    font-size: clamp(34px, 7vw, 68px);
    font-weight: 400;
    color: rgba(255, 255, 255, 0.85);
  }

  span:nth-child(2) {
    font-size: clamp(40px, 9vw, 84px);
    font-weight: 700;
    color: #f5fbff;
  }

  span:last-child {
    font-size: clamp(30px, 6vw, 58px);
    font-weight: 500;
    color: rgba(160, 225, 255, 0.95);
  }
`;

const HeroLead = styled.p`
  margin: 8px 0 18px;
  max-width: 62ch;
  color: rgba(235, 244, 255, 0.82);
  font-size: clamp(15px, 2vw, 19px);
  line-height: 1.62;
`;

const HeroCta = styled(PrimaryButtonLink)`
  width: fit-content;
  border: 1px solid rgba(255, 228, 184, 0.6);
  box-shadow:
    0 0 0 1px rgba(243, 154, 79, 0.5),
    0 14px 30px rgba(243, 154, 79, 0.24),
    0 0 28px rgba(243, 154, 79, 0.3);

  &:hover,
  &:focus-visible {
    transform: translateY(-3px) scale(1.01);
    box-shadow:
      0 0 0 1px rgba(255, 225, 181, 0.7),
      0 18px 40px rgba(243, 154, 79, 0.36),
      0 0 44px rgba(251, 196, 122, 0.4);
  }
`;

const HeroVisual = styled.div`
  position: relative;
  min-height: clamp(360px, 56vw, 520px);
  border-radius: 24px;
  border: 1px solid rgba(129, 198, 255, 0.32);
  background:
    radial-gradient(660px 280px at 70% -10%, rgba(68, 208, 255, 0.2), transparent 72%),
    linear-gradient(160deg, rgba(14, 21, 34, 0.92), rgba(10, 15, 23, 0.95));
  box-shadow:
    inset 0 1px 0 rgba(195, 230, 255, 0.18),
    inset 0 -20px 40px rgba(7, 11, 20, 0.7),
    0 30px 60px rgba(0, 0, 0, 0.45);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 16px;
    border-radius: 16px;
    border: 1px solid rgba(127, 204, 255, 0.3);
    background-image:
      linear-gradient(rgba(142, 209, 255, 0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(142, 209, 255, 0.08) 1px, transparent 1px);
    background-size: 22px 22px;
  }

  @media (max-width: 760px) {
    min-height: auto;
  }
`;

const Orb = styled.div`
  position: absolute;
  width: 220px;
  height: 220px;
  top: -72px;
  right: -54px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(70, 198, 255, 0.35), rgba(70, 198, 255, 0));
  filter: blur(2px);
  animation: ${bgFloat} 6.2s ease-in-out infinite;
`;

const DashboardShell = styled.div`
  position: absolute;
  inset: 44px 34px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 12px;

  @media (max-width: 760px) {
    position: relative;
    inset: auto;
    padding: 18px 14px 16px;
    gap: 10px;
  }
`;

const DashTop = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
`;

const KpiChip = styled(motion.div)`
  border-radius: 12px;
  border: 1px solid rgba(135, 209, 255, 0.24);
  background: rgba(15, 28, 44, 0.84);
  padding: 10px 12px;
  backdrop-filter: blur(3px);

  b {
    display: block;
    font-size: 15px;
    color: #eff8ff;
  }

  span {
    font-size: 11px;
    color: rgba(191, 220, 247, 0.78);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
`;

const DashMain = styled(motion.div)`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 10px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`;

const ChartPlate = styled.div`
  border-radius: 14px;
  border: 1px solid rgba(119, 193, 255, 0.24);
  background: linear-gradient(175deg, rgba(15, 30, 48, 0.88), rgba(11, 19, 31, 0.84));
  padding: 14px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: linear-gradient(transparent 93%, rgba(135, 206, 250, 0.08) 93%);
    background-size: 100% 20%;
  }

  @media (max-width: 760px) {
    min-height: 180px;
  }
`;

const Bars = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: end;
  gap: 8px;
  height: 100%;

  span {
    display: block;
    flex: 1;
    border-radius: 8px 8px 2px 2px;
    background: linear-gradient(180deg, rgba(101, 217, 255, 0.9), rgba(44, 110, 197, 0.34));
    transform-origin: bottom center;
    will-change: transform, filter, opacity;
  }
`;

const FlowPlate = styled.div`
  border-radius: 14px;
  border: 1px solid rgba(119, 193, 255, 0.24);
  background: rgba(10, 19, 30, 0.8);
  padding: 12px;
  display: grid;
  gap: 8px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr 1fr;
    gap: 6px;
  }
`;

const FlowNode = styled(motion.div)`
  border-radius: 10px;
  border: 1px solid rgba(116, 205, 255, 0.3);
  background: rgba(20, 34, 53, 0.8);
  padding: 8px 10px;
  font-size: 12px;
  color: rgba(219, 239, 255, 0.94);

  @media (max-width: 760px) {
    font-size: 11px;
    padding: 7px 8px;
  }
`;

const DashBottom = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const GlowBadge = styled(motion.span)`
  border-radius: 999px;
  padding: 7px 11px;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #d8f2ff;
  border: 1px solid rgba(111, 206, 255, 0.38);
  background: rgba(22, 41, 62, 0.76);
  box-shadow: inset 0 0 12px rgba(80, 193, 255, 0.14);
`;

const SegmentWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const SegmentBtn = styled.button<{ $active: boolean }>`
  border-radius: 999px;
  border: 1px solid ${({ $active }) => ($active ? 'rgba(122, 206, 255, 0.72)' : 'rgba(255, 255, 255, 0.18)')};
  background: ${({ $active }) => ($active ? 'rgba(25, 58, 87, 0.72)' : 'rgba(255, 255, 255, 0.04)')};
  color: ${({ $active }) => ($active ? '#ecf7ff' : 'rgba(225, 239, 255, 0.84)')};
  padding: 8px 14px;
  font-size: 13px;
  transition: all var(--dur-mid) var(--ease-smooth);

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(134, 213, 255, 0.66);
  }
`;

const ServiceGrid = styled(motion.div)`
  margin-top: 24px;
  display: grid;
  gap: 14px;
  grid-template-columns: 1.5fr 1fr 1fr;
  grid-template-areas:
    'dominant mediumA compact'
    'dominant mediumB compact';

  @media (max-width: 1050px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'dominant dominant'
      'mediumA mediumB'
      'compact compact';
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'dominant'
      'mediumA'
      'mediumB'
      'compact';
  }
`;

const SurfaceCard = styled(motion.article)<{ $area?: string; $compact?: boolean; $featured?: boolean }>`
  grid-area: ${({ $area }) => $area ?? 'auto'};
  border-radius: ${({ $compact }) => ($compact ? '16px' : '20px')};
  border: 1px solid ${({ $featured }) => ($featured ? 'rgba(101, 205, 255, 0.5)' : 'rgba(255, 255, 255, 0.14)')};
  background:
    radial-gradient(420px 220px at 12% -12%, rgba(62, 177, 255, 0.13), transparent 65%),
    linear-gradient(168deg, rgba(15, 22, 35, 0.94), rgba(10, 15, 24, 0.9));
  padding: ${({ $compact }) => ($compact ? '18px' : '24px')};
  box-shadow:
    ${({ $featured }) => ($featured ? '0 0 0 1px rgba(91, 198, 255, 0.2),' : '')}
    inset 0 1px 0 rgba(178, 216, 245, 0.12),
    0 20px 40px rgba(0, 0, 0, 0.3);
  transition: transform var(--dur-mid) var(--ease-smooth), border-color var(--dur-mid) var(--ease-smooth), box-shadow var(--dur-mid) var(--ease-smooth);

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(132, 212, 255, 0.66);
    box-shadow:
      0 0 0 1px rgba(104, 208, 255, 0.2),
      inset 0 1px 0 rgba(178, 216, 245, 0.14),
      0 26px 50px rgba(0, 0, 0, 0.4);
  }

  h3 {
    margin: 0 0 12px;
    font-size: ${({ $compact }) => ($compact ? '18px' : '24px')};
    line-height: 1.2;
  }

  p {
    margin: 8px 0 14px;
    line-height: 1.58;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

const Trio = styled.div`
  margin-top: 16px;
  display: grid;
  gap: 10px;
`;

const TrioItem = styled(motion.div)`
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.03);
  padding: 12px 14px;

  strong {
    display: block;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #9fdffd;
    margin-bottom: 4px;
  }

  span {
    color: rgba(229, 241, 252, 0.88);
    font-size: 14px;
    line-height: 1.5;
  }
`;

const Collapsible = styled.details`
  margin-top: 14px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.03);
  padding: 10px;

  summary {
    cursor: pointer;
    color: #d6ecff;
    font-size: 13px;
    font-weight: 600;
  }

  ul {
    margin: 12px 0 0;
    padding-left: 18px;
    display: grid;
    gap: 6px;
    color: rgba(225, 240, 255, 0.84);
    font-size: 13px;
  }
`;

const IconMatrix = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;

  span {
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(255, 255, 255, 0.03);
    padding: 8px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    color: rgba(226, 241, 255, 0.84);
  }
`;

const PackageGrid = styled(motion.div)`
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const TierCard = styled(motion.article)<{ $recommended?: boolean }>`
  position: relative;
  border-radius: 20px;
  padding: 24px;
  border: 1px solid ${({ $recommended }) => ($recommended ? 'rgba(255, 206, 121, 0.66)' : 'rgba(255, 255, 255, 0.16)')};
  background:
    ${({ $recommended }) =>
    $recommended
      ? 'radial-gradient(380px 180px at 80% -20%, rgba(255, 205, 116, 0.16), transparent 66%), linear-gradient(170deg, rgba(20, 26, 38, 0.96), rgba(12, 16, 25, 0.95))'
      : 'linear-gradient(170deg, rgba(16, 23, 35, 0.94), rgba(11, 15, 23, 0.92))'};
  box-shadow:
    ${({ $recommended }) => ($recommended ? '0 0 34px rgba(255, 198, 99, 0.24),' : '')}
    inset 0 1px 0 rgba(192, 224, 249, 0.13),
    0 24px 44px rgba(0, 0, 0, 0.35);

  h3 {
    margin: 0;
    font-size: 26px;
  }
`;

const Badge = styled.span`
  position: absolute;
  top: 12px;
  right: 14px;
  border-radius: 999px;
  border: 1px solid rgba(255, 205, 121, 0.72);
  color: #ffdeab;
  padding: 5px 10px;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const ScaleMeter = styled.div`
  margin-top: 14px;
  display: flex;
  gap: 6px;

  i {
    height: 6px;
    flex: 1;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.14);
  }

  i.on {
    background: linear-gradient(90deg, #45cfff, #ffdca8);
    box-shadow: 0 0 12px rgba(80, 200, 255, 0.35);
  }
`;

const TierLead = styled.p`
  margin: 14px 0 20px;
  color: rgba(220, 238, 255, 0.84);
  line-height: 1.58;
`;

const Timeline = styled(motion.ol)`
  list-style: none;
  margin: 0;
  padding: 36px 0 0;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 14px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 12px;
    height: 2px;
    background: linear-gradient(90deg, rgba(76, 173, 255, 0.5), rgba(146, 226, 255, 0.7), rgba(255, 214, 150, 0.6));
    box-shadow: 0 0 18px rgba(75, 182, 255, 0.36);
  }

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    padding-top: 0;

    &::before {
      left: 11px;
      top: 0;
      bottom: 0;
      width: 2px;
      right: auto;
      height: auto;
      background: linear-gradient(180deg, rgba(76, 173, 255, 0.5), rgba(146, 226, 255, 0.7), rgba(255, 214, 150, 0.6));
    }
  }
`;

const StepCard = styled(motion.li)`
  position: relative;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.13);
  background: linear-gradient(165deg, rgba(17, 24, 37, 0.94), rgba(10, 14, 22, 0.92));
  padding: 16px;
  min-height: 140px;
  transition: transform var(--dur-mid) var(--ease-smooth), border-color var(--dur-mid) var(--ease-smooth);

  &::before {
    content: '';
    position: absolute;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    border: 2px solid rgba(117, 209, 255, 0.95);
    background: #0c141f;
    top: -30px;
    left: 16px;
    animation: ${glowPulse} 2.8s infinite;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(133, 213, 255, 0.64);
  }

  @media (max-width: 980px) {
    margin-left: 28px;

    &::before {
      top: 18px;
      left: -23px;
    }
  }
`;

const StepIdx = styled.span`
  display: block;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(173, 216, 247, 0.82);
`;

const StepTitle = styled.h3`
  margin: 8px 0 12px;
  font-size: 18px;
`;

const ControlGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 18px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const ControlPanel = styled(motion.article)`
  border-radius: 20px;
  border: 1px solid rgba(114, 200, 255, 0.28);
  background:
    radial-gradient(560px 260px at 86% -18%, rgba(70, 189, 255, 0.16), transparent 70%),
    linear-gradient(165deg, rgba(16, 25, 39, 0.95), rgba(9, 14, 22, 0.95));
  padding: 24px;
  box-shadow:
    inset 0 1px 0 rgba(180, 220, 250, 0.12),
    0 26px 50px rgba(0, 0, 0, 0.38);

  h3 {
    margin: 0 0 12px;
  }
`;

const CounterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const CounterCard = styled(motion.div)`
  border-radius: 12px;
  border: 1px solid rgba(132, 209, 255, 0.24);
  background: rgba(14, 28, 43, 0.78);
  padding: 14px;

  span {
    display: block;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: rgba(181, 220, 249, 0.78);
  }

  strong {
    font-size: clamp(24px, 4vw, 34px);
    color: #ecf8ff;
    font-weight: 700;
  }
`;

const MiniCharts = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;

  div {
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(255, 255, 255, 0.03);
    padding: 12px;
    min-height: 78px;
  }

  i {
    display: block;
    width: 100%;
    height: 6px;
    border-radius: 999px;
    margin-top: 8px;
    background: linear-gradient(90deg, rgba(61, 208, 255, 0.92), rgba(255, 214, 147, 0.84));
  }
`;

const CompactMuted = styled(Muted)`
  font-size: 14px;
  line-height: 1.6;
  margin: 8px 0 18px;
`;

type SystemKey = 'website' | 'ai' | 'ads' | 'analytics';
type LangKey = 'de' | 'uk' | 'tr' | 'ar' | 'pl' | 'ku' | 'fa' | 'it' | 'es' | 'el' | 'ro' | 'bg';

type SystemData = {
  title: string;
  icon: JSX.Element;
  problem: string;
  system: string;
  outcome: string;
  kpis: string[];
  details: string[];
};

type SystemTextData = Omit<SystemData, 'icon'>;
type LocalizedData = {
  copy: typeof copyDe;
  systems: Record<SystemKey, SystemTextData>;
  packages: typeof packagesDe;
  timeline: readonly TimelineStep[];
};

const systemsDe: Record<SystemKey, SystemData> = {
  website: {
    title: 'Website Engine',
    icon: <FaCode />,
    problem: 'Traffic ist vorhanden, aber mobile Nutzer brechen vor dem Formular ab.',
    system: 'Landing/Multi-Page mit GA4, Meta Pixel, Server-Side Tracking, CRM und DSGVO-Setup.',
    outcome: 'Jeder Lead wird nachvollziehbar erfasst und eindeutig einem Kanal zugeordnet.',
    kpis: ['Tracking-Quote', 'Form Completion', 'Lead Source Clarity'],
    details: ['Consent Mode korrekt konfiguriert', 'Call- und WhatsApp-Events', 'CRM Push in Echtzeit'],
  },
  ai: {
    title: 'AI Qualification Layer',
    icon: <FaRobot />,
    problem: 'Zu viele unqualifizierte Anfragen blockieren Vertrieb und Telefonteam.',
    system: 'AI-Chatbot, Auto-Qualifizierung, DM-Flows in WhatsApp/Instagram, E-Mail-Automation, Lead Scoring.',
    outcome: 'Das Team priorisiert kaufnahe Leads statt zeitintensiver Erstsortierung.',
    kpis: ['First Response Time', 'Qualified Lead Share', 'Sales Team Throughput'],
    details: ['Branchenspezifische Prompt-Pfade', 'No-Show Reminders', 'Priorisierung nach Score'],
  },
  ads: {
    title: 'Paid Acquisition',
    icon: <FaBullhorn />,
    problem: 'Das Budget verteilt sich ohne klare Lernschleife zwischen den Kanaelen.',
    system: 'Google Ads + Meta Ads + TikTok, A/B Tests, Lookalikes, Conversion Tracking und ROAS-View.',
    outcome: 'Budget fliesst in Kampagnen mit hoher Lead-Qualitaet statt in reine Klickmenge.',
    kpis: ['Cost per Qualified Lead', 'ROAS by Campaign', 'Creative Win Rate'],
    details: ['Regionale Kampagnencluster', 'Form-Varianten im Test', 'Signalbasierte Audience-Updates'],
  },
  analytics: {
    title: 'Control Analytics',
    icon: <FaChartLine />,
    problem: 'Entscheidungen basieren auf Plattform-Screenshots statt auf belastbaren Funnel-Daten.',
    system: 'Control-Room Dashboard mit Kanal-, Funnel- und CRM-Sicht in einer Ebene.',
    outcome: 'Woechentliche Entscheidungen zu Budget, Optimierung und Skalierung sind datenbasiert nachvollziehbar.',
    kpis: ['Lead to Appointment', 'Lead to Deal', 'Pipeline Velocity'],
    details: ['Segmentierung nach Region/Service', 'Alerts bei Funnel Drop', 'Monatliche Hypothesenliste'],
  },
};

const systemsUk: Record<SystemKey, SystemData> = {
  website: {
    title: 'Website Engine',
    icon: <FaCode />,
    problem: 'Трафік є, але мобільні користувачі не доходять до відправки форми.',
    system: 'Landing/Multi-page з GA4, Meta Pixel, server-side tracking, CRM та DSGVO-базою.',
    outcome: 'Кожен лід фіксується та однозначно привʼязується до каналу.',
    kpis: ['Якість трекінгу', 'Form Completion', 'Lead Source Clarity'],
    details: ['Коректний Consent Mode', 'Call/WhatsApp події', 'CRM push у реальному часі'],
  },
  ai: {
    title: 'AI Qualification Layer',
    icon: <FaRobot />,
    problem: 'Надто багато нецільових звернень перевантажують продажі та телефон.',
    system: 'AI-чатбот, автокваліфікація, DM-флоу у WhatsApp/Instagram, email-автоматизація, lead scoring.',
    outcome: 'Команда в першу чергу працює з лідами, які ближчі до покупки.',
    kpis: ['First Response Time', 'Qualified Lead Share', 'Sales Team Throughput'],
    details: ['Промпт-потоки по ніші', 'No-show нагадування', 'Пріоритезація за скорингом'],
  },
  ads: {
    title: 'Paid Acquisition',
    icon: <FaBullhorn />,
    problem: 'Бюджет розподіляється між каналами без стабільної логіки навчання.',
    system: 'Google Ads + Meta Ads + TikTok, A/B тести, Lookalike аудиторії, conversion tracking і ROAS-аналіз.',
    outcome: 'Бюджет іде в кампанії з кращою якістю лідів, а не лише в кліки.',
    kpis: ['Cost per Qualified Lead', 'ROAS by Campaign', 'Creative Win Rate'],
    details: ['Регіональні кластери кампаній', 'Тести варіантів форм', 'Оновлення аудиторій за сигналами'],
  },
  analytics: {
    title: 'Control Analytics',
    icon: <FaChartLine />,
    problem: 'Рішення приймаються за скриншотами платформ, а не за даними воронки.',
    system: 'Control-room dashboard з єдиним шаром каналів, воронки та CRM.',
    outcome: 'Щотижневі рішення щодо бюджету й оптимізації приймаються на основі даних.',
    kpis: ['Lead to Appointment', 'Lead to Deal', 'Pipeline Velocity'],
    details: ['Сегментація за регіоном/послугою', 'Алерти при просіданні funnel', 'Щомісячний backlog гіпотез'],
  },
};

const packagesDe = [
  {
    id: 'starter',
    title: 'Starter',
    scale: 1,
    lead: 'Fuer lokale Betriebe, die von null auf eine messbare Lead-Basis gehen.',
    items: ['Web-Funnel + GA4', 'Meta Pixel + Consent', 'CRM Capture', 'Basis-Reporting'],
    effect: 'Klare Sicht auf Lead-Quellen und ein belastbarer Erstprozess.',
  },
  {
    id: 'growth',
    title: 'Growth',
    scale: 2,
    recommended: true,
    lead: 'Fuer Teams mit aktivem Vertrieb, die mehr qualifizierte Leads brauchen.',
    items: ['Google + Meta Kampagnen', 'AI Qualification Flows', 'A/B Testing Setup', 'Lead Scoring + Automation'],
    effect: 'Mehr qualifizierte Nachfrage bei besserer Reaktionszeit und sauberer Priorisierung.',
  },
  {
    id: 'scale',
    title: 'Scale',
    scale: 3,
    lead: 'Fuer Unternehmen mit mehreren Regionen oder Leistungsclustern.',
    items: ['Multi-Channel Steuerung', 'Server-Side Attribution', 'Ops Web-App Layer', 'Control-Room Governance'],
    effect: 'Skalierung ueber Prozesse und belastbare Daten statt manuellem Trial-and-Error.',
  },
];

const packagesUk = [
  {
    id: 'starter',
    title: 'Starter',
    scale: 1,
    lead: 'Для локального бізнесу, який переходить від нуля до вимірюваної lead-системи.',
    items: ['Web-funnel + GA4', 'Meta Pixel + Consent', 'CRM Capture', 'Базова аналітика'],
    effect: 'Прозора картина джерел лідів і робочий базовий процес.',
  },
  {
    id: 'growth',
    title: 'Growth',
    scale: 2,
    recommended: true,
    lead: 'Для команд з активним продажем, яким потрібні якісніші ліди.',
    items: ['Google + Meta кампанії', 'AI Qualification Flows', 'A/B Testing Setup', 'Lead Scoring + Automation'],
    effect: 'Більше кваліфікованого попиту та швидша реакція команди.',
  },
  {
    id: 'scale',
    title: 'Scale',
    scale: 3,
    lead: 'Для компаній з кількома регіонами або кластерами послуг.',
    items: ['Multi-channel керування', 'Server-side attribution', 'Ops Web-App Layer', 'Control-Room Governance'],
    effect: 'Масштабування через процеси та дані замість ручного trial-and-error.',
  },
];

type TimelineStep = readonly [string, string, string];

const timelineStepsDe: readonly TimelineStep[] = [
  ['01', 'Strategischer Call', 'Zielmarkt, Angebot und Lead-Engpass werden klar definiert.'],
  ['02', 'Scope Dokument', 'Kanalplan, Tracking-Plan und Verantwortlichkeiten werden fixiert.'],
  ['03', 'Build Phase', 'Website, Automationen und Integrationen werden umgesetzt.'],
  ['04', 'Launch', 'Tracking QA, Kampagnenstart und CRM-Flows gehen live.'],
  ['05', 'Optimierung', 'Woechentliche Tests fuer Creatives, Funnel und Qualifizierung.'],
  ['06', 'Skalierung', 'Funktionierende Strecken werden auf Regionen/Leistungen erweitert.'],
] as const;

const timelineStepsUk: readonly TimelineStep[] = [
  ['01', 'Стратегічний дзвінок', 'Фіксуємо ринок, офер і головні вузькі місця у lead-процесі.'],
  ['02', 'Scope документ', 'Узгоджуємо канали, tracking-план і відповідальності.'],
  ['03', 'Етап розробки', 'Реалізуємо сайт, автоматизації й інтеграції.'],
  ['04', 'Запуск', 'Робимо QA трекінгу, запускаємо кампанії та CRM-флоу.'],
  ['05', 'Оптимізація', 'Щотижнево тестуємо креативи, воронку та логіку кваліфікації.'],
  ['06', 'Масштабування', 'Робочі звʼязки переносимо на нові регіони й послуги.'],
] as const;

const copyDe = {
  eyebrow: 'Lead-Systeme fuer lokale Unternehmen in Deutschland',
  heroTitle: ['Aus Traffic', 'qualifizierte Leads', 'als steuerbares System'],
  heroLead: 'Wir verbinden Website, AI, Ads und Analytics in einer operativen Architektur, damit Vertrieb, Marketing und Inhaber mit denselben Daten arbeiten.',
  ctaTop: 'Strategischen Call starten',
  heroChips: ['Lead Flow', 'AI Qualify', 'Attribution'],
  heroChipValues: ['Live Intake', 'DM + Bot', 'GA4 + CRM'],
  flowNodes: ['Google / Meta / TikTok', 'Landing + Tracking', 'AI Qualification', 'CRM Pipeline'],
  heroBadges: ['Server-Side Tracking', 'Lead Scoring', 'ROAS View'],
  servicesTitle: 'Leistungen als System-Module',
  servicesDesc: 'Kein gleichfoermiger Kartenblock: ein dominanter Kern, flankierende Module und ein kompakter Operations-Layer.',
  trio: ['Problem', 'System', 'Outcome'],
  detailsSummary: 'Implementierungsdetails',
  kpiBadgesTitle: 'KPI Badges',
  kpiBadgesDesc: 'Jede Leistung wird ausschliesslich ueber Kennzahlen bewertet, die Sales und Marketing gemeinsam lesen und steuern koennen.',
  signalLayerTitle: 'Signal Layer',
  signalItems: ['GA4 Events', 'Meta CAPI', 'CRM Sync', 'DSGVO Mode'],
  opsTitle: 'Ops Notes',
  opsItems: ['Weekly Test Queue', 'Budget Reallocation', 'Funnel QA Slots'],
  packagesTitle: 'Pakete in SaaS-Logik',
  recommended: 'Empfohlen',
  timelineTitle: 'Wie wir arbeiten',
  stepLabel: 'Step',
  controlTitle: 'Control Room: Ergebnisse in Echtzeit',
  controlPanelTitle: 'Dashboard Architektur',
  controlPanelDesc: 'Kanaldaten, Funnel-Signale und CRM-Status laufen in einer Ansicht zusammen. Entscheidungen erfolgen auf Prozessebene statt aus dem Bauchgefuehl.',
  miniCharts: ['Lead Volume', 'Quality Score', 'Deal Velocity'],
  kpiPanelTitle: 'Live KPI Counters',
  kpiLabels: ['Qualified Leads', 'Avg. First Response', 'Lead to Termin', 'ROAS Cluster'],
  controlBadges: ['Lead Kontrolle', 'Budget Kontrolle', 'Funnel Kontrolle'],
  ctaBottom: 'Scope fuer Ihr Lead-System anfragen',
};

const copyUk = {
  eyebrow: 'Lead-системи для локального бізнесу в Німеччині',
  heroTitle: ['З трафіку', 'у кваліфіковані ліди', 'як керовану систему'],
  heroLead: 'Поєднуємо сайт, AI, рекламу та аналітику в єдину операційну архітектуру, щоб маркетинг, продажі й власник працювали з одними даними.',
  ctaTop: 'Запустити стратегічний дзвінок',
  heroChips: ['Lead Flow', 'AI Qualify', 'Attribution'],
  heroChipValues: ['Live Intake', 'DM + Bot', 'GA4 + CRM'],
  flowNodes: ['Google / Meta / TikTok', 'Landing + Tracking', 'AI Qualification', 'CRM Pipeline'],
  heroBadges: ['Server-Side Tracking', 'Lead Scoring', 'ROAS View'],
  servicesTitle: 'Послуги як модулі системи',
  servicesDesc: 'Не одноманітні картки, а система: домінантне ядро, підтримуючі модулі та компактний операційний шар.',
  trio: ['Проблема', 'Система', 'Результат'],
  detailsSummary: 'Деталі реалізації',
  kpiBadgesTitle: 'KPI Badges',
  kpiBadgesDesc: 'Кожну послугу оцінюємо тільки за метриками, які спільно читають маркетинг і продажі.',
  signalLayerTitle: 'Signal Layer',
  signalItems: ['GA4 Events', 'Meta CAPI', 'CRM Sync', 'DSGVO Mode'],
  opsTitle: 'Ops Notes',
  opsItems: ['Weekly Test Queue', 'Budget Reallocation', 'Funnel QA Slots'],
  packagesTitle: 'Пакети в SaaS-логіці',
  recommended: 'Рекомендовано',
  timelineTitle: 'Як ми працюємо',
  stepLabel: 'Крок',
  controlTitle: 'Control Room: результати в реальному часі',
  controlPanelTitle: 'Архітектура дашборду',
  controlPanelDesc: 'Дані каналів, сигнали воронки та CRM-статуси зібрані в одному view. Рішення приймаються на рівні процесу, а не інтуїтивно.',
  miniCharts: ['Lead Volume', 'Quality Score', 'Deal Velocity'],
  kpiPanelTitle: 'Live KPI Counters',
  kpiLabels: ['Qualified Leads', 'Avg. First Response', 'Lead to Termin', 'ROAS Cluster'],
  controlBadges: ['Контроль лідів', 'Контроль бюджету', 'Контроль воронки'],
  ctaBottom: 'Запросити scope для вашої lead-системи',
};

const localized = servicesTranslations as unknown as Record<Exclude<LangKey, 'de' | 'uk'>, LocalizedData>;

const mergeSystems = (texts: Record<SystemKey, SystemTextData>): Record<SystemKey, SystemData> => ({
  website: { ...systemsDe.website, ...texts.website },
  ai: { ...systemsDe.ai, ...texts.ai },
  ads: { ...systemsDe.ads, ...texts.ads },
  analytics: { ...systemsDe.analytics, ...texts.analytics },
});

const systemsByLang: Record<LangKey, Record<SystemKey, SystemData>> = {
  de: systemsDe,
  uk: systemsUk,
  tr: mergeSystems(localized.tr.systems),
  ar: mergeSystems(localized.ar.systems),
  pl: mergeSystems(localized.pl.systems),
  ku: mergeSystems(localized.ku.systems),
  fa: mergeSystems(localized.fa.systems),
  it: mergeSystems(localized.it.systems),
  es: mergeSystems(localized.es.systems),
  el: mergeSystems(localized.el.systems),
  ro: mergeSystems(localized.ro.systems),
  bg: mergeSystems(localized.bg.systems),
};

const packagesByLang: Record<LangKey, typeof packagesDe> = {
  de: packagesDe,
  uk: packagesUk,
  tr: localized.tr.packages,
  ar: localized.ar.packages,
  pl: localized.pl.packages,
  ku: localized.ku.packages,
  fa: localized.fa.packages,
  it: localized.it.packages,
  es: localized.es.packages,
  el: localized.el.packages,
  ro: localized.ro.packages,
  bg: localized.bg.packages,
};

const timelineByLang: Record<LangKey, readonly TimelineStep[]> = {
  de: timelineStepsDe,
  uk: timelineStepsUk,
  tr: localized.tr.timeline,
  ar: localized.ar.timeline,
  pl: localized.pl.timeline,
  ku: localized.ku.timeline,
  fa: localized.fa.timeline,
  it: localized.it.timeline,
  es: localized.es.timeline,
  el: localized.el.timeline,
  ro: localized.ro.timeline,
  bg: localized.bg.timeline,
};

const copyByLang: Record<LangKey, typeof copyDe> = {
  de: copyDe,
  uk: copyUk,
  tr: localized.tr.copy,
  ar: localized.ar.copy,
  pl: localized.pl.copy,
  ku: localized.ku.copy,
  fa: localized.fa.copy,
  it: localized.it.copy,
  es: localized.es.copy,
  el: localized.el.copy,
  ro: localized.ro.copy,
  bg: localized.bg.copy,
};

const barHeights = ['34%', '52%', '47%', '70%', '62%', '85%', '73%'];

const ServicesPage: React.FC = () => {
  const { i18n } = useTranslation();
  const lang = ((i18n.resolvedLanguage || i18n.language || 'de').split('-')[0] as LangKey);
  const ui = copyByLang[lang] ?? copyDe;
  const systems = systemsByLang[lang] ?? systemsDe;
  const packages = packagesByLang[lang] ?? packagesDe;
  const timelineSteps = timelineByLang[lang] ?? timelineStepsDe;
  const [activeSystem, setActiveSystem] = useState<SystemKey>('website');
  const active = useMemo(() => systems[activeSystem], [activeSystem, systems]);

  return (
    <StyledPageRoot>
      <PageContainer>
        <HeroGrid initial='hidden' animate='visible' variants={staggerContainer}>
          <HeroCopy as={motion.div} variants={fadeInLeft}>
            <Eyebrow>{ui.eyebrow}</Eyebrow>
            <HeroTitle>
              <span>{ui.heroTitle[0]}</span>
              <span>{ui.heroTitle[1]}</span>
              <span>{ui.heroTitle[2]}</span>
            </HeroTitle>
            <HeroLead>{ui.heroLead}</HeroLead>
            <ButtonRow>
              <HeroCta to='/kontakt'>
                <FaArrowRight /> {ui.ctaTop}
              </HeroCta>
            </ButtonRow>
          </HeroCopy>

          <HeroVisual as={motion.div} variants={fadeInRight}>
            <Orb />
            <DashboardShell>
              <DashTop variants={staggerContainer} initial='hidden' animate='visible'>
                <KpiChip variants={scaleIn}>
                  <span>{ui.heroChips[0]}</span>
                  <b><TerminalType text={ui.heroChipValues[0]} durationMs={1400} storageKey='hero_lead_flow' /></b>
                </KpiChip>
                <KpiChip variants={scaleIn}>
                  <span>{ui.heroChips[1]}</span>
                  <b>{ui.heroChipValues[1]}</b>
                </KpiChip>
                <KpiChip variants={scaleIn}>
                  <span>{ui.heroChips[2]}</span>
                  <b>{ui.heroChipValues[2]}</b>
                </KpiChip>
              </DashTop>

              <DashMain variants={staggerContainer} initial='hidden' animate='visible'>
                <ChartPlate>
                  <Bars>
                    {barHeights.map((height, index) => (
                      <motion.span
                        key={height + index}
                        style={{ height }}
                        animate={{
                          scaleY: [0.78, 1.08, 0.9, 1.02, 0.78],
                          opacity: [0.78, 1, 0.86, 0.96, 0.78],
                        }}
                        transition={{
                          duration: 2.6,
                          delay: index * 0.16,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                    ))}
                  </Bars>
                </ChartPlate>
                <FlowPlate>
                  <FlowNode variants={fadeInRight}>{ui.flowNodes[0]}</FlowNode>
                  <FlowNode variants={fadeInRight}>{ui.flowNodes[1]}</FlowNode>
                  <FlowNode variants={fadeInRight}>{ui.flowNodes[2]}</FlowNode>
                  <FlowNode variants={fadeInRight}>{ui.flowNodes[3]}</FlowNode>
                </FlowPlate>
              </DashMain>

              <DashBottom variants={staggerContainer} initial='hidden' animate='visible'>
                <GlowBadge variants={scaleIn}>{ui.heroBadges[0]}</GlowBadge>
                <GlowBadge variants={scaleIn}>{ui.heroBadges[1]}</GlowBadge>
                <GlowBadge variants={scaleIn}>{ui.heroBadges[2]}</GlowBadge>
              </DashBottom>
            </DashboardShell>
          </HeroVisual>
        </HeroGrid>

        <SectionShell initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.2 }} variants={fadeInUp}>
          <h2>{ui.servicesTitle}</h2>
          <CompactMuted>{ui.servicesDesc}</CompactMuted>

          <SegmentWrap>
            {(Object.keys(systems) as SystemKey[]).map(key => (
              <SegmentBtn key={key} $active={activeSystem === key} onClick={() => setActiveSystem(key)}>
                {systems[key].title}
              </SegmentBtn>
            ))}
          </SegmentWrap>

          <ServiceGrid variants={staggerContainer} initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.16 }}>
            <SurfaceCard $area='dominant' $featured variants={fadeInLeft}>
              <h3>
                <IconBadge>{active.icon}</IconBadge>
                {active.title}
              </h3>
              <Trio>
                <TrioItem variants={fadeInUp}>
                  <strong>{ui.trio[0]}</strong>
                  <span>{active.problem}</span>
                </TrioItem>
                <TrioItem variants={fadeInUp}>
                  <strong>{ui.trio[1]}</strong>
                  <span>{active.system}</span>
                </TrioItem>
                <TrioItem variants={fadeInUp}>
                  <strong>{ui.trio[2]}</strong>
                  <span>{active.outcome}</span>
                </TrioItem>
              </Trio>
              <Collapsible>
                <summary>{ui.detailsSummary}</summary>
                <ul>
                  {active.details.map(item => <li key={item}>{item}</li>)}
                </ul>
              </Collapsible>
            </SurfaceCard>

            <SurfaceCard $area='mediumA' variants={fadeInUp}>
              <h3><IconBadge><FaLayerGroup /></IconBadge>{ui.kpiBadgesTitle}</h3>
              <DashBottom variants={staggerContainer} initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.2 }}>
                {active.kpis.map(kpi => <GlowBadge key={kpi} variants={scaleIn}>{kpi}</GlowBadge>)}
              </DashBottom>
              <CompactMuted style={{ marginTop: 12 }}>
                {ui.kpiBadgesDesc}
              </CompactMuted>
            </SurfaceCard>

            <SurfaceCard $area='mediumB' variants={fadeInRight}>
              <h3><IconBadge><FaDatabase /></IconBadge>{ui.signalLayerTitle}</h3>
              <IconMatrix>
                <span><FaCheckCircle /> {ui.signalItems[0]}</span>
                <span><FaCheckCircle /> {ui.signalItems[1]}</span>
                <span><FaCheckCircle /> {ui.signalItems[2]}</span>
                <span><FaCheckCircle /> {ui.signalItems[3]}</span>
              </IconMatrix>
            </SurfaceCard>

            <SurfaceCard $area='compact' $compact variants={scaleIn}>
              <h3><IconBadge><FaBolt /></IconBadge>{ui.opsTitle}</h3>
              <Checklist>
                <li><FaCheckCircle /> {ui.opsItems[0]}</li>
                <li><FaCheckCircle /> {ui.opsItems[1]}</li>
                <li><FaCheckCircle /> {ui.opsItems[2]}</li>
              </Checklist>
            </SurfaceCard>
          </ServiceGrid>
        </SectionShell>

        <SectionShell initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.2 }} variants={fadeInUp}>
          <h2>{ui.packagesTitle}</h2>
          <PackageGrid variants={staggerContainer} initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.16 }}>
            {packages.map(pkg => (
              <TierCard key={pkg.id} $recommended={pkg.recommended} variants={pkg.recommended ? scaleIn : fadeInUp}>
                {pkg.recommended ? <Badge>{ui.recommended}</Badge> : null}
                <h3>{pkg.title}</h3>
                <TierLead>{pkg.lead}</TierLead>
                <Checklist>
                  {pkg.items.map(item => (
                    <li key={item}><FaCheckCircle /> {item}</li>
                  ))}
                </Checklist>
                <ScaleMeter>
                  <i className={pkg.scale >= 1 ? 'on' : ''} />
                  <i className={pkg.scale >= 2 ? 'on' : ''} />
                  <i className={pkg.scale >= 3 ? 'on' : ''} />
                </ScaleMeter>
                <CompactMuted style={{ marginTop: 12 }}>{pkg.effect}</CompactMuted>
              </TierCard>
            ))}
          </PackageGrid>
        </SectionShell>

        <SectionShell initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.2 }} variants={fadeInUp}>
          <h2>{ui.timelineTitle}</h2>
          <Timeline variants={staggerContainer}>
            {timelineSteps.map(step => (
              <StepCard key={step[0]} variants={Number(step[0]) % 2 === 0 ? fadeInRight : fadeInLeft}>
                <StepIdx>{ui.stepLabel} {step[0]}</StepIdx>
                <StepTitle>{step[1]}</StepTitle>
                <CompactMuted>{step[2]}</CompactMuted>
              </StepCard>
            ))}
          </Timeline>
        </SectionShell>

        <SectionShell initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.2 }} variants={fadeInUp}>
          <h2>{ui.controlTitle}</h2>
          <ControlGrid variants={staggerContainer} initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.18 }}>
            <ControlPanel variants={fadeInLeft}>
              <h3>{ui.controlPanelTitle}</h3>
              <CompactMuted>{ui.controlPanelDesc}</CompactMuted>

              <MiniCharts>
                <div>
                  {ui.miniCharts[0]}
                  <i style={{ width: '68%' }} />
                </div>
                <div>
                  {ui.miniCharts[1]}
                  <i style={{ width: '82%' }} />
                </div>
                <div>
                  {ui.miniCharts[2]}
                  <i style={{ width: '59%' }} />
                </div>
              </MiniCharts>
            </ControlPanel>

            <ControlPanel variants={fadeInRight}>
              <h3>{ui.kpiPanelTitle}</h3>
              <CounterGrid>
                <CounterCard variants={scaleIn}>
                  <span>{ui.kpiLabels[0]}</span>
                  <strong><LiveMetric start={0} max={38} durationMs={1800} storageKey='metric_ql' /></strong>
                </CounterCard>
                <CounterCard variants={scaleIn}>
                  <span>{ui.kpiLabels[1]}</span>
                  <strong><LiveMetric start={0} max={11} suffix='m' durationMs={1700} storageKey='metric_rt' /></strong>
                </CounterCard>
                <CounterCard variants={scaleIn}>
                  <span>{ui.kpiLabels[2]}</span>
                  <strong><LiveMetric start={0} max={43} suffix='%' durationMs={1900} storageKey='metric_l2a' /></strong>
                </CounterCard>
                <CounterCard variants={scaleIn}>
                  <span>{ui.kpiLabels[3]}</span>
                  <strong><LiveMetric start={0} max={3.8} decimals={1} prefix='x' durationMs={2100} storageKey='metric_roas' /></strong>
                </CounterCard>
              </CounterGrid>

              <DashBottom style={{ marginTop: 12 }} variants={staggerContainer} initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.3 }}>
                <GlowBadge variants={scaleIn}>{ui.controlBadges[0]}</GlowBadge>
                <GlowBadge variants={scaleIn}>{ui.controlBadges[1]}</GlowBadge>
                <GlowBadge variants={scaleIn}>{ui.controlBadges[2]}</GlowBadge>
              </DashBottom>
            </ControlPanel>
          </ControlGrid>
        </SectionShell>

        <SectionShell initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.2 }} variants={fadeInUp}>
          <ButtonRow>
            <HeroCta to='/kontakt'>
              <FaArrowRight /> {ui.ctaBottom}
            </HeroCta>
          </ButtonRow>
        </SectionShell>
      </PageContainer>
    </StyledPageRoot>
  );
};

export default ServicesPage;



