import styled from 'styled-components';

export const AboutUsScope = styled.div`
  .about-hero {
    position: relative;
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 20px;
    background:
      radial-gradient(120% 100% at 0% 0%, rgba(244, 164, 84, 0.18), transparent 58%),
      radial-gradient(120% 100% at 100% 100%, rgba(77, 115, 197, 0.2), transparent 64%),
      rgba(9, 12, 22, 0.9);
    padding: 42px 30px;
  }

  .about-hero-eyebrow {
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.62);
  }

  .about-trustline {
    margin: 0;
    font-weight: 600;
    color: #ffe4bd;
  }

  .about-main-grid {
    display: grid;
    grid-template-columns: 40% 1fr;
    gap: 16px;
  }

  .about-photo-card,
  .about-text-card {
    display: grid;
    gap: 12px;
  }

  .about-photo-image {
    width: 100%;
    height: auto;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.16);
    display: block;
    object-fit: cover;
  }

  .about-photo-caption {
    margin: 0;
  }

  .about-geo-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .about-geo-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.22);
    background: rgba(255, 255, 255, 0.04);
    color: rgba(255, 255, 255, 0.9);
    padding: 6px 10px;
    font-size: 13px;
    font-weight: 600;
  }

  .about-local-priority {
    border-left: 3px solid rgba(255, 206, 126, 0.84);
    padding-left: 10px;
    color: #ffe8bf;
    font-weight: 600;
  }

  .about-step-card {
    min-height: 180px;
  }

  .about-value-grid {
    gap: 18px;
  }

  .about-value-card {
    min-height: 260px;
    padding: 24px;
    border-radius: 18px;
    border-color: rgba(255, 255, 255, 0.2);
    background:
      linear-gradient(160deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02)),
      rgba(10, 13, 24, 0.92);
  }

  .about-value-card h3 {
    margin-bottom: 14px;
    font-size: clamp(24px, 3vw, 30px);
  }

  .about-value-card p {
    font-size: 17px;
    line-height: 1.6;
  }

  .about-trust-metric {
    margin: 4px 0 10px;
    font-size: clamp(28px, 4vw, 42px);
    font-weight: 800;
    line-height: 1;
    color: #ffd08a;
  }

  .about-cta-band {
    padding: 30px 24px;
  }

  @media (max-width: 1023px) {
    .about-hero {
      padding: 28px 18px;
      border-radius: 16px;
    }

    .about-main-grid {
      grid-template-columns: 1fr;
    }

    .about-value-card {
      min-height: 220px;
      padding: 18px;
    }
  }
`;
