import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { goldButtonMotion } from '../../visual/goldButtonMotion';

export const HeaderShell = styled.header<{ $menuOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: ${({ $menuOpen }) => ($menuOpen ? 2000 : 120)};
  backdrop-filter: blur(12px) saturate(112%);
  background:
    radial-gradient(circle at 70% -80%, rgba(214, 165, 66, .14), transparent 44%),
    linear-gradient(120deg, rgba(17, 15, 19, .91), rgba(4, 4, 5, .92));
  border-bottom: 1px solid var(--obsidian-border);
  box-shadow: inset 0 1px 0 rgba(255, 242, 189, .06), 0 14px 40px rgba(0, 0, 0, .28);
`;

export const HeaderInner = styled.div`
  width: 100%;
  max-width: 1560px;
  margin: 0 auto;
  padding-left: var(--gutter);
  padding-right: var(--gutter);
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  min-height: 76px;
  position: relative;

  @media (max-width: 767px) {
    min-height: 66px;
    gap: 8px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    min-height: 72px;
    gap: 10px;
  }
`;

export const BrandLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  line-height: 0;
  text-decoration: none;
`;

export const BrandWordmark = styled.span`
  font-family: var(--third-family);
  font-size: clamp(28px, 3.4vw, 46px);
  font-weight: 800;
  letter-spacing: 0;
  line-height: 1;
  background: var(--gold-metal);
  background-size: 180% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  filter: drop-shadow(0 6px 16px rgba(214, 165, 66, .16));

  @media (max-width: 767px) {
    font-size: 38px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 44px;
  }

  @media (min-width: 1920px) {
    font-size: 62px;
  }
`;

export const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 1023px) {
    display: none;
  }
`;

export const DesktopNavLink = styled(NavLink)`
  color: var(--muted-gold-text);
  font-size: 13px;
  font-weight: 500;
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  transition: color var(--dur-mid) var(--ease-smooth), transform var(--dur-mid) var(--ease-smooth);

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 2px;
    transform: scaleX(0);
    transform-origin: left;
    background: var(--gold-metal-soft);
    background-size: 220% 100%;
    transition: transform var(--dur-mid) var(--ease-smooth), background-position var(--dur-slow) var(--ease-smooth);
  }

  &:hover,
  &:focus-visible {
    transform: translateY(-1px);
    color: var(--gold-300);
  }

  &:hover::after,
  &:focus-visible::after,
  &.active::after {
    transform: scaleX(1);
    background-position: 100% 50%;
  }

  &.active {
    color: var(--gold-300);
  }
`;

export const HeaderControls = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
  position: relative;
  z-index: 1200;
`;

export const FixedCta = styled(NavLink)`
  ${goldButtonMotion}
  border: 1px solid rgba(255, 242, 189, .52);
  background: var(--gold-metal);
  background-size: 180% 100%;
  color: #171108;
  font-weight: 700;
  padding: 10px 14px;
  border-radius: 12px;
  white-space: nowrap;
  font-size: 13px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  transition: transform var(--dur-mid) var(--ease-smooth), box-shadow var(--dur-mid) var(--ease-smooth),
    filter var(--dur-mid) var(--ease-smooth), color var(--dur-mid) var(--ease-smooth),
    background var(--dur-mid) var(--ease-smooth);

  &:hover,
  &:focus-visible {
    transform: translateY(-1px);
    box-shadow: 0 14px 28px rgba(126, 78, 15, .28);
    filter: brightness(1.04);
  }

  @media (max-width: 1023px) {
    display: none;
  }
`;

export const LangSwitch = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`;

export const LangTrigger = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid var(--obsidian-border);
  background: linear-gradient(145deg, rgba(25, 22, 28, .95), rgba(5, 5, 6, .94));
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  line-height: 1;
  transition: border-color var(--dur-fast) var(--ease-smooth), background var(--dur-fast) var(--ease-smooth),
    transform var(--dur-fast) var(--ease-smooth);

  &:hover,
  &:focus-visible {
    border-color: var(--obsidian-border-hot);
    background: var(--obsidian-surface-hover);
    transform: translateY(-1px);
  }

  @media (max-width: 767px) {
    width: 38px;
    height: 38px;
    font-size: 18px;
  }
`;

export const LangFlag = styled.span`
  font-size: 18px;
  line-height: 1;
`;

export const LangMenu = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: min(280px, calc(100vw - (var(--gutter) * 2)));
  max-height: min(62vh, 360px);
  overflow-y: auto;
  border-radius: 12px;
  border: 1px solid var(--obsidian-border);
  background: linear-gradient(145deg, rgba(22, 20, 25, .99), rgba(4, 4, 5, .99));
  box-shadow: var(--obsidian-shadow-md);
  padding: 8px;
  z-index: 180;

  @media (max-width: 767px) {
    width: min(250px, calc(100vw - 20px));
  }
`;

export const LangItem = styled.button<{ $active: boolean }>`
  width: 100%;
  border: 1px solid ${({ $active }) => ($active ? 'rgba(255, 210, 138, 0.5)' : 'transparent')};
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.94);
  background: ${({ $active }) => ($active ? 'rgba(255, 255, 255, 0.06)' : 'transparent')};
  padding: 8px 10px;
  text-align: left;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: border-color var(--dur-fast) var(--ease-smooth), background var(--dur-fast) var(--ease-smooth);

  &:hover,
  &:focus-visible {
    border-color: rgba(255, 210, 138, 0.5);
    background: rgba(255, 255, 255, 0.06);
  }
`;
