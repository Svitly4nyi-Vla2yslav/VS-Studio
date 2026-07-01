import styled from 'styled-components';

export const HeroSectionScope = styled.div`
  .hero {
    display: grid;
    gap: 18px;
    padding: 70px 0 30px;
  }

  .hero-with-video {
    position: relative;
    min-height: 560px;
    border-radius: 18px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.14);
    padding: 26px;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-items: end;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    margin-top: auto;
    display: grid;
    gap: 18px;
    align-self: end;
  }

  .hero-video-parallax {
    position: absolute;
    inset: 0;
    z-index: 0;
    will-change: transform;
  }

  .hero h1 {
    font-size: clamp(34px, 8vw, 70px);
    line-height: 0.96;
    max-width: 15ch;
  }

  .hero p {
    max-width: 62ch;
    color: rgba(255, 255, 255, 0.82);
  }

  .hero-supporting {
    max-width: 58ch;
    color: rgba(255, 255, 255, 0.74);
    font-size: clamp(15px, 1.6vw, 18px);
    line-height: 1.55;
  }

  .hero-trustline {
    max-width: 76ch;
    color: rgba(255, 219, 166, 0.92);
    font-size: 14px;
    line-height: 1.6;
  }

  .hero-bento {
    position: relative;
    z-index: 2;
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-self: stretch;
  }

  .bento-tile {
    position: relative;
    overflow: hidden;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    background: rgba(9, 14, 27, 0.72);
    padding: 12px 14px;
    transition: transform var(--dur-mid) var(--ease-smooth), border-color var(--dur-mid) var(--ease-smooth);
  }

  .bento-tile span {
    position: relative;
    z-index: 2;
    display: block;
    color: rgba(255, 255, 255, 0.72);
    font-size: 13px;
    margin-bottom: 6px;
  }

  .bento-tile strong {
    position: relative;
    z-index: 2;
    font-size: 15px;
  }

  .bento-icon-bg {
    position: absolute;
    right: -10px;
    bottom: -14px;
    z-index: 1;
    font-size: clamp(74px, 10vw, 112px);
    color: rgba(149, 204, 255, 0.2);
    opacity: 0.52;
    transform: rotate(-10deg);
    pointer-events: none;
  }

  .bento-tile::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(110deg, transparent 25%, rgba(255, 255, 255, 0.12) 50%, transparent 75%);
    transform: translateX(-120%);
    animation: shimmerTile 5.4s ease-in-out infinite;
    pointer-events: none;
  }

  .bento-tile:hover {
    transform: translateY(-3px);
    border-color: rgba(255, 209, 137, 0.62);
  }

  @keyframes shimmerTile {
    0% {
      transform: translateX(-120%);
    }
    100% {
      transform: translateX(120%);
    }
  }

  @media (max-width: 767px) {
    .hero {
      padding-top: 38px;
      gap: 14px;
    }

    .hero-with-video {
      min-height: 500px;
      padding: 14px;
    }

    .hero-bento {
      grid-template-columns: 1fr;
    }

    .hero h1 {
      font-size: clamp(30px, 10vw, 44px);
      max-width: 12ch;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    .hero-bento {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    .hero-with-video {
      grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
      align-items: end;
    }
  }

  @media (min-width: 1280px) {
    .hero-with-video {
      grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
      align-items: end;
    }
  }
`;
