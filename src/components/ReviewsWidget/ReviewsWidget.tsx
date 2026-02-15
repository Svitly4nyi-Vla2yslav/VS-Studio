import React from 'react';
import styled from 'styled-components';

const GOOGLE_BUSINESS_PROFILE_URL = 'https://share.google/bR3E5kdD0D8D8cMMG';
const REVIEW_COUNT = '150+';
const RATING = 5.0;

export const ReviewsWidget: React.FC = () => {
  return (
    <WidgetContainer
      href={GOOGLE_BUSINESS_PROFILE_URL}
      target='_blank'
      rel='noopener noreferrer'
    >
      <GoogleLogo>
        <svg width="20" height="20" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
      </GoogleLogo>
      <ReviewInfo>
        <TopRow>
          <RatingText>{RATING}</RatingText>
          <Stars>
            {[...Array(5)].map((_, i) => (
              <Star key={i}>⭐</Star>
            ))}
          </Stars>
        </TopRow>
        <ReviewCount>{REVIEW_COUNT} reviews</ReviewCount>
      </ReviewInfo>
    </WidgetContainer>
  );
};

// Styled Components
const WidgetContainer = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  text-decoration: none;
  transition: all 0.3s ease;
  width: fit-content;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    background: rgba(255, 255, 255, 1);
  }

  @media screen and (max-width: 767px) {
    padding: 10px 14px;
    gap: 10px;
  }
`;

const GoogleLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const ReviewInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const RatingText = styled.div`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 18px;
  color: #242424;

  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`;

const Stars = styled.div`
  display: flex;
  gap: 2px;
`;

const Star = styled.span`
  font-size: 12px;
  line-height: 1;

  @media screen and (max-width: 767px) {
    font-size: 11px;
  }
`;

const ReviewCount = styled.div`
  font-family: var(--font-family);
  font-size: 12px;
  color: #666;

  @media screen and (max-width: 767px) {
    font-size: 11px;
  }
`;
