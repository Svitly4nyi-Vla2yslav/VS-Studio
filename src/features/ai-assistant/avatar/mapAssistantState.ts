import type { AssistantVisualState } from './assistantAvatar.types';

export type BotAvatarState = 'default' | 'working' | 'sleeping';

// Приймає деталізований стан асистента й повертає один із трьох станів, зрозумілих аватару.
// Активні фази відповіді об’єднуються у working, sleeping зберігається, решта має безпечний default.
export const mapAssistantState = (state: AssistantVisualState): BotAvatarState => {
  if (state === 'sleeping') return 'sleeping';
  if (state === 'thinking' || state === 'typing' || state === 'answering') return 'working';
  return 'default';
};
