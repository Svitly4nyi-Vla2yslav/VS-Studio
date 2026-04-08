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
    radial-gradient(circle at 30% 30%, rgba(255, 232, 190, 0.95), rgba(255, 177, 74, 0.68) 32%, rgba(72, 129, 255, 0.35) 72%, rgba(12, 16, 28, 0.08) 100%);
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.08),
    0 18px 42px rgba(6, 10, 20, 0.4),
    0 0 48px rgba(255, 177, 74, 0.28);

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 8%;
    border-radius: 50%;
    pointer-events: none;
  }

  &::before {
    border: 1px solid rgba(255, 255, 255, 0.14);
    filter: blur(1px);
  }

  &::after {
    inset: 20%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.56), rgba(255, 255, 255, 0));
    filter: blur(10px);
  }

  > span {
    position: absolute;
    inset: -18%;
    border-radius: 50%;
    border: 1px solid rgba(255, 196, 119, 0.18);
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
