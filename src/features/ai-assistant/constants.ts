import type { AssistantFeatureFlags, AssistantLanguage, AssistantPanelCopy, AssistantQuickReply } from './types';

export const ASSISTANT_STORAGE_KEY = 'vs-assistant-open';
export const ASSISTANT_MESSAGES_STORAGE_KEY = 'vs-assistant-messages';

export const ASSISTANT_SUPPORTED_LANGUAGES: AssistantLanguage[] = ['de', 'en', 'uk'];

export const ASSISTANT_FEATURE_FLAGS: AssistantFeatureFlags = {
  voiceMessages: false,
  demoAvatar: false,
};

export const ASSISTANT_CONFIDENCE_THRESHOLD = 0.58;
export const ASSISTANT_LOW_CONFIDENCE_THRESHOLD = 0.4;

export const ASSISTANT_QUICK_REPLIES: Record<AssistantLanguage, AssistantQuickReply[]> = {
  de: [
    { id: 'website', label: 'Website erstellen', value: 'Ich brauche eine neue Website.', intent: 'service_info' },
    { id: 'redesign', label: 'Redesign', value: 'Ich möchte meine bestehende Website überarbeiten.', intent: 'service_info' },
    { id: 'ads', label: 'Ads', value: 'Ich möchte mehr Anfragen über Ads erhalten.', intent: 'service_info' },
    { id: 'ai-chatbot', label: 'AI-Chatbot', value: 'Ich interessiere mich für einen AI-Chatbot.', intent: 'service_info' },
    { id: 'tracking', label: 'Tracking', value: 'Ich brauche ein sauberes Tracking-Setup.', intent: 'service_info' },
    { id: 'support', label: 'Support', value: 'Ich suche laufenden Support.', intent: 'service_info' },
    { id: 'booking', label: 'Termin buchen', value: 'Ich möchte einen Termin anfragen.', intent: 'booking', action: 'booking' },
    { id: 'human', label: 'Mit jemandem sprechen', value: 'Ich möchte direkt mit jemandem sprechen.', intent: 'handoff', action: 'handoff' },
  ],
  en: [
    { id: 'website', label: 'Website build', value: 'I need a new website.', intent: 'service_info' },
    { id: 'redesign', label: 'Redesign', value: 'I want to improve my current website.', intent: 'service_info' },
    { id: 'ads', label: 'Ads', value: 'I want more leads from ads.', intent: 'service_info' },
    { id: 'ai-chatbot', label: 'AI chatbot', value: 'I am interested in an AI chatbot.', intent: 'service_info' },
    { id: 'tracking', label: 'Tracking', value: 'I need a clean tracking setup.', intent: 'service_info' },
    { id: 'support', label: 'Support', value: 'I am looking for ongoing support.', intent: 'service_info' },
    { id: 'booking', label: 'Book a call', value: 'I would like to request a call.', intent: 'booking', action: 'booking' },
    { id: 'human', label: 'Talk to a person', value: 'I want to speak with someone directly.', intent: 'handoff', action: 'handoff' },
  ],
  uk: [
    { id: 'website', label: 'Створити сайт', value: 'Мені потрібен новий сайт.', intent: 'service_info' },
    { id: 'redesign', label: 'Редизайн', value: 'Я хочу оновити поточний сайт.', intent: 'service_info' },
    { id: 'ads', label: 'Реклама', value: 'Я хочу більше заявок з реклами.', intent: 'service_info' },
    { id: 'ai-chatbot', label: 'AI-чатбот', value: 'Мене цікавить AI-чатбот.', intent: 'service_info' },
    { id: 'tracking', label: 'Трекінг', value: 'Мені потрібен коректний трекінг.', intent: 'service_info' },
    { id: 'support', label: 'Підтримка', value: 'Я шукаю постійну підтримку.', intent: 'service_info' },
    { id: 'booking', label: 'Запросити дзвінок', value: 'Я хочу запросити дзвінок.', intent: 'booking', action: 'booking' },
    { id: 'human', label: 'Поговорити з людиною', value: 'Я хочу одразу поговорити з людиною.', intent: 'handoff', action: 'handoff' },
  ],
};

