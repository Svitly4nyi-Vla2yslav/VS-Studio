import React from 'react';
import { styled } from 'styled-components';
import { RefrigeratorBrandHero, RefrigeratorBrandProblems, RefrigeratorBrandFAQ } from '../../components/RefrigeratorBrands';
import Partners from '../../components/PartnersBanner/PartnersBanner';
import ReviewCardContainer from '../../components/Feedback/Feedback';
import { TeamMember } from '../../components/AboutUS/TeamMember/TeamMember';
import { ContactForm } from '../../components/ContactComponents/ContactForm';
import image1 from '../../assets/brands/refrigerator/kitchenaid/r_kad_01.jpg';
import image2 from '../../assets/brands/refrigerator/kitchenaid/r_kad_02.jpg';

const RefrigeratorKitchenAid: React.FC = () => {
  return (
    <Container id='ap'>
      <RefrigeratorBrandHero 
        brandName="KitchenAid"
        description="If your KitchenAid refrigerator is not cooling, leaking water, making unusual noise, or showing error codes, you need accurate diagnostics—not guesswork. At Airtexno Appliance Repair, we specialize in KitchenAid refrigerator and freezer repair with a technician-first approach: confirm the root cause, explain it clearly, and repair it for long-term reliability."
        image1={image1}
        image2={image2}
      />
      <Partners />
      <RefrigeratorBrandProblems brandName="KitchenAid" />
      <RefrigeratorBrandFAQ brandName="KitchenAid" />
      <ReviewCardContainer />
      <TeamMember />
      <ContactForm />
    </Container>
  );
};

export default RefrigeratorKitchenAid;

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
