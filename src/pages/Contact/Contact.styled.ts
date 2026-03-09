import { motion } from 'framer-motion';
import styled, { css, keyframes } from 'styled-components';
import { Card, FieldIcon, PrimaryButton } from '../shared/styles/PagePrimitives.styles';

export const ContactHeroSection = styled(motion.section)`
  padding-top: 80px;
  padding-bottom: 80px;
`;

export const ContactHeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 32px;
  align-items: start;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

export const IntroStack = styled.div`
  display: grid;
  gap: 20px;
`;

export const HeroSideStack = styled.div`
  display: grid;
  gap: 18px;

  @media (min-width: 992px) {
    position: sticky;
    top: 112px;
  }
`;

export const ResponseBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(255, 180, 80, 0.12);
  border: 1px solid rgba(255, 180, 80, 0.25);
  color: #ffd8ab;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
`;

export const HeroTitle = styled.h1`
  max-width: 620px;
  margin: 0;
  font-size: clamp(34px, 8vw, 70px);
  line-height: 1.08;

  @media (max-width: 767px) {
    font-size: clamp(30px, 10vw, 44px);
  }
`;

export const HeroLead = styled.p`
  max-width: 620px;
  margin: 0;
  color: rgba(255, 255, 255, 0.78);
  font-size: 17px;
  line-height: 1.65;
`;

const BaseCard = styled(Card)`
  padding: 32px;
  border-radius: 24px;
  background:
    radial-gradient(circle at top right, rgba(255, 180, 80, 0.16), transparent 38%),
    linear-gradient(180deg, rgba(14, 20, 35, 0.94), rgba(9, 13, 24, 0.9));

  @media (max-width: 767px) {
    padding: 24px;
  }
`;

export const FormCard = styled(BaseCard).attrs({ as: 'form' })`
  display: grid;
  gap: 18px;
`;

export const ContactCard = styled(BaseCard)`
  display: grid;
  gap: 18px;
`;

export const CardEyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  color: #ffcf94;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const CardTitle = styled.h2`
  margin: 0;
  font-size: clamp(28px, 5vw, 40px);
  line-height: 1.1;
`;

export const FormIntro = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.65;
`;

export const FieldGroup = styled.div`
  display: grid;
  gap: 8px;
`;

export const FieldLabel = styled.span`
  color: rgba(255, 255, 255, 0.72);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
`;

export const ContextField = styled(FieldIcon)`
  gap: 12px;
  padding: 12px 14px;
  border-radius: 14px;
  border-color: rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.05);

  svg {
    color: rgba(255, 200, 138, 0.88);
  }

  input,
  textarea {
    font: inherit;
  }

  input::placeholder,
  textarea::placeholder {
    color: rgba(255, 255, 255, 0.42);
  }

  textarea {
    min-height: 140px;
  }
`;

export const FieldHint = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.58);
  font-size: 14px;
  line-height: 1.6;
`;

export const SubmitButton = styled(PrimaryButton)`
  width: fit-content;
  min-height: auto;
  padding: 14px 22px;
  border-radius: 12px;
  font-weight: 600;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const ResponseNote = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 16px;
  border-radius: 16px;
  background: rgba(255, 180, 80, 0.12);
  border: 1px solid rgba(255, 180, 80, 0.25);
  color: #ffd8ab;
  font-weight: 600;
  line-height: 1.5;
`;

export const ContactList = styled.div`
  display: grid;
  gap: 12px;
`;

const contactItemStyles = css`
  display: grid;
  grid-template-columns: 18px 1fr;
  gap: 12px;
  align-items: start;
  padding: 14px 16px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  color: #ffffff;
  transition:
    transform var(--dur-mid) var(--ease-smooth),
    border-color var(--dur-mid) var(--ease-smooth),
    background var(--dur-mid) var(--ease-smooth);

  svg {
    margin-top: 3px;
    color: #ffb450;
  }

  strong {
    display: block;
    font-size: 16px;
    font-weight: 600;
  }

  span {
    display: block;
    margin-top: 4px;
    color: rgba(255, 255, 255, 0.64);
    font-size: 14px;
    line-height: 1.6;
  }
`;

export const StaticContactItem = styled.div`
  ${contactItemStyles}
`;

export const ContactItemLink = styled.a`
  ${contactItemStyles}
  text-decoration: none;

  &:hover,
  &:focus-visible {
    transform: translateY(-2px);
    border-color: rgba(255, 180, 80, 0.3);
    background: rgba(255, 255, 255, 0.07);
  }
