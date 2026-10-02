import { useEffect, useRef, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { TypingIndicator } from './TypingIndicator';
import type { AssistantMessage, AssistantPanelCopy } from '../types';

const List = styled.div`
  display: grid;
  gap: 14px;
  min-height: min-content;
  padding: 18px;
  border-radius: 28px;
  background:
    radial-gradient(circle at 92% 0%, rgba(214, 165, 66, 0.08), transparent 34%),
    linear-gradient(155deg, rgba(13, 12, 15, 0.82), rgba(3, 3, 4, 0.76));
  border: 1px solid var(--obsidian-border);
  box-shadow:
    inset 0 1px 0 rgba(255, 242, 189, 0.07),
    0 20px 44px rgba(0, 0, 0, 0.26);
  backdrop-filter: blur(12px);
`;

const Row = styled(motion.div)<{ $role: AssistantMessage['role'] }>`
  display: flex;
  justify-content: ${({ $role }) => ($role === 'user' ? 'flex-end' : 'flex-start')};
`;

const Bubble = styled.div<{ $role: AssistantMessage['role'] }>`
  max-width: min(88%, 40ch);
  padding: 15px 16px;
  border-radius: ${({ $role }) => ($role === 'user' ? '24px 24px 10px 24px' : '24px 24px 24px 10px')};
  background:
    ${({ $role }) =>
      $role === 'user'
        ? 'linear-gradient(135deg, rgba(91, 60, 19, 0.94), rgba(35, 27, 20, 0.96))'
        : 'radial-gradient(circle at 88% 0%, rgba(214, 165, 66, .12), transparent 36%), linear-gradient(145deg, rgba(22, 20, 25, .96), rgba(7, 7, 9, .94))'};
  border: 1px solid
    ${({ $role }) => ($role === 'user' ? 'rgba(231, 195, 100, .48)' : 'rgba(214, 165, 66, .28)')};
  color: var(--champagne-text);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.62;
  white-space: pre-wrap;
  box-shadow:
    inset 0 1px 0 rgba(255, 242, 189, 0.07),
    0 16px 30px rgba(0, 0, 0, 0.24);
`;

const Meta = styled.span<{ $role: AssistantMessage['role'] }>`
  display: block;
  margin-top: 9px;
  color: ${({ $role }) => ($role === 'user' ? 'rgba(255, 239, 199, 0.7)' : 'rgba(188, 174, 145, 0.68)')};
  font-size: 11px;
  font-weight: 700;
`;

const ImportantText = styled.strong`
  font-weight: 800;
`;

const renderMessageContent = (content: string): ReactNode => {
  const parts: ReactNode[] = [];
  const strongPattern = /\*\*([^*]+?)\*\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = strongPattern.exec(content)) !== null) {
    if (match.index > lastIndex) {
      parts.push(content.slice(lastIndex, match.index));
    }

    parts.push(<ImportantText key={`strong-${match.index}`}>{match[1]}</ImportantText>);
    lastIndex = strongPattern.lastIndex;
  }

  if (lastIndex < content.length) {
    parts.push(content.slice(lastIndex));
  }

  return parts.length > 0 ? parts : content;
};

interface AssistantMessageListProps {
  messages: AssistantMessage[];
  isTyping: boolean;
  copy: AssistantPanelCopy;
}

export const AssistantMessageList: React.FC<AssistantMessageListProps> = ({ messages, isTyping, copy }) => {
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, isTyping]);

  return (
    <List role='log' aria-live='polite' aria-relevant='additions text'>
      {messages.map(message => (
        <Row
          key={message.id}
          $role={message.role}
          initial={{ opacity: 0, y: 7, filter: 'blur(3px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
        >
          <Bubble $role={message.role}>
            {renderMessageContent(message.content)}
            {message.confidence !== undefined ? <Meta $role={message.role}>Confidence {Math.round(message.confidence * 100)}%</Meta> : null}
          </Bubble>
        </Row>
      ))}
      {isTyping ? <TypingIndicator copy={copy} /> : null}
      <div ref={endRef} />
    </List>
  );
};
