import { AnimatePresence, motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import { ASSISTANT_QUICK_REPLIES } from '../constants';
import { AssistantAvatar } from '../avatar/AssistantAvatar';
import type { AssistantVisualState } from '../avatar/assistantAvatar.types';
import type { PointerProximity } from '../avatar/assistantAvatar.types';
import type { Ref } from 'react';
import type { useAssistant } from '../hooks/useAssistant';
import { AssistantComposer } from './AssistantComposer';
import { AssistantMessageList } from './AssistantMessageList';
import { AssistantQuickReplies } from './AssistantQuickReplies';
import { BookingRequestForm } from './BookingRequestForm';
import { LanguageBadge } from './LanguageBadge';
import { LeadCaptureForm } from './LeadCaptureForm';

const auroraFlow = keyframes`
  0% {
    transform: translate3d(-8%, -6%, 0) scale(1);
    opacity: 0.72;
  }

  50% {
    transform: translate3d(8%, 6%, 0) scale(1.08);
    opacity: 1;
  }

  100% {
    transform: translate3d(-8%, -6%, 0) scale(1);
    opacity: 0.72;
  }
`;

const shimmer = keyframes`
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
`;

const Shell = styled(motion.aside)<{ $embedded: boolean }>`
  position: ${({ $embedded }) => ($embedded ? 'relative' : 'fixed')};
  right: ${({ $embedded }) => ($embedded ? 'auto' : '24px')};
  bottom: ${({ $embedded }) => ($embedded ? 'auto' : '24px')};
  top: ${({ $embedded }) => ($embedded ? 'auto' : '48px')};
  width: ${({ $embedded }) => ($embedded ? '100%' : 'min(620px, calc(100vw - 32px))')};
  max-width: 100%;
  min-height: ${({ $embedded }) => ($embedded ? '760px' : 'min(900px, calc(100vh - 72px))')};
  max-height: ${({ $embedded }) => ($embedded ? 'none' : 'calc(100vh - 72px)')};
  display: grid;
  grid-template-rows: auto auto minmax(0, 1fr) auto;
  gap: 18px;
  padding: 22px;
  border-radius: 30px 30px 24px 34px;
  border: 1px solid var(--obsidian-border);
  background:
    radial-gradient(circle at 76% 4%, rgba(241, 210, 119, 0.12), transparent 28%),
    radial-gradient(ellipse at 0% 100%, rgba(91, 53, 29, 0.15), transparent 42%),
    linear-gradient(145deg, rgba(25, 22, 28, 0.97), rgba(8, 7, 10, 0.96) 48%, rgba(3, 3, 4, 0.98));
  box-shadow:
    inset 0 1px 0 rgba(255, 242, 189, 0.1),
    inset 0 -1px 0 rgba(69, 50, 80, 0.24),
    var(--obsidian-shadow-lg),
    var(--gold-glow-sm);
  backdrop-filter: blur(20px) saturate(118%);
  isolation: isolate;
  z-index: 170;
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: -18%;
    pointer-events: none;
    z-index: -1;
  }

  &::before {
    background:
      radial-gradient(circle at 68% 18%, rgba(214, 165, 66, 0.15), transparent 25%),
      radial-gradient(circle at 78% 74%, rgba(82, 61, 96, 0.12), transparent 30%),
      linear-gradient(118deg, transparent 0 47%, rgba(241, 210, 119, 0.03) 48%, transparent 51%);
    filter: blur(12px);
    animation: ${auroraFlow} 20s ease-in-out infinite;
  }

  &::after {
    inset: 1px;
    border-radius: 31px;
    border: 1px solid rgba(255, 242, 189, 0.08);
    background: linear-gradient(118deg, transparent 28%, rgba(255, 242, 189, 0.035) 47%, transparent 55%);
    box-shadow: inset 0 0 32px rgba(0, 0, 0, .42);
  }

  @media (max-width: 767px) {
    inset: ${({ $embedded }) => ($embedded ? 'auto' : 'auto 12px 12px 12px')};
    width: auto;
    min-height: ${({ $embedded }) => ($embedded ? '700px' : 'min(88vh, 760px)')};
    min-height: ${({ $embedded }) => ($embedded ? '700px' : 'min(88dvh, 760px)')};
    max-height: ${({ $embedded }) => ($embedded ? 'none' : '88vh')};
    max-height: ${({ $embedded }) => ($embedded ? 'none' : '88dvh')};
    padding: 16px;
    border-radius: 28px;

    &::after {
      border-radius: 27px;
    }
  }
`;

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
`;

const Headline = styled.div`
  display: grid;
  gap: 6px;
  min-width: 0;
`;

const BrandBadge = styled.div`
  position: relative;
  display: inline-grid;
  gap: 6px;
  padding: 16px 18px;
  border-radius: 24px;
  background: linear-gradient(145deg, rgba(24, 21, 27, .92), rgba(7, 7, 9, .84));
  border: 1px solid var(--obsidian-border);
  box-shadow:
    inset 0 1px 0 rgba(255, 242, 189, .08),
    0 26px 50px rgba(0, 0, 0, .26);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: -40% -16%;
    background: linear-gradient(115deg, transparent 18%, rgba(255, 225, 164, 0.09) 46%, transparent 64%);
    background-size: 220% 220%;
    animation: ${shimmer} 9s ease-in-out infinite;
    pointer-events: none;
  }
