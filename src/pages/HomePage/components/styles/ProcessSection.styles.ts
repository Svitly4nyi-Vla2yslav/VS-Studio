import styled from 'styled-components';

export const ProcessSectionScope = styled.div`
  .sticky-process-grid {
    display: grid;
    grid-template-columns: 380px 1fr;
    gap: 22px;
    align-items: start;
  }

  .sticky-steps {
    position: relative;
    padding: 10px 0;
    display: grid;
    gap: 10px;
  }

  .sticky-steps::before {
    content: '';
    position: absolute;
    left: 22px;
    top: 12px;
    bottom: 12px;
    width: 1px;
    background: linear-gradient(
      180deg,
      rgba(246, 211, 101, 0),
      rgba(246, 211, 101, 0.25),
      rgba(37, 99, 235, 0.18),
      rgba(246, 211, 101, 0)
    );
  }

  .sticky-step {
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 14px 14px 52px;
    border-radius: 16px;
    background: rgba(17, 18, 24, 0.58);
    border: 1px solid rgba(255, 255, 255, 0.08);
    transition:
      transform 220ms ease,
      border-color 220ms ease,
      box-shadow 220ms ease;
    margin: 12px 0;
    cursor: pointer;
    overflow: hidden;
    width: 100%;
    text-align: left;
    appearance: none;
    outline: none;
  }

  .sticky-step span {
    position: absolute;
    left: 12px;
    width: 28px;
    height: 28px;
    display: grid;
    place-items: center;
    border-radius: 999px;
    font-weight: 800;
    font-size: 12px;
    color: rgba(11, 11, 15, 0.95);
    background: linear-gradient(90deg, #b8860b, #f6d365, #d4af37);
    box-shadow: 0 10px 26px rgba(0, 0, 0, 0.35);
  }

  .sticky-step p {
    margin: 0;
    color: rgba(255, 255, 255, 0.92);
    font-weight: 600;
  }

  .sticky-step::after {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    background: linear-gradient(
      90deg,
      rgba(184, 134, 11, 0.85),
      rgba(246, 211, 101, 0.85),
      rgba(212, 175, 55, 0.85),
      rgba(37, 99, 235, 0.65)
    );
    background-size: 220% 220%;
    opacity: 0;
    transition: opacity 220ms ease;
    -webkit-mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    mask-composite: exclude;
    padding: 1px;
    pointer-events: none;
  }

  .sticky-step:hover {
    transform: translateY(-2px);
    border-color: rgba(246, 211, 101, 0.18);
    box-shadow: 0 16px 34px rgba(0, 0, 0, 0.45);
  }

  .sticky-step:hover::after {
    opacity: 0.55;
  }

  .sticky-step:focus-visible {
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.35), 0 18px 42px rgba(0, 0, 0, 0.55);
  }

  .sticky-step.active {
    transform: translateY(-3px);
    border-color: rgba(246, 211, 101, 0.28);
    box-shadow: 0 18px 42px rgba(0, 0, 0, 0.55);
  }

  .sticky-step.active::after {
    opacity: 0.95;
  }

  .sticky-process-card {
    position: sticky;
    top: 0px;
    border-radius: 20px;
    background: rgba(17, 18, 24, 0.62);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 18px 50px rgba(0, 0, 0, 0.55);
    overflow: hidden;
  }

  .sticky-process-card::before {
    content: '';
    position: absolute;
    inset: -40%;
    background:
      radial-gradient(circle at 30% 20%, rgba(246, 211, 101, 0.22), transparent 55%),
      radial-gradient(circle at 70% 30%, rgba(37, 99, 235, 0.18), transparent 58%);
    filter: blur(26px);
    opacity: 0.9;
    pointer-events: none;
  }

  .sticky-process-card h3 {
    position: relative;
    color: rgba(255, 255, 255, 0.98);
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
  }

  .sticky-process-card p {
    position: relative;
    color: rgba(255, 255, 255, 0.93);
    opacity: 1;
    line-height: 1.6;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
  }

  .process-swiper {
    position: relative;
    z-index: 1;
  }

  .process-slide {
    position: relative;
    min-height: 320px;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 18px;
  }

  .process-slide::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: var(--process-bg);
    background-size: cover;
    background-position: center;
    transform: scale(1.03);
  }

  .process-slide::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(160deg, rgba(6, 10, 18, 0.72), rgba(6, 10, 18, 0.92)),
      radial-gradient(480px 240px at 80% 20%, rgba(246, 211, 101, 0.14), transparent 72%);
  }

  .process-content {
    position: relative;
    z-index: 2;
    display: grid;
    align-content: start;
    gap: 10px;
    padding: 6px;
    max-width: 560px;
  }

  .process-kicker {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .process-chip {
    font-size: 12px;
    font-weight: 800;
    padding: 6px 10px;
    border-radius: 999px;
    background: rgba(8, 12, 22, 0.62);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: rgba(255, 255, 255, 0.96);
  }

  .process-chip.subtle {
    opacity: 0.75;
    font-weight: 700;
  }

  .process-nav {
    margin-top: 10px;
    display: flex;
    gap: 10px;
  }

  .nav-btn {
    padding: 10px 12px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 0.92);
    cursor: pointer;
    transition: transform 160ms ease, border-color 160ms ease, box-shadow 160ms ease;
  }

  .nav-btn:hover {
    transform: translateY(-1px);
    border-color: rgba(246, 211, 101, 0.18);
    box-shadow: 0 10px 22px rgba(0, 0, 0, 0.35);
  }

  .nav-btn:disabled {
    opacity: 0.4;
    cursor: default;
    transform: none;
    box-shadow: none;
  }

  .nav-btn.primary {
    border-color: rgba(246, 211, 101, 0.22);
  }

  @media (max-width: 1023px) {
    .sticky-process-grid {
      grid-template-columns: 1fr;
    }

    .sticky-steps {
      position: static;
    }

    .sticky-process-card {
      position: static;
    }

    .process-slide {
      min-height: 280px;
    }
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    .sticky-process-grid {
      grid-template-columns: 0.86fr 1.14fr;
    }

    .sticky-steps {
      position: sticky;
      top: 96px;
    }
  }

  @media (min-width: 1280px) and (max-width: 1439px) {
    .sticky-process-grid {
      grid-template-columns: 0.86fr 1.14fr;
    }

    .sticky-steps {
      position: sticky;
      top: 98px;
    }
  }

  @media (min-width: 1440px) {
    .sticky-process-grid {
      grid-template-columns: 0.86fr 1.14fr;
    }

    .sticky-steps {
      position: sticky;
      top: 102px;
    }
  }
`;
