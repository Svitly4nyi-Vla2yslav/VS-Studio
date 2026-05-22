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
  readonly label: string;
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
  readonly tags: readonly string[];
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
  readonly label: string;
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
  { label: 'German B2', level: 72 },
  { label: 'React / TypeScript', level: 84 },
  { label: 'Node.js', level: 68 },
  { label: 'Firebase / Supabase', level: 70 },
  { label: 'AI Automation', level: 76 },
  { label: 'Local Business Websites', level: 88 },
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
      { label: 'HTML', level: 88 },
      { label: 'CSS', level: 86 },
      { label: 'JavaScript', level: 82 },
      { label: 'TypeScript', level: 78 },
      { label: 'React', level: 84 },
      { label: 'Vite', level: 80 },
      { label: 'Styled-components', level: 82 },
      { label: 'Framer Motion', level: 72 },
      { label: 'i18next', level: 70 },
    ],
  },
  {
    id: 'backend',
    titleKey: 'portfolio.skills.categories.backend',
    descriptionKey: 'portfolio.skills.descriptions.backend',
    rank: 'B+',
    icon: FaServer,
    skills: [
      { label: 'Node.js', level: 70 },
      { label: 'Firebase', level: 74 },
      { label: 'Firebase Functions', level: 64 },
      { label: 'Supabase', level: 68 },
      { label: 'MongoDB', level: 62 },
      { label: 'Netlify Functions', level: 66 },
    ],
  },
  {
    id: 'business',
    titleKey: 'portfolio.skills.categories.business',
    descriptionKey: 'portfolio.skills.descriptions.business',
    rank: 'B+',
    icon: FaChartLine,
    skills: [
      { label: 'Landing Pages', level: 84 },
      { label: 'Local SEO basics', level: 70 },
      { label: 'GA4 / Tracking', level: 68 },
      { label: 'Google Ads basics', level: 58 },
      { label: 'Meta automation basics', level: 60 },
      { label: 'Lead forms', level: 80 },
      { label: 'CRM/POS concepts', level: 66 },
    ],
  },
  {
    id: 'automation',
    titleKey: 'portfolio.skills.categories.automation',
    descriptionKey: 'portfolio.skills.descriptions.automation',
    rank: 'B',
    icon: FaHatWizard,
    skills: [
      { label: 'AI assistant for websites', level: 78 },
      { label: 'Lead qualification', level: 74 },
      { label: 'Chatbot flows', level: 72 },
      { label: 'Google Calendar integration idea', level: 58 },
      { label: 'Social media auto-replies concept', level: 62 },
      { label: 'Business process automation', level: 70 },
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
    tags: ['React', 'TypeScript', 'Styled-components', 'i18n', 'Lead Generation', 'AI Assistant'],
  },
  {
    id: 'lumina-atelier',
    titleKey: 'portfolio.projects.items.lumina.title',
    typeKey: 'portfolio.projects.items.lumina.type',
    descriptionKey: 'portfolio.projects.items.lumina.description',
    rewardKey: 'portfolio.projects.items.lumina.reward',
    difficulty: 'B+',
    link: 'https://lumina-atelier-salon.netlify.app/',
    tags: ['React', 'Landing Page', 'Beauty Business', 'Responsive Design'],
  },
  {
    id: 'autowerk',
    titleKey: 'portfolio.projects.items.autowerk.title',
    typeKey: 'portfolio.projects.items.autowerk.type',
    descriptionKey: 'portfolio.projects.items.autowerk.description',
    rewardKey: 'portfolio.projects.items.autowerk.reward',
    difficulty: 'B+',
    link: 'https://auto-werkstatt.netlify.app/',
    tags: ['React', 'Local Business', 'Workshop', 'CTA'],
  },
  {
    id: 'handwerk-shk',
    titleKey: 'portfolio.projects.items.handwerk.title',
    typeKey: 'portfolio.projects.items.handwerk.type',
    descriptionKey: 'portfolio.projects.items.handwerk.description',
    rewardKey: 'portfolio.projects.items.handwerk.reward',
    difficulty: 'B+',
    link: 'https://handwerken.netlify.app/',
    tags: ['React', 'Handwerk', 'SHK', 'Local SEO'],
  },
  {
    id: 'ai-assistant',
    titleKey: 'portfolio.projects.items.ai.title',
    typeKey: 'portfolio.projects.items.ai.type',
    descriptionKey: 'portfolio.projects.items.ai.description',
    rewardKey: 'portfolio.projects.items.ai.reward',
    difficulty: 'A-',
    tags: ['AI', 'Automation', 'Lead Capture', 'Chatbot', 'Business Process'],
  },
  {
    id: 'business-platform',
    titleKey: 'portfolio.projects.items.research.title',
    typeKey: 'portfolio.projects.items.research.type',
    descriptionKey: 'portfolio.projects.items.research.description',
    rewardKey: 'portfolio.projects.items.research.reward',
    difficulty: 'B',
    tags: ['CRM', 'POS', 'Orders', 'Inventory', 'Automation', 'SaaS Research'],
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
  { label: 'React', x: 9, y: 22 },
  { label: 'TypeScript', x: 66, y: 16 },
  { label: 'Node.js', x: 74, y: 54 },
  { label: 'Firebase', x: 18, y: 68 },
  { label: 'AI', x: 52, y: 76 },
  { label: 'Automation', x: 4, y: 44 },
];
