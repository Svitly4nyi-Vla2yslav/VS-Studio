import styled from 'styled-components';

export const ConfiguratorSectionScope = styled.div`
  .configurator-card {
    border-radius: 20px;
    background: rgba(17, 18, 24, 0.62);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 18px 50px rgba(0, 0, 0, 0.55);
    overflow: hidden;
    position: relative;
    display: grid;
    gap: 12px;
    max-width: 720px;
  }

  .configurator-card::before {
    content: '';
    position: absolute;
    inset: -35%;
    background:
      radial-gradient(circle at 20% 20%, rgba(246, 211, 101, 0.22), transparent 55%),
      radial-gradient(circle at 75% 25%, rgba(37, 99, 235, 0.18), transparent 58%);
    filter: blur(30px);
    opacity: 0.85;
    pointer-events: none;
  }

  .seg {
    position: relative;
    margin-bottom: 16px;
  }

  .seg-label {
    font-weight: 700;
    opacity: 0.86;
    margin-bottom: 10px;
  }

  .seg-row {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 10px;
  }

  .seg-btn {
    text-align: left;
    padding: 12px 12px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    transition:
      transform 200ms ease,
      border-color 200ms ease,
      box-shadow 200ms ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .seg-btn::after {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    opacity: 0;
    transition: opacity 220ms ease;
    background: linear-gradient(
      90deg,
      rgba(184, 134, 11, 0.9),
      rgba(246, 211, 101, 0.9),
      rgba(212, 175, 55, 0.9),
      rgba(37, 99, 235, 0.65)
    );
    -webkit-mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    padding: 1px;
    pointer-events: none;
  }

  .seg-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 34px rgba(0, 0, 0, 0.35);
  }

  .seg-btn.active {
    border-color: rgba(246, 211, 101, 0.22);
  }

  .seg-btn.active::after {
    opacity: 0.95;
  }

  .seg-title {
    display: block;
    font-weight: 800;
  }

  .seg-hint {
    display: block;
    opacity: 0.72;
    font-size: 12px;
    margin-top: 2px;
  }

  .offer {
    margin-top: 4px;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    padding-top: 12px;
  }

  .offer-title {
    font-weight: 700;
    margin-bottom: 8px;
  }

  .offer-list {
    display: grid;
    gap: 6px;
    margin: 0 0 12px;
    padding-left: 20px;
    color: rgba(255, 255, 255, 0.82);
  }

  .offer-list li {
    list-style: disc;
  }

  @media (max-width: 767px) {
    .seg-row {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    .seg-row {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
`;
