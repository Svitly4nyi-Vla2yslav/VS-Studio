import { useState } from 'react';
import styled from 'styled-components';
import { goldButtonMotion } from '../../../components/visual/goldButtonMotion';
import type { AssistantPanelCopy } from '../types';

const Form = styled.form`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 12px;
  padding: 12px;
  border-radius: 24px;
  background: linear-gradient(145deg, rgba(19, 17, 22, 0.92), rgba(6, 6, 7, 0.86));
  border: 1px solid var(--obsidian-border);
  box-shadow:
    inset 0 1px 0 rgba(255, 242, 189, 0.08),
    var(--obsidian-shadow-sm);
  backdrop-filter: blur(12px);

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const Input = styled.input`
  min-height: 54px;
  padding: 0 18px;
  border-radius: 18px;
  border: 1px solid rgba(214, 165, 66, 0.2);
  background: rgba(2, 2, 3, 0.7);
  color: var(--champagne-text);
  box-shadow:
    inset 0 1px 0 rgba(255, 242, 189, 0.05),
    0 10px 24px rgba(0, 0, 0, 0.28);
  transition:
    border-color 180ms ease,
    box-shadow 180ms ease,
    background 180ms ease;

  &::placeholder {
    color: rgba(238, 226, 199, 0.46);
  }

  &:focus {
    border-color: var(--obsidian-border-hot);
    box-shadow:
      inset 0 1px 0 rgba(255, 242, 189, 0.1),
      var(--focus-ring),
      0 16px 32px rgba(0, 0, 0, 0.32);
    background: rgba(8, 7, 9, 0.92);
  }
`;

const Submit = styled.button`
  ${goldButtonMotion}
  min-height: 54px;
  padding: 0 22px;
  border-radius: 18px;
  border: 1px solid rgba(255, 242, 189, 0.55);
  background: var(--gold-metal);
  background-size: 180% 100%;
  color: #171108;
  font-weight: 800;
  letter-spacing: 0.01em;
  box-shadow:
    0 18px 32px rgba(255, 204, 112, 0.24),
    inset 0 1px 0 rgba(255, 255, 255, 0.92);
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    filter 180ms ease,
    opacity 180ms ease;

  &:hover,
  &:focus-visible {
    transform: translateY(-1px);
    box-shadow:
      0 22px 38px rgba(255, 204, 112, 0.28),
      var(--focus-ring);
    filter: brightness(1.06);
  }

  &:disabled {
    opacity: 0.65;
    transform: none;
    box-shadow:
      0 12px 24px rgba(255, 204, 112, 0.14),
      inset 0 1px 0 rgba(255, 255, 255, 0.88);
  }
`;

interface AssistantComposerProps {
  copy: AssistantPanelCopy;
  disabled?: boolean;
  onSend: (value: string) => Promise<void> | void;
  onFocusChange?: (focused: boolean) => void;
  onValuePresenceChange?: (hasValue: boolean) => void;
}

export const AssistantComposer: React.FC<AssistantComposerProps> = ({ copy, disabled, onSend, onFocusChange, onValuePresenceChange }) => {
  const [value, setValue] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    await onSend(trimmed);
    setValue('');
    onValuePresenceChange?.(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        value={value}
        onChange={event => {
          setValue(event.target.value);
          onValuePresenceChange?.(Boolean(event.target.value.trim()));
        }}
        onFocus={() => onFocusChange?.(true)}
        onBlur={() => onFocusChange?.(false)}
        placeholder={copy.inputPlaceholder}
        aria-label={copy.inputPlaceholder}
        disabled={disabled}
      />
      <Submit type='submit' disabled={disabled}>
        {copy.sendLabel}
      </Submit>
    </Form>
  );
};
