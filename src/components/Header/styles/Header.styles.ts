import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const logoFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const gradientFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const HeaderShell = styled.header<{ $menuOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: ${({ $menuOpen }) => ($menuOpen ? 2000 : 120)};
  backdrop-filter: blur(10px);
  background: rgba(7, 9, 16, 0.78);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
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
  gap: 20px;
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
  font-family: 'Orbitron', 'Geist', 'Segoe UI', sans-serif;
  font-size: clamp(30px, 4vw, 52px);
  font-weight: 800;
  letter-spacing: 0.03em;
  line-height: 1;
  background: linear-gradient(105deg, #c9861e, #ffe7bb, #ffb43f, #ffe7bb, #c9861e);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: ${logoFlow} 4.8s ease-in-out infinite;
  filter: drop-shadow(0 0 18px rgba(255, 198, 109, 0.55));

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
  gap: 18px;

  @media (max-width: 1023px) {
    display: none;
  }
`;

export const DesktopNavLink = styled(NavLink)`
  color: rgba(255, 255, 255, 0.86);
  font-size: 15px;
  font-weight: 500;
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
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
    background: linear-gradient(90deg, #ffb65b, #ffe5b7, #ffb65b);
    background-size: 220% 100%;
    transition: transform var(--dur-mid) var(--ease-smooth), background-position var(--dur-slow) var(--ease-smooth);
  }

  &:hover,
  &:focus-visible {
    transform: translateY(-1px);
    color: #ffe6b5;
  }

  &:hover::after,
  &:focus-visible::after,
  &.active::after {
    transform: scaleX(1);
    background-position: 100% 50%;
  }

  &.active {
    color: #ffcc7f;
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
  border: 1px solid rgba(255, 182, 84, 0.7);
  background: linear-gradient(120deg, #f09a48, #ffd9a1, #f09a48);
  background-size: 220% 220%;
  color: #101321;
  font-weight: 700;
  padding: 11px 16px;
  border-radius: 12px;
  white-space: nowrap;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  transition: transform var(--dur-mid) var(--ease-smooth), box-shadow var(--dur-mid) var(--ease-smooth),
    filter var(--dur-mid) var(--ease-smooth), color var(--dur-mid) var(--ease-smooth),
    background var(--dur-mid) var(--ease-smooth);

  &:hover,
  &:focus-visible {
    transform: translateY(-2px);
    box-shadow: 0 14px 24px rgba(240, 154, 72, 0.35);
    filter: brightness(1.04);
    animation: ${gradientFlow} 2.2s linear infinite;
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
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(6, 10, 20, 0.88);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  line-height: 1;
  transition: border-color var(--dur-fast) var(--ease-smooth), background var(--dur-fast) var(--ease-smooth),
    transform var(--dur-fast) var(--ease-smooth);

  &:hover,
  &:focus-visible {
    border-color: rgba(255, 210, 138, 0.8);
    background: rgba(10, 15, 28, 0.95);
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
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(7, 12, 24, 0.98);
  box-shadow: 0 16px 26px rgba(0, 0, 0, 0.35);
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
