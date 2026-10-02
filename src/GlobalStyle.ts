import "modern-normalize/modern-normalize.css";

import { css } from "@emotion/react";
import GeistRegular from "../src/assets/fonts/Geist-Regular.ttf";
import GeistMedium from "../src/assets/fonts/Geist-Medium.ttf";
import BebasNeueRegular from "../src/assets/fonts/BebasNeue-Regular.ttf";
import Inter_24ptRegular from "../src/assets/fonts/Inter_24pt-Regular.ttf";

export const GlobalStyle = css`
  /* ========== FONTS ========== */
  @font-face {
    font-family: "Geist";
    src: url(${GeistRegular}) format("truetype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Geist";
    src: url(${GeistMedium}) format("truetype");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Bebas Neue";
    src: url(${BebasNeueRegular}) format("truetype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Inter";
    src: url(${Inter_24ptRegular}) format("truetype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  /* ========== TOKENS (під твою космічну золоту картинку) ========== */
  :root {
    color-scheme: dark;
    /* Primitive -> semantic Obsidian design tokens */
    --obsidian-950: #030304;
    --obsidian-900: #070708;
    --obsidian-850: #0a090c;
    --obsidian-800: #111015;
    --obsidian-700: #18161d;
    --gold-950: #3f270b;
    --gold-800: #765019;
    --gold-700: #94651f;
    --gold-500: #d6a542;
    --gold-400: #e7c364;
    --gold-300: #f1d277;
    --gold-highlight: #fff2bd;
    --obsidian-surface: rgba(9, 8, 11, 0.9);
    --obsidian-surface-hover: rgba(16, 14, 18, 0.94);
    --obsidian-border: rgba(214, 165, 66, 0.24);
    --obsidian-border-hot: rgba(241, 210, 119, 0.58);
    --obsidian-reflection: rgba(255, 242, 189, 0.12);
    --champagne-text: #eee2c7;
    --muted-gold-text: #bcae91;
    --danger-gold-red: #d17a5f;
    --obsidian-blur: 18px;
    --obsidian-shadow-sm: 0 10px 28px rgba(0, 0, 0, 0.34);
    --obsidian-shadow-md: 0 22px 58px rgba(0, 0, 0, 0.48);
    --obsidian-shadow-lg: 0 36px 96px rgba(0, 0, 0, 0.62);
    --gold-glow-sm: 0 0 18px rgba(214, 165, 66, 0.16);
    --gold-glow-md: 0 0 34px rgba(214, 165, 66, 0.24);
    --gold-metal: linear-gradient(110deg, #765019 0%, #b9822c 18%, #f0cc72 38%, #fff2bd 48%, #d8a23c 59%, #8b5c18 82%, #e6c15d 100%);
    --gold-metal-soft: linear-gradient(110deg, #80602a, #e1bd68 38%, #fff0b0 50%, #b9822c 72%, #e6c15d);
    --focus-ring: 0 0 0 3px rgba(241, 210, 119, 0.28);
    --motion-fast: 180ms;
    --motion-normal: 300ms;
    --motion-slow: 620ms;
    --motion-ambient: 16s;
    --ease-obsidian: cubic-bezier(0.22, 1, 0.36, 1);

    /* Services-derived semantic typography */
    --type-display-xl: clamp(3rem, 8vw, 5.25rem);
    --type-display-l: clamp(2.5rem, 6.5vw, 4.25rem);
    --type-h1: clamp(2.25rem, 5.6vw, 4rem);
    --type-h2: clamp(1.85rem, 4.2vw, 3rem);
    --type-h3: clamp(1.25rem, 2.2vw, 1.65rem);
    --type-body-lg: clamp(1rem, 1.6vw, 1.2rem);
    --type-body: 1rem;
    --type-small: 0.8125rem;
    --type-meta: 0.75rem;
    --leading-display: 0.96;
    --leading-heading: 1.08;
    --leading-body: 1.62;
    /* Base */
    --bg: var(--obsidian-950);
    --bg-2: var(--obsidian-850);

    --text: var(--champagne-text);
    --muted: var(--muted-gold-text);
    --faint: rgba(255, 255, 255, 0.45);

    /* Gold / Ember accents */
    --gold-1: #b8860b;
    --gold-2: #f6d365;
    --gold-3: #d4af37;
    --ember: #ffb14a;
    --ember-2: #ff7a1a;

    /* Ukrainian blue (sparingly) */
    --blue: #2563eb;

    /* Surfaces */
    --glass: rgba(10, 10, 16, 0.56);
    --glass-2: rgba(10, 10, 16, 0.38);
    --border: rgba(246, 211, 101, 0.16); /* золота рамка */
    --border-2: rgba(255, 255, 255, 0.08);

    /* Shadows */
    --shadow: 0 18px 60px rgba(0, 0, 0, 0.55);
    --glow-gold: 0 0 26px rgba(246, 211, 101, 0.22);
    --glow-ember: 0 0 30px rgba(255, 177, 74, 0.18);

    /* Fonts */
    --font-family: "Geist", "Inter", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
    --second-family: "Geist", "Inter", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
    --third-family: "Bebas Neue", "Geist", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;

    /* Safe-area */
    --safe-area-inset-top: env(safe-area-inset-top, 0px);
    --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);
    --safe-area-inset-left: env(safe-area-inset-left, 0px);
    --safe-area-inset-right: env(safe-area-inset-right, 0px);
  }

  /* ========== RESET / BASE ========== */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    word-wrap: break-word;
  }

  html {
    height: -webkit-fill-available;
    scroll-behavior: smooth;
    overflow-x: hidden;
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    text-size-adjust: 100%;
  }

  body {
    font-family: var(--font-family);
    color: var(--text);
    min-height: 100vh;
    min-height: -webkit-fill-available;
    overflow-x: hidden;

    /* Якщо ти НЕ ставиш фон через ParticlesBackground wrapper,
       розкоментуй і використовуй фон прямо тут: */
    /* background:
      radial-gradient(900px 420px at 80% 18%, rgba(255, 177, 74, 0.14), transparent 60%),
      radial-gradient(900px 420px at 20% 86%, rgba(246, 211, 101, 0.10), transparent 58%),
      linear-gradient(180deg, var(--bg) 0%, var(--bg-2) 100%),
      url("/bg-space.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed; */

    background:
      radial-gradient(ellipse at 78% 4%, rgba(128, 76, 29, 0.13), transparent 36%),
      radial-gradient(ellipse at 12% 66%, rgba(55, 42, 70, 0.12), transparent 42%),
      linear-gradient(145deg, var(--obsidian-950), var(--obsidian-850) 52%, #050406);
    background-attachment: fixed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;

    padding: var(--safe-area-inset-top) var(--safe-area-inset-right)
      var(--safe-area-inset-bottom) var(--safe-area-inset-left);
  }

  /* Легкий “космічний” оверлей для читабельності + теплі підсвіти */
  body::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    background:
      linear-gradient(117deg, transparent 0 42%, rgba(241, 210, 119, 0.018) 44%, transparent 47%),
      radial-gradient(700px 320px at 78% 22%, rgba(183, 116, 41, 0.08), transparent 60%),
      radial-gradient(900px 600px at 50% 50%, transparent, rgba(0, 0, 0, 0.52));
  }

  #root,
  main,
  .container {
    position: relative;
    z-index: 1;
    width: 100%;
    overflow-x: clip;
  }

  #root { position: relative; z-index: 1; }
  body.modal-open {
    overflow: hidden;
    position: fixed;
    width: 100%;
    height: 100%;
  }

  /* ========== TYPO ========== */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--second-family);
    font-weight: 700;
    letter-spacing: 0;
    color: var(--text);
  }

  h1 {
    font-size: var(--type-h1);
    line-height: var(--leading-display);
    letter-spacing: -0.035em;
    text-wrap: balance;
  }

  h2 {
    font-size: var(--type-h2);
    line-height: var(--leading-heading);
    letter-spacing: -0.025em;
    text-wrap: balance;
  }

  h3 {
    font-size: var(--type-h3);
    line-height: 1.16;
  }

  .type-display-xl { font-size: var(--type-display-xl); line-height: .92; letter-spacing: -.045em; }
  .type-display-l { font-size: var(--type-display-l); line-height: var(--leading-display); letter-spacing: -.04em; }
  .type-eyebrow { color: var(--gold-400); font-size: var(--type-meta); font-weight: 700; letter-spacing: .18em; text-transform: uppercase; }
  .type-body-lg { font-size: var(--type-body-lg); line-height: var(--leading-body); }
  .type-meta { font-size: var(--type-meta); letter-spacing: .08em; text-transform: uppercase; }
  .text-cream { color: var(--champagne-text); }

  .text-gold,
  .premium-heading em,
  .premium-heading strong {
    color: transparent;
    background: var(--gold-metal);
    background-clip: text;
    -webkit-background-clip: text;
    font-style: normal;
  }

  @keyframes vsGoldSweep {
    0% { transform: translate3d(-115%, 0, 0); }
    100% { transform: translate3d(115%, 0, 0); }
  }

  /* Клас для золотого заголовку (коли треба прям “преміум”) */
  .gold-gradient {
    background: var(--gold-metal);
    background-size: 180% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    filter: drop-shadow(0 8px 26px rgba(246, 211, 101, 0.12));
  }

  p,
  span,
  li {
    color: var(--text);
  }

  /* ========== LINKS / BUTTONS ========== */
  a {
    text-decoration: none;
    color: rgba(246, 211, 101, 0.92); /* золото */
    transition: color 200ms ease, filter 200ms ease;
  }
  a:hover {
    color: var(--gold-300);
    filter: drop-shadow(0 0 12px rgba(214, 165, 66, 0.2));
  }

  :focus-visible {
    outline: 1px solid var(--gold-300);
    outline-offset: 3px;
  }

  button {
    cursor: pointer;
    appearance: none;
    background: transparent;
    border: 0;
    border-radius: 0;
    transition: transform 220ms ease, filter 220ms ease, opacity 220ms ease;
  }
  button:active {
    transform: translateY(1px);
  }

  /* ========== MEDIA / FORMS ========== */
  img {
    display: block;
    max-width: 100%;
    height: auto;
    object-fit: cover;
    -webkit-user-drag: none;
  }

  ul,
  li {
    list-style: none;
  }

  input,
  textarea,
  button,
  select {
    font: inherit;
    font-size: 16px;
    color: var(--text);
    border-radius: 0;
    appearance: none;
    -webkit-appearance: none;
  }

  input,
  textarea {
    background: var(--glass-2);
    border: 1px solid var(--border-2);
    outline: none;
  }
  input:focus,
  textarea:focus {
    border-color: var(--border);
    box-shadow: var(--glow-gold);
  }

  ::selection {
    background: rgba(246, 211, 101, 0.24);
    color: var(--text);
  }

  /* Якщо хочеш показувати скролбар мінімально красиво */
  /* body::-webkit-scrollbar { width: 10px; }
  body::-webkit-scrollbar-thumb { background: rgba(246,211,101,0.18); border-radius: 10px; }
  body::-webkit-scrollbar-track { background: rgba(0,0,0,0.25); } */

  @supports (-webkit-touch-callout: none) {
    body {
      height: -webkit-fill-available;
    }
  }

  /* Зменшуємо рух для користувачів, які обрали reduced motion у системі. */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      scroll-behavior: auto !important;
      transition-duration: 0.01ms !important;
    }
  }
`;
