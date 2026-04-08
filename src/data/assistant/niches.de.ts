import type { AssistantNicheExample } from '../../features/ai-assistant/types';

export const nichesDe: AssistantNicheExample[] = [
  {
    id: 'auto-werkstatt',
    title: 'Auto Werkstatt',
    summary:
      'Klar strukturierte Leistungen, schnelle Kontaktwege und Hinweise zu Diagnose, Service oder Terminwunsch.',
    businessValue:
      'Hilft, Service-Anfragen schneller zu sortieren und aus Website-Besuchern konkrete Werkstattkontakte zu machen.',
    examples: ['Inspektionsanfrage', 'Unfallschaden', 'Bremsen-Service', 'Terminwunsch für Diagnose'],
    recommendedServices: ['website', 'ads', 'tracking', 'ai-chatbot'],
    keywords: ['werkstatt', 'auto', 'kfz', 'diagnose', 'inspektion'],
  },
  {
    id: 'shk',
    title: 'SHK',
    summary:
      'Geeignet für Heizungs-, Sanitär- und Klimatechnik mit häufigen Fragen zu Leistungen, Regionen und Erstkontakt.',
    businessValue:
      'Reduziert Rückfragen, hilft bei regionaler Qualifizierung und bringt Struktur in Angebotsanfragen.',
    examples: ['Wärmepumpe', 'Badsanierung', 'Notdienst', 'Sanitär-Anfrage'],
    recommendedServices: ['website', 'tracking', 'support', 'ai-chatbot'],
    keywords: ['shk', 'sanitär', 'sanitaer', 'heizung', 'wärmepumpe', 'waermepumpe'],
  },
  {
    id: 'beauty',
    title: 'Beauty',
    summary:
      'Passt für Studios mit Fokus auf Leistungen, Vertrauen, Bewertungen, Terminwunsch und wiederkehrende Anfragen.',
    businessValue:
      'Stärkt den ersten Eindruck und verkürzt den Weg von Interesse zu Terminwunsch.',
    examples: ['Kosmetikstudio', 'Lashes', 'Hautpflege', 'Dauerhafte Haarentfernung'],
    recommendedServices: ['website', 'support', 'ads', 'ai-chatbot'],
    keywords: ['beauty', 'kosmetik', 'lashes', 'studio', 'hautpflege'],
  },
  {
    id: 'praxis',
    title: 'Praxis',
    summary:
      'Hilfreich für klare Leistungsdarstellung, häufige Patientenfragen und geordnete Kontaktaufnahme.',
    businessValue:
      'Entlastet den Erstkontakt, erklärt Abläufe ruhiger und unterstützt saubere Termin- oder Anfragewege.',
    examples: ['Erstgespräch', 'Leistungsspektrum', 'Anfahrt', 'Kontaktanfrage'],
    recommendedServices: ['website', 'tracking', 'support', 'ai-chatbot'],
    keywords: ['praxis', 'arzt', 'patient', 'sprechstunde', 'behandlung'],
  },
];