`;

export const TrustGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const TrustBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.78);
  font-size: 13px;
  line-height: 1.4;

  svg {
    color: #ffcf94;
  }
`;

const panelGlowDrift = keyframes`
  0%, 100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  30% {
    transform: translate3d(8px, -6px, 0) scale(1.03);
  }
  50% {
    transform: translate3d(14px, -10px, 0) scale(1.06);
  }
  70% {
    transform: translate3d(7px, -4px, 0) scale(1.025);
  }
`;

const boardBob = keyframes`
  0%, 100% {
    transform: perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1);
  }
  18% {
    transform: perspective(1200px) rotateX(0.8deg) rotateY(-1.2deg) translateY(-3px) scale(1.006);
  }
  36% {
    transform: perspective(1200px) rotateX(1.6deg) rotateY(-2deg) translateY(-6px) scale(1.012);
  }
  54% {
    transform: perspective(1200px) rotateX(-1.2deg) rotateY(2deg) translateY(6px) scale(0.996);
  }
  74% {
    transform: perspective(1200px) rotateX(0.7deg) rotateY(1.1deg) translateY(-2px) scale(1.004);
  }
`;

const queueFill = keyframes`
  0%, 100% {
    transform: scaleX(0.18);
    opacity: 0.42;
  }
  50% {
    transform: scaleX(1);
    opacity: 1;
  }
`;

const badgePulse = keyframes`
  0%, 100% {
    transform: translateY(0) scale(1);
    opacity: 0.72;
  }
  50% {
    transform: translateY(-2px) scale(1.06);
    opacity: 1;
  }
`;

const beamSweep = keyframes`
  0% {
    background-position: 0% 50%;
    opacity: 0.28;
  }
  50% {
    background-position: 100% 50%;
    opacity: 0.9;
  }
  100% {
    background-position: 0% 50%;
    opacity: 0.28;
  }
`;

const beamPulse = keyframes`
  0% {
    transform: translateX(0) scale(0.84);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  55% {
    transform: translateX(calc(var(--beam-width) * 0.56)) scale(1.24);
    opacity: 1;
  }
  100% {
    transform: translateX(var(--beam-width)) scale(0.92);
    opacity: 0;
  }
`;

const pulseDotRing = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0.64);
    opacity: 0;
  }
  18% {
    opacity: 0.5;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.76);
    opacity: 0;
  }
`;

const pulseDotCore = keyframes`
  0%, 100% {
    transform: translate(-50%, -50%) scale(0.92);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.28);
  }
`;

const travelCard = keyframes`
  0% {
    transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
    opacity: 0.96;
  }
  18% {
    transform: translate3d(calc(var(--move-one-x) * 0.42), calc(var(--move-one-y) * 0.42), 0) scale(1.014)
      rotate(calc(var(--rotate-one) * 0.4));
    opacity: 0.98;
  }
  36% {
    transform: translate3d(calc(var(--move-one-x) * 0.82), calc(var(--move-one-y) * 0.82), 0) scale(1.026)
      rotate(calc(var(--rotate-one) * 0.82));
    opacity: 1;
  }
  58% {
    transform: translate3d(calc(var(--move-two-x) * 0.9), calc(var(--move-two-y) * 0.9), 0) scale(0.99)
      rotate(calc(var(--rotate-two) * 0.9));
    opacity: 0.96;
  }
  78% {
    transform: translate3d(calc(var(--move-three-x) * 0.88), calc(var(--move-three-y) * 0.88), 0) scale(1.016)
      rotate(calc(var(--rotate-three) * 0.88));
    opacity: 1;
  }
  100% {
    transform: translate3d(var(--move-three-x), var(--move-three-y), 0) scale(1.02) rotate(var(--rotate-three));
    opacity: 0.98;
  }
`;

const travelSheen = keyframes`
  0%, 100% {
    transform: translateX(-160%) skewX(-18deg);
    opacity: 0;
  }
  34% {
    opacity: 0;
  }
  48% {
    opacity: 0.4;
  }
  60% {
    opacity: 0;
  }
  100% {
    transform: translateX(220%) skewX(-18deg);
  }
