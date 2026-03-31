import styled from 'styled-components';

export const ProjectsSectionScope = styled.div`
  .projects-section {
    width: 100%;
  }

  .projects-shell {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 104px 24px 96px;
  }

  .projects-header {
    width: 100%;
    margin: 0 auto 52px;
    padding: 0;
  }

  .section-kicker {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 18px;
    border: 1px solid rgba(246, 211, 101, 0.28);
    border-radius: 999px;
    padding: 7px 14px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(255, 236, 196, 0.88);
    background: rgba(246, 211, 101, 0.08);
    box-shadow: 0 0 24px rgba(246, 211, 101, 0.08);
  }

  .projects-header h2 {
    max-width: 820px;
    margin: 0 auto 18px;
    font-size: clamp(36px, 5vw, 56px);
    line-height: 1.08;
    text-wrap: balance;
  }

  .projects-header .section-description {
    max-width: 760px;
    margin: 0 auto;
    font-size: 18px;
    line-height: 1.65;
    color: rgba(255, 255, 255, 0.82);
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
    align-items: stretch;
  }

  .projects-grid .project-card {
    display: flex;
    flex-direction: column;
    gap: 0;
    height: 100%;
    padding: 16px;
    border-radius: 22px;
    text-align: center;
    transition:
      transform 340ms cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 340ms cubic-bezier(0.22, 1, 0.36, 1),
      border-color 340ms cubic-bezier(0.22, 1, 0.36, 1),
      background 340ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .project-preview {
    position: relative;
    overflow: hidden;
    border-radius: 18px;
    aspect-ratio: 16 / 10;
    min-height: 220px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background:
      radial-gradient(circle at top left, rgba(246, 211, 101, 0.14), transparent 42%),
      rgba(6, 10, 18, 0.94);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.08),
      0 18px 34px rgba(0, 0, 0, 0.28);
    transition:
      transform 360ms cubic-bezier(0.22, 1, 0.36, 1),
      border-color 360ms cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 360ms cubic-bezier(0.22, 1, 0.36, 1),
      filter 360ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .project-preview::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 1;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.08), transparent 22%),
      linear-gradient(180deg, rgba(5, 8, 14, 0.22), transparent 32%);
    pointer-events: none;
  }

  .project-preview::after {
    content: '';
    position: absolute;
    inset: auto 10% 12px;
    height: 26px;
    z-index: 1;
    border-radius: 999px;
    background: radial-gradient(circle, rgba(246, 211, 101, 0.22), transparent 72%);
    opacity: 0;
    transform: scale(0.78);
    transition:
      opacity 360ms cubic-bezier(0.22, 1, 0.36, 1),
      transform 360ms cubic-bezier(0.22, 1, 0.36, 1);
    pointer-events: none;
  }

  .project-preview img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    transition:
      transform 420ms cubic-bezier(0.22, 1, 0.36, 1),
      filter 420ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .project-preview .preview-overlay {
    position: absolute;
    inset: 0;
    z-index: 2;
    background:
      linear-gradient(180deg, rgba(8, 12, 20, 0.08) 0%, rgba(8, 12, 20, 0.24) 42%, rgba(8, 12, 20, 0.72) 100%),
      radial-gradient(460px 220px at 15% 10%, rgba(246, 211, 101, 0.16), transparent 56%);
    opacity: 1;
    transition:
      opacity 360ms cubic-bezier(0.22, 1, 0.36, 1),
      background 360ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .project-card:hover {
    transform: translateY(-8px) scale(1.01);
    box-shadow: 0 26px 48px rgba(0, 0, 0, 0.34);
  }

  .project-card:hover .project-preview {
    transform: translateY(-3px) scale(1.01);
    border-color: rgba(246, 211, 101, 0.5);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.1),
      inset 0 18px 26px rgba(255, 255, 255, 0.04),
      0 24px 42px rgba(0, 0, 0, 0.34),
      0 0 0 1px rgba(246, 211, 101, 0.16);
    filter: saturate(1.05);
  }

  .project-card:hover .project-preview img {
    transform: scale(1.055);
    filter: saturate(1.08) brightness(1.03);
  }

  .project-card:hover .project-preview::after {
    opacity: 1;
    transform: scale(1);
  }

  .project-card:hover .project-preview .preview-overlay {
    background:
      linear-gradient(180deg, rgba(8, 12, 20, 0.02) 0%, rgba(8, 12, 20, 0.14) 36%, rgba(8, 12, 20, 0.62) 100%),
      radial-gradient(460px 240px at 18% 8%, rgba(246, 211, 101, 0.28), transparent 58%);
  }

  .project-copy {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0;
    align-items: center;
  }

  .project-heading {
    margin-top: 18px;
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .project-heading h3 {
    margin: 0 0 12px;
    font-size: 18px;
    line-height: 1.25;
    transition:
      transform 320ms cubic-bezier(0.22, 1, 0.36, 1),
      color 320ms cubic-bezier(0.22, 1, 0.36, 1),
      text-shadow 320ms cubic-bezier(0.22, 1, 0.36, 1);
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .project-description {
    margin: 0;
    min-height: 96px;
    font-size: 15px;
    color: rgba(255, 255, 255, 0.78);
    line-height: 1.7;
    max-width: 34ch;
    margin-inline: auto;
    transition:
      transform 320ms cubic-bezier(0.22, 1, 0.36, 1),
      color 320ms cubic-bezier(0.22, 1, 0.36, 1),
      opacity 320ms cubic-bezier(0.22, 1, 0.36, 1);
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }

  .project-benefit {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin-top: 18px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    padding-top: 16px;
    width: 100%;
    transition:
      border-color 320ms cubic-bezier(0.22, 1, 0.36, 1),
      transform 320ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .project-benefit strong {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(246, 211, 101, 0.88);
    transition:
      letter-spacing 320ms cubic-bezier(0.22, 1, 0.36, 1),
      color 320ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .project-benefit p {
    margin: 0;
    min-height: 74px;
    font-size: 15px;
    color: rgba(255, 255, 255, 0.72);
    line-height: 1.6;
    max-width: 34ch;
    margin-inline: auto;
    transition:
      transform 320ms cubic-bezier(0.22, 1, 0.36, 1),
      color 320ms cubic-bezier(0.22, 1, 0.36, 1);
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 8px;
    margin-top: 16px;
    min-height: 34px;
    width: 100%;
    margin-inline: auto;
    text-align: center;
  }

  .project-tags span {
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 999px;
    padding: 5px 10px;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.8);
    background: rgba(255, 255, 255, 0.04);
    transition:
      transform 260ms cubic-bezier(0.22, 1, 0.36, 1),
      border-color 260ms cubic-bezier(0.22, 1, 0.36, 1),
      background 260ms cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 260ms cubic-bezier(0.22, 1, 0.36, 1),
      color 260ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .project-actions {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
    margin-top: auto;
    padding-top: 18px;
  }

  .project-actions .btn {
    min-height: 48px;
    height: 48px;
    width: 100%;
    padding: 0 16px;
    border-radius: 12px;
    transition:
      transform 300ms cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 300ms cubic-bezier(0.22, 1, 0.36, 1),
      border-color 300ms cubic-bezier(0.22, 1, 0.36, 1),
      background 300ms cubic-bezier(0.22, 1, 0.36, 1),
      color 300ms cubic-bezier(0.22, 1, 0.36, 1),
      filter 300ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .project-card:hover .project-heading h3 {
    transform: translateY(-2px);
    color: #fff5dc;
    text-shadow: 0 8px 20px rgba(246, 211, 101, 0.14);
  }

  .project-card:hover .project-description {
    transform: translateY(-1px);
    color: rgba(255, 255, 255, 0.88);
  }

  .project-card:hover .project-benefit {
    border-top-color: rgba(246, 211, 101, 0.22);
    transform: translateY(-1px);
  }

  .project-card:hover .project-benefit strong {
    letter-spacing: 0.11em;
    color: rgba(255, 230, 176, 0.96);
  }

  .project-card:hover .project-benefit p {
    transform: translateY(-1px);
    color: rgba(255, 255, 255, 0.8);
  }

  .project-card:hover .project-tags span {
    transform: translateY(-3px);
    border-color: rgba(246, 211, 101, 0.3);
    background: rgba(246, 211, 101, 0.08);
    color: rgba(255, 245, 220, 0.96);
    box-shadow: 0 10px 18px rgba(0, 0, 0, 0.2);
  }

  .projects-footer {
    display: flex;
    justify-content: center;
    margin-top: 34px;
  }

  .projects-footer-cta {
    min-width: min(100%, 320px);
  }

  .projects-footer-cta:hover,
  .projects-footer-cta:focus-visible {
    transform: translateY(-2px);
    box-shadow: 0 16px 30px rgba(0, 0, 0, 0.24);
  }

  @media (max-width: 1024px) {
    .projects-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 767px) {
    .projects-shell {
      padding: 84px 24px 80px;
    }

    .project-preview {
      min-height: 200px;
    }

    .projects-grid {
      grid-template-columns: 1fr;
    }
  }
`;
