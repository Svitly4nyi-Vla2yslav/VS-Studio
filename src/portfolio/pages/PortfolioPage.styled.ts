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
    linear-gradient(180deg, ${portfolioTheme.colors.background} 0%, ${portfolioTheme.colors.backgroundSoft} 48%, ${portfolioTheme.colors.backgroundPanel} 100%);
  color: ${portfolioTheme.colors.white};
  font-family: ${portfolioTheme.fonts.body};

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
  }

  a:focus-visible,
  button:focus-visible {
    outline: 2px solid ${portfolioTheme.colors.cyan};
    outline-offset: 3px;
  }
`;

/* ContentFrame більше не обмежує ширину, бо кожна секція має власний fullscreen контейнер. */
export const ContentFrame = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  margin: 0 auto;
`;

/* SkipLink дає keyboard users швидкий перехід до контенту. */
export const SkipLink = styled.a`
  position: absolute;
  left: 16px;
  top: 16px;
  z-index: 5;
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
