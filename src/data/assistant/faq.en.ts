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
    id: 'platforms',
    question: 'Which platforms do you support for automation?',
    answer:
      'Phase 1 usually covers Instagram DM, Facebook Messenger, WhatsApp Business, Telegram, and website chat. Phase 2 can include forms, email routing, CRM, Google Sheets, and Google Calendar integrations.',
    intent: 'service_info',
    keywords: ['platforms', 'instagram', 'messenger', 'whatsapp', 'telegram', 'website chat'],
  },
  {
    id: 'languages',
    question: 'Can the assistant reply in German, English, or Ukrainian?',
    answer:
      'Yes. German is standard, and English or Ukrainian can be added when needed. The exact language setup depends on the bot scope and knowledge base.',
    intent: 'service_info',
    keywords: ['german', 'english', 'ukrainian', 'language', 'multilingual', 'speak german'],
  },
  {
    id: 'calendar-map',
    question: 'Can you connect a map or calendar to the website?',
    answer:
      'Yes. Maps, booking widgets, and calendars can usually be integrated through embeds, widgets, or APIs depending on the tool and the required logic.',
    intent: 'service_info',
    keywords: ['map', 'calendar', 'booking widget', 'embed', 'google maps', 'calendly'],
  },
  {
    id: 'lead-capture',
    question: 'Can the bot collect leads automatically?',
    answer:
      'Yes. The assistant can ask a few qualifying questions, capture the enquiry in a structured format, and pass it into email, CRM, Google Sheets, or a booking flow.',
    intent: 'lead_capture',
    keywords: ['collect leads', 'lead capture', 'automatic leads', 'structured enquiry', 'crm'],
  },
  {
    id: 'website-editing',
    question: 'Can I edit the website content myself later?',
    answer:
      'Usually yes. That depends on the project setup, but content areas can normally be prepared so text, images, and common updates stay manageable after launch.',
    intent: 'service_info',
    keywords: ['edit content', 'change text', 'cms', 'manage website', 'update content yourself'],
  },
  {
    id: 'mobile-friendly',
    question: 'Will the website be mobile-friendly?',
    answer:
      'Yes. A website should be built to work cleanly on mobile, tablet, and desktop so the path to contact or booking stays clear across devices.',
    intent: 'service_info',
    keywords: ['mobile', 'phone', 'responsive', 'mobile friendly', 'tablet'],
  },
  {
    id: 'seo',
    question: 'Is SEO included?',
    answer:
      'Basic SEO foundations can be included, such as clean structure, metadata, performance basics, and indexable content setup. Larger SEO work usually depends on the project scope.',
    intent: 'service_info',
    keywords: ['seo', 'google ranking', 'metadata', 'search engine optimization'],
  },
  {
    id: 'hosting-domain',
    question: 'Do you help with hosting and domains?',
    answer:
      'Yes, that can usually be supported as part of the setup. The exact scope depends on whether you need a new domain, hosting migration, email setup, or ongoing maintenance.',
    intent: 'service_info',
    keywords: ['hosting', 'host', 'domain', 'dns', 'server', 'migration'],
  },
  {
    id: 'dsgvo',
    question: 'Will the website be DSGVO-friendly?',
    answer:
      'A DSGVO-conscious setup can be prepared on the technical side, but legally binding assessments should be checked with a qualified specialist when the case is sensitive.',
    intent: 'handoff',
    keywords: ['dsgvo', 'gdpr', 'datenschutz', 'privacy', 'compliance'],
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
