import contactVideo from '../assets/Contact section-video.mp4';
import heroVideo from '../assets/Hero section.mp4';
import networkVideo from '../assets/Network section-video.mp4';
import profileSystemImage from '../assets/Profile  System section.png';
import projectsImage from '../assets/Projects section.png';
import skillsVideo from '../assets/Skills section-video.mp4';
import timelineVideo from '../assets/Timeline section-video.mp4';

export interface PortfolioMediaAsset {
  readonly type: 'image' | 'video';
  readonly src: string;
  readonly alt: string;
}

export type PortfolioMediaSection = 'hero' | 'profile' | 'skills' | 'projects' | 'timeline' | 'network' | 'contact';

// portfolioMedia централізує відповідність між секціями portfolio та локальними media assets.
export const portfolioMedia: Record<PortfolioMediaSection, PortfolioMediaAsset> = {
  hero: {
    type: 'video',
    src: heroVideo,
    alt: 'Animated hero awakening scene for Vladyslav Svitlychnyi portfolio',
  },
  profile: {
    type: 'image',
    src: profileSystemImage,
    alt: 'Profile system character artwork for current developer rank section',
  },
  skills: {
    type: 'video',
    src: skillsVideo,
    alt: 'Animated skill tree scene for ability paths section',
  },
  projects: {
    type: 'image',
    src: projectsImage,
    alt: 'Project dungeon character artwork for selected projects section',
  },
  timeline: {
    type: 'video',
    src: timelineVideo,
    alt: 'Animated quest timeline scene for the developer progression section',
  },
  network: {
    type: 'video',
    src: networkVideo,
    alt: 'Animated guild network scene for business alliances section',
  },
  contact: {
    type: 'video',
    src: contactVideo,
    alt: 'Animated final portal scene for contact section',
  },
};
