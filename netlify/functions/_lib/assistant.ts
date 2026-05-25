import { faqDe } from '../../../src/data/assistant/faq.de';
import { faqEn } from '../../../src/data/assistant/faq.en';
import { faqUk } from '../../../src/data/assistant/faq.uk';
import { nichesDe } from '../../../src/data/assistant/niches.de';
import { nichesEn } from '../../../src/data/assistant/niches.en';
import { nichesUk } from '../../../src/data/assistant/niches.uk';
import { servicesDe } from '../../../src/data/assistant/services.de';
import { servicesEn } from '../../../src/data/assistant/services.en';
import { servicesUk } from '../../../src/data/assistant/services.uk';
import { getWebsitePricingReference } from '../../../src/data/pricingCatalog';
import type {
  AssistantChatResponse,
  AssistantBookingContext,
  AssistantIntent,
  AssistantKnowledgeBundle,
  AssistantLanguage,
  AssistantLeadPayload,
  AssistantMessage,
  AssistantService,
} from '../../../src/features/ai-assistant/types';

const ENGLISH_SIGNAL = /\b(website|price|pricing|quote|book|booking|call|support|ads|tracking|chatbot|timeline|estimate|project)\b/i;
const UKRAINIAN_SIGNAL = /[іїєґІЇЄҐ]/;
const HIGH_RISK_KEYWORDS = ['legal', 'vertrag', 'contract', 'medical', 'steuer', 'tax', 'lawyer', 'anwalt'];
const LEGAL_ESCALATION_KEYWORDS = [
  'dsgvo',
  'datenschutz',
  'privacy policy',
  'privacy notice',
  'compliance',
  'rechtlich',
  'juristisch',
  'юридич',
  'правов',
  'конфіденцій',
];
const AUDIT_ESCALATION_KEYWORDS = [
  'audit',
  'account blocked',
  'blocked account',
  'suspended account',
  'suspension',
  'banned account',
  'site audit',
  'ads audit',
  'tracking audit',
  'existing site problem',
  'current site issue',
  'google ads issue',
  'meta ads issue',
  'problem with account',
  'акаунт заблок',
  'акаунт блок',
  'блокування акаун',
  'аудит',
  'існуючий сайт',
  'проблема з акаунтом',
  'проблема з рекламою',
];
const ACCESS_ESCALATION_KEYWORDS = [
  'login',
  'password',
  'credentials',
  'access',
  'admin access',
  'billing account',
  'payment account',
  '2fa',
  'otp',
  'zugang',
  'zugänge',
  'dostup',
  'логін',
  'пароль',
  'доступ',
  'платіжний акаунт',
  'платежный аккаунт',
];
const URGENT_ESCALATION_KEYWORDS = ['urgent', 'asap', 'immediately', 'right now', 'dringend', 'sofort', 'eilig', 'терміново', 'негайно'];
const ENTERPRISE_ESCALATION_KEYWORDS = ['enterprise', 'large budget', 'big budget', 'high budget', 'grosses budget', 'großes budget', 'великий бюджет'];
const COMPLAINT_ESCALATION_KEYWORDS = [
  'complaint',
  'refund',
  'angry',
  'bad review',
  'negative review',
  'unhappy',
  'скарга',
  'негатив',
  'незадоволен',
  'повернення коштів',
];
const GREY_SCHEME_KEYWORDS = [
  'spam',
  'mass dm',
  'bulk dm',
  'cold dm',
  'mass message',
  'mass messaging',
  'scraping',
  'scrape',
  'fake review',
  'fake engagement',
  'bot farm',
  'black hat',
  'grey hat',
  'gray hat',
  'накрут',
  'спам',
  'масова розсилка',
  'сірі схем',
];
const COMPLEX_INTEGRATION_KEYWORDS = [
  'complex integration',
  'custom api',
  'custom integration',
  'erp',
  'sap',
  'sso',
  'single sign-on',
  'multi-step integration',
  'складна інтеграція',
  'нестандартна інтеграція',
];
const PRICING_KEYWORDS = ['preis', 'preise', 'kosten', 'pricing', 'cost', 'quote', 'angebot', 'вартість', 'ціна'];
const TIMELINE_KEYWORDS = ['dauer', 'timeline', 'zeit', 'wie lange', 'launch', 'строк', 'коли'];
const BOOKING_KEYWORDS = [
  'termin',
  'booking',
  'call',
  'meeting',
  'appointment',
  'treffen',
  'zu treffen',
  'sich treffen',
  'beratung',
  'erstgespräch',
  'erstgespraech',
  'gespräch',
  'gespraech',
  'telefonat',
  'telefonieren',
  'anrufen',
  'besprechung',
  'kennenlernen',
  'kennenlerngespräch',
  'kennenlerngespraech',
  'дзвінок',
  'зустріч',
  'запис',
  'термін',
  'назначити',
  'призначити',
  'забронювати',
  'домовитись',
  'домовитися',
];
const HANDOFF_KEYWORDS = [
  'mensch',
  'human',
  'jemand',
  'mitarbeiter',
  'manager',
  'людина',
  'людиною',
  'поговорити з людиною',
  'поговорити',
  'менеджер',
];
const LEAD_KEYWORDS = [
  'angebot',
  'anfrage',
  'contact',
  'lead',
  'projekt',
  'проєкт',
  'заявка',
  'контакт',
  'зв’яз',
  'звʼяз',
  "зв'яз",
  'звяж',
  'зв яз',
  'звʼяж',
  'зв’яж',
];
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
const INSTAGRAM_KEYWORDS = ['instagram', 'insta', 'інстаграм'];
const FACEBOOK_KEYWORDS = ['facebook', 'messenger', 'meta', 'фейсбук', 'месенджер'];
const WHATSAPP_KEYWORDS = ['whatsapp', 'whats app', 'ватсап', 'ватцап'];
const TELEGRAM_KEYWORDS = ['telegram', 'телеграм'];
const PUBLISHING_KEYWORDS = [
  'publish',
  'publishing',
  'posting',
  'post',
  'posts',
  'autopost',
  'auto post',
  'publication',
  'публікац',
  'постинг',
  'пости',
  'автопост',
  'постити',
];
const TECHNOLOGY_QUESTION_KEYWORDS = [
  'technology',
  'technologies',
  'tech stack',
  'stack',
  'framework',
  'frameworks',
  'tools',
  'what do you use',
  'technologie',
  'technologien',
  'tech-stack',
  'технолог',
  'стек',
  'фреймворк',
  'інструмент',
  'що використовуєте',
  'які технології',
];
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

