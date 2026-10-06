import { css } from 'styled-components';
import marbleDesktopAvif from '../assets/backgrounds/obsidian-marble-gold-long.avif';
import marbleDesktopWebp from '../assets/backgrounds/obsidian-marble-gold-long.webp';
import marbleMobileAvif from '../assets/backgrounds/obsidian-marble-gold-mobile-long.avif';
import marbleMobileWebp from '../assets/backgrounds/obsidian-marble-gold-mobile-long.webp';

/** Shared, long-form surface used behind every public page. */
export const marblePageBackground = css`
  position: relative;
  isolation: isolate;
  background-color: #050505;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    background-color: #050505;
    background-image:
      linear-gradient(180deg, rgba(3, 3, 3, 0.2) 0%, rgba(3, 3, 3, 0.08) 42%, rgba(3, 3, 3, 0.28) 100%),
      image-set(url(${marbleDesktopAvif}) type('image/avif'), url(${marbleDesktopWebp}) type('image/webp'));
    background-position: center top;
    background-repeat: no-repeat;
    background-size: 100% auto;
  }

  @media (max-width: 767px) {
    &::before {
      background-image:
        linear-gradient(180deg, rgba(3, 3, 3, 0.28) 0%, rgba(3, 3, 3, 0.12) 42%, rgba(3, 3, 3, 0.34) 100%),
        image-set(url(${marbleMobileAvif}) type('image/avif'), url(${marbleMobileWebp}) type('image/webp'));
      background-size: 100% auto;
    }
  }
`;
