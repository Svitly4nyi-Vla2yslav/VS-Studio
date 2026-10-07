import { useState } from 'react';
import styled from 'styled-components';
import { AssistantAvatar } from '../../features/ai-assistant/avatar/AssistantAvatar';
import type { AssistantVisualState } from '../../features/ai-assistant/avatar/assistantAvatar.types';

const states: AssistantVisualState[] = [
  'idle', 'curious', 'greeting', 'reading', 'thinking', 'typing', 'answering',
  'success', 'celebrating', 'error', 'sleeping', 'listening', 'speaking',
];
const initialState = (): AssistantVisualState => {
  const requested = new URLSearchParams(window.location.search).get('state');
  return states.includes(requested as AssistantVisualState) ? requested as AssistantVisualState : 'idle';
};
const Page = styled.main`min-height:100svh;padding:48px;color:#f6ead0;background:radial-gradient(circle at 50% 35%,#24201b,#070708 58%);`;
const Preview = styled.section`min-height:360px;display:flex;align-items:center;justify-content:center;gap:clamp(30px,8vw,110px);flex-wrap:wrap;margin:28px 0;padding:36px;border:1px solid rgba(240,201,107,.2);border-radius:28px;background:rgba(0,0,0,.28);`;
const Sample = styled.div`display:grid;justify-items:center;gap:14px;min-width:140px;color:rgba(246,234,208,.7);`;
const Controls = styled.div`
  display:flex;flex-wrap:wrap;gap:10px;
  button{padding:9px 13px;border-radius:999px;border:1px solid rgba(240,201,107,.28);background:#111114;color:inherit;}
  button[aria-pressed='true']{background:#d89f42;color:#080706;}
`;

const EmmaAvatarDev: React.FC = () => {
  const [state, setState] = useState<AssistantVisualState>(initialState);
  const [audioLevel, setAudioLevel] = useState(.35);
  const [reduceMotion, setReduceMotion] = useState(false);
  const previewSizes = new URLSearchParams(window.location.search).get('single') === '1' ? [96] : [128, 96, 64, 56];
  return <Page>
    <h1>Emma Soft Mini Robot preview</h1>
    <p>Move the pointer around the avatar and inspect every semantic state.</p>
    <Preview>{previewSizes.map(size => <Sample key={size}><AssistantAvatar state={state} size={size} audioLevel={audioLevel} reduceMotion={reduceMotion} /><span>{size}px</span></Sample>)}</Preview>
    <h2>State</h2>
    <Controls>{states.map(item => <button key={item} type='button' aria-pressed={state === item} onClick={() => setState(item)}>{item}</button>)}</Controls>
    <h2>Motion</h2>
    <Controls><button type='button' aria-pressed={reduceMotion} onClick={() => setReduceMotion(value => !value)}>Simulate reduced motion</button></Controls>
    <h2>Audio level: {audioLevel.toFixed(2)}</h2>
    <input type='range' min='0' max='1' step='.01' value={audioLevel} onChange={event => setAudioLevel(Number(event.target.value))} />
  </Page>;
};
export default EmmaAvatarDev;
