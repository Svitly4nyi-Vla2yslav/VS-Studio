import type { IconType } from 'react-icons';
import {
  FaChartLine,
  FaGem,
  FaHatWizard,
  FaNetworkWired,
  FaServer,
  FaShieldAlt,
} from 'react-icons/fa';

export interface PortfolioNavItem {
  readonly id: string;
  readonly labelKey: string;
  readonly href: string;
}

export interface SystemAttribute {
  readonly labelKey: string;
  readonly valueKey: string;
}

export interface XpFocusItem {
  readonly labelKey: string;
  readonly level: number;
}

export interface SkillCategory {
  readonly id: string;
  readonly titleKey: string;
  readonly descriptionKey: string;
  readonly rank: string;
  readonly icon: IconType;
  readonly skills: readonly XpFocusItem[];
}

export interface ProjectDungeonItem {
  readonly id: string;
  readonly titleKey: string;
  readonly typeKey: string;
  readonly descriptionKey: string;
  readonly rewardKey: string;
  readonly difficulty: string;
  readonly tagKeys: readonly string[];
  readonly link?: string;
}

export interface QuestTimelineItem {
  readonly id: string;
  readonly titleKey: string;
  readonly descriptionKey: string;
  readonly statusKey: string;
}

export interface GuildSignal {
  readonly id: string;
  readonly titleKey: string;
  readonly descriptionKey: string;
  readonly icon: IconType;
}

export interface FloatingCodeFragment {
  readonly labelKey: string;
  readonly x: number;
  readonly y: number;
}

// Навігація portfolio тримається в даних, щоб header і footer мали однакові секції.
export const portfolioNavItems: readonly PortfolioNavItem[] = [
  { id: 'hero', labelKey: 'portfolio.nav.hero', href: '#portfolio-top' },
  { id: 'profile', labelKey: 'portfolio.nav.profile', href: '#portfolio-profile' },
  { id: 'skills', labelKey: 'portfolio.nav.skills', href: '#portfolio-skills' },
  { id: 'projects', labelKey: 'portfolio.nav.projects', href: '#portfolio-projects' },
  { id: 'timeline', labelKey: 'portfolio.nav.timeline', href: '#portfolio-timeline' },
  { id: 'network', labelKey: 'portfolio.nav.network', href: '#portfolio-network' },
  { id: 'contact', labelKey: 'portfolio.nav.contact', href: '#portfolio-contact' },
];

// Дані системної панелі описують професійний профіль як RPG-статуси.
export const systemAttributes: readonly SystemAttribute[] = [
  { labelKey: 'portfolio.system.rank', valueKey: 'portfolio.profile.role' },
  { labelKey: 'portfolio.system.class', valueKey: 'portfolio.system.values.mainClass' },
  { labelKey: 'portfolio.system.guild', valueKey: 'portfolio.profile.brand' },
  { labelKey: 'portfolio.system.location', valueKey: 'portfolio.profile.location' },
  { labelKey: 'portfolio.system.mission', valueKey: 'portfolio.system.values.mainMission' },
];

// XP-фокуси показують напрямки, які зараз найактивніше прокачуються.
export const xpFocusItems: readonly XpFocusItem[] = [
  { labelKey: 'portfolio.system.xpItems.german', level: 72 },
  { labelKey: 'portfolio.system.xpItems.reactTypeScript', level: 84 },
  { labelKey: 'portfolio.system.xpItems.node', level: 68 },
  { labelKey: 'portfolio.system.xpItems.firebaseSupabase', level: 70 },
  { labelKey: 'portfolio.system.xpItems.aiAutomation', level: 76 },
  { labelKey: 'portfolio.system.xpItems.localBusinessWebsites', level: 88 },
];

