import { motion } from 'framer-motion';
import styled from 'styled-components';

interface AssistantOrbProps {
  size?: number;
}

const OrbShell = styled(motion.div)<{ $size: number }>`
  position: relative;
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};
  border-radius: 50%;
  background:
    radial-gradient(circle at 32% 28%, rgba(255, 247, 226, 0.98), rgba(255, 208, 124, 0.92) 20%, rgba(255, 171, 64, 0.68) 38%, rgba(96, 155, 255, 0.46) 72%, rgba(10, 16, 34, 0.12) 100%);
  box-shadow:
    0 0 0 1px rgba(255, 236, 197, 0.14),
    0 18px 42px rgba(6, 10, 20, 0.4),
    0 0 30px rgba(255, 183, 77, 0.28),
    0 0 42px rgba(94, 152, 255, 0.18);

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 8%;
    border-radius: 50%;
    pointer-events: none;
  }

  &::before {
    border: 1px solid rgba(255, 247, 226, 0.22);
    filter: blur(1px);
  }

  &::after {
    inset: 20%;
    background: radial-gradient(circle, rgba(255, 248, 231, 0.64), rgba(255, 255, 255, 0));
    filter: blur(10px);
  }

  > span {
    position: absolute;
    inset: -18%;
    border-radius: 50%;
    border: 1px solid rgba(255, 206, 127, 0.2);
    box-shadow:
      0 0 16px rgba(255, 184, 72, 0.14),
      0 0 24px rgba(85, 147, 255, 0.12);
    pointer-events: none;
  }
`;

export const AssistantOrb: React.FC<AssistantOrbProps> = ({ size = 18 }) => (
  <OrbShell
    $size={size}
    animate={{
      scale: [1, 1.05, 0.98, 1],
      rotate: [0, 4, -3, 0],
      y: [0, -1, 2, 0],
    }}
    transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
  >
    <motion.span
      animate={{ scale: [0.92, 1.08, 0.92], opacity: [0.2, 0.55, 0.2] }}
      transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
    />
  </OrbShell>
);