const findByKeywords = <T extends { keywords: string[] }>(items: T[], text: string) => {
  const source = normalize(text);
  const matches = items
    .map(item => {
      const bestKeyword = item.keywords
        .map(keyword => normalize(keyword))
        .filter(keyword => source.includes(keyword))
        .sort((a, b) => b.length - a.length)[0];

      return bestKeyword ? { item, score: bestKeyword.length } : null;
    })
    .filter((match): match is { item: T; score: number } => Boolean(match));

  return matches.sort((a, b) => b.score - a.score)[0]?.item;
};

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

const shouldEscalateToHuman = (text: string) => {
  const source = normalize(text);
  const escalationGroups = [
    HIGH_RISK_KEYWORDS,
    LEGAL_ESCALATION_KEYWORDS,
    AUDIT_ESCALATION_KEYWORDS,
    ACCESS_ESCALATION_KEYWORDS,
    URGENT_ESCALATION_KEYWORDS,
    ENTERPRISE_ESCALATION_KEYWORDS,
    COMPLAINT_ESCALATION_KEYWORDS,
    GREY_SCHEME_KEYWORDS,
    COMPLEX_INTEGRATION_KEYWORDS,
    HANDOFF_KEYWORDS,
  ];

  return escalationGroups.some(group => group.some(keyword => source.includes(keyword)));
};

