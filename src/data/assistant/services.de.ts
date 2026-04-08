import type { AssistantService } from '../../features/ai-assistant/types';

export const servicesDe: AssistantService[] = [
  {
    id: 'website',
    title: 'Website erstellen',
    shortDescription:
      'Eine klare, schnelle Website mit Fokus auf Anfragen, Vertrauen und messbare Kontaktpunkte.',
    businessValue:
      'Ideal, wenn Ihr Unternehmen online professionell wirken und regelmäßig qualifizierte Anfragen erhalten soll.',
    pricingFrom: 'ab 2.490 EUR',
    pricingNumericFrom: 2490,
    pricingModel: 'one_time',
    timeline: 'ca. 2 bis 4 Wochen',
    estimateHint:
      'Ein realistischer Start liegt meist im Bereich der Basis-Website plus eventuellem Zusatzaufwand für Inhalte, Tracking oder Mehrsprachigkeit.',
    keywords: ['website', 'webseite', 'homepage', 'seite', 'neu', 'erstellen', 'landingpage'],
  },
  {
    id: 'redesign',
    title: 'Redesign',
    shortDescription:
      'Ein Relaunch für bestehende Websites mit besserer Struktur, stärkerem Vertrauen und klareren Conversion-Pfaden.',
    businessValue:
      'Sinnvoll, wenn bereits Traffic vorhanden ist, die Seite aber veraltet wirkt oder zu wenig Anfragen erzeugt.',
    pricingFrom: 'ab 1.690 EUR',
    pricingNumericFrom: 1690,
    pricingModel: 'one_time',
    timeline: 'ca. 1 bis 3 Wochen',
    estimateHint:
      'Der Umfang hängt vor allem davon ab, wie viele Seiten, Inhalte und technische Altlasten übernommen werden sollen.',
    keywords: ['redesign', 'relaunch', 'überarbeiten', 'ueberarbeiten', 'modernisieren'],
  },
  {
    id: 'ads',
    title: 'Ads',
    shortDescription:
      'Google Ads, Meta Ads oder lokale Kampagnen mit sauberem Tracking und Fokus auf qualifizierte Leads.',
    businessValue:
      'Gut geeignet, wenn planbare Nachfrage aufgebaut oder ein bestehender Funnel beschleunigt werden soll.',
    pricingFrom: 'ab 399 EUR/Monat plus Werbebudget',
    pricingNumericFrom: 399,
    pricingModel: 'monthly',
    timeline: 'Setup meist innerhalb von 5 bis 10 Werktagen',
    estimateHint:
      'Für Ads braucht es neben dem Setup auch ein passendes Werbebudget und saubere Conversion-Ziele.',
    keywords: ['ads', 'werbung', 'google ads', 'meta ads', 'kampagne', 'kampagnen'],
  },
  {
    id: 'ai-chatbot',
    title: 'AI-Chatbot',
    shortDescription:
      'Ein KI-Assistent für Website-Fragen, Lead-Qualifizierung, Terminwünsche und erste Projektanfragen.',
    businessValue:
      'Besonders sinnvoll, wenn Interessenten auch außerhalb der Bürozeiten schnell Antworten und einen klaren nächsten Schritt erhalten sollen.',
    pricingFrom: 'ab 2.990 EUR',
    pricingNumericFrom: 2990,
    pricingModel: 'one_time',
    timeline: 'ca. 2 bis 5 Wochen',
    estimateHint:
      'Der Rahmen hängt stark davon ab, wie viel Wissensbasis, Lead-Logik, Mehrsprachigkeit und Übergabe an Ihr Team eingebaut werden soll.',
    keywords: ['ai', 'ki', 'chatbot', 'assistant', 'assistent', 'automatisierung'],
  },
  {
    id: 'tracking',
    title: 'Tracking',
    shortDescription:
      'Sauberes Event-Tracking für Formulare, Anrufe, Buchungen und Kampagnen-Auswertung.',
    businessValue:
      'Wichtig, wenn Entscheidungen nicht mehr auf Bauchgefühl, sondern auf klaren Daten basieren sollen.',
    pricingFrom: 'ab 790 EUR',
    pricingNumericFrom: 790,
    pricingModel: 'one_time',
    timeline: 'ca. 3 bis 7 Werktage',
    estimateHint:
      'Der Aufwand steigt, wenn mehrere Systeme wie GA4, Meta, CRM oder serverseitiges Tracking zusammengeführt werden sollen.',
    keywords: ['tracking', 'analytics', 'ga4', 'pixel', 'messung', 'events'],
  },
  {
    id: 'support',
    title: 'Support',
    shortDescription:
      'Laufende Betreuung für kleine Änderungen, technische Pflege, Monitoring und Priorisierung.',
    businessValue:
      'Gut, wenn die Website nicht stillstehen soll und Updates zuverlässig umgesetzt werden sollen.',
    pricingFrom: 'ab 59 EUR/Monat',
    pricingNumericFrom: 59,
    pricingModel: 'monthly',
    timeline: 'laufend',
    estimateHint:
      'Der passende Support-Tarif richtet sich danach, wie häufig Inhalte, Kampagnen oder technische Themen anfallen.',
    keywords: ['support', 'betreuung', 'wartung', 'pflege', 'hilfe'],
  },
];