`;

const TitleRow = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 1;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 26px;
  line-height: 1.02;
  letter-spacing: -0.04em;
  color: transparent;
  background-image: var(--gold-metal);
  background-size: 220% 220%;
  background-clip: text;
  -webkit-background-clip: text;
  animation: ${shimmer} 8s ease-in-out infinite;
`;

const Subtitle = styled.p`
  margin: 0;
  position: relative;
  z-index: 1;
  color: var(--muted-gold-text);
  font-size: 13px;
  font-weight: 600;
  line-height: 1.55;
`;

const TopLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

const SectionTitle = styled.span`
  color: var(--gold-400);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
`;

const Note = styled.div`
  padding: 14px 16px;
  border-radius: 18px;
  background: linear-gradient(145deg, rgba(58, 38, 20, .72), rgba(17, 13, 12, .9));
  border: 1px solid rgba(209, 122, 95, .34);
  color: var(--champagne-text);
  font-size: 12px;
  line-height: 1.6;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.78),
    0 16px 30px rgba(214, 174, 103, 0.14);

  strong {
    display: inline-block;
    margin-bottom: 2px;
    color: var(--gold-300);
  }
`;

const Content = styled.div`
  min-height: 0;
  display: block;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
  gap: 14px;
  overflow-y: auto;
  padding-right: 6px;
  scrollbar-width: thin;
  scrollbar-color: rgba(222, 178, 91, 0.55) transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 999px;
    background: rgba(222, 178, 91, 0.55);
  }
`;

const Footer = styled.div<{ $scrollable: boolean }>`
  display: grid;
  gap: 14px;
  min-height: 0;
  max-height: ${({ $scrollable }) => ($scrollable ? 'min(44vh, 420px)' : 'none')};
  overflow-y: ${({ $scrollable }) => ($scrollable ? 'auto' : 'visible')};
  padding-right: ${({ $scrollable }) => ($scrollable ? '4px' : '0')};
  scrollbar-width: thin;
  scrollbar-color: rgba(222, 178, 91, 0.55) transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 999px;
    background: rgba(222, 178, 91, 0.55);
  }
`;

