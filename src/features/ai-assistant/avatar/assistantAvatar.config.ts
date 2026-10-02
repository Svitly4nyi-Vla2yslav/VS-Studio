import type { AssistantVisualState } from './assistantAvatar.types';

export const ASSISTANT_GREETING_KEY = 'vs-assistant-avatar-greeted';

export const avatarStateLabel: Record<AssistantVisualState, string> = {
  idle: 'VS assistant is ready',
  curious: 'VS assistant is paying attention',
  greeting: 'VS assistant welcomes you',
  reading: 'VS assistant is reading',
  thinking: 'VS assistant is thinking',
  typing: 'VS assistant is preparing an answer',
  answering: 'VS assistant has answered',
  success: 'VS assistant confirms success',
  celebrating: 'VS assistant is celebrating',
  error: 'VS assistant needs another try',
  sleeping: 'VS assistant is resting',
};
