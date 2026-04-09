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

const Field = styled.div`
  display: grid;
  gap: 6px;
`;

const Label = styled.label`
  color: rgba(255, 255, 255, 0.72);
  font-size: 12px;
  font-weight: 600;
  line-height: 1.3;
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
      <Field>
        <Label htmlFor='assistant-lead-name'>{copy.fields.name}</Label>
        <Input
          id='assistant-lead-name'
          name='name'
          type='text'
          autoComplete='name'
          value={name}
          onChange={event => setName(event.target.value)}
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
          onChange={event => setEmail(event.target.value)}
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
          onChange={event => setPhone(event.target.value)}
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
          onChange={event => setBusinessType(event.target.value)}
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
          onChange={event => setRequestedService(event.target.value)}
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
          onChange={event => setNeed(event.target.value)}
          placeholder={copy.fields.need}
        />
      </Field>
      {error ? <ErrorText id='assistant-lead-error'>{error}</ErrorText> : null}
      <Submit type='submit'>{copy.leadSubmit}</Submit>
    </Form>
  );
};
