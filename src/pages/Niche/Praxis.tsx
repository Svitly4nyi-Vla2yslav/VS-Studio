import { useTranslation } from 'react-i18next';
import {
  ButtonRow,
  HeroSection,
  PageContainer,
  PageRoot,
  PrimaryButtonLink,
} from '../shared/styles/PagePrimitives.styles';

const PraxisLanding: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageRoot>
      <PageContainer>
        <HeroSection>
          <h1>{t('niche.praxis.h1')}</h1>
          <p>{t('niche.praxis.p')}</p>
          <ButtonRow>
            <PrimaryButtonLink to='/kontakt'>{t('common.projectRequest')}</PrimaryButtonLink>
          </ButtonRow>
        </HeroSection>
      </PageContainer>
    </PageRoot>
  );
};

export default PraxisLanding;