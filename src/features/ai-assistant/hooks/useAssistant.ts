import { useEffect, useState } from 'react';
import { ASSISTANT_COPY, ASSISTANT_MESSAGES_STORAGE_KEY } from '../constants';
import { getAssistantCopy, trackAssistantEvent } from '../helpers';
import { assistantClient, buildLocalAssistantFallback } from '../services/assistantClient';
import { bookingClient } from '../services/bookingClient';
import { leadClient } from '../services/leadClient';
import type {
  AssistantBookingPayload,
  AssistantChatResponse,
  AssistantIntent,
  AssistantLanguage,
  AssistantLeadPayload,
  AssistantMessage,
} from '../types';
import { useLanguageDetection } from './useLanguageDetection';

const createMessageId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

const createMessage = (
  role: AssistantMessage['role'],
  content: string,
  language: AssistantLanguage,
  meta?: AssistantMessage['meta'],
  intent?: AssistantIntent,
  confidence?: number
): AssistantMessage => ({
  id: createMessageId(),
  role,
  content,
  createdAt: new Date().toISOString(),
  language,
  intent,
  confidence,
  meta,
});

const getInitialMessages = (language: AssistantLanguage) => {
  const stored = typeof window !== 'undefined' ? window.sessionStorage.getItem(ASSISTANT_MESSAGES_STORAGE_KEY) : null;

  if (stored) {
    try {
      return JSON.parse(stored) as AssistantMessage[];
    } catch {
      return [createMessage('assistant', ASSISTANT_COPY[language].greeting, language)];
    }
  }

  return [createMessage('assistant', ASSISTANT_COPY[language].greeting, language)];
};

const isGreetingOnlyState = (currentMessages: AssistantMessage[], language: AssistantLanguage) =>
  currentMessages.length === 1 &&
  currentMessages[0]?.role === 'assistant' &&
  currentMessages[0]?.content === ASSISTANT_COPY[language].greeting;

