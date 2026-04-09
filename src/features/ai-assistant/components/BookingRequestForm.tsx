import { useState } from 'react';
import styled from 'styled-components';
import type { AssistantBookingPayload, AssistantPanelCopy } from '../types';

const BOOKING_TIME_STEP_MINUTES = 15;
const BOOKING_START_MINUTES = 10 * 60;
const BOOKING_END_MINUTES = 16 * 60 + 45;

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

  const weekday = new Date(Date.UTC(year, month - 1, day, 12, 0)).getUTCDay();
  if (weekday < 2 || weekday > 5) {
    return 'Bookings are available Tuesday to Friday only.';
  }

  if (minute % BOOKING_TIME_STEP_MINUTES !== 0) {
    return 'Please choose a time on a 15-minute grid.';
  }

  const totalMinutes = hour * 60 + minute;
  if (totalMinutes < BOOKING_START_MINUTES || totalMinutes > BOOKING_END_MINUTES) {
    return 'Available start times are between 10:00 and 16:45 Europe/Berlin.';
  }

  const now = getBerlinNowParts();
  const requestedTimestamp = toPseudoTimestamp(year, month, day, hour, minute);
  const nowTimestamp = toPseudoTimestamp(now.year, now.month, now.day, now.hour, now.minute);
  const sameDay = year === now.year && month === now.month && day === now.day;

  if (requestedTimestamp < nowTimestamp) {
    return 'Please choose a future time slot.';
  }

  if (sameDay && requestedTimestamp - nowTimestamp < 3 * 60 * 60 * 1000) {
    return 'Same-day bookings require at least 3 hours of notice.';
  }

  return null;
};

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
  min-height: 80px;
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
          min='10:00'
          max='16:45'
          step='900'
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
