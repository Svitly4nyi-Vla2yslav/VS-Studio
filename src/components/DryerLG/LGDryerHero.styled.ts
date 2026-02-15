import { NavLink } from 'react-router';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
  width: 100%;
  padding: 1rem;
  padding-top: 100px;

  @media (min-width: 768px) {
    gap: 2.5rem;
    padding: 1.5rem;
  }

  @media (min-width: 1440px) {
    gap: 3rem;
    padding: 2rem;
    padding-top: 150px;
  }
`;

export const TabletContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 56px;
  width: 100%;
  padding: 1rem;
  padding-top: 150px;

  @media (min-width: 1440px) {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    margin-bottom: 50px;
    max-width: 1440px;
  }
`;

export const Title = styled.h1`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 36px;
  line-height: 1.1;
  color: var(--blue-500);
  text-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  margin: 0;

  span {
    font-family: var(--second-family);
    font-weight: 400;
    font-size: inherit;
    color: var(--black-500);
    text-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  }

  @media (min-width: 768px) {
    font-size: 64px;
  }

  @media (min-width: 1440px) {
    font-size: 72px;
  }
`;

export const Description = styled.p`
  font-family: var(--main-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: var(--black-500);
  margin: 0;

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1440px) {
    font-size: 20px;
    max-width: 800px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;

  @media (min-width: 1440px) {
    flex: 1;
    max-width: 600px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1440px) {
    flex: 1;
    max-width: 700px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    width: auto;
  }
`;

export const PrimaryButton = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  background: var(--blue-500);
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  min-width: 200px;

  &:hover {
    background: var(--blue-600);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const SecondaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  background: white;
  border: 2px solid var(--blue-500);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 200px;

  a {
    text-decoration: none;
    color: var(--blue-500);
    font-family: var(--main-family);
    font-weight: 500;
    font-size: 16px;
  }

  &:hover {
    background: var(--blue-50);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const ButtonText = styled.span`
  font-family: var(--main-family);
  font-weight: 500;
  font-size: 16px;
  color: white;
`;

export const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  
  span {
    font-size: 24px;
    flex-shrink: 0;
  }

  p {
    font-family: var(--main-family);
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: var(--black-500);
    margin: 0;
  }
`;
