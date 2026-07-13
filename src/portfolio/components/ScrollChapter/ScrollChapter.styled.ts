import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import { portfolioTheme } from '../../utils/portfolioTheme';
import type { ScrollChapterMode } from './ScrollChapter';

const chapterAccent: Record<ScrollChapterMode, string> = {
  depth: '103, 232, 249',
  wipe: '253, 230, 138',
  deck: '251, 113, 133',
  diagonal: '192, 132, 252',
  orbit: '56, 189, 248',
  portal: '253, 230, 138',
};

export const ChapterShell = styled.div<{ $mode: ScrollChapterMode }>`
  position: relative;
  isolation: isolate;
  overflow: clip;
  background: ${({ $mode }) =>
    `linear-gradient(180deg, transparent, rgba(${chapterAccent[$mode]}, 0.025), transparent)`};
  perspective: 1200px;
`;

export const ChapterCanvas = styled(motion.div)`
  position: relative;
  z-index: 1;
  transform-origin: center center;
  will-change: transform, opacity, filter;
`;

export const ChapterReveal = styled(motion.div)`
  position: relative;
  z-index: 1;
  transform-origin: center center;
  transform-style: preserve-3d;
  will-change: transform, opacity, filter, clip-path;
`;

export const ChapterGlow = styled(motion.div)<{ $mode: ScrollChapterMode }>`
  position: absolute;
  z-index: 0;
  width: clamp(280px, 46vw, 720px);
  aspect-ratio: 1;
  border: 1px solid ${({ $mode }) => `rgba(${chapterAccent[$mode]}, 0.18)`};
  border-radius: ${({ $mode }) => ($mode === 'deck' ? '18%' : '50%')};
  background: ${({ $mode }) => `radial-gradient(circle, rgba(${chapterAccent[$mode]}, 0.16), transparent 66%)`};
  filter: blur(2px);
  pointer-events: none;
  will-change: transform;

  ${({ $mode }) =>
    $mode === 'depth' || $mode === 'deck' || $mode === 'portal'
      ? css`
          right: -12vw;
          top: 18%;
        `
      : css`
          left: -14vw;
          top: 24%;
        `}

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 14%;
    border: 1px dashed ${({ $mode }) => `rgba(${chapterAccent[$mode]}, 0.22)`};
    border-radius: inherit;
  }

  &::after {
    inset: 34%;
    border-style: solid;
  }
`;

export const ChapterLabel = styled.div`
  position: absolute;
  left: clamp(10px, 2vw, 30px);
  top: 50%;
  z-index: 3;
  display: flex;
  gap: 8px;
  align-items: center;
  color: rgba(248, 250, 252, 0.34);
  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  transform: translateY(-50%) rotate(-90deg);
  transform-origin: left top;
  pointer-events: none;

  span {
    color: ${portfolioTheme.colors.cyan};
    font-family: ${portfolioTheme.fonts.display};
    font-size: 1rem;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;
