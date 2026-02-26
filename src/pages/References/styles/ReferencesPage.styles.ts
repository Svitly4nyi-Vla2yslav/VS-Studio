import styled from 'styled-components';

export const ReferencesPageScope = styled.div`
  .references-page {
    background:
      radial-gradient(960px 360px at 12% -10%, rgba(184, 134, 11, 0.14), transparent 62%),
      radial-gradient(760px 300px at 88% 0%, rgba(37, 99, 235, 0.1), transparent 66%),
      linear-gradient(180deg, #0b0b0f 0%, #111111 100%);
  }

  .references-hero h1,
  .references-title {
    font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
    background: linear-gradient(95deg, #b8860b, #f6d365, #d4af37);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .references-filter-wrap {
    display: grid;
    gap: 10px;
  }

  .references-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .references-filter-chip {
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.24);
    background: rgba(255, 255, 255, 0.04);
    color: rgba(255, 255, 255, 0.9);
    font-size: 14px;
    font-weight: 600;
    padding: 8px 12px;
    transition:
      border-color var(--dur-fast) var(--ease-smooth),
      background var(--dur-fast) var(--ease-smooth),
      transform var(--dur-fast) var(--ease-smooth);
  }

  .references-filter-chip:hover {
    transform: translateY(-1px);
    border-color: rgba(255, 209, 137, 0.75);
  }

  .references-filter-chip:focus-visible {
    outline: 2px solid rgba(246, 211, 101, 0.92);
    outline-offset: 2px;
  }

  .references-filter-chip.active {
    border-color: rgba(246, 211, 101, 0.8);
    background: rgba(246, 211, 101, 0.12);
    color: #ffe6b4;
  }

  .references-metric-band .grid-3 {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }

  .references-metric-card h3 {
    margin-bottom: 8px;
  }

  .references-metric-line {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .references-metric-line span {
    color: #f6d365;
  }

  .references-case-card {
    display: grid;
    gap: 8px;
  }

  .references-case-card strong {
    color: #ffe8bf;
  }

  .references-case-metrics {
    display: grid;
    gap: 6px;
    margin-top: 6px;
  }

  .references-case-metrics p {
    font-size: 17px;
    font-weight: 700;
  }

  .references-case-metrics span {
    color: #f6d365;
  }

  .references-compare {
    position: relative;
    overflow: hidden;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    min-height: 320px;
    height: clamp(320px, 42vw, 520px);
    background: #0b0b0f;
  }

  .references-compare img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    user-select: none;
    pointer-events: none;
  }

  .references-compare .after {
    position: absolute;
    inset: 0;
  }

  .references-compare .before-wrap {
    position: absolute;
    inset: 0 auto 0 0;
    overflow: hidden;
    border-right: 2px solid rgba(246, 211, 101, 0.95);
  }

  .references-compare-handle {
    position: absolute;
    top: 0;
    transform: translateX(-50%);
    width: 30px;
    height: 100%;
    border: 0;
    background: transparent;
  }

  .references-compare-handle::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    height: 30px;
    border-radius: 999px;
    border: 2px solid rgba(246, 211, 101, 0.95);
    background: rgba(11, 11, 15, 0.9);
  }

  .references-compare-handle:focus-visible {
    outline: 2px solid rgba(37, 99, 235, 0.9);
    outline-offset: -2px;
  }

  .references-compare-label {
    position: absolute;
    top: 12px;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.01em;
    color: #fff;
    background: rgba(0, 0, 0, 0.45);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 999px;
    padding: 5px 10px;
  }

  .references-compare-label.before {
    left: 12px;
  }

  .references-compare-label.after {
    right: 12px;
  }
`;
