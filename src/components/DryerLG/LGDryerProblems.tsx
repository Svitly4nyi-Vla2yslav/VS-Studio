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

const ModelsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 1.5rem 0;
`;

const ModelItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-family: var(--main-family);
  font-size: 16px;
  line-height: 1.5;
  color: var(--black-500);

  span {
    color: var(--blue-500);
    font-weight: 500;
  }
`;

export const LGDryerProblems: React.FC = () => {
  return (
    <Section>
      <Container>
        <Title>LG Dryer Repair Units We Commonly Service</Title>
        <ModelsList>
          <ModelItem>
            <span>•</span> LG electric dryers and gas dryers
          </ModelItem>
          <ModelItem>
            <span>•</span> Front-load dryer units and stacked laundry centers (model-dependent)
          </ModelItem>
          <ModelItem>
            <span>•</span> Ventless / condenser and heat-pump dryer models (when applicable)
          </ModelItem>
          <ModelItem>
            <span>•</span> Units with steam functions and sensor-dry cycles
          </ModelItem>
        </ModelsList>

        <SubTitle>Common LG Dryer Repair Problems We Fix</SubTitle>
        <Description>
          Many symptoms can have multiple causes. A structured diagnosis is the fastest way to avoid 
          replacing the wrong part and to reduce repeat failures.
        </Description>

        <List>
          <ListItem>Dryer not heating or weak heat</ListItem>
          <ListItem>Clothes still damp / long dry times</ListItem>
          <ListItem>Dryer won't start or shuts off mid-cycle</ListItem>
          <ListItem>Drum not turning, squealing, grinding, or thumping noises</ListItem>
          <ListItem>Burning smell or overheating</ListItem>
          <ListItem>Error codes or control panel issues</ListItem>
          <ListItem>Door won't latch or unit stops when door is moved</ListItem>
        </List>

        <SubTitle>How We Diagnose LG Dryer Repair</SubTitle>
        <List>
          <ListItem>
            <strong>Airflow and venting check:</strong> We confirm safe airflow and inspect for 
            restrictions that cause long dry times or overheating.
          </ListItem>
          <ListItem>
            <strong>Heat system testing:</strong> We test heating elements (electric) or ignition/valve 
            components (gas) and related safety devices.
          </ListItem>
          <ListItem>
            <strong>Drum and drive system inspection:</strong> We check belt, rollers, idler, motor 
            behavior, and alignment for noise or no-tumble symptoms.
          </ListItem>
          <ListItem>
            <strong>Sensor and control verification:</strong> We evaluate moisture sensors, thermostats, 
            and control responses to confirm proper cycling.
          </ListItem>
          <ListItem>
            <strong>Electrical safety checks:</strong> We inspect wiring connections and safety cutoffs 
            to prevent repeat failures.
          </ListItem>
        </List>

        <Description>
          After diagnosis, you get clear recommendations and repair options based on reliability and 
          total cost—not guesswork.
        </Description>
      </Container>
    </Section>
  );
};