`;

const iconPulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

export const LeadVisualPanel = styled.div`
  position: relative;
  overflow: hidden;
  padding: 22px;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background:
    linear-gradient(180deg, rgba(14, 20, 35, 0.84), rgba(8, 12, 22, 0.9)),
    radial-gradient(circle at 20% 12%, rgba(255, 195, 110, 0.09), transparent 44%);
  box-shadow: 0 24px 80px rgba(3, 8, 20, 0.28);
  isolation: isolate;

  @media (max-width: 991px) {
    display: none;
  }
`;

export const LeadVisualGlow = styled.div`
  position: absolute;
  border-radius: 999px;
  pointer-events: none;
  filter: blur(64px);
  opacity: 0.26;
  z-index: 0;
`;

export const LeadVisualGlowGold = styled(LeadVisualGlow)`
  width: 240px;
  height: 180px;
  top: 4%;
  left: 8%;
  background: radial-gradient(circle, rgba(255, 190, 98, 0.54), rgba(255, 190, 98, 0));
  animation: ${panelGlowDrift} 12s ease-in-out infinite;
`;

export const LeadVisualGlowBlue = styled(LeadVisualGlow)`
  width: 280px;
  height: 220px;
  right: 0;
  bottom: 6%;
  background: radial-gradient(circle, rgba(68, 120, 255, 0.46), rgba(68, 120, 255, 0));
  animation: ${panelGlowDrift} 14s ease-in-out infinite reverse;
`;

export const LeadVisualHeader = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  gap: 6px;
  margin-bottom: 18px;
`;

export const LeadVisualEyebrow = styled.span`
  color: rgba(255, 208, 148, 0.78);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

export const LeadVisualTitle = styled.p`
  margin: 0;
  max-width: 30ch;
  color: rgba(255, 255, 255, 0.88);
  font-size: 15px;
  line-height: 1.5;
`;

export const LeadVisualBoard = styled.div`
  position: relative;
  min-height: 346px;
  z-index: 1;
  animation: ${boardBob} 12.6s ease-in-out infinite;
  transform-style: preserve-3d;
`;

export const LeadPipelineGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  min-height: 260px;
`;

export const LeadStageColumn = styled.div`
  position: relative;
  overflow: hidden;
  padding: 14px 14px 16px;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.04), transparent 46%, rgba(255, 255, 255, 0.02));
    pointer-events: none;
  }
`;

export const LeadStageHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 12px;
`;

export const LeadStageTitle = styled.strong`
  display: block;
  color: rgba(255, 255, 255, 0.94);
  font-size: 13px;
  font-weight: 700;
`;

export const LeadStageMeta = styled.span`
  display: block;
  margin-top: 2px;
  color: rgba(255, 255, 255, 0.56);
  font-size: 11px;
`;

export const LeadStageBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 30px;
  height: 28px;
  padding: 0 8px;
  border-radius: 999px;
  background: rgba(255, 186, 94, 0.14);
  border: 1px solid rgba(255, 186, 94, 0.22);
  color: #ffd59d;
  font-size: 11px;
  font-weight: 700;
  animation: ${badgePulse} 1.8s ease-in-out infinite;
`;

export const LeadStageQueue = styled.div`
  display: grid;
  gap: 10px;
`;

export const LeadStageBar = styled.div`
  position: relative;
  overflow: hidden;
  height: 42px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(10, 15, 28, 0.7);
`;

export const LeadStageBarFill = styled.div<{ $width: number; $delay: number; $tone: 'gold' | 'blue' | 'green' }>`
  position: absolute;
  inset: 0 auto 0 0;
  width: ${({ $width }) => `${$width}%`};
  border-radius: inherit;
  transform-origin: left center;
  background: ${({ $tone }) => {
    switch ($tone) {
      case 'blue':
        return 'linear-gradient(90deg, rgba(72, 129, 255, 0.18), rgba(108, 183, 255, 0.62))';
      case 'green':
        return 'linear-gradient(90deg, rgba(42, 189, 141, 0.18), rgba(88, 227, 178, 0.62))';
      case 'gold':
      default:
        return 'linear-gradient(90deg, rgba(255, 184, 87, 0.16), rgba(255, 214, 144, 0.62))';
    }
  }};
  animation: ${queueFill} 1.6s ease-in-out infinite;
  animation-delay: ${({ $delay }) => `${$delay}s`};
`;

