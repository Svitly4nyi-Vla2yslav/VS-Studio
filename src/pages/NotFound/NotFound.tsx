import { FaArrowLeft } from 'react-icons/fa';
import {
  ButtonRow,
  HeroSection,
  PageContainer,
  PageRoot,
  PrimaryButtonLink,
} from '../shared/styles/PagePrimitives.styles';

const NotFound: React.FC = () => {
  return (
    <PageRoot>
      <PageContainer>
        <HeroSection>
          <p>404</p>
          <h1>Seite nicht gefunden.</h1>
          <p>
            Diese URL existiert nicht oder wurde verschoben. Wechseln Sie zur
            Startseite oder senden Sie uns direkt Ihre Projektanfrage.
          </p>
          <ButtonRow>
            <PrimaryButtonLink to='/'>
              <FaArrowLeft /> Zur Startseite
            </PrimaryButtonLink>
            <PrimaryButtonLink to='/kontakt'>Projekt anfragen</PrimaryButtonLink>
          </ButtonRow>
        </HeroSection>
      </PageContainer>
    </PageRoot>
  );
};

export default NotFound;
