import React from 'react';
import { styled } from 'styled-components';
import { OvenBrandHero, OvenBrandProblems, OvenBrandFAQ } from '../../components/OvenBrands';
import Partners from '../../components/PartnersBanner/PartnersBanner';
import ReviewCardContainer from '../../components/Feedback/Feedback';
import { TeamMember } from '../../components/AboutUS/TeamMember/TeamMember';
import { ContactForm } from '../../components/ContactComponents/ContactForm';
import image1 from '../../assets/brands/oven/wolf/o_wolf_01.jpg';
import image2 from '../../assets/brands/oven/wolf/o_wolf_02.jpg';

const OvenWolf: React.FC = () => {
  return (
    <Container id='ap'>
      <OvenBrandHero 
        brandName="Wolf"
        description="Wolf ovens and ranges are premium cooking systems designed for precision and performance. If your Wolf oven won't heat, temperature is unstable, burners won't ignite, or controls are acting up, Airtexno Appliance Repair can help with accurate diagnostics and reliable repairs. We focus on the root cause and provide repair options that protect your investment."
        image1={image1}
        image2={image2}
      />
      <Partners />
      <OvenBrandProblems brandName="Wolf" />
      <OvenBrandFAQ brandName="Wolf" />
      <ReviewCardContainer />
      <TeamMember />
      <ContactForm />
    </Container>
  );
};

export default OvenWolf;

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
