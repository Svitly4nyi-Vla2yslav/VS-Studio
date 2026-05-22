import styled, { keyframes } from 'styled-components';
import { portfolioTheme } from '../../utils/portfolioTheme';

/* GradientRun рухає верхню glow-лінію footer. */
const gradientRun = keyframes`
  0% { transform: translateX(-35%); }
  100% { transform: translateX(35%); }
`;

/* FooterShell завершує portfolio темною manga-panel зоною. */
export const FooterShell = styled.footer`
  position: relative;
  z-index: 1;
  overflow: hidden;
  border-top: 1px solid rgba(56, 189, 248, 0.22);
  padding: clamp(34px, 6vw, 56px) 0;
  background:
    linear-gradient(135deg, rgba(5, 5, 16, 0.96), rgba(11, 11, 24, 0.92)),
    repeating-linear-gradient(115deg, rgba(248, 250, 252, 0.04) 0 1px, transparent 1px 22px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 12%;
    width: 76%;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${portfolioTheme.colors.purpleSoft}, ${portfolioTheme.colors.cyan}, ${portfolioTheme.colors.goldSoft}, transparent);
    animation: ${gradientRun} 6s ease-in-out infinite alternate;
  }

  @media (prefers-reduced-motion: reduce) {
    &::before {
      animation: none;
    }
  }
`;

/* FooterGrid розкладає brand, nav і contacts у колонки. */
export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(180px, 0.7fr) minmax(220px, 0.9fr);
  gap: 16px;
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

/* FooterBrand містить короткий підсумок про Vladyslav/VS Web Studio. */
export const FooterBrand = styled.div`
  border: 1px solid rgba(246, 211, 101, 0.18);
  border-radius: 8px;
  padding: 18px;
  clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px));
  background: rgba(8, 8, 18, 0.7);

  strong {
    display: block;
    margin-top: 4px;
    color: ${portfolioTheme.colors.cyan};
  }

  p {
    max-width: 54ch;
    margin: 14px 0 0;
    color: rgba(248, 250, 252, 0.7);
    line-height: 1.65;
  }
`;

/* FooterTitle показує ім'я у footer. */
export const FooterTitle = styled.h2`
  margin: 0;
  color: ${portfolioTheme.colors.white};
  font-family: ${portfolioTheme.fonts.heading};
  letter-spacing: 0;
`;

/* FooterPanel групує навігацію або контактні посилання. */
export const FooterPanel = styled.div`
  border: 1px solid rgba(34, 211, 238, 0.16);
  border-radius: 8px;
  padding: 18px;
  background: rgba(8, 8, 18, 0.6);

  h2 {
    margin: 0 0 12px;
    color: ${portfolioTheme.colors.goldSoft};
    font-size: 0.9rem;
    letter-spacing: 0;
    text-transform: uppercase;
  }
`;

/* FooterLinkList задає вертикальний список footer links. */
export const FooterLinkList = styled.div`
  display: grid;
  gap: 9px;

  a {
    display: inline-flex;
    gap: 8px;
    align-items: center;
    width: fit-content;
    color: rgba(248, 250, 252, 0.76);
    font-weight: 800;
  }

  a:hover,
  a:focus-visible {
    color: ${portfolioTheme.colors.cyan};
    outline: none;
  }
`;

/* FooterBottom тримає copyright/anime-inspired note. */
export const FooterBottom = styled.div`
  width: min(1180px, calc(100% - 32px));
  margin: 18px auto 0;
`;

/* FooterNote пояснює, що стиль оригінальний і без copyrighted characters. */
export const FooterNote = styled.p`
  margin: 0;
  color: ${portfolioTheme.colors.muted};
  font-size: 0.86rem;
`;
