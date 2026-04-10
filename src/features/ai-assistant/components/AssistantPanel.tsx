import { AnimatePresence, motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import { ASSISTANT_QUICK_REPLIES } from '../constants';
import type { useAssistant } from '../hooks/useAssistant';
import { AssistantComposer } from './AssistantComposer';
import { AssistantMessageList } from './AssistantMessageList';
import { AssistantOrb } from './AssistantOrb';
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
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.66), rgba(248, 250, 255, 0.42) 38%, rgba(255, 243, 214, 0.38) 68%, rgba(212, 231, 255, 0.34) 100%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.86),
    0 36px 90px rgba(54, 83, 131, 0.28),
    0 0 56px rgba(255, 209, 128, 0.14);
  backdrop-filter: blur(24px) saturate(145%);
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
      radial-gradient(circle at 18% 18%, rgba(255, 255, 255, 0.94), transparent 20%),
      radial-gradient(circle at 68% 18%, rgba(255, 215, 136, 0.84), transparent 28%),
      radial-gradient(circle at 78% 74%, rgba(170, 214, 255, 0.82), transparent 30%),
      radial-gradient(circle at 26% 82%, rgba(255, 240, 201, 0.68), transparent 24%);
    filter: blur(18px);
    animation: ${auroraFlow} 12s ease-in-out infinite;
  }

  &::after {
    inset: 1px;
    border-radius: 31px;
    border: 1px solid rgba(255, 255, 255, 0.58);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.42);
  }

  @media (max-width: 767px) {
    inset: ${({ $embedded }) => ($embedded ? 'auto' : 'auto 12px 12px 12px')};
    width: auto;
    min-height: ${({ $embedded }) => ($embedded ? '700px' : '88vh')};
    max-height: ${({ $embedded }) => ($embedded ? 'none' : '88vh')};
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
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(252, 246, 228, 0.66) 50%, rgba(220, 236, 255, 0.62) 100%);
  border: 1px solid rgba(255, 255, 255, 0.84);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.88),
    0 26px 50px rgba(87, 119, 173, 0.16);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: -40% -16%;
    background: linear-gradient(115deg, rgba(255, 255, 255, 0) 18%, rgba(255, 225, 164, 0.32) 42%, rgba(166, 211, 255, 0.28) 66%, rgba(255, 255, 255, 0) 84%);
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
  background-image: linear-gradient(135deg, #17305d 0%, #d49429 42%, #6aaeea 100%);
  background-size: 220% 220%;
  background-clip: text;
  -webkit-background-clip: text;
  animation: ${shimmer} 8s ease-in-out infinite;
`;

const Subtitle = styled.p`
  margin: 0;
  position: relative;
  z-index: 1;
  color: rgba(18, 33, 63, 0.72);
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
  color: rgba(23, 48, 93, 0.72);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
`;

const Note = styled.div`
  padding: 14px 16px;
  border-radius: 18px;
  background:
    linear-gradient(145deg, rgba(255, 247, 230, 0.88), rgba(255, 236, 205, 0.76));
  border: 1px solid rgba(237, 189, 104, 0.34);
  color: rgba(118, 64, 18, 0.92);
  font-size: 12px;
  line-height: 1.6;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.78),
    0 16px 30px rgba(214, 174, 103, 0.14);

  strong {
    display: inline-block;
    margin-bottom: 2px;
    color: #8a4c12;
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
  border: 1px solid rgba(255, 255, 255, 0.82);
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.74), rgba(230, 240, 255, 0.6));
  color: rgba(18, 33, 63, 0.76);
  font-size: 22px;
  line-height: 1;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.88),
    0 14px 26px rgba(95, 128, 182, 0.14);
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    color 180ms ease;

  &:hover,
  &:focus-visible {
    transform: translateY(-1px);
    color: #17305d;
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
}

export const AssistantPanel: React.FC<AssistantPanelProps> = ({ assistant, open = true, embedded = false, onClose }) => {
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
      initial={embedded ? false : { opacity: 0, y: 14, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 12, scale: 0.98 }}
      transition={{ duration: 0.24, ease: 'easeOut' }}
    >
      <Header>
        <Headline>
          <BrandBadge>
            <TitleRow>
              <AssistantOrb size={24} />
              <Title>{copy.title}</Title>
            </TitleRow>
            <Subtitle>{copy.subtitle}</Subtitle>
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

        {!activeForm ? <AssistantComposer copy={copy} disabled={isTyping} onSend={sendMessage} /> : null}
      </Footer>
    </Shell>
  );

  if (embedded) {
    return panel;
  }

  return <AnimatePresence>{open ? panel : null}</AnimatePresence>;
};
