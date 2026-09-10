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
  application: 306,
  assistant: 270,
  projects: 360,
  workflow: 330,
  code: 450,
  final: 450,
} as const;

export const voiceovers = {
  application: 'audio/02-application.wav',
  assistant: 'audio/03-assistant.wav',
  projects: 'audio/04-projects.wav',
  workflow: 'audio/05-workflow.wav',
  code: 'audio/06-code.wav',
  final: 'audio/07-final.wav',
} as const;

// No acceptable neural or professional TTS is available in this environment.
// We intentionally do not generate or keep a legacy desktop TTS narration here.
// Vlad can supply a real final voice file manually at public/audio/plehn-voiceover-final.wav
// and then set this to 'audio/plehn-voiceover-final.wav'.
export const finalNarration: string | null = null;

// No verified licensed music asset was available in the repo or downloaded from a safe source.
// The project intentionally renders without music until Vlad provides a safe track.
// Expected path: public/audio/plehn-background-music.mp3
export const backgroundMusic: string | null = null;

export const projectAssets = [
  {name: 'VS Web Studio', tag: 'Web · SEO · Leads · KI', color: palette.gold, image: plehnProjectAssets.vsWebStudio.path.slice(1)},
  {name: 'AirTexno', tag: 'Service · Datenfluss · Automation', color: palette.cyan, image: plehnProjectAssets.airtexno.path.slice(1)},
  {name: 'SABSUS', tag: 'UI · Produktsystem · Performance', color: palette.blue, image: plehnProjectAssets.sabsus.path.slice(1)},
] as const;
