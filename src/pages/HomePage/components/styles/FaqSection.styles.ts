import styled from 'styled-components';

export const FaqSectionScope = styled.div`
  .faq {
    display: grid;
    gap: 14px;
    margin-top: 14px;
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
`;
