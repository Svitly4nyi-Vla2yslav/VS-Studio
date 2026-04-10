import { motion } from 'framer-motion';
import styled from 'styled-components';
import { ASSISTANT_STORAGE_KEY } from '../constants';
import { useAssistant } from '../hooks/useAssistant';
import { AssistantOrb } from './AssistantOrb';
import { AssistantPanel } from './AssistantPanel';

const Button = styled(motion.button)`
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 150;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 13px 18px 13px 13px;
  border-radius: 999px;
  background:
    linear-gradient(120deg, rgba(255, 255, 255, 0.9), rgba(255, 239, 204, 0.82) 42%, rgba(211, 231, 255, 0.82) 100%);
  border: 1px solid rgba(255, 255, 255, 0.82);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.92),
    0 20px 44px rgba(93, 126, 182, 0.18),
    0 0 30px rgba(255, 210, 138, 0.16);
  color: #10203b;
  font-size: 13px;
  font-weight: 800;
  backdrop-filter: blur(18px);

  strong {
    display: block;
    text-align: left;
    line-height: 1.25;
  }

  span {
    display: block;
    color: rgba(16, 32, 59, 0.58);
    font-size: 11px;
    font-weight: 600;
  }

  @media (max-width: 767px) {
    right: 12px;
    bottom: 12px;
  }
`;

export const FloatingAssistantWidget: React.FC = () => {
  const assistant = useAssistant();

  const handleOpen = () => {
    assistant.openAssistant();
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem(ASSISTANT_STORAGE_KEY, 'true');
    }
  };

  return (
    <>
      <Button
        type='button'
        onClick={handleOpen}
        aria-label='Open AI assistant'
        animate={{
          y: [0, -4, 0],
          boxShadow: [
            'inset 0 1px 0 rgba(255, 255, 255, 0.92), 0 20px 44px rgba(93, 126, 182, 0.18), 0 0 30px rgba(255, 210, 138, 0.16)',
            'inset 0 1px 0 rgba(255, 255, 255, 0.92), 0 26px 54px rgba(96, 149, 229, 0.24), 0 0 42px rgba(255, 205, 112, 0.22)',
            'inset 0 1px 0 rgba(255, 255, 255, 0.92), 0 20px 44px rgba(93, 126, 182, 0.18), 0 0 30px rgba(255, 210, 138, 0.16)',
          ],
        }}
        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ y: -3, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <AssistantOrb size={22} />
        <div>
          <strong>AI Assistant</strong>
          <span>Fragen, Leads, Terminwunsch</span>
        </div>
      </Button>
      <AssistantPanel assistant={assistant} open={assistant.isOpen} onClose={assistant.closeAssistant} />
    </>
  );
};
