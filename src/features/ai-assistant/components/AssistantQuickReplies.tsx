import styled from 'styled-components';
import type { AssistantQuickReply } from '../types';

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const QuickButton = styled.button`
  padding: 10px 12px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.82);
  font-size: 12px;
  line-height: 1.3;

  &:hover,
  &:focus-visible {
    border-color: rgba(255, 198, 118, 0.28);
    background: rgba(255, 255, 255, 0.07);
    transform: translateY(-1px);
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
