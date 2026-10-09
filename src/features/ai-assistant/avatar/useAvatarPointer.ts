import { useMotionValue, useSpring } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';

// Обмежує числову реакцію заданим діапазоном, щоб анімація не виходила за межі.
const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);
// Перетворює нормалізоване значення на плавну S-криву без різкого старту й завершення.
const smoothstep = (value: number) => {
  const t = clamp(value, 0, 1);
  return t * t * (3 - 2 * t);
};

export interface AvatarPointerState {
  ref: React.MutableRefObject<HTMLDivElement | null>;
  x: ReturnType<typeof useMotionValue<number>>;
  y: ReturnType<typeof useMotionValue<number>>;
  proximity: ReturnType<typeof useMotionValue<number>>;
  isNear: boolean;
  isCoarse: boolean;
}

/**
 * Відстежує вказівник відносно центра аватара та повертає згладжені напрямок і близькість.
 * На coarse-pointer пристроях слухач не реєструється; ref треба прикріпити до контейнера аватара.
 */
export const useAvatarPointer = <T extends HTMLElement>(influenceRadius = 540) => {
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
  const [isCoarse] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches
  );

  // Повертає motion values і React-стан близькості до нейтрального положення.
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
    if (isCoarse) {
      reset();
      return undefined;
    }

    /**
     * Вимірює геометрію один раз на animation frame, враховує центральну мертву зону
     * й оновлює напрямок тільки в межах радіуса впливу.
     */
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
      const centerDeadZone = Math.max(8, Math.min(rect.width, rect.height) * .12);
      const centerRamp = smoothstep((distance - centerDeadZone) / Math.max(32, Math.min(rect.width, rect.height) * .72));
      const attention = smoothstep((influence - .08) / .72);
      const response = centerRamp * attention;
      const directionX = distance > .001 ? dx / distance : 0;
      const directionY = distance > .001 ? dy / distance : 0;

      rawX.set(clamp(directionX * response, -1, 1));
      rawY.set(clamp(directionY * response, -1, 1));
      rawProximity.set(influence);
      const nextNear = influence > 0.08;
      if (nextNear !== nearRef.current) {
        nearRef.current = nextNear;
        setIsNear(nextNear);
      }
    };

    // Зберігає останні координати та об'єднує часті pointermove в один rAF-вимір.
    const onPointerMove = (event: PointerEvent) => {
      pointerRef.current = { x: event.clientX, y: event.clientY };
      if (frameRef.current === null) frameRef.current = window.requestAnimationFrame(measure);
    };

    // На прихованій вкладці скидає реакцію, щоб аватар не залишався в старій позі.
    const onVisibilityChange = () => {
      if (document.hidden) reset();
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('visibilitychange', onVisibilityChange);

    // Cleanup прибирає глобальні слухачі та скасовує незавершений кадр.
    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
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
