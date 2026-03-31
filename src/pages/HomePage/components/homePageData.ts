import processCall from '../../../assets/process/01-call.webp';
import processPrototype from '../../../assets/process/02-prototype.webp';
import processDev from '../../../assets/process/03-dev.webp';
import processLaunch from '../../../assets/process/04-launch.webp';
import type { SegmentOption } from './types';

export const revealUp = {
  hidden: { opacity: 0, y: 34, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export const processSteps = [
  { step: '01', image: processCall },
  { step: '02', image: processPrototype },
  { step: '03', image: processDev },
  { step: '04', image: processLaunch },
] as const;

export const trustDeliverables = ['d1', 'd2', 'd3', 'd4'] as const;

export const segmentData: Record<string, readonly SegmentOption[]> = {
  goal: [
    { value: 'leads', title: 'home.configurator.options.goal.leads' },
    { value: 'calls', title: 'home.configurator.options.goal.calls' },
    { value: 'booking', title: 'home.configurator.options.goal.booking' },
    { value: 'other', title: 'home.configurator.options.common.other' },
  ],
  integrations: [
    { value: 'booking', title: 'home.configurator.options.integrations.booking' },
    { value: 'crm', title: 'home.configurator.options.integrations.crm' },
    { value: 'chat', title: 'home.configurator.options.integrations.chat' },
    { value: 'payments', title: 'home.configurator.options.integrations.payments' },
    { value: 'other', title: 'home.configurator.options.common.other' },
  ],
  ads: [
    { value: 'none', title: 'home.configurator.options.ads.none' },
    { value: 'meta', title: 'home.configurator.options.ads.meta' },
    { value: 'google', title: 'home.configurator.options.ads.google' },
    { value: 'other', title: 'home.configurator.options.common.other' },
  ],
  term: [
    { value: 'up-to-7', title: 'home.configurator.options.term.up_to_7' },
    { value: '7-14', title: 'home.configurator.options.term.from_7_to_14' },
    { value: '14-21', title: 'home.configurator.options.term.from_14_to_21' },
    { value: '21-30', title: 'home.configurator.options.term.from_21_to_30' },
    { value: 'other', title: 'home.configurator.options.common.other' },
  ],
  content: [
    { value: 'has', title: 'home.configurator.options.content.has' },
    { value: 'copy', title: 'home.configurator.options.content.copy' },
    { value: 'other', title: 'home.configurator.options.common.other' },
  ],
  languages: [
    { value: 'basic', title: 'home.configurator.options.languages.basic' },
    { value: 'multi', title: 'home.configurator.options.languages.multi' },
    { value: 'other', title: 'home.configurator.options.common.other' },
  ],
  hosting: [
    { value: 'shared', title: 'home.configurator.options.hosting.shared' },
    { value: 'vps', title: 'home.configurator.options.hosting.vps' },
    { value: 'managed', title: 'home.configurator.options.hosting.managed' },
    { value: 'other', title: 'home.configurator.options.common.other' },
  ],
  domain: [
    { value: 'new-domain', title: 'home.configurator.options.domain.new_domain' },
    { value: 'existing-domain', title: 'home.configurator.options.domain.existing_domain' },
    { value: 'transfer', title: 'home.configurator.options.domain.transfer' },
    { value: 'other', title: 'home.configurator.options.common.other' },
  ],
  pages: [
    { value: 'one', title: 'home.configurator.options.pages.one' },
    { value: 'up-to-3', title: 'home.configurator.options.pages.up_to_3' },
    { value: 'five-plus', title: 'home.configurator.options.pages.five_plus' },
    { value: 'other', title: 'home.configurator.options.common.other' },
  ],
  seo: [
    { value: 'base', title: 'home.configurator.options.seo.base' },
    { value: 'extended', title: 'home.configurator.options.seo.extended' },
    { value: 'other', title: 'home.configurator.options.common.other' },
  ],
};
