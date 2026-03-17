import styled from 'styled-components';

export const FaqSectionScope = styled.div`
  .section {
    display: grid;
    gap: 18px;
  }

  .faq {
    display: grid;
    gap: 14px;
  }

  .faq details {
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    background: rgba(7, 11, 21, 0.84);
    padding: 16px 18px;
    transition:
      border-color 620ms var(--ease-smooth),
      background 620ms var(--ease-smooth),
      transform 620ms var(--ease-smooth);
  }

  .faq details:hover {
    border-color: rgba(255, 207, 130, 0.5);
    transform: translateY(-2px);
  }

  .faq summary {
    cursor: pointer;
    font-weight: 700;
    font-size: 17px;
    transition: color 620ms var(--ease-smooth);
  }

  .faq details[open] summary {
    color: #ffd08a;
  }

  .faq-answer {
    display: grid;
    grid-template-rows: 0fr;
    transition:
      grid-template-rows 700ms var(--ease-smooth),
      opacity 700ms var(--ease-smooth);
    opacity: 0;
  }

  .faq-answer p {
    overflow: hidden;
    margin-top: 10px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.85);
  }

  .faq details[open] .faq-answer {
    grid-template-rows: 1fr;
    opacity: 1;
  }

  .faq-links-card {
    display: grid;
    gap: 16px;
    border-radius: 18px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    background:
      radial-gradient(420px 180px at 0% 0%, rgba(246, 211, 101, 0.12), transparent 65%),
      rgba(7, 11, 21, 0.86);
    padding: 20px;
  }

  .faq-links-header {
    display: grid;
    gap: 6px;
  }

  .faq-links-header h3 {
    font-size: 20px;
  }

  .faq-links-header p {
    color: rgba(255, 255, 255, 0.72);
    line-height: 1.6;
  }

  .faq-links-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .faq-link-pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 44px;
    padding: 0 16px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    background: rgba(255, 255, 255, 0.04);
    color: rgba(255, 255, 255, 0.94);
    font-weight: 600;
    transition:
      transform var(--dur-fast) var(--ease-smooth),
      border-color var(--dur-fast) var(--ease-smooth),
      background var(--dur-fast) var(--ease-smooth),
      color var(--dur-fast) var(--ease-smooth);
  }

  .faq-link-pill:hover,
  .faq-link-pill:focus-visible {
    transform: translateY(-1px);
    border-color: rgba(255, 209, 137, 0.75);
    background: rgba(255, 222, 167, 0.12);
    color: #ffe5b1;
  }
`;