// Skill tree винесений у дані, щоб компонент рендерив гілки здібностей без дублювання.
export const skillCategories: readonly SkillCategory[] = [
  {
    id: 'frontend',
    titleKey: 'portfolio.skills.categories.frontend',
    descriptionKey: 'portfolio.skills.descriptions.frontend',
    rank: 'A-',
    icon: FaGem,
    skills: [
      { labelKey: 'portfolio.skills.items.html', level: 88 },
      { labelKey: 'portfolio.skills.items.css', level: 86 },
      { labelKey: 'portfolio.skills.items.javascript', level: 82 },
      { labelKey: 'portfolio.skills.items.typescript', level: 78 },
      { labelKey: 'portfolio.skills.items.react', level: 84 },
      { labelKey: 'portfolio.skills.items.vite', level: 80 },
      { labelKey: 'portfolio.skills.items.styledComponents', level: 82 },
      { labelKey: 'portfolio.skills.items.framerMotion', level: 72 },
      { labelKey: 'portfolio.skills.items.i18next', level: 70 },
    ],
  },
  {
    id: 'backend',
    titleKey: 'portfolio.skills.categories.backend',
    descriptionKey: 'portfolio.skills.descriptions.backend',
    rank: 'B+',
    icon: FaServer,
    skills: [
      { labelKey: 'portfolio.skills.items.node', level: 70 },
      { labelKey: 'portfolio.skills.items.firebase', level: 74 },
      { labelKey: 'portfolio.skills.items.firebaseFunctions', level: 64 },
      { labelKey: 'portfolio.skills.items.supabase', level: 68 },
      { labelKey: 'portfolio.skills.items.mongodb', level: 62 },
      { labelKey: 'portfolio.skills.items.netlifyFunctions', level: 66 },
    ],
  },
  {
    id: 'business',
    titleKey: 'portfolio.skills.categories.business',
    descriptionKey: 'portfolio.skills.descriptions.business',
    rank: 'B+',
    icon: FaChartLine,
    skills: [
      { labelKey: 'portfolio.skills.items.landingPages', level: 84 },
      { labelKey: 'portfolio.skills.items.localSeoBasics', level: 70 },
      { labelKey: 'portfolio.skills.items.ga4Tracking', level: 68 },
      { labelKey: 'portfolio.skills.items.googleAdsBasics', level: 58 },
      { labelKey: 'portfolio.skills.items.metaAutomationBasics', level: 60 },
      { labelKey: 'portfolio.skills.items.leadForms', level: 80 },
      { labelKey: 'portfolio.skills.items.crmPosConcepts', level: 66 },
    ],
  },
  {
    id: 'automation',
    titleKey: 'portfolio.skills.categories.automation',
    descriptionKey: 'portfolio.skills.descriptions.automation',
    rank: 'B',
    icon: FaHatWizard,
    skills: [
      { labelKey: 'portfolio.skills.items.aiAssistantForWebsites', level: 78 },
      { labelKey: 'portfolio.skills.items.leadQualification', level: 74 },
      { labelKey: 'portfolio.skills.items.chatbotFlows', level: 72 },
      { labelKey: 'portfolio.skills.items.googleCalendarIntegrationIdea', level: 58 },
      { labelKey: 'portfolio.skills.items.socialMediaAutoRepliesConcept', level: 62 },
      { labelKey: 'portfolio.skills.items.businessProcessAutomation', level: 70 },
    ],
  },
];

// Проєкти сформульовані як dungeon missions: власний бренд, демо або концепт без перебільшення.
export const projectDungeons: readonly ProjectDungeonItem[] = [
  {
    id: 'vs-web-studio',
    titleKey: 'portfolio.projects.items.vs.title',
    typeKey: 'portfolio.projects.items.vs.type',
    descriptionKey: 'portfolio.projects.items.vs.description',
    rewardKey: 'portfolio.projects.items.vs.reward',
    difficulty: 'A',
    link: 'https://vs-web-studio.de/',
    tagKeys: [
      'portfolio.projects.tags.react',
      'portfolio.projects.tags.typescript',
      'portfolio.projects.tags.styledComponents',
      'portfolio.projects.tags.i18n',
      'portfolio.projects.tags.leadGeneration',
      'portfolio.projects.tags.aiAssistant',
    ],
  },
  {
    id: 'lumina-atelier',
    titleKey: 'portfolio.projects.items.lumina.title',
    typeKey: 'portfolio.projects.items.lumina.type',
    descriptionKey: 'portfolio.projects.items.lumina.description',
    rewardKey: 'portfolio.projects.items.lumina.reward',
    difficulty: 'B+',
    link: 'https://lumina-atelier-salon.netlify.app/',
    tagKeys: [
      'portfolio.projects.tags.react',
      'portfolio.projects.tags.landingPage',
      'portfolio.projects.tags.beautyBusiness',
      'portfolio.projects.tags.responsiveDesign',
    ],
  },
  {
    id: 'autowerk',
    titleKey: 'portfolio.projects.items.autowerk.title',
    typeKey: 'portfolio.projects.items.autowerk.type',
    descriptionKey: 'portfolio.projects.items.autowerk.description',
    rewardKey: 'portfolio.projects.items.autowerk.reward',
    difficulty: 'B+',
    link: 'https://auto-werkstatt.netlify.app/',
    tagKeys: [
      'portfolio.projects.tags.react',
      'portfolio.projects.tags.localBusiness',
      'portfolio.projects.tags.workshop',
      'portfolio.projects.tags.cta',
    ],
  },
  {
    id: 'handwerk-shk',
    titleKey: 'portfolio.projects.items.handwerk.title',
    typeKey: 'portfolio.projects.items.handwerk.type',
    descriptionKey: 'portfolio.projects.items.handwerk.description',
    rewardKey: 'portfolio.projects.items.handwerk.reward',
    difficulty: 'B+',
    link: 'https://handwerken.netlify.app/',
    tagKeys: [
      'portfolio.projects.tags.react',
      'portfolio.projects.tags.handwerk',
      'portfolio.projects.tags.shk',
      'portfolio.projects.tags.localSeo',
    ],
  },
  {
    id: 'ai-assistant',
    titleKey: 'portfolio.projects.items.ai.title',
    typeKey: 'portfolio.projects.items.ai.type',
    descriptionKey: 'portfolio.projects.items.ai.description',
    rewardKey: 'portfolio.projects.items.ai.reward',
    difficulty: 'A-',
    tagKeys: [
      'portfolio.projects.tags.ai',
      'portfolio.projects.tags.automation',
      'portfolio.projects.tags.leadCapture',
      'portfolio.projects.tags.chatbot',
      'portfolio.projects.tags.businessProcess',
    ],
  },
  {
    id: 'business-platform',
    titleKey: 'portfolio.projects.items.research.title',
    typeKey: 'portfolio.projects.items.research.type',
    descriptionKey: 'portfolio.projects.items.research.description',
    rewardKey: 'portfolio.projects.items.research.reward',
    difficulty: 'B',
    tagKeys: [
      'portfolio.projects.tags.crm',
      'portfolio.projects.tags.pos',
      'portfolio.projects.tags.orders',
      'portfolio.projects.tags.inventory',
      'portfolio.projects.tags.automation',
      'portfolio.projects.tags.saasResearch',
    ],
  },
];

