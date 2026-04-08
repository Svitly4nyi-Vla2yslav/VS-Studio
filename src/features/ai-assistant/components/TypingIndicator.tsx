import { motion } from 'framer-motion';
import styled from 'styled-components';
import type { AssistantPanelCopy } from '../types';

const Indicator = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 12px 14px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.66);
  font-size: 12px;
`;

const Dot = styled(motion.span)`
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: rgba(255, 212, 151, 0.9);
`;

interface TypingIndicatorProps {
  copy: AssistantPanelCopy;
}

export const TypingIndicator: React.FC<TypingIndicatorProps> = ({ copy }) => (
  <Indicator aria-live='polite'>
    <Dot animate={{ opacity: [0.25, 1, 0.25], y: [0, -2, 0] }} transition={{ duration: 0.9, repeat: Infinity }} />
    <Dot animate={{ opacity: [0.25, 1, 0.25], y: [0, -2, 0] }} transition={{ duration: 0.9, repeat: Infinity, delay: 0.15 }} />
    <Dot animate={{ opacity: [0.25, 1, 0.25], y: [0, -2, 0] }} transition={{ duration: 0.9, repeat: Infinity, delay: 0.3 }} />
    <span>{copy.typingLabel}</span>
  </Indicator>
);
