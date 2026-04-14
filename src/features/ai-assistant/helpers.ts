import { logEvent } from 'firebase/analytics';
import { faqDe } from '../../data/assistant/faq.de';
import { faqEn } from '../../data/assistant/faq.en';
import { faqUk } from '../../data/assistant/faq.uk';
import { nichesDe } from '../../data/assistant/niches.de';
import { nichesEn } from '../../data/assistant/niches.en';
import { nichesUk } from '../../data/assistant/niches.uk';
import { servicesDe } from '../../data/assistant/services.de';
import { servicesEn } from '../../data/assistant/services.en';
import { servicesUk } from '../../data/assistant/services.uk';
import { analyticsPromise } from '../../firebase';
import {
  ASSISTANT_CONFIDENCE_THRESHOLD,
  ASSISTANT_COPY,
  ASSISTANT_LOW_CONFIDENCE_THRESHOLD,
  ASSISTANT_SUPPORTED_LANGUAGES,
} from './constants';
import type {
  AssistantEventName,
  AssistantFaqEntry,
  AssistantIntent,
  AssistantKnowledgeBundle,
  AssistantLanguage,
  AssistantLocalReply,
  AssistantLocalReplyContext,
  AssistantMessage,
  AssistantPanelCopy,
  AssistantService,
} from './types';

const ENGLISH_SIGNAL = /\b(website|price|pricing|quote|book|booking|call|support|ads|tracking|chatbot|timeline|estimate|project)\b/i;
const UKRAINIAN_SIGNAL = /[іїєґІЇЄҐ]/;
const HIGH_RISK_KEYWORDS = [
  'legal',
  'vertrag',
  'contract',
  'medizin',
  'medical',
  'steuer',
  'tax',
  'anwalt',
  'lawyer',
  'security audit',
  'penetration test',
];
const PRICING_KEYWORDS = ['preis', 'preise', 'kosten', 'pricing', 'cost', 'quote', 'angebot', 'вартість', 'ціна'];
const TIMELINE_KEYWORDS = ['dauer', 'timeline', 'zeit', 'wie lange', 'launch', 'строк', 'коли', 'скільки часу'];
const BOOKING_KEYWORDS = ['termin', 'booking', 'call', 'meeting', 'appointment', 'дзвінок', 'зустріч', 'запис'];
const HANDOFF_KEYWORDS = ['mensch', 'human', 'jemand', 'mitarbeiter', 'manager', 'людина', 'менеджер'];
const LEAD_KEYWORDS = ['angebot', 'anfrage', 'contact', 'lead', 'projekt', 'проєкт', 'заявка'];
const NICHE_KEYWORDS = ['werkstatt', 'praxis', 'beauty', 'shk', 'сан', 'майстерня', 'clinic', 'garage'];
const INTEGRATION_QUESTION_KEYWORDS = [
  'integrat',
  'embed',
  'widget',
  'iframe',
  'api',
  'calendar',
  'booking widget',
  'calendly',
  'google calendar',
  'map',
  'maps',
  'google maps',
  'karte',
  'karten',
  'kalender',
  'mapa',
  'мапа',
  'карта',
  'карти',
  'календар',
  'календарь',
  'інтегру',
  'інтеграці',
  'вбудува',
];
const MAP_KEYWORDS = ['map', 'maps', 'google maps', 'karte', 'karten', 'mapa', 'мапа', 'карта', 'карти'];
const CALENDAR_KEYWORDS = ['calendar', 'google calendar', 'calendly', 'booking widget', 'kalender', 'календар', 'календарь'];
const TIME_QUESTION_PATTERNS = [
  'what time',
  'current time',
  'time in berlin',
  'berlin time',
  'wie spät',
  'wie spaet',
  'wie viel uhr',
  'uhrzeit',
  'berliner zeit',
  'який час',
  'котра година',
  'час у берліні',
  'скільки зараз часу',
];

const knowledgeByLanguage: Record<AssistantLanguage, AssistantKnowledgeBundle> = {
  de: { services: servicesDe, faq: faqDe, niches: nichesDe },
  en: { services: servicesEn, faq: faqEn, niches: nichesEn },
  uk: { services: servicesUk, faq: faqUk, niches: nichesUk },
};

const normalize = (value: string) => value.toLowerCase().trim();

const findByKeywords = <T extends { keywords: string[] }>(items: T[], text: string): T | undefined => {
  const source = normalize(text);
  return items.find(item => item.keywords.some(keyword => source.includes(normalize(keyword))));
};

const findFaqByIntent = (faq: AssistantFaqEntry[], intent: AssistantIntent) => faq.find(item => item.intent === intent);

