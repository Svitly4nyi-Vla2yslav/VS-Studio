import {existsSync, readFileSync, statSync} from 'node:fs';
import {resolve} from 'node:path';

const audioDir = resolve('public/audio');
const narration = resolve(audioDir, 'plehn-voiceover-neural.wav');
const music = resolve(audioDir, 'plehn-background-music.mp3');

const fail = (message) => {
  console.error(`PRE-FLIGHT REJECTED: ${message}`);
  process.exitCode = 1;
};

if (!existsSync(narration)) {
  fail('Missing neural narration: public/audio/plehn-voiceover-neural.wav');
} else {
  const header = readFileSync(narration).subarray(0, 44);
  const isWave = header.toString('ascii', 0, 4) === 'RIFF' && header.toString('ascii', 8, 12) === 'WAVE';
  const sampleRate = isWave ? header.readUInt32LE(24) : 0;
  if (!isWave || sampleRate !== 48000) fail(`Narration must be a 48 kHz WAV; found ${isWave ? `${sampleRate} Hz` : 'a non-WAV file'}.`);
}

if (!existsSync(music) || statSync(music).size < 100_000) {
  fail('Missing licensed music: public/audio/plehn-background-music.mp3');
}

if (!process.exitCode) console.log('Pre-flight passed: neural narration and licensed music assets are present.');
