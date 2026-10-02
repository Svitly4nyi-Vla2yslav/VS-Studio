import { css } from 'styled-components';

export const goldButtonMotion = css`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  transform: translateY(0);
  transition:
    transform 600ms var(--ease-obsidian),
    box-shadow 600ms ease,
    border-color 600ms ease,
    filter 600ms ease;

  &::before {
    content: '';
    position: absolute;
    inset: -15% -45%;
    z-index: 0;
    pointer-events: none;
    opacity: 0;
    background: linear-gradient(
      110deg,
      transparent 0%,
      transparent 34%,
      rgba(255, 255, 255, .08) 42%,
      rgba(255, 245, 200, .48) 49%,
      rgba(255, 255, 255, .16) 55%,
      transparent 66%,
      transparent 100%
    );
    animation: vsGoldSweep 4.8s linear infinite;
    animation-play-state: paused;
    transition: opacity 620ms ease;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  &:hover,
  &:focus-visible {
    transform: translateY(-1px);
  }

  &:hover::before,
  &:focus-visible::before {
    opacity: 1;
    animation-play-state: running;
  }

  &:active { transform: translateY(1px); }

  @media (prefers-reduced-motion: reduce) {
    &::before { animation: none; }
  }
`;
