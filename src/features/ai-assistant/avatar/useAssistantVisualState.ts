import { useEffect, useRef, useState } from 'react';
import { ASSISTANT_GREETING_KEY } from './assistantAvatar.config';
import type { AssistantVisualState } from './assistantAvatar.types';

interface Options {
  isOpen: boolean;
  isThinking: boolean;
  hasError: boolean;
  messageCount: number;
  pointerNear: boolean;
  composerFocused: boolean;
  composerHasValue: boolean;
  successRevision: number;
}

/**
 * Перетворює стан панелі, повідомлень і вказівника на один візуальний стан аватара.
 * Повертає `AssistantVisualState`; короткі greeting/success/error/answering стани мають
 * часовий пріоритет, а таймери очищаються під час повторного ефекту або unmount.
 */
export const useAssistantVisualState = (options: Options) => {
  const [state, setState] = useState<AssistantVisualState>('idle');
  const previousMessages = useRef(options.messageCount);
  const previousOpen = useRef(options.isOpen);
  const expressiveUntil = useRef(0);

  // Один раз за browser session показує привітання під час першого відкриття панелі.
  useEffect(() => {
    let timer: number | undefined;
    const greeted = window.sessionStorage.getItem(ASSISTANT_GREETING_KEY) === 'true';
    if (options.isOpen && !previousOpen.current && !greeted) {
      window.sessionStorage.setItem(ASSISTANT_GREETING_KEY, 'true');
      expressiveUntil.current = Date.now() + 1200;
      setState('greeting');
      timer = window.setTimeout(() => setState('idle'), 1200);
    }
    previousOpen.current = options.isOpen;
    return () => { if (timer) window.clearTimeout(timer); };
  }, [options.isOpen]);

  // Кожна нова successRevision запускає коротку позитивну реакцію.
  useEffect(() => {
    if (options.successRevision === 0) return undefined;
    expressiveUntil.current = Date.now() + 1200;
    setState('success');
    const timer = window.setTimeout(() => setState('idle'), 1200);
    return () => window.clearTimeout(timer);
  }, [options.successRevision]);

  // Після виразних реакцій обирає базовий стан за фіксованим порядком пріоритетів.
  useEffect(() => {
    if (Date.now() < expressiveUntil.current) return undefined;
    if (options.isThinking) setState('thinking');
    else if (options.hasError) {
      setState('error');
      const timer = window.setTimeout(() => setState('idle'), 1050);
      previousMessages.current = options.messageCount;
      return () => window.clearTimeout(timer);
    }
    else if (options.composerFocused || options.composerHasValue) setState('reading');
    else if (options.messageCount > previousMessages.current) {
      setState('answering');
      const timer = window.setTimeout(() => setState('idle'), 1100);
      previousMessages.current = options.messageCount;
      return () => window.clearTimeout(timer);
    } else if (options.pointerNear) setState('curious');
    else setState('idle');
    previousMessages.current = options.messageCount;
    return undefined;
  }, [options.composerFocused, options.composerHasValue, options.hasError, options.isThinking, options.messageCount, options.pointerNear]);

  return state;
};
