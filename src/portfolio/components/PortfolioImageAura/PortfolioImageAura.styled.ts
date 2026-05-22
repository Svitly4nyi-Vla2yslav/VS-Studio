import styled, { keyframes } from 'styled-components';

/* imageFloat повільно рухає персонажа вгору-вниз, щоб фон залишався живим і не відволікав. */
const imageFloat = keyframes`
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(0, -16px, 0) scale(1.018); }
`;

/* contourGlow м'яко підсвічує контур PNG через drop-shadow і неоновий gradient-ореол. */
const contourGlow = keyframes`
  0%, 100% {
    filter:
      drop-shadow(0 0 18px rgba(34, 211, 238, 0.24))
      drop-shadow(0 0 34px rgba(124, 58, 237, 0.2))
      drop-shadow(0 20px 58px rgba(0, 0, 0, 0.44));
  }
  50% {
    filter:
      drop-shadow(0 0 30px rgba(34, 211, 238, 0.44))
      drop-shadow(0 0 54px rgba(246, 211, 101, 0.24))
      drop-shadow(0 26px 70px rgba(0, 0, 0, 0.52));
  }
`;

/* auraPulse тримає окремий градієнтний glow позаду прозорого PNG. */
const auraPulse = keyframes`
  0%, 100% { opacity: 0.4; transform: scale(0.96); }
  50% { opacity: 0.74; transform: scale(1.05); }
`;

/* ImageAuraRoot є декоративним шаром для PNG-персонажів без прямокутного контейнера. */
export const ImageAuraRoot = styled.figure`
  position: relative;
  isolation: isolate;
  width: min(100%, var(--portfolio-image-width, 42vw));
  height: var(--portfolio-image-height, 86svh);
  margin: 0;
  pointer-events: none;
`;

/* ImageAuraGlow створює підсвічування за персонажем, не змінюючи розміри картинки. */
export const ImageAuraGlow = styled.span`
  position: absolute;
  inset: 10% 4%;
  z-index: -1;
  border-radius: 48% 52% 44% 56%;
  background:
    radial-gradient(circle at 50% 38%, rgba(34, 211, 238, 0.28), transparent 56%),
    radial-gradient(circle at 44% 68%, rgba(124, 58, 237, 0.26), transparent 58%),
    conic-gradient(from 140deg, rgba(246, 211, 101, 0.16), rgba(34, 211, 238, 0.2), rgba(168, 85, 247, 0.18), rgba(246, 211, 101, 0.16));
  filter: blur(18px);
  animation: ${auraPulse} 6.4s ease-in-out infinite;
`;

/* ImageAuraAsset показує PNG повністю, але дозволяє секції обрізати зайві краї через overflow hidden. */
export const ImageAuraAsset = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center bottom;
  animation: ${imageFloat} 7.6s ease-in-out infinite, ${contourGlow} 5.8s ease-in-out infinite;
  user-select: none;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;
