import { useTranslation } from 'react-i18next';
import { IconType } from 'react-icons';
import { FaBullhorn, FaCalendarCheck, FaCheckCircle, FaFileAlt, FaUserPlus } from 'react-icons/fa';
import {
  LeadHubCard,
  LeadHubCore,
  LeadHubCoreMeta,
  LeadHubCoreTitle,
  LeadHubEyebrow,
  LeadHubGrid,
  LeadHubLabel,
  LeadHubStat,
  LeadHubTitle,
  LeadHubValue,
  LeadLaneCaption,
  LeadLaneCard,
  LeadLaneCardBody,
  LeadLaneCardIcon,
  LeadLaneCardMeta,
  LeadLaneCardTitle,
  LeadLaneInfo,
  LeadLaneKicker,
  LeadLaneRow,
  LeadLaneSequence,
  LeadLaneStack,
  LeadLaneTrack,
  LeadLaneViewport,
  LeadSceneGrid,
  LeadVisualEyebrow,
  LeadVisualGlowBlue,
  LeadVisualGlowGold,
  LeadVisualHeader,
  LeadVisualPanel,
  LeadVisualTitle,
} from './Contact.styled';

type Tone = 'gold' | 'blue' | 'green' | 'violet';

type StreamCard = {
  title: string;
  meta: string;
  icon: IconType;
  tone: Tone;
};

type StreamLane = {
  kicker: string;
  caption: string;
  duration: number;
  delay: number;
  cards: StreamCard[];
};

type HubStat = {
  value: string;
  label: string;
  delay: number;
};

type LeadVisualCopy = {
  eyebrow: string;
  title: string;
  lanes: StreamLane[];
  hubEyebrow: string;
  hubTitle: string;
  hubCoreTitle: string;
  hubCoreMeta: string;
  stats: HubStat[];
};

const deCopy: LeadVisualCopy = {
  eyebrow: 'Lead Flow',
  title: 'Anfragen laufen sichtbar und ohne Unterbrechung ins CRM, werden sortiert und direkt an den naechsten Schritt uebergeben.',
  lanes: [
    {
      kicker: 'Website',
      caption: 'Landingpage + Kontaktformular',
      duration: 9.5,
      delay: -4.2,
      cards: [
        { title: 'New Lead', meta: 'Website Anfrage', icon: FaUserPlus, tone: 'gold' },
        { title: 'Form submitted', meta: 'Kontaktformular', icon: FaFileAlt, tone: 'blue' },
        { title: 'Qualified', meta: 'Fit geprueft', icon: FaCheckCircle, tone: 'green' },
      ],
    },
    {
      kicker: 'Ads',
      caption: 'Meta Ads + Kampagnen',
      duration: 11,
      delay: -7.4,
      cards: [
        { title: 'Meta Ads Lead', meta: 'Paid Acquisition', icon: FaBullhorn, tone: 'violet' },
        { title: 'New Lead', meta: 'Campaign entry', icon: FaUserPlus, tone: 'gold' },
        { title: 'Qualified', meta: 'Priority score', icon: FaCheckCircle, tone: 'green' },
      ],
    },
    {
      kicker: 'Calls',
      caption: 'Terminierung + Follow-up',
      duration: 10.2,
      delay: -5.8,
      cards: [
        { title: 'Call booked', meta: 'Calendar sync', icon: FaCalendarCheck, tone: 'green' },
        { title: 'Form submitted', meta: 'Brief erhalten', icon: FaFileAlt, tone: 'blue' },
        { title: 'Qualified', meta: 'Sales ready', icon: FaCheckCircle, tone: 'gold' },
      ],
    },
  ],
  hubEyebrow: 'CRM Hub',
  hubTitle: 'Alle Signale laufen in einen klaren Intake-Flow.',
  hubCoreTitle: 'Lead Router',
  hubCoreMeta: 'Capture -> assign -> book',
  stats: [
    { value: '1-2h', label: 'Antwortzeit', delay: 0 },
    { value: '24/7', label: 'Inbox capture', delay: 0.2 },
    { value: 'Live', label: 'Assigned in CRM', delay: 0.4 },
  ],
};

