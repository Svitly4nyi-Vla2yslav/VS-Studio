import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { useEffect, useId, useState, type Ref } from 'react';
import styled from 'styled-components';
import { avatarStateLabel } from './assistantAvatar.config';
import type { AssistantVisualState, PointerProximity } from './assistantAvatar.types';
import { useAvatarIdleMotion } from './useAvatarIdleMotion';
import { useAvatarPointer } from './useAvatarPointer';
import { useEmmaAutonomousMotion } from './useEmmaAutonomousMotion';

const Stage = styled(motion.div)<{ $size: number }>`
  position: relative; width: ${({ $size }) => `${$size}px`}; height: ${({ $size }) => `${$size}px`};
  display: grid; place-items: center; flex: 0 0 auto; overflow: visible;
  filter: drop-shadow(0 9px 16px rgba(0,0,0,.52));
  svg { overflow: visible; }
`;
const Layer = styled(motion.div)`width:100%;height:100%;display:grid;place-items:center;transform-origin:50% 65%;`;

interface AssistantAvatarProps {
  state: AssistantVisualState; size?: number; pointer?: PointerProximity; trackingRef?: Ref<HTMLDivElement>;
  decorative?: boolean; audioLevel?: number; reduceMotion?: boolean;
}
const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);
const nonlinear = (value: number) => {
  const magnitude = Math.abs(value);
  if (magnitude < .1) return 0;
  const t = clamp((magnitude - .1) / .9, 0, 1);
  const eased = t * t * (3 - 2 * t);
  return Math.sign(value) * eased;
};
const eyeResponse = (value: number) => {
  const magnitude = Math.abs(value);
  if (magnitude < .035) return 0;
  const t = clamp((magnitude - .035) / .615, 0, 1);
  return Math.sign(value) * t * t * (3 - 2 * t);
};

