import workshopCover from '../assets/proekt/Auto-Werkstatt.png';
import handwerkCover from '../assets/proekt/handwerk.png';
import beautyCover from '../assets/proekt/single-page_beauty_salon.png';

export type FeaturedProjectId = 'handwerk' | 'auto-werkstatt' | 'single-page_beauty_salon';

export type FeaturedProjectTagKey =
  | 'localLeads'
  | 'services'
  | 'fastContact'
  | 'booking'
  | 'faq'
  | 'onePageWebsite'
  | 'trust';

export type FeaturedProject = {
  id: FeaturedProjectId;
  image: string;
  repoUrl: string;
  liveUrl: string | null;
  tags: readonly FeaturedProjectTagKey[];
  translationKey:
    | 'home.projects.items.handwerk'
    | 'home.projects.items.autoWorkshop'
    | 'home.projects.items.singlePageBeautySalon';
};

export const githubProfileUrl = 'https://github.com/Svitly4nyi-Vla2yslav';

export const featuredProjects: readonly FeaturedProject[] = [
  {
    id: 'handwerk',
    image: handwerkCover,
    repoUrl: 'https://github.com/Svitly4nyi-Vla2yslav/handwerk',
    liveUrl: 'https://handwerken.netlify.app/',
    tags: ['localLeads', 'services', 'fastContact'],
    translationKey: 'home.projects.items.handwerk',
  },
  {
    id: 'auto-werkstatt',
    image: workshopCover,
    repoUrl: 'https://github.com/Svitly4nyi-Vla2yslav/Auto-Werkstatt',
    liveUrl: 'https://auto-werkstatt.netlify.app/',
    tags: ['booking', 'faq', 'fastContact'],
    translationKey: 'home.projects.items.autoWorkshop',
  },
  {
    id: 'single-page_beauty_salon',
    image: beautyCover,
    repoUrl: 'https://github.com/Svitly4nyi-Vla2yslav/single-page_beauty_salon',
    liveUrl: 'https://lumina-atelier-salon.netlify.app/',
    tags: ['onePageWebsite', 'trust', 'booking'],
    translationKey: 'home.projects.items.singlePageBeautySalon',
  },
] as const;
