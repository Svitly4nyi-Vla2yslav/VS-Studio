import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import { ASSISTANT_QUICK_REPLIES } from '../constants';
import type { useAssistant } from '../hooks/useAssistant';
import { AssistantComposer } from './AssistantComposer';
import { AssistantMessageList } from './AssistantMessageList';
import { AssistantOrb } from './AssistantOrb';
import { AssistantQuickReplies } from './AssistantQuickReplies';
import { BookingRequestForm } from './BookingRequestForm';
import { LanguageBadge } from './LanguageBadge';
import { LeadCaptureForm } from './LeadCaptureForm';

const Backdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(5, 8, 16, 0.62);
  backdrop-filter: blur(10px);
  z-index: 160;
`;

const Shell = styled(motion.aside)<{ $embedded: boolean }>`
  position: ${({ $embedded }) => ($embedded ? 'relative' : 'fixed')};
  right: ${({ $embedded }) => ($embedded ? 'auto' : '24px')};
  bottom: ${({ $embedded }) => ($embedded ? 'auto' : '24px')};
  top: ${({ $embedded }) => ($embedded ? 'auto' : '72px')};
  width: ${({ $embedded }) => ($embedded ? '100%' : 'min(520px, calc(100vw - 32px))')};
  max-width: 100%;
  min-height: ${({ $embedded }) => ($embedded ? '720px' : 'min(840px, calc(100vh - 96px))')};
  max-height: ${({ $embedded }) => ($embedded ? 'none' : 'calc(100vh - 96px)')};
  display: grid;
  grid-template-rows: auto auto minmax(0, 1fr) auto;
  gap: 16px;
  padding: 20px;
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background:
    radial-gradient(circle at top right, rgba(255, 177, 74, 0.16), transparent 28%),
    radial-gradient(circle at 0% 0%, rgba(78, 118, 255, 0.14), transparent 30%),
    linear-gradient(180deg, rgba(10, 14, 25, 0.98), rgba(8, 12, 20, 0.98));
  box-shadow:
    0 28px 80px rgba(2, 6, 16, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
  z-index: 170;
  overflow: hidden;

  @media (max-width: 767px) {
    inset: ${({ $embedded }) => ($embedded ? 'auto' : 'auto 12px 12px 12px')};
    width: auto;
    min-height: ${({ $embedded }) => ($embedded ? '680px' : '84vh')};
    max-height: ${({ $embedded }) => ($embedded ? 'none' : '84vh')};
    padding: 16px;
    border-radius: 24px;
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
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 22px;
  line-height: 1.05;
`;

const Subtitle = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.68);
  font-size: 13px;
  line-height: 1.5;
`;

const TopLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const SectionTitle = styled.span`
  color: rgba(255, 214, 156, 0.86);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const Note = styled.div`
  padding: 12px 14px;
  border-radius: 16px;
  background: rgba(255, 189, 112, 0.1);
  border: 1px solid rgba(255, 189, 112, 0.18);
  color: rgba(255, 242, 221, 0.92);
  font-size: 12px;
  line-height: 1.55;
`;

const Content = styled.div`
  min-height: 0;
  overflow: hidden;
`;

const Footer = styled.div`
  display: grid;
  gap: 14px;
`;

const CloseButton = styled.button`
  width: 38px;
  height: 38px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.74);
  font-size: 18px;
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

  useEffect(() => {
    if (embedded) return undefined;

    if (open) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [embedded, open]);

  const panel = (
    <Shell
      $embedded={embedded}
      initial={embedded ? false : { opacity: 0, y: 14, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 12, scale: 0.98 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
    >
      <Header>
        <Headline>
          <TitleRow>
            <AssistantOrb size={22} />
            <Title>{copy.title}</Title>
          </TitleRow>
          <Subtitle>{copy.subtitle}</Subtitle>
        </Headline>
        {!embedded ? <CloseButton type='button' onClick={onClose} aria-label='Close assistant'>×</CloseButton> : null}
      </Header>

      <TopLine>
        <SectionTitle>{copy.quickRepliesTitle}</SectionTitle>
        <LanguageBadge language={assistantLanguage} />
      </TopLine>

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

      <Footer>
        <AssistantQuickReplies items={ASSISTANT_QUICK_REPLIES[assistantLanguage]} onSelect={handleQuickReply} />

        {activeForm === 'lead' ? <LeadCaptureForm copy={copy} onSubmit={submitLead} /> : null}
        {activeForm === 'booking' ? <BookingRequestForm copy={copy} onSubmit={submitBooking} /> : null}

        {errorMessage ? <Note>{errorMessage}</Note> : null}

        {activeForm ? (
          <CloseButton type='button' onClick={() => setActiveForm(null)} aria-label='Close form'>
            ×
          </CloseButton>
        ) : null}

        {!activeForm ? <AssistantComposer copy={copy} disabled={isTyping} onSend={sendMessage} /> : null}
      </Footer>
    </Shell>
  );

  if (embedded) {
    return panel;
  }

  return (
    <AnimatePresence>
      {open ? (
        <>
          <Backdrop initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} />
          {panel}
        </>
      ) : null}
    </AnimatePresence>
  );
};
