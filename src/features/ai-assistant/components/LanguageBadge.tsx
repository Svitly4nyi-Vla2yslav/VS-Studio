import styled from 'styled-components';
import type { AssistantLanguage } from '../types';

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 999px;
  background:
    linear-gradient(120deg, rgba(255, 255, 255, 0.82), rgba(255, 239, 204, 0.68) 48%, rgba(211, 231, 255, 0.68) 100%);
  border: 1px solid rgba(255, 255, 255, 0.84);
  color: rgba(18, 33, 63, 0.62);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.86),
    0 14px 30px rgba(98, 131, 185, 0.1);

  strong {
    color: #17305d;
    font-weight: 800;
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
