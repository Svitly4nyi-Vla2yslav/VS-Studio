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

interface RefrigeratorBrandProblemsProps {
  brandName: string;
}

export const RefrigeratorBrandProblems: React.FC<RefrigeratorBrandProblemsProps> = ({ brandName }) => {
  return (
    <Section>
      <Container>
        <Title>{brandName} Refrigerator Services We Provide</Title>
        <Description>
          We specialize in professional {brandName} refrigerator repair for all models including 
          built-in refrigerators, French door models, side-by-side units, and freezer compartments. 
          Our technicians are trained to work with {brandName}'s advanced cooling technology.
        </Description>

        <SubTitle>Common {brandName} Refrigerator Problems We Fix</SubTitle>
        <List>
          <ListItem>Not cooling or inadequate cooling</ListItem>
          <ListItem>Freezer not freezing properly</ListItem>
          <ListItem>Water leaking inside or outside</ListItem>
          <ListItem>Ice maker not working or making noise</ListItem>
          <ListItem>Unusual noises (buzzing, clicking, humming)</ListItem>
          <ListItem>Error codes or display malfunctions</ListItem>
          <ListItem>Door seal problems or air leaks</ListItem>
          <ListItem>Compressor or cooling system issues</ListItem>
        </List>

        <SubTitle>Our Diagnostic Process</SubTitle>
        <List>
          <ListItem>
            <strong>Temperature testing:</strong> We verify cooling performance in all compartments
          </ListItem>
          <ListItem>
            <strong>System inspection:</strong> Check compressor, evaporator, and condenser operation
          </ListItem>
          <ListItem>
            <strong>Control board diagnosis:</strong> Test electronic controls and temperature sensors
          </ListItem>
          <ListItem>
            <strong>Seal and airflow check:</strong> Inspect door seals, fans, and air circulation
          </ListItem>
          <ListItem>
            <strong>Ice maker service:</strong> Diagnose water supply, ice production, and dispenser
          </ListItem>
        </List>

        <Description>
          After diagnosis, we provide clear recommendations and use only genuine {brandName} parts 
          to ensure your refrigerator performs reliably for years to come.
        </Description>
      </Container>
    </Section>
  );
};
