import {writeFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {resolve} from 'node:path';

const sampleRate = 48000;
const duration = 90;
const frames = sampleRate * duration;
const channels = 2;
const data = Buffer.alloc(frames * channels * 2);
const progression = [146.83, 116.54, 174.61, 130.81];
let noiseState = 0x51f15e;

const smoothstep = (value) => value * value * (3 - 2 * value);
const fade = (time) => smoothstep(Math.min(1, time / 4)) * smoothstep(Math.min(1, (duration - time) / 5));
const oscillator = (frequency, time, phase = 0) => Math.sin(2 * Math.PI * frequency * time + phase);

for (let frame = 0; frame < frames; frame++) {
  const time = frame / sampleRate;
  const root = progression[Math.floor(time / 10) % progression.length];
  const chordPosition = (time % 10) / 10;
  const chordEnvelope = 0.55 + 0.45 * Math.sin(Math.PI * chordPosition);
  const pulsePosition = (time % 2.5) / 2.5;
  const pulseEnvelope = Math.exp(-5.2 * pulsePosition);
  noiseState = (1664525 * noiseState + 1013904223) >>> 0;
  const noise = noiseState / 0xffffffff - 0.5;

  for (let channel = 0; channel < channels; channel++) {
    const drift = channel === 0 ? 0 : 0.19;
    const pad =
      oscillator(root / 2, time, drift) * 0.16 +
      oscillator(root, time, 0.7 + drift) * 0.10 +
      oscillator(root * 1.4983, time, 1.8 - drift) * 0.075 +
      oscillator(root * 2.2449, time, 2.4 + drift) * 0.045;
    const pulse = oscillator(root * 2, time, drift) * pulseEnvelope * 0.035;
    const shimmer = noise * oscillator(0.07, time, drift) * 0.007;
    const sample = Math.tanh((pad * chordEnvelope + pulse + shimmer) * fade(time)) * 0.55;
    data.writeInt16LE(Math.max(-32768, Math.min(32767, Math.round(sample * 32767))), (frame * channels + channel) * 2);
  }
}

const header = Buffer.alloc(44);
header.write('RIFF', 0);
header.writeUInt32LE(36 + data.length, 4);
header.write('WAVEfmt ', 8);
header.writeUInt32LE(16, 16);
header.writeUInt16LE(1, 20);
header.writeUInt16LE(channels, 22);
header.writeUInt32LE(sampleRate, 24);
header.writeUInt32LE(sampleRate * channels * 2, 28);
header.writeUInt16LE(channels * 2, 32);
header.writeUInt16LE(16, 34);
header.write('data', 36);
header.writeUInt32LE(data.length, 40);

const output = resolve(tmpdir(), 'plehn-background-music.source.wav');
writeFileSync(output, Buffer.concat([header, data]));
console.log(`Original ambient soundtrack generated: ${output}`);
