import React from 'react';
import {
  Container,
  Title,
  Description,
  ContentWrapper,
  ImageContainer,
  Image,
  ButtonRow,
  PrimaryButton,
  SecondaryButton,
  ButtonText,
  FeaturesList,
  FeatureItem,
  TabletContainer,
} from './LGDryerHero.styled';
import { useMediaQuery } from 'react-responsive';
import { ReviewsWidget } from '../ReviewsWidget/ReviewsWidget';
import lg01 from '../../assets/brands/lg/lg01.jpg';
import lg02 from '../../assets/brands/lg/lg02.jpg';

export const LGDryerHero: React.FC = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  return (
    <Container>
      <TabletContainer>
        <ContentWrapper>
          <Title>
            <span>LG Dryer</span> Repair <span>in Thousand Oaks & Ventura County</span>
          </Title>

          <ReviewsWidget />

          <Description>
            If your LG dryer is not heating, takes too long to dry, won't start, or makes unusual noises, 
            you need accurate diagnostics—not trial-and-error part replacements. At Airtexno Appliance Repair, 
            we specialize in LG dryer repair for electric and gas models. We confirm the root cause, explain 
            it clearly, and perform repairs designed for long-term reliability.
          </Description>

          <FeaturesList>
            <FeatureItem>
              <span>🔧</span>
              <p>Brand-specific diagnostics for LG dryer units</p>
            </FeatureItem>
            <FeatureItem>
              <span>⏱️</span>
              <p>Same-day service available in Ventura County</p>
            </FeatureItem>
            <FeatureItem>
              <span>🚚</span>
              <p>OEM parts from our own warehouse</p>
            </FeatureItem>
          </FeaturesList>

          <ButtonRow>
            <PrimaryButton to='/contact'>
              <ButtonText>Request Service</ButtonText>
            </PrimaryButton>
            <SecondaryButton>
              <a href='tel:+18055002705'>📞 (805) 500-2705</a>
            </SecondaryButton>
          </ButtonRow>
        </ContentWrapper>

        {isDesktop && (
          <ImageContainer>
            <Image src={lg01} alt='LG Dryer Repair Service' loading='lazy' />
            <Image src={lg02} alt='LG Dryer Professional Repair' loading='lazy' />
          </ImageContainer>
        )}
      </TabletContainer>

      {!isDesktop && (
        <ImageContainer>
          <Image src={lg01} alt='LG Dryer Repair Service' loading='lazy' />
          <Image src={lg02} alt='LG Dryer Professional Repair' loading='lazy' />
        </ImageContainer>
      )}
    </Container>
  );
};