export const LeadFlowBeam = styled.div<{ $width: number; $duration: number; $delay: number; $rotate: number }>`
  --beam-width: ${({ $width }) => `${$width}px`};
  position: absolute;
  width: ${({ $width }) => `${$width}px`};
  height: 4px;
  border-radius: 999px;
  transform: rotate(${({ $rotate }) => `${$rotate}deg`});
  transform-origin: left center;
  background: linear-gradient(90deg, rgba(255, 188, 97, 0.08), rgba(87, 147, 255, 0.84), rgba(255, 188, 97, 0.08));
  background-size: 200% 100%;
  animation: ${beamSweep} ${({ $duration }) => `${$duration}s`} ease-in-out infinite;
  animation-delay: ${({ $delay }) => `${$delay}s`};
  pointer-events: none;
  opacity: 0.44;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 220, 168, 1), rgba(255, 184, 87, 0.2));
    box-shadow: 0 0 18px rgba(255, 205, 126, 0.56);
    transform: translateY(-50%);
    animation: ${beamPulse} ${({ $duration }) => `${Math.max($duration - 0.4, 1.2)}s`} linear infinite;
    animation-delay: ${({ $delay }) => `${$delay * 0.5}s`};
  }
`;

export const LeadPulseDot = styled.div<{ $size: number; $duration: number; $delay: number }>`
  position: absolute;
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};
  pointer-events: none;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
  }

  &::before {
    inset: 0;
    border: 1px solid rgba(98, 160, 255, 0.3);
    box-shadow: 0 0 20px rgba(98, 160, 255, 0.14);
    animation: ${pulseDotRing} ${({ $duration }) => `${$duration}s`} ease-out infinite;
    animation-delay: ${({ $delay }) => `${$delay}s`};
  }

  &::after {
    width: 10px;
    height: 10px;
    background: radial-gradient(circle, rgba(255, 220, 168, 1), rgba(255, 178, 80, 0.2));
    box-shadow: 0 0 18px rgba(255, 200, 120, 0.58);
    animation: ${pulseDotCore} ${({ $duration }) => `${Math.max($duration - 0.4, 1.1)}s`} ease-in-out infinite;
    animation-delay: ${({ $delay }) => `${($delay * 0.5).toFixed(2)}s`};
  }
`;

export const LeadTravelCard = styled.div<{
  $duration: number;
  $delay: number;
  $x1: number;
  $y1: number;
  $x2: number;
  $y2: number;
  $x3: number;
  $y3: number;
  $r1: number;
  $r2: number;
  $r3: number;
}>`
  --move-one-x: ${({ $x1 }) => `${$x1}px`};
  --move-one-y: ${({ $y1 }) => `${$y1}px`};
  --move-two-x: ${({ $x2 }) => `${$x2}px`};
  --move-two-y: ${({ $y2 }) => `${$y2}px`};
  --move-three-x: ${({ $x3 }) => `${$x3}px`};
  --move-three-y: ${({ $y3 }) => `${$y3}px`};
  --rotate-one: ${({ $r1 }) => `${$r1}deg`};
  --rotate-two: ${({ $r2 }) => `${$r2}deg`};
  --rotate-three: ${({ $r3 }) => `${$r3}deg`};
  position: absolute;
  overflow: hidden;
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 12px;
  align-items: center;
  padding: 14px 16px;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.11);
  background: rgba(12, 16, 28, 0.62);
  backdrop-filter: blur(18px);
  box-shadow:
    0 22px 44px rgba(3, 9, 20, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  animation: ${travelCard} ${({ $duration }) => `${$duration}s`} cubic-bezier(0.42, 0.08, 0.58, 0.92) infinite alternate both;
  animation-delay: ${({ $delay }) => `${$delay}s`};
  will-change: transform, opacity;

  &::after {
    content: '';
    position: absolute;
    top: -30%;
    bottom: -30%;
    width: 34%;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0));
    filter: blur(6px);
    animation: ${travelSheen} ${({ $duration }) => `${Math.max($duration - 0.4, 1.4)}s`} linear infinite;
    animation-delay: ${({ $delay }) => `${$delay}s`};
    pointer-events: none;
  }
`;

