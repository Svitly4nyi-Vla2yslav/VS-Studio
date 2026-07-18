import type { AssistantService } from '../../features/ai-assistant/types';
import { AI_MUSIC_PACKAGES, CONFIGURATOR_PRICING, WEBSITE_PRICING_PACKAGES, getPackageRange } from '../pricingCatalog';

export const servicesEn: AssistantService[] = [
  {
    id: 'website',
    title: 'Website build',
    shortDescription:
      'A clear, fast website focused on trust, lead generation, and measurable contact points.',
    businessValue:
      'Best for businesses that want a stronger online presence and a steady flow of qualified enquiries.',
    pricingFrom: `from EUR ${WEBSITE_PRICING_PACKAGES.starter.priceFrom}`,
    pricingNumericFrom: WEBSITE_PRICING_PACKAGES.starter.priceFrom,
    pricingModel: 'one_time',
    estimateRange: getPackageRange('starter'),
    timeline: 'about 2 to 4 weeks',
    estimateHint:
      `On the Pricing page, Starter is usually EUR ${WEBSITE_PRICING_PACKAGES.starter.rangeFrom}-${WEBSITE_PRICING_PACKAGES.starter.rangeTo}; for more scope, Business starts from EUR ${WEBSITE_PRICING_PACKAGES.business.priceFrom}. After choosing parameters, the Configurator shows EUR ${CONFIGURATOR_PRICING.launchMin}-${CONFIGURATOR_PRICING.launchMax}.`,
    keywords: ['website', 'web', 'homepage', 'landing page', 'new site', 'build'],
  },
  {
    id: 'redesign',
    title: 'Redesign',
    shortDescription:
      'A relaunch for existing websites with better structure, stronger trust signals, and clearer conversion paths.',
    businessValue:
      'Useful when traffic already exists, but the current website looks dated or converts too weakly.',
    pricingFrom: `from EUR ${WEBSITE_PRICING_PACKAGES.business.priceFrom}`,
    pricingNumericFrom: WEBSITE_PRICING_PACKAGES.business.priceFrom,
    pricingModel: 'one_time',
    estimateRange: getPackageRange('business'),
    timeline: 'about 1 to 3 weeks',
    estimateHint:
      `The effort mainly depends on how many pages, assets, and technical issues need to be carried over. The Business range on the Pricing page is usually EUR ${WEBSITE_PRICING_PACKAGES.business.rangeFrom}-${WEBSITE_PRICING_PACKAGES.business.rangeTo}.`,
    keywords: ['redesign', 'relaunch', 'refresh', 'improve website', 'modernize'],
  },
  {
    id: 'ads',
    title: 'Ads',
    shortDescription:
      'Google Ads, Meta Ads, or local campaigns with clean tracking and a focus on qualified leads.',
    businessValue:
      'A good fit when you need predictable demand or want to accelerate an existing lead funnel.',
    pricingFrom: `from EUR ${WEBSITE_PRICING_PACKAGES.pro.priceFrom} plus ad budget`,
    pricingNumericFrom: WEBSITE_PRICING_PACKAGES.pro.priceFrom,
    pricingModel: 'one_time',
    estimateRange: getPackageRange('pro'),
    timeline: 'setup usually in 5 to 10 business days',
    estimateHint:
      `Ads require both setup and a sensible media budget, plus clear conversion goals. On the Pricing page, ads setup is part of Pro from EUR ${WEBSITE_PRICING_PACKAGES.pro.priceFrom}.`,
    keywords: ['ads', 'advertising', 'google ads', 'meta ads', 'campaign', 'campaigns'],
  },
  {
    id: 'ai-chatbot',
    title: 'AI chatbot',
    shortDescription:
      'An AI assistant for website chat, Instagram, Facebook Messenger, WhatsApp, Telegram, lead qualification, booking requests, and early project intake.',
    businessValue:
      'Especially useful when prospects should get quick replies and a clear next step across social channels and outside office hours.',
    pricingFrom: `from EUR ${WEBSITE_PRICING_PACKAGES.pro.priceFrom}`,
    pricingNumericFrom: WEBSITE_PRICING_PACKAGES.pro.priceFrom,
    pricingModel: 'one_time',
    estimateRange: getPackageRange('pro'),
    timeline: 'about 2 to 5 weeks',
    estimateHint:
      `The scope depends on the amount of knowledge, lead logic, multilingual support, and team handoff required. On the Pricing page, AI lead qualification is part of Pro from EUR ${WEBSITE_PRICING_PACKAGES.pro.priceFrom}.`,
    keywords: ['ai', 'chatbot', 'assistant', 'automation', 'lead qualification'],
  },
  {
    id: 'ai-music',
    title: 'AI Songs & Jingles',
    shortDescription:
      'Custom AI-generated songs, commercial jingles and brand music for businesses, social media and advertising.',
    businessValue:
      'Useful for small businesses, startups, creators and local companies that want a memorable sound for ads, reels, videos or brand campaigns.',
    pricingFrom: `from EUR ${AI_MUSIC_PACKAGES.basic.price}`,
    pricingNumericFrom: AI_MUSIC_PACKAGES.basic.price,
    pricingModel: 'one_time',
    estimateRange: {
      from: AI_MUSIC_PACKAGES.basic.price,
      to: AI_MUSIC_PACKAGES.premium.price,
    },
    timeline: 'usually a few business days depending on style and revisions',
    estimateHint:
      `Packages: Short AI Jingle EUR ${AI_MUSIC_PACKAGES.basic.price}, Business Promo Song EUR ${AI_MUSIC_PACKAGES.standard.price}, Full Brand Music Pack EUR ${AI_MUSIC_PACKAGES.premium.price}. Extras are available for longer duration, extra revisions, language versions, social cuts, and express delivery.`,
    keywords: [
      'ai music',
      'ai song',
      'song',
      'songs',
      'jingle',
      'jingles',
      'brand music',
      'brand anthem',
      'promo song',
      'commercial music',
      'tiktok music',
      'instagram music',
    ],
  },
  {
    id: 'tracking',
    title: 'Tracking',
    shortDescription: 'Clean event tracking for forms, calls, bookings, and campaign reporting.',
    businessValue:
      'Important when decisions should be based on data rather than guesswork.',
    pricingFrom: `from EUR ${WEBSITE_PRICING_PACKAGES.starter.priceFrom}`,
    pricingNumericFrom: WEBSITE_PRICING_PACKAGES.starter.priceFrom,
    pricingModel: 'one_time',
    estimateRange: getPackageRange('starter'),
    timeline: 'about 3 to 7 business days',
    estimateHint:
      `Basic tracking is included in Starter from EUR ${WEBSITE_PRICING_PACKAGES.starter.priceFrom}; CRM or marketing dashboards are usually Business or Pro scope.`,
    keywords: ['tracking', 'analytics', 'ga4', 'pixel', 'measurement', 'events'],
  },
  {
    id: 'support',
    title: 'Support',
    shortDescription:
      'Ongoing help for small changes, technical maintenance, monitoring, and prioritised updates.',
    businessValue:
      'Useful when the website should stay current and updates need to be handled reliably.',
    pricingFrom: `from EUR ${WEBSITE_PRICING_PACKAGES.starter.supportMonthly}/month`,
    pricingNumericFrom: WEBSITE_PRICING_PACKAGES.starter.supportMonthly,
    pricingModel: 'monthly',
    estimateRange: {
      from: WEBSITE_PRICING_PACKAGES.starter.supportMonthly,
      to: WEBSITE_PRICING_PACKAGES.pro.supportMonthly,
    },
    timeline: 'ongoing',
    estimateHint:
      `The right support tier depends on how often content, campaigns, or technical tasks come up: Starter EUR ${WEBSITE_PRICING_PACKAGES.starter.supportMonthly}/month, Business EUR ${WEBSITE_PRICING_PACKAGES.business.supportMonthly}/month, Pro EUR ${WEBSITE_PRICING_PACKAGES.pro.supportMonthly}/month.`,
    keywords: ['support', 'maintenance', 'care', 'updates', 'help'],
  },
];
