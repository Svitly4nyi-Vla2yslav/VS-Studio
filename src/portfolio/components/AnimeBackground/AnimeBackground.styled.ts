import styled, { keyframes } from 'styled-components';

/* Рух manga lines створює повільний cinematic фон. */
const mangaLineMove = keyframes`
  0% { transform: translate3d(-2%, -2%, 0); }
  100% { transform: translate3d(2%, 2%, 0); }
`;

/* Плавне плавання силуетів у background layer. */
const characterFloat = keyframes`
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(0, -18px, 0) scale(1.02); }
`;

/* Energy shards піднімаються вгору без впливу на layout. */
const shardFloat = keyframes`
  0% { transform: translate3d(0, 40px, 0) rotate(45deg); opacity: 0; }
  18% { opacity: 0.7; }
  100% { transform: translate3d(18px, -120px, 0) rotate(135deg); opacity: 0; }
`;

/* Magic circles повільно обертаються у фоні. */
const portalRotate = keyframes`
  to { transform: rotate(360deg); }
`;

/* Глобальний background wrapper існує тільки всередині portfolio page. */
export const BackgroundWrapper = styled.div`
  position: fixed;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
  contain: paint;
  background:
    radial-gradient(circle at 50% 8%, rgba(56, 189, 248, 0.14), transparent 22%),
    radial-gradient(circle at 80% 20%, rgba(124, 58, 237, 0.18), transparent 28%),
    radial-gradient(circle at 15% 72%, rgba(246, 211, 101, 0.09), transparent 30%);
`;

/* MangaLines додає speed-line текстуру. */
export const MangaLines = styled.div`
  position: absolute;
  inset: -8%;
  opacity: 0.22;
  background:
    repeating-conic-gradient(from 18deg at 50% 20%, transparent 0deg 5deg, rgba(248, 250, 252, 0.08) 5deg 5.8deg, transparent 5.8deg 9deg),
    repeating-linear-gradient(115deg, transparent 0 18px, rgba(34, 211, 238, 0.08) 18px 19px);
  mask-image: radial-gradient(circle at 50% 32%, black 0%, transparent 64%);
  animation: ${mangaLineMove} 10s ease-in-out infinite alternate;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

/* MagicCircle малює прозорі arcane-tech кола. */
export const MagicCircle = styled.span<{ $index: number }>`
  position: absolute;
  left: ${({ $index }) => [58, 6, 76, 28][$index]}%;
  top: ${({ $index }) => [10, 48, 70, 82][$index]}%;
  width: ${({ $index }) => [380, 260, 310, 190][$index]}px;
  max-width: 60vw;
  aspect-ratio: 1;
  border: 1px solid rgba(34, 211, 238, 0.14);
  border-radius: 50%;
  box-shadow:
    0 0 44px rgba(124, 58, 237, 0.12),
    inset 0 0 36px rgba(246, 211, 101, 0.06);
  transform-origin: center;
  animation: ${portalRotate} ${({ $index }) => 18 + $index * 7}s linear infinite;

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 12%;
    border: 1px dashed rgba(246, 211, 101, 0.12);
    border-radius: 50%;
  }

  &::after {
    inset: 28%;
    border-color: rgba(168, 85, 247, 0.16);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

/* Silhouette позиціонує фонових оригінальних anime-inspired героїв. */
export const Silhouette = styled.div<{
  $left: number;
  $top: number;
  $size: number;
  $kind: string;
}>`
  position: absolute;
  left: ${({ $left }) => `${$left}%`};
  top: ${({ $top }) => `${$top}%`};
  width: ${({ $size }) => `${$size}px`};
  aspect-ratio: 0.62;
  opacity: ${({ $kind }) => ($kind === 'guild' ? 0.07 : 0.12)};
  filter: drop-shadow(0 0 26px rgba(34, 211, 238, 0.26));
  animation: ${characterFloat} ${({ $size }) => `${9 + ($size % 5)}s`} ease-in-out infinite;
  animation-delay: ${({ $left }) => `${$left * -0.08}s`};

  @media (max-width: 720px) {
    opacity: 0.05;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

/* SilhouetteCape формує плащ персонажа. */
export const SilhouetteCape = styled.span`
  position: absolute;
  left: 9%;
  top: 20%;
  width: 78%;
  height: 70%;
  clip-path: polygon(48% 0, 100% 100%, 56% 86%, 4% 100%);
  background: linear-gradient(180deg, rgba(168, 85, 247, 0.95), rgba(5, 5, 16, 0.3));
`;

/* SilhouetteHead формує голову персонажа. */
export const SilhouetteHead = styled.span`
  position: absolute;
  left: 35%;
  top: 2%;
  width: 30%;
  aspect-ratio: 1;
  border-radius: 50% 50% 44% 44%;
  background: #f8fafc;
`;

/* SilhouetteCore формує корпус персонажа. */
export const SilhouetteCore = styled.span`
  position: absolute;
  left: 28%;
  top: 25%;
  width: 44%;
  height: 38%;
  clip-path: polygon(50% 0, 86% 24%, 70% 100%, 30% 100%, 14% 24%);
  background: #f8fafc;
`;

/* SilhouetteBlade додає зброю/енергетичний staff. */
export const SilhouetteBlade = styled.span`
  position: absolute;
  right: 6%;
  top: 18%;
  width: 5%;
  height: 74%;
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(34, 211, 238, 0), rgba(34, 211, 238, 0.95), rgba(246, 211, 101, 0));
  transform: rotate(28deg);
`;

/* EnergyShard є маленькою летючою частинкою енергії. */
export const EnergyShard = styled.span<{ $index: number }>`
  position: absolute;
  left: ${({ $index }) => `${($index * 13) % 100}%`};
  bottom: -10%;
  width: ${({ $index }) => `${4 + ($index % 4)}px`};
  height: ${({ $index }) => `${18 + ($index % 5) * 8}px`};
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(34, 211, 238, 0), rgba(34, 211, 238, 0.85), rgba(246, 211, 101, 0.8));
  box-shadow: 0 0 18px rgba(34, 211, 238, 0.28);
  animation: ${shardFloat} ${({ $index }) => `${8 + ($index % 7)}s`} linear infinite;
  animation-delay: ${({ $index }) => `${$index * -0.7}s`};

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0.22;
  }
`;