export const LeadCardIcon = styled.span<{ $tone: 'gold' | 'blue' | 'green' | 'violet' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  color: #fff;
  background: ${({ $tone }) => {
    switch ($tone) {
      case 'blue':
        return 'linear-gradient(135deg, rgba(66, 132, 255, 0.88), rgba(92, 181, 255, 0.7))';
      case 'green':
        return 'linear-gradient(135deg, rgba(52, 211, 153, 0.88), rgba(96, 230, 188, 0.66))';
      case 'violet':
        return 'linear-gradient(135deg, rgba(117, 92, 255, 0.84), rgba(173, 110, 255, 0.66))';
      case 'gold':
      default:
        return 'linear-gradient(135deg, rgba(255, 188, 97, 0.92), rgba(255, 211, 136, 0.7))';
    }
  }}; 
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.22);
  animation: ${iconPulse} 2.4s ease-in-out infinite;
`;

export const LeadCardBody = styled.div`
  display: grid;
  gap: 3px;
`;

export const LeadCardTitle = styled.strong`
  color: rgba(255, 255, 255, 0.94);
  font-size: 14px;
  font-weight: 700;
  line-height: 1.3;
`;

export const LeadCardMeta = styled.span`
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  line-height: 1.35;
`;

const laneFlow = keyframes`
  from {
    transform: translate3d(calc(-50% - (var(--lane-gap) / 2)), 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`;

const laneGlow = keyframes`
  0%, 100% {
    opacity: 0.24;
    transform: scaleX(0.92);
  }
  50% {
    opacity: 0.54;
    transform: scaleX(1);
  }
`;

const laneRowDrift = keyframes`
  0%, 100% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, -3px, 0);
  }
`;

const hubFloat = keyframes`
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-6px) scale(1.01);
  }
`;

const hubRing = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0.88);
    opacity: 0.18;
  }
  70% {
    transform: translate(-50%, -50%) scale(1.28);
    opacity: 0.48;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.42);
    opacity: 0;
  }
`;

const statLift = keyframes`
  0%, 100% {
    transform: translateY(0);
    border-color: rgba(255, 255, 255, 0.08);
  }
  50% {
    transform: translateY(-3px);
    border-color: rgba(255, 188, 97, 0.18);
  }
`;

const cardPulse = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2px);
  }
`;

export const LeadSceneGrid = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.12fr) minmax(220px, 0.88fr);
  gap: 18px;
  min-height: 344px;
`;

export const LeadLaneStack = styled.div`
  display: grid;
  gap: 14px;
  align-content: start;
`;

export const LeadLaneRow = styled.div`
  position: relative;
  overflow: hidden;
  padding: 14px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background:
    linear-gradient(180deg, rgba(16, 21, 36, 0.78), rgba(10, 14, 24, 0.84)),
    radial-gradient(circle at left center, rgba(255, 188, 97, 0.08), transparent 44%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);
  animation: ${laneRowDrift} 6.2s ease-in-out infinite;
  will-change: transform;

  &::before {
    content: '';
    position: absolute;
    left: 14px;
    right: 14px;
    bottom: 12px;
    height: 1px;
    background: linear-gradient(90deg, rgba(255, 188, 97, 0), rgba(255, 188, 97, 0.36), rgba(71, 133, 255, 0));
    animation: ${laneGlow} 3.4s ease-in-out infinite;
    pointer-events: none;
  }
`;

export const LeadLaneInfo = styled.div`
  display: grid;
  gap: 3px;
  margin-bottom: 12px;
`;

export const LeadLaneKicker = styled.span`
  color: rgba(255, 211, 148, 0.86);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const LeadLaneCaption = styled.span`
  color: rgba(255, 255, 255, 0.56);
  font-size: 12px;
  line-height: 1.4;
`;

export const LeadLaneViewport = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 16px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 40px;
    z-index: 2;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(90deg, rgba(10, 14, 24, 0.94), rgba(10, 14, 24, 0));
  }

  &::after {
    right: 0;
    background: linear-gradient(270deg, rgba(10, 14, 24, 0.94), rgba(10, 14, 24, 0));
  }
`;

export const LeadLaneTrack = styled.div<{ $duration: number; $delay: number }>`
  --lane-gap: 12px;
  display: flex;
  gap: var(--lane-gap);
  width: max-content;
  transform: translate3d(calc(-50% - (var(--lane-gap) / 2)), 0, 0);
  animation: ${laneFlow} ${({ $duration }) => `${$duration}s`} linear infinite;
  animation-delay: ${({ $delay }) => `${$delay}s`};
  will-change: transform;
`;

export const LeadLaneSequence = styled.div`
  display: flex;
  flex-shrink: 0;
  gap: 12px;
`;

