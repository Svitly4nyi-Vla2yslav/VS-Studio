import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const read = relative => readFile(path.join(root, relative), 'utf8');
const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

const [seoConfigRaw, sitemap, robots, redirects, dankeHtml, analyticsSource, contactSource, assistantSource] = await Promise.all([
  read('src/seo/route-seo.json'),
  read('dist/sitemap.xml'),
  read('dist/robots.txt'),
  read('public/_redirects'),
  read('dist/danke/index.html'),
  read('src/analytics/analytics.ts'),
  read('src/pages/Contact/Contact.tsx'),
  read('src/features/ai-assistant/hooks/useAssistant.ts'),
]);

const seoConfig = JSON.parse(seoConfigRaw);
const dankeRoute = seoConfig.routes.find(route => route.path === '/danke');
assert(dankeRoute && !dankeRoute.indexable && !dankeRoute.sitemap, '/danke must be noindex and excluded from sitemap');
assert(/name="robots" content="noindex,follow/.test(dankeHtml), 'Prerendered /danke HTML is missing noindex');
assert(!sitemap.includes('/danke'), '/danke must not appear in sitemap.xml');
assert(robots.includes('User-agent: OAI-SearchBot'), 'robots.txt must explicitly allow OAI-SearchBot');
assert(robots.includes('User-agent: GPTBot'), 'robots.txt must state the independent GPTBot policy');
assert(redirects.includes('/*       /404.html   404'), 'Unknown paths must return a real 404 response');
assert((analyticsSource.match(/googletagmanager\.com\/gtag\/js/g) ?? []).length === 1, 'GA4 loader must have one source');
assert(contactSource.includes("trackEvent('generate_lead'"), 'Contact form must track confirmed generate_lead');
assert(contactSource.indexOf("trackEvent('generate_lead'") > contactSource.indexOf('if (!response || !response.ok)'), 'generate_lead must occur after response validation');
assert(assistantSource.includes("trackEvent('assistant_lead'"), 'Assistant success flow must track assistant_lead');
assert(assistantSource.indexOf("trackEvent('assistant_lead'") > assistantSource.indexOf('await leadClient.createLead'), 'assistant_lead must occur after server success');

const requiredTranslationKeys = ['home.projects.title', 'home.projects.items.handwerk.description', 'footer.impressum'];
const getPath = (object, key) => key.split('.').reduce((value, part) => value?.[part], object);
const localeRoot = path.join(root, 'public', 'locales');
const languages = await readdir(localeRoot);

for (const language of languages) {
  const dictionary = JSON.parse(await readFile(path.join(localeRoot, language, 'translation.json'), 'utf8'));
  for (const key of requiredTranslationKeys) {
    assert(typeof getPath(dictionary, key) === 'string' && getPath(dictionary, key).trim(), `${language} is missing ${key}`);
  }
}

console.log(`Analytics/SEO validation passed for ${languages.length} locales.`);

