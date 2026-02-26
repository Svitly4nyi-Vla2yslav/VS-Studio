import { useTranslation } from 'react-i18next';
import { Card, HeroSection, PageContainer, PageRoot, Section } from '../shared/styles/PagePrimitives.styles';

const Cookies: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageRoot>
      <PageContainer>
        <HeroSection>
          <h1>{t('legal.cookies.h1')}</h1>
          <p>{t('legal.cookies.subtitle')}</p>
        </HeroSection>
        <Section>
          <Card>
            <p>{t('legal.cookies.l1')}</p>
            <p>{t('legal.cookies.l2')}</p>
          </Card>
        </Section>
      </PageContainer>
    </PageRoot>
  );
};

export default Cookies;