import { useMotionValue } from 'framer-motion';
import { useEffect } from 'react';
import type { AssistantVisualState } from './assistantAvatar.types';

const gazeTargets = [
  { x: 0, y: 0 },
  { x: -0.8, y: 0.15 },
  { x: 0.8, y: -0.1 },
  { x: 0.3, y: -0.6 },
  { x: -0.5, y: 0.55 },
  { x: 0.2, y: 0.15 },
  { x: -0.9, y: -0.3 },
  { x: 0.9, y: 0.3 },
];

export const useAvatarIdleMotion = (state: AssistantVisualState, isNear: boolean) => {
  const reducedMotion = false;
  const gazeX = useMotionValue(0);
  const gazeY = useMotionValue(0);

  useEffect(() => {
    if (reducedMotion || isNear) {
      gazeX.set(0);
      gazeY.set(0);
      return undefined;
    }

    const schedule = () => {
      const next = gazeTargets[Math.floor(Math.random() * gazeTargets.length)];
      gazeX.set(next.x);
      gazeY.set(next.y);
    };

    schedule();

    const interval = window.setInterval(schedule, 2600 + Math.random() * 1600);
    return () => window.clearInterval(interval);
  }, [gazeX, gazeY, isNear, reducedMotion, state]);

  return { gazeX, gazeY };
};
