import styled, { keyframes } from 'styled-components';
import { portfolioTheme } from '../../utils/portfolioTheme';
import type { SectionCharacterVariant } from './SectionCharacter';

/* Floating-анімація робить секційного персонажа живим. */
const characterFloat = keyframes`
  0%, 100% { transform: translate3d(0, 0, 0) rotate(-1deg); }
  50% { transform: translate3d(0, -18px, 0) rotate(1deg); }
`;

/* Aura pulse підсилює glow навколо персонажа. */
const auraPulse = keyframes`
  0%, 100% { opacity: 0.52; transform: scale(0.96); }
  50% { opacity: 0.88; transform: scale(1.04); }
`;

/* Orb orbit обертає тонке магічне кільце. */
const orbOrbit = keyframes`
  to { transform: rotate(360deg); }
`;

/* variantHue задає mood-колір персонажа для кожної секції. */
const variantHue: Record<SectionCharacterVariant, string> = {
  hero: portfolioTheme.colors.cyan,
  profile: portfolioTheme.colors.goldSoft,
  skills: portfolioTheme.colors.purpleSoft,
  projects: portfolioTheme.colors.danger,
  timeline: portfolioTheme.colors.cyan,
  network: portfolioTheme.colors.gold,
  contact: portfolioTheme.colors.purple,
};

/* CharacterRoot є slot-ом для CSS-силуету або прозорого asset. */
export const CharacterRoot = styled.figure<{ $variant: SectionCharacterVariant }>`
  position: absolute;
  right: clamp(-80px, 3vw, 40px);
  bottom: clamp(-68px, -4vw, -22px);
  z-index: -1;
  width: clamp(210px, 30vw, 430px);
  aspect-ratio: 0.62;
  margin: 0;
  color: ${({ $variant }) => variantHue[$variant]};
  pointer-events: none;
  animation: ${characterFloat} 7s ease-in-out infinite;
  filter: drop-shadow(0 0 42px color-mix(in srgb, currentColor 38%, transparent));

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: bottom center;
  }

  @media (max-width: 900px) {
    right: -70px;
    bottom: -46px;
    width: clamp(170px, 42vw, 280px);
    opacity: 0.58;
  }

  @media (max-width: 560px) {
    opacity: 0.32;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

/* CharacterAura малює світіння позаду персонажа. */
export const CharacterAura = styled.span`
  position: absolute;
  inset: 8% -8% 0;
  border-radius: 50%;
  background:
    radial-gradient(circle, color-mix(in srgb, currentColor 36%, transparent), transparent 58%),
    conic-gradient(from 180deg, transparent, color-mix(in srgb, currentColor 46%, transparent), transparent);
  filter: blur(2px);
  animation: ${auraPulse} 4.4s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

/* CharacterCape формує плащ fallback-силуету. */
export const CharacterCape = styled.span`
  position: absolute;
  left: 12%;
  top: 20%;
  width: 76%;
  height: 76%;
  clip-path: polygon(50% 0, 100% 100%, 60% 88%, 50% 100%, 40% 88%, 0 100%);
  background: linear-gradient(180deg, color-mix(in srgb, currentColor 68%, #f8fafc), rgba(5, 5, 16, 0.12));
  opacity: 0.78;
`;

/* CharacterHead формує голову fallback-силуету. */
export const CharacterHead = styled.span`
  position: absolute;
  left: 37%;
  top: 2%;
  width: 26%;
  aspect-ratio: 1;
  border-radius: 52% 52% 42% 42%;
  background: #f8fafc;
`;

/* CharacterBody формує тіло fallback-силуету. */
export const CharacterBody = styled.span`
  position: absolute;
  left: 31%;
  top: 25%;
  width: 38%;
  height: 44%;
  clip-path: polygon(50% 0, 88% 22%, 72% 100%, 28% 100%, 12% 22%);
  background: linear-gradient(180deg, #f8fafc, color-mix(in srgb, currentColor 42%, #050510));
`;

/* CharacterBlade формує blade/staff fallback-силуету. */
export const CharacterBlade = styled.span`
  position: absolute;
  right: 16%;
  top: 20%;
  width: 6px;
  height: 70%;
  border-radius: 999px;
  background: linear-gradient(180deg, transparent, currentColor, ${portfolioTheme.colors.goldSoft}, transparent);
  box-shadow: 0 0 26px currentColor;
  transform: rotate(25deg);
`;

/* CharacterOrb формує декоративне кільце навколо персонажа. */
export const CharacterOrb = styled.span`
  position: absolute;
  left: 50%;
  top: 42%;
  width: 82%;
  aspect-ratio: 1;
  border: 1px dashed color-mix(in srgb, currentColor 48%, transparent);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: ${orbOrbit} 14s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;
