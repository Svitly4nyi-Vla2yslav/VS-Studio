import {plehnProjectAssets} from '../../../../src/data/plehnProjectAssets';

export const palette = {
  bg: '#07090d',
  surface: '#0e1218',
  surface2: '#131923',
  text: '#f7f8fa',
  muted: '#9ba3b0',
  gold: '#efb33e',
  cyan: '#33e0d1',
  blue: '#316bf9',
  line: '#292f3b',
} as const;

export const sceneFrames = {
  intro: 364,
  application: 432,
  assistant: 422,
  projects: 343,
  workflow: 405,
  code: 735,
  final: 222,
} as const;

// Both assets are required. scripts/preflight.mjs deliberately blocks rendering if either
// file is missing or if the narration is not a 48 kHz WAV. Never substitute Desktop SAPI.
export const finalNarration = 'audio/plehn-voiceover-neural.wav';
export const backgroundMusic = 'audio/plehn-background-music.mp3';

export const projectAssets = [
  {name: 'VS Web Studio', tag: 'Web · SEO · Leads · KI', color: palette.gold, image: plehnProjectAssets.vsWebStudio.path.slice(1)},
  {name: 'AirTexno', tag: 'Service · Datenfluss · Automation', color: palette.cyan, image: plehnProjectAssets.airtexno.path.slice(1)},
  {name: 'SABSUS', tag: 'UI · Produktsystem · Performance', color: palette.blue, image: plehnProjectAssets.sabsus.path.slice(1)},
] as const;
