import styled from 'styled-components';
import type { AssistantLanguage } from '../types';

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(9, 8, 11, .76);
  border: 1px solid var(--obsidian-border);
  color: var(--muted-gold-text);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  box-shadow:
    inset 0 1px 0 rgba(255, 242, 189, .06),
    0 14px 30px rgba(0, 0, 0, .22);

  strong {
    color: var(--gold-300);
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