export const useAssistant = () => {
  const { assistantLanguage, setAssistantLanguage, updateLanguageFromText } = useLanguageDetection();
  const [messages, setMessages] = useState<AssistantMessage[]>(() => getInitialMessages(assistantLanguage));
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [degradedMode, setDegradedMode] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [activeForm, setActiveForm] = useState<'lead' | 'booking' | null>(null);
  const [leadDraft, setLeadDraft] = useState<Partial<AssistantLeadPayload>>({ language: assistantLanguage, source: 'assistant' });
  const [bookingDraft, setBookingDraft] = useState<Partial<AssistantBookingPayload>>({
    language: assistantLanguage,
    source: 'assistant',
    timezone: 'Europe/Berlin',
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem(ASSISTANT_MESSAGES_STORAGE_KEY, JSON.stringify(messages));
    }
  }, [messages]);

  useEffect(() => {
    setLeadDraft(previous => ({ ...previous, language: assistantLanguage, source: 'assistant' }));
  }, [assistantLanguage]);

  useEffect(() => {
    setBookingDraft(previous => ({
      ...previous,
      language: assistantLanguage,
      source: 'assistant',
      timezone: previous.timezone ?? 'Europe/Berlin',
    }));
  }, [assistantLanguage]);

  const openAssistant = () => {
    setIsOpen(true);
    trackAssistantEvent('assistant_opened');
  };

  const closeAssistant = () => setIsOpen(false);

  const appendAssistantResponse = (response: AssistantChatResponse) => {
    setMessages(current => [
      ...current,
      createMessage(
        'assistant',
        response.answer,
        response.detectedLanguage,
        {
          showLeadPrompt: Boolean(response.leadPrompt),
          showBookingPrompt: Boolean(response.bookingPrompt),
          fallback: Boolean(response.fallbackMode),
          humanHandoff: response.nextStep === 'handoff',
        },
        response.detectedIntent,
        response.confidence
      ),
    ]);

    if (response.nextStep === 'lead') setActiveForm('lead');
    if (response.nextStep === 'booking') setActiveForm('booking');
    if (response.nextStep === 'handoff') {
      setActiveForm('lead');
      trackAssistantEvent('assistant_handoff_requested');
    }
  };

  const sendMessage = async (content: string) => {
    const trimmed = content.trim();
    if (!trimmed) return;

    const detectedLanguage = updateLanguageFromText(trimmed);
    const userMessage = createMessage('user', trimmed, detectedLanguage);
    const nextMessages = isGreetingOnlyState(messages, detectedLanguage) ? [userMessage] : [...messages, userMessage];

    setMessages(nextMessages);
    setIsTyping(true);
    setErrorMessage('');
    trackAssistantEvent('assistant_message_sent', { language: detectedLanguage, length: trimmed.length });

    try {
      const response = await assistantClient.chat({
        messages: nextMessages,
        language: detectedLanguage,
        leadContext: leadDraft,
        bookingContext: bookingDraft,
      });
      setAssistantLanguage(response.detectedLanguage);
      setDegradedMode(Boolean(response.fallbackMode));
      appendAssistantResponse(response);
    } catch (error) {
      if (!(error instanceof Error && error.message === 'ASSISTANT_BACKEND_UNAVAILABLE_IN_VITE_DEV')) {
        console.warn('Assistant backend unavailable, falling back to local knowledge.', error);
      }
      setDegradedMode(true);
      appendAssistantResponse(
        buildLocalAssistantFallback({
          messages: nextMessages,
          language: detectedLanguage,
          leadContext: leadDraft,
          bookingContext: bookingDraft,
        })
      );
    } finally {
      setIsTyping(false);
    }
  };

  const handleQuickReply = async (value: string, action?: 'message' | 'lead' | 'booking' | 'handoff') => {
    trackAssistantEvent('assistant_quick_reply_clicked', { label: value });

    if (action === 'lead') {
      setActiveForm('lead');
      trackAssistantEvent('assistant_lead_started');
      return;
    }

    if (action === 'booking') {
      setActiveForm('booking');
      trackAssistantEvent('assistant_booking_started');
      return;
    }

    if (action === 'handoff') {
      setActiveForm('lead');
      setMessages(current => {
        const base = isGreetingOnlyState(current, assistantLanguage) ? [] : current;
        return [
          ...base,
          createMessage('assistant', getAssistantCopy(assistantLanguage).humanHandoffBody, assistantLanguage, {
            humanHandoff: true,
          }),
        ];
      });
      trackAssistantEvent('assistant_handoff_requested');
      return;
    }

    await sendMessage(value);
  };

  const submitLead = async (payload: Omit<AssistantLeadPayload, 'language' | 'source'>) => {
    const fullPayload: AssistantLeadPayload = { ...payload, language: assistantLanguage, source: 'assistant' };
    setLeadDraft(fullPayload);
    setErrorMessage('');
    trackAssistantEvent('assistant_lead_started', { language: assistantLanguage });

    try {
      await leadClient.createLead(fullPayload);
      setMessages(current => [...current, createMessage('assistant', getAssistantCopy(assistantLanguage).leadSuccess, assistantLanguage)]);
      setActiveForm(null);
      trackAssistantEvent('assistant_lead_completed', { language: assistantLanguage });
    } catch (error) {
      console.error('Lead capture failed.', error);
      setErrorMessage(
        assistantLanguage === 'de'
          ? 'Die Anfrage konnte gerade nicht gesendet werden. Bitte versuchen Sie es erneut.'
          : assistantLanguage === 'uk'
            ? 'Не вдалося надіслати запит. Будь ласка, спробуйте ще раз.'
            : 'The request could not be sent right now. Please try again.'
      );
    }
  };

  const submitBooking = async (payload: Omit<AssistantBookingPayload, 'language' | 'source' | 'timezone'>) => {
    const fullPayload: AssistantBookingPayload = {
      ...payload,
      timezone: 'Europe/Berlin',
      language: assistantLanguage,
      source: 'assistant',
    };

    setBookingDraft(fullPayload);
    setErrorMessage('');
    trackAssistantEvent('assistant_booking_started', { language: assistantLanguage });

    try {
      await bookingClient.createBookingRequest(fullPayload);
      setMessages(current => [...current, createMessage('assistant', getAssistantCopy(assistantLanguage).bookingSuccess, assistantLanguage)]);
      setActiveForm(null);
      trackAssistantEvent('assistant_booking_completed', { language: assistantLanguage });
    } catch (error) {
      console.error('Booking request failed.', error);
      setErrorMessage(
        assistantLanguage === 'de'
          ? 'Der Terminwunsch konnte gerade nicht gesendet werden. Bitte versuchen Sie es erneut.'
          : assistantLanguage === 'uk'
            ? 'Не вдалося надіслати запит на дзвінок. Будь ласка, спробуйте ще раз.'
            : 'The booking request could not be sent right now. Please try again.'
      );
    }
  };

  const resetConversation = () => {
    const initial = [createMessage('assistant', ASSISTANT_COPY[assistantLanguage].greeting, assistantLanguage)];
    setMessages(initial);
    setDegradedMode(false);
    setErrorMessage('');
    setActiveForm(null);
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem(ASSISTANT_MESSAGES_STORAGE_KEY, JSON.stringify(initial));
    }
  };

  return {
    messages,
    isTyping,
    isOpen,
    degradedMode,
    errorMessage,
    activeForm,
    assistantLanguage,
    copy: getAssistantCopy(assistantLanguage),
    leadDraft,
    bookingDraft,
    openAssistant,
    closeAssistant,
    sendMessage,
    handleQuickReply,
    submitLead,
    submitBooking,
    setActiveForm,
    resetConversation,
  };
};
