import { animate, useMotionValue, useReducedMotion } from 'framer-motion';
import { useEffect } from 'react';
import type { AssistantVisualState } from './assistantAvatar.types';

const idleStates: AssistantVisualState[] = ['idle', 'greeting', 'curious'];
export const useEmmaAutonomousMotion = (state: AssistantVisualState, pointerNear: boolean, interacting: boolean) => {
  const reducedMotion = useReducedMotion();
  const headRotateX = useMotionValue(0);
  const headRotateY = useMotionValue(0);
  const headRotateZ = useMotionValue(0);
  const headX = useMotionValue(0);
  const headY = useMotionValue(0);
  const gazeX = useMotionValue(0);
  const gazeY = useMotionValue(0);
  const reflectionSweep = useMotionValue(0);

  useEffect(() => {
    let cancelled = false;
    let timer = 0;
    let sweepTimer = 0;
    const pendingWaits: number[] = [];
    const controls: Array<{ stop: () => void }> = [];
    const wait = (ms: number) => new Promise<void>(resolve => {
      const timeout = window.setTimeout(resolve, ms);
      pendingWaits.push(timeout);
    });
    const move = (value: ReturnType<typeof useMotionValue<number>>, target: number, duration = .45) => {
      const control = animate(value, target, { duration, ease: [0.22, 1, 0.36, 1] });
      controls.push(control);
      return control;
    };
    const neutral = () => {
      move(gazeX, 0, .28); move(gazeY, 0, .28);
      move(headRotateX, 0, .55); move(headRotateY, 0, .55); move(headRotateZ, 0, .6);
      move(headX, 0, .55); move(headY, 0, .55);
    };

    if (reducedMotion || pointerNear || interacting || !idleStates.includes(state)) {
      neutral();
      return () => controls.forEach(control => control.stop());
    }

    const scan = async () => {
      move(gazeX, -2.2, .25); await wait(180); if (cancelled) return;
      move(headRotateY, -9, .55); move(headX, -.5, .55); await wait(650); if (cancelled) return;
      move(gazeX, 2, .3); await wait(150); if (cancelled) return;
      move(headRotateY, 7, .6); move(headX, .4, .6); await wait(600); if (cancelled) return;
      move(gazeX, 0, .28); await wait(170); if (!cancelled) neutral();
    };
    const lookAway = async () => {
      const side = Math.random() > .5 ? 1 : -1;
      move(gazeX, side * 2.4, .25); move(gazeY, -.35, .25); await wait(140); if (cancelled) return;
      move(headRotateY, side * 10, .55); move(headRotateZ, side * 1.3, .6); await wait(850); if (cancelled) return;
      move(gazeX, 0, .25); move(gazeY, 0, .25); await wait(190); if (!cancelled) neutral();
    };
    const tilt = async () => {
      const side = Math.random() > .5 ? 1 : -1;
      move(headRotateZ, side * 5.5, .55); move(gazeY, -.35, .3); await wait(700); if (!cancelled) neutral();
    };
    const lookVertical = async () => {
      const up = Math.random() > .45;
      move(gazeY, up ? -2 : 1.8, .24); await wait(150); if (cancelled) return;
      move(headRotateX, up ? -9 : 7, .55); move(headY, up ? -.4 : .35, .55); await wait(700); if (cancelled) return;
      move(gazeY, 0, .25); await wait(170); if (!cancelled) neutral();
    };
    const nod = async () => {
      move(headRotateX, 4, .3); move(headY, .7, .3); await wait(330); if (!cancelled) neutral();
    };
    const sweep = async () => {
      reflectionSweep.set(0); move(reflectionSweep, 1, .7); await wait(720); reflectionSweep.set(0);
    };
    const scheduleSweep = () => {
      sweepTimer = window.setTimeout(async () => {
        await sweep();
        if (!cancelled) scheduleSweep();
      }, 8000 + Math.random() * 8000);
    };
    const schedule = (initial = false) => {
      timer = window.setTimeout(async () => {
        const roll = Math.random();
        if (roll < .25) await scan();
        else if (roll < .47) await lookAway();
        else if (roll < .65) await tilt();
        else if (roll < .8) await lookVertical();
        else await nod();
        if (!cancelled) schedule();
      }, (initial ? 1000 : 7000) + Math.random() * (initial ? 1200 : 9000));
    };
    schedule(true);
    scheduleSweep();
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      window.clearTimeout(sweepTimer);
      pendingWaits.forEach(window.clearTimeout);
      controls.forEach(control => control.stop());
      gazeX.set(0); gazeY.set(0); headRotateX.set(0); headRotateY.set(0); headRotateZ.set(0); headX.set(0); headY.set(0); reflectionSweep.set(0);
    };
  }, [gazeX, gazeY, headRotateX, headRotateY, headRotateZ, headX, headY, interacting, pointerNear, reducedMotion, reflectionSweep, state]);

  return { headRotateX, headRotateY, headRotateZ, headX, headY, gazeX, gazeY, reflectionSweep };
};
