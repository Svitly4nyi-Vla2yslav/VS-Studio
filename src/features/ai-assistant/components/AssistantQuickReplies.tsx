import styled from 'styled-components';
import type { AssistantQuickReply } from '../types';

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const QuickButton = styled.button`
  padding: 11px 15px;
  border-radius: 14px 18px 13px 17px;
  border: 1px solid var(--obsidian-border);
  background:
    radial-gradient(circle at 80% 0%, rgba(241, 210, 119, .08), transparent 40%),
    linear-gradient(145deg, rgba(23, 20, 26, .94), rgba(7, 7, 9, .92));
  color: var(--champagne-text);
  font-size: 12px;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: 0.01em;
  box-shadow:
    inset 0 1px 0 rgba(255, 242, 189, .07),
    0 12px 24px rgba(0, 0, 0, .24);
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    border-color 180ms ease,
    filter 180ms ease;

  &:hover,
  &:focus-visible {
    border-color: var(--obsidian-border-hot);
    transform: translateY(-1px);
    box-shadow:
      var(--gold-glow-sm),
      var(--focus-ring);
    filter: brightness(1.08);
  }

  &:active { transform: translateY(1px) scale(.985); }
`;

interface AssistantQuickRepliesProps {
  items: AssistantQuickReply[];
  onSelect: (value: string, action?: AssistantQuickReply['action']) => void;
}

// Компонент приймає готові варіанти відповіді й callback вибору та повертає групу кнопок.
// Для кожного натискання він передає значення й необов’язкову дію батьківському workflow, не змінюючи стан самостійно.
export const AssistantQuickReplies: React.FC<AssistantQuickRepliesProps> = ({ items, onSelect }) => (
  <Wrap>
    {/* Стабільний id зберігає відповідність кнопки під час повторних рендерів списку. */}
    {items.map(item => (
      <QuickButton key={item.id} type='button' onClick={() => onSelect(item.value, item.action)}>
        {item.label}
      </QuickButton>
    ))}
  </Wrap>
);
