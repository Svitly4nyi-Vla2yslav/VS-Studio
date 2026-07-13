import { type PropsWithChildren, useRef } from 'react';
import { type Variants, useInView, useScroll, useSpring, useTransform } from 'framer-motion';
import { usePrefersReducedMotion } from '../../../hooks/usePrefersReducedMotion';
import {
  ChapterCanvas,
  ChapterGlow,
  ChapterLabel,
  ChapterReveal,
  ChapterShell,
} from './ScrollChapter.styled';

export type ScrollChapterMode = 'depth' | 'wipe' | 'deck' | 'diagonal' | 'orbit' | 'portal';

interface ScrollChapterProps extends PropsWithChildren {
  readonly index: number;
  readonly mode: ScrollChapterMode;
  readonly reducedMotion?: boolean;
}

const chapterMotion: Record<
  ScrollChapterMode,
  {
    x: [number, number, number, number];
    y: [number, number, number, number];
    scale: [number, number, number, number];
    rotate: [number, number, number, number];
  }
> = {
  depth: { x: [0, 0, 0, 0], y: [110, 0, 0, -54], scale: [0.94, 1, 1, 0.98], rotate: [0, 0, 0, 0] },
  wipe: {
    x: [-90, 0, 0, 48],
    y: [30, 0, 0, -24],
    scale: [0.98, 1, 1, 0.99],
    rotate: [-0.7, 0, 0, 0.35],
  },
  deck: { x: [0, 0, 0, 0], y: [72, 0, 0, -38], scale: [0.86, 1, 1, 0.96], rotate: [0, 0, 0, 0] },
  diagonal: {
    x: [86, 0, 0, -46],
    y: [90, 0, 0, -42],
    scale: [0.95, 1, 1, 0.98],
    rotate: [1.4, 0, 0, -0.45],
  },
  orbit: {
    x: [-56, 0, 0, 36],
    y: [74, 0, 0, -36],
    scale: [0.9, 1, 1, 0.97],
    rotate: [-1.5, 0, 0, 0.8],
  },
  portal: { x: [0, 0, 0, 0], y: [46, 0, 0, -24], scale: [0.76, 1, 1, 1.04], rotate: [0, 0, 0, 0] },
};

const revealTransition = {
  duration: 0.9,
  ease: [0.16, 1, 0.3, 1] as const,
};

// The reveal layer is intentionally more pronounced than the scrubbed parallax layer.
// It makes the chapter change readable even during quick trackpad scrolling.
const chapterReveal: Record<ScrollChapterMode, Variants> = {
  depth: {
    hidden: { opacity: 0.08, y: 150, scale: 0.84, rotateX: 13, filter: 'blur(18px)' },
    visible: { opacity: 1, y: 0, scale: 1, rotateX: 0, filter: 'blur(0px)', transition: revealTransition },
  },
  wipe: {
    hidden: { opacity: 0.24, x: -150, clipPath: 'inset(0 100% 0 0)' },
    visible: {
      opacity: 1,
      x: 0,
      clipPath: 'inset(0 0% 0 0)',
      transition: { ...revealTransition, duration: 1.05 },
    },
  },
  deck: {
    hidden: { opacity: 0.08, y: 125, scale: 0.74, rotateX: 18, filter: 'blur(12px)' },
    visible: { opacity: 1, y: 0, scale: 1, rotateX: 0, filter: 'blur(0px)', transition: revealTransition },
  },
  diagonal: {
    hidden: {
      opacity: 0.12,
      x: 135,
      y: 105,
      rotateZ: 2.8,
      clipPath: 'polygon(0 0, 12% 0, 0 18%, 0 18%)',
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotateZ: 0,
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      transition: { ...revealTransition, duration: 1.1 },
    },
  },
  orbit: {
    hidden: { opacity: 0.06, x: -135, y: 80, scale: 0.76, rotateZ: -4.5, filter: 'blur(14px)' },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotateZ: 0,
      filter: 'blur(0px)',
      transition: { ...revealTransition, duration: 1.1 },
    },
  },
  portal: {
    hidden: { opacity: 0.08, scale: 0.58, clipPath: 'circle(4% at 50% 50%)', filter: 'blur(18px)' },
    visible: {
      opacity: 1,
      scale: 1,
      clipPath: 'circle(150% at 50% 50%)',
      filter: 'blur(0px)',
      transition: { ...revealTransition, duration: 1.2 },
    },
  },
};

const reducedReveal: Variants = {
  hidden: { opacity: 0.55 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

// ScrollChapter gives every portfolio section its own continuous entrance and exit choreography.
export const ScrollChapter: React.FC<ScrollChapterProps> = ({ children, index, mode, reducedMotion }) => {
  const chapterRef = useRef<HTMLDivElement | null>(null);
  const systemPrefersReducedMotion = usePrefersReducedMotion();
  const prefersReducedMotion = reducedMotion ?? systemPrefersReducedMotion;
  const isInView = useInView(chapterRef, { amount: 0.12, margin: '-6% 0px -6% 0px' });
  const { scrollYProgress } = useScroll({ target: chapterRef, offset: ['start end', 'end start'] });
  const progress = useSpring(scrollYProgress, { stiffness: 82, damping: 24, mass: 0.34 });
  const config = chapterMotion[mode];
  const input = [0, 0.24, 0.76, 1];

  const x = useTransform(progress, input, config.x);
  const y = useTransform(progress, input, config.y);
  const scale = useTransform(progress, input, config.scale);
  const rotate = useTransform(progress, input, config.rotate);
  const opacity = useTransform(progress, [0, 0.14, 0.82, 1], [0.28, 1, 1, 0.68]);
  const blur = useTransform(
    progress,
    [0, 0.2, 0.8, 1],
    ['blur(16px)', 'blur(0px)', 'blur(0px)', 'blur(5px)']
  );
  const glowY = useTransform(progress, [0, 1], ['18%', '-22%']);
  const glowRotate = useTransform(progress, [0, 1], [-18, 22]);

  return (
    <ChapterShell ref={chapterRef} $mode={mode} data-scroll-chapter={mode}>
      <ChapterGlow
        $mode={mode}
        style={{
          y: prefersReducedMotion ? 0 : glowY,
          rotate: prefersReducedMotion ? 0 : glowRotate,
        }}
        aria-hidden='true'
      />
      <ChapterLabel aria-hidden='true'>
        <span>{String(index).padStart(2, '0')}</span>
        {mode}
      </ChapterLabel>
      <ChapterReveal
        data-scroll-reveal={mode}
        variants={prefersReducedMotion ? reducedReveal : chapterReveal[mode]}
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
      >
        <ChapterCanvas
          data-scroll-canvas={mode}
          style={{
            x: prefersReducedMotion ? 0 : x,
            y: prefersReducedMotion ? 0 : y,
            scale: prefersReducedMotion ? 1 : scale,
            rotate: prefersReducedMotion ? 0 : rotate,
            opacity: prefersReducedMotion ? 1 : opacity,
            filter: prefersReducedMotion ? 'none' : blur,
          }}
        >
          {children}
        </ChapterCanvas>
      </ChapterReveal>
    </ChapterShell>
  );
};
