import { useEffect, useRef, type CSSProperties, type PointerEvent as ReactPointerEvent } from 'react';
import styled from 'styled-components';
import { goldButtonMotion } from './goldButtonMotion';

export const ObsidianSurface = styled.div`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  border: 1px solid var(--obsidian-border);
  background:
    radial-gradient(circle at var(--light-x, 78%) var(--light-y, 8%), var(--obsidian-reflection), transparent 28%),
    radial-gradient(ellipse at 14% 110%, rgba(109, 62, 25, 0.18), transparent 44%),
    linear-gradient(142deg, rgba(28, 24, 32, 0.92), var(--obsidian-surface) 46%, rgba(4, 4, 5, 0.96));
  box-shadow: inset 0 1px 0 rgba(255, 242, 189, 0.08), inset 0 -1px 0 rgba(65, 48, 75, 0.22), var(--obsidian-shadow-md);
  backdrop-filter: blur(var(--obsidian-blur)) saturate(118%);

  &::after {
    content: '';
    position: absolute;
    inset: 1px;
    z-index: -1;
    border-radius: inherit;
    pointer-events: none;
    background:
      linear-gradient(116deg, transparent 0 46%, rgba(241, 210, 119, 0.035) 47%, transparent 50%),
      radial-gradient(ellipse at 84% 18%, rgba(105, 88, 127, 0.08), transparent 32%);
    box-shadow: inset 0 0 28px rgba(0, 0, 0, 0.5);
  }
`;

export const GoldText = styled.span`
  color: transparent;
  background: var(--gold-metal);
  background-size: 180% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  filter: drop-shadow(0 7px 20px rgba(214, 165, 66, 0.12));
`;

export const GoldButton = styled.button`
  ${goldButtonMotion}
  min-height: 48px;
  border: 1px solid rgba(255, 242, 189, 0.58);
  border-radius: 16px;
  color: #171108;
  background: var(--gold-metal);
  background-size: 180% 100%;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.58), 0 13px 28px rgba(126, 78, 15, 0.25);
  font-weight: 800;

  &:hover,
  &:focus-visible {
    filter: brightness(1.06);
    transform: translateY(-1px);
  }

  &:active { transform: translateY(1px); }
  &:disabled { cursor: not-allowed; filter: grayscale(0.45); opacity: 0.58; transform: none; }
`;

export const usePointerLighting = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);
  const frameRef = useRef<number | null>(null);
  const latestRef = useRef({ x: 78, y: 8 });

  const update = (event: ReactPointerEvent<T>) => {
    if (event.pointerType === 'touch' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    latestRef.current = {
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    };
    if (frameRef.current !== null) return;
    frameRef.current = window.requestAnimationFrame(() => {
      frameRef.current = null;
      ref.current?.style.setProperty('--light-x', `${latestRef.current.x}%`);
      ref.current?.style.setProperty('--light-y', `${latestRef.current.y}%`);
    });
  };

  useEffect(() => () => {
    if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
  }, []);

  return { ref, onPointerMove: update, style: { '--light-x': '78%', '--light-y': '8%' } as CSSProperties };
};
