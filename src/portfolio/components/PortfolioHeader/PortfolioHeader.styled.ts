import styled from 'styled-components';
import { portfolioTheme } from '../../utils/portfolioTheme';

/* Fixed shell тримає portfolio nav поверх fullscreen-секцій. */
export const HeaderShell = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  top: 12px;
  left: 0;
  right: 0;
  z-index: 20;
  padding: 0 16px;
  pointer-events: none;
  --portfolio-header-bg: ${({ $scrolled }) => ($scrolled ? 'rgba(5, 5, 16, 0.9)' : 'rgba(5, 5, 16, 0.62)')};
`;

/* HeaderInner створює glassmorphism панель з neon border. */
export const HeaderInner = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto auto minmax(0, 1fr) auto auto auto;
  gap: 12px;
  align-items: center;
  width: min(1180px, 100%);
  min-height: 66px;
  margin: 0 auto;
  border: 1px solid rgba(34, 211, 238, 0.22);
  border-bottom-color: rgba(246, 211, 101, 0.24);
  border-radius: 8px;
  padding: 10px 12px;
  background: var(--portfolio-header-bg);
  box-shadow: 0 14px 60px rgba(0, 0, 0, 0.34), inset 0 -1px 0 rgba(246, 211, 101, 0.18);
  backdrop-filter: blur(18px);
  pointer-events: auto;

  @media (max-width: 1040px) {
    grid-template-columns: auto 1fr auto auto;
  }
`;

/* BrandBlock веде назад до hero секції. */
export const BrandBlock = styled.a`
  display: grid;
  gap: 1px;
  min-width: max-content;

  strong {
    color: ${portfolioTheme.colors.white};
    font-family: ${portfolioTheme.fonts.heading};
    font-size: 1rem;
    letter-spacing: 0;
  }

  span {
    color: ${portfolioTheme.colors.cyan};
    font-size: 0.78rem;
    font-weight: 800;
  }
`;

/* RankBadge показує поточний anime/RPG рівень. */
export const RankBadge = styled.span`
  border: 1px solid rgba(246, 211, 101, 0.36);
  border-radius: 999px;
  padding: 8px 10px;
  color: ${portfolioTheme.colors.goldSoft};
  font-size: 0.76rem;
  font-weight: 900;
  text-transform: uppercase;

  @media (max-width: 760px) {
    display: none;
  }
`;

/* NavLinks відповідає за desktop nav і mobile dropdown. */
export const NavLinks = styled.nav<{ $open: boolean }>`
  display: flex;
  justify-content: center;
  gap: 6px;

  a {
    border-radius: 999px;
    padding: 9px 10px;
    color: rgba(248, 250, 252, 0.78);
    font-size: 0.82rem;
    font-weight: 800;
  }

  a:hover,
  a:focus-visible,
  a[data-active='true'] {
    outline: none;
    color: ${portfolioTheme.colors.white};
    background: rgba(34, 211, 238, 0.12);
    box-shadow: 0 0 18px rgba(34, 211, 238, 0.18);
  }

  @media (max-width: 1040px) {
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    right: 0;
    display: ${({ $open }) => ($open ? 'grid' : 'none')};
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border: 1px solid rgba(34, 211, 238, 0.2);
    border-radius: 8px;
    padding: 10px;
    background: rgba(5, 5, 16, 0.96);
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

/* LanguageSwitch групує DE/EN/UK кнопки. */
export const LanguageSwitch = styled.div`
  display: flex;
  gap: 4px;
  border: 1px solid rgba(168, 85, 247, 0.24);
  border-radius: 999px;
  padding: 4px;
  background: rgba(8, 8, 18, 0.7);
`;

/* LanguageButton показує активну мову portfolio. */
export const LanguageButton = styled.button<{ $active: boolean }>`
  min-width: 34px;
  min-height: 30px;
  border-radius: 999px;
  color: ${({ $active }) => ($active ? '#050510' : portfolioTheme.colors.muted)};
  background: ${({ $active }) =>
    $active ? `linear-gradient(135deg, ${portfolioTheme.colors.cyan}, ${portfolioTheme.colors.goldSoft})` : 'transparent'};
  font-size: 0.72rem;
  font-weight: 900;

  &:focus-visible {
    outline: 2px solid ${portfolioTheme.colors.cyan};
    outline-offset: 2px;
  }
`;

/* HeaderCta веде на актуальний email із contactInfo. */
export const HeaderCta = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 38px;
  border: 1px solid rgba(246, 211, 101, 0.42);
  border-radius: 999px;
  padding: 0 13px;
  background: linear-gradient(135deg, rgba(246, 211, 101, 0.96), rgba(34, 211, 238, 0.88));
  color: #050510;
  font-size: 0.82rem;
  font-weight: 900;

  &:hover,
  &:focus-visible {
    color: #050510;
    transform: translateY(-1px);
  }

  @media (max-width: 760px) {
    display: none;
  }
`;

/* MobileMenuButton відкриває compact nav на малих екранах. */
export const MobileMenuButton = styled.button`
  display: none;
  place-items: center;
  width: 38px;
  height: 38px;
  border: 1px solid rgba(34, 211, 238, 0.28);
  border-radius: 999px;
  color: ${portfolioTheme.colors.white};

  @media (max-width: 1040px) {
    display: grid;
  }
`;