const summarizeScope = (messages: AssistantMessage[]) =>
  messages
    .filter(message => message.role === 'user')
    .slice(-2)
    .map(message => message.content.trim())
    .join(' ')
    .trim();

const isTimeQuestion = (text: string) => {
  const source = normalize(text);
  return TIME_QUESTION_PATTERNS.some(pattern => source.includes(pattern));
};

const detectIntegrationTargets = (text: string) => {
  const source = normalize(text);
  return {
    mentionsMap: MAP_KEYWORDS.some(keyword => source.includes(keyword)),
    mentionsCalendar: CALENDAR_KEYWORDS.some(keyword => source.includes(keyword)),
    mentionsIntegration: INTEGRATION_QUESTION_KEYWORDS.some(keyword => source.includes(keyword)),
  };
};

const buildIntegrationAnswer = (language: AssistantLanguage, text: string) => {
  const { mentionsMap, mentionsCalendar, mentionsIntegration } = detectIntegrationTargets(text);
  if (!mentionsIntegration && !mentionsMap && !mentionsCalendar) return null;

  if (language === 'uk') {
    if (mentionsMap && mentionsCalendar) {
      return 'Так, у вебсайт можна інтегрувати і мапу, і календар. Зазвичай це робиться через embed, iframe, віджет або API залежно від сервісу. Якщо підкажете, який саме сервіс маєте на увазі, я скажу найкращий варіант інтеграції та що для цього потрібно.';
    }

    if (mentionsMap) {
      return 'Так, мапу можна інтегрувати у вебсайт. Найчастіше це Google Maps embed або кастомна інтеграція через API, якщо потрібні фільтри, кілька локацій чи нестандартна логіка.';
    }

    if (mentionsCalendar) {
      return 'Так, календар або booking-віджет можна інтегрувати у вебсайт. Зазвичай це робиться через embed, iframe або API, якщо потрібне бронювання, синхронізація слотів чи власна логіка.';
    }

    return 'Так, прості інтеграції у вебсайт зазвичай можливі. Це може бути календар, мапа, booking-віджет, форма чи інший зовнішній сервіс. Якщо скажете, який саме інструмент хочете підключити, я підкажу найкращий варіант.';
  }

  if (language === 'en') {
    if (mentionsMap && mentionsCalendar) {
      return 'Yes, both a map and a calendar can be integrated into a website. This is usually done with an embed, iframe, widget, or API depending on the tool. If you share the exact service, I can suggest the cleanest implementation path.';
    }

    if (mentionsMap) {
      return 'Yes, a map can be integrated into a website. The most common option is a Google Maps embed, while API-based integration is better when you need multiple locations, filters, or custom behaviour.';
    }

    if (mentionsCalendar) {
      return 'Yes, a calendar or booking widget can be integrated into a website. This is often done with an embed, iframe, or API when you need scheduling logic, slot sync, or a more custom flow.';
    }

    return 'Yes, simple website integrations are usually possible. That can include a map, calendar, booking widget, form, or another external service. If you tell me the exact tool, I can suggest the best setup.';
  }

  if (mentionsMap && mentionsCalendar) {
    return 'Ja, sowohl eine Karte als auch ein Kalender lassen sich in eine Website integrieren. Je nach Tool geschieht das meist per Embed, iframe, Widget oder API. Wenn Sie den genauen Dienst nennen, kann ich den saubersten Weg kurz einordnen.';
  }

  if (mentionsMap) {
    return 'Ja, eine Karte lässt sich in eine Website integrieren. Am häufigsten ist ein Google-Maps-Embed, bei mehreren Standorten oder spezieller Logik ist auch eine API-Anbindung sinnvoll.';
  }

  if (mentionsCalendar) {
    return 'Ja, ein Kalender oder Buchungs-Widget lässt sich in eine Website integrieren. Das erfolgt oft per Embed, iframe oder API, wenn Terminlogik, Slot-Synchronisierung oder ein individueller Ablauf gebraucht werden.';
  }

  return 'Ja, einfache Website-Integrationen sind in der Regel möglich. Das kann zum Beispiel eine Karte, ein Kalender, ein Buchungs-Widget, ein Formular oder ein externer Dienst sein. Wenn Sie das konkrete Tool nennen, kann ich die passende Variante kurz einordnen.';
};

