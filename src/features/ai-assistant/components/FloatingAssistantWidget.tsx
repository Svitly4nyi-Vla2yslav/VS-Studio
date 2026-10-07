import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import styled from 'styled-components';
import { AssistantAvatar } from '../avatar/AssistantAvatar';
import { useAssistantVisualState } from '../avatar/useAssistantVisualState';
import { useAvatarPointer } from '../avatar/useAvatarPointer';
import { ASSISTANT_STORAGE_KEY } from '../constants';
import { useAssistant } from '../hooks/useAssistant';
import { AssistantPanel } from './AssistantPanel';

const Button = styled(motion.button)`
  position: fixed;
  right: 24px;
  bottom: calc(24px + var(--safe-area-inset-bottom));
  z-index: 150;
  width: 252px;
  min-height: 66px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 7px 18px 7px 8px;
  border-radius: 999px;
  border: 1px solid rgba(224, 177, 82, .34);
  background:
    radial-gradient(circle at 18% 0%, rgba(241, 210, 119, .13), transparent 34%),
    linear-gradient(142deg, rgba(25, 22, 28, .97), rgba(5, 5, 6, .96));
  box-shadow: inset 0 1px 0 rgba(255, 242, 189, .1), var(--obsidian-shadow-md), var(--gold-glow-sm);
  color: var(--champagne-text);
  backdrop-filter: blur(16px) saturate(118%);
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 1px;
    border-radius: inherit;
    pointer-events: none;
    background: linear-gradient(112deg, transparent 30%, rgba(255, 242, 189, .055) 48%, transparent 62%);
  }

  strong { display: block; color: var(--champagne-text); text-align: left; line-height: 1.2; font-size: 15px; }
  span { display: block; margin-top: 3px; color: var(--muted-gold-text); font-size: 11px; font-weight: 500; white-space: nowrap; }
  .emma-copy { min-width: 0; flex: 1; }
  .emma-arrow { color: var(--gold-300); font-size: 12px; transition: transform 220ms ease; }
  &:hover { border-color: rgba(240, 201, 107, .48); box-shadow: inset 0 1px 0 rgba(255, 242, 189, .14), var(--obsidian-shadow-md), 0 0 22px rgba(214, 165, 66, .13); }
  &:hover .emma-arrow { transform: translateX(3px); }

  @media (max-width: 767px) {
    right: 12px;
    bottom: calc(12px + var(--safe-area-inset-bottom));
    width: 68px;
    min-height: 68px;
    padding: 6px;
    border-radius: 999px;
    justify-content: center;
    .emma-copy, .emma-arrow { display: none; }
  }
`;

export const FloatingAssistantWidget: React.FC = () => {
  const assistant = useAssistant();
  const [composerFocused, setComposerFocused] = useState(false);
  const [composerHasValue, setComposerHasValue] = useState(false);
  const pointer = useAvatarPointer<HTMLDivElement>();
  const visualState = useAssistantVisualState({
    isOpen: assistant.isOpen,
    isThinking: assistant.isTyping,
    hasError: Boolean(assistant.errorMessage),
    messageCount: assistant.messages.length,
    pointerNear: pointer.isNear,
    composerFocused,
    composerHasValue,
    successRevision: assistant.successRevision,
  });

  const handleOpen = () => {
    assistant.openAssistant();
    if (typeof window !== 'undefined') window.sessionStorage.setItem(ASSISTANT_STORAGE_KEY, 'true');
  };

  return (
    <>
      <AnimatePresence>
        {!assistant.isOpen ? (
          <Button
            type='button'
            onClick={handleOpen}
            aria-label='Open AI assistant'
            initial={{ opacity: 0, scale: .92, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -2, 0] }}
            exit={{ opacity: 0, scale: .94, y: 6 }}
            transition={{
              opacity: { duration: .24 },
              scale: { duration: .24 },
              y: { duration: 5.8, repeat: Infinity, ease: 'easeInOut' },
            }}
            whileTap={{ scale: .96, rotate: 1.5 }}
          >
            <AssistantAvatar state={visualState} size={62} pointer={pointer} trackingRef={pointer.ref} decorative />
            <div className='emma-copy'>
              <strong>Emma AI</strong>
              <span>Fragen · Beratung · Termine</span>
            </div>
            <FaArrowRight className='emma-arrow' aria-hidden='true' />
          </Button>
        ) : null}
      </AnimatePresence>
      <AssistantPanel
        assistant={assistant}
        open={assistant.isOpen}
        onClose={assistant.closeAssistant}
        visualState={visualState}
        pointer={pointer}
        avatarTrackingRef={pointer.ref}
        onComposerFocusChange={setComposerFocused}
        onComposerValuePresenceChange={setComposerHasValue}
      />
    </>
  );
};