const ukCopy: LeadVisualCopy = {
  eyebrow: 'Lead Flow',
  title: 'Zapity bezperervno zakhodiat u CRM, sortuiutsia i peredaiutsia v nastupnyi krok bez pauz i rizkykh loopiv.',
  lanes: [
    {
      kicker: 'Website',
      caption: 'Landing page + forma',
      duration: 9.5,
      delay: -4.2,
      cards: [
        { title: 'New Lead', meta: 'Website Anfrage', icon: FaUserPlus, tone: 'gold' },
        { title: 'Form submitted', meta: 'Forma vidpravlena', icon: FaFileAlt, tone: 'blue' },
        { title: 'Qualified', meta: 'Lid perevireno', icon: FaCheckCircle, tone: 'green' },
      ],
    },
    {
      kicker: 'Ads',
      caption: 'Meta Ads + kampanii',
      duration: 11,
      delay: -7.4,
      cards: [
        { title: 'Meta Ads Lead', meta: 'Paid Acquisition', icon: FaBullhorn, tone: 'violet' },
        { title: 'New Lead', meta: 'Campaign entry', icon: FaUserPlus, tone: 'gold' },
        { title: 'Qualified', meta: 'Priority score', icon: FaCheckCircle, tone: 'green' },
      ],
    },
    {
      kicker: 'Calls',
      caption: 'Call booking + follow-up',
      duration: 10.2,
      delay: -5.8,
      cards: [
        { title: 'Call booked', meta: 'Calendar sync', icon: FaCalendarCheck, tone: 'green' },
        { title: 'Form submitted', meta: 'Brief otrymano', icon: FaFileAlt, tone: 'blue' },
        { title: 'Qualified', meta: 'Sales ready', icon: FaCheckCircle, tone: 'gold' },
      ],
    },
  ],
  hubEyebrow: 'CRM Hub',
  hubTitle: 'Usi signaly skhodiatsia v odyn zrozumilyi intake-flow.',
  hubCoreTitle: 'Lead Router',
  hubCoreMeta: 'Capture -> assign -> book',
  stats: [
    { value: '1-2h', label: 'Vidpovid', delay: 0 },
    { value: '24/7', label: 'Lead capture', delay: 0.2 },
    { value: 'Live', label: 'Assigned in CRM', delay: 0.4 },
  ],
};

export const ContactLeadVisual: React.FC = () => {
  const { i18n } = useTranslation();
  const locale = i18n.resolvedLanguage ?? i18n.language ?? 'de';
  const copy = locale.startsWith('uk') ? ukCopy : deCopy;

  return (
    <LeadVisualPanel aria-hidden='true'>
      <LeadVisualGlowGold />
      <LeadVisualGlowBlue />

      <LeadVisualHeader>
        <LeadVisualEyebrow>{copy.eyebrow}</LeadVisualEyebrow>
        <LeadVisualTitle>{copy.title}</LeadVisualTitle>
      </LeadVisualHeader>

      <LeadSceneGrid>
        <LeadLaneStack>
          {copy.lanes.map(lane => (
            <LeadLaneRow key={lane.kicker}>
              <LeadLaneInfo>
                <LeadLaneKicker>{lane.kicker}</LeadLaneKicker>
                <LeadLaneCaption>{lane.caption}</LeadLaneCaption>
              </LeadLaneInfo>

              <LeadLaneViewport>
                <LeadLaneTrack $duration={lane.duration} $delay={lane.delay}>
                  <LeadLaneSequence>
                    {lane.cards.map(card => {
                      const Icon = card.icon;

                      return (
                        <LeadLaneCard key={`${lane.kicker}-${card.title}-${card.meta}`}>
                          <LeadLaneCardIcon $tone={card.tone}>
                            <Icon />
                          </LeadLaneCardIcon>
                          <LeadLaneCardBody>
                            <LeadLaneCardTitle>{card.title}</LeadLaneCardTitle>
                            <LeadLaneCardMeta>{card.meta}</LeadLaneCardMeta>
                          </LeadLaneCardBody>
                        </LeadLaneCard>
                      );
                    })}
                  </LeadLaneSequence>

                  <LeadLaneSequence aria-hidden='true'>
                    {lane.cards.map(card => {
                      const Icon = card.icon;

                      return (
                        <LeadLaneCard key={`${lane.kicker}-${card.title}-${card.meta}-clone`}>
                          <LeadLaneCardIcon $tone={card.tone}>
                            <Icon />
                          </LeadLaneCardIcon>
                          <LeadLaneCardBody>
                            <LeadLaneCardTitle>{card.title}</LeadLaneCardTitle>
                            <LeadLaneCardMeta>{card.meta}</LeadLaneCardMeta>
                          </LeadLaneCardBody>
                        </LeadLaneCard>
                      );
                    })}
                  </LeadLaneSequence>
                </LeadLaneTrack>
              </LeadLaneViewport>
            </LeadLaneRow>
          ))}
        </LeadLaneStack>

        <LeadHubCard>
          <LeadHubEyebrow>{copy.hubEyebrow}</LeadHubEyebrow>
          <LeadHubTitle>{copy.hubTitle}</LeadHubTitle>

          <LeadHubCore>
            <LeadHubCoreTitle>{copy.hubCoreTitle}</LeadHubCoreTitle>
            <LeadHubCoreMeta>{copy.hubCoreMeta}</LeadHubCoreMeta>
          </LeadHubCore>

          <LeadHubGrid>
            {copy.stats.map(stat => (
              <LeadHubStat key={stat.label} $delay={stat.delay}>
                <LeadHubValue>{stat.value}</LeadHubValue>
                <LeadHubLabel>{stat.label}</LeadHubLabel>
              </LeadHubStat>
            ))}
          </LeadHubGrid>
        </LeadHubCard>
      </LeadSceneGrid>
    </LeadVisualPanel>
  );
};

export default ContactLeadVisual;
