import {existsSync, mkdirSync} from 'node:fs';
import {join, resolve} from 'node:path';
import {chromium} from 'playwright-core';

const executablePath = join(process.cwd(), 'node_modules', '.remotion', 'chrome-headless-shell', 'win64', 'chrome-headless-shell-win64', 'chrome-headless-shell.exe');
const outputDir = resolve('qa');
mkdirSync(outputDir, {recursive: true});
const sizes = [
  {width: 1920, height: 1080},
  {width: 1440, height: 1000},
  {width: 1024, height: 900},
  {width: 768, height: 900},
  {width: 390, height: 844},
];

if (!existsSync(executablePath)) throw new Error(`Chrome nicht gefunden: ${executablePath}`);

const browser = await chromium.launch({executablePath, headless: true, args: ['--autoplay-policy=no-user-gesture-required']});
const results = [];

for (const viewport of sizes) {
  const page = await browser.newPage({viewport, reducedMotion: 'reduce'});
  const errors = [];
  page.on('console', message => {
    if (message.type() === 'error') errors.push(message.text());
  });
  await page.goto('http://127.0.0.1:5173/plehn', {waitUntil: 'networkidle'});
  const video = page.locator('video');
  await video.scrollIntoViewIfNeeded();
  await video.evaluate(async element => {
    if (element.readyState < 3) await new Promise(resolveReady => element.addEventListener('canplay', resolveReady, {once: true}));
    element.currentTime = 0.25;
    await element.play();
    await new Promise(resolvePlay => setTimeout(resolvePlay, 500));
    element.pause();
  });
  const state = await page.evaluate(() => {
    const element = document.querySelector('video');
    if (!element) throw new Error('Videoelement fehlt.');
    return {
      overflow: document.documentElement.scrollWidth > window.innerWidth,
      autoplay: element.autoplay,
      loop: element.loop,
      controls: element.controls,
      preload: element.preload,
      poster: element.poster,
      duration: element.duration,
      currentTime: element.currentTime,
      source: element.querySelector('source')?.getAttribute('src'),
      hasTrack: Boolean(element.querySelector('track')),
      projectImages: ['/images/vs-web-studio.de.png', '/images/airtexno.com.png', '/images/sabsus.shop.png'].every(src => Boolean(document.querySelector(`img[src="${src}"]`))),
      workflowImage: Boolean(document.querySelector('img[src*="Workflow%20Cover"], img[src*="Workflow Cover"]')),
      figmaLink: document.querySelector('a[href*="figma.com/design/xRlWD90Xg0913bseOpMcFx"]')?.getAttribute('target'),
    };
  });
  await page.locator('#video').screenshot({path: join(outputDir, `video-${viewport.width}.png`)});
  if (viewport.width === 1920 || viewport.width === 390) {
    await page.locator('#projekte').screenshot({path: join(outputDir, `projects-${viewport.width}.png`)});
    await page.locator('#workflow').screenshot({path: join(outputDir, `workflow-${viewport.width}.png`)});
  }
  results.push({viewport: viewport.width, ...state, errors});
  await page.close();
}

await browser.close();
console.log(JSON.stringify(results, null, 2));

if (results.some(result => result.overflow || result.autoplay || result.loop || !result.controls || Math.abs(result.duration - 84.395) > 0.1 || result.currentTime < 0.25 || result.hasTrack || !result.projectImages || !result.workflowImage || result.figmaLink !== '_blank' || result.errors.length > 0)) {
  process.exitCode = 1;
}
