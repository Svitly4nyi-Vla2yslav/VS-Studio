import { motion } from 'framer-motion';
import styled from 'styled-components';
import { AssistantOrb } from '../../features/ai-assistant/components/AssistantOrb';
import { AssistantPanel } from '../../features/ai-assistant/components/AssistantPanel';
import { useAssistant } from '../../features/ai-assistant/hooks/useAssistant';
import { PageContainer } from '../shared/styles/PagePrimitives.styles';

const Page = styled.div`
  padding: 24px 0 96px;
`;

const Hero = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
  gap: 28px;
  align-items: stretch;
  min-height: calc(100vh - 120px);

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    min-height: auto;
  }
`;

const HeroCard = styled.div`
  position: relative;
  overflow: hidden;
  padding: 34px;
  border-radius: 36px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background:
    radial-gradient(circle at 14% 20%, rgba(255, 177, 74, 0.16), transparent 32%),
    radial-gradient(circle at 82% 16%, rgba(84, 128, 255, 0.18), transparent 34%),
    linear-gradient(180deg, rgba(10, 15, 28, 0.98), rgba(7, 11, 20, 0.98));
  box-shadow: 0 28px 80px rgba(2, 6, 16, 0.36);
`;

const Eyebrow = styled.span`
  display: inline-flex;
  margin-bottom: 18px;
  color: rgba(255, 214, 156, 0.86);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
`;

const Title = styled.h1`
  margin: 0 0 16px;
  max-width: 12ch;
  font-size: clamp(40px, 7vw, 82px);
  line-height: 0.96;
  letter-spacing: -0.04em;
`;

const Lead = styled.p`
  max-width: 56ch;
  margin: 0 0 28px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 17px;
  line-height: 1.6;
`;

const Metrics = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const Metric = styled.div`
  padding: 18px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);

  strong {
    display: block;
    margin-bottom: 8px;
    color: #ffd59d;
    font-size: 24px;
  }

  span {
    color: rgba(255, 255, 255, 0.68);
    line-height: 1.5;
  }
`;

const OrbStage = styled.div`
  position: absolute;
  right: -10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;

  @media (max-width: 1100px) {
    position: relative;
    right: auto;
    top: auto;
    transform: none;
    margin-top: 28px;
    display: flex;
    justify-content: center;
  }
`;

const TrustGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  margin-top: 28px;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

const TrustCard = styled.div`
  padding: 24px;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);

  h3 {
    margin: 0 0 10px;
    font-size: 20px;
  }

  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
  }
`;

const CTA = styled.div`
  margin-top: 28px;
  padding: 24px;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background:
    radial-gradient(circle at 0% 0%, rgba(255, 177, 74, 0.14), transparent 34%),
    linear-gradient(180deg, rgba(12, 18, 32, 0.94), rgba(9, 13, 22, 0.96));

  strong {
    display: block;
    margin-bottom: 10px;
    font-size: 22px;
  }

  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
  }
`;

const PreviewColumn = styled.div`
  min-height: 0;
`;

const DemoAssistant = styled.div`
  height: 100%;
`;

const LargeOrbWrap = styled(motion.div)`
  width: 260px;
  height: 260px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  background:
    radial-gradient(circle, rgba(255, 177, 74, 0.18), transparent 70%),
    radial-gradient(circle at 70% 30%, rgba(84, 128, 255, 0.22), transparent 62%);
  filter: drop-shadow(0 24px 80px rgba(255, 177, 74, 0.2));
`;

const AIAssistantDemo: React.FC = () => {
  const assistant = useAssistant();

  return (
    <Page>
      <PageContainer>
        <Hero>
          <HeroCard>
            <Eyebrow>AI Assistant Demo</Eyebrow>
            <Title>24/7 Antworten, Leads und Terminwünsche in einem Flow.</Title>
            <Lead>
              Dieses MVP zeigt, wie ein On-Site Assistant Service-Fragen beantwortet, den Nutzen eines AI-Assistenten
              erklärt, Leads sammelt, Booking Requests vorbereitet und bei Unsicherheit sauber an einen Menschen
              übergibt.
            </Lead>

            <Metrics>
              <Metric>
                <strong>24/7</strong>
                <span>Sofortige Erstreaktion für Standardfragen, auch außerhalb klassischer Bürozeiten.</span>
              </Metric>
              <Metric>
                <strong>DE / EN / UK</strong>
                <span>Mehrsprachiger Einstieg mit Erkennung der Gesprächssprache und ruhiger Tonalität.</span>
              </Metric>
              <Metric>
                <strong>Lead Capture</strong>
                <span>Strukturierte Übergabe mit Name, Kontakt, Unternehmensart und konkretem Bedarf.</span>
              </Metric>
              <Metric>
                <strong>Booking</strong>
                <span>Terminwünsche mit klaren Regeln für Verfügbarkeit, Slots und realistische Reaktionszeiten.</span>
              </Metric>
            </Metrics>

            <OrbStage>
              <LargeOrbWrap animate={{ y: [0, -10, 0], scale: [1, 1.04, 1] }} transition={{ duration: 7, repeat: Infinity }}>
                <AssistantOrb size={150} />
              </LargeOrbWrap>
            </OrbStage>
          </HeroCard>

          <PreviewColumn>
            <DemoAssistant>
              <AssistantPanel assistant={assistant} embedded />
            </DemoAssistant>
          </PreviewColumn>
        </Hero>

        <TrustGrid>
          <TrustCard>
            <h3>Nischen-spezifische Antworten</h3>
            <p>Beispielhaft vorbereitet für Auto Werkstatt, SHK, Beauty und Praxis mit lokalem Wissenskontext.</p>
          </TrustCard>
          <TrustCard>
            <h3>Ruhige Handoffs</h3>
            <p>Wenn die Sicherheit niedrig ist, sagt der Assistent das klar und bietet menschliche Rückmeldung an.</p>
          </TrustCard>
          <TrustCard>
            <h3>Realistische Erstschätzung</h3>
            <p>Preise bleiben grob, bis genug Kontext für eine belastbare frühe Einordnung vorhanden ist.</p>
          </TrustCard>
        </TrustGrid>

        <CTA>
          <strong>Trust-orientierter Einsatz statt Chat-Spielerei</strong>
          <p>
            Der Assistant ist als ruhiger Conversion-Layer gedacht: Fragen beantworten, Standardprozesse entlasten,
            qualifizierte Anfragen sichern und nur dann automatisieren, wenn die Antwort sauber und verantwortbar ist.
          </p>
        </CTA>
      </PageContainer>
    </Page>
  );
};

export default AIAssistantDemo;
