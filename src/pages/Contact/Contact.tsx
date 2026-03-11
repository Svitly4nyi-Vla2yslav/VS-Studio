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
  FormStatusMessage,
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
  SubmitButton,
  TrustBadge,
  TrustGrid,
  VisuallyHiddenField,
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
    email: 'E-Mail',
    message: 'Projekt oder Ziel',
  },
  submitLoading: 'Wird gesendet...',
  submitSuccess: 'Vielen Dank. Ihre Anfrage wurde erfolgreich versendet.',
  submitError: 'Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.',
  submitDevError:
    'Lokaler API-Server nicht erreichbar. Starten Sie die App mit "npm run dev:netlify" und öffnen Sie dann http://localhost:8888.',
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

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const contactDevEndpoint = 'http://localhost:8888/api/contact';
const contactDevFunctionEndpoint = 'http://localhost:8888/.netlify/functions/contact';
const mapsAddress = 'Ehrlicherstr. 52, 31135 Hildesheim, Germany';
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsAddress)}`;

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const prefillNeed = (location.state as { prefillNeed?: string } | null)?.prefillNeed || '';
  const [nameValue, setNameValue] = useState('');
  const [businessValue, setBusinessValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [needValue, setNeedValue] = useState(prefillNeed);
  const [websiteValue, setWebsiteValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [submitErrorMessage, setSubmitErrorMessage] = useState('');

  useEffect(() => {
    if (prefillNeed) {
      setNeedValue(prefillNeed);
    }
  }, [prefillNeed]);

  const getContactEndpoints = () => {
    if (import.meta.env.DEV && window.location.port === '5173') {
      return [contactDevEndpoint, contactDevFunctionEndpoint];
    }

    return ['/api/contact', '/.netlify/functions/contact'];
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitSuccess(false);
    setSubmitError(false);
    setSubmitErrorMessage('');

    if (!emailPattern.test(emailValue.trim())) {
      setSubmitError(true);
      setSubmitErrorMessage(t('contact.form.error', { defaultValue: copy.submitError }));
      return;
    }

    setIsSubmitting(true);

    try {
      const requestBody = JSON.stringify({
        name: nameValue.trim(),
        business: businessValue.trim(),
        email: emailValue.trim(),
        message: needValue.trim(),
        website: websiteValue.trim(),
      });

      const endpoints = getContactEndpoints();
      let response: Response | null = null;

      for (const endpoint of endpoints) {
        response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: requestBody,
        });

        if (response.ok) {
          break;
        }

        if (response.status !== 404) {
          break;
        }

        if (import.meta.env.DEV) {
          console.warn(`Contact endpoint returned 404: ${endpoint}`);
        }
      }

      if (!response || !response.ok) {
        throw new Error(`Request failed with status ${response?.status ?? 'unknown'}`);
      }

      setNameValue('');
      setBusinessValue('');
      setEmailValue('');
      setNeedValue('');
      setWebsiteValue('');
      setSubmitSuccess(true);
    } catch (error) {
      console.error('Contact form submit failed', error);
      setSubmitError(true);
      if (
        import.meta.env.DEV &&
        error instanceof TypeError &&
        window.location.port === '5173'
      ) {
        setSubmitErrorMessage(t('contact.form.devError', { defaultValue: copy.submitDevError }));
      } else {
        setSubmitErrorMessage(t('contact.form.error', { defaultValue: copy.submitError }));
      }
    } finally {
      setIsSubmitting(false);
    }
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
                <FormCard onSubmit={handleSubmit} noValidate>
                  <CardEyebrow>VS Web Studio</CardEyebrow>
                  <CardTitle>{t('contact.form.title', { defaultValue: copy.formTitle })}</CardTitle>
                  <FormIntro>{t('contact.form.intro', { defaultValue: copy.formIntro })}</FormIntro>

                  <VisuallyHiddenField aria-hidden='true'>
                    <label htmlFor='contact-website'>Website</label>
                    <input
                      id='contact-website'
                      type='text'
                      name='website'
                      value={websiteValue}
                      onChange={event => setWebsiteValue(event.target.value)}
                      tabIndex={-1}
                      autoComplete='off'
                    />
                  </VisuallyHiddenField>

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
                    <FieldLabel>{t('contact.form.labels.email', { defaultValue: copy.labels.email })}</FieldLabel>
                    <ContextField>
                      <FaEnvelope />
                      <input
                        type='email'
                        name='email'
                        value={emailValue}
                        onChange={event => setEmailValue(event.target.value)}
                        placeholder={t('contact.form.email', { defaultValue: copy.labels.email })}
                        aria-label={t('contact.form.labels.email', { defaultValue: copy.labels.email })}
                        autoComplete='email'
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

                  {submitSuccess ? (
                    <FormStatusMessage $tone='success' role='status' aria-live='polite'>
                      {t('contact.form.success', { defaultValue: copy.submitSuccess })}
                    </FormStatusMessage>
                  ) : null}

                  {submitError ? (
                    <FormStatusMessage $tone='error' role='alert'>
                      {submitErrorMessage || t('contact.form.error', { defaultValue: copy.submitError })}
                    </FormStatusMessage>
                  ) : null}

                  <SubmitButton type='submit' disabled={isSubmitting} aria-busy={isSubmitting}>
                    <FaEnvelope />
                    {isSubmitting
                      ? t('contact.form.submitLoading', { defaultValue: copy.submitLoading })
                      : t('contact.form.submit', { defaultValue: 'Projekt anfragen' })}
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
                <ContactItemLink href={mapsHref} target='_blank' rel='noreferrer'>
                  <FaMapMarkerAlt />
                  <div>
                    <strong>Ehrlicherstr. 52, 31135 Hildesheim</strong>
                    <span>{t('contact.contactMeta.location', { defaultValue: copy.contactMeta.location })}</span>
                  </div>
                </ContactItemLink>

                <ContactItemLink href='mailto:anfrage@vs-web-studio.de'>
                  <FaEnvelope />
                  <div>
                    <strong>anfrage@vs-web-studio.de</strong>
                    <span>{t('contact.contactMeta.email', { defaultValue: copy.contactMeta.email })}</span>
                  </div>
                </ContactItemLink>

                <ContactItemLink href='tel:+4915164392053'>
                  <FaPhone />
                  <div>
                    <strong>+49 1516 4392053</strong>
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
