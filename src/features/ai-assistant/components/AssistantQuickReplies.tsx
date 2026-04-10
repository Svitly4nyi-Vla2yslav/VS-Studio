import styled from 'styled-components';
import type { AssistantQuickReply } from '../types';

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const QuickButton = styled.button`
  padding: 11px 15px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.76);
  background:
    linear-gradient(120deg, rgba(255, 255, 255, 0.76), rgba(255, 243, 214, 0.58) 48%, rgba(214, 232, 255, 0.58) 100%);
  color: #17305d;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: 0.01em;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.84),
    0 14px 28px rgba(98, 130, 183, 0.1);
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    border-color 180ms ease,
    filter 180ms ease;

  &:hover,
  &:focus-visible {
    border-color: rgba(149, 191, 255, 0.62);
    transform: translateY(-1px);
    box-shadow:
      0 18px 32px rgba(255, 204, 112, 0.18),
      0 0 0 4px rgba(169, 209, 255, 0.16);
    filter: saturate(1.05);
  }
`;

interface AssistantQuickRepliesProps {
  items: AssistantQuickReply[];
  onSelect: (value: string, action?: AssistantQuickReply['action']) => void;
}

export const AssistantQuickReplies: React.FC<AssistantQuickRepliesProps> = ({ items, onSelect }) => (
  <Wrap>
    {items.map(item => (
      <QuickButton key={item.id} type='button' onClick={() => onSelect(item.value, item.action)}>
        {item.label}
      </QuickButton>
    ))}
  </Wrap>
);
