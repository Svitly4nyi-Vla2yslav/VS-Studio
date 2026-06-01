import fs from 'node:fs';
import path from 'node:path';

const localesRoot = path.join(process.cwd(), 'public', 'locales');
const sourcePath = path.join(localesRoot, 'de', 'translation.json');
const targetPath = path.join(localesRoot, 'en', 'translation.json');
const chunkSize = 18;
const excludedSections = new Set(['languages', 'portfolio']);

const readJson = filePath =>
  JSON.parse(fs.readFileSync(filePath, 'utf8').replace(/^\uFEFF/, ''));

const sourceJson = readJson(sourcePath);
const targetJson = readJson(targetPath);

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function flatten(value, pathParts = []) {
  if (typeof value === 'string') {
    return [{ pathParts, value }];
  }

  if (!value || typeof value !== 'object') {
    return [];
  }

  return Object.entries(value).flatMap(([key, nestedValue]) =>
    flatten(nestedValue, [...pathParts, key])
  );
}

function setByPath(target, pathParts, value) {
  let cursor = target;

  for (let index = 0; index < pathParts.length - 1; index += 1) {
    cursor = cursor[pathParts[index]];
  }

  cursor[pathParts.at(-1)] = value;
}

function protectTokens(text) {
  const tokens = [];
  const protectedText = text.replace(/{{[^}]+}}/g, match => {
    const token = `__VAR_${tokens.length}__`;
    tokens.push(match);
    return token;
  });

  return { protectedText, tokens };
}

function restoreTokens(text, tokens) {
  return tokens.reduce(
    (restored, token, index) => restored.replaceAll(`__VAR_${index}__`, token),
    text
  );
}

async function translateChunk(entries) {
  const protectedEntries = entries.map(entry => ({
    ...entry,
    ...protectTokens(entry.value),
  }));
  const query = protectedEntries
    .map((entry, index) => `__KEY_${index}__ ${entry.protectedText.replace(/\r?\n/g, ' ')}`)
    .join('\n');
  const url = new URL('https://translate.googleapis.com/translate_a/single');
  url.search = new URLSearchParams({
    client: 'gtx',
    sl: 'de',
    tl: 'en',
    dt: 't',
    q: query,
  });

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Translation request failed with HTTP ${response.status}`);
  }

  const body = await response.json();
  const translatedText = (body?.[0] || []).map(part => part?.[0] || '').join('');
  const translatedByIndex = new Map();

  for (const line of translatedText.split('\n')) {
    const match = line.match(/^__KEY_(\d+)__\s*(.*)$/);
    if (match) {
      translatedByIndex.set(Number(match[1]), match[2]);
    }
  }

  return protectedEntries.map((entry, index) => {
    const translated = translatedByIndex.get(index);
    if (translated === undefined) {
      throw new Error(`Translation response omitted ${entry.pathParts.join('.')}`);
    }

    return {
      ...entry,
      value: restoreTokens(translated, entry.tokens).trim(),
    };
  });
}

async function run() {
  const entries = Object.entries(sourceJson).flatMap(([section, value]) =>
    excludedSections.has(section) ? [] : flatten(value, [section])
  );

  for (let index = 0; index < entries.length; index += chunkSize) {
    const chunk = entries.slice(index, index + chunkSize);
    const translated = await translateChunk(chunk);
    translated.forEach(entry => setByPath(targetJson, entry.pathParts, entry.value));
    await sleep(120);
  }

  fs.writeFileSync(targetPath, `${JSON.stringify(targetJson, null, 2)}\n`, 'utf8');
  console.log(`Updated English main-site locale: ${entries.length} values`);
}

run().catch(error => {
  console.error(error);
  process.exit(1);
});
