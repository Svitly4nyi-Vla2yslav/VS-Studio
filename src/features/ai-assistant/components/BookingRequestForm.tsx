import { useState } from 'react';
import styled, { css } from 'styled-components';
import type { AssistantBookingPayload, AssistantPanelCopy } from '../types';

const getBerlinNowParts = () => {
  const formatter = new Intl.DateTimeFormat('sv-SE', {
    timeZone: 'Europe/Berlin',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  const parts = Object.fromEntries(formatter.formatToParts(new Date()).map(part => [part.type, part.value]));

  return {
    year: Number(parts.year),
    month: Number(parts.month),
    day: Number(parts.day),
    hour: Number(parts.hour),
    minute: Number(parts.minute),
  };
};

const toPseudoTimestamp = (year: number, month: number, day: number, hour: number, minute: number) =>
  Date.UTC(year, month - 1, day, hour, minute);

const getTodayInBerlin = () => {
  const { year, month, day } = getBerlinNowParts();
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
};

const validateBookingSlot = (preferredDate: string, preferredTime: string) => {
  const [year, month, day] = preferredDate.split('-').map(Number);
  const [hour, minute] = preferredTime.split(':').map(Number);

  if ([year, month, day, hour, minute].some(value => Number.isNaN(value))) {
    return 'Please choose a valid date and time.';
  }

  const now = getBerlinNowParts();
  const requestedTimestamp = toPseudoTimestamp(year, month, day, hour, minute);
  const nowTimestamp = toPseudoTimestamp(now.year, now.month, now.day, now.hour, now.minute);

  if (requestedTimestamp < nowTimestamp) {
    return 'Please choose a future time slot.';
  }

  return null;
};

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

  &[type='date'],
  &[type='time'] {
    padding-right: 14px;
  }

  &::-webkit-calendar-picker-indicator {
    opacity: 0.72;
    cursor: pointer;
  }
`;

const Textarea = styled.textarea`
  ${inputSurface}
  min-height: 112px;
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

interface BookingRequestFormProps {
  copy: AssistantPanelCopy;
  onSubmit: (
    payload: Omit<AssistantBookingPayload, 'language' | 'source' | 'timezone'>
  ) => Promise<void> | void;
}

export const BookingRequestForm: React.FC<BookingRequestFormProps> = ({ copy, onSubmit }) => {
  const minBookingDate = getTodayInBerlin();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [requestedService, setRequestedService] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !businessType.trim() || !requestedService.trim() || !preferredDate || !preferredTime) {
      setError(copy.validation.required);
      return;
    }

    if (!email.trim() && !phone.trim()) {
      setError(copy.validation.emailOrPhone);
      return;
    }

    const slotError = validateBookingSlot(preferredDate, preferredTime);
    if (slotError) {
      setError(slotError);
      return;
    }

    setError('');
    await onSubmit({
      name: name.trim(),
      email: email.trim() || undefined,
      phone: phone.trim() || undefined,
      businessType: businessType.trim(),
      requestedService: requestedService.trim(),
      preferredDate,
      preferredTime,
      notes: notes.trim() || undefined,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Field>
        <Label htmlFor='assistant-booking-name'>{copy.fields.name}</Label>
        <Input
          id='assistant-booking-name'
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
        <Label htmlFor='assistant-booking-email'>{copy.fields.email}</Label>
        <Input
          id='assistant-booking-email'
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
        <Label htmlFor='assistant-booking-phone'>{copy.fields.phone}</Label>
        <Input
          id='assistant-booking-phone'
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
        <Label htmlFor='assistant-booking-business-type'>{copy.fields.businessType}</Label>
        <Input
          id='assistant-booking-business-type'
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
        <Label htmlFor='assistant-booking-requested-service'>{copy.fields.requestedService}</Label>
        <Input
          id='assistant-booking-requested-service'
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
        <Label htmlFor='assistant-booking-date'>{copy.fields.preferredDate}</Label>
        <Input
          id='assistant-booking-date'
          name='preferredDate'
          type='date'
          autoComplete='off'
          min={minBookingDate}
          value={preferredDate}
          onChange={event => {
            setPreferredDate(event.target.value);
            setError('');
          }}
        />
      </Field>
      <Field>
        <Label htmlFor='assistant-booking-time'>{copy.fields.preferredTime}</Label>
        <Input
          id='assistant-booking-time'
          name='preferredTime'
          type='time'
          autoComplete='off'
          value={preferredTime}
          onChange={event => {
            setPreferredTime(event.target.value);
            setError('');
          }}
        />
      </Field>
      <Field>
        <Label htmlFor='assistant-booking-notes'>{copy.fields.notes}</Label>
        <Textarea
          id='assistant-booking-notes'
          name='notes'
          autoComplete='off'
          value={notes}
          onChange={event => {
            setNotes(event.target.value);
            setError('');
          }}
          placeholder={copy.fields.notes}
        />
      </Field>
      {error ? <ErrorText id='assistant-booking-error'>{error}</ErrorText> : null}
      <Submit type='submit'>{copy.bookingSubmit}</Submit>
    </Form>
  );
};
