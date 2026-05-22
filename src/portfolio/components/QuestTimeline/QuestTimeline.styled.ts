import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import { portfolioTheme } from '../../utils/portfolioTheme';

/* Path glow підсвічує маршрут timeline без зміни розмірів. */
const pathGlow = keyframes`
  0%, 100% { filter: drop-shadow(0 0 8px rgba(34, 211, 238, 0.25)); }
  50% { filter: drop-shadow(0 0 18px rgba(246, 211, 101, 0.34)); }
`;

/* Fullscreen timeline-секція займає мінімум viewport без внутрішнього scroll. */
export const QuestTimelineShell = styled(motion.section)`
  /* position: relative;
  z-index: 1; */
  min-height: 100vh;
  min-height: 100svh;
  overflow: hidden;
  isolation: isolate;
  scroll-margin-top: 96px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  padding: clamp(90px, 10vw, 124px) max(24px, calc((100% - 1440px) / 2)) clamp(34px, 5vw, 60px);
  background:
    radial-gradient(circle at 75% 35%, rgba(34, 211, 238, 0.12), transparent 30%),
    radial-gradient(circle at 18% 72%, rgba(124, 58, 237, 0.16), transparent 34%);

  > :not([data-portfolio-media]) {
    position: relative;
    z-index: 2;
    margin-left: min(4vw, 50px);
  }

  @media (max-width: 900px) {
    > :not([data-portfolio-media]) {
      margin-left: 0;
    }
  }
`;

/* TimelineMediaSlot keeps the timeline video on the left as a decorative quest backdrop. */
export const TimelineMediaSlot = styled(motion.div)`
  /* position: absolute; */
  left: clamp(-230px, -11vw, -96px);
  bottom: -8svh;
  /* z-index: 1; */
  width: min(38vw, 576px);
  opacity: 0.82;

  figure {
    --portfolio-media-size: 100%;
    width: 100%;
    height: min(75svh, 674px);
    aspect-ratio: auto;
  }

  @media (max-width: 900px) {
    left: -250px;
    width: 558px;
    opacity: 0.2;
  }
`;

/* Eyebrow label для timeline. */
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

/* Заголовок quest route. */
export const SectionTitle = styled.h2`
  margin: 16px 0 0;
  color: ${portfolioTheme.colors.white};
  font-family: ${portfolioTheme.fonts.heading};
  font-size: clamp(1.9rem, 3.8vw, 4rem);
  line-height: 1.02;
  letter-spacing: 0;
`;

/* Опис маршруту розвитку. */
export const SectionIntro = styled.p`
  max-width: 760px;
  margin: 16px 0 0;
  color: rgba(248, 250, 252, 0.72);
  line-height: 1.55;
`;

/* QuestList росте разом із секцією, тому скрол лишається сторінковим. */
export const QuestList = styled.div`
width: 94%;
  position: relative;
  display: grid;
  gap: 10px;
  margin-top: clamp(18px, 3vw, 28px);
  overflow-x: hidden;
  padding-left: 69px;
  padding-right: min(0vw, 0px);

  @media (max-width: 700px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

/* Glowing route line з'єднує checkpoint nodes. */
export const QuestLine = styled.div`
  /* position: absolute; */
  /* top: 18px;
  bottom: 18px;
  left: 15px; */
  width: 2px;
  background: linear-gradient(
    180deg,
    ${portfolioTheme.colors.cyan},
    ${portfolioTheme.colors.purpleSoft},
    ${portfolioTheme.colors.goldSoft}
  );
  animation: ${pathGlow} 3.8s ease-in-out infinite;

  @media (max-width: 700px) {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

/* Checkpoint описує один етап розвитку. */
export const Checkpoint = styled(motion.article)`
  position: relative;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 14px 18px;
  align-items: center;
  border: 1px solid rgba(168, 85, 247, 0.24);
  border-radius: 8px;
  padding: 10px 14px;
  background:
    linear-gradient(135deg, rgba(11, 11, 24, 0.86), rgba(5, 5, 16, 0.7)),
    repeating-linear-gradient(110deg, transparent 0 22px, rgba(248, 250, 252, 0.04) 22px 23px);

  > span {
    color: ${portfolioTheme.colors.goldSoft};
    font-weight: 900;
  }

  h3 {
    margin: 0;
    color: ${portfolioTheme.colors.white};
    font-size: 0.98rem;
    letter-spacing: 0;
  }

  p {
    margin: 5px 0 0;
    color: rgba(248, 250, 252, 0.68);
    line-height: 1.3;
    font-size: 0.84rem;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

/* Dot node показує позицію checkpoint на маршруті. */
export const CheckpointDot = styled.div`
  position: absolute;
  left: -55px;
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border: 1px solid rgba(34, 211, 238, 0.44);
  border-radius: 50%;
  background: ${portfolioTheme.colors.backgroundPanel};
  color: ${portfolioTheme.colors.cyan};
  box-shadow: 0 0 18px rgba(34, 211, 238, 0.28);

  @media (max-width: 700px) {
    position: static;
  }
`;

/* Status badge маркує стан checkpoint. */
export const StatusBadge = styled.strong`
  justify-self: end;
  border: 1px solid rgba(246, 211, 101, 0.24);
  border-radius: 999px;
  padding: 8px 10px;
  color: ${portfolioTheme.colors.goldSoft};
  font-size: 0.76rem;
  text-transform: uppercase;

  @media (max-width: 700px) {
    justify-self: start;
  }
`;
