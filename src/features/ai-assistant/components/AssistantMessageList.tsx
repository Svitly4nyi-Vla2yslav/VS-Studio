import { useEffect, useRef, type ReactNode } from 'react';
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
    linear-gradient(155deg, rgba(255, 255, 255, 0.38), rgba(247, 250, 255, 0.24)),
    linear-gradient(120deg, rgba(255, 234, 192, 0.16), rgba(195, 226, 255, 0.16));
  border: 1px solid rgba(255, 255, 255, 0.72);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.78),
    0 20px 44px rgba(93, 125, 181, 0.12);
  backdrop-filter: blur(16px);
`;

const Row = styled.div<{ $role: AssistantMessage['role'] }>`
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
        ? 'linear-gradient(135deg, rgba(86, 132, 229, 0.94), rgba(135, 193, 255, 0.9))'
        : 'linear-gradient(145deg, rgba(255, 255, 255, 0.86), rgba(247, 245, 236, 0.72) 52%, rgba(222, 238, 255, 0.7) 100%)'};
  border: 1px solid
    ${({ $role }) => ($role === 'user' ? 'rgba(118, 166, 255, 0.7)' : 'rgba(255, 255, 255, 0.82)')};
  color: ${({ $role }) => ($role === 'user' ? '#f7fbff' : '#12213f')};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.62;
  white-space: pre-wrap;
  box-shadow:
    inset 0 1px 0 ${({ $role }) => ($role === 'user' ? 'rgba(255, 255, 255, 0.18)' : 'rgba(255, 255, 255, 0.8)')},
    0 16px 30px ${({ $role }) => ($role === 'user' ? 'rgba(88, 132, 213, 0.22)' : 'rgba(104, 136, 181, 0.12)')};
`;

const Meta = styled.span<{ $role: AssistantMessage['role'] }>`
  display: block;
  margin-top: 9px;
  color: ${({ $role }) => ($role === 'user' ? 'rgba(247, 251, 255, 0.74)' : 'rgba(18, 33, 63, 0.46)')};
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
    <List>
      {messages.map(message => (
        <Row key={message.id} $role={message.role}>
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
