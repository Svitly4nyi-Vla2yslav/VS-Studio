import { useCallback, useEffect, useRef, useState } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

export const usePointerProximity = <T extends HTMLElement>(influenceRadius = 800) => {
  const ref = useRef<T | null>(null);
  const frameRef = useRef<number | null>(null);
  const pointerRef = useRef({ x: 0, y: 0 });
  const nearRef = useRef(false);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rawProximity = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 135, damping: 24, mass: .7 });
  const y = useSpring(rawY, { stiffness: 135, damping: 24, mass: .7 });
  const proximity = useSpring(rawProximity, { stiffness: 160, damping: 28, mass: .65 });
  const [isNear, setIsNear] = useState(false);
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

  const measure = useCallback(() => {
    frameRef.current = null;
    const element = ref.current;
    if (!element || document.hidden) return;
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

    const nextNear = influence > .035;
    if (nextNear !== nearRef.current) {
      nearRef.current = nextNear;
      setIsNear(nextNear);
    }
  }, [influenceRadius, rawProximity, rawX, rawY]);

  useEffect(() => {
    if (isCoarse || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const onMove = (event: PointerEvent) => {
      pointerRef.current = { x: event.clientX, y: event.clientY };
      if (frameRef.current === null) frameRef.current = window.requestAnimationFrame(measure);
    };
    const onVisibility = () => {
      if (document.hidden) reset();
      else measure();
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('visibilitychange', onVisibility);
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
    };
  }, [isCoarse, measure, reset]);

  return { ref, x, y, proximity, isNear, isCoarse };
};