export const LeadLaneCard = styled.div`
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr);
  gap: 12px;
  align-items: center;
  min-width: 188px;
  padding: 12px 14px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(18px);
  box-shadow:
    0 16px 32px rgba(3, 9, 20, 0.22),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
  animation: ${cardPulse} 3.6s ease-in-out infinite;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(120deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0));
    transform: translateX(-120%);
    animation: ${travelSheen} 6.8s linear infinite;
    pointer-events: none;
  }
`;

export const LeadLaneCardIcon = styled.span<{ $tone: 'gold' | 'blue' | 'green' | 'violet' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 11px;
  color: #fff;
  background: ${({ $tone }) => {
    switch ($tone) {
      case 'blue':
        return 'linear-gradient(135deg, rgba(66, 132, 255, 0.92), rgba(92, 181, 255, 0.72))';
      case 'green':
        return 'linear-gradient(135deg, rgba(52, 211, 153, 0.92), rgba(96, 230, 188, 0.68))';
      case 'violet':
        return 'linear-gradient(135deg, rgba(117, 92, 255, 0.88), rgba(173, 110, 255, 0.68))';
      case 'gold':
      default:
        return 'linear-gradient(135deg, rgba(255, 188, 97, 0.94), rgba(255, 211, 136, 0.72))';
    }
  }};
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18);
`;

export const LeadLaneCardBody = styled.div`
  display: grid;
  gap: 2px;
`;

export const LeadLaneCardTitle = styled.strong`
  color: rgba(255, 255, 255, 0.94);
  font-size: 13px;
  font-weight: 700;
  line-height: 1.3;
`;

export const LeadLaneCardMeta = styled.span`
  color: rgba(255, 255, 255, 0.58);
  font-size: 11px;
  line-height: 1.35;
`;

export const LeadHubCard = styled.div`
  position: relative;
  overflow: hidden;
  display: grid;
  align-content: start;
  gap: 16px;
  padding: 18px;
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background:
    radial-gradient(circle at 50% 28%, rgba(255, 186, 94, 0.12), transparent 34%),
    linear-gradient(180deg, rgba(13, 18, 31, 0.86), rgba(9, 12, 22, 0.92));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.04),
    0 24px 56px rgba(3, 9, 20, 0.24);
  animation: ${hubFloat} 8.6s ease-in-out infinite;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 42%;
    border-radius: 50%;
    pointer-events: none;
  }

  &::before {
    width: 112px;
    height: 112px;
    border: 1px solid rgba(255, 188, 97, 0.14);
    animation: ${hubRing} 4.8s ease-out infinite;
  }

  &::after {
    width: 152px;
    height: 152px;
    border: 1px solid rgba(76, 134, 255, 0.12);
    animation: ${hubRing} 5.8s ease-out infinite;
    animation-delay: 1.1s;
  }
`;

export const LeadHubEyebrow = styled.span`
  position: relative;
  z-index: 1;
  color: rgba(255, 211, 148, 0.82);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

export const LeadHubTitle = styled.p`
  position: relative;
  z-index: 1;
  margin: 0;
  color: rgba(255, 255, 255, 0.88);
  font-size: 15px;
  line-height: 1.5;
`;

export const LeadHubCore = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  place-items: center;
  gap: 4px;
  min-height: 116px;
  padding: 18px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(16px);
  text-align: center;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
`;

export const LeadHubCoreTitle = styled.strong`
  color: rgba(255, 255, 255, 0.96);
  font-size: 18px;
  font-weight: 700;
  line-height: 1.2;
`;

export const LeadHubCoreMeta = styled.span`
  color: rgba(255, 255, 255, 0.58);
  font-size: 12px;
  line-height: 1.4;
`;

export const LeadHubGrid = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  gap: 10px;
`;

export const LeadHubStat = styled.div<{ $delay: number }>`
  display: grid;
  gap: 2px;
  padding: 12px 14px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  animation: ${statLift} 3.8s ease-in-out infinite;
  animation-delay: ${({ $delay }) => `${$delay}s`};
`;

export const LeadHubValue = styled.strong`
  color: rgba(255, 255, 255, 0.95);
  font-size: 15px;
  font-weight: 700;
  line-height: 1.2;
`;

export const LeadHubLabel = styled.span`
  color: rgba(255, 255, 255, 0.58);
  font-size: 12px;
  line-height: 1.35;
`;
