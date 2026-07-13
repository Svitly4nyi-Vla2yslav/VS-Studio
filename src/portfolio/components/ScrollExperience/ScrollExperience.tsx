import { useRef, useState } from 'react';
import { useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion';
import { usePrefersReducedMotion } from '../../../hooks/usePrefersReducedMotion';
import {
  Atmosphere,
  ChapterIndex,
  ChapterRail,
  DepthGrid,
  ExperienceRoot,
  KineticWord,
  Orbit,
  ScanTexture,
} from './ScrollExperience.styled';

const chapterCount = 7;

interface ScrollExperienceProps {
  readonly reducedMotion?: boolean;
}

// ScrollExperience ties the atmosphere to the native page scroll without adding another scroll container.
export const ScrollExperience: React.FC<ScrollExperienceProps> = ({ reducedMotion }) => {
  const systemPrefersReducedMotion = usePrefersReducedMotion();
  const prefersReducedMotion = reducedMotion ?? systemPrefersReducedMotion;
  const [activeChapter, setActiveChapter] = useState(0);
  const activeChapterRef = useRef(0);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 72, damping: 22, mass: 0.32 });

  const gridY = useTransform(smoothProgress, [0, 1], ['0%', '-14%']);
  const wordY = useTransform(smoothProgress, [0, 1], ['34vh', '-44vh']);
  const wordRotate = useTransform(smoothProgress, [0, 1], [-8, 8]);
  const slowOrbitRotate = useTransform(smoothProgress, [0, 1], [0, 190]);
  const fastOrbitRotate = useTransform(smoothProgress, [0, 1], [30, -290]);
  const orbitScale = useTransform(smoothProgress, [0, 0.5, 1], [0.84, 1.18, 0.9]);
  const atmosphere = useTransform(
    smoothProgress,
    [0, 0.18, 0.36, 0.56, 0.76, 1],
    [
      'rgba(76, 29, 149, 0.24)',
      'rgba(8, 145, 178, 0.2)',
      'rgba(234, 179, 8, 0.12)',
      'rgba(190, 24, 93, 0.16)',
      'rgba(37, 99, 235, 0.18)',
      'rgba(126, 34, 206, 0.22)',
    ]
  );

  useMotionValueEvent(smoothProgress, 'change', latest => {
    const nextChapter = Math.min(Math.floor(latest * chapterCount), chapterCount - 1);
    if (nextChapter === activeChapterRef.current) return;

    activeChapterRef.current = nextChapter;
    setActiveChapter(nextChapter);
  });

  return (
    <ExperienceRoot aria-hidden='true'>
      <Atmosphere style={{ backgroundColor: atmosphere }} />
      <DepthGrid style={{ y: prefersReducedMotion ? 0 : gridY }} />
      <Orbit
        $variant='slow'
        style={{
          rotate: prefersReducedMotion ? 0 : slowOrbitRotate,
          scale: prefersReducedMotion ? 1 : orbitScale,
        }}
      />
      <Orbit
        $variant='fast'
        style={{
          rotate: prefersReducedMotion ? 0 : fastOrbitRotate,
          scale: prefersReducedMotion ? 1 : orbitScale,
        }}
      />
      <KineticWord
        style={{
          y: prefersReducedMotion ? 0 : wordY,
          rotate: prefersReducedMotion ? 0 : wordRotate,
        }}
      >
        BUILD / EVOLVE / IMPACT
      </KineticWord>
      <ChapterRail>
        <span>CHAPTER</span>
        <ChapterIndex>
          {String(activeChapter + 1).padStart(2, '0')}
          <small>/ {String(chapterCount).padStart(2, '0')}</small>
        </ChapterIndex>
      </ChapterRail>
      <ScanTexture />
    </ExperienceRoot>
  );
};
