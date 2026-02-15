import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  width: 100%;
  padding: 4rem 1rem;
  background: var(--gray-50);

  @media (min-width: 1440px) {
    padding: 6rem 2rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 32px;
  line-height: 1.2;
  color: var(--blue-500);
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 48px;
  }
`;

const SubTitle = styled.h3`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 24px;
  line-height: 1.3;
  color: var(--black-500);
  margin: 2rem 0 1rem;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

const Description = styled.p`
  font-family: var(--main-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  color: var(--black-500);
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  display: grid;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-family: var(--main-family);
  font-size: 16px;
  line-height: 1.5;
  color: var(--black-500);

  &:before {
    content: '✓';
    color: var(--blue-500);
    font-weight: bold;
    font-size: 20px;
    flex-shrink: 0;
  }
`;

interface OvenBrandProblemsProps {
  brandName: string;
}

export const OvenBrandProblems: React.FC<OvenBrandProblemsProps> = ({ brandName }) => {
  return (
    <Section>
      <Container>
        <Title>{brandName} Oven Services We Provide</Title>
        <Description>
          We specialize in professional {brandName} oven repair for all models including wall ovens, 
          ranges, double ovens, and combination units. Our technicians are trained to work with 
          {brandName}'s advanced cooking technology.
        </Description>

        <SubTitle>Common {brandName} Oven Problems We Fix</SubTitle>
        <List>
          <ListItem>Oven not heating or uneven temperature</ListItem>
          <ListItem>Self-cleaning cycle issues</ListItem>
          <ListItem>Control panel errors and malfunctions</ListItem>
          <ListItem>Door won't close properly or seal issues</ListItem>
          <ListItem>Burner or heating element problems</ListItem>
          <ListItem>Ignition system failures (gas ovens)</ListItem>
          <ListItem>Fan or convection issues</ListItem>
          <ListItem>Error codes and diagnostic alerts</ListItem>
        </List>

        <SubTitle>Our Diagnostic Process</SubTitle>
        <List>
          <ListItem>
            <strong>Temperature testing:</strong> We verify heating accuracy and distribution
          </ListItem>
          <ListItem>
            <strong>Component inspection:</strong> Check heating elements, igniters, and thermostats
          </ListItem>
          <ListItem>
            <strong>Control board diagnosis:</strong> Test electronic controls and sensors
          </ListItem>
          <ListItem>
            <strong>Safety system check:</strong> Inspect door locks, gas valves, and safety cutoffs
          </ListItem>
          <ListItem>
            <strong>Calibration:</strong> Ensure temperature accuracy for precise cooking
          </ListItem>
        </List>

        <Description>
          After diagnosis, we provide clear recommendations and use only genuine {brandName} parts 
          to ensure your oven performs like new.
        </Description>
      </Container>
    </Section>
  );
};
