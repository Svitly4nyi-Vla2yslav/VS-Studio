import type {ReactNode} from 'react';
import {palette} from '../data/content';

export const Browser: React.FC<{children: ReactNode; title?: string}> = ({children, title = 'vs-web-studio.de/plehn'}) => (
  <div style={{border: `1px solid ${palette.line}`, borderRadius: 24, overflow: 'hidden', background: '#090c11', boxShadow: '0 35px 90px rgba(0,0,0,.42)'}}>
    <div style={{height: 62, display: 'flex', alignItems: 'center', gap: 10, padding: '0 22px', borderBottom: `1px solid ${palette.line}`, background: palette.surface}}>
      {['#ff665f', '#efb33e', '#33e0d1'].map(color => <span key={color} style={{width: 13, height: 13, borderRadius: '50%', background: color}} />)}
      <div style={{marginLeft: 18, padding: '8px 28px', minWidth: 410, borderRadius: 10, background: '#080b10', color: palette.muted, fontSize: 16}}>{title}</div>
    </div>
    {children}
  </div>
);
