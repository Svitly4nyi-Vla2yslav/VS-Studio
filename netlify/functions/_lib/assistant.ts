import { faqDe } from '../../../src/data/assistant/faq.de';
import { faqEn } from '../../../src/data/assistant/faq.en';
import { faqUk } from '../../../src/data/assistant/faq.uk';
import { nichesDe } from '../../../src/data/assistant/niches.de';
import { nichesEn } from '../../../src/data/assistant/niches.en';
import { nichesUk } from '../../../src/data/assistant/niches.uk';
import { servicesDe } from '../../../src/data/assistant/services.de';
import { servicesEn } from '../../../src/data/assistant/services.en';
import { servicesUk } from '../../../src/data/assistant/services.uk';
import type {
  AssistantChatResponse,
  AssistantIntent,
  AssistantKnowledgeBundle,
  AssistantLanguage,
  AssistantMessage,
  AssistantService,
} from '../../../src/features/ai-assistant/types';

const ENGLISH_SIGNAL = /\b(website|price|pricing|quote|book|booking|call|support|ads|tracking|chatbot|timeline|estimate|project)\b/i;
const UKRAINIAN_SIGNAL = /[іїєґІЇЄҐ]/;
const HIGH_RISK_KEYWORDS = ['legal', 'vertrag', 'contract', 'medical', 'steuer', 'tax', 'lawyer', 'anwalt'];
const PRICING_KEYWORDS = ['preis', 'preise', 'kosten', 'pricing', 'cost', 'quote', 'angebot', 'вартість', 'ціна'];
const TIMELINE_KEYWORDS = ['dauer', 'timeline', 'zeit', 'wie lange', 'launch', 'строк', 'коли'];
const BOOKING_KEYWORDS = ['termin', 'booking', 'call', 'meeting', 'appointment', 'дзвінок', 'зустріч', 'запис'];
const HANDOFF_KEYWORDS = ['mensch', 'human', 'mitarbeiter', 'manager', 'людина', 'менеджер'];
const LEAD_KEYWORDS = ['angebot', 'anfrage', 'contact', 'lead', 'projekt', 'проєкт', 'заявка'];
const NICHE_KEYWORDS = ['werkstatt', 'praxis', 'beauty', 'shk', 'майстерня', 'clinic', 'garage'];
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
const SOCIAL_MEDIA_KEYWORDS = [
  'social',
  'social media',
  'instagram',
  'facebook',
  'messenger',
  'whatsapp',
  'telegram',
  'tiktok',
  'meta',
  'direct message',
  'dm',
  'private message',
  'comments',
  'comment',
  'social networks',
  'social network',
  'соц',
  'соціаль',
  'соцмереж',
  'соц мереж',
  'instagram',
  'facebook',
  'месенджер',
  'директ',
  'особисті повідомлення',
  'приватні повідомлення',
  'коментар',
  'коментарі',
];
const SOCIAL_DM_KEYWORDS = [
  'direct message',
  'dm',
  'private message',
  'messenger',
  'whatsapp',
  'telegram',
  'instagram dm',
  'facebook dm',
  'директ',
  'особисті повідомлення',
  'приватні повідомлення',
  'повідомлення',
];
const SOCIAL_COMMENT_KEYWORDS = ['comment', 'comments', 'коментар', 'коментарі'];
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

const findByKeywords = <T extends { keywords: string[] }>(items: T[], text: string) =>
  items.find(item => item.keywords.some(keyword => normalize(text).includes(normalize(keyword))));

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

