import React from 'react';
import { styled } from 'styled-components';
import { OvenBrandHero, OvenBrandProblems, OvenBrandFAQ } from '../../components/OvenBrands';
import Partners from '../../components/PartnersBanner/PartnersBanner';
import ReviewCardContainer from '../../components/Feedback/Feedback';
import { TeamMember } from '../../components/AboutUS/TeamMember/TeamMember';
import { ContactForm } from '../../components/ContactComponents/ContactForm';
import image1 from '../../assets/brands/oven/kitchenaid/o_Kad_01.jpg';
import image2 from '../../assets/brands/oven/kitchenaid/o_kad_02.jpg';

const OvenKitchenAid: React.FC = () => {
  return (
    <Container id='ap'>
      <OvenBrandHero 
        brandName="KitchenAid"
        description="If your KitchenAid oven won't heat, won't turn on, bakes unevenly, or has control panel issues, you need accurate diagnostics—not guesses. Airtexno Appliance Repair provides professional KitchenAid oven repair with a clear, step-by-step process and transparent recommendations, so you can get back to safe, reliable cooking."
        image1={image1}
        image2={image2}
      />
      <Partners />
      <OvenBrandProblems brandName="KitchenAid" />
      <OvenBrandFAQ brandName="KitchenAid" />
      <ReviewCardContainer />
      <TeamMember />
      <ContactForm />
    </Container>
  );
};

export default OvenKitchenAid;

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
