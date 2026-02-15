import React from 'react';
import { styled } from 'styled-components';
import { OvenBrandHero, OvenBrandProblems, OvenBrandFAQ } from '../../components/OvenBrands';
import Partners from '../../components/PartnersBanner/PartnersBanner';
import ReviewCardContainer from '../../components/Feedback/Feedback';
import { TeamMember } from '../../components/AboutUS/TeamMember/TeamMember';
import { ContactForm } from '../../components/ContactComponents/ContactForm';
import image1 from '../../assets/brands/oven/viking/o_vik_01.jpg';
import image2 from '../../assets/brands/oven/viking/o_vik_02.jpg';

const OvenViking: React.FC = () => {
  return (
    <Container id='ap'>
      <OvenBrandHero 
        brandName="Viking"
        description="Viking ranges and ovens are powerful, high-end cooking appliances that require brand-specific troubleshooting. If your Viking oven won't heat, burners won't ignite, temperatures are inconsistent, or you see error behavior, Airtexno Appliance Repair can help. We diagnose the root cause, explain your options clearly, and perform reliable repairs for long-term performance."
        image1={image1}
        image2={image2}
      />
      <Partners />
      <OvenBrandProblems brandName="Viking" />
      <OvenBrandFAQ brandName="Viking" />
      <ReviewCardContainer />
      <TeamMember />
      <ContactForm />
    </Container>
  );
};

export default OvenViking;

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
