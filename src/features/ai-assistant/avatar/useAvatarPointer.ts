import { useMotionValue, useSpring } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export interface AvatarPointerState {
  ref: React.MutableRefObject<HTMLDivElement | null>;
  x: ReturnType<typeof useMotionValue<number>>;
  y: ReturnType<typeof useMotionValue<number>>;
  proximity: ReturnType<typeof useMotionValue<number>>;
  isNear: boolean;
  isCoarse: boolean;
}

export const useAvatarPointer = <T extends HTMLElement>(influenceRadius = 620) => {
  const ref = useRef<T | null>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rawProximity = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 420, damping: 26, mass: 0.45 });
  const y = useSpring(rawY, { stiffness: 390, damping: 25, mass: 0.46 });
  const proximity = useSpring(rawProximity, { stiffness: 260, damping: 28, mass: 0.55 });
  const [isNear, setIsNear] = useState(false);
  const [isCoarse] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches
  );

  const reset = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
    rawProximity.set(0);
    setIsNear(false);
  }, [rawProximity, rawX, rawY]);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    if (isCoarse) {
      reset();
      return undefined;
    }

    const measure = (clientX: number, clientY: number) => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = clientX - centerX;
      const dy = clientY - centerY;
      const distance = Math.hypot(dx, dy);
      const influence = clamp(1 - distance / influenceRadius, 0, 1);

      rawX.set(clamp((dx / influenceRadius) * influence, -1, 1));
      rawY.set(clamp((dy / influenceRadius) * influence, -1, 1));
      rawProximity.set(influence);
      setIsNear(influence > 0.05);
    };

    const onPointerMove = (event: PointerEvent) => {
      measure(event.clientX, event.clientY);
    };

    const onVisibilityChange = () => {
      if (document.hidden) reset();
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, [influenceRadius, isCoarse, rawProximity, rawX, rawY, reset]);

  return {
    ref,
    x,
    y,
    proximity,
    isNear,
    isCoarse,
  } as AvatarPointerState;
};