const buildPreciseHandoffAnswer = (language: AssistantLanguage) => {
  if (language === 'uk') {
    return 'Щоб дати вам точну відповідь, я передам запит спеціалісту. Залиште, будь ласка, ваш email або номер телефону, і ми зв’яжемося з вами.';
  }

  if (language === 'en') {
    return 'To give you an accurate answer, I will forward your request to a specialist. Please leave your email or phone number, and we will get back to you.';
  }

  return 'Damit wir Ihnen eine präzise Antwort geben können, leite ich die Anfrage an einen Spezialisten weiter. Bitte hinterlassen Sie Ihre E-Mail oder Telefonnummer, und wir melden uns bei Ihnen.';
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

const buildTechnologyAnswer = (language: AssistantLanguage, text: string) => {
  const source = normalize(text);
  if (!TECHNOLOGY_QUESTION_KEYWORDS.some(keyword => source.includes(keyword))) return null;

  if (language === 'uk') {
    return [
      'Так, можу зорієнтувати по технологіях. Для сайтів і веб-додатків зазвичай підходять React, TypeScript, Vite, Node.js/Netlify Functions, інтеграції з CRM, email, Google Sheets/Calendar, Firebase або іншими API.',
      'Для AI-функцій можна підключати OpenAI API, базу знань, форми збору лідів, booking-flow і передачу заявки людині.',
      'Точний стек залежить від задачі: простий сайт, lead-система, кабінет, реклама, tracking або AI-асистент.',
    ].join(' ');
  }

  if (language === 'en') {
    return [
      'Yes, I can help with the technology side. For websites and web apps, a typical stack is React, TypeScript, Vite, Node.js/Netlify Functions, CRM, email, Google Sheets/Calendar, Firebase, or other API integrations.',
      'For AI features, OpenAI API, a knowledge base, lead capture forms, booking flows, and human handoff can be connected.',
      'The exact stack depends on whether you need a simple site, lead system, dashboard, ads/tracking setup, or an AI assistant.',
    ].join(' ');
  }

  return [
    'Ja, ich kann bei der Technologie-Auswahl helfen. Für Websites und Web-Apps passt oft React, TypeScript, Vite, Node.js/Netlify Functions, CRM, E-Mail, Google Sheets/Calendar, Firebase oder andere API-Integrationen.',
    'Für AI-Funktionen lassen sich OpenAI API, Wissensbasis, Lead-Formulare, Booking-Flows und Übergabe an einen Menschen anbinden.',
    'Der genaue Stack hängt davon ab, ob es um eine einfache Website, ein Lead-System, Dashboard, Ads/Tracking oder einen AI-Assistenten geht.',
  ].join(' ');
};

const buildSocialAutomationAnswer = (language: AssistantLanguage, text: string) => {
  const source = normalize(text);
  const mentionsSocial = SOCIAL_MEDIA_KEYWORDS.some(keyword => source.includes(keyword));
  if (!mentionsSocial) return null;

  const mentionsDm = SOCIAL_DM_KEYWORDS.some(keyword => source.includes(keyword));
  const mentionsComments = SOCIAL_COMMENT_KEYWORDS.some(keyword => source.includes(keyword));
  const mentionsInstagram = INSTAGRAM_KEYWORDS.some(keyword => source.includes(keyword));
  const mentionsFacebook = FACEBOOK_KEYWORDS.some(keyword => source.includes(keyword));
  const mentionsWhatsApp = WHATSAPP_KEYWORDS.some(keyword => source.includes(keyword));
  const mentionsTelegram = TELEGRAM_KEYWORDS.some(keyword => source.includes(keyword));
  const mentionsPublishing = PUBLISHING_KEYWORDS.some(keyword => source.includes(keyword));

  if (language === 'uk') {
    const lines = [
      'Так, ми можемо автоматизувати частину роботи в соцмережах, але в межах офіційних можливостей платформ і без ризикових "сірих" рішень.',
      '',
      'Що реально можна автоматизувати:',
      '- автовідповіді на часті питання в DM і месенджерах;',
      '- первинну кваліфікацію лідів: що потрібно, який бізнес, бюджет, термін, зручний час;',
      '- збір заявок і передачу в email, CRM, Google Sheets або календар;',
      '- маршрутизацію: прості запити обробляє бот, складні або нестандартні переходять людині;',
    ];

    if (mentionsComments || (!mentionsDm && !mentionsPublishing)) {
      lines.push('- контрольовані сценарії для коментарів там, де це підтримується платформою.');
    }

    if (mentionsPublishing) {
      lines.push('- підготовку текстів, шаблонів і планування публікацій, але не масовий спам або агресивний автодирект.');
    }

    lines.push('', 'Що важливо по платформах:');

    if (mentionsInstagram || mentionsFacebook || (!mentionsWhatsApp && !mentionsTelegram)) {
      lines.push(
        '- Instagram / Facebook Messenger: найкраще працювати через офіційні інтеграції Meta API. Для Instagram зазвичай йдеться про Professional account, відповіді в DM, FAQ, кваліфікацію ліда та приватні відповіді на коментарі там, де це підтримується платформою.'
      );
    }

    if (mentionsWhatsApp || (!mentionsInstagram && !mentionsFacebook && !mentionsTelegram)) {
      lines.push(
        '- WhatsApp Business Platform: звичайні відповіді добре працюють у межах відкритого 24-годинного вікна після повідомлення клієнта. Поза ним зазвичай можна писати лише template messages.'
      );
    }

    if (mentionsTelegram || (!mentionsInstagram && !mentionsFacebook && !mentionsWhatsApp)) {
      lines.push(
        '- Telegram: бот може відповідати, збирати дані й передавати заявки, але користувач має спочатку сам почати взаємодію з ботом. Просто так першим бот не пише.'
      );
    }

    if (mentionsComments) {
      lines.push(
        '- Коментарі: тут не варто обіцяти "повну магію". Найчастіше це або private replies, або напівавтоматичний сценарій з правилами й модерацією.'
      );
    }

    if (mentionsPublishing) {
      lines.push(
        '- Автопублікація: підготовка та планування контенту можливі, але офіційна автопублікація залежить від конкретної платформи й типу акаунта.'
      );
    }

    lines.push(
      '',
      'Практично це виглядає так: клієнт пише, бот відповідає на типові питання, ставить 2-5 уточнень, збирає заявку й передає її вам або переводить діалог на людину.'
    );

    return lines.join('\n');
  }

  if (language === 'en') {
    const lines = [
      'Yes, we can automate part of the workload in social channels, but only within official platform capabilities and without risky grey-hat setups.',
      '',
      'What can usually be automated:',
      '- auto-replies to frequent questions in DMs and messengers;',
      '- early lead qualification such as need, business type, budget, timing, and preferred contact;',
      '- structured lead capture into email, CRM, Google Sheets, or a calendar;',
      '- routing: simple questions stay with the bot, more specific or sensitive ones go to a person;',
    ];

    if (mentionsComments || (!mentionsDm && !mentionsPublishing)) {
      lines.push('- controlled comment workflows where the platform supports them.');
    }

    if (mentionsPublishing) {
      lines.push('- content drafting, templates, and scheduling support, but not mass spam or aggressive auto-DM tactics.');
    }

    lines.push('', 'Important platform limits:');

    if (mentionsInstagram || mentionsFacebook || (!mentionsWhatsApp && !mentionsTelegram)) {
      lines.push(
        '- Instagram / Facebook Messenger: the clean approach is through official Meta APIs. For Instagram this usually means Professional accounts, DM handling, FAQ flows, lead qualification, and private replies to comments where supported.'
      );
    }

    if (mentionsWhatsApp || (!mentionsInstagram && !mentionsFacebook && !mentionsTelegram)) {
      lines.push(
        '- WhatsApp Business Platform: standard replies work best inside the open 24-hour customer service window after the user message. Outside that window, you usually need approved template messages.'
      );
    }

    if (mentionsTelegram || (!mentionsInstagram && !mentionsFacebook && !mentionsWhatsApp)) {
      lines.push(
        '- Telegram: the bot can reply, collect data, and forward leads, but the user has to start the interaction first. A bot does not just message private users out of nowhere.'
      );
    }

    if (mentionsComments) {
      lines.push(
        '- Comments: this should not be framed as unlimited automation. In practice it is often private replies or semi-automated moderation with clear rules.'
      );
    }

    if (mentionsPublishing) {
      lines.push(
        '- Publishing: content planning is possible, but official auto-publishing still depends on the specific platform and account type.'
      );
    }

    lines.push(
      '',
      'In practice the flow is: the customer writes, the bot answers routine questions, asks 2 to 5 clarifying questions, captures the lead, and either forwards it to you or hands the conversation to a person.'
    );

    return lines.join('\n');
  }

  const lines = [
    'Ja, wir können einen Teil der Arbeit in sozialen Netzwerken automatisieren, aber nur innerhalb der offiziellen Plattformregeln und ohne riskante Grauzonen-Lösungen.',
    '',
    'Was sich typischerweise automatisieren lässt:',
    '- automatische Antworten auf häufige Fragen in Direktnachrichten und Messengern;',
    '- erste Lead-Qualifizierung wie Bedarf, Branche, Budget, Timing und Kontaktwunsch;',
    '- strukturierte Übergabe an E-Mail, CRM, Google Sheets oder Kalender;',
    '- Routing: einfache Fragen beantwortet der Bot, komplexere oder sensible Fälle übernimmt ein Mensch;',
  ];

  if (mentionsComments || (!mentionsDm && !mentionsPublishing)) {
    lines.push('- kontrollierte Abläufe für Kommentare dort, wo die Plattform das unterstützt.');
  }

  if (mentionsPublishing) {
    lines.push('- Content-Vorbereitung, Vorlagen und Planung, aber kein Massen-Spam und kein aggressiver Auto-Direktversand.');
  }

  lines.push('', 'Wichtige Plattformgrenzen:');

  if (mentionsInstagram || mentionsFacebook || (!mentionsWhatsApp && !mentionsTelegram)) {
    lines.push(
      '- Instagram / Facebook Messenger: sinnvoll ist die offizielle Anbindung über Meta APIs. Bei Instagram geht es meist um Professional Accounts, Direktnachrichten, FAQ-Abläufe, Lead-Qualifizierung und private Antworten auf Kommentare, soweit die Plattform das unterstützt.'
    );
  }

  if (mentionsWhatsApp || (!mentionsInstagram && !mentionsFacebook && !mentionsTelegram)) {
    lines.push(
      '- WhatsApp Business Platform: normale Antworten funktionieren vor allem innerhalb des offenen 24-Stunden-Fensters nach der Nachricht des Nutzers. Außerhalb davon sind meist nur Template Messages zulässig.'
    );
  }

  if (mentionsTelegram || (!mentionsInstagram && !mentionsFacebook && !mentionsWhatsApp)) {
    lines.push(
      '- Telegram: der Bot kann antworten, Daten sammeln und Leads weitergeben, aber der Nutzer muss die Interaktion zuerst selbst starten. Ein Bot schreibt Privatnutzer nicht einfach ungefragt an.'
    );
  }

  if (mentionsComments) {
    lines.push(
      '- Kommentare: Das sollte nicht als grenzenlose Vollautomatisierung verkauft werden. In der Praxis sind es oft private Replies oder teilautomatische Moderationsabläufe mit klaren Regeln.'
    );
  }

  if (mentionsPublishing) {
    lines.push(
      '- Publishing: Planung und Vorbereitung sind möglich, offizielle Auto-Veröffentlichung hängt aber von Plattform und Account-Typ ab.'
    );
  }

  lines.push(
    '',
    'Praktisch läuft es so: Der Kunde schreibt, der Bot beantwortet Standardfragen, stellt 2 bis 5 Rückfragen, erfasst den Lead und übergibt dann sauber an Ihr Team oder an eine reale Person.'
  );

  return lines.join('\n');
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
  if (shouldEscalateToHuman(source)) return 'handoff';
  if (BOOKING_KEYWORDS.some(keyword => source.includes(keyword))) return 'booking';
  if (LEAD_KEYWORDS.some(keyword => source.includes(keyword))) return 'lead_capture';
  if (PRICING_KEYWORDS.some(keyword => source.includes(keyword))) return 'pricing';
  if (TIMELINE_KEYWORDS.some(keyword => source.includes(keyword))) return 'timeline';
  if (NICHE_KEYWORDS.some(keyword => source.includes(keyword))) return 'niche_fit';
  return 'service_info';
};

export const buildContextBlock = (language: AssistantLanguage) => {
  const { services, faq, niches } = knowledgeByLanguage[language];
  return [
    'Pricing reference:',
    getWebsitePricingReference(language),
    'Use only these current pricing values for website packages, configurator ranges, support, ads setup, tracking, and AI lead qualification.',
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
  const low = service.estimateRange?.from ?? service.pricingNumericFrom;
  const high =
    service.estimateRange?.to ?? Math.round(service.pricingNumericFrom * (service.pricingModel === 'monthly' ? 1.8 : 1.7));
  if (language === 'de') return `Grobe Orientierung: etwa ${low.toLocaleString('de-DE')} bis ${high.toLocaleString('de-DE')} EUR. ${service.estimateHint}`;
  if (language === 'uk') return `Груба рамка: приблизно ${low.toLocaleString('uk-UA')}-${high.toLocaleString('uk-UA')} EUR. ${service.estimateHint}`;
  return `Rough guide: about EUR ${low.toLocaleString('en-US')} to EUR ${high.toLocaleString('en-US')}. ${service.estimateHint}`;
};

const buildGeneralPricingAnswer = (language: AssistantLanguage) => getWebsitePricingReference(language);

export const generateLocalResponse = (
  messages: AssistantMessage[],
  language: AssistantLanguage,
  context?: {
    leadContext?: Partial<AssistantLeadPayload>;
    bookingContext?: AssistantBookingContext;
  }
): AssistantChatResponse => {
  const knowledge = knowledgeByLanguage[language];
  const lastUserMessage = [...messages].reverse().find(message => message.role === 'user');
  const lastUserContent = lastUserMessage?.content ?? '';
  const intent = detectIntent(lastUserContent);
  const matchedService = findByKeywords(knowledge.services, lastUserContent);
  const matchedNiche = findByKeywords(knowledge.niches, lastUserContent);
  const matchedFaq = findByKeywords(knowledge.faq, lastUserContent);
  const scope = summarizeScope(messages);
  const enoughInfo =
    scope.length > 40 ||
    Boolean(context?.leadContext?.businessType?.trim()) ||
    Boolean(context?.bookingContext?.businessType?.trim());

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

  if (shouldEscalateToHuman(lastUserContent)) {
    return {
      answer: buildPreciseHandoffAnswer(language),
      detectedLanguage: language,
      detectedIntent: 'handoff',
      confidence: 0.2,
      nextStep: 'handoff',
      leadPrompt: buildPreciseHandoffAnswer(language),
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

  if (intent === 'lead_capture') {
    return {
      answer:
        language === 'de'
          ? 'Gerne. Sie können Ihre Kontaktdaten und kurz Ihr Anliegen hinterlassen, dann melden wir uns mit dem passenden nächsten Schritt.'
          : language === 'uk'
            ? 'Звичайно. Ви можете залишити контактні дані й коротко описати задачу, а ми зв’яжемося з вами та підкажемо наступний крок.'
            : 'Of course. You can leave your contact details and briefly describe what you need, and we will get back to you with the right next step.',
      detectedLanguage: language,
      detectedIntent: 'lead_capture',
      confidence: 0.86,
      nextStep: 'lead',
      leadPrompt: 'lead',
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

  const technologyAnswer = buildTechnologyAnswer(language, lastUserContent);
  if (technologyAnswer) {
    return {
      answer: technologyAnswer,
      detectedLanguage: language,
      detectedIntent: 'service_info',
      confidence: 0.84,
      nextStep: 'none',
      fallbackMode: true,
    };
  }

  if (matchedService && intent === 'pricing') {
    return {
      answer:
        language === 'de'
          ? `${matchedService.title}: ${matchedService.pricingFrom}. ${buildEstimate(matchedService, language, enoughInfo)}`
          : language === 'uk'
            ? `${matchedService.title}: ${matchedService.pricingFrom}. ${buildEstimate(matchedService, language, enoughInfo)}`
            : `${matchedService.title}: ${matchedService.pricingFrom}. ${buildEstimate(matchedService, language, enoughInfo)}`,
      detectedLanguage: language,
      detectedIntent: 'pricing',
      confidence: enoughInfo ? 0.84 : 0.7,
      nextStep: enoughInfo ? 'none' : 'lead',
      leadPrompt: enoughInfo ? undefined : 'lead',
      fallbackMode: true,
    };
  }

  if (intent === 'pricing') {
    return {
      answer: buildGeneralPricingAnswer(language),
      detectedLanguage: language,
      detectedIntent: 'pricing',
      confidence: 0.86,
      nextStep: 'none',
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
      nextStep: 'none',
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
