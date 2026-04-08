import { useState } from 'react';
import styled from 'styled-components';
import type { AssistantPanelCopy } from '../types';

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const Input = styled.input`
  min-height: 46px;
  padding: 0 14px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.09);
  background: rgba(255, 255, 255, 0.04);
  color: #fff;
`;

const Submit = styled.button`
  min-height: 46px;
  padding: 0 16px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(255, 190, 112, 0.96), rgba(255, 219, 171, 0.8));
  color: #111827;
  font-weight: 700;

  &:hover,
  &:focus-visible {
    transform: translateY(-1px);
    box-shadow: 0 14px 22px rgba(255, 177, 74, 0.2);
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
