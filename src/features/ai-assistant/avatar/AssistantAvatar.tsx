import { motion, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState, type Ref } from 'react';
import styled, { keyframes } from 'styled-components';
import { avatarStateLabel } from './assistantAvatar.config';
import type { AssistantVisualState, PointerProximity } from './assistantAvatar.types';
import { useAvatarIdleMotion } from './useAvatarIdleMotion';
import { useAvatarPointer } from './useAvatarPointer';

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const bodyFloat = keyframes`
  0%, 100% { transform: translateY(-5px) rotate(-2deg) scale(0.985); }
  50% { transform: translateY(6px) rotate(2.2deg) scale(1.04); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.42; }
  50% { opacity: 1; }
`;

const Stage = styled.div<{ $size: number; $state: AssistantVisualState }>`
  position: relative;
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  overflow: visible;
  border-radius: 50%;
  filter: drop-shadow(0 14px 24px rgba(0, 0, 0, 0.48));

  &::before {
    content: '';
    position: absolute;
    inset: 7%;
    border-radius: 50%;
    border: 1px solid rgba(240, 213, 138, 0.18);
    box-shadow: 0 0 18px rgba(214, 165, 66, 0.08);
    opacity: ${({ $state }) => ($state === 'thinking' ? 0.8 : 0.2)};
    animation: ${pulse} 3s ease-in-out infinite;
    pointer-events: none;
  }
`;

const AvatarBody = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  transform-origin: 50% 70%;
  animation: ${bodyFloat} 4.8s ease-in-out infinite;
`;

const FaceWrap = styled(motion.div)`
  position: relative;
  display: grid;
  place-items: center;
  width: 92%;
  height: 92%;
  transform-origin: 50% 70%;
`;

const BotSvg = styled.svg`
  width: 100%;
  height: 100%;
  overflow: visible;