export const ASSISTANT_COPY: Record<AssistantLanguage, AssistantPanelCopy> = {
  de: {
    title: 'AI Assistant',
    subtitle: 'Ruhige Erstberatung, Lead-Erfassung und Terminwünsche in einem Ablauf.',
    onlineLabel: 'DE erkannt',
    inputPlaceholder: 'Fragen Sie nach Leistungen, Preisen, Timing oder Branchenbeispielen ...',
    sendLabel: 'Senden',
    quickRepliesTitle: 'Schnell starten',
    fallbackNotice: 'Der Live-AI-Service ist gerade nicht erreichbar.',
    fallbackLine: 'Ich antworte vorübergehend mit lokalem Wissensstand und leite Sie bei Bedarf direkt weiter.',
    humanHandoffTitle: 'Menschliche Rückmeldung empfohlen',
    humanHandoffBody: 'Wenn Sie möchten, kann ich Ihre Anfrage direkt als Lead oder Terminwunsch weitergeben.',
    humanHandoffCta: 'Anfrage weitergeben',
    leadTitle: 'Projektanfrage',
    leadIntro: 'Damit wir sauber nachfassen können, brauche ich ein paar Basisdaten.',
    leadSubmit: 'Lead senden',
    leadSuccess: 'Vielen Dank. Die Anfrage wurde übergeben.',
    bookingTitle: 'Terminwunsch',
    bookingIntro: 'Bitte nennen Sie einen passenden Zeitraum. Wir prüfen den Wunsch und melden uns zurück.',
    bookingSubmit: 'Terminwunsch senden',
    bookingSuccess: 'Vielen Dank. Der Terminwunsch wurde erfasst.',
    typingLabel: 'schreibt ...',
    fields: {
      name: 'Name',
      email: 'E-Mail',
      phone: 'Telefon',
      businessType: 'Unternehmensart',
      requestedService: 'Gewünschte Leistung',
      need: 'Kurz Ihr Bedarf',
      preferredDate: 'Wunschtermin',
      preferredTime: 'Uhrzeit',
      notes: 'Zusätzliche Hinweise',
    },
    validation: {
      emailOrPhone: 'Bitte E-Mail oder Telefon angeben.',
      required: 'Bitte füllen Sie dieses Feld aus.',
    },
    suggestions: {
      estimate: 'Wenn Sie mir Branche, Leistung und groben Umfang nennen, kann ich eine grobe Ersteinschätzung geben.',
      handoff: 'Wenn Sie möchten, leite ich die Anfrage direkt weiter.',
      booking: 'Ich kann auch direkt einen Terminwunsch aufnehmen.',
    },
    greeting:
      'Guten Tag. Ich kann Fragen zu Leistungen, Preisen, Zeitrahmen und typischen Einsatzfällen beantworten. Wenn etwas unklar ist, leite ich Sie direkt an einen Menschen weiter.',
  },
  en: {
    title: 'AI Assistant',
    subtitle: 'Calm first-contact guidance, lead capture, and booking requests in one flow.',
    onlineLabel: 'EN detected',
    inputPlaceholder: 'Ask about services, pricing, timing, or niche examples ...',
    sendLabel: 'Send',
    quickRepliesTitle: 'Quick start',
    fallbackNotice: 'The live AI service is currently unavailable.',
    fallbackLine: 'I can still reply using the local knowledge base and offer a human follow-up when needed.',
    humanHandoffTitle: 'Human follow-up recommended',
    humanHandoffBody: 'If you like, I can forward your request directly as a lead or booking request.',
    humanHandoffCta: 'Forward request',
    leadTitle: 'Project enquiry',
    leadIntro: 'To follow up properly, I need a few basics first.',
    leadSubmit: 'Send lead',
    leadSuccess: 'Thank you. The enquiry has been forwarded.',
    bookingTitle: 'Booking request',
    bookingIntro: 'Please share a suitable time. We will review the request and get back to you.',
    bookingSubmit: 'Send booking request',
    bookingSuccess: 'Thank you. The booking request has been captured.',
    typingLabel: 'typing ...',
    fields: {
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      businessType: 'Business type',
      requestedService: 'Requested service',
      need: 'Short project need',
      preferredDate: 'Preferred date',
      preferredTime: 'Time',
      notes: 'Additional notes',
    },
    validation: {
      emailOrPhone: 'Please provide either an email or a phone number.',
      required: 'Please fill in this field.',
    },
    suggestions: {
      estimate: 'If you share the business type, service, and rough scope, I can provide a rough early estimate.',
      handoff: 'If you prefer, I can forward the request directly.',
      booking: 'I can also capture a booking request right away.',
    },
    greeting:
      'Hello. I can answer questions about services, pricing, timing, and typical use cases. If confidence is low, I will say that clearly and offer human follow-up.',
  },
  uk: {
    title: 'AI Assistant',
    subtitle: 'Спокійний перший контакт, збір лідів і запитів на дзвінок в одному сценарії.',
    onlineLabel: 'UK виявлено',
    inputPlaceholder: 'Питайте про послуги, вартість, строки або приклади для ніші ...',
    sendLabel: 'Надіслати',
    quickRepliesTitle: 'Швидкий старт',
    fallbackNotice: 'Живий AI-сервіс зараз недоступний.',
    fallbackLine: 'Я можу тимчасово відповідати на основі локальної бази знань і запропонувати зв’язок із людиною.',
    humanHandoffTitle: 'Рекомендовано відповідь людини',
    humanHandoffBody: 'Якщо хочете, я можу одразу передати ваш запит як лід або запит на дзвінок.',
    humanHandoffCta: 'Передати запит',
    leadTitle: 'Запит по проєкту',
    leadIntro: 'Щоб команда могла коректно відповісти, мені потрібні кілька базових деталей.',
    leadSubmit: 'Надіслати лід',
    leadSuccess: 'Дякую. Запит передано.',
    bookingTitle: 'Запит на дзвінок',
    bookingIntro: 'Вкажіть зручний час. Ми перевіримо запит і повернемося з відповіддю.',
    bookingSubmit: 'Надіслати запит',
    bookingSuccess: 'Дякую. Запит на дзвінок зафіксовано.',
    typingLabel: 'друкує ...',
    fields: {
      name: 'Ім’я',
      email: 'E-mail',
      phone: 'Телефон',
      businessType: 'Тип бізнесу',
      requestedService: 'Потрібна послуга',
      need: 'Коротко про задачу',
      preferredDate: 'Бажана дата',
      preferredTime: 'Час',
      notes: 'Додаткові деталі',
    },
    validation: {
      emailOrPhone: 'Будь ласка, вкажіть e-mail або телефон.',
      required: 'Будь ласка, заповніть це поле.',
    },
    suggestions: {
      estimate: 'Якщо дасте тип бізнесу, послугу й приблизний обсяг, я зможу дати грубу оцінку.',
      handoff: 'За потреби я можу одразу передати запит людині.',
      booking: 'Також я можу прийняти запит на дзвінок.',
    },
    greeting:
      'Вітаю. Я можу відповісти на питання про послуги, ціни, строки та типові сценарії для ніш. Якщо впевненість низька, я скажу про це прямо й запропоную зв’язок із людиною.',
  },
};
