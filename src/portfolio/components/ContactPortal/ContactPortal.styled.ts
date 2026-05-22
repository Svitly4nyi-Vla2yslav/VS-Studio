import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import { portfolioTheme } from '../../utils/portfolioTheme';

/* Обертання final portal ring. */
const portalRotate = keyframes`
  to { transform: rotate(360deg); }
`;

/* М'який pulse для contact portal. */
const auraPulse = keyframes`
  0%, 100% { opacity: 0.58; filter: blur(0); }
  50% { opacity: 0.86; filter: blur(1px); }
`;

/* Fullscreen contact-секція займає мінімум viewport без внутрішнього scroll. */
export const ContactPortalShell = styled(motion.section)`
  position: relative;
  z-index: 1;
  min-height: 100vh;
  min-height: 100svh;
  overflow: hidden;
  isolation: isolate;
  scroll-margin-top: 96px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(360px, 1fr);
  gap: clamp(24px, 5vw, 72px);
  align-items: start;
  padding: clamp(90px, 10vw, 124px) max(24px, calc((100% - 1440px) / 2)) clamp(34px, 5vw, 60px);
  background:
    radial-gradient(circle at 78% 42%, rgba(124, 58, 237, 0.2), transparent 30%),
    radial-gradient(circle at 18% 76%, rgba(34, 211, 238, 0.12), transparent 32%);

  > :not([data-portfolio-media]) {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 940px) {
    grid-template-columns: 1fr;
    gap: 18px;
  }
`;

/* ContactMediaSlot займає праву половину final portal і показує відео на всю висоту frame. */
export const ContactMediaSlot = styled(motion.div)`
  position: relative;
  z-index: 1;
  grid-column: 2;
  grid-row: 1 / span 2;
  width: 100%;
  height: min(76svh, 740px);

  figure {
    --portfolio-media-size: 100%;
    width: 100%;
    height: 100%;
    aspect-ratio: auto;
  }

  @media (max-width: 940px) {
    grid-column: 1;
    grid-row: auto;
    height: min(46svh, 380px);
  }
`;

/* PortalFrame містить основний CTA й декоративний портал. */
export const PortalFrame = styled(motion.div)`
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(246, 211, 101, 0.3);
  border-radius: 8px;
  padding: clamp(22px, 4vw, 54px);
  clip-path: polygon(0 0, calc(100% - 36px) 0, 100% 36px, 100% 100%, 36px 100%, 0 calc(100% - 36px));
  background:
    radial-gradient(circle at 78% 45%, rgba(34, 211, 238, 0.17), transparent 28%),
    linear-gradient(135deg, rgba(11, 11, 24, 0.94), rgba(5, 5, 16, 0.78));
  box-shadow: ${portfolioTheme.shadows.panel};
`;

/* PortalHalo є великим декоративним обертовим кільцем. */
export const PortalHalo = styled.div`
  position: absolute;
  right: clamp(-120px, -8vw, -42px);
  top: 50%;
  display: grid;
  place-items: center;
  width: clamp(260px, 35vw, 470px);
  aspect-ratio: 1;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    rgba(124, 58, 237, 0.08),
    rgba(34, 211, 238, 0.55),
    rgba(246, 211, 101, 0.36),
    rgba(124, 58, 237, 0.08)
  );
  transform: translateY(-50%);
  animation:
    ${portalRotate} 14s linear infinite,
    ${auraPulse} 4s ease-in-out infinite;

  @media (max-width: 760px) {
    opacity: 0.28;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

/* Внутрішнє ядро порталу. */
export const PortalCore = styled.div`
  width: 56%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(5, 5, 16, 0.96), rgba(124, 58, 237, 0.24), transparent 70%);
`;

/* Eyebrow label для final portal. */
export const SectionLabel = styled.span`
  position: relative;
  z-index: 1;
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

/* Заголовок contact-секції. */
export const SectionTitle = styled.h2`
  position: relative;
  z-index: 1;
  max-width: 760px;
  margin: 16px 0 0;
  color: ${portfolioTheme.colors.white};
  font-family: ${portfolioTheme.fonts.heading};
  font-size: clamp(1.95rem, 4.2vw, 4.4rem);
  line-height: 1.02;
  letter-spacing: 0;
`;

/* Опис contact CTA. */
export const SectionIntro = styled.p`
  position: relative;
  z-index: 1;
  max-width: 720px;
  margin: 18px 0 0;
  color: rgba(248, 250, 252, 0.76);
  line-height: 1.55;
`;

/* CTA-кнопки у final portal переносяться без overflow. */
export const ContactActions = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 30px;
`;

/* Primary CTA для проектного запиту. */
export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 50px;
  border: 1px solid rgba(246, 211, 101, 0.45);
  border-radius: 999px;
  padding: 0 18px;
  background: linear-gradient(135deg, ${portfolioTheme.colors.goldSoft}, ${portfolioTheme.colors.cyan});
  color: #050510;
  font-weight: 900;

  &:hover,
  &:focus-visible {
    color: #050510;
    transform: translateY(-2px);
    outline: none;
  }
`;

/* Secondary CTA для email/site/github. */
export const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 50px;
  border: 1px solid rgba(56, 189, 248, 0.24);
  border-radius: 999px;
  padding: 0 18px;
  background: rgba(5, 5, 16, 0.68);
  color: ${portfolioTheme.colors.white};
  font-weight: 900;

  &:hover,
  &:focus-visible {
    color: ${portfolioTheme.colors.cyan};
    transform: translateY(-2px);
    outline: none;
  }
`;

/* ChannelGrid показує контактні картки без окремого scroll контейнера. */
export const ChannelGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-top: 0;
  overflow-x: hidden;

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

/* Contact channel card показує одне актуальне контактне значення. */
export const ChannelCard = styled(motion.a)`
  border: 1px solid rgba(168, 85, 247, 0.2);
  border-radius: 8px;
  padding: 16px;
  background: rgba(11, 11, 24, 0.74);

  svg {
    color: ${portfolioTheme.colors.cyan};
  }

  span {
    display: block;
    margin-top: 12px;
    color: ${portfolioTheme.colors.muted};
    font-size: 0.78rem;
    font-weight: 900;
    text-transform: uppercase;
  }

  strong {
    display: block;
    margin-top: 8px;
    color: ${portfolioTheme.colors.white};
    line-height: 1.35;
    word-break: break-word;
  }

  &:hover,
  &:focus-visible {
    border-color: rgba(34, 211, 238, 0.46);
    outline: none;
  }
`;
