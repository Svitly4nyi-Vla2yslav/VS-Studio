import styled from 'styled-components';

export const InstagramFeedSectionScope = styled.div`
  .instagram-shell { max-width: 1280px; margin: 0 auto; padding: 96px 24px; }
  .instagram-heading { display: flex; align-items: flex-end; justify-content: space-between; gap: 32px; margin-bottom: 40px; }
  .instagram-copy { max-width: 760px; }
  .section-kicker { display: inline-flex; align-items: center; gap: 8px; margin-bottom: 18px; border: 1px solid rgba(246,211,101,.28); border-radius: 999px; padding: 7px 14px; font-size: 12px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: rgba(255,236,196,.88); background: rgba(246,211,101,.08); }
  h2 { margin: 0 0 16px; max-width: 760px; }
  .instagram-copy > p { margin: 0; max-width: 68ch; color: rgba(255,255,255,.76); line-height: 1.65; }
  .instagram-profile-link { flex: 0 0 auto; min-width: 190px; }
  .automation-flow { display: grid; grid-template-columns: 1fr auto 1fr auto 1fr; align-items: center; gap: 18px; margin-bottom: 40px; border: 1px solid rgba(246,211,101,.16); border-radius: 20px; padding: 22px; background: linear-gradient(135deg,rgba(246,211,101,.07),rgba(37,99,235,.07)); }
  .automation-step { min-width: 0; }
  .automation-step > span { display: inline-grid; width: 32px; height: 32px; place-items: center; margin-bottom: 10px; border: 1px solid rgba(246,211,101,.3); border-radius: 50%; color: #ffe3aa; font-size: 12px; font-weight: 800; }
  .automation-step strong { display: block; margin-bottom: 6px; color: #fff5dc; font-size: 16px; }
  .automation-step p { margin: 0; color: rgba(255,255,255,.68); font-size: 14px; line-height: 1.55; }
  .automation-arrow { transform: rotate(-90deg); color: rgba(246,211,101,.68); }
  .stories-block { margin-bottom: 28px; }
  .stories-label { display: block; margin-bottom: 12px; color: rgba(255,255,255,.72); font-size: 13px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; }
  .stories-row { display: flex; gap: 14px; overflow-x: auto; padding: 2px 2px 10px; scrollbar-width: thin; }
  .story-link { flex: 0 0 auto; border-radius: 50%; }
  .story-ring { display: grid; width: 72px; height: 72px; place-items: center; border-radius: 50%; padding: 3px; background: linear-gradient(135deg,#f6d365,#f04f78 55%,#6b5cff); transition: transform 220ms ease, box-shadow 220ms ease; }
  .story-ring img { width: 100%; height: 100%; border: 3px solid #090d17; border-radius: inherit; object-fit: cover; background: #111827; }
  .story-link:hover .story-ring, .story-link:focus-visible .story-ring { transform: translateY(-3px) scale(1.04); box-shadow: 0 10px 24px rgba(240,79,120,.28); }
  .instagram-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 16px; }
  .instagram-card, .instagram-skeleton { position: relative; overflow: hidden; border: 1px solid rgba(255,255,255,.12); border-radius: 18px; aspect-ratio: 1 / 1; background: rgba(11,15,27,.82); }
  .instagram-card { isolation: isolate; color: #fff; box-shadow: 0 18px 40px rgba(0,0,0,.2); }
  .instagram-card::after { content: ''; position: absolute; inset: 0; z-index: 1; background: linear-gradient(180deg,transparent 44%,rgba(5,8,14,.9)); opacity: .72; transition: opacity 280ms ease; }
  .instagram-card img { width: 100%; height: 100%; object-fit: cover; transition: transform 420ms cubic-bezier(.22,1,.36,1), filter 320ms ease; }
  .instagram-card:hover img, .instagram-card:focus-visible img { transform: scale(1.055); filter: saturate(1.08) brightness(.82); }
  .instagram-card:hover::after, .instagram-card:focus-visible::after { opacity: 1; }
  .media-type-icon { position: absolute; top: 16px; right: 16px; z-index: 2; filter: drop-shadow(0 2px 6px rgba(0,0,0,.7)); }
  .instagram-card-overlay { position: absolute; inset: auto 18px 18px; z-index: 2; display: flex; align-items: flex-start; gap: 10px; opacity: 0; transform: translateY(10px); transition: opacity 260ms ease, transform 260ms ease; }
  .instagram-card-overlay svg { flex: 0 0 auto; margin-top: 3px; }
  .instagram-card-overlay span { display: -webkit-box; overflow: hidden; font-size: 14px; line-height: 1.45; -webkit-box-orient: vertical; -webkit-line-clamp: 2; }
  .instagram-card:hover .instagram-card-overlay, .instagram-card:focus-visible .instagram-card-overlay { opacity: 1; transform: translateY(0); }
  .instagram-skeleton { background: linear-gradient(110deg,rgba(255,255,255,.04) 8%,rgba(255,255,255,.1) 18%,rgba(255,255,255,.04) 33%); background-size: 200% 100%; animation: instagramShimmer 1.4s linear infinite; }
  .instagram-empty { display: grid; justify-items: center; gap: 12px; border: 1px dashed rgba(255,255,255,.18); border-radius: 18px; padding: 52px 24px; text-align: center; color: rgba(255,255,255,.75); background: rgba(11,15,27,.55); }
  .instagram-empty svg { width: 28px; height: 28px; color: #f6d365; }
  .instagram-empty p { margin: 0; }
  .instagram-empty a { color: #ffe1a8; font-weight: 700; text-decoration: underline; text-underline-offset: 4px; }
  .instagram-pagination { display: grid; justify-items: center; gap: 10px; margin-top: 28px; }
  .load-more-button { min-width: 220px; cursor: pointer; }
  .load-more-button:disabled { cursor: wait; opacity: .72; }
  .instagram-end { color: rgba(255,255,255,.56); font-size: 14px; }
  .load-more-error { margin: 0; color: #ffb4b4; font-size: 14px; }
  .spin { animation: instagramSpin .8s linear infinite; }
  @keyframes instagramShimmer { to { background-position-x: -200%; } }
  @keyframes instagramSpin { to { transform: rotate(360deg); } }
  @media (prefers-reduced-motion: reduce) { .instagram-card img, .instagram-card-overlay, .story-ring { transition: none; } .instagram-skeleton { animation: none; } }
  @media (max-width: 900px) { .instagram-heading { align-items: flex-start; flex-direction: column; } .automation-flow { grid-template-columns: 1fr; } .automation-arrow { justify-self: center; transform: none; } .instagram-grid { grid-template-columns: repeat(2,minmax(0,1fr)); } }
  @media (max-width: 560px) { .instagram-shell { padding: 76px 16px; } .instagram-heading { margin-bottom: 30px; } .instagram-profile-link { width: 100%; } .instagram-grid { gap: 10px; } .instagram-card, .instagram-skeleton { border-radius: 13px; } .instagram-card-overlay { display: none; } .story-ring { width: 64px; height: 64px; } }
`;
