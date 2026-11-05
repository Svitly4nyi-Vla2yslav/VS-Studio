import styled from 'styled-components';

export const InstagramFeedSectionScope = styled.div`
  .instagram-section { position: relative; z-index: 1; overflow: visible; }
  .instagram-shell { display: flow-root; width: 100%; padding: 96px clamp(16px,4vw,72px); }
  .instagram-heading { display: flex; align-items: flex-end; justify-content: space-between; gap: 32px; max-width: 1480px; margin: 0 auto 40px; }
  .instagram-copy { max-width: 820px; }
  .section-kicker { display: inline-flex; align-items: center; gap: 8px; margin-bottom: 18px; border: 1px solid rgba(246,211,101,.28); border-radius: 999px; padding: 7px 14px; color: rgba(255,236,196,.88); background: rgba(246,211,101,.08); font-size: 12px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
  h2 { max-width: 820px; margin: 0 0 16px; }
  .instagram-copy > p { max-width: 72ch; margin: 0; color: rgba(255,255,255,.76); line-height: 1.65; }
  .instagram-profile-link { flex: 0 0 auto; min-width: 190px; }
  .automation-flow { display: grid; grid-template-columns: 1fr auto 1fr auto 1fr; align-items: center; gap: 18px; max-width: 1480px; margin: 0 auto 32px; border: 1px solid rgba(246,211,101,.16); border-radius: 20px; padding: 22px; background: linear-gradient(135deg,rgba(246,211,101,.07),rgba(214,41,118,.06)); }
  .automation-step { min-width: 0; }
  .automation-step > span { display: inline-grid; width: 32px; height: 32px; place-items: center; margin-bottom: 10px; border: 1px solid rgba(246,211,101,.3); border-radius: 50%; color: #ffe3aa; font-size: 12px; font-weight: 800; }
  .automation-step strong { display: block; margin-bottom: 6px; color: #fff5dc; font-size: 16px; }
  .automation-step p { margin: 0; color: rgba(255,255,255,.68); font-size: 14px; line-height: 1.55; }
  .automation-arrow { transform: rotate(-90deg); color: rgba(246,211,101,.68); }
  .stories-block, .instagram-profile-summary, .instagram-grid, .instagram-pagination { max-width: 1480px; margin-right: auto; margin-left: auto; }
  .stories-block { margin-bottom: 28px; }
  .stories-label { display: block; margin-bottom: 12px; color: rgba(255,255,255,.72); font-size: 13px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; }
  .stories-row { display: flex; gap: 14px; overflow-x: auto; padding: 2px 2px 10px; scrollbar-width: thin; }
  .story-link { flex: 0 0 auto; border: 0; border-radius: 50%; padding: 0; cursor: pointer; color: inherit; background: transparent; }
  .story-ring { display: grid; width: 72px; height: 72px; place-items: center; border-radius: 50%; padding: 3px; background: linear-gradient(135deg,#feda75,#d62976 55%,#4f5bd5); transition: transform 220ms ease,box-shadow 220ms ease; }
  .story-ring img { width: 100%; height: 100%; border: 3px solid #090d17; border-radius: inherit; object-fit: cover; background: #111827; }
  .story-link:hover .story-ring, .story-link:focus-visible .story-ring { transform: translateY(-3px) scale(1.04); box-shadow: 0 10px 24px rgba(214,41,118,.28); }
  .instagram-profile-summary { display: flex; align-items: center; gap: 14px; margin-bottom: 18px; border: 1px solid rgba(255,255,255,.12); border-radius: 18px; padding: 14px 18px; background: rgba(7,9,15,.84); box-shadow: 0 18px 50px rgba(0,0,0,.2); }
  .profile-avatar-ring { display: grid; width: 58px; height: 58px; flex: 0 0 auto; place-items: center; border-radius: 50%; padding: 3px; color: #fff; background: linear-gradient(135deg,#feda75,#d62976 55%,#4f5bd5); }
  .profile-avatar-ring img { width: 100%; height: 100%; border: 3px solid #090d17; border-radius: inherit; object-fit: cover; }
  .instagram-profile-summary > div { display: grid; gap: 3px; min-width: 0; }
  .instagram-profile-summary strong { color: #fff; font-size: 16px; }
  .instagram-profile-summary div span { color: rgba(255,255,255,.58); font-size: 13px; }
  .live-badge { margin-left: auto; border: 1px solid rgba(80,200,120,.28); border-radius: 999px; padding: 7px 11px; color: #8ce8a9; background: rgba(80,200,120,.09); font-size: 11px; font-weight: 800; letter-spacing: .05em; text-transform: uppercase; }
  .instagram-grid { position: relative; z-index: 2; display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); align-items: start; gap: 18px; }
  .instagram-card, .instagram-skeleton { overflow: hidden; border: 1px solid rgba(255,255,255,.14); border-radius: 18px; background: rgba(7,9,15,.94); box-shadow: 0 24px 60px rgba(0,0,0,.3); }
  .instagram-card { color: #fff; }
  .post-header { display: flex; align-items: center; gap: 11px; padding: 13px 15px; }
  .post-avatar { display: grid; width: 38px; height: 38px; flex: 0 0 auto; place-items: center; border-radius: 50%; padding: 2px; color: #fff; background: linear-gradient(135deg,#feda75,#d62976 55%,#4f5bd5); }
  .post-avatar img { width: 100%; height: 100%; border: 2px solid #090d17; border-radius: inherit; object-fit: cover; }
  .post-header > div { display: grid; gap: 2px; min-width: 0; }
  .post-header strong { overflow: hidden; color: #fff; font-size: 14px; text-overflow: ellipsis; white-space: nowrap; }
  .post-header span { color: rgba(255,255,255,.55); font-size: 11px; }
  .post-header > svg { margin-left: auto; color: rgba(255,255,255,.7); }
  .post-media { position: relative; display: block; overflow: hidden; aspect-ratio: 1 / 1; color: #fff; background: #050608; }
  .post-media > img { width: 100%; height: 100%; object-fit: contain; transition: transform 420ms cubic-bezier(.22,1,.36,1),filter 320ms ease; }
  .post-media:hover > img, .post-media:focus-visible > img { transform: scale(1.025); filter: brightness(.86); }
  .media-type-icon { position: absolute; top: 14px; right: 14px; display: inline-flex; align-items: center; gap: 7px; border: 1px solid rgba(255,255,255,.2); border-radius: 999px; padding: 7px 10px; color: #fff; background: rgba(0,0,0,.62); font-size: 11px; font-weight: 800; backdrop-filter: blur(8px); }
  .post-content { padding: 15px 16px 18px; }
  .post-actions { display: flex; align-items: center; gap: 17px; padding-bottom: 13px; }
  .post-actions span, .post-actions a { display: inline-flex; align-items: center; gap: 7px; color: rgba(255,255,255,.9); font-size: 13px; font-weight: 700; }
  .post-actions svg { width: 17px; height: 17px; }
  .post-actions span:first-child svg { color: #ff4d75; }
  .post-actions a { margin-left: auto; color: #f6d365; }
  .post-caption { display: -webkit-box; max-height: 4.75em; margin: 0; overflow: hidden; color: rgba(255,255,255,.84); font-size: 14px; line-height: 1.58; white-space: pre-wrap; overflow-wrap: anywhere; -webkit-box-orient: vertical; -webkit-line-clamp: 3; transition: max-height 360ms ease; }
  .instagram-card:hover .post-caption, .instagram-card:focus-within .post-caption { display: block; max-height: 48rem; -webkit-line-clamp: unset; }
  .post-caption strong { color: #fff; }
  .post-content time { display: block; margin-top: 12px; color: rgba(255,255,255,.42); font-size: 10px; letter-spacing: .05em; text-transform: uppercase; }
  .instagram-skeleton { min-height: 520px; background: linear-gradient(110deg,rgba(255,255,255,.04) 8%,rgba(255,255,255,.1) 18%,rgba(255,255,255,.04) 33%); background-size: 200% 100%; animation: instagramShimmer 1.4s linear infinite; }
  .instagram-empty { display: grid; max-width: 1480px; justify-items: center; gap: 12px; margin: 0 auto; border: 1px dashed rgba(255,255,255,.18); border-radius: 18px; padding: 52px 24px; text-align: center; color: rgba(255,255,255,.75); background: rgba(11,15,27,.55); }
  .instagram-empty svg { width: 28px; height: 28px; color: #f6d365; }
  .instagram-empty p { margin: 0; }
  .instagram-empty a { color: #ffe1a8; font-weight: 700; text-decoration: underline; text-underline-offset: 4px; }
  .instagram-pagination { display: grid; justify-items: center; gap: 10px; margin-top: 30px; }
  .load-more-button { min-width: 240px; cursor: pointer; }
  .instagram-end { color: rgba(255,255,255,.56); font-size: 14px; }
  @keyframes instagramShimmer { to { background-position-x: -200%; } }
  @media (prefers-reduced-motion: reduce) { .post-media > img, .post-caption, .story-ring { transition: none; } .instagram-skeleton { animation: none; } }
  @media (max-width: 1180px) { .instagram-grid { grid-template-columns: repeat(2,minmax(0,1fr)); } }
  @media (max-width: 900px) { .instagram-heading { align-items: flex-start; flex-direction: column; } .automation-flow { grid-template-columns: 1fr; } .automation-arrow { justify-self: center; transform: none; } }
  @media (max-width: 700px) { .instagram-grid { grid-template-columns: 1fr; max-width: 680px; } .instagram-profile-summary { max-width: 680px; } }
  @media (max-width: 560px) { .instagram-shell { padding: 76px 12px; } .instagram-heading { margin-bottom: 30px; padding: 0 4px; } .instagram-profile-link { width: 100%; } .automation-flow { border-radius: 16px; padding: 18px; } .instagram-card,.instagram-skeleton { border-radius: 14px; } .instagram-skeleton { min-height: 520px; } .post-actions { gap: 12px; } .post-actions span,.post-actions a { font-size: 12px; } .post-actions a { font-size: 0; } .post-actions a svg { width: 18px; height: 18px; } .story-ring { width: 64px; height: 64px; } .live-badge { display: none; } }
`;

export const InstagramStoryViewer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100000;
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100dvh;
  padding: 16px;
  background: rgba(0, 0, 0, .94);
  backdrop-filter: blur(18px);

  .story-viewer-frame {
    position: relative;
    width: min(100%, 520px);
    height: min(calc(100dvh - 32px), 920px);
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, .16);
    border-radius: 22px;
    color: #fff;
    background: #050507;
    box-shadow: 0 30px 100px rgba(0, 0, 0, .7);
  }

  .story-progress {
    position: absolute;
    top: 10px;
    right: 12px;
    left: 12px;
    z-index: 4;
    display: flex;
    gap: 5px;
  }

  .story-progress span {
    height: 3px;
    flex: 1;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(255, 255, 255, .34);
  }

  .story-progress span.is-active { background: #fff; }

  .story-viewer-header {
    position: absolute;
    top: 22px;
    right: 0;
    left: 0;
    z-index: 4;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 14px 24px;
    background: linear-gradient(180deg, rgba(0, 0, 0, .78), transparent);
  }

  .story-viewer-avatar {
    display: grid;
    width: 40px;
    height: 40px;
    flex: 0 0 auto;
    place-items: center;
    border-radius: 50%;
    padding: 2px;
    background: linear-gradient(135deg, #feda75, #d62976 55%, #4f5bd5);
  }

  .story-viewer-avatar img {
    width: 100%;
    height: 100%;
    border: 2px solid #09090b;
    border-radius: inherit;
    object-fit: cover;
  }

  .story-viewer-header > div { display: grid; gap: 2px; min-width: 0; }
  .story-viewer-header strong { overflow: hidden; font-size: 14px; text-overflow: ellipsis; white-space: nowrap; }
  .story-viewer-header span { color: rgba(255, 255, 255, .7); font-size: 11px; }

  .story-viewer-header button,
  .story-nav {
    display: grid;
    width: 44px;
    height: 44px;
    place-items: center;
    border: 1px solid rgba(255, 255, 255, .18);
    border-radius: 50%;
    cursor: pointer;
    color: #fff;
    background: rgba(0, 0, 0, .48);
    backdrop-filter: blur(10px);
  }

  .story-viewer-header button { margin-left: auto; }

  .story-viewer-media,
  .story-viewer-media img,
  .story-viewer-media video {
    width: 100%;
    height: 100%;
  }

  .story-viewer-media img,
  .story-viewer-media video {
    display: block;
    object-fit: contain;
    background: #000;
  }

  .story-nav {
    position: absolute;
    top: 50%;
    z-index: 4;
    transform: translateY(-50%);
  }

  .story-nav-prev { left: 12px; }
  .story-nav-next { right: 12px; }

  .story-instagram-link {
    position: absolute;
    right: 16px;
    bottom: 16px;
    left: 16px;
    z-index: 4;
    display: flex;
    min-height: 48px;
    align-items: center;
    justify-content: center;
    gap: 9px;
    border: 1px solid rgba(255, 255, 255, .2);
    border-radius: 999px;
    color: #fff;
    background: rgba(0, 0, 0, .6);
    font-size: 13px;
    font-weight: 800;
    backdrop-filter: blur(12px);
  }

  button:hover,
  button:focus-visible,
  .story-instagram-link:hover,
  .story-instagram-link:focus-visible {
    border-color: rgba(246, 211, 101, .72);
    outline: none;
    color: #ffe3aa;
  }

  @media (max-width: 560px) {
    padding: 0;

    .story-viewer-frame {
      width: 100vw;
      height: 100dvh;
      border: 0;
      border-radius: 0;
    }

    .story-nav { width: 40px; height: 40px; opacity: .82; }
    .story-nav-prev { left: 8px; }
    .story-nav-next { right: 8px; }
  }
`;

