import { useTranslation } from 'react-i18next';
import {
  ButtonRow,
  HeroSection,
  PageContainer,
  PageRoot,
  PrimaryButtonLink,
} from '../shared/styles/PagePrimitives.styles';

const HandwerkerLanding: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageRoot>
      <PageContainer>
        <HeroSection>
          <h1>{t('niche.handwerker.h1')}</h1>
          <p>{t('niche.handwerker.p')}</p>
          <ButtonRow>
            <PrimaryButtonLink to='/kontakt'>{t('common.projectRequest')}</PrimaryButtonLink>
          </ButtonRow>
        </HeroSection>
      </PageContainer>
    </PageRoot>
  );
};

export default HandwerkerLanding;