import { useTranslation } from 'react-i18next';
import { Card, HeroSection, PageContainer, PageRoot, Section } from '../shared/styles/PagePrimitives.styles';

const Impressum: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageRoot>
      <PageContainer>
        <HeroSection>
          <h1>{t('legal.impressum.h1')}</h1>
          <p>{t('legal.impressum.subtitle')}</p>
        </HeroSection>
        <Section>
          <Card>
            <p>{t('legal.impressum.l1')}</p>
            <p>{t('legal.impressum.l2')}</p>
            <p>{t('legal.impressum.l3')}</p>
            <p>{t('legal.impressum.l4')}</p>
            <p>{t('legal.impressum.l5')}</p>
          </Card>
        </Section>
      </PageContainer>
    </PageRoot>
  );
};

export default Impressum;