import { easeOut } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import {
  FaBolt,
  FaBuilding,
  FaCheckCircle,
  FaCommentDots,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaRegClock,
  FaUser,
} from 'react-icons/fa';
import TerminalType from '../../components/Motion/TerminalType';
import { PageContainer } from '../shared/styles/PagePrimitives.styles';
import ContactLeadVisual from './ContactLeadVisual';
import {
  CardEyebrow,
  CardTitle,
  ContactCard,
  ContactHeroGrid,
  ContactHeroSection,
  ContactHeroCanvas,
  ContactItemLink,
  ContactList,
  ContactPageRoot,
  ContactSecondaryGrid,
  ContactSecondarySection,
  ContextField,
  FieldGroup,
  FieldHint,
  FieldLabel,
  FormCard,
  FormIntro,
  HeroCopyBlock,
  HeroLead,
  HeroTitle,
  HeroWorkbench,
  InfoList,
  InfoListItem,
  HeroVisualColumn,
  MiniCardText,
  MiniCardTitle,
  ResponseBadge,
  ResponseNote,
  SectionEyebrow,
  StaticContactItem,
  SubmitButton,
  TrustBadge,
  TrustGrid,
} from './Contact.styled';

const reveal = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const copy = {
  headline: 'Erzaehlen Sie uns von Ihrem Projekt',
  responseTime: 'Durchschnittliche Antwortzeit: 1-2h',
  subtitle: 'Kurz beschreiben, was Sie planen. Sie erhalten schnell eine Ersteinschaetzung und den naechsten Schritt.',
  quickContacts: 'Direkter Kontakt',
  responseNote: 'Antwort meist innerhalb von 1-2 Stunden',
  formTitle: 'Projektanfrage',
  formIntro: 'Drei Angaben reichen fuer den Start.',
  formHelp: 'Name, Unternehmen und Ziel genuegen.',
  nextStepsTitle: 'So geht es weiter',
  nextStepsLead:
    'Nach Ihrer Anfrage sehen Sie sofort, wie der erste Kontakt, die Priorisierung und die Rueckmeldung organisiert sind.',
  labels: {
    name: 'Ihr Name',
    business: 'Unternehmen',
    message: 'Projekt oder Ziel',
  },
  contactMeta: {
    location: 'Standort fuer schnelle Abstimmung',
    email: 'Projektanfragen per E-Mail',
    phone: 'Kurzes Erstgespraech oder Rueckruf',
  },
  trustItems: ['Direkte Kommunikation', 'Klare Ersteinschaetzung', 'Schnelle Rueckmeldung'],
  nextSteps: [
    'Ihre Anfrage landet direkt im Intake-Flow.',
    'Wir melden uns meist innerhalb von 1-2 Stunden zurueck.',
    'Sie erhalten einen klaren naechsten Schritt statt langer Rueckfragen.',
  ],
};

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const prefillNeed = (location.state as { prefillNeed?: string } | null)?.prefillNeed || '';
  const [nameValue, setNameValue] = useState('');
  const [businessValue, setBusinessValue] = useState('');
  const [needValue, setNeedValue] = useState(prefillNeed);

  useEffect(() => {
    if (prefillNeed) {
      setNeedValue(prefillNeed);
    }
  }, [prefillNeed]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subjectBase = t('contact.form.title', { defaultValue: copy.formTitle });
    const subjectSuffix = businessValue.trim() ? ` - ${businessValue.trim()}` : '';
    const body = [
      `${t('contact.form.labels.name', { defaultValue: copy.labels.name })}: ${nameValue.trim() || '-'}`,
      `${t('contact.form.labels.business', { defaultValue: copy.labels.business })}: ${businessValue.trim() || '-'}`,
      `${t('contact.form.labels.message', { defaultValue: copy.labels.message })}:`,
      needValue.trim() || '-',
    ].join('\n');

    window.location.href = `mailto:kontakt@vs-web-studio.de?subject=${encodeURIComponent(`${subjectBase}${subjectSuffix}`)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <ContactPageRoot>
      <PageContainer>
        <ContactHeroSection initial='hidden' animate='show' variants={reveal} transition={{ duration: 0.62, ease: easeOut }}>
          <ContactHeroCanvas>
            <ContactHeroGrid>
              <HeroCopyBlock>
                <ResponseBadge>
                  <FaBolt />
                  <span>{t('contact.responseTime', { defaultValue: copy.responseTime })}</span>
                </ResponseBadge>

                <HeroTitle>
                  <TerminalType
                    text={t('contact.h1', { defaultValue: copy.headline })}
                    durationMs={2200}
                    storageKey='kontakt_h1_once'
                  />
                </HeroTitle>

                <HeroLead>{t('contact.subtitle', { defaultValue: copy.subtitle })}</HeroLead>
              </HeroCopyBlock>

              <HeroWorkbench>
                <FormCard onSubmit={handleSubmit} noValidate name="contact" data-netlify="true">
                  <CardEyebrow>VS Web Studio</CardEyebrow>
                  <CardTitle>{t('contact.form.title', { defaultValue: copy.formTitle })}</CardTitle>
                  <FormIntro>{t('contact.form.intro', { defaultValue: copy.formIntro })}</FormIntro>

                  <FieldGroup>
                    <FieldLabel>{t('contact.form.labels.name', { defaultValue: copy.labels.name })}</FieldLabel>
                    <ContextField>
                      <FaUser />
                      <input
                        type='text'
                        name='name'
                        value={nameValue}
                        onChange={event => setNameValue(event.target.value)}
                        placeholder={t('contact.form.name', { defaultValue: copy.labels.name })}
                        aria-label={t('contact.form.labels.name', { defaultValue: copy.labels.name })}
                        required
                      />
                    </ContextField>
                  </FieldGroup>

                  <FieldGroup>
                    <FieldLabel>{t('contact.form.labels.business', { defaultValue: copy.labels.business })}</FieldLabel>
                    <ContextField>
                      <FaBuilding />
                      <input
                        type='text'
                        name='business'
                        value={businessValue}
                        onChange={event => setBusinessValue(event.target.value)}
                        placeholder={t('contact.form.business', { defaultValue: copy.labels.business })}
                        aria-label={t('contact.form.labels.business', { defaultValue: copy.labels.business })}
                        required
                      />
                    </ContextField>
                  </FieldGroup>

                  <FieldGroup>
                    <FieldLabel>{t('contact.form.labels.message', { defaultValue: copy.labels.message })}</FieldLabel>
                    <ContextField>
                      <FaCommentDots />
                      <textarea
                        name='message'
                        placeholder={t('contact.form.need', { defaultValue: copy.labels.message })}
                        value={needValue}
                        onChange={event => setNeedValue(event.target.value)}
                        aria-label={t('contact.form.labels.message', { defaultValue: copy.labels.message })}
                        required
                      />
                    </ContextField>
                  </FieldGroup>

                  <FieldHint>{t('contact.form.help', { defaultValue: copy.formHelp })}</FieldHint>

                  <SubmitButton type='submit'>
                    <FaEnvelope />
                    {t('contact.form.submit', { defaultValue: 'Projekt anfragen' })}
                  </SubmitButton>
                </FormCard>

                <HeroVisualColumn>
                  <ContactLeadVisual />
                </HeroVisualColumn>
              </HeroWorkbench>
            </ContactHeroGrid>
          </ContactHeroCanvas>
        </ContactHeroSection>

        <ContactSecondarySection
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.18 }}
          variants={reveal}
          transition={{ duration: 0.52, ease: easeOut }}
        >
          <ContactSecondaryGrid>
            <ContactCard>
              <CardEyebrow>VS Web Studio</CardEyebrow>
              <CardTitle>{t('contact.quickContacts', { defaultValue: copy.quickContacts })}</CardTitle>

              <ResponseNote>
                <FaRegClock />
                <span>{t('contact.responseNote', { defaultValue: copy.responseNote })}</span>
              </ResponseNote>

              <ContactList>
                <StaticContactItem>
                  <FaMapMarkerAlt />
                  <div>
                    <strong>Hildesheim</strong>
                    <span>{t('contact.contactMeta.location', { defaultValue: copy.contactMeta.location })}</span>
                  </div>
                </StaticContactItem>

                <ContactItemLink href='mailto:kontakt@vs-web-studio.de'>
                  <FaEnvelope />
                  <div>
                    <strong>kontakt@vs-web-studio.de</strong>
                    <span>{t('contact.contactMeta.email', { defaultValue: copy.contactMeta.email })}</span>
                  </div>
                </ContactItemLink>

                <ContactItemLink href='tel:+49301234567'>
                  <FaPhone />
                  <div>
                    <strong>+49 30 1234567</strong>
                    <span>{t('contact.contactMeta.phone', { defaultValue: copy.contactMeta.phone })}</span>
                  </div>
                </ContactItemLink>
              </ContactList>

              <TrustGrid>
                {copy.trustItems.map((item, index) => (
                  <TrustBadge key={item}>
                    <FaCheckCircle />
                    {t(`contact.trustItems.${index}`, { defaultValue: item })}
                  </TrustBadge>
                ))}
              </TrustGrid>
            </ContactCard>

            <ContactCard>
              <SectionEyebrow>{t('contact.nextStepsEyebrow', { defaultValue: 'Lead Intake' })}</SectionEyebrow>
              <MiniCardTitle>{t('contact.nextStepsTitle', { defaultValue: copy.nextStepsTitle })}</MiniCardTitle>
              <MiniCardText>{t('contact.nextStepsLead', { defaultValue: copy.nextStepsLead })}</MiniCardText>

              <InfoList>
                {copy.nextSteps.map((step, index) => (
                  <InfoListItem key={step}>
                    <span>0{index + 1}</span>
                    <p>{t(`contact.nextSteps.${index}`, { defaultValue: step })}</p>
                  </InfoListItem>
                ))}
              </InfoList>
            </ContactCard>
          </ContactSecondaryGrid>
        </ContactSecondarySection>
      </PageContainer>
    </ContactPageRoot>
  );
};

export default Contact;
