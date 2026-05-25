import type { AssistantService } from '../../features/ai-assistant/types';
import { WEBSITE_PRICING_PACKAGES, getPackageRange } from '../pricingCatalog';

export const servicesDe: AssistantService[] = [
  {
    id: 'website',
    title: 'Website erstellen',
    shortDescription:
      'Eine klare, schnelle Website mit Fokus auf Anfragen, Vertrauen und messbare Kontaktpunkte.',
    businessValue:
      'Ideal, wenn Ihr Unternehmen online professionell wirken und regelmäßig qualifizierte Anfragen erhalten soll.',
    pricingFrom: `ab EUR ${WEBSITE_PRICING_PACKAGES.starter.priceFrom}`,
    pricingNumericFrom: WEBSITE_PRICING_PACKAGES.starter.priceFrom,
    pricingModel: 'one_time',
    estimateRange: getPackageRange('starter'),
    timeline: 'ca. 2 bis 4 Wochen',
    estimateHint:
      `Auf der Pricing-Seite liegt Starter meist bei EUR ${WEBSITE_PRICING_PACKAGES.starter.rangeFrom}-${WEBSITE_PRICING_PACKAGES.starter.rangeTo}; mit mehr Umfang passt Business ab EUR ${WEBSITE_PRICING_PACKAGES.business.priceFrom}. Der Configurator zeigt nach Auswahl der Parameter EUR 600-900.`,
    keywords: ['website', 'webseite', 'homepage', 'seite', 'neu', 'erstellen', 'landingpage'],
  },
  {
    id: 'redesign',
    title: 'Redesign',
    shortDescription:
      'Ein Relaunch für bestehende Websites mit besserer Struktur, stärkerem Vertrauen und klareren Conversion-Pfaden.',
    businessValue:
      'Sinnvoll, wenn bereits Traffic vorhanden ist, die Seite aber veraltet wirkt oder zu wenig Anfragen erzeugt.',
    pricingFrom: `ab EUR ${WEBSITE_PRICING_PACKAGES.business.priceFrom}`,
    pricingNumericFrom: WEBSITE_PRICING_PACKAGES.business.priceFrom,
    pricingModel: 'one_time',
    estimateRange: getPackageRange('business'),
    timeline: 'ca. 1 bis 3 Wochen',
    estimateHint:
      `Der Umfang hängt vor allem davon ab, wie viele Seiten, Inhalte und technische Altlasten übernommen werden sollen. Der Business-Rahmen auf der Pricing-Seite liegt meist bei EUR ${WEBSITE_PRICING_PACKAGES.business.rangeFrom}-${WEBSITE_PRICING_PACKAGES.business.rangeTo}.`,
    keywords: ['redesign', 'relaunch', 'überarbeiten', 'ueberarbeiten', 'modernisieren'],
  },
  {
    id: 'ads',
    title: 'Ads',
    shortDescription:
      'Google Ads, Meta Ads oder lokale Kampagnen mit sauberem Tracking und Fokus auf qualifizierte Leads.',
    businessValue:
      'Gut geeignet, wenn planbare Nachfrage aufgebaut oder ein bestehender Funnel beschleunigt werden soll.',
    pricingFrom: `ab EUR ${WEBSITE_PRICING_PACKAGES.pro.priceFrom} plus Werbebudget`,
    pricingNumericFrom: WEBSITE_PRICING_PACKAGES.pro.priceFrom,
    pricingModel: 'one_time',
    estimateRange: getPackageRange('pro'),
    timeline: 'Setup meist innerhalb von 5 bis 10 Werktagen',
    estimateHint:
      `Für Ads braucht es neben dem Setup auch ein passendes Werbebudget und saubere Conversion-Ziele. Auf der Pricing-Seite ist Ads im Pro-Paket ab EUR ${WEBSITE_PRICING_PACKAGES.pro.priceFrom} enthalten.`,
    keywords: ['ads', 'werbung', 'google ads', 'meta ads', 'kampagne', 'kampagnen'],
  },
  {
    id: 'ai-chatbot',
    title: 'AI-Chatbot',
    shortDescription:
      'Ein KI-Assistent für Website-Fragen, Lead-Qualifizierung, Terminwünsche und erste Projektanfragen.',
    businessValue:
      'Besonders sinnvoll, wenn Interessenten auch außerhalb der Bürozeiten schnell Antworten und einen klaren nächsten Schritt erhalten sollen.',
    pricingFrom: `ab EUR ${WEBSITE_PRICING_PACKAGES.pro.priceFrom}`,
    pricingNumericFrom: WEBSITE_PRICING_PACKAGES.pro.priceFrom,
    pricingModel: 'one_time',
    estimateRange: getPackageRange('pro'),
    timeline: 'ca. 2 bis 5 Wochen',
    estimateHint:
      `Der Rahmen hängt davon ab, wie viel Wissensbasis, Lead-Logik, Mehrsprachigkeit und Übergabe eingebaut werden soll. Auf der Pricing-Seite ist KI-Lead-Qualifizierung im Pro-Paket ab EUR ${WEBSITE_PRICING_PACKAGES.pro.priceFrom} enthalten.`,
    keywords: ['ai', 'ki', 'chatbot', 'assistant', 'assistent', 'automatisierung'],
  },
  {
    id: 'tracking',
    title: 'Tracking',
    shortDescription:
      'Sauberes Event-Tracking für Formulare, Anrufe, Buchungen und Kampagnen-Auswertung.',
    businessValue:
      'Wichtig, wenn Entscheidungen nicht mehr auf Bauchgefühl, sondern auf klaren Daten basieren sollen.',
    pricingFrom: `ab EUR ${WEBSITE_PRICING_PACKAGES.starter.priceFrom}`,
    pricingNumericFrom: WEBSITE_PRICING_PACKAGES.starter.priceFrom,
    pricingModel: 'one_time',
    estimateRange: getPackageRange('starter'),
    timeline: 'ca. 3 bis 7 Werktage',
    estimateHint:
      `Basis-Tracking ist im Starter-Paket ab EUR ${WEBSITE_PRICING_PACKAGES.starter.priceFrom} enthalten; CRM- oder Marketing-Dashboards liegen eher bei Business oder Pro.`,
    keywords: ['tracking', 'analytics', 'ga4', 'pixel', 'messung', 'events'],
  },
  {
    id: 'support',
    title: 'Support',
    shortDescription:
      'Laufende Betreuung für kleine Änderungen, technische Pflege, Monitoring und Priorisierung.',
    businessValue:
      'Gut, wenn die Website nicht stillstehen soll und Updates zuverlässig umgesetzt werden sollen.',
    pricingFrom: `ab EUR ${WEBSITE_PRICING_PACKAGES.starter.supportMonthly}/Monat`,
    pricingNumericFrom: WEBSITE_PRICING_PACKAGES.starter.supportMonthly,
    pricingModel: 'monthly',
    estimateRange: {
      from: WEBSITE_PRICING_PACKAGES.starter.supportMonthly,
      to: WEBSITE_PRICING_PACKAGES.pro.supportMonthly,
    },
    timeline: 'laufend',
    estimateHint:
      `Der passende Support-Tarif richtet sich danach, wie häufig Inhalte, Kampagnen oder technische Themen anfallen: Starter EUR ${WEBSITE_PRICING_PACKAGES.starter.supportMonthly}/Monat, Business EUR ${WEBSITE_PRICING_PACKAGES.business.supportMonthly}/Monat, Pro EUR ${WEBSITE_PRICING_PACKAGES.pro.supportMonthly}/Monat.`,
    keywords: ['support', 'betreuung', 'wartung', 'pflege', 'hilfe'],
  },
];
