import styled from 'styled-components';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

export const BurgerWrap = styled.div`
  display: inline-flex;
  align-items: center;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const BurgerButton = styled.button`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  width: 42px;
  height: 42px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 11px;
  background: rgba(255, 255, 255, 0.06);
  z-index: 2301;
`;

export const BurgerLine = styled(motion.span)`
  width: 22px;
  height: 2px;
  background: #fff;
  border-radius: 2px;
  display: block;
`;

export const MobileMenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  max-width: 100vw;
  height: 100dvh;
  min-height: 100vh;
  background: rgba(5, 8, 16, 1);
  z-index: 2300;
  pointer-events: auto;
  touch-action: pan-y;
  padding: 96px 20px 20px;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const MobileMenuTop = styled.div`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin: -96px -20px 8px;
  padding: 18px 20px 14px;
  background: rgba(5, 8, 16, 0.96);
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  z-index: 1;
`;

export const MobileMenuBrand = styled.span`
  font-family: 'Orbitron', 'Geist', 'Segoe UI', sans-serif;
  font-size: clamp(28px, 8vw, 42px);
  font-weight: 800;
  letter-spacing: 0.03em;
  line-height: 1;
  background: linear-gradient(105deg, #c9861e, #ffe7bb, #ffb43f, #ffe7bb, #c9861e);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: logoFlow 4.8s ease-in-out infinite;
`;

export const MobileMenuClose = styled.button`
  width: 42px;
  height: 42px;
  border: 1px solid rgba(255, 255, 255, 0.32);
  border-radius: 11px;
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 260ms ease, border-color 260ms ease, transform 260ms ease;

  &:hover,
  &:focus-visible {
    background: rgba(255, 255, 255, 0.16);
    border-color: rgba(255, 219, 156, 0.7);
    transform: translateY(-1px);
  }
`;

export const MobileMenuLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-size: clamp(30px, 8vw, 48px);
  font-weight: 700;
  line-height: 1.06;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 6px 0;
`;

export const MobileMenuDivider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.16);
  margin: 2px 0 6px;
`;
