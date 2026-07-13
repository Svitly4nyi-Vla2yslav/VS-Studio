import styled, { createGlobalStyle } from 'styled-components';
import { portfolioTheme } from '../utils/portfolioTheme';

/* PortfolioGlobalStyle ховає нативний scrollbar тільки на portfolio-сторінці й не зачіпає основний сайт. */
export const PortfolioGlobalStyle = createGlobalStyle`
  html.portfolio-page-active,
  body.portfolio-page-active {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  html.portfolio-page-active *,
  body.portfolio-page-active * {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  html.portfolio-page-active::-webkit-scrollbar,
  body.portfolio-page-active::-webkit-scrollbar,
  html.portfolio-page-active *::-webkit-scrollbar,
  body.portfolio-page-active *::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }

  html.portfolio-page-active {
    scroll-padding-top: 96px;
    scroll-behavior: smooth;
  }

  @media (prefers-reduced-motion: reduce) {
    html.portfolio-page-active {
      scroll-behavior: auto;
    }
  }
`;

/* Кореневий wrapper ізолює portfolio від основного сайту й тримає єдиний вертикальний потік сторінки. */
export const PortfolioPageWrapper = styled.main`
  position: relative;
  min-height: 100vh;
  overflow-x: clip;
  background:
    radial-gradient(circle at top left, rgba(124, 58, 237, 0.18), transparent 28%),
    radial-gradient(circle at bottom right, rgba(34, 211, 238, 0.12), transparent 28%),
    linear-gradient(
      180deg,
      ${portfolioTheme.colors.background} 0%,
      ${portfolioTheme.colors.backgroundSoft} 48%,
      ${portfolioTheme.colors.backgroundPanel} 100%
    );
  color: ${portfolioTheme.colors.white};
  font-family: ${portfolioTheme.fonts.body};
  line-height: 1.5;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  p,
  span,
  strong {
    color: inherit;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    touch-action: manipulation;
  }

  button {
    cursor: pointer;
    touch-action: manipulation;
  }

  a:focus-visible,
  button:focus-visible {
    outline: 2px solid ${portfolioTheme.colors.cyan};
    outline-offset: 3px;
  }
`;

export const AmbientSpotlight = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background: radial-gradient(
    520px circle at var(--spotlight-x, 50vw) var(--spotlight-y, 28vh),
    rgba(103, 232, 249, 0.085),
    rgba(192, 132, 252, 0.035) 42%,
    transparent 72%
  );
  mix-blend-mode: screen;

  @media (pointer: coarse), (prefers-reduced-motion: reduce) {
    display: none;
  }
`;

/* ContentFrame більше не обмежує ширину, бо кожна секція має власний fullscreen контейнер. */
export const ContentFrame = styled.div`
  position: relative;
  z-index: ${portfolioTheme.z.content};
  width: 100%;
  margin: 0 auto;
`;

/* SkipLink дає keyboard users швидкий перехід до контенту. */
export const SkipLink = styled.a`
  position: absolute;
  left: 16px;
  top: 16px;
  z-index: ${portfolioTheme.z.skipLink};
  transform: translateY(-140%);
  border-radius: ${portfolioTheme.radii.pill};
  padding: 10px 14px;
  background: ${portfolioTheme.colors.white};
  color: ${portfolioTheme.colors.background};
  font-weight: 900;

  &:focus {
    transform: translateY(0);
  }
`;

export const MotionModeButton = styled.button<{ $active: boolean }>`
  position: fixed;
  left: clamp(10px, 1.6vw, 24px);
  bottom: clamp(10px, 1.6vw, 24px);
  z-index: ${portfolioTheme.z.header};
  display: inline-flex;
  gap: 8px;
  align-items: center;
  min-height: 42px;
  border: 1px solid ${({ $active }) => ($active ? 'rgba(103, 232, 249, 0.48)' : 'rgba(148, 163, 184, 0.28)')};
  border-radius: 999px;
  padding: 0 14px;
  color: ${({ $active }) => ($active ? portfolioTheme.colors.cyan : portfolioTheme.colors.muted)};
  background: rgba(5, 5, 16, 0.86);
  box-shadow: ${({ $active }) => ($active ? '0 0 28px rgba(34, 211, 238, 0.18)' : 'none')};
  backdrop-filter: blur(14px);
  font-size: 0.68rem;
  font-weight: 900;
  letter-spacing: 0.16em;
  cursor: pointer;
  transition: 180ms ease;

  span {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${({ $active }) => ($active ? portfolioTheme.colors.cyan : portfolioTheme.colors.muted)};
    box-shadow: ${({ $active }) => ($active ? `0 0 12px ${portfolioTheme.colors.cyan}` : 'none')};
  }

  &:hover {
    transform: translateY(-2px);
    border-color: ${portfolioTheme.colors.goldSoft};
  }

  &:focus-visible {
    outline: 2px solid ${portfolioTheme.colors.cyan};
    outline-offset: 3px;
  }
`;
