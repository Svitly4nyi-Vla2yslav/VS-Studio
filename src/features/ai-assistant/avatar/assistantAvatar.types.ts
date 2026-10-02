export type AssistantVisualState =
  | 'idle'
  | 'curious'
  | 'greeting'
  | 'reading'
  | 'thinking'
  | 'typing'
  | 'answering'
  | 'success'
  | 'celebrating'
  | 'error'
  | 'sleeping';

export interface PointerProximity {
  proximity: MotionValue<number>;
  x: MotionValue<number>;
  y: MotionValue<number>;
  isNear: boolean;
  isCoarse: boolean;
}
import type { MotionValue } from 'framer-motion';

