import { useTranslation } from 'react-i18next';
import { Card, HeroSection, PageContainer, PageRoot, Section } from '../shared/styles/PagePrimitives.styles';

const Datenschutz: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageRoot>
      <PageContainer>
        <HeroSection>
          <h1>{t('legal.datenschutz.h1')}</h1>
          <p>{t('legal.datenschutz.subtitle')}</p>
        </HeroSection>
        <Section>
          <Card>
            <p>{t('legal.datenschutz.l1')}</p>
            <p>{t('legal.datenschutz.l2')}</p>
            <p>{t('legal.datenschutz.l3')}</p>
            <p>{t('legal.datenschutz.l4')}</p>
          </Card>
        </Section>
      </PageContainer>
    </PageRoot>
  );
};

export default Datenschutz;