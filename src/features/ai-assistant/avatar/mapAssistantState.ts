import type { AssistantVisualState } from './assistantAvatar.types';

export type BotAvatarState = 'default' | 'working' | 'sleeping';

export const mapAssistantState = (state: AssistantVisualState): BotAvatarState => {
  if (state === 'sleeping') return 'sleeping';
  if (state === 'thinking' || state === 'typing' || state === 'answering') return 'working';
  return 'default';
};
