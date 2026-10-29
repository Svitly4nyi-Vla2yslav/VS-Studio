import type { AssistantVisualState } from './assistantAvatar.types';

export type BotAvatarState = 'default' | 'working' | 'sleeping';

/**
 * Приймає деталізований AssistantVisualState і повертає спрощений BotAvatarState.
 * sleeping зберігається, активні фази слухання/відповіді об’єднуються у working,
 * а решта станів отримує безпечний default. Функція чиста й не змінює вхідне значення.
 */
export const mapAssistantState = (state: AssistantVisualState): BotAvatarState => {
  if (state === 'sleeping') return 'sleeping';
  if (state === 'thinking' || state === 'typing' || state === 'answering' || state === 'listening' || state === 'speaking') return 'working';
  return 'default';
};
