import React from 'react';
import { styled } from 'styled-components';
import { RefrigeratorBrandHero, RefrigeratorBrandProblems, RefrigeratorBrandFAQ } from '../../components/RefrigeratorBrands';
import Partners from '../../components/PartnersBanner/PartnersBanner';
import ReviewCardContainer from '../../components/Feedback/Feedback';
import { TeamMember } from '../../components/AboutUS/TeamMember/TeamMember';
import { ContactForm } from '../../components/ContactComponents/ContactForm';
import image1 from '../../assets/brands/refrigerator/sub-zero/r_sub_01.jpg';
import image2 from '../../assets/brands/refrigerator/sub-zero/r_sub_02.jpg';

const RefrigeratorSubZero: React.FC = () => {
  return (
    <Container id='ap'>
      <RefrigeratorBrandHero 
        brandName="Sub-Zero"
        description="If your Sub-Zero refrigerator isn't cooling properly, is building up ice, leaking water, or making unusual noise, you need a technician who understands how these high-end systems are built and how to diagnose them correctly. At Airtexno Appliance Repair, we specialize in Sub-Zero refrigerator and freezer repair with a technician-first approach: accurate diagnostics, clear explanations, and repair solutions designed for long-term reliability."
        image1={image1}
        image2={image2}
      />
      <Partners />
      <RefrigeratorBrandProblems brandName="Sub-Zero" />
      <RefrigeratorBrandFAQ brandName="Sub-Zero" />
      <ReviewCardContainer />
      <TeamMember />
      <ContactForm />
    </Container>
  );
};

export default RefrigeratorSubZero;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 16px;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 50px;

  @media (max-width: 767px) {
    gap: 40px;
    padding: 0 12px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 768px;
    padding: 0 24px;
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    max-width: 1024px;
    padding: 0 32px;
  }

  @media (min-width: 1280px) and (max-width: 1439px) {
    max-width: 1280px;
    padding: 0 48px;
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 64px;
  }

  @media (min-width: 1920px) {
    max-width: 1920px;
    padding: 0 120px;
  }
`;
