import styled from 'styled-components';

export const HomePageShell = styled.div`
  .page {
    padding: 48px 0 72px;
  }

  .container {
    width: 100%;
    max-width: 1560px;
    margin: 0 auto;
    padding-left: var(--gutter);
    padding-right: var(--gutter);
    overflow-x: visible;
  }

  .section-divider {
    margin: var(--section-space, 36px) 0;
    height: 1px;
    width: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(246, 211, 101, 0.42) 34%,
      rgba(37, 99, 235, 0.32) 66%,
      transparent 100%
    );
    box-shadow: 0 0 18px rgba(246, 211, 101, 0.18);
  }

  .section {
    margin-top: var(--section-space, 36px);
  }

  .section:first-of-type {
    margin-top: 0;
  }

  .section h2 {
    font-size: clamp(28px, 6vw, 46px);
    margin-bottom: 10px;
  }

  .section-header {
    width: min(900px, 100%);
    margin: 0 auto;
    text-align: center;
    padding: clamp(20px, 4vw, 60px) 0;
  }

  .section-header h2 {
    margin-bottom: 12px;
  }

  .section-description {
    max-width: 72ch;
    margin: 0 auto;
    color: rgba(255, 255, 255, 0.74);
    line-height: 1.6;
  }

  .section h3 {
    font-size: 22px;
    margin-bottom: 8px;
  }

  .muted {
    color: rgba(255, 255, 255, 0.72);
  }

  .grid-2 {
    display: grid;
    gap: 14px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .card {
    --mx: 50%;
    --my: 50%;
    position: relative;
    overflow: hidden;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    background: rgba(11, 15, 27, 0.75);
    padding: 18px;
    transition:
      transform var(--dur-mid) var(--ease-smooth),
      border-color var(--dur-mid) var(--ease-smooth),
      box-shadow var(--dur-mid) var(--ease-smooth),
      background var(--dur-mid) var(--ease-smooth);
  }

  .card::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(
      90deg,
      rgba(184, 134, 11, 0.9),
      rgba(246, 211, 101, 0.9),
      rgba(212, 175, 55, 0.9),
      rgba(37, 99, 235, 0.7)
    );
    background-size: 220% 220%;
    opacity: 0;
    transition: opacity 220ms ease;
    animation: gradientFlow 12s ease-in-out infinite;
    -webkit-mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  .card::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: radial-gradient(
      260px 180px at var(--mx) var(--my),
      rgba(246, 211, 101, 0.32),
      transparent 68%
    );
    opacity: 0;
    transition: opacity 220ms ease;
    pointer-events: none;
  }

  .card:hover {
    transform: translateY(-4px);
    border-color: rgba(248, 190, 98, 0.62);
    background: rgba(18, 23, 38, 0.9);
    box-shadow: 0 14px 24px rgba(0, 0, 0, 0.28);
  }

  .card:hover::before {
    opacity: 0.9;
  }

  .card:hover::after {
    opacity: 0.35;
  }

  .btn-row {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    min-height: 46px;
    padding: 0 18px;
    border-radius: 10px;
    font-weight: 700;
    text-align: center;
    transition:
      transform var(--dur-mid) var(--ease-smooth),
      box-shadow var(--dur-mid) var(--ease-smooth),
      border-color var(--dur-mid) var(--ease-smooth),
      background var(--dur-mid) var(--ease-smooth),
      color var(--dur-mid) var(--ease-smooth),
      filter var(--dur-mid) var(--ease-smooth);
  }

  .btn:hover,
  .btn:focus-visible {
    transform: translateY(-2px);
  }

  .btn-primary {
    background: linear-gradient(120deg, #f39a4f, #ffe1b5, #f39a4f);
    background-size: 220% 220%;
    color: #121723;
  }

  .btn-primary:hover,
  .btn-primary:focus-visible {
    color: #f8fafc;
    background: linear-gradient(120deg, #121723, #253a64, #121723);
    background-size: 220% 220%;
    animation: gradientFlow 2.2s linear infinite;
    box-shadow: 0 12px 22px rgba(21, 31, 52, 0.45);
  }

  .btn-secondary {
    border: 1px solid rgba(255, 255, 255, 0.34);
    color: #ffffff;
    background: rgba(255, 255, 255, 0.02);
  }

  .btn-secondary:hover,
  .btn-secondary:focus-visible {
    border-color: rgba(255, 210, 138, 0.85);
    background: rgba(255, 223, 168, 0.95);
    color: #131b2d;
    box-shadow: 0 12px 20px rgba(255, 210, 138, 0.24);
  }

  .btn-magnetic {
    transition: transform 180ms ease, filter 180ms ease;
  }

  .btn-primary.btn-magnetic::after {
    content: '';
    position: absolute;
    inset: -1px auto -1px -10px;
    width: 38%;
    border-radius: inherit;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.64), transparent);
    animation: shimmerSweep 2.8s ease-in-out infinite;
    pointer-events: none;
  }

  @keyframes gradientFlow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes shimmerSweep {
    0% {
      transform: translateX(-120%) skewX(-18deg);
      opacity: 0;
    }
    15% {
      opacity: 0.55;
    }
    50% {
      opacity: 0.35;
    }
    100% {
      transform: translateX(140%) skewX(-18deg);
      opacity: 0;
    }
  }

  @media (max-width: 767px) {
    .page {
      padding: 28px 0 52px;
    }

    .section {
      margin-top: var(--section-space-mobile, 24px);
    }

    .section-divider {
      margin: var(--section-space-mobile, 24px) 0;
    }

    .section h2 {
      font-size: clamp(26px, 9vw, 34px);
    }

    .section-header {
      padding: clamp(20px, 6vw, 40px) 0;
    }

    .section h3 {
      font-size: 20px;
    }

    .card {
      padding: 14px;
    }

    .btn {
      min-height: 44px;
      width: 100%;
    }

    .btn-row {
      width: 100%;
      gap: 10px;
    }

    .grid-2 {
      grid-template-columns: 1fr;
    }
  }
`;
