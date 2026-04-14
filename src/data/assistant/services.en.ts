import type { AssistantService } from '../../features/ai-assistant/types';

export const servicesEn: AssistantService[] = [
  {
    id: 'website',
    title: 'Website build',
    shortDescription:
      'A clear, fast website focused on trust, lead generation, and measurable contact points.',
    businessValue:
      'Best for businesses that want a stronger online presence and a steady flow of qualified enquiries.',
    pricingFrom: 'from EUR 2,490',
    pricingNumericFrom: 2490,
    pricingModel: 'one_time',
    timeline: 'about 2 to 4 weeks',
    estimateHint:
      'A realistic starting range is usually the base website price plus any extra scope for content, tracking, or multilingual setup.',
    keywords: ['website', 'web', 'homepage', 'landing page', 'new site', 'build'],
  },
  {
    id: 'redesign',
    title: 'Redesign',
    shortDescription:
      'A relaunch for existing websites with better structure, stronger trust signals, and clearer conversion paths.',
    businessValue:
      'Useful when traffic already exists, but the current website looks dated or converts too weakly.',
    pricingFrom: 'from EUR 1,690',
    pricingNumericFrom: 1690,
    pricingModel: 'one_time',
    timeline: 'about 1 to 3 weeks',
    estimateHint:
      'The effort mainly depends on how many pages, assets, and technical issues need to be carried over.',
    keywords: ['redesign', 'relaunch', 'refresh', 'improve website', 'modernize'],
  },
  {
    id: 'ads',
    title: 'Ads',
    shortDescription:
      'Google Ads, Meta Ads, or local campaigns with clean tracking and a focus on qualified leads.',
    businessValue:
      'A good fit when you need predictable demand or want to accelerate an existing lead funnel.',
    pricingFrom: 'from EUR 399/month plus ad budget',
    pricingNumericFrom: 399,
    pricingModel: 'monthly',
    timeline: 'setup usually in 5 to 10 business days',
    estimateHint:
      'Ads require both setup and a sensible media budget, plus clear conversion goals.',
    keywords: ['ads', 'advertising', 'google ads', 'meta ads', 'campaign', 'campaigns'],
  },
  {
    id: 'ai-chatbot',
    title: 'AI chatbot',
    shortDescription:
      'An AI assistant for website chat, Instagram, Facebook Messenger, WhatsApp, Telegram, lead qualification, booking requests, and early project intake.',
    businessValue:
      'Especially useful when prospects should get quick replies and a clear next step across social channels and outside office hours.',
    pricingFrom: 'from EUR 2,990',
    pricingNumericFrom: 2990,
    pricingModel: 'one_time',
    timeline: 'about 2 to 5 weeks',
    estimateHint:
      'The scope depends heavily on the amount of knowledge, lead logic, multilingual support, and team handoff required.',
    keywords: ['ai', 'chatbot', 'assistant', 'automation', 'lead qualification'],
  },
  {
    id: 'tracking',
    title: 'Tracking',
    shortDescription: 'Clean event tracking for forms, calls, bookings, and campaign reporting.',
    businessValue:
      'Important when decisions should be based on data rather than guesswork.',
    pricingFrom: 'from EUR 790',
    pricingNumericFrom: 790,
    pricingModel: 'one_time',
    timeline: 'about 3 to 7 business days',
    estimateHint:
      'The effort grows when several systems such as GA4, Meta, CRM, or server-side tracking need to work together.',
    keywords: ['tracking', 'analytics', 'ga4', 'pixel', 'measurement', 'events'],
  },
  {
    id: 'support',
    title: 'Support',
    shortDescription:
      'Ongoing help for small changes, technical maintenance, monitoring, and prioritised updates.',
    businessValue:
      'Useful when the website should stay current and updates need to be handled reliably.',
    pricingFrom: 'from EUR 59/month',
    pricingNumericFrom: 59,
    pricingModel: 'monthly',
    timeline: 'ongoing',
    estimateHint:
      'The right support tier depends on how often content, campaigns, or technical tasks come up.',
    keywords: ['support', 'maintenance', 'care', 'updates', 'help'],
  },
];