`;

interface AssistantAvatarProps {
  state: AssistantVisualState;
  size?: number;
  pointer?: PointerProximity;
  trackingRef?: Ref<HTMLDivElement>;
  decorative?: boolean;
}

export const AssistantAvatar: React.FC<AssistantAvatarProps> = ({
  state,
  size = 64,
  pointer,
  trackingRef,
  decorative = false,
}) => {
  const reducedMotion = useReducedMotion();
  const internalPointer = useAvatarPointer<HTMLDivElement>();
  const resolvedPointer = pointer ?? internalPointer;
  const trackedPointer = resolvedPointer as PointerProximity & { ref?: Ref<HTMLDivElement> };
  const avatarTrackingRef = trackingRef ?? trackedPointer.ref;
  const idleMotion = useAvatarIdleMotion(state, resolvedPointer.isNear);
  const [blink, setBlink] = useState(1);
  const [autoAction, setAutoAction] = useState(0);

  useEffect(() => {
    if (reducedMotion) {
      setBlink(1);
      setAutoAction(0);
      return undefined;
    }

    let blinkTimer: number | undefined;
    let closeTimer: number | undefined;
    let actionTimer: number | undefined;

    const scheduleBlink = () => {
      blinkTimer = window.setTimeout(() => {
        setBlink(0);
        closeTimer = window.setTimeout(() => {
          setBlink(1);
          scheduleBlink();
        }, 110 + Math.random() * 80);
      }, 2400 + Math.random() * 4200);
    };

    const scheduleAction = () => {
      const delay = 5000 + Math.random() * 9000;
      actionTimer = window.setTimeout(() => {
        setAutoAction((value) => (value + 1) % 4);
        scheduleAction();
      }, delay);
    };

    scheduleBlink();
    scheduleAction();

    return () => {
      if (blinkTimer) window.clearTimeout(blinkTimer);
      if (closeTimer) window.clearTimeout(closeTimer);
      if (actionTimer) window.clearTimeout(actionTimer);
    };
  }, [reducedMotion]);

  const bodyX = useSpring(
    useTransform([resolvedPointer.x, idleMotion.gazeX], (values: number[]) => {
      const [pointerValue, idleValue] = values;
      const numericPointer = Number(pointerValue ?? 0);
      const numericIdle = Number(idleValue ?? 0);
      return resolvedPointer.isNear ? numericPointer * 9 : numericIdle * 3.2;
    }),
    { stiffness: 120, damping: 18, mass: 1.1 }
  );

  const bodyY = useSpring(
    useTransform([resolvedPointer.y, idleMotion.gazeY], (values: number[]) => {
      const [pointerValue, idleValue] = values;
      const numericPointer = Number(pointerValue ?? 0);
      const numericIdle = Number(idleValue ?? 0);
      return resolvedPointer.isNear ? numericPointer * 7 : numericIdle * 2.6;
    }),
    { stiffness: 110, damping: 18, mass: 1.1 }
  );

  const bodyRotate = useSpring(
    useTransform([resolvedPointer.x, idleMotion.gazeX], (values: number[]) => {
      const [pointerValue, idleValue] = values;
      const numericPointer = Number(pointerValue ?? 0);
      const numericIdle = Number(idleValue ?? 0);
      return resolvedPointer.isNear ? numericPointer * 16 : numericIdle * 9;
    }),
    { stiffness: 100, damping: 16, mass: 1.4 }
  );

  const headX = useSpring(
    useTransform([resolvedPointer.x, idleMotion.gazeX], (values: number[]) => {
      const [pointerValue, idleValue] = values;
      const numericPointer = Number(pointerValue ?? 0);
      const numericIdle = Number(idleValue ?? 0);
      return clamp((resolvedPointer.isNear ? numericPointer : numericIdle) * 5.4, -3.5, 3.5);
    }),
    { stiffness: 220, damping: 22, mass: 0.8 }
  );

  const headY = useSpring(
    useTransform([resolvedPointer.y, idleMotion.gazeY], (values: number[]) => {
      const [pointerValue, idleValue] = values;
      const numericPointer = Number(pointerValue ?? 0);
      const numericIdle = Number(idleValue ?? 0);
      return clamp((resolvedPointer.isNear ? numericPointer : numericIdle) * 4.1, -2.3, 2.3);
    }),
    { stiffness: 210, damping: 22, mass: 0.8 }
  );

  const headRotate = useSpring(
    useTransform([resolvedPointer.x, resolvedPointer.y], (values: number[]) => {
      const [pointerX, pointerY] = values;
      return clamp(Number(pointerX ?? 0) * 15 + Number(pointerY ?? 0) * 5, -12, 12);
    }),
    { stiffness: 200, damping: 22, mass: 0.9 }
  );

  const leftPupilX = useSpring(
    useTransform([resolvedPointer.x, idleMotion.gazeX], (values: number[]) => {
      const [pointerValue, idleValue] = values;
      const numericPointer = Number(pointerValue ?? 0);
      const numericIdle = Number(idleValue ?? 0);
      const target = resolvedPointer.isNear ? numericPointer * 7.8 : numericIdle * 5.4;
      return clamp(target - 0.9, -3.8, 3.8);
    }),
    { stiffness: 370, damping: 24, mass: 0.5 }
  );

  const rightPupilX = useSpring(
    useTransform([resolvedPointer.x, idleMotion.gazeX], (values: number[]) => {
      const [pointerValue, idleValue] = values;
      const numericPointer = Number(pointerValue ?? 0);
      const numericIdle = Number(idleValue ?? 0);
      const target = resolvedPointer.isNear ? numericPointer * 7.8 : numericIdle * 5.4;
      return clamp(target + 0.9, -3.8, 3.8);
    }),
    { stiffness: 370, damping: 24, mass: 0.5 }
  );

  const leftPupilY = useSpring(
    useTransform([resolvedPointer.y, idleMotion.gazeY], (values: number[]) => {
      const [pointerValue, idleValue] = values;
      const numericPointer = Number(pointerValue ?? 0);
      const numericIdle = Number(idleValue ?? 0);
      const target = resolvedPointer.isNear ? numericPointer * 6.4 : numericIdle * 4.3;
      return clamp(target - 0.4, -3, 3);
    }),
    { stiffness: 370, damping: 24, mass: 0.5 }
  );

  const rightPupilY = useSpring(
    useTransform([resolvedPointer.y, idleMotion.gazeY], (values: number[]) => {
      const [pointerValue, idleValue] = values;
      const numericPointer = Number(pointerValue ?? 0);
      const numericIdle = Number(idleValue ?? 0);
      const target = resolvedPointer.isNear ? numericPointer * 6.4 : numericIdle * 4.3;
      return clamp(target + 0.4, -3, 3);
    }),
    { stiffness: 370, damping: 24, mass: 0.5 }
  );

  const bodyMood = (() => {
    if (state === 'success') return { s: 1.08, y: 0, rotate: 4, glow: 1 };
    if (state === 'greeting') return { s: 1.12, y: -2, rotate: 8, glow: 1 };
    if (state === 'thinking') return { s: 1.06, y: -0.5, rotate: -2, glow: 0.8 };
    if (state === 'answering') return { s: 1.06, y: -1, rotate: 3, glow: 0.9 };
    if (state === 'curious') return { s: 1.04, y: 0, rotate: 4, glow: 0.76 };
    if (state === 'error') return { s: 1, y: 0.5, rotate: -4, glow: 0.55 };
    return { s: 1, y: 0, rotate: 0, glow: 0.7 };
  })();

  const eyeLift = state === 'thinking' ? -1.3 : state === 'greeting' ? -1.1 : state === 'success' ? -0.8 : 0;
  const eyeWiden = state === 'greeting' || state === 'success' ? 1.14 : state === 'thinking' ? 1.04 : 1;
  const gazeShift = autoAction === 1 ? 2.3 : autoAction === 2 ? -2.1 : autoAction === 3 ? 1.4 : 0;

  return (
    <Stage
      ref={avatarTrackingRef}
      $state={state}
      $size={size}
      aria-hidden={decorative || undefined}
      role={decorative ? undefined : 'img'}
      aria-label={decorative ? undefined : avatarStateLabel[state]}
      data-state={state}
    >
      <AvatarBody
        style={{ x: bodyX, y: bodyY, rotate: bodyRotate }}
        animate={
          reducedMotion
            ? { scale: [1, 0.995, 1] }
            : {
                scaleX: [1, bodyMood.s, 1.03, 1],
                scaleY: [1, 1.02, bodyMood.s + 0.02, 1],
                rotate: [0, bodyMood.rotate, -bodyMood.rotate * 0.6, 0],
                y: [0, bodyMood.y, 0, 0],
              }
        }
        transition={{ duration: state === 'thinking' ? 1.1 : state === 'greeting' ? 0.9 : 4.3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <FaceWrap style={{ x: headX, y: headY, rotate: headRotate }}>
          <BotSvg viewBox='0 0 120 120' aria-hidden='true'>
            <defs>
              <linearGradient id='ghostBody' x1='0%' x2='100%' y1='0%' y2='100%'>
                <stop offset='0%' stopColor='rgba(20, 20, 22, 0.96)' />
                <stop offset='40%' stopColor='rgba(12, 12, 14, 0.98)' />
                <stop offset='100%' stopColor='rgba(8, 8, 10, 0.96)' />
              </linearGradient>
              <linearGradient id='ghostShine' x1='0%' x2='100%' y1='0%' y2='100%'>
                <stop offset='0%' stopColor='rgba(242, 216, 155, 0.9)' />
                <stop offset='65%' stopColor='rgba(202, 151, 80, 0.35)' />
                <stop offset='100%' stopColor='rgba(242, 216, 155, 0)' />
              </linearGradient>
            </defs>

            <ellipse cx='60' cy='92' rx='24' ry='9' fill='rgba(0,0,0,0.22)' />

            <motion.g
              animate={
                reducedMotion
                  ? { scale: 1 }
                  : {
                      scaleX: [1, 1.03, 1.06, 1],
                      scaleY: [1, 0.99, 1.03, 1],
                      rotate: state === 'greeting' ? [0, 7, -6, 0] : state === 'success' ? [0, 4, 2, 0] : [0, 2, -2, 0],
                    }
              }
              transition={{ duration: state === 'greeting' ? 1.2 : 4.4, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: '50% 58%' }}
            >
              <path
                d='M32 58C32 38 42 22 60 22C77 22 89 36 89 54C89 77 78 91 60 99C43 92 32 78 32 58Z'
                fill='url(#ghostBody)'
                stroke='rgba(246, 219, 163, 0.34)'
                strokeWidth='1.4'
              />
              <path
                d='M42 42C49 33 58 31 60 31C67 31 76 34 82 44C74 38 66 35 60 35C55 35 48 37 42 42Z'
                fill='rgba(246, 220, 170, 0.08)'
              />
              <path
                d='M38 56C48 64 52 74 60 80C69 74 76 66 82 56'
                fill='rgba(250, 214, 147, 0.06)'
                stroke='rgba(240, 213, 138, 0.12)'
                strokeWidth='5'
                strokeLinecap='round'
              />
            </motion.g>

            <motion.g
              animate={{
                x: autoAction === 1 ? 2.8 : autoAction === 2 ? -2.6 : 0,
                y: state === 'thinking' ? [0, -1, 0, 1, 0] : state === 'success' ? [0, -2, 0] : 0,
              }}
              transition={{ duration: 1.3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <motion.g
                animate={{ scaleY: blink, scaleX: eyeWiden, rotate: state === 'error' ? -5 : state === 'greeting' ? 2 : 0, y: eyeLift }}
                transition={{ duration: 0.14, ease: 'easeInOut' }}
                style={{ transformOrigin: '50% 50%' }}
              >
                <ellipse cx='46' cy='58' rx='12' ry='13' fill='rgba(249, 233, 196, 0.92)' opacity='0.9' />
                <path d='M35 58 Q46 49 57 58' fill='none' stroke='rgba(34,28,20,0.18)' strokeWidth='1' strokeLinecap='round' />
                <motion.g style={{ x: leftPupilX, y: leftPupilY }}>
                  <ellipse cx='0' cy='0' rx='4.1' ry='4.7' fill='#1d140d' />
                  <circle cx='1.1' cy='-1.3' r='1.2' fill='rgba(255,255,255,0.9)' />
                </motion.g>
              </motion.g>

              <motion.g
                animate={{ scaleY: blink, scaleX: eyeWiden, rotate: state === 'error' ? 5 : state === 'greeting' ? -2 : 0, y: eyeLift }}
                transition={{ duration: 0.14, ease: 'easeInOut' }}
                style={{ transformOrigin: '50% 50%' }}
              >
                <ellipse cx='74' cy='58' rx='12' ry='13' fill='rgba(249, 233, 196, 0.92)' opacity='0.9' />
                <path d='M63 58 Q74 49 85 58' fill='none' stroke='rgba(34,28,20,0.18)' strokeWidth='1' strokeLinecap='round' />
                <motion.g style={{ x: rightPupilX, y: rightPupilY }}>
                  <ellipse cx='0' cy='0' rx='4.1' ry='4.7' fill='#1d140d' />
                  <circle cx='1.1' cy='-1.3' r='1.2' fill='rgba(255,255,255,0.9)' />
                </motion.g>
              </motion.g>
            </motion.g>

            <motion.g
              animate={{
                x: gazeShift,
                y: state === 'success' ? [0, -1, 0] : state === 'greeting' ? [-1, 1, 0] : 0,
                scaleY: state === 'success' ? [1, 1.08, 1] : 1,
              }}
              transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
            >
              <path
                d={state === 'success' ? 'M48 75 Q60 83 72 75' : state === 'greeting' ? 'M50 74 Q60 80 70 74' : 'M53 74 Q60 76 67 74'}
                fill='none'
                stroke='rgba(243, 215, 155, 0.9)'
                strokeWidth={state === 'success' ? 3 : 2.2}
                strokeLinecap='round'
              />
            </motion.g>

            <motion.g
              animate={{
                x: state === 'greeting' ? [0, 6, -4, 0] : 0,
                rotate: state === 'greeting' ? [0, 10, -7, 0] : 0,
              }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: '18% 58%' }}
            >
              <path d='M18 60C16 62 14 65 14 72C14 76 17 80 22 80C27 80 30 77 30 72C30 65 27 62 18 60Z' fill='rgba(244, 213, 146, 0.12)' stroke='rgba(244, 213, 146, 0.18)' strokeWidth='0.8' />
            </motion.g>

            {state === 'thinking' ? (
              <motion.g
                animate={{ rotate: 360 }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'linear' }}
                style={{ transformOrigin: '50% 50%' }}
              >
                <circle cx='90' cy='28' r='7' fill='none' stroke='rgba(240,213,138,0.62)' strokeWidth='1.1' />
                <path d='M90 16V20M90 36V40M78 28H82M98 28H102' stroke='rgba(240,213,138,0.7)' strokeWidth='1.1' strokeLinecap='round' />
              </motion.g>
            ) : null}
          </BotSvg>
        </FaceWrap>
      </AvatarBody>
    </Stage>
  );
};
