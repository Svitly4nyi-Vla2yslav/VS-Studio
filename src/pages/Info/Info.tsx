import { useTranslation } from 'react-i18next';
import { FaRobot, FaBullhorn, FaShareAlt, FaEnvelope } from 'react-icons/fa';
import TerminalType from '../../components/Motion/TerminalType';
import {
  Band,
  Card,
  Grid2,
  HeroSection,
  IconBadge,
  PageContainer,
  PageRoot,
  PrimaryButton,
  Section,
  FieldIcon,
  FormGrid,
} from '../shared/styles/PagePrimitives.styles';

const BlogPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageRoot>
      <PageContainer>
        <HeroSection>
          <h1><TerminalType text={t('blog.h1')} durationMs={2600} storageKey='blog_h1_once' /></h1>
          <p>{t('blog.subtitle')}</p>
        </HeroSection>

        <Section>
          <Grid2>
            <Card><h3><IconBadge><FaRobot /></IconBadge>{t('blog.cards.c1')}</h3></Card>
            <Card><h3><IconBadge><FaShareAlt /></IconBadge>{t('blog.cards.c2')}</h3></Card>
            <Card><h3><IconBadge><FaBullhorn /></IconBadge>{t('blog.cards.c3')}</h3></Card>
            <Card><h3><IconBadge><FaRobot /></IconBadge>{t('blog.cards.c4')}</h3></Card>
          </Grid2>
        </Section>

        <Band>
          <h2><TerminalType text={t('blog.leadMagnet')} durationMs={1800} storageKey='blog_leadmagnet_once' /></h2>
          <FormGrid style={{ maxWidth: 420 }}>
            <FieldIcon><FaEnvelope /> <input type='email' placeholder={t('blog.emailPlaceholder')} required /></FieldIcon>
            <PrimaryButton type='submit'><FaEnvelope /> {t('blog.getGuide')}</PrimaryButton>
          </FormGrid>
        </Band>
      </PageContainer>
    </PageRoot>
  );
};

export default BlogPage;