import fs from 'node:fs';
import path from 'node:path';

const targets = ['tr','ar','pl','ku','fa','it','es','el','ro','bg'];
const sourceLang = 'de';

const data = {
  copy: {
    eyebrow: 'Lead-Systeme fuer lokale Unternehmen in Deutschland',
    heroTitle: ['Aus Traffic', 'qualifizierte Leads', 'als steuerbares System'],
    heroLead: 'Wir verbinden Website, AI, Ads und Analytics in einer operativen Architektur, damit Vertrieb, Marketing und Inhaber mit denselben Daten arbeiten.',
    ctaTop: 'Strategischen Call starten',
    heroChips: ['Lead Flow', 'AI Qualify', 'Attribution'],
    heroChipValues: ['Live Intake', 'DM + Bot', 'GA4 + CRM'],
    flowNodes: ['Google / Meta / TikTok', 'Landing + Tracking', 'AI Qualification', 'CRM Pipeline'],
    heroBadges: ['Server-Side Tracking', 'Lead Scoring', 'ROAS View'],
    servicesTitle: 'Leistungen als System-Module',
    servicesDesc: 'Kein gleichfoermiger Kartenblock: ein dominanter Kern, flankierende Module und ein kompakter Operations-Layer.',
    trio: ['Problem', 'System', 'Outcome'],
    detailsSummary: 'Implementierungsdetails',
    kpiBadgesTitle: 'KPI Badges',
    kpiBadgesDesc: 'Jede Leistung wird ausschliesslich ueber Kennzahlen bewertet, die Sales und Marketing gemeinsam lesen und steuern koennen.',
    signalLayerTitle: 'Signal Layer',
    signalItems: ['GA4 Events', 'Meta CAPI', 'CRM Sync', 'DSGVO Mode'],
    opsTitle: 'Ops Notes',
    opsItems: ['Weekly Test Queue', 'Budget Reallocation', 'Funnel QA Slots'],
    packagesTitle: 'Pakete in SaaS-Logik',
    recommended: 'Empfohlen',
    timelineTitle: 'Wie wir arbeiten',
    stepLabel: 'Step',
    controlTitle: 'Control Room: Ergebnisse in Echtzeit',
    controlPanelTitle: 'Dashboard Architektur',
    controlPanelDesc: 'Kanaldaten, Funnel-Signale und CRM-Status laufen in einer Ansicht zusammen. Entscheidungen erfolgen auf Prozessebene statt aus dem Bauchgefuehl.',
    miniCharts: ['Lead Volume', 'Quality Score', 'Deal Velocity'],
    kpiPanelTitle: 'Live KPI Counters',
    kpiLabels: ['Qualified Leads', 'Avg. First Response', 'Lead to Termin', 'ROAS Cluster'],
    controlBadges: ['Lead Kontrolle', 'Budget Kontrolle', 'Funnel Kontrolle'],
    ctaBottom: 'Scope fuer Ihr Lead-System anfragen'
  },
  systems: {
    website: {
      title: 'Website Engine',
      problem: 'Traffic ist vorhanden, aber mobile Nutzer brechen vor dem Formular ab.',
      system: 'Landing/Multi-Page mit GA4, Meta Pixel, Server-Side Tracking, CRM und DSGVO-Setup.',
      outcome: 'Jeder Lead wird nachvollziehbar erfasst und eindeutig einem Kanal zugeordnet.',
      kpis: ['Tracking-Quote', 'Form Completion', 'Lead Source Clarity'],
      details: ['Consent Mode korrekt konfiguriert', 'Call- und WhatsApp-Events', 'CRM Push in Echtzeit']
    },
    ai: {
      title: 'AI Qualification Layer',
      problem: 'Zu viele unqualifizierte Anfragen blockieren Vertrieb und Telefonteam.',
      system: 'AI-Chatbot, Auto-Qualifizierung, DM-Flows in WhatsApp/Instagram, E-Mail-Automation, Lead Scoring.',
      outcome: 'Das Team priorisiert kaufnahe Leads statt zeitintensiver Erstsortierung.',
      kpis: ['First Response Time', 'Qualified Lead Share', 'Sales Team Throughput'],
      details: ['Branchenspezifische Prompt-Pfade', 'No-Show Reminders', 'Priorisierung nach Score']
    },
    ads: {
      title: 'Paid Acquisition',
      problem: 'Das Budget verteilt sich ohne klare Lernschleife zwischen den Kanaelen.',
      system: 'Google Ads + Meta Ads + TikTok, A/B Tests, Lookalikes, Conversion Tracking und ROAS-View.',
      outcome: 'Budget fliesst in Kampagnen mit hoher Lead-Qualitaet statt in reine Klickmenge.',
      kpis: ['Cost per Qualified Lead', 'ROAS by Campaign', 'Creative Win Rate'],
      details: ['Regionale Kampagnencluster', 'Form-Varianten im Test', 'Signalbasierte Audience-Updates']
    },
    analytics: {
      title: 'Control Analytics',
      problem: 'Entscheidungen basieren auf Plattform-Screenshots statt auf belastbaren Funnel-Daten.',
      system: 'Control-Room Dashboard mit Kanal-, Funnel- und CRM-Sicht in einer Ebene.',
      outcome: 'Woechentliche Entscheidungen zu Budget, Optimierung und Skalierung sind datenbasiert nachvollziehbar.',
      kpis: ['Lead to Appointment', 'Lead to Deal', 'Pipeline Velocity'],
      details: ['Segmentierung nach Region/Service', 'Alerts bei Funnel Drop', 'Monatliche Hypothesenliste']
    }
  },
  packages: [
    {
      id: 'starter',
      title: 'Starter',
      scale: 1,
      lead: 'Fuer lokale Betriebe, die von null auf eine messbare Lead-Basis gehen.',
      items: ['Web-Funnel + GA4', 'Meta Pixel + Consent', 'CRM Capture', 'Basis-Reporting'],
      effect: 'Klare Sicht auf Lead-Quellen und ein belastbarer Erstprozess.'
    },
    {
      id: 'growth',
      title: 'Growth',
      scale: 2,
      recommended: true,
      lead: 'Fuer Teams mit aktivem Vertrieb, die mehr qualifizierte Leads brauchen.',
      items: ['Google + Meta Kampagnen', 'AI Qualification Flows', 'A/B Testing Setup', 'Lead Scoring + Automation'],
      effect: 'Mehr qualifizierte Nachfrage bei besserer Reaktionszeit und sauberer Priorisierung.'
    },
    {
      id: 'scale',
      title: 'Scale',
      scale: 3,
      lead: 'Fuer Unternehmen mit mehreren Regionen oder Leistungsclustern.',
      items: ['Multi-Channel Steuerung', 'Server-Side Attribution', 'Ops Web-App Layer', 'Control-Room Governance'],
      effect: 'Skalierung ueber Prozesse und belastbare Daten statt manuellem Trial-and-Error.'
    }
  ],
  timeline: [
    ['01', 'Strategischer Call', 'Zielmarkt, Angebot und Lead-Engpass werden klar definiert.'],
    ['02', 'Scope Dokument', 'Kanalplan, Tracking-Plan und Verantwortlichkeiten werden fixiert.'],
    ['03', 'Build Phase', 'Website, Automationen und Integrationen werden umgesetzt.'],
    ['04', 'Launch', 'Tracking QA, Kampagnenstart und CRM-Flows gehen live.'],
    ['05', 'Optimierung', 'Woechentliche Tests fuer Creatives, Funnel und Qualifizierung.'],
    ['06', 'Skalierung', 'Funktionierende Strecken werden auf Regionen/Leistungen erweitert.']
  ]
};

