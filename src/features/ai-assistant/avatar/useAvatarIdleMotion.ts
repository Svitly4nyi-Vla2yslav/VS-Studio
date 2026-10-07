import { useMotionValue, useReducedMotion } from 'framer-motion';
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

/**
 * Створює MotionValue для фонового руху погляду між наперед заданими точками.
 * Коли вказівник поруч, повертає погляд у центр; інакше періодично обирає випадкову ціль.
 * Повертає `gazeX` і `gazeY`, а interval гарантовано очищається під час unmount.
 */
export const useAvatarIdleMotion = (state: AssistantVisualState, isNear: boolean) => {
  const reducedMotion = useReducedMotion();
  const gazeX = useMotionValue(0);
  const gazeY = useMotionValue(0);

  useEffect(() => {
    const semanticState = !['idle', 'curious', 'greeting'].includes(state);
    if (reducedMotion || isNear || semanticState) {
      gazeX.set(0);
      gazeY.set(0);
      return undefined;
    }

    // Обирає одну дозволену координату й синхронно оновлює обидві осі погляду.
    const schedule = () => {
      const next = gazeTargets[Math.floor(Math.random() * gazeTargets.length)];
      gazeX.set(next.x);
      gazeY.set(next.y);
    };

    schedule();

    let timer: number;
    const scheduleNext = () => {
      timer = window.setTimeout(() => {
        schedule();
        scheduleNext();
      }, 2800 + Math.random() * 2700);
    };
    scheduleNext();
    return () => window.clearTimeout(timer);
  }, [gazeX, gazeY, isNear, reducedMotion, state]);

  return { gazeX, gazeY };
};
