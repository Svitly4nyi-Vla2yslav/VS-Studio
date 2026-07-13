import { motion } from 'framer-motion';
import styled from 'styled-components';
import { portfolioTheme } from '../../utils/portfolioTheme';

export const ExperienceRoot = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
  contain: paint;
`;

export const Atmosphere = styled(motion.div)`
  position: absolute;
  inset: -15%;
  opacity: 0.9;
  filter: blur(100px);
  mix-blend-mode: screen;
  will-change: background-color;

  @media (max-width: 760px) {
    display: none;
  }
`;

export const DepthGrid = styled(motion.div)`
  position: absolute;
  left: -12%;
  right: -12%;
  bottom: -38%;
  height: 82%;
  opacity: 0.16;
  background-image:
    linear-gradient(rgba(103, 232, 249, 0.24) 1px, transparent 1px),
    linear-gradient(90deg, rgba(103, 232, 249, 0.24) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: linear-gradient(to bottom, transparent, black 32%, transparent 90%);
  transform: perspective(460px) rotateX(62deg);
  transform-origin: center bottom;
  will-change: transform;
`;

export const Orbit = styled(motion.div)<{ $variant: 'slow' | 'fast' }>`
  position: absolute;
  left: ${({ $variant }) => ($variant === 'slow' ? '-14vw' : 'auto')};
  right: ${({ $variant }) => ($variant === 'fast' ? '-10vw' : 'auto')};
  top: ${({ $variant }) => ($variant === 'slow' ? '18vh' : '42vh')};
  width: ${({ $variant }) => ($variant === 'slow' ? 'clamp(360px, 48vw, 760px)' : 'clamp(280px, 36vw, 580px)')};
  aspect-ratio: 1;
  border: 1px solid
    ${({ $variant }) => ($variant === 'slow' ? 'rgba(103, 232, 249, 0.18)' : 'rgba(253, 230, 138, 0.18)')};
  border-radius: 50%;
  background: conic-gradient(
    from 10deg,
    transparent 0 12%,
    ${({ $variant }) => ($variant === 'slow' ? 'rgba(103, 232, 249, 0.16)' : 'rgba(192, 132, 252, 0.16)')} 12% 14%,
    transparent 14% 42%,
    rgba(253, 230, 138, 0.12) 42% 44%,
    transparent 44% 100%
  );
  box-shadow:
    inset 0 0 90px rgba(124, 58, 237, 0.06),
    0 0 80px rgba(34, 211, 238, 0.08);
  will-change: transform;

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 10%;
    border: 1px dashed rgba(248, 250, 252, 0.12);
    border-radius: 50%;
  }

  &::after {
    inset: 28%;
    border-style: solid;
    border-color: rgba(192, 132, 252, 0.15);
  }
`;

export const KineticWord = styled(motion.div)`
  position: absolute;
  left: -4vw;
  top: 42%;
  width: 108vw;
  color: transparent;
  font-family: ${portfolioTheme.fonts.display};
  font-size: clamp(6rem, 15vw, 15rem);
  line-height: 0.78;
  letter-spacing: -0.025em;
  white-space: nowrap;
  -webkit-text-stroke: 1px rgba(248, 250, 252, 0.075);
  opacity: 0.72;
  will-change: transform;
`;

export const ChapterRail = styled.div`
  position: absolute;
  right: clamp(12px, 2vw, 32px);
  top: 50%;
  display: grid;
  gap: 6px;
  transform: translateY(-50%);
  color: rgba(248, 250, 252, 0.5);
  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.22em;
  writing-mode: vertical-rl;

  @media (max-width: 760px) {
    display: none;
  }
`;

export const ChapterIndex = styled.strong`
  display: flex;
  gap: 5px;
  align-items: baseline;
  color: ${portfolioTheme.colors.cyan};
  font-family: ${portfolioTheme.fonts.display};
  font-size: 1.35rem;
  letter-spacing: 0.08em;
  writing-mode: horizontal-tb;

  small {
    color: rgba(248, 250, 252, 0.42);
    font-family: ${portfolioTheme.fonts.body};
    font-size: 0.58rem;
  }
`;

export const ScanTexture = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.1;
  background: repeating-linear-gradient(180deg, transparent 0 3px, rgba(248, 250, 252, 0.06) 3px 4px);
  mix-blend-mode: overlay;
`;
