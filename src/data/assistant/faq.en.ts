import type { AssistantFaqEntry } from '../../features/ai-assistant/types';

export const faqEn: AssistantFaqEntry[] = [
  {
    id: 'response-time',
    question: 'How quickly does the assistant respond?',
    answer:
      'The assistant can sort enquiries around the clock, answer standard questions, and capture booking requests. If something is unclear or sensitive, it should hand the conversation to a human.',
    intent: 'service_info',
    keywords: ['24/7', 'reply', 'respond', 'response time', 'available', 'speed'],
  },
  {
    id: 'business-value',
    question: 'What is the business value of an AI assistant?',
    answer:
      'A strong AI assistant reduces friction in first contact, answers routine questions immediately, captures leads in a structured way, and helps prevent missed enquiries.',
    intent: 'service_info',
    keywords: ['value', 'benefit', 'why', 'business value', 'advantage'],
  },
  {
    id: 'handoff',
    question: 'What happens when confidence is low?',
    answer:
      'When confidence is low or important information is missing, the assistant should say that clearly and offer direct human follow-up.',
    intent: 'handoff',
    keywords: ['uncertain', 'human', 'handoff', 'follow-up', 'escalate'],
  },
  {
    id: 'estimate',
    question: 'Can the assistant provide pricing?',
    answer:
      'It should only give a rough early estimate. For anything more precise, it needs the business type, requested service, and enough project context.',
    intent: 'pricing',
    keywords: ['price', 'pricing', 'quote', 'estimate', 'cost'],
  },
  {
    id: 'booking',
    question: 'Can the assistant handle booking requests?',
    answer:
      'Yes. It can capture a booking request, validate the preferred slot rules, and pass a structured request to the team.',
    intent: 'booking',
    keywords: ['book', 'booking', 'call', 'meeting', 'appointment'],
  },
];
