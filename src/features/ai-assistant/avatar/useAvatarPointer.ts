import { useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
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

export const useAvatarPointer = <T extends HTMLElement>(influenceRadius = 480) => {
  const ref = useRef<T | null>(null);
  const frameRef = useRef<number | null>(null);
  const pointerRef = useRef({ x: 0, y: 0 });
  const nearRef = useRef(false);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rawProximity = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 320, damping: 28, mass: 0.6 });
  const y = useSpring(rawY, { stiffness: 320, damping: 28, mass: 0.6 });
  const proximity = useSpring(rawProximity, { stiffness: 260, damping: 28, mass: 0.55 });
  const [isNear, setIsNear] = useState(false);
  const reducedMotion = useReducedMotion();
  const [isCoarse] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches
  );

  const reset = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
    rawProximity.set(0);
    if (nearRef.current) {
      nearRef.current = false;
      setIsNear(false);
    }
  }, [rawProximity, rawX, rawY]);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    if (isCoarse || reducedMotion) {
      reset();
      return undefined;
    }

    const measure = () => {
      frameRef.current = null;
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = pointerRef.current.x - centerX;
      const dy = pointerRef.current.y - centerY;
      const distance = Math.hypot(dx, dy);
      const influence = clamp(1 - distance / influenceRadius, 0, 1);

      rawX.set(clamp(dx / influenceRadius, -1, 1) * influence);
      rawY.set(clamp(dy / influenceRadius, -1, 1) * influence);
      rawProximity.set(influence);
      const nextNear = influence > 0.08;
      if (nextNear !== nearRef.current) {
        nearRef.current = nextNear;
        setIsNear(nextNear);
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      pointerRef.current = { x: event.clientX, y: event.clientY };
      if (frameRef.current === null) frameRef.current = window.requestAnimationFrame(measure);
    };

    const onVisibilityChange = () => {
      if (document.hidden) reset();
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
    };
  }, [influenceRadius, isCoarse, rawProximity, rawX, rawY, reducedMotion, reset]);

  return {
    ref,
    x,
    y,
    proximity,
    isNear,
    isCoarse,
  } as AvatarPointerState;
};
