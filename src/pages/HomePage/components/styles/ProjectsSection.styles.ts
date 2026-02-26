import styled from 'styled-components';

export const ProjectsSectionScope = styled.div`
  .projects-grid .project-card {
    display: grid;
    gap: 10px;
  }

  .project-preview {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    height: 170px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(0, 0, 0, 0.25);
    outline: none;
    transform: translateZ(0);
  }

  .project-preview img,
  .project-preview video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .project-preview video {
    opacity: 0;
    transform: scale(1.02);
    transition: opacity 220ms ease;
  }

  .project-preview .preview-overlay {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(600px 220px at 20% 10%, rgba(246, 211, 101, 0.16), transparent 60%),
      linear-gradient(180deg, rgba(11, 11, 15, 0.18), rgba(11, 11, 15, 0.62));
    opacity: 1;
    transition: opacity 220ms ease;
  }

  .project-preview:hover video,
  .project-preview:focus-visible video {
    opacity: 1;
  }

  .project-preview:hover .preview-overlay,
  .project-preview:focus-visible .preview-overlay {
    opacity: 0.25;
  }

  .project-preview:focus-visible {
    box-shadow: 0 0 0 2px rgba(246, 211, 101, 0.35);
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .project-tags span {
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 999px;
    padding: 5px 10px;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.78);
  }
`;
