import { motion, easeOut } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaUser, FaBuilding, FaRobot } from 'react-icons/fa';
import TerminalType from '../../components/Motion/TerminalType';
import LiveMetric from '../../components/Motion/LiveMetric';
import {
  Card,
  Grid2,
  HeroSection,
  PageContainer,
  PageRoot,
  PrimaryButton,
  Section,
  FieldIcon,
  FormGrid,
} from '../shared/styles/PagePrimitives.styles';

const reveal = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const prefillNeed = (location.state as { prefillNeed?: string } | null)?.prefillNeed || '';
  const [needValue, setNeedValue] = useState(prefillNeed);

  useEffect(() => {
    if (prefillNeed) {
      setNeedValue(prefillNeed);
    }
  }, [prefillNeed]);

  return (
    <PageRoot>
      <PageContainer>
        <HeroSection as={motion.section} initial='hidden' animate='show' variants={reveal} transition={{ duration: 0.62, ease: easeOut }}>
          <h1><TerminalType text={t('contact.h1')} durationMs={2200} storageKey='kontakt_h1_once' /></h1>
          <p>{t('contact.responseTime')} <LiveMetric start={58} min={34} max={95} step={1} suffix=' min' /></p>
        </HeroSection>

        <Section>
          <Grid2>
            <Card as={FormGrid}>
              <FieldIcon><FaUser /> <input type='text' placeholder={t('contact.form.name')} required /></FieldIcon>
              <FieldIcon><FaBuilding /> <input type='text' placeholder={t('contact.form.business')} required /></FieldIcon>
              <FieldIcon>
                <FaRobot />{' '}
                <textarea
                  placeholder={t('contact.form.need')}
                  value={needValue}
                  onChange={event => setNeedValue(event.target.value)}
                  required
                />
              </FieldIcon>
              <PrimaryButton type='submit'><FaEnvelope /> {t('contact.form.submit')}</PrimaryButton>
            </Card>

            <Card>
              <h3>{t('contact.quickContacts')}</h3>
              <p><a href='mailto:kontakt@vs-web-studio.de'><FaEnvelope /> kontakt@vs-web-studio.de</a></p>
              <p><a href='tel:+49301234567'><FaPhone /> +49 30 1234567</a></p>
            </Card>
          </Grid2>
        </Section>
      </PageContainer>
    </PageRoot>
  );
};

export default Contact;
