import contactVideo from '../assets/Contact section-video.webm';
import heroVideo from '../assets/Hero section.webm';
import networkVideo from '../assets/Network section-video.webm';
import profileSystemImage from '../assets/Profile  System section.webp';
import projectsImage from '../assets/Projects section.webp';
import skillsVideo from '../assets/Skills section-video.webm';
import timelineVideo from '../assets/Timeline section-video.webm';

export interface PortfolioMediaAsset {
  readonly type: 'image' | 'video';
  readonly src: string;
  readonly altKey: string;
}

export type PortfolioMediaSection = 'hero' | 'profile' | 'skills' | 'projects' | 'timeline' | 'network' | 'contact';

// portfolioMedia централізує відповідність між секціями portfolio та локальними media assets.
export const portfolioMedia: Record<PortfolioMediaSection, PortfolioMediaAsset> = {
  hero: {
    type: 'video',
    src: heroVideo,
    altKey: 'portfolio.media.hero',
  },
  profile: {
    type: 'image',
    src: profileSystemImage,
    altKey: 'portfolio.media.profile',
  },
  skills: {
    type: 'video',
    src: skillsVideo,
    altKey: 'portfolio.media.skills',
  },
  projects: {
    type: 'image',
    src: projectsImage,
    altKey: 'portfolio.media.projects',
  },
  timeline: {
    type: 'video',
    src: timelineVideo,
    altKey: 'portfolio.media.timeline',
  },
  network: {
    type: 'video',
    src: networkVideo,
    altKey: 'portfolio.media.network',
  },
  contact: {
    type: 'video',
    src: contactVideo,
    altKey: 'portfolio.media.contact',
  },
};
