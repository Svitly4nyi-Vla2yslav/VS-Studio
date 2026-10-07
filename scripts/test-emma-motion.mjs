import { writeFile } from 'node:fs/promises';

const pages = await fetch('http://127.0.0.1:9223/json').then(response => response.json());
const page = pages.find(item => item.type === 'page');
if (!page) throw new Error('No debuggable Chrome page found');

const socket = new WebSocket(page.webSocketDebuggerUrl);
await new Promise((resolve, reject) => { socket.addEventListener('open', resolve, { once: true }); socket.addEventListener('error', reject, { once: true }); });
let sequence = 0;
const pending = new Map();
socket.addEventListener('message', event => {
  const message = JSON.parse(event.data);
  if (!message.id || !pending.has(message.id)) return;
  const { resolve, reject } = pending.get(message.id);
  pending.delete(message.id);
  if (message.error) reject(new Error(message.error.message)); else resolve(message.result);
});
const send = (method, params = {}) => new Promise((resolve, reject) => {
  const id = ++sequence;
  pending.set(id, { resolve, reject });
  socket.send(JSON.stringify({ id, method, params }));
});
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

await send('Page.enable');
await send('Runtime.enable');
await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'no-preference' }] });
await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
await send('Page.navigate', { url: 'http://127.0.0.1:5184/dev/emma-avatar?state=idle&single=1' });
await sleep(2200);
const geometry = await send('Runtime.evaluate', { expression: `(() => { const avatar=document.querySelector('[data-state="idle"]'); const r=avatar.getBoundingClientRect(); return {x:r.x,y:r.y,width:r.width,height:r.height,cx:r.x+r.width/2,cy:r.y+r.height/2}; })()`, returnByValue: true });
const rect = geometry.result.value;
const points = [
  ['center', rect.cx, rect.cy],
  ['right', rect.cx + 240, rect.cy],
  ['left', rect.cx - 240, rect.cy],
  ['above', rect.cx, rect.cy - 220],
  ['below', rect.cx, rect.cy + 220],
  ['top-right', rect.cx + 210, rect.cy - 180],
  ['bottom-left', rect.cx - 210, rect.cy + 180],
];
const samples = [];
for (const [name, x, y] of points) {
  await send('Page.navigate', { url: 'http://127.0.0.1:5184/dev/emma-avatar?state=idle&single=1' });
  await sleep(900);
  await send('Input.dispatchMouseEvent', { type: 'mouseMoved', x, y, button: 'none' });
  await sleep(name === 'center' ? 500 : 850);
  const result = await send('Runtime.evaluate', { expression: `(() => { const avatar=document.querySelector('[data-state="idle"]'); const eyes=avatar.querySelector('[data-emma-eyes]'); const headText=getComputedStyle(avatar.querySelector('[data-emma-head]')).transform; const eyesText=getComputedStyle(eyes).transform; const head=new DOMMatrix(headText); const eye=new DOMMatrix(eyesText); return { head:headText, eyes:eyesText, headTurnX:Number(head.m23.toFixed(4)), headTurnY:Number(head.m13.toFixed(4)), eyeX:Number(eye.e.toFixed(3)), eyeY:Number(eye.f.toFixed(3)), coarse:matchMedia('(pointer: coarse)').matches, fine:matchMedia('(pointer: fine)').matches, reduced:matchMedia('(prefers-reduced-motion: reduce)').matches, state:avatar.dataset.state }; })()`, returnByValue: true });
  samples.push({ direction: name, pointer: { x, y }, ...result.result.value });
}
const uniqueHead = new Set(samples.map(sample => sample.head)).size;
const uniqueEyes = new Set(samples.map(sample => sample.eyes)).size;
const byDirection = Object.fromEntries(samples.map(sample => [sample.direction, sample]));
const assertions = {
  centerDeadZone: Math.abs(byDirection.center.eyeX) < .15 && Math.abs(byDirection.center.eyeY) < .15,
  eyesHorizontal: byDirection.right.eyeX > 2.5 && byDirection.left.eyeX < -2.5,
  eyesVertical: byDirection.above.eyeY < -2 && byDirection.below.eyeY > 2,
  headHorizontal: Math.sign(byDirection.right.headTurnY) !== Math.sign(byDirection.left.headTurnY) && Math.abs(byDirection.right.headTurnY) > .2 && Math.abs(byDirection.left.headTurnY) > .2,
  headVertical: Math.sign(byDirection.above.headTurnX) !== Math.sign(byDirection.below.headTurnX) && Math.abs(byDirection.above.headTurnX) > .2 && Math.abs(byDirection.below.headTurnX) > .2,
  diagonalResponse: Math.abs(byDirection['top-right'].eyeX) > 1.5 && Math.abs(byDirection['top-right'].eyeY) > 1,
};
const report = { passed: Object.values(assertions).every(Boolean), assertions, uniqueHeadTransforms: uniqueHead, uniqueEyeTransforms: uniqueEyes, avatarRect: rect, samples };
await writeFile('emma-motion-test.json', `${JSON.stringify(report, null, 2)}\n`);
socket.close();
console.log(JSON.stringify(report, null, 2));
if (!report.passed) process.exitCode = 1;
