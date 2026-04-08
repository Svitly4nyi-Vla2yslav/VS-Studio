import type { AssistantNicheExample } from '../../features/ai-assistant/types';

export const nichesEn: AssistantNicheExample[] = [
  {
    id: 'auto-werkstatt',
    title: 'Auto workshop',
    summary:
      'Well-structured services, fast contact paths, and clear answers around diagnostics, repairs, or booking requests.',
    businessValue:
      'Helps sort service enquiries faster and turns website visitors into concrete workshop leads.',
    examples: ['Inspection request', 'Accident repair', 'Brake service', 'Diagnostic booking request'],
    recommendedServices: ['website', 'ads', 'tracking', 'ai-chatbot'],
    keywords: ['workshop', 'auto', 'garage', 'diagnostic', 'inspection', 'repair'],
  },
  {
    id: 'shk',
    title: 'SHK',
    summary:
      'A good fit for heating, plumbing, and climate businesses with recurring questions about services, coverage areas, and first contact.',
    businessValue:
      'Reduces repetitive questions, qualifies local demand, and adds structure to quote requests.',
    examples: ['Heat pump', 'Bathroom renovation', 'Emergency callout', 'Plumbing request'],
    recommendedServices: ['website', 'tracking', 'support', 'ai-chatbot'],
    keywords: ['plumbing', 'heating', 'hvac', 'heat pump', 'bathroom'],
  },
  {
    id: 'beauty',
    title: 'Beauty',
    summary:
      'Strong for studios that depend on service presentation, trust, reviews, booking intent, and repeat demand.',
    businessValue:
      'Improves the first impression and shortens the path from interest to booking request.',
    examples: ['Beauty studio', 'Lashes', 'Skincare', 'Laser hair removal'],
    recommendedServices: ['website', 'support', 'ads', 'ai-chatbot'],
    keywords: ['beauty', 'studio', 'lashes', 'skincare', 'salon'],
  },
  {
    id: 'praxis',
    title: 'Practice',
    summary:
      'Useful for clear service presentation, common patient questions, and structured first contact.',
    businessValue:
      'Takes pressure off the first touchpoint, explains processes calmly, and supports clear enquiry or appointment paths.',
    examples: ['Intro appointment', 'Service overview', 'Directions', 'Contact request'],
    recommendedServices: ['website', 'tracking', 'support', 'ai-chatbot'],
    keywords: ['practice', 'clinic', 'patient', 'doctor', 'appointment'],
  },
];
