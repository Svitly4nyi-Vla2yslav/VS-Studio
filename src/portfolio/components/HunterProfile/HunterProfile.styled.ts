import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import { portfolioTheme } from '../../utils/portfolioTheme';

/* Scan line створює ефект системного сканування профілю. */
const scanMove = keyframes`
  0% { transform: translateY(-120%); opacity: 0; }
  12% { opacity: 0.8; }
  100% { transform: translateY(120%); opacity: 0; }
`;

/* Fullscreen profile-секція займає мінімум viewport без внутрішнього скролу. */
export const ProfileShell = styled(motion.section)`
  position: relative;
  z-index: 1;
  min-height: 100vh;
  min-height: 100svh;
  overflow: hidden;
  isolation: isolate;
  scroll-margin-top: 96px;
  background:
    radial-gradient(circle at 76% 34%, rgba(246, 211, 101, 0.12), transparent 26%),
    radial-gradient(circle at 18% 76%, rgba(34, 211, 238, 0.14), transparent 32%);
`;

/* Контейнер секції центрує контент і дозволяє сторінці рости без внутрішнього scroll. */
export const ProfileContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  width: min(1440px, calc(100% - 48px));
  min-height: 100vh;
  min-height: 100svh;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  overflow-x: hidden;
  padding: clamp(90px, 10vw, 124px) 0 clamp(34px, 5vw, 60px);

  @media (max-width: 560px) {
    width: min(100% - 24px, 1440px);
  }
`;

/* Декоративна scan line не бере участі в layout. */
export const ScanLine = styled.span`
  position: absolute;
  inset: 0;
  z-index: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(34, 211, 238, 0.16) 48%, transparent 52%);
  animation: ${scanMove} 7s ease-in-out infinite;
  pointer-events: none;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0.12;
  }
`;

/* Верхній текстовий блок профілю. */
export const ProfileCopy = styled(motion.div)`
  position: relative;
  z-index: 2;
  max-width: 760px;
`;

/* Eyebrow label задає контекст системного вікна. */
export const SectionLabel = styled.span`
  display: inline-flex;
  border: 1px solid rgba(34, 211, 238, 0.28);
  border-radius: 999px;
  padding: 8px 12px;
  background: rgba(34, 211, 238, 0.08);
  color: ${portfolioTheme.colors.cyan};
  font-size: 0.8rem;
  font-weight: 900;
  text-transform: uppercase;
`;

/* Заголовок profile-секції. */
export const SectionTitle = styled.h2`
  margin: 16px 0 0;
  color: ${portfolioTheme.colors.white};
  font-family: ${portfolioTheme.fonts.heading};
  font-size: clamp(2.25rem, 5vw, 5.2rem);
  line-height: 0.98;
  letter-spacing: 0;
`;

/* Опис позиціонування під заголовком. */
export const SectionIntro = styled.p`
  max-width: 760px;
  margin: 16px 0 0;
  color: rgba(248, 250, 252, 0.76);
  font-size: clamp(0.98rem, 1.6vw, 1.14rem);
  line-height: 1.75;
`;

/* RPG attribute grid стискається та скролиться всередині секції. */
export const AttributeGrid = styled.div`
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 12px;
  margin-top: clamp(18px, 3vw, 32px);
  padding-right: min(24vw, 340px);

  @media (max-width: 1120px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding-right: 0;
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

/* Окрема stat card у system window. */
export const AttributeItem = styled(motion.article)`
  min-height: 104px;
  border: 1px solid rgba(168, 85, 247, 0.3);
  border-radius: 8px;
  padding: 16px;
  clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px));
  background:
    linear-gradient(135deg, rgba(11, 11, 24, 0.92), rgba(8, 8, 18, 0.76)),
    radial-gradient(circle at top right, rgba(124, 58, 237, 0.2), transparent 50%);
  box-shadow: ${portfolioTheme.shadows.panel};

  span {
    display: block;
    color: ${portfolioTheme.colors.muted};
    font-size: 0.78rem;
    font-weight: 900;
    text-transform: uppercase;
  }

  strong {
    display: block;
    margin-top: 10px;
    color: ${portfolioTheme.colors.white};
    line-height: 1.35;
  }
`;

/* XP grid показує активні напрямки прокачки. */
export const XpGrid = styled.div`
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: 12px;
  padding-right: min(18vw, 280px);

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding-right: 0;
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

/* ProfileMediaSlot ставить квадратний system-art frame збоку, не створюючи внутрішнього scroll. */
export const ProfileMediaSlot = styled(motion.div)`
  position: absolute;
  right: clamp(-120px, 0vw, 0px);
  /* top: 50%; */
  z-index: 0;
  width: min(100vw, 650px);
  transform: translateY(-50%);
  opacity: 0.9;

  figure {
    --portfolio-image-width: min(100vw, 650px);
    --portfolio-image-height: 92svh;
  }

  @media (max-width: 1120px) {
    right: -120px;
    width: min(56vw, 520px);
    opacity: 0.4;
  }

  @media (max-width: 720px) {
    right: -160px;
    width: 620px;
    opacity: 0.22;
  }
`;

/* XP card з progress-bar. */
export const XpItem = styled(motion.article)`
  border: 1px solid rgba(56, 189, 248, 0.22);
  border-radius: 8px;
  padding: 14px;
  background: rgba(5, 5, 16, 0.68);
  backdrop-filter: blur(10px);

  span,
  strong {
    color: ${portfolioTheme.colors.white};
  }

  strong {
    float: right;
    color: ${portfolioTheme.colors.goldSoft};
  }
`;

/* Track для XP прогресу. */
export const XpBar = styled.div`
  clear: both;
  height: 8px;
  margin-top: 12px;
  overflow: hidden;
  border-radius: 999px;
  background: rgba(248, 250, 252, 0.08);
`;

/* Заповнена частина XP progress-bar. */
export const XpFill = styled.span<{ $level: number }>`
  display: block;
  width: ${({ $level }) => `${$level}%`};
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, ${portfolioTheme.colors.purpleSoft}, ${portfolioTheme.colors.cyan}, ${portfolioTheme.colors.goldSoft});
  box-shadow: ${portfolioTheme.shadows.cyanGlow};
`;
