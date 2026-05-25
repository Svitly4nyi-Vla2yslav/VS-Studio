export type AssistantLanguage = 'de' | 'en' | 'uk';

export type AssistantIntent =
  | 'service_info'
  | 'pricing'
  | 'timeline'
  | 'niche_fit'
  | 'lead_capture'
  | 'booking'
  | 'handoff'
  | 'unknown';

export type AssistantRole = 'assistant' | 'user' | 'system';

export type AssistantServiceId =
  | 'website'
  | 'redesign'
  | 'ads'
  | 'ai-chatbot'
  | 'tracking'
  | 'support';

export type AssistantEventName =
  | 'assistant_opened'
  | 'assistant_message_sent'
  | 'assistant_quick_reply_clicked'
  | 'assistant_lead_started'
  | 'assistant_lead_completed'
  | 'assistant_booking_started'
  | 'assistant_booking_completed'
  | 'assistant_handoff_requested';

export interface AssistantFeatureFlags {
  voiceMessages: boolean;
  demoAvatar: boolean;
}

export interface AssistantQuickReply {
  id: string;
  label: string;
  value: string;
  intent?: AssistantIntent;
  action?: 'message' | 'lead' | 'booking' | 'handoff';
}

export interface AssistantMessage {
  id: string;
  role: AssistantRole;
  content: string;
  createdAt: string;
  language: AssistantLanguage;
  intent?: AssistantIntent;
  confidence?: number;
  meta?: {
    showLeadPrompt?: boolean;
    showBookingPrompt?: boolean;
    fallback?: boolean;
    humanHandoff?: boolean;
  };
}

export interface AssistantService {
  id: AssistantServiceId;
  title: string;
  shortDescription: string;
  businessValue: string;
  pricingFrom: string;
  pricingNumericFrom: number;
  pricingModel: 'one_time' | 'monthly';
  estimateRange?: {
    from: number;
    to: number;
  };
  timeline: string;
  estimateHint: string;
  keywords: string[];
}

export interface AssistantFaqEntry {
  id: string;
  question: string;
  answer: string;
  keywords: string[];
  intent?: AssistantIntent;
}

export interface AssistantNicheExample {
  id: string;
  title: string;
  summary: string;
  businessValue: string;
  examples: string[];
  recommendedServices: AssistantServiceId[];
  keywords: string[];
}

export interface AssistantKnowledgeBundle {
  services: AssistantService[];
  faq: AssistantFaqEntry[];
  niches: AssistantNicheExample[];
}

export interface AssistantLeadPayload {
  name: string;
  email?: string;
  phone?: string;
  businessType: string;
  requestedService: string;
  need: string;
  language: AssistantLanguage;
  source: 'assistant';
}

export interface AssistantBookingPayload {
  name: string;
  email?: string;
  phone?: string;
  businessType: string;
  requestedService: string;
  preferredDate: string;
  preferredTime: string;
  timezone: string;
  notes?: string;
  language: AssistantLanguage;
  source: 'assistant';
}

export interface AssistantBookingContext {
  name?: string;
  email?: string;
  phone?: string;
  businessType?: string;
  requestedService?: string;
  preferredDate?: string;
  preferredTime?: string;
  timezone?: string;
  notes?: string;
}

export interface AssistantChatRequest {
  messages: AssistantMessage[];
  language?: AssistantLanguage;
  leadContext?: Partial<AssistantLeadPayload>;
  bookingContext?: AssistantBookingContext;
}

export interface AssistantChatResponse {
  answer: string;
  detectedLanguage: AssistantLanguage;
  detectedIntent: AssistantIntent;
  confidence: number;
  nextStep: 'none' | 'lead' | 'booking' | 'handoff';
  leadPrompt?: string;
  bookingPrompt?: string;
  fallbackMode?: boolean;
}

export interface AssistantLocalReplyContext {
  messages: AssistantMessage[];
  language: AssistantLanguage;
  leadContext?: Partial<AssistantLeadPayload>;
  bookingContext?: AssistantBookingContext;
}

export interface AssistantLocalReply extends AssistantChatResponse {
  matchedService?: AssistantService;
  matchedNiche?: AssistantNicheExample;
}

export interface AssistantPanelCopy {
  title: string;
  subtitle: string;
  onlineLabel: string;
  inputPlaceholder: string;
  sendLabel: string;
  quickRepliesTitle: string;
  fallbackNotice: string;
  fallbackLine: string;
  humanHandoffTitle: string;
  humanHandoffBody: string;
  humanHandoffCta: string;
  leadTitle: string;
  leadIntro: string;
  leadSubmit: string;
  leadSuccess: string;
  bookingTitle: string;
  bookingIntro: string;
  bookingSubmit: string;
  bookingSuccess: string;
  typingLabel: string;
  fields: {
    name: string;
    email: string;
    phone: string;
    businessType: string;
    requestedService: string;
    need: string;
    preferredDate: string;
    preferredTime: string;
    notes: string;
  };
  validation: {
    emailOrPhone: string;
    required: string;
  };
  suggestions: {
    estimate: string;
    handoff: string;
    booking: string;
  };
  greeting: string;
}
