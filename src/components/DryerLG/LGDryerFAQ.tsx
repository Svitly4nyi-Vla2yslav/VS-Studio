import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  width: 100%;
  padding: 4rem 1rem;
  background: white;

  @media (min-width: 1440px) {
    padding: 6rem 2rem;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 32px;
  line-height: 1.2;
  color: var(--blue-500);
  margin-bottom: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 48px;
  }
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FAQItem = styled.div<{ $isOpen: boolean }>`
  border: 1px solid ${({ $isOpen }) => ($isOpen ? 'var(--blue-500)' : 'var(--gray-200)')};
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--blue-500);
  }
`;

const Question = styled.button`
  width: 100%;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: var(--main-family);
  font-size: 16px;
  font-weight: 500;
  color: var(--black-500);
  transition: background 0.3s ease;

  &:hover {
    background: var(--gray-50);
  }

  span {
    font-size: 24px;
    color: var(--blue-500);
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const Answer = styled.div<{ $isOpen: boolean }>`
  max-height: ${({ $isOpen }) => ($isOpen ? '500px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding: ${({ $isOpen }) => ($isOpen ? '0 1.5rem 1.5rem' : '0 1.5rem')};

  p {
    font-family: var(--main-family);
    font-size: 16px;
    line-height: 1.6;
    color: var(--black-500);
    margin: 0;
  }
`;

const faqData = [
  {
    question: 'Why is my LG dryer running but not heating?',
    answer: 'Common causes include a failed heating element (electric), ignition/valve issues (gas), thermal safety cutoffs, or airflow restrictions. Proper testing confirms the true root cause.',
  },
  {
    question: 'Why does my dryer take two cycles to dry clothes?',
    answer: 'Long dry times are often caused by restricted venting, lint buildup, weak heat, or sensor issues. We check airflow and performance to identify what\'s limiting drying.',
  },
  {
    question: 'What causes loud squealing or thumping noise?',
    answer: 'Noises usually come from worn rollers, idler pulleys, belt issues, or motor problems. We inspect the drive system and replace only the worn components.',
  },
  {
    question: 'Is a burning smell dangerous?',
    answer: 'It can be. Stop using the dryer and schedule diagnosis. Burning odor may indicate lint restriction, overheating components, or electrical issues.',
  },
  {
    question: 'Do you repair stacked units in closets?',
    answer: 'Yes, when access allows. We work carefully in tight laundry spaces and explain any access limitations up front.',
  },
  {
    question: 'Do I need to replace the dryer if it\'s not heating?',
    answer: 'Not usually. Many no-heat issues are repairable and cost-effective once the correct component is identified.',
  },
  {
    question: 'Can a clogged vent damage the dryer?',
    answer: 'Yes. Restricted venting can cause overheating and shorten the life of heating and safety components. Venting checks are a key part of diagnosis.',
  },
  {
    question: 'How quickly can you come out?',
    answer: 'Availability varies by day, but we aim for prompt scheduling—especially for no-heat and overheating situations.',
  },
];

export const LGDryerFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section>
      <Container>
        <Title>Frequently Asked Questions</Title>
        <FAQList>
          {faqData.map((faq, index) => (
            <FAQItem key={index} $isOpen={openIndex === index}>
              <Question onClick={() => toggleFAQ(index)}>
                {faq.question}
                <span>{openIndex === index ? '−' : '+'}</span>
              </Question>
              <Answer $isOpen={openIndex === index}>
                <p>{faq.answer}</p>
              </Answer>
            </FAQItem>
          ))}
        </FAQList>
      </Container>
    </Section>
  );
};