export const AssistantAvatar: React.FC<AssistantAvatarProps> = ({ state, size = 64, pointer, trackingRef, decorative = false, audioLevel = 0, reduceMotion }) => {
  const systemReducedMotion = useReducedMotion();
  const reducedMotion = reduceMotion ?? Boolean(systemReducedMotion);
  const id = useId().replace(/:/g, '');
  const internalPointer = useAvatarPointer<HTMLDivElement>();
  const resolvedPointer = pointer ?? internalPointer;
  const trackedPointer = resolvedPointer as PointerProximity & { ref?: Ref<HTMLDivElement> };
  const idle = useAvatarIdleMotion(state, resolvedPointer.isNear);
  const [blink, setBlink] = useState(1);
  const [wink, setWink] = useState<'left' | 'right' | null>(null);
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const autonomous = useEmmaAutonomousMotion(state, resolvedPointer.isNear, hovered || pressed);
  const rawAudio = useMotionValue(0);
  const smoothAudio = useSpring(rawAudio, { stiffness: 90, damping: 24, mass: .9 });
  const audioScale = useTransform(smoothAudio, [0, 1], [1, 1.018]);
  const audioGlow = useTransform(smoothAudio, [0, 1], [.38, .8]);

  useEffect(() => rawAudio.set(clamp(audioLevel, 0, 1)), [audioLevel, rawAudio]);
  useEffect(() => {
    if (reducedMotion || state === 'sleeping') { setBlink(1); setWink(null); return undefined; }
    let blinkTimer = 0; let openTimer = 0; let secondTimer = 0;
    const schedule = () => { blinkTimer = window.setTimeout(() => {
      setBlink(.08); openTimer = window.setTimeout(() => { setBlink(1);
        if (Math.random() < .1) secondTimer = window.setTimeout(() => { setBlink(.08); openTimer = window.setTimeout(() => { setBlink(1); schedule(); }, 110); }, 160 + Math.random() * 60);
        else schedule();
      }, 90 + Math.random() * 35);
    }, 3200 + Math.random() * 4300); };
    schedule(); return () => [blinkTimer, openTimer, secondTimer].forEach(window.clearTimeout);
  }, [reducedMotion, state]);
  useEffect(() => {
    if (reducedMotion || resolvedPointer.isNear || !['idle', 'greeting', 'success'].includes(state)) return undefined;
    let closeTimer = 0; const timer = window.setTimeout(() => { setWink(Math.random() > .5 ? 'left' : 'right'); closeTimer = window.setTimeout(() => setWink(null), 180); }, 25000 + Math.random() * 25000);
    return () => { window.clearTimeout(timer); window.clearTimeout(closeTimer); };
  }, [reducedMotion, resolvedPointer.isNear, state]);

  const semanticLock = !['idle', 'curious', 'greeting', 'reading'].includes(state);
  const attentive = state === 'curious' || state === 'listening' || resolvedPointer.isNear || hovered;
  const happy = ['idle', 'greeting', 'answering', 'success', 'celebrating'].includes(state) && !attentive;
  const active = ['thinking', 'typing', 'listening', 'speaking'].includes(state);
  const energyOpacity = state === 'sleeping' ? .24 : active ? .72 : happy ? .58 : .42;
  const earOpacity = active || attentive ? .95 : state === 'error' ? .46 : .72;
  const gazeX = useSpring(useTransform([resolvedPointer.x, idle.gazeX, autonomous.gazeX], ([px, ix, ax]: number[]) => state === 'thinking' ? 1.8 : clamp(resolvedPointer.isNear && !resolvedPointer.isCoarse && !semanticLock ? eyeResponse(Number(px)) * 4 : Number(ax) || Number(ix) * 2.5, -4, 4)), { stiffness: 390, damping: 28, mass: .5 });
  const gazeY = useSpring(useTransform([resolvedPointer.y, idle.gazeY, autonomous.gazeY], ([py, iy, ay]: number[]) => state === 'thinking' ? -1.8 : state === 'reading' ? 1.4 : clamp(resolvedPointer.isNear && !resolvedPointer.isCoarse && !semanticLock ? eyeResponse(Number(py)) * 3 : Number(ay) || Number(iy) * 2.5, -3, 3)), { stiffness: 390, damping: 28, mass: .5 });
  const bodyX = useSpring(useTransform([resolvedPointer.x, autonomous.headX], ([value, idleValue]: number[]) => reducedMotion || semanticLock ? 0 : resolvedPointer.isNear ? nonlinear(Number(value)) * 2.5 : Number(idleValue)), { stiffness: 100, damping: 22, mass: 1.08 });
  const bodyY = useSpring(useTransform([resolvedPointer.y, autonomous.headY], ([value, idleValue]: number[]) => reducedMotion || semanticLock ? 0 : resolvedPointer.isNear ? nonlinear(Number(value)) * 2 : Number(idleValue)), { stiffness: 96, damping: 22, mass: 1.08 });
  const bodyRotateX = useSpring(useTransform([resolvedPointer.y, autonomous.headRotateX], ([value, idleValue]: number[]) => reducedMotion || semanticLock ? 0 : resolvedPointer.isNear ? nonlinear(Number(value)) * -28 : Number(idleValue)), { stiffness: 92, damping: 21, mass: 1.12 });
  const bodyRotateY = useSpring(useTransform([resolvedPointer.x, autonomous.headRotateY], ([value, idleValue]: number[]) => reducedMotion || semanticLock ? 0 : resolvedPointer.isNear ? nonlinear(Number(value)) * 40 : Number(idleValue)), { stiffness: 92, damping: 21, mass: 1.12 });
  const bodyRotateZ = useSpring(autonomous.headRotateZ, { stiffness: 90, damping: 22, mass: 1.1 });
  const highlightX = useTransform(gazeX, value => clamp(value * .42, -1.5, 1.5));
  const highlightY = useTransform(gazeY, value => clamp(value * .32, -1, 1));
  const visorX = useTransform(gazeX, value => value * .22);
  const visorY = useTransform(gazeY, value => value * .16);
  const reflectionX = useTransform(gazeX, value => value * -.34);
  const reflectionY = useTransform(gazeY, value => value * -.2);
  const energyX = useTransform(bodyRotateY, value => value / 28);
  const leftEarScale = useTransform(bodyRotateY, [-40, 0, 40], [.9, 1, 1.07]);
  const rightEarScale = useTransform(bodyRotateY, [-40, 0, 40], [1.07, 1, .9]);
  const leftEarAlpha = useTransform(bodyRotateY, [-40, 0, 40], [earOpacity * .82, earOpacity, Math.min(1, earOpacity * 1.08)]);
  const rightEarAlpha = useTransform(bodyRotateY, [-40, 0, 40], [Math.min(1, earOpacity * 1.08), earOpacity, earOpacity * .82]);
  const sweepX = useTransform(autonomous.reflectionSweep, [0, 1], [-18, 78]);
  const sweepOpacity = useTransform(autonomous.reflectionSweep, [0, .15, .75, 1], [0, .14, .1, 0]);
  const flatLeft = 'M38 62Q46 62 54 62';
  const flatRight = 'M66 62Q74 62 82 62';
  const eyeLeft = attentive || active ? flatLeft : state === 'sleeping' || state === 'error' ? 'M38 62Q46 66 54 62' : 'M38 65Q46 55 54 65';
  const eyeRight = attentive || active ? flatRight : state === 'sleeping' || state === 'error' ? 'M66 62Q74 66 82 62' : 'M66 65Q74 55 82 65';

  return <Stage ref={trackingRef ?? trackedPointer.ref} $size={size} aria-hidden={decorative || undefined} role={decorative ? undefined : 'img'} aria-label={decorative ? undefined : avatarStateLabel[state]} data-state={state}
    onPointerEnter={() => setHovered(true)} onPointerLeave={() => { setHovered(false); setPressed(false); }} onPointerDown={() => setPressed(true)} onPointerUp={() => setPressed(false)}
    animate={{ scale: pressed ? .95 : 1, y: hovered ? -2 : 0 }} transition={{ type: 'spring', stiffness: 245, damping: 22 }}>
    <Layer data-emma-head style={{ x: bodyX, y: bodyY, rotateX: bodyRotateX, rotateY: bodyRotateY, rotateZ: bodyRotateZ, transformPerspective: 480, transformStyle: 'preserve-3d' }}>
      <Layer animate={reducedMotion ? { y: 0 } : { y: state === 'success' ? [0, -2, 0] : [0, -1.8, .8, 0] }} transition={{ duration: state === 'success' ? .8 : 6.2, repeat: state === 'success' ? 0 : Infinity, ease: 'easeInOut' }}>
        <Layer style={{ scale: state === 'speaking' ? audioScale : undefined }} animate={reducedMotion ? { scale: 1 } : { scaleX: [1, 1.01, 1], scaleY: [1, 1.018, 1] }} transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}>
          <Layer animate={reducedMotion ? { rotate: 0, scale: 1 } : { rotate: state === 'error' ? [-.7, .5, -.7] : [-.6, .8, -.6], scale: attentive ? 1.025 : state === 'success' ? 1.035 : 1 }} transition={{ duration: state === 'error' ? 4.2 : 9.4, repeat: Infinity, ease: 'easeInOut' }}>
            <motion.svg viewBox='0 0 120 120' width='100%' height='100%' aria-hidden='true'>
              <defs>
                <linearGradient id={`${id}-helmet`} x1='18%' y1='8%' x2='88%' y2='92%'><stop offset='0%' stopColor='#1b1d22'/><stop offset='34%' stopColor='#0d0e11'/><stop offset='75%' stopColor='#08090b'/><stop offset='100%' stopColor='#141009'/></linearGradient>
                <radialGradient id={`${id}-visor`} cx='45%' cy='24%' r='78%'><stop offset='0%' stopColor='#111318'/><stop offset='38%' stopColor='#050609'/><stop offset='100%' stopColor='#010102'/></radialGradient>
                <linearGradient id={`${id}-gold`} x1='10%' y1='10%' x2='90%' y2='90%'><stop offset='0%' stopColor='#ffe29a'/><stop offset='38%' stopColor='#e6ad43'/><stop offset='100%' stopColor='#8e541b'/></linearGradient>
                <radialGradient id={`${id}-core`} cx='50%' cy='55%' r='55%'><stop offset='0%' stopColor='#f0c45d' stopOpacity='.72'/><stop offset='45%' stopColor='#a66d22' stopOpacity='.3'/><stop offset='100%' stopColor='#7d481a' stopOpacity='0'/></radialGradient>
                <linearGradient id={`${id}-orbit`} x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stopColor='#8e541b' stopOpacity='.1'/><stop offset='55%' stopColor='#e6ad43'/><stop offset='100%' stopColor='#ffe29a'/></linearGradient>
                <filter id={`${id}-blur`} x='-50%' y='-50%' width='200%' height='200%'><feGaussianBlur stdDeviation='4'/></filter>
                <filter id={`${id}-eye`} x='-80%' y='-100%' width='260%' height='300%'><feGaussianBlur stdDeviation='2.2'/></filter>
                <clipPath id={`${id}-clip`}><path d='M60 18C80 18 93 28 96 45L98 78C98 94 84 103 60 104C36 103 22 94 22 78L24 45C27 28 40 18 60 18Z'/></clipPath>
              </defs>
              <ellipse cx='60' cy='105' rx='31' ry='6' fill='rgba(0,0,0,.34)'/>
              <AnimatePresence>{state === 'thinking' && !reducedMotion ? <motion.g initial={{ opacity: 0, scale: .82 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.08 }} transition={{ duration: .32 }} style={{ transformOrigin: '60px 60px' }}>
                <motion.ellipse cx='60' cy='61' rx='51' ry='37' fill='none' stroke={`url(#${id}-orbit)`} opacity='.58' strokeWidth='1.7' strokeLinecap='round' strokeDasharray='76 42' animate={{ rotate: 360 }} transition={{ duration: 3.7, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '60px 61px' }}/>
                <motion.ellipse cx='60' cy='61' rx='44' ry='49' fill='none' stroke='rgba(230,173,67,.28)' strokeWidth='1' strokeDasharray='46 62' animate={{ rotate: -360 }} transition={{ duration: 4.4, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '60px 61px' }}/>
                <circle cx='108' cy='51' r='2.1' fill='#ffe29a'/><circle cx='25' cy='93' r='1.5' fill='#e6ad43'/>
              </motion.g> : null}</AnimatePresence>
              <motion.g style={{ opacity: state === 'speaking' ? audioGlow : leftEarAlpha, scaleX:leftEarScale, transformOrigin:'25px 66px' }}><path d='M25 43C16 44 12 51 12 61V72C12 82 17 87 25 88Z' fill='#08090b' stroke={`url(#${id}-gold)`} strokeWidth='2.2'/><motion.rect x='16' y='54' width='5' height='23' rx='2.5' fill={`url(#${id}-gold)`} animate={reducedMotion?undefined:{opacity:[.72,.9,.72]}} transition={{duration:7.3,repeat:Infinity,ease:'easeInOut'}}/></motion.g>
              <motion.g style={{ opacity: state === 'speaking' ? audioGlow : rightEarAlpha, scaleX:rightEarScale, transformOrigin:'95px 66px' }}><path d='M95 43C104 44 108 51 108 61V72C108 82 103 87 95 88Z' fill='#08090b' stroke={`url(#${id}-gold)`} strokeWidth='2.2'/><motion.rect x='99' y='54' width='5' height='23' rx='2.5' fill={`url(#${id}-gold)`} animate={reducedMotion?undefined:{opacity:[.68,.86,.68]}} transition={{duration:8.9,repeat:Infinity,ease:'easeInOut',delay:1.1}}/></motion.g>
              <path d='M60 18C80 18 93 28 96 45L98 78C98 94 84 103 60 104C36 103 22 94 22 78L24 45C27 28 40 18 60 18Z' fill={`url(#${id}-helmet)`} stroke={`url(#${id}-gold)`} strokeWidth='1.45'/>
              <g clipPath={`url(#${id}-clip)`}>
                <motion.ellipse cx='43' cy='80' rx='26' ry='22' fill={`url(#${id}-core)`} filter={`url(#${id}-blur)`} style={{ x:energyX }} animate={reducedMotion ? { opacity: energyOpacity } : { y: [1,-2,1], opacity: [energyOpacity*.65,energyOpacity,energyOpacity*.65] }} transition={{ duration: active ? 6.5 : 9.2, repeat: Infinity, ease: 'easeInOut' }}/>
                <motion.ellipse cx='79' cy='47' rx='19' ry='17' fill='#d99a37' opacity='.13' filter={`url(#${id}-blur)`} animate={reducedMotion ? undefined : { x:[2,-1,2],y:[-1,2,-1],opacity:[.08,.2,.08] }} transition={{ duration:10.7,repeat:Infinity,ease:'easeInOut' }}/>
                <motion.g style={{ x:reflectionX,y:reflectionY }}><path d='M32 33C43 21 61 21 73 24C55 26 43 31 35 42Z' fill='rgba(255,255,255,.12)'/><path d='M38 27C49 21 65 21 77 25' fill='none' stroke='rgba(255,226,154,.2)' strokeWidth='2' strokeLinecap='round'/></motion.g>
              </g>
              <motion.g style={{ x:visorX,y:visorY }}><rect x='28' y='40' width='64' height='45' rx='20' fill={`url(#${id}-visor)`} stroke='rgba(255,226,154,.24)' strokeWidth='1.2'/><motion.path d='M37 46C49 41 70 41 83 46' fill='none' stroke='rgba(255,255,255,.15)' strokeWidth='2.1' strokeLinecap='round' style={{ x:reflectionX }}/><motion.rect x='30' y='43' width='8' height='36' rx='4' fill='rgba(255,255,255,.12)' style={{ x:sweepX,opacity:sweepOpacity }} /></motion.g>
              <motion.ellipse cx='60' cy='72' rx='25' ry='12' fill='#a66d22' filter={`url(#${id}-blur)`} style={{ opacity: state === 'speaking' ? audioGlow : energyOpacity*.25 }}/>
              <motion.g data-emma-eyes style={{ x:gazeX,y:gazeY }}>
                <motion.path d={eyeLeft} animate={{ d:eyeLeft,strokeWidth:attentive||active?6.2:4.2 }} transition={{ duration:.22,ease:'easeInOut' }} fill='none' stroke='#f1bf57' strokeLinecap='round' style={{ scaleY:wink==='left'?.06:blink,transformOrigin:'46px 62px' }}/>
                <motion.path d={eyeRight} animate={{ d:eyeRight,strokeWidth:attentive||active?6.2:4.2 }} transition={{ duration:.22,ease:'easeInOut' }} fill='none' stroke='#f1bf57' strokeLinecap='round' style={{ scaleY:wink==='right'?.06:blink,transformOrigin:'74px 62px' }}/>
                <motion.path d={eyeLeft} animate={{ d:eyeLeft,opacity:attentive||active?.38:.28 }} transition={{ duration:.22 }} fill='none' stroke='rgba(240,174,62,.5)' strokeWidth='9' strokeLinecap='round' filter={`url(#${id}-eye)`}/><motion.path d={eyeRight} animate={{ d:eyeRight,opacity:attentive||active?.38:.28 }} transition={{ duration:.22 }} fill='none' stroke='rgba(240,174,62,.5)' strokeWidth='9' strokeLinecap='round' filter={`url(#${id}-eye)`}/>
                <motion.ellipse cx='43' cy='61' rx='3.2' ry='1.4' fill='#ffe599' style={{ x:highlightX,y:highlightY }} animate={{ opacity:attentive||active?.9:0,scale:attentive||active?1:.65 }} transition={{ duration:.18 }}/><motion.ellipse cx='71' cy='61' rx='3.2' ry='1.4' fill='#ffe599' style={{ x:highlightX,y:highlightY }} animate={{ opacity:attentive||active?.9:0,scale:attentive||active?1:.65 }} transition={{ duration:.18 }}/>
              </motion.g>
              {state === 'celebrating' && !reducedMotion ? <motion.g animate={{ opacity:[0,1,0],scale:[.8,1.14,.8] }} transition={{ duration:1.2 }} style={{ transformOrigin:'60px 60px' }}><path d='M15 31h7M18.5 27.5v7M99 91h7M102.5 87.5v7' stroke='#ffe29a' strokeWidth='1.6' strokeLinecap='round'/></motion.g> : null}
            </motion.svg>
          </Layer>
        </Layer>
      </Layer>
    </Layer>
  </Stage>;
};
