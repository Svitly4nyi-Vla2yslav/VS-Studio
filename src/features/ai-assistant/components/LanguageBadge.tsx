import styled from 'styled-components';
import type { AssistantLanguage } from '../types';

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.09);
  color: rgba(255, 255, 255, 0.74);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  strong {
    color: #ffd59d;
    font-weight: 700;
  }
`;

const languageLabel: Record<AssistantLanguage, string> = {
  de: 'DE',
  en: 'EN',
  uk: 'UK',
};

interface LanguageBadgeProps {
  language: AssistantLanguage;
}

export const LanguageBadge: React.FC<LanguageBadgeProps> = ({ language }) => (
  <Badge>
    <strong>{languageLabel[language]}</strong>
    detected
  </Badge>
);