const buildSocialAutomationAnswer = (language: AssistantLanguage, text: string) => {
  const source = normalize(text);
  const mentionsSocial = SOCIAL_MEDIA_KEYWORDS.some(keyword => source.includes(keyword));
  if (!mentionsSocial) return null;

  const mentionsDm = SOCIAL_DM_KEYWORDS.some(keyword => source.includes(keyword));
  const mentionsComments = SOCIAL_COMMENT_KEYWORDS.some(keyword => source.includes(keyword));

  if (language === 'uk') {
    if (mentionsDm && mentionsComments) {
      return 'Так, ми можемо налаштувати AI-асистента для відповідей клієнтам у соцмережах і месенджерах. Найкраще автоматизація працює в особистих повідомленнях, а в коментарях зазвичай потрібні додаткові правила, модерація або частково ручний контроль через обмеження платформ.';
    }

    if (mentionsDm) {
      return 'Так, AI-бота можна підключити до особистих повідомлень у соцмережах і месенджерах, наприклад Instagram, Facebook Messenger, WhatsApp або Telegram. Зазвичай він закриває прості питання, кваліфікує запит і передає діалог людині, коли тема вже нетипова або важлива.';
    }

    if (mentionsComments) {
      return 'Так, автоматизація відповідей у коментарях теж можлива, але тут усе більше залежить від правил конкретної платформи. Найчастіше ми рекомендуємо або напівавтоматичний сценарій, або відповіді лише на типові й безпечні питання, а складні випадки передавати людині.';
    }

    return 'Так, AI-асистента можна використовувати не лише на сайті, а й у соцмережах та месенджерах. Найчастіше він відповідає на прості питання, дає базову інформацію, допомагає з бронюванням або заявкою й передає діалог менеджеру, коли потрібна жива людина.';
  }

  if (language === 'en') {
    if (mentionsDm && mentionsComments) {
      return 'Yes, we can set up an AI assistant to reply to customers across social channels and messengers. Automation usually works best in direct messages, while comment replies often need extra rules, moderation, or partial human review because of platform limits.';
    }

    if (mentionsDm) {
      return 'Yes, an AI bot can be connected to direct messages in channels such as Instagram, Facebook Messenger, WhatsApp, or Telegram. It can usually handle simple questions, qualify the enquiry, and hand the conversation to a person once the topic becomes more specific or sensitive.';
    }

    if (mentionsComments) {
      return 'Yes, comment automation is also possible, but it depends more heavily on the rules and limits of the platform. In practice, a semi-automated setup or replies only to safe, repetitive questions is often the cleaner approach.';
    }

    return 'Yes, an AI assistant can be used not only on a website but also in social channels and messengers. It is usually best for simple questions, basic information, booking or lead capture, and then handing the conversation to a human when needed.';
  }

  if (mentionsDm && mentionsComments) {
    return 'Ja, wir können einen AI-Assistenten für Antworten in sozialen Netzwerken und Messengern einrichten. Am zuverlässigsten funktioniert Automatisierung meist in Direktnachrichten, während Kommentare wegen Plattformregeln oft zusätzliche Regeln, Moderation oder einen teilmanuellen Ablauf brauchen.';
  }

  if (mentionsDm) {
    return 'Ja, ein AI-Bot lässt sich an Direktnachrichten in Kanälen wie Instagram, Facebook Messenger, WhatsApp oder Telegram anbinden. Er kann dort einfache Fragen beantworten, Anfragen vorqualifizieren und an einen Menschen übergeben, sobald das Thema spezieller oder sensibler wird.';
  }

  if (mentionsComments) {
    return 'Ja, auch Antworten in Kommentaren lassen sich teilweise automatisieren. In der Praxis hängt das aber stärker von den Regeln und Grenzen der jeweiligen Plattform ab, daher ist oft ein teilautomatischer Ablauf sinnvoller.';
  }

  return 'Ja, ein AI-Assistent kann nicht nur auf der Website, sondern auch in sozialen Netzwerken und Messengern eingesetzt werden. Typisch sind Antworten auf einfache Fragen, Basisinformationen, Termin- oder Anfrageaufnahme und die saubere Übergabe an einen Menschen, wenn es nötig wird.';
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

export const accuracyFallback: Record<AssistantLanguage, string> = {
  de: 'Ich möchte das korrekt beantworten. Ich kann Ihre Anfrage direkt weiterleiten, damit Sie eine präzise Antwort erhalten.',
  en: 'I want to answer this accurately. I can forward your request directly so you get a precise answer.',
  uk: 'Я хочу відповісти точно. Я можу одразу передати ваш запит, щоб ви отримали точну відповідь.',
};

const generalFallback: Record<AssistantLanguage, string> = {
  de: 'Ich kann auch allgemeine Fragen beantworten. Im lokalen Fallback-Modus ist mein Wissen aber begrenzt. Formulieren Sie die Frage gern etwas genauer.',
  en: 'I can also help with general questions. In local fallback mode my knowledge is limited, so feel free to phrase the question a bit more specifically.',
  uk: 'Я також можу допомагати із загальними питаннями. Але в локальному fallback-режимі мої знання обмежені, тож можна сформулювати запит трохи точніше.',
};

export const coerceLanguage = (input?: string | null): AssistantLanguage => {
  const normalized = normalize(input ?? '');
  if (normalized === 'en') return 'en';
  if (normalized === 'uk' || normalized === 'ua') return 'uk';
  return 'de';
};

export const detectLanguage = (input: string, fallback: AssistantLanguage = 'de'): AssistantLanguage => {
  if (!input.trim()) return fallback;
  if (UKRAINIAN_SIGNAL.test(input)) return 'uk';
  if (ENGLISH_SIGNAL.test(input)) return 'en';
  return fallback;
};

export const detectIntent = (text: string): AssistantIntent => {
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

export const buildContextBlock = (language: AssistantLanguage) => {
  const { services, faq, niches } = knowledgeByLanguage[language];
  return [
    'Services:',
    ...services.map(
      service =>
        `- ${service.title}: ${service.shortDescription} | price ${service.pricingFrom} | timeline ${service.timeline} | value ${service.businessValue}`
    ),
    'FAQ:',
    ...faq.map(entry => `- ${entry.question}: ${entry.answer}`),
    'Niches:',
    ...niches.map(niche => `- ${niche.title}: ${niche.summary} | examples ${niche.examples.join(', ')}`),
  ].join('\n');
};

const buildEstimate = (service: AssistantService, language: AssistantLanguage, enoughInfo: boolean) => {
  if (!enoughInfo) return service.estimateHint;
  const low = service.pricingNumericFrom;
  const high = Math.round(service.pricingNumericFrom * (service.pricingModel === 'monthly' ? 1.8 : 1.7));
  if (language === 'de') return `Grobe Orientierung: etwa ${low.toLocaleString('de-DE')} bis ${high.toLocaleString('de-DE')} EUR. ${service.estimateHint}`;
  if (language === 'uk') return `Груба рамка: приблизно ${low.toLocaleString('uk-UA')}-${high.toLocaleString('uk-UA')} EUR. ${service.estimateHint}`;
  return `Rough guide: about EUR ${low.toLocaleString('en-US')} to EUR ${high.toLocaleString('en-US')}. ${service.estimateHint}`;
};

export const generateLocalResponse = (messages: AssistantMessage[], language: AssistantLanguage): AssistantChatResponse => {
  const knowledge = knowledgeByLanguage[language];
  const lastUserMessage = [...messages].reverse().find(message => message.role === 'user');
  const lastUserContent = lastUserMessage?.content ?? '';
  const intent = detectIntent(lastUserContent);
  const matchedService = findByKeywords(knowledge.services, lastUserContent);
  const matchedNiche = findByKeywords(knowledge.niches, lastUserContent);
  const matchedFaq = findByKeywords(knowledge.faq, lastUserContent);
  const scope = summarizeScope(messages);
  const enoughInfo = scope.length > 40;

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
      answer: accuracyFallback[language],
      detectedLanguage: language,
      detectedIntent: 'handoff',
      confidence: 0.2,
      nextStep: 'handoff',
      leadPrompt: accuracyFallback[language],
      fallbackMode: true,
    };
  }

  if (intent === 'booking') {
    return {
      answer:
        language === 'de'
          ? 'Ich kann einen Terminwunsch aufnehmen. Bitte nennen Sie einfach ein passendes Datum und eine passende Uhrzeit in Europe/Berlin.'
          : language === 'uk'
            ? 'Я можу прийняти запит на дзвінок. Просто вкажіть зручну дату та час у Europe/Berlin.'
            : 'I can capture a booking request. Please share a suitable date and time in Europe/Berlin.',
      detectedLanguage: language,
      detectedIntent: 'booking',
      confidence: 0.92,
      nextStep: 'booking',
      bookingPrompt: 'booking',
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

  const socialAutomationAnswer = buildSocialAutomationAnswer(language, lastUserContent);
  if (socialAutomationAnswer) {
    return {
      answer: socialAutomationAnswer,
      detectedLanguage: language,
      detectedIntent: 'service_info',
      confidence: 0.86,
      nextStep: 'none',
      fallbackMode: true,
    };
  }

  if (matchedService && intent === 'pricing') {
    return {
      answer:
        language === 'de'
          ? `${matchedService.title} startet bei ${matchedService.pricingFrom}. ${buildEstimate(matchedService, language, enoughInfo)}`
          : language === 'uk'
            ? `${matchedService.title} стартує від ${matchedService.pricingFrom}. ${buildEstimate(matchedService, language, enoughInfo)}`
            : `${matchedService.title} starts at ${matchedService.pricingFrom}. ${buildEstimate(matchedService, language, enoughInfo)}`,
      detectedLanguage: language,
      detectedIntent: 'pricing',
      confidence: enoughInfo ? 0.84 : 0.7,
      nextStep: enoughInfo ? 'none' : 'lead',
      leadPrompt: enoughInfo ? undefined : 'lead',
      fallbackMode: true,
    };
  }

  if (matchedService && intent === 'timeline') {
    return {
      answer:
        language === 'de'
          ? `${matchedService.title} dauert meist ${matchedService.timeline}.`
          : language === 'uk'
            ? `${matchedService.title} зазвичай триває ${matchedService.timeline}.`
            : `${matchedService.title} usually takes ${matchedService.timeline}.`,
      detectedLanguage: language,
      detectedIntent: 'timeline',
      confidence: 0.84,
      nextStep: 'none',
      fallbackMode: true,
    };
  }

  if (matchedNiche) {
    return {
      answer:
        language === 'de'
          ? `${matchedNiche.title} passt gut. ${matchedNiche.summary} Beispiele: ${matchedNiche.examples.join(', ')}.`
          : language === 'uk'
            ? `Для напряму "${matchedNiche.title}" це добре підходить. ${matchedNiche.summary} Приклади: ${matchedNiche.examples.join(', ')}.`
            : `${matchedNiche.title} is a strong fit. ${matchedNiche.summary} Examples: ${matchedNiche.examples.join(', ')}.`,
      detectedLanguage: language,
      detectedIntent: 'niche_fit',
      confidence: 0.8,
      nextStep: 'none',
      fallbackMode: true,
    };
  }

  if (matchedService) {
    return {
      answer:
        language === 'de'
          ? `${matchedService.title}: ${matchedService.shortDescription} Startpreis ${matchedService.pricingFrom}, Zeitrahmen ${matchedService.timeline}.`
          : language === 'uk'
            ? `${matchedService.title}: ${matchedService.shortDescription} Стартова рамка ${matchedService.pricingFrom}, строк ${matchedService.timeline}.`
            : `${matchedService.title}: ${matchedService.shortDescription} Starting price ${matchedService.pricingFrom}, timeline ${matchedService.timeline}.`,
      detectedLanguage: language,
      detectedIntent: intent,
      confidence: 0.78,
      nextStep: intent === 'lead_capture' ? 'lead' : 'none',
      leadPrompt: intent === 'lead_capture' ? 'lead' : undefined,
      fallbackMode: true,
    };
  }

  if (matchedFaq) {
    return {
      answer: matchedFaq.answer,
      detectedLanguage: language,
      detectedIntent: matchedFaq.intent ?? intent,
      confidence: 0.74,
      nextStep: matchedFaq.intent === 'handoff' ? 'handoff' : 'none',
      leadPrompt: matchedFaq.intent === 'handoff' ? 'lead' : undefined,
      fallbackMode: true,
    };
  }

  return {
    answer: intent === 'service_info' ? generalFallback[language] : accuracyFallback[language],
    detectedLanguage: language,
    detectedIntent: intent === 'service_info' ? 'service_info' : 'handoff',
    confidence: intent === 'service_info' ? 0.52 : 0.34,
    nextStep: intent === 'service_info' ? 'none' : 'handoff',
    leadPrompt: intent === 'service_info' ? undefined : 'lead',
    fallbackMode: true,
  };
};
