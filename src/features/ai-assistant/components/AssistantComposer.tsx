import { useState } from 'react';
import styled from 'styled-components';
import type { AssistantPanelCopy } from '../types';

const Form = styled.form`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 12px;
  padding: 12px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.42);
  border: 1px solid rgba(255, 255, 255, 0.72);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.82),
    0 18px 38px rgba(86, 120, 180, 0.12);
  backdrop-filter: blur(16px);

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const Input = styled.input`
  min-height: 54px;
  padding: 0 18px;
  border-radius: 18px;
  border: 1px solid rgba(128, 162, 214, 0.26);
  background: rgba(255, 255, 255, 0.78);
  color: #10203b;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.78),
    0 10px 24px rgba(101, 136, 193, 0.1);
  transition:
    border-color 180ms ease,
    box-shadow 180ms ease,
    background 180ms ease;

  &::placeholder {
    color: rgba(16, 32, 59, 0.44);
  }

  &:focus {
    border-color: rgba(99, 145, 214, 0.54);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.86),
      0 0 0 4px rgba(151, 196, 255, 0.18),
      0 16px 32px rgba(255, 204, 112, 0.16);
    background: rgba(255, 255, 255, 0.92);
  }
`;

const Submit = styled.button`
  min-height: 54px;
  padding: 0 22px;
  border-radius: 18px;
  background:
    linear-gradient(120deg, rgba(255, 255, 255, 0.98), rgba(255, 225, 165, 0.96) 42%, rgba(177, 215, 255, 0.96) 100%);
  color: #10203b;
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
      0 0 0 4px rgba(169, 209, 255, 0.18);
    filter: saturate(1.06);
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
}

export const AssistantComposer: React.FC<AssistantComposerProps> = ({ copy, disabled, onSend }) => {
  const [value, setValue] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    await onSend(trimmed);
    setValue('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        value={value}
        onChange={event => setValue(event.target.value)}
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
