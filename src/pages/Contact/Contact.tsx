import { motion, easeOut } from 'framer-motion';
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
import { PageContainer, PageRoot } from '../shared/styles/PagePrimitives.styles';
import ContactLeadVisual from './ContactLeadVisual';
import {
  CardEyebrow,
  CardTitle,
  ContactCard,
  ContactHeroGrid,
  ContactHeroSection,
  ContactItemLink,
  ContactList,
  ContextField,
  FieldGroup,
  FieldHint,
  FieldLabel,
  FormCard,
  FormIntro,
  HeroSideStack,
  HeroLead,
  HeroTitle,
  IntroStack,
  ResponseBadge,
  ResponseNote,
  StaticContactItem,
  SubmitButton,
  TrustBadge,
  TrustGrid,
} from './Contact.styled';

const reveal = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const deCopy = {
  headline: 'Erzaehlen Sie uns von Ihrem Projekt',
  responseTime: 'Durchschnittliche Antwortzeit: 1-2h',
  subtitle: 'Kurz beschreiben, was Sie planen. Sie erhalten eine klare Ersteinschaetzung und den naechsten sinnvollen Schritt.',
  quickContacts: 'Direkter Kontakt',
  responseNote: 'Antwort meist innerhalb von 1-2 Stunden',
  formTitle: 'Projektanfrage',
  formIntro: 'Je klarer die Anfrage, desto schneller koennen wir Aufwand, Prioritaeten und naechste Schritte einschaetzen.',
  formHelp: 'Zum Start reichen Branche, Ziel und was zuerst verbessert werden soll.',
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
};

const ukCopy = {
  headline: 'Розкажіть про ваш проєкт',
  responseTime: 'Середній час відповіді: 1-2 години',
  subtitle: 'Коротко опишіть ваш запит. Ви отримаєте чітку первинну оцінку та зрозумілий наступний крок.',
  quickContacts: 'Прямий контакт',
  responseNote: 'Відповідаємо зазвичай протягом 1-2 годин',
  formTitle: 'Запит на консультацію',
  formIntro: 'Чим чіткіше описаний запит, тим швидше ми зможемо оцінити обсяг роботи та запропонувати наступний крок.',
  formHelp: 'Для старту достатньо ніші, цілі та того, що потрібно покращити в першу чергу.',
  labels: {
    name: "Ваше ім'я",
    business: 'Компанія',
    message: 'Проєкт або задача',
  },
  contactMeta: {
    location: 'Локальна студія з швидким контактом',
    email: 'Запит на консультацію електронною поштою',
    phone: "Короткий дзвінок або зворотний зв'язок",
  },
  trustItems: ['Пряма комунікація', 'Чітка перша оцінка', "Швидкий зворотний зв'язок"],
};

const Contact: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const prefillNeed = (location.state as { prefillNeed?: string } | null)?.prefillNeed || '';
  const [nameValue, setNameValue] = useState('');
  const [businessValue, setBusinessValue] = useState('');
  const [needValue, setNeedValue] = useState(prefillNeed);
  const locale = i18n.resolvedLanguage ?? i18n.language ?? 'de';
  const copy = locale.startsWith('uk') ? ukCopy : deCopy;

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
      `${copy.labels.name}: ${nameValue.trim() || '-'}`,
      `${copy.labels.business}: ${businessValue.trim() || '-'}`,
      `${copy.labels.message}:`,
      needValue.trim() || '-',
    ].join('\n');

    window.location.href = `mailto:kontakt@vs-web-studio.de?subject=${encodeURIComponent(`${subjectBase}${subjectSuffix}`)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <PageRoot>
      <PageContainer>
        <ContactHeroSection
          as={motion.section}
          initial='hidden'
          animate='show'
          variants={reveal}
          transition={{ duration: 0.62, ease: easeOut }}
        >
          <ContactHeroGrid>
            <IntroStack>
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

              <FormCard onSubmit={handleSubmit} noValidate>
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
                      placeholder={t('contact.form.need')}
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
                  {t('contact.form.submit')}
                </SubmitButton>
              </FormCard>
            </IntroStack>

            <HeroSideStack>
              <ContactLeadVisual />

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
            </HeroSideStack>
          </ContactHeroGrid>
        </ContactHeroSection>
      </PageContainer>
    </PageRoot>
  );
};

export default Contact;
