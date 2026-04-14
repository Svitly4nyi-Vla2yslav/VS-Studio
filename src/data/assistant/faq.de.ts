import type { AssistantFaqEntry } from '../../features/ai-assistant/types';

export const faqDe: AssistantFaqEntry[] = [
  {
    id: 'response-time',
    question: 'Wie schnell antwortet der Assistent?',
    answer:
      'Der Assistent kann Anfragen rund um die Uhr vorsortieren, erste Fragen beantworten und Terminwünsche aufnehmen. Bei unklaren oder sensiblen Themen wird an einen Menschen übergeben.',
    intent: 'service_info',
    keywords: ['24/7', 'antwort', 'reagiert', 'wie schnell', 'verfügbar', 'verfuegbar'],
  },
  {
    id: 'business-value',
    question: 'Welchen Nutzen hat ein AI-Assistent für mein Unternehmen?',
    answer:
      'Ein guter AI-Assistent reduziert Reibung im Erstkontakt, beantwortet Standardfragen sofort, sammelt Leads strukturiert und sorgt dafür, dass weniger Anfragen verloren gehen.',
    intent: 'service_info',
    keywords: ['nutzen', 'vorteil', 'business value', 'warum', 'wofür', 'wofuer'],
  },
  {
    id: 'platforms',
    question: 'Welche Plattformen unterstützen Sie für Automatisierung?',
    answer:
      'In Phase 1 stehen meist Instagram DM, Facebook Messenger, WhatsApp Business, Telegram und Website-Chat im Fokus. In Phase 2 kommen Formulare, E-Mail-Routing, CRM, Google Sheets und Google Calendar Integrationen dazu.',
    intent: 'service_info',
    keywords: ['plattformen', 'instagram', 'messenger', 'whatsapp', 'telegram', 'website chat'],
  },
  {
    id: 'languages',
    question: 'Kann der Assistent auf Deutsch, Englisch oder Ukrainisch antworten?',
    answer:
      'Ja. Deutsch ist Standard, Englisch oder Ukrainisch können bei Bedarf ergänzt werden. Der genaue Sprachumfang hängt vom Setup und der Wissensbasis ab.',
    intent: 'service_info',
    keywords: ['deutsch', 'englisch', 'ukrainisch', 'sprache', 'mehrsprachig'],
  },
  {
    id: 'calendar-map',
    question: 'Kann man eine Karte oder einen Kalender in die Website einbinden?',
    answer:
      'Ja. Karten, Buchungs-Widgets und Kalender lassen sich meist per Embed, Widget oder API integrieren, je nach Tool und gewünschter Logik.',
    intent: 'service_info',
    keywords: ['karte', 'kalender', 'buchungs widget', 'embed', 'google maps', 'calendly'],
  },
  {
    id: 'lead-capture',
    question: 'Kann der Bot Leads automatisch erfassen?',
    answer:
      'Ja. Der Assistent kann einige Qualifizierungsfragen stellen, die Anfrage strukturiert erfassen und an E-Mail, CRM, Google Sheets oder einen Buchungsablauf übergeben.',
    intent: 'lead_capture',
    keywords: ['leads erfassen', 'lead capture', 'anfrage automatisch', 'crm', 'google sheets'],
  },
  {
    id: 'website-editing',
    question: 'Kann ich Inhalte später selbst bearbeiten?',
    answer:
      'In der Regel ja. Das hängt vom Projektaufbau ab, aber typische Bereiche für Texte, Bilder und häufige Updates lassen sich meist so vorbereiten, dass Sie später nicht für jede Kleinigkeit abhängig sind.',
    intent: 'service_info',
    keywords: ['inhalte bearbeiten', 'texte ändern', 'cms', 'selbst pflegen', 'website verwalten'],
  },
  {
    id: 'mobile-friendly',
    question: 'Ist die Website für Mobilgeräte optimiert?',
    answer:
      'Ja. Eine Website sollte sauber auf Smartphone, Tablet und Desktop funktionieren, damit Kontakt- oder Buchungswege auf allen Geräten klar bleiben.',
    intent: 'service_info',
    keywords: ['mobil', 'handy', 'responsive', 'mobile friendly', 'tablet'],
  },
  {
    id: 'seo',
    question: 'Ist SEO enthalten?',
    answer:
      'Die technischen und strukturellen SEO-Grundlagen können enthalten sein, etwa saubere Seitenstruktur, Metadaten, Performance-Basis und indexierbarer Content. Größere SEO-Arbeit hängt meist vom Umfang ab.',
    intent: 'service_info',
    keywords: ['seo', 'google ranking', 'metadaten', 'suchmaschinenoptimierung'],
  },
  {
    id: 'hosting-domain',
    question: 'Helfen Sie bei Hosting und Domain?',
    answer:
      'Ja, das kann in der Regel mitbetreut werden. Der genaue Umfang hängt davon ab, ob eine neue Domain, ein Umzug, E-Mail-Setup oder laufende Wartung gebraucht wird.',
    intent: 'service_info',
    keywords: ['hosting', 'domain', 'dns', 'server', 'umzug', 'migration'],
  },
  {
    id: 'dsgvo',
    question: 'Wird die Website DSGVO-freundlich aufgebaut?',
    answer:
      'Ein DSGVO-bewusstes technisches Setup ist möglich, aber rechtlich verbindliche Bewertungen sollten bei sensiblen Fällen mit einem qualifizierten Spezialisten abgestimmt werden.',
    intent: 'handoff',
    keywords: ['dsgvo', 'gdpr', 'datenschutz', 'privacy', 'compliance'],
  },
  {
    id: 'handoff',
    question: 'Was passiert bei Unsicherheit?',
    answer:
      'Wenn die Sicherheit niedrig ist oder wichtige Informationen fehlen, sagt der Assistent das offen und bietet eine direkte Weiterleitung an einen Menschen an.',
    intent: 'handoff',
    keywords: ['unsicher', 'mensch', 'mitarbeiter', 'weiterleiten', 'eskalation', 'handoff'],
  },
  {
    id: 'estimate',
    question: 'Kann der Assistent ein Angebot machen?',
    answer:
      'Er kann nur eine grobe Ersteinschätzung geben. Für eine belastbare Kalkulation werden Unternehmensart, gewünschte Leistung und der konkrete Bedarf benötigt.',
    intent: 'pricing',
    keywords: ['angebot', 'kostenvoranschlag', 'preis', 'schätzung', 'schaetzung'],
  },
  {
    id: 'booking',
    question: 'Kann der Assistent Termine anfragen?',
    answer:
      'Ja. Der Assistent kann einen Terminwunsch aufnehmen, die gewünschten Daten prüfen und eine strukturierte Anfrage an Ihr Team weitergeben.',
    intent: 'booking',
    keywords: ['termin', 'call', 'buchen', 'meeting', 'erstgespräch', 'erstgespraech'],
  },
];