const getBerlinTimeAnswer = (language: AssistantLanguage) => {
  const locale = language === 'uk' ? 'uk-UA' : language === 'en' ? 'en-US' : 'de-DE';
  const now = new Date();
  const time = new Intl.DateTimeFormat(locale, {
    timeZone: 'Europe/Berlin',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZoneName: 'short',
  }).format(now);
  const date = new Intl.DateTimeFormat(locale, {
    timeZone: 'Europe/Berlin',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(now);

  if (language === 'uk') return `Зараз у Берліні ${time}. Сьогодні ${date}.`;
  if (language === 'en') return `The current time in Berlin is ${time}. Today is ${date}.`;
  return `Aktuell ist es in Berlin ${time}. Heute ist ${date}.`;
};

const buildEstimateText = (
  service: AssistantService,
  language: AssistantLanguage,
  scope: string,
  hasBusinessType: boolean
) => {
  if (!scope || scope.length < 30 || !hasBusinessType) return null;

  const low = service.pricingNumericFrom;
  const high = Math.round(service.pricingNumericFrom * (service.pricingModel === 'monthly' ? 1.8 : 1.7));

  if (language === 'de') {
    return `Eine grobe Ersteinschätzung für ${service.title.toLowerCase()} liegt oft etwa im Bereich von ${low.toLocaleString(
      'de-DE'
    )} bis ${high.toLocaleString('de-DE')} EUR. Das ist bewusst nur eine grobe Orientierung. ${service.estimateHint}`;
  }

  if (language === 'uk') {
    return `Груба початкова оцінка для напряму "${service.title}" часто лежить у діапазоні приблизно ${low.toLocaleString(
      'uk-UA'
    )}-${high.toLocaleString('uk-UA')} EUR. Це лише орієнтир. ${service.estimateHint}`;
  }

  return `A rough early estimate for ${service.title.toLowerCase()} often lands around EUR ${low.toLocaleString(
    'en-US'
  )} to EUR ${high.toLocaleString('en-US')}. This is intentionally only a rough guide. ${service.estimateHint}`;
};

export const ASSISTANT_ACCURACY_FALLBACK: Record<AssistantLanguage, string> = {
  de: 'Ich möchte das korrekt beantworten. Ich kann Ihre Anfrage direkt weiterleiten, damit Sie eine präzise Antwort erhalten.',
  en: 'I want to answer this accurately. I can forward your request directly so you get a precise answer.',
  uk: 'Я хочу відповісти точно. Я можу одразу передати ваш запит, щоб ви отримали точну відповідь.',
};

const GENERAL_FALLBACK: Record<AssistantLanguage, string> = {
  de: 'Ich kann auch allgemeine Fragen beantworten. Im lokalen Fallback-Modus ist mein Wissen aber begrenzt. Formulieren Sie die Frage gern etwas genauer.',
  en: 'I can also help with general questions. In local fallback mode my knowledge is limited, so feel free to phrase the question a bit more specifically.',
  uk: 'Я також можу допомагати із загальними питаннями. Але в локальному fallback-режимі мої знання обмежені, тож можна сформулювати запит трохи точніше.',
};

export const getAssistantCopy = (language: AssistantLanguage): AssistantPanelCopy => ASSISTANT_COPY[language];

export const getAssistantKnowledge = (language: AssistantLanguage): AssistantKnowledgeBundle => knowledgeByLanguage[language];

export const detectAssistantLanguage = (input: string, fallback: AssistantLanguage = 'de'): AssistantLanguage => {
  if (!input.trim()) return fallback;
  if (UKRAINIAN_SIGNAL.test(input)) return 'uk';
  if (ENGLISH_SIGNAL.test(input)) return 'en';
  return fallback;
};

export const coerceAssistantLanguage = (input?: string | null): AssistantLanguage => {
  const value = normalize(input ?? '');
  if ((ASSISTANT_SUPPORTED_LANGUAGES as string[]).includes(value)) return value as AssistantLanguage;
  if (value.startsWith('en')) return 'en';
  if (value.startsWith('uk') || value.startsWith('ua')) return 'uk';
  return 'de';
};

export const detectAssistantIntent = (text: string): AssistantIntent => {
  const source = normalize(text);
  if (HIGH_RISK_KEYWORDS.some(keyword => source.includes(keyword))) return 'handoff';
  if (BOOKING_KEYWORDS.some(keyword => source.includes(keyword))) return 'booking';
  if (HANDOFF_KEYWORDS.some(keyword => source.includes(keyword))) return 'handoff';
  if (LEAD_KEYWORDS.some(keyword => source.includes(keyword))) return 'lead_capture';
  if (PRICING_KEYWORDS.some(keyword => source.includes(keyword))) return 'pricing';
  if (TIMELINE_KEYWORDS.some(keyword => source.includes(keyword))) return 'timeline';
  if (NICHE_KEYWORDS.some(keyword => source.includes(keyword))) return 'niche_fit';
  return 'service_info';
};

export const buildAssistantContextBlock = (language: AssistantLanguage) => {
  const { services, faq, niches } = getAssistantKnowledge(language);

  return [
    'Services:',
    ...services.map(
      service =>
        `- ${service.title}: ${service.shortDescription} | price ${service.pricingFrom} | timeline ${service.timeline} | value ${service.businessValue}`
    ),
    'FAQ:',
    ...faq.map(entry => `- ${entry.question}: ${entry.answer}`),
    'Niches:',
    ...niches.map(
      niche =>
        `- ${niche.title}: ${niche.summary} | value ${niche.businessValue} | examples ${niche.examples.join(', ')}`
    ),
  ].join('\n');
};

export const generateAssistantLocalReply = ({
  messages,
  language,
  leadContext,
}: AssistantLocalReplyContext): AssistantLocalReply => {
  const copy = getAssistantCopy(language);
  const knowledge = getAssistantKnowledge(language);
  const lastUserMessage = [...messages].reverse().find(message => message.role === 'user');
  const lastUserContent = lastUserMessage?.content ?? '';
  const intent = detectAssistantIntent(lastUserContent);
  const matchedService = findByKeywords(knowledge.services, lastUserContent);
  const matchedNiche = findByKeywords(knowledge.niches, lastUserContent);
  const matchedFaq = findByKeywords(knowledge.faq, lastUserContent) ?? findFaqByIntent(knowledge.faq, intent);
  const scope = summarizeScope(messages);
  const hasBusinessType = Boolean(leadContext?.businessType?.trim()) || scope.length > 40;

  if (isTimeQuestion(lastUserContent)) {
    return {
      answer: getBerlinTimeAnswer(language),
      detectedLanguage: language,
      detectedIntent: 'service_info',
      confidence: 0.96,
      nextStep: 'none',
      fallbackMode: true,
    };
  }

  if (HIGH_RISK_KEYWORDS.some(keyword => normalize(lastUserContent).includes(keyword))) {
    return {
      answer: `${ASSISTANT_ACCURACY_FALLBACK[language]} ${copy.suggestions.handoff}`,
      detectedLanguage: language,
      detectedIntent: 'handoff',
      confidence: 0.2,
      nextStep: 'handoff',
      leadPrompt: copy.humanHandoffBody,
      fallbackMode: true,
    };
  }

  if (intent === 'booking') {
    return {
      answer:
        language === 'de'
          ? 'Gerne. Ich kann einen Terminwunsch aufnehmen. Sie können einfach ein passendes Datum und eine passende Uhrzeit in Europe/Berlin eintragen.'
          : language === 'uk'
            ? 'Звісно. Я можу прийняти запит на дзвінок. Просто вкажіть зручну дату та час у Europe/Berlin.'
            : 'Certainly. I can capture a booking request. Just share a suitable date and time in Europe/Berlin.',
      detectedLanguage: language,
      detectedIntent: 'booking',
      confidence: 0.9,
      nextStep: 'booking',
      bookingPrompt: copy.bookingIntro,
      fallbackMode: true,
    };
  }

  const integrationAnswer = buildIntegrationAnswer(language, lastUserContent);
  if (integrationAnswer) {
    return {
      answer: integrationAnswer,
      detectedLanguage: language,
      detectedIntent: 'service_info',
      confidence: 0.84,
      nextStep: 'none',
      fallbackMode: true,
    };
  }

  if (matchedService && intent === 'pricing') {
    const estimate = buildEstimateText(matchedService, language, scope, hasBusinessType);
    return {
      answer:
        language === 'de'
          ? `${matchedService.title} startet bei ${matchedService.pricingFrom}. ${estimate ?? matchedService.estimateHint} ${
              estimate ? '' : copy.suggestions.estimate
            }`
          : language === 'uk'
            ? `${matchedService.title} стартує від ${matchedService.pricingFrom}. ${estimate ?? matchedService.estimateHint} ${
                estimate ? '' : copy.suggestions.estimate
              }`
            : `${matchedService.title} starts at ${matchedService.pricingFrom}. ${estimate ?? matchedService.estimateHint} ${
                estimate ? '' : copy.suggestions.estimate
              }`,
      detectedLanguage: language,
      detectedIntent: 'pricing',
      confidence: estimate ? 0.86 : 0.72,
      nextStep: estimate ? 'none' : 'lead',
      leadPrompt: estimate ? undefined : copy.leadIntro,
      fallbackMode: true,
      matchedService,
    };
  }

  if (matchedService && intent === 'timeline') {
    return {
      answer:
        language === 'de'
          ? `${matchedService.title} dauert meist ${matchedService.timeline}. ${matchedService.businessValue}`
          : language === 'uk'
            ? `${matchedService.title} зазвичай триває ${matchedService.timeline}. ${matchedService.businessValue}`
            : `${matchedService.title} usually takes ${matchedService.timeline}. ${matchedService.businessValue}`,
      detectedLanguage: language,
      detectedIntent: 'timeline',
      confidence: 0.84,
      nextStep: 'none',
      fallbackMode: true,
      matchedService,
    };
  }

  if (matchedNiche) {
    const recommended = matchedNiche.recommendedServices
      .map(serviceId => knowledge.services.find(service => service.id === serviceId)?.title)
      .filter(Boolean)
      .join(', ');

    return {
      answer:
        language === 'de'
          ? `${matchedNiche.title} passt gut. ${matchedNiche.summary} Typische Beispiele: ${matchedNiche.examples.join(
              ', '
            )}. Passende Leistungen wären zum Beispiel ${recommended}.`
          : language === 'uk'
            ? `Для напряму "${matchedNiche.title}" це добре підходить. ${matchedNiche.summary} Типові приклади: ${matchedNiche.examples.join(
                ', '
              )}. Найчастіше доречні послуги: ${recommended}.`
            : `${matchedNiche.title} is a strong fit. ${matchedNiche.summary} Typical examples include ${matchedNiche.examples.join(
                ', '
              )}. Relevant services would often be ${recommended}.`,
      detectedLanguage: language,
      detectedIntent: 'niche_fit',
      confidence: 0.82,
      nextStep: 'none',
      fallbackMode: true,
      matchedNiche,
    };
  }

  if (matchedService) {
    return {
      answer:
        language === 'de'
          ? `${matchedService.title}: ${matchedService.shortDescription} ${matchedService.businessValue} Startpreis: ${matchedService.pricingFrom}. Zeitrahmen: ${matchedService.timeline}.`
          : language === 'uk'
            ? `${matchedService.title}: ${matchedService.shortDescription} ${matchedService.businessValue} Стартова рамка: ${matchedService.pricingFrom}. Строк: ${matchedService.timeline}.`
            : `${matchedService.title}: ${matchedService.shortDescription} ${matchedService.businessValue} Starting price: ${matchedService.pricingFrom}. Timeline: ${matchedService.timeline}.`,
      detectedLanguage: language,
      detectedIntent: intent,
      confidence: 0.8,
      nextStep: intent === 'lead_capture' ? 'lead' : 'none',
      leadPrompt: intent === 'lead_capture' ? copy.leadIntro : undefined,
      fallbackMode: true,
      matchedService,
    };
  }

  if (matchedFaq) {
    return {
      answer: matchedFaq.answer,
      detectedLanguage: language,
      detectedIntent: matchedFaq.intent ?? intent,
      confidence: 0.74,
      nextStep: matchedFaq.intent === 'handoff' ? 'handoff' : 'none',
      leadPrompt: matchedFaq.intent === 'handoff' ? copy.humanHandoffBody : undefined,
      fallbackMode: true,
    };
  }

  const isGeneralFallback = intent === 'service_info';
  const confidence = isGeneralFallback ? 0.52 : 0.35;
  const nextStep = isGeneralFallback
    ? 'none'
    : confidence < ASSISTANT_LOW_CONFIDENCE_THRESHOLD
      ? 'handoff'
      : confidence < ASSISTANT_CONFIDENCE_THRESHOLD
        ? 'lead'
        : 'none';

  return {
    answer:
      isGeneralFallback
        ? GENERAL_FALLBACK[language]
        : nextStep === 'handoff'
        ? `${ASSISTANT_ACCURACY_FALLBACK[language]} ${copy.suggestions.handoff}`
        : `${copy.suggestions.estimate} ${copy.suggestions.booking}`,
    detectedLanguage: language,
    detectedIntent: nextStep === 'handoff' ? 'handoff' : intent,
    confidence,
    nextStep,
    leadPrompt: nextStep === 'lead' ? copy.leadIntro : undefined,
    bookingPrompt: undefined,
    fallbackMode: true,
  };
};

export const trackAssistantEvent = async (name: AssistantEventName, params?: Record<string, string | number | boolean>) => {
  if (typeof window === 'undefined') return;

  try {
    const analytics = await analyticsPromise;
    if (analytics) logEvent(analytics, name, params);
  } catch (error) {
    console.warn('Assistant analytics unavailable.', error);
  }

  const dataLayer = (window as Window & { dataLayer?: Array<Record<string, unknown>> }).dataLayer;
  if (Array.isArray(dataLayer)) dataLayer.push({ event: name, ...params });
};
