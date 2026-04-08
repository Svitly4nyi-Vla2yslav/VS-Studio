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
  padding: 12px 16px 12px 12px;
  border-radius: 999px;
  background:
    linear-gradient(135deg, rgba(16, 22, 36, 0.94), rgba(10, 14, 24, 0.98)),
    radial-gradient(circle at top left, rgba(255, 177, 74, 0.18), transparent 40%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 18px 44px rgba(2, 6, 16, 0.38);
  color: rgba(255, 255, 255, 0.92);
  font-size: 13px;
  font-weight: 700;

  strong {
    display: block;
    text-align: left;
    line-height: 1.25;
  }

  span {
    display: block;
    color: rgba(255, 255, 255, 0.58);
    font-size: 11px;
    font-weight: 500;
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
        animate={{ y: [0, -4, 0], boxShadow: ['0 18px 44px rgba(2, 6, 16, 0.38)', '0 22px 56px rgba(255, 177, 74, 0.2)', '0 18px 44px rgba(2, 6, 16, 0.38)'] }}
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
