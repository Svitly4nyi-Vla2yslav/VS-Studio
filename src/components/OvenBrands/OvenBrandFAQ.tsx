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

interface OvenBrandFAQProps {
  brandName: string;
}

export const OvenBrandFAQ: React.FC<OvenBrandFAQProps> = ({ brandName }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: `How long does ${brandName} oven repair take?`,
      answer: `Most ${brandName} oven repairs are completed in one visit, typically 1-2 hours. Complex issues may require ordering specific parts, but we'll provide a clear timeline upfront.`,
    },
    {
      question: `Do you use genuine ${brandName} parts?`,
      answer: `Yes, we use only genuine OEM ${brandName} parts to ensure quality, performance, and warranty compliance. We stock common parts in our warehouse for faster repairs.`,
    },
    {
      question: `Why is my ${brandName} oven not heating evenly?`,
      answer: `Uneven heating can be caused by faulty heating elements, damaged door seals, malfunctioning convection fans, or temperature sensor issues. We diagnose and fix the exact cause.`,
    },
    {
      question: `Can you fix error codes on ${brandName} ovens?`,
      answer: `Yes, we're experienced with all ${brandName} error codes and diagnostic systems. We'll identify what the code means and repair the underlying issue.`,
    },
    {
      question: `Is it worth repairing my ${brandName} oven?`,
      answer: `${brandName} ovens are premium appliances built to last. If your oven is less than 15 years old and the repair cost is under 50% of replacement, repair is usually the best choice.`,
    },
    {
      question: `Do you service ${brandName} gas and electric ovens?`,
      answer: `Yes, our technicians are certified to work on both ${brandName} gas and electric ovens, including dual-fuel ranges and combination units.`,
    },
  ];

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
