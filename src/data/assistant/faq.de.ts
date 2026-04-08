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
