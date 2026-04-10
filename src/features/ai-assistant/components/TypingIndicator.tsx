import { motion } from 'framer-motion';
import styled from 'styled-components';
import type { AssistantPanelCopy } from '../types';

const Indicator = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 16px;
  border-radius: 999px;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.86), rgba(225, 240, 255, 0.72));
  border: 1px solid rgba(255, 255, 255, 0.82);
  color: rgba(18, 33, 63, 0.62);
  font-size: 12px;
  font-weight: 700;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.84),
    0 14px 28px rgba(101, 134, 188, 0.12);
`;

const Dot = styled(motion.span)`
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(255, 203, 120, 0.98), rgba(104, 156, 232, 0.92));
  box-shadow: 0 0 12px rgba(255, 210, 138, 0.4);
`;

interface TypingIndicatorProps {
  copy: AssistantPanelCopy;
}

export const TypingIndicator: React.FC<TypingIndicatorProps> = ({ copy }) => (
  <Indicator aria-live='polite'>
    <Dot animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }} transition={{ duration: 0.9, repeat: Infinity }} />
    <Dot animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }} transition={{ duration: 0.9, repeat: Infinity, delay: 0.15 }} />
    <Dot animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }} transition={{ duration: 0.9, repeat: Infinity, delay: 0.3 }} />
    <span>{copy.typingLabel}</span>
  </Indicator>
);
