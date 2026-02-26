import { useTranslation } from 'react-i18next';
import { Card, HeroSection, PageContainer, PageRoot, Section } from '../shared/styles/PagePrimitives.styles';

const AGB: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageRoot>
      <PageContainer>
        <HeroSection>
          <h1>{t('legal.agb.h1')}</h1>
          <p>{t('legal.agb.subtitle')}</p>
        </HeroSection>
        <Section>
          <Card>
            <p>{t('legal.agb.l1')}</p>
            <p>{t('legal.agb.l2')}</p>
          </Card>
        </Section>
      </PageContainer>
    </PageRoot>
  );
};

export default AGB;