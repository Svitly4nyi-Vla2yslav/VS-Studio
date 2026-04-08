import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { TypingIndicator } from './TypingIndicator';
import type { AssistantMessage, AssistantPanelCopy } from '../types';

const List = styled.div`
  display: grid;
  gap: 12px;
  height: 100%;
  max-height: 100%;
  overflow-y: auto;
  padding-right: 2px;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

const Row = styled.div<{ $role: AssistantMessage['role'] }>`
  display: flex;
  justify-content: ${({ $role }) => ($role === 'user' ? 'flex-end' : 'flex-start')};
`;

const Bubble = styled.div<{ $role: AssistantMessage['role'] }>`
  max-width: min(88%, 38ch);
  padding: 13px 14px;
  border-radius: ${({ $role }) => ($role === 'user' ? '18px 18px 6px 18px' : '18px 18px 18px 6px')};
  background:
    ${({ $role }) =>
      $role === 'user'
        ? 'linear-gradient(135deg, rgba(64, 98, 170, 0.82), rgba(38, 63, 116, 0.92))'
        : 'linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.04))'};
  border: 1px solid ${({ $role }) => ($role === 'user' ? 'rgba(112, 151, 255, 0.18)' : 'rgba(255, 255, 255, 0.08)')};
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
  line-height: 1.55;
  white-space: pre-wrap;
`;

const Meta = styled.span`
  display: block;
  margin-top: 8px;
  color: rgba(255, 255, 255, 0.48);
  font-size: 11px;
`;

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
            {message.content}
            {message.confidence !== undefined ? <Meta>Confidence {Math.round(message.confidence * 100)}%</Meta> : null}
          </Bubble>
        </Row>
      ))}
      {isTyping ? <TypingIndicator copy={copy} /> : null}
      <div ref={endRef} />
    </List>
  );
};
