import { useState } from 'react';
import styled from 'styled-components';
import type { AssistantLeadPayload, AssistantPanelCopy } from '../types';

const Form = styled.form`
  display: grid;
  gap: 10px;
  padding: 14px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

const Input = styled.input`
  min-height: 44px;
  padding: 0 12px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
`;

const Textarea = styled.textarea`
  min-height: 90px;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  resize: vertical;
`;

const Submit = styled.button`
  min-height: 44px;
  padding: 0 14px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(255, 190, 112, 0.96), rgba(255, 219, 171, 0.8));
  color: #111827;
  font-weight: 700;
`;

const ErrorText = styled.p`
  color: #ffd1d1;
  font-size: 12px;
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
      <Input value={name} onChange={event => setName(event.target.value)} placeholder={copy.fields.name} />
      <Input value={email} onChange={event => setEmail(event.target.value)} placeholder={copy.fields.email} />
      <Input value={phone} onChange={event => setPhone(event.target.value)} placeholder={copy.fields.phone} />
      <Input
        value={businessType}
        onChange={event => setBusinessType(event.target.value)}
        placeholder={copy.fields.businessType}
      />
      <Input
        value={requestedService}
        onChange={event => setRequestedService(event.target.value)}
        placeholder={copy.fields.requestedService}
      />
      <Textarea value={need} onChange={event => setNeed(event.target.value)} placeholder={copy.fields.need} />
      {error ? <ErrorText>{error}</ErrorText> : null}
      <Submit type='submit'>{copy.leadSubmit}</Submit>
    </Form>
  );
};
