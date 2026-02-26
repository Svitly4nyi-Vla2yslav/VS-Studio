import styled from 'styled-components';

export const AboutUsScope = styled.div`
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

  @media (max-width: 1023px) {
    .about-main-grid {
      grid-template-columns: 1fr;
    }
  }
`;
