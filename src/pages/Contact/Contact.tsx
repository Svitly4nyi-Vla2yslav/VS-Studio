import { easeOut } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import {
  FaBolt,
  FaBuilding,
  FaCheckCircle,
  FaClipboardList,
  FaCommentDots,
  FaEnvelope,
  FaFacebookF,
  FaGlobe,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaRegClock,
  FaUser,
} from 'react-icons/fa';
import TerminalType from '../../components/Motion/TerminalType';
import { contactInfo } from '../../data/contactInfo';
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
  subtitle: 'Kurz beschreiben, was Sie planen. Sie erhalten schnell eine Ersteinschaetzung und den nächsten Schritt.',
  quickContacts: 'Direkter Kontakt',
  responseNote: 'Antwort meist innerhalb von 1-2 Stunden',
  formTitle: 'Projektanfrage',
  formIntro: 'Drei Angaben reichen für den Start.',
  formHelp: 'Name, Unternehmen und Ziel genuegen.',
  nextStepsTitle: 'So geht es weiter',
  nextStepsLead:
    'Nach Ihrer Anfrage sehen Sie sofort, wie der erste Kontakt, die Priorisierung und die Rueckmeldung organisiert sind.',
  labels: {
    name: 'Ihr Name',
    business: 'Unternehmen',
    email: 'E-Mail',
    phone: 'Telefon optional',
    website: 'Website optional',
    service: 'Gewünschte Leistung',
    message: 'Projekt oder Ziel',
  },
  submitLoading: 'Wird gesendet...',
  submitSuccess: 'Vielen Dank. Ihre Anfrage wurde erfolgreich versendet.',
  submitError: 'Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.',
  submitDevError:
    'Lokaler API-Server nicht erreichbar. Starten Sie die App mit "npm run dev:netlify" und öffnen Sie dann http://localhost:8888.',
  contactMeta: {
    location: 'Standort für schnelle Abstimmung',
    email: 'Projektanfragen per E-Mail',
    phone: 'Kurzes Erstgespraech oder Rueckruf',
  },
  trustItems: ['Direkte Kommunikation', 'Klare Ersteinschaetzung', 'Schnelle Rueckmeldung'],
  nextSteps: [
    'Ihre Anfrage landet direkt im Intake-Flow.',
    'Wir melden uns meist innerhalb von 1-2 Stunden zurueck.',
    'Sie erhalten einen klaren nächsten Schritt statt langer Rückfragen.',
  ],
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const contactDevFunctionEndpoint = 'http://localhost:8888/.netlify/functions/contact';
const contactDevEndpoint = 'http://localhost:8888/api/contact';
const socialIcons = {
  linkedin: FaLinkedinIn,
  facebook: FaFacebookF,
  instagram: FaInstagram,
};

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const prefillNeed = (location.state as { prefillNeed?: string } | null)?.prefillNeed || '';
  const [nameValue, setNameValue] = useState('');
  const [businessValue, setBusinessValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [serviceValue, setServiceValue] = useState('Website erstellen lassen');
  const [needValue, setNeedValue] = useState(prefillNeed);
  const [websiteValue, setWebsiteValue] = useState('');
  const [honeypotValue, setHoneypotValue] = useState('');
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
      return [contactDevFunctionEndpoint, contactDevEndpoint];
    }

    return ['/.netlify/functions/contact', '/api/contact'];
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

    if (honeypotValue.trim()) {
      setIsSubmitting(false);
      return;
    }

    try {
      const requestBody = JSON.stringify({
        name: nameValue.trim(),
        business: businessValue.trim(),
        email: emailValue.trim(),
        phone: phoneValue.trim(),
        service: serviceValue.trim(),
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
      setPhoneValue('');
      setServiceValue('Website erstellen lassen');
      setNeedValue('');
      setWebsiteValue('');
      setHoneypotValue('');
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
                      value={honeypotValue}
                      onChange={event => setHoneypotValue(event.target.value)}
                      tabIndex={-1}
                      autoComplete='off'
                    />
                  </VisuallyHiddenField>

                  <FieldGroup>
                    <FieldLabel htmlFor='contact-name'>{t('contact.form.labels.name', { defaultValue: copy.labels.name })}</FieldLabel>
                    <ContextField>
                      <FaUser />
                      <input
                        id='contact-name'
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
                    <FieldLabel htmlFor='contact-business'>{t('contact.form.labels.business', { defaultValue: copy.labels.business })}</FieldLabel>
                    <ContextField>
                      <FaBuilding />
                      <input
                        id='contact-business'
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
                    <FieldLabel htmlFor='contact-email'>{t('contact.form.labels.email', { defaultValue: copy.labels.email })}</FieldLabel>
                    <ContextField>
                      <FaEnvelope />
                      <input
                        id='contact-email'
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
                    <FieldLabel htmlFor='contact-phone'>{t('contact.form.labels.phone', { defaultValue: copy.labels.phone })}</FieldLabel>
                    <ContextField>
                      <FaPhone />
                      <input
                        id='contact-phone'
                        type='tel'
                        name='phone'
                        value={phoneValue}
                        onChange={event => setPhoneValue(event.target.value)}
                        placeholder={t('contact.form.phone', { defaultValue: copy.labels.phone })}
                        aria-label={t('contact.form.labels.phone', { defaultValue: copy.labels.phone })}
                        autoComplete='tel'
                      />
                    </ContextField>
                  </FieldGroup>

                  <FieldGroup>
                    <FieldLabel htmlFor='contact-visible-website'>{t('contact.form.labels.website', { defaultValue: copy.labels.website })}</FieldLabel>
                    <ContextField>
                      <FaGlobe />
                      <input
                        id='contact-visible-website'
                        type='url'
                        name='visibleWebsite'
                        value={websiteValue}
                        onChange={event => setWebsiteValue(event.target.value)}
                        placeholder='https://'
                        aria-label={t('contact.form.labels.website', { defaultValue: copy.labels.website })}
                        autoComplete='url'
                      />
                    </ContextField>
                  </FieldGroup>

                  <FieldGroup>
                    <FieldLabel htmlFor='contact-service'>{t('contact.form.labels.service', { defaultValue: copy.labels.service })}</FieldLabel>
                    <ContextField>
                      <FaClipboardList />
                      <select
                        id='contact-service'
                        name='service'
                        value={serviceValue}
                        onChange={event => setServiceValue(event.target.value)}
                        aria-label={t('contact.form.labels.service', { defaultValue: copy.labels.service })}
                      >
                        <option>Website erstellen lassen</option>
                        <option>Landingpage</option>
                        <option>SEO-Grundstruktur</option>
                        <option>Lead-System</option>
                        <option>Website modernisieren</option>
                        <option>Sonstiges</option>
                      </select>
                    </ContextField>
                  </FieldGroup>

                  <FieldGroup>
                    <FieldLabel htmlFor='contact-message'>{t('contact.form.labels.message', { defaultValue: copy.labels.message })}</FieldLabel>
                    <ContextField>
                      <FaCommentDots />
                      <textarea
                        id='contact-message'
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
                {/* <ContactItemLink href={mapsHref} target='_blank' rel='noreferrer'>
                  <FaMapMarkerAlt />
                  <div>
                    <strong>, 31135 Hildesheim</strong>
                    <span>{t('contact.contactMeta.location', { defaultValue: copy.contactMeta.location })}</span>
                  </div>
                </ContactItemLink> */}

                <ContactItemLink href={contactInfo.emailHref}>
                  <FaEnvelope />
                  <div>
                    <strong>{contactInfo.email}</strong>
                    <span>{t('contact.contactMeta.email', { defaultValue: copy.contactMeta.email })}</span>
                  </div>
                </ContactItemLink>

                <ContactItemLink href={contactInfo.phoneHref}>
                  <FaPhone />
                  <div>
                    <strong>{contactInfo.phone}</strong>
                    <span>{t('contact.contactMeta.phone', { defaultValue: copy.contactMeta.phone })}</span>
                  </div>
                </ContactItemLink>

                {contactInfo.socialLinks.map(link => {
                  const Icon = socialIcons[link.id];
                  return (
                    <ContactItemLink
                      key={link.id}
                      href={link.url}
                      target='_blank'
                      rel='me noopener noreferrer'
                    >
                      <Icon />
                      <div>
                        <strong>{link.label}</strong>
                        <span>VS Web Studio</span>
                      </div>
                    </ContactItemLink>
                  );
                })}
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
