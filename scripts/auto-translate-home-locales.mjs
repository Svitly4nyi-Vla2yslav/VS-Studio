import fs from 'node:fs';
import path from 'node:path';

const root = path.join(process.cwd(), 'public', 'locales');
const sourceLang = 'de';
const targets = ['ar', 'pl', 'ku', 'fa', 'it', 'es', 'el', 'ro', 'bg'];
const sections = ['common', 'header', 'footer', 'home'];
const chunkSize = 22;

const sourcePath = path.join(root, sourceLang, 'translation.json');
const sourceRaw = fs.readFileSync(sourcePath, 'utf8').replace(/^\uFEFF/, '');
const sourceJson = JSON.parse(sourceRaw);

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function flatten(obj, prefix = '') {
  const out = [];
  for (const [key, value] of Object.entries(obj)) {
    const next = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'string') {
      out.push({ path: next, value });
      continue;
    }
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      out.push(...flatten(value, next));
    }
  }
  return out;
}

function setByPath(target, dotPath, value) {
  const keys = dotPath.split('.');
  let cursor = target;
  for (let i = 0; i < keys.length - 1; i += 1) {
    const k = keys[i];
    if (!cursor[k] || typeof cursor[k] !== 'object' || Array.isArray(cursor[k])) cursor[k] = {};
    cursor = cursor[k];
  }
  cursor[keys[keys.length - 1]] = value;
}

function protectVars(text) {
  const vars = [];
  const replaced = text.replace(/{{[^}]+}}/g, match => {
    const token = `__VAR_${vars.length}__`;
    vars.push(match);
    return token;
  });
  return { replaced, vars };
}

function restoreVars(text, vars) {
  let out = text;
  vars.forEach((v, i) => {
    out = out.replaceAll(`__VAR_${i}__`, v);
  });
  return out;
}

async function translateChunk(items, targetLang) {
  const protectedItems = items.map(item => ({ ...item, ...protectVars(item.value) }));
  const joined = protectedItems
    .map((item, i) => `__K${i}__ ${item.replaced.replace(/\r?\n/g, ' ')}`)
    .join('\n');
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(joined)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const body = await res.json();
  const translated = (body?.[0] || []).map(part => part?.[0] || '').join('');
  const lines = translated.split('\n');

  const map = new Map();
  for (const line of lines) {
    const match = line.match(/^__K(\d+)__\s*(.*)$/);
    if (!match) continue;
    map.set(Number(match[1]), match[2]);
  }

  return protectedItems.map((item, i) => {
    const raw = map.get(i) ?? item.value;
    const restored = restoreVars(raw, item.vars);
    return { path: item.path, value: restored.trim() || item.value };
  });
}

async function run() {
  const sourceEntries = sections.flatMap(section => flatten(sourceJson[section] || {}, section));

  for (const lang of targets) {
    const filePath = path.join(root, lang, 'translation.json');
    const raw = fs.readFileSync(filePath, 'utf8').replace(/^\uFEFF/, '');
    const json = JSON.parse(raw);

    for (let i = 0; i < sourceEntries.length; i += chunkSize) {
      const chunk = sourceEntries.slice(i, i + chunkSize);
      const translatedChunk = await translateChunk(chunk, lang);
      translatedChunk.forEach(item => setByPath(json, item.path, item.value));
      await sleep(120);
    }

    fs.writeFileSync(filePath, `${JSON.stringify(json, null, 2)}\n`, 'utf8');
    console.log(`Updated locale: ${lang}`);
  }
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