function flatten(obj, prefix = '') {
  const out = [];
  if (Array.isArray(obj)) {
    obj.forEach((v, idx) => {
      const p = `${prefix}[${idx}]`;
      if (typeof v === 'string') out.push({ path: p, value: v });
      else if (v && typeof v === 'object') out.push(...flatten(v, p));
    });
    return out;
  }
  for (const [k, v] of Object.entries(obj)) {
    const p = prefix ? `${prefix}.${k}` : k;
    if (typeof v === 'string') out.push({ path: p, value: v });
    else if (v && typeof v === 'object') out.push(...flatten(v, p));
  }
  return out;
}

function setByPath(target, pathStr, value) {
  const parts = pathStr.replace(/\[(\d+)\]/g, '.$1').split('.');
  let cur = target;
  for (let i = 0; i < parts.length - 1; i += 1) {
    const key = /^\d+$/.test(parts[i]) ? Number(parts[i]) : parts[i];
    const nextKey = parts[i + 1];
    if (cur[key] == null) cur[key] = /^\d+$/.test(nextKey) ? [] : {};
    cur = cur[key];
  }
  const last = /^\d+$/.test(parts[parts.length - 1]) ? Number(parts[parts.length - 1]) : parts[parts.length - 1];
  cur[last] = value;
}

function protectVars(text) {
  const vars = [];
  const replaced = text.replace(/{{[^}]+}}/g, m => {
    const t = `__VAR_${vars.length}__`;
    vars.push(m);
    return t;
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
  const prepared = items.map(item => ({ ...item, ...protectVars(item.value) }));
  const joined = prepared.map((item, i) => `__K${i}__ ${item.replaced.replace(/\r?\n/g, ' ')}`).join('\n');
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(joined)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const body = await res.json();
  const translated = (body?.[0] || []).map(part => part?.[0] || '').join('');
  const lines = translated.split('\n');
  const map = new Map();
  for (const line of lines) {
    const m = line.match(/^__K(\d+)__\s*(.*)$/);
    if (m) map.set(Number(m[1]), m[2]);
  }
  return prepared.map((item, i) => {
    const raw = map.get(i) ?? item.value;
    return { path: item.path, value: restoreVars(raw, item.vars).trim() || item.value };
  });
}

const entries = flatten(data);
const chunkSize = 22;
const sleep = ms => new Promise(r => setTimeout(r, ms));

const out = {};
for (const lang of targets) {
  const translatedObj = JSON.parse(JSON.stringify(data));
  for (let i = 0; i < entries.length; i += chunkSize) {
    const chunk = entries.slice(i, i + chunkSize);
    const translated = await translateChunk(chunk, lang);
    translated.forEach(item => setByPath(translatedObj, item.path, item.value));
    await sleep(120);
  }
  out[lang] = translatedObj;
  console.log('translated', lang);
}

const outPath = path.join(process.cwd(), 'src', 'pages', 'ServicePages', 'services.translations.json');
fs.writeFileSync(outPath, JSON.stringify(out, null, 2) + '\n', 'utf8');
console.log('saved', outPath);
