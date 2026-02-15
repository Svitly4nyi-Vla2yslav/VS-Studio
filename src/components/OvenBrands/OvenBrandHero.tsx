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
} from '../DryerLG/LGDryerHero.styled';
import { useMediaQuery } from 'react-responsive';
import { ReviewsWidget } from '../ReviewsWidget/ReviewsWidget';

interface OvenBrandHeroProps {
  brandName: string;
  description?: string;
  image1?: string;
  image2?: string;
}

export const OvenBrandHero: React.FC<OvenBrandHeroProps> = ({ 
  brandName,
  description,
  image1,
  image2
}) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const defaultDescription = `Professional ${brandName} oven repair services in Thousand Oaks and Ventura County. Our expert technicians specialize in ${brandName} ovens, ranges, and cooking appliances. We provide fast, reliable repairs with genuine parts and experienced service.`;

  return (
    <Container>
      <TabletContainer>
        <ContentWrapper>
          <Title>
            <span>{brandName} Oven</span> Repair <span>in Thousand Oaks & Ventura County</span>
          </Title>

          <ReviewsWidget />

          <Description>
            {description || defaultDescription}
          </Description>

          <FeaturesList>
            <FeatureItem>
              <span>🔧</span>
              <p>Brand-specific diagnostics for {brandName}</p>
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

        {isDesktop && image1 && image2 && (
          <ImageContainer>
            <Image src={image1} alt={`${brandName} Oven Repair Service`} loading='lazy' />
            <Image src={image2} alt={`${brandName} Professional Repair`} loading='lazy' />
          </ImageContainer>
        )}
      </TabletContainer>

      {!isDesktop && image1 && image2 && (
        <ImageContainer>
          <Image src={image1} alt={`${brandName} Oven Repair Service`} loading='lazy' />
          <Image src={image2} alt={`${brandName} Professional Repair`} loading='lazy' />
        </ImageContainer>
      )}
    </Container>
  );
};
