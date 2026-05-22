import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import { portfolioTheme } from '../../utils/portfolioTheme';

/* Light sweep створює преміальний hover-ефект картки. */
const lightSweep = keyframes`
  0% { transform: translateX(-140%) rotate(18deg); }
  100% { transform: translateX(260%) rotate(18deg); }
`;

/* Fullscreen projects-секція займає мінімум viewport без внутрішнього scroll. */
export const ProjectDungeonShell = styled(motion.section)`
  position: relative;
  z-index: 1;
  min-height: 100vh;
  min-height: 100svh;
  overflow: hidden;
  isolation: isolate;
  scroll-margin-top: 96px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding:
    clamp(90px, 10vw, 124px)
    max(24px, calc((100% - 1440px) / 2))
    clamp(34px, 5vw, 60px);
  background:
    radial-gradient(circle at 78% 22%, rgba(251, 113, 133, 0.12), transparent 28%),
    radial-gradient(circle at 18% 78%, rgba(246, 211, 101, 0.08), transparent 34%);

  > :not([data-portfolio-media]) {
    position: relative;
    z-index: 2;
  }
`;

/* ProjectMediaSlot додає квадратний dungeon-art frame справа від project cards. */
export const ProjectMediaSlot = styled(motion.div)`
  position: absolute;
  right: clamp(-150px, 0vw, 0px);
  bottom: 7svh;
  z-index: 1;
  width: min(42vw, 650px);
  opacity: 0.86;

  figure {
    --portfolio-image-width: min(100%, 650px);
    --portfolio-image-height: 96svh;
  }

  @media (max-width: 1100px) {
    right: -190px;
    width: 620px;
    opacity: 0.24;
  }
`;

/* Header секції projects. */
export const DungeonHeader = styled(motion.div)`
  max-width: 820px;
`;

/* Eyebrow для project dungeons. */
export const SectionLabel = styled.span`
  display: inline-flex;
  border: 1px solid rgba(168, 85, 247, 0.32);
  border-radius: 999px;
  padding: 8px 12px;
  background: rgba(124, 58, 237, 0.12);
  color: ${portfolioTheme.colors.purpleSoft};
  font-size: 0.8rem;
  font-weight: 900;
  text-transform: uppercase;
`;

/* Заголовок project-секції. */
export const SectionTitle = styled.h2`
  margin: 16px 0 0;
  color: ${portfolioTheme.colors.white};
  font-family: ${portfolioTheme.fonts.heading};
  font-size: clamp(1.9rem, 3.8vw, 4rem);
  line-height: 1.02;
  letter-spacing: 0;
`;

/* Короткий опис project-секції. */
export const SectionIntro = styled.p`
  max-width: 780px;
  margin: 16px 0 0;
  color: rgba(248, 250, 252, 0.72);
  line-height: 1.55;
`;

/* Grid росте природно, щоб не створювати окремий scroll всередині секції. */
export const DungeonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  max-width: 1030px;
  gap: 12px;
  margin-top: clamp(14px, 2vw, 20px);
  overflow-x: hidden;
  padding-right: min(0vw, 0px);

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding-right: 0;
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

/* DungeonCard представляє один проект як mission card. */
export const DungeonCard = styled(motion.article)`
  position: relative;
  display: flex;
  min-height: 218px;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid rgba(56, 189, 248, 0.22);
  border-radius: 8px;
  padding: 13px;
  clip-path: polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 28px 100%, 0 calc(100% - 28px));
  background:
    radial-gradient(circle at 78% 18%, rgba(124, 58, 237, 0.22), transparent 32%),
    linear-gradient(160deg, rgba(11, 11, 24, 0.94), rgba(5, 5, 16, 0.78));
  transition: border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease;

  &::after {
    content: '';
    position: absolute;
    top: -40%;
    left: -70%;
    width: 40%;
    height: 190%;
    background: linear-gradient(90deg, transparent, rgba(248, 250, 252, 0.16), transparent);
    animation: ${lightSweep} 6s ease-in-out infinite;
    opacity: 0;
  }

  &:hover {
    border-color: rgba(34, 211, 238, 0.58);
    box-shadow: 0 0 46px rgba(34, 211, 238, 0.2), inset 0 0 36px rgba(124, 58, 237, 0.1);
    transform: translateY(-6px);
  }

  &:hover::after {
    opacity: 1;
  }

  h3 {
    margin: 12px 0 0;
    color: ${portfolioTheme.colors.white};
    font-size: clamp(1rem, 1.35vw, 1.16rem);
    letter-spacing: 0;
  }

  p {
    margin: 8px 0 0;
    color: rgba(248, 250, 252, 0.72);
    line-height: 1.34;
    font-size: 0.88rem;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      animation: none;
      display: none;
    }

    &:hover {
      transform: none;
    }
  }
`;

/* Difficulty badge показує складність dungeon mission. */
export const DifficultyBadge = styled.span`
  position: absolute;
  right: 14px;
  top: 14px;
  border: 1px solid rgba(251, 113, 133, 0.36);
  border-radius: 999px;
  padding: 7px 10px;
  color: ${portfolioTheme.colors.danger};
  font-size: 0.74rem;
  font-weight: 900;
`;

/* Type badge чесно маркує demo/own brand/concept. */
export const TypeBadge = styled.span`
  align-self: flex-start;
  max-width: calc(100% - 88px);
  border: 1px solid rgba(246, 211, 101, 0.28);
  border-radius: 999px;
  padding: 7px 10px;
  color: ${portfolioTheme.colors.goldSoft};
  font-size: 0.78rem;
  font-weight: 900;
`;

/* RewardLine пояснює бізнес-цінність проекту. */
export const RewardLine = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-start;
  margin-top: 10px;
  border-left: 2px solid rgba(246, 211, 101, 0.42);
  padding-left: 12px;
  color: rgba(248, 250, 252, 0.8);
  line-height: 1.3;
  font-size: 0.84rem;

  svg {
    flex: 0 0 auto;
    margin-top: 3px;
    color: ${portfolioTheme.colors.goldSoft};
  }
`;

/* Tags list показує стек і контекст проекту. */
export const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 10px 0 12px;

  span {
    border: 1px solid rgba(168, 85, 247, 0.22);
    border-radius: 999px;
    padding: 5px 8px;
    background: rgba(124, 58, 237, 0.1);
    color: rgba(248, 250, 252, 0.76);
    font-size: 0.72rem;
    font-weight: 800;
  }
`;

/* DungeonLink відкриває live quest або показує concept state. */
export const DungeonLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  width: fit-content;
  margin-top: auto;
  color: ${portfolioTheme.colors.cyan};
  font-weight: 900;
`;