const CloseButton = styled.button`
  width: 42px;
  height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  border: 1px solid var(--obsidian-border);
  background: linear-gradient(145deg, rgba(24, 21, 27, .94), rgba(7, 7, 9, .94));
  color: var(--gold-300);
  font-size: 22px;
  line-height: 1;
  box-shadow:
    inset 0 1px 0 rgba(255, 242, 189, .08),
    0 14px 26px rgba(0, 0, 0, .28);
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    color 180ms ease;

  &:hover,
  &:focus-visible {
    transform: translateY(-1px);
    color: var(--gold-highlight);
    box-shadow:
      0 18px 30px rgba(255, 204, 112, 0.18),
      0 0 0 4px rgba(169, 209, 255, 0.16);
  }
`;

interface AssistantPanelProps {
  assistant: ReturnType<typeof useAssistant>;
  open?: boolean;
  embedded?: boolean;
  onClose?: () => void;
  visualState?: AssistantVisualState;
  onComposerFocusChange?: (focused: boolean) => void;
  onComposerValuePresenceChange?: (hasValue: boolean) => void;
  pointer?: PointerProximity;
  avatarTrackingRef?: Ref<HTMLDivElement>;
}

export const AssistantPanel: React.FC<AssistantPanelProps> = ({
  assistant,
  open = true,
  embedded = false,
  onClose,
  visualState = 'idle',
  onComposerFocusChange,
  onComposerValuePresenceChange,
  pointer,
  avatarTrackingRef,
}) => {
  const {
    messages,
    isTyping,
    degradedMode,
    errorMessage,
    activeForm,
    assistantLanguage,
    copy,
    handleQuickReply,
    sendMessage,
    submitLead,
    submitBooking,
    setActiveForm,
  } = assistant;

  const panel = (
    <Shell
      $embedded={embedded}
      aria-label={copy.title}
      initial={embedded ? false : { opacity: 0, y: 14, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 12, scale: 0.98 }}
      transition={{ duration: 0.24, ease: 'easeOut' }}
    >
      <Header>
        <Headline>
          <BrandBadge>
            <TitleRow>
               <AssistantAvatar
                 state={visualState}
                 size={64}
                 pointer={pointer}
                 trackingRef={avatarTrackingRef}
                 decorative
               />
              <Title>Emma AI</Title>
            </TitleRow>
            <Subtitle>Ihre digitale Assistentin</Subtitle>
          </BrandBadge>
        </Headline>
        {!embedded ? (
          <CloseButton type='button' onClick={onClose} aria-label='Close assistant'>
            &times;
          </CloseButton>
        ) : null}
      </Header>

      <TopLine>
        <SectionTitle>{copy.quickRepliesTitle}</SectionTitle>
        <LanguageBadge language={assistantLanguage} />
      </TopLine>

      <Body>
        {degradedMode ? (
          <Note>
            <strong>{copy.fallbackNotice}</strong>
            <br />
            {copy.fallbackLine}
          </Note>
        ) : null}

        <Content>
          <AssistantMessageList messages={messages} isTyping={isTyping} copy={copy} />
        </Content>
      </Body>

      <Footer $scrollable={Boolean(activeForm)}>
        <AssistantQuickReplies items={ASSISTANT_QUICK_REPLIES[assistantLanguage]} onSelect={handleQuickReply} />

        {activeForm === 'lead' ? <LeadCaptureForm copy={copy} onSubmit={submitLead} /> : null}
        {activeForm === 'booking' ? <BookingRequestForm copy={copy} onSubmit={submitBooking} /> : null}

        {errorMessage ? <Note>{errorMessage}</Note> : null}

        {activeForm ? (
          <CloseButton type='button' onClick={() => setActiveForm(null)} aria-label='Close form'>
            &times;
          </CloseButton>
        ) : null}

        {!activeForm ? (
          <AssistantComposer
            copy={copy}
            disabled={isTyping}
            onSend={sendMessage}
            onFocusChange={onComposerFocusChange}
            onValuePresenceChange={onComposerValuePresenceChange}
          />
        ) : null}
      </Footer>
    </Shell>
  );

  if (embedded) {
    return panel;
  }

  return <AnimatePresence>{open ? panel : null}</AnimatePresence>;
};