// Timeline описує прогрес як карту квестів з checkpoint-ами.
export const questTimeline: readonly QuestTimelineItem[] = [
  {
    id: 'course',
    titleKey: 'portfolio.timeline.items.course.title',
    descriptionKey: 'portfolio.timeline.items.course.description',
    statusKey: 'portfolio.timeline.status.completed',
  },
  {
    id: 'platforms',
    titleKey: 'portfolio.timeline.items.platforms.title',
    descriptionKey: 'portfolio.timeline.items.platforms.description',
    statusKey: 'portfolio.timeline.status.active',
  },
  {
    id: 'studio',
    titleKey: 'portfolio.timeline.items.studio.title',
    descriptionKey: 'portfolio.timeline.items.studio.description',
    statusKey: 'portfolio.timeline.status.active',
  },
  {
    id: 'demos',
    titleKey: 'portfolio.timeline.items.demos.title',
    descriptionKey: 'portfolio.timeline.items.demos.description',
    statusKey: 'portfolio.timeline.status.active',
  },
  {
    id: 'german',
    titleKey: 'portfolio.timeline.items.german.title',
    descriptionKey: 'portfolio.timeline.items.german.description',
    statusKey: 'portfolio.timeline.status.training',
  },
  {
    id: 'selfEmployment',
    titleKey: 'portfolio.timeline.items.selfEmployment.title',
    descriptionKey: 'portfolio.timeline.items.selfEmployment.description',
    statusKey: 'portfolio.timeline.status.preparing',
  },
  {
    id: 'scale',
    titleKey: 'portfolio.timeline.items.scale.title',
    descriptionKey: 'portfolio.timeline.items.scale.description',
    statusKey: 'portfolio.timeline.status.next',
  },
];

// Guild-сигнали описують бізнес-контекст чесно, без заяв про непідтверджених клієнтів.
export const guildSignals: readonly GuildSignal[] = [
  {
    id: 'linkedin',
    titleKey: 'portfolio.network.items.linkedin.title',
    descriptionKey: 'portfolio.network.items.linkedin.description',
    icon: FaNetworkWired,
  },
  {
    id: 'localSmb',
    titleKey: 'portfolio.network.items.localSmb.title',
    descriptionKey: 'portfolio.network.items.localSmb.description',
    icon: FaShieldAlt,
  },
  {
    id: 'ecosystem',
    titleKey: 'portfolio.network.items.ecosystem.title',
    descriptionKey: 'portfolio.network.items.ecosystem.description',
    icon: FaGem,
  },
  {
    id: 'research',
    titleKey: 'portfolio.network.items.research.title',
    descriptionKey: 'portfolio.network.items.research.description',
    icon: FaHatWizard,
  },
];

// Floating fragments створюють у hero відчуття coding aura без важких 3D або картинок.
export const floatingCodeFragments: readonly FloatingCodeFragment[] = [
  { labelKey: 'portfolio.hero.fragments.react', x: 9, y: 22 },
  { labelKey: 'portfolio.hero.fragments.typescript', x: 66, y: 16 },
  { labelKey: 'portfolio.hero.fragments.node', x: 74, y: 54 },
  { labelKey: 'portfolio.hero.fragments.firebase', x: 18, y: 68 },
  { labelKey: 'portfolio.hero.fragments.ai', x: 52, y: 76 },
  { labelKey: 'portfolio.hero.fragments.automation', x: 4, y: 44 },
];
