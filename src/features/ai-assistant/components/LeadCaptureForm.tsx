import { useState } from 'react';
import styled, { css } from 'styled-components';
import type { AssistantLeadPayload, AssistantPanelCopy } from '../types';

const inputSurface = css`
  min-height: 52px;
  padding: 0 16px;
  border-radius: 18px;
  border: 1px solid rgba(128, 162, 214, 0.28);
  background: rgba(255, 255, 255, 0.78);
  color: #10203b;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.72),
    0 12px 30px rgba(129, 161, 211, 0.12);
  transition:
    border-color 180ms ease,
    box-shadow 180ms ease,
    transform 180ms ease,
    background 180ms ease;

  &::placeholder {
    color: rgba(16, 32, 59, 0.42);
  }

  &:focus {
    border-color: rgba(99, 145, 214, 0.54);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.84),
      0 0 0 4px rgba(151, 196, 255, 0.18),
      0 16px 36px rgba(255, 204, 112, 0.18);
    background: rgba(255, 255, 255, 0.92);
  }
`;

const Form = styled.form`
  display: grid;
  gap: 12px;
  padding: 18px;
  border-radius: 28px;
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.46), rgba(247, 250, 255, 0.34)),
    linear-gradient(125deg, rgba(255, 232, 188, 0.22), rgba(194, 226, 255, 0.18));
  border: 1px solid rgba(255, 255, 255, 0.76);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.78),
    0 24px 50px rgba(44, 74, 128, 0.14);
  backdrop-filter: blur(16px);
`;

const Field = styled.div`
  display: grid;
  gap: 7px;
`;

const Label = styled.label`
  color: rgba(16, 32, 59, 0.76);
  font-size: 12px;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

const Input = styled.input`
  ${inputSurface}
`;

const Textarea = styled.textarea`
  ${inputSurface}
  min-height: 122px;
  padding: 14px 16px;
  resize: vertical;
`;

const Submit = styled.button`
  min-height: 54px;
  padding: 0 18px;
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
    filter 180ms ease;

  &:hover,
  &:focus-visible {
    transform: translateY(-1px);
    box-shadow:
      0 22px 36px rgba(255, 204, 112, 0.28),
      0 0 0 4px rgba(169, 209, 255, 0.18);
    filter: saturate(1.06);
  }
`;

const ErrorText = styled.p`
  padding: 12px 14px;
  border-radius: 16px;
  background: rgba(255, 227, 198, 0.82);
  border: 1px solid rgba(237, 164, 89, 0.26);
  color: #8a3f10;
  font-size: 12px;
  line-height: 1.5;
`;

interface LeadCaptureFormProps {
  copy: AssistantPanelCopy;
  onSubmit: (payload: Omit<AssistantLeadPayload, 'language' | 'source'>) => Promise<void> | void;
}

export const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({ copy, onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [requestedService, setRequestedService] = useState('');
  const [need, setNeed] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !businessType.trim() || !requestedService.trim() || !need.trim()) {
      setError(copy.validation.required);
      return;
    }

    if (!email.trim() && !phone.trim()) {
      setError(copy.validation.emailOrPhone);
      return;
    }

    setError('');
    await onSubmit({
      name: name.trim(),
      email: email.trim() || undefined,
      phone: phone.trim() || undefined,
      businessType: businessType.trim(),
      requestedService: requestedService.trim(),
      need: need.trim(),
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Field>
        <Label htmlFor='assistant-lead-name'>{copy.fields.name}</Label>
        <Input
          id='assistant-lead-name'
          name='name'
          type='text'
          autoComplete='name'
          value={name}
          onChange={event => {
            setName(event.target.value);
            setError('');
          }}
          placeholder={copy.fields.name}
        />
      </Field>
      <Field>
        <Label htmlFor='assistant-lead-email'>{copy.fields.email}</Label>
        <Input
          id='assistant-lead-email'
          name='email'
          type='email'
          inputMode='email'
          autoComplete='email'
          value={email}
          onChange={event => {
            setEmail(event.target.value);
            setError('');
          }}
          placeholder={copy.fields.email}
        />
      </Field>
      <Field>
        <Label htmlFor='assistant-lead-phone'>{copy.fields.phone}</Label>
        <Input
          id='assistant-lead-phone'
          name='phone'
          type='tel'
          inputMode='tel'
          autoComplete='tel'
          value={phone}
          onChange={event => {
            setPhone(event.target.value);
            setError('');
          }}
          placeholder={copy.fields.phone}
        />
      </Field>
      <Field>
        <Label htmlFor='assistant-lead-business-type'>{copy.fields.businessType}</Label>
        <Input
          id='assistant-lead-business-type'
          name='businessType'
          type='text'
          autoComplete='organization'
          value={businessType}
          onChange={event => {
            setBusinessType(event.target.value);
            setError('');
          }}
          placeholder={copy.fields.businessType}
        />
      </Field>
      <Field>
        <Label htmlFor='assistant-lead-requested-service'>{copy.fields.requestedService}</Label>
        <Input
          id='assistant-lead-requested-service'
          name='requestedService'
          type='text'
          autoComplete='off'
          value={requestedService}
          onChange={event => {
            setRequestedService(event.target.value);
            setError('');
          }}
          placeholder={copy.fields.requestedService}
        />
      </Field>
      <Field>
        <Label htmlFor='assistant-lead-need'>{copy.fields.need}</Label>
        <Textarea
          id='assistant-lead-need'
          name='need'
          autoComplete='off'
          value={need}
          onChange={event => {
            setNeed(event.target.value);
            setError('');
          }}
          placeholder={copy.fields.need}
        />
      </Field>
      {error ? <ErrorText id='assistant-lead-error'>{error}</ErrorText> : null}
      <Submit type='submit'>{copy.leadSubmit}</Submit>
    </Form>
  );
};
