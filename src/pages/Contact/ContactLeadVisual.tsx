import { useTranslation } from 'react-i18next';
import { FaClock, FaEnvelope } from 'react-icons/fa';
import {
  LeadArrow,
  LeadCompactScene,
  LeadMiniMetaChip,
  LeadMiniMetaRow,
  LeadNode,
  LeadRouterCard,
  LeadRouterEyebrow,
  LeadRouterMeta,
  LeadRouterTitle,
  LeadSourceLane,
  LeadSourceStack,
  LeadStatChip,
  LeadStatRow,
  LeadVisualEyebrow,
  LeadVisualGlowBlue,
  LeadVisualGlowGold,
  LeadVisualHeader,
  LeadVisualPanel,
  LeadVisualTitle,
} from './Contact.styled';

type LeadVisualCopy = {
  eyebrow: string;
  title: string;
  lanes: Array<{ source: string; target: string; tone: 'gold' | 'blue' | 'green' }>;
  routerEyebrow: string;
  routerTitle: string;
  routerMeta: string;
  miniMeta: string[];
  stats: Array<{ value: string; label: string }>;
};

const copy: LeadVisualCopy = {
  eyebrow: 'Lead Flow',
  title: 'Website, Ads und Calls gehen direkt in den CRM-Flow.',
  lanes: [
    { source: 'Website', target: 'Lead', tone: 'gold' },
    { source: 'Ads', target: 'Lead', tone: 'blue' },
    { source: 'Calls', target: 'Lead', tone: 'green' },
  ],
  routerEyebrow: 'CRM Hub',
  routerTitle: 'CRM Router',
  routerMeta: 'Capture, Routing und Rueckmeldung.',
  miniMeta: ['1-2h Antwort', 'Live in CRM'],
  stats: [
    { value: '1-2h', label: 'Response' },
    { value: 'Live', label: 'Assigned in CRM' },
  ],
};

export const ContactLeadVisual: React.FC = () => {
  const { t } = useTranslation();

  return (
    <LeadVisualPanel aria-hidden='true'>
      <LeadVisualGlowGold />
      <LeadVisualGlowBlue />

      <LeadVisualHeader>
        <LeadVisualEyebrow>{t('contact.visual.eyebrow', { defaultValue: copy.eyebrow })}</LeadVisualEyebrow>
        <LeadVisualTitle>{t('contact.visual.title', { defaultValue: copy.title })}</LeadVisualTitle>
      </LeadVisualHeader>

      <LeadCompactScene>
        <LeadSourceStack>
          {copy.lanes.map((lane, index) => (
            <LeadSourceLane key={lane.source}>
              <LeadNode $tone={lane.tone}>
                {t(`contact.visual.lanes.${index}.source`, { defaultValue: lane.source })}
              </LeadNode>
              <LeadArrow />
              <LeadNode>
                {t(`contact.visual.lanes.${index}.target`, { defaultValue: lane.target })}
              </LeadNode>
            </LeadSourceLane>
          ))}
        </LeadSourceStack>

        <LeadRouterCard>
          <LeadRouterEyebrow>{t('contact.visual.routerEyebrow', { defaultValue: copy.routerEyebrow })}</LeadRouterEyebrow>
          <LeadRouterTitle>{t('contact.visual.routerTitle', { defaultValue: copy.routerTitle })}</LeadRouterTitle>
          <LeadRouterMeta>{t('contact.visual.routerMeta', { defaultValue: copy.routerMeta })}</LeadRouterMeta>

          <LeadMiniMetaRow>
            <LeadMiniMetaChip>
              <FaClock />
              {t('contact.visual.miniMeta.0', { defaultValue: copy.miniMeta[0] })}
            </LeadMiniMetaChip>
            <LeadMiniMetaChip>
              <FaEnvelope />
              {t('contact.visual.miniMeta.1', { defaultValue: copy.miniMeta[1] })}
            </LeadMiniMetaChip>
          </LeadMiniMetaRow>

          <LeadStatRow>
            {copy.stats.map((stat, index) => (
              <LeadStatChip key={stat.label}>
                <strong>{t(`contact.visual.stats.${index}.value`, { defaultValue: stat.value })}</strong>
                <span>{t(`contact.visual.stats.${index}.label`, { defaultValue: stat.label })}</span>
              </LeadStatChip>
            ))}
          </LeadStatRow>
        </LeadRouterCard>
      </LeadCompactScene>
    </LeadVisualPanel>
  );
};

export default ContactLeadVisual;
