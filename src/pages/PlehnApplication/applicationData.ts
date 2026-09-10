import { plehnFigmaUrl, plehnProjectAssets } from '../../data/plehnProjectAssets';

export type PlehnCaseStudy = {
  id: string;
  number: string;
  label: string;
  title: string;
  purpose: string;
  role: string;
  implementation: string;
  result: string;
  learning: string;
  tech: readonly string[];
  liveUrl?: string;
  repoUrl?: string;
  accent: 'gold' | 'cyan' | 'blue';
  imagePath: string;
  imageAlt: string;
};

const configuredBookingUrl = import.meta.env.VITE_PLEHN_BOOKING_URL?.trim() || 'https://calendar.app.google/PhHiySoC7cJsVot28';
const configuredCvUrl = import.meta.env.VITE_PLEHN_CV_URL?.trim();
const configuredVideoUrl = import.meta.env.VITE_PLEHN_VIDEO_URL?.trim();
const configuredVideoPosterUrl = import.meta.env.VITE_PLEHN_VIDEO_POSTER_URL?.trim();

export const plehnApplication = {
  recruiter: 'Herr Plehn',
  company: 'plehn media',
  role: 'Web- & KI-Umsetzer:in',
  githubUrl: 'https://github.com/Svitly4nyi-Vla2yslav',
  profileUrl: 'https://github.com/Svitly4nyi-Vla2yslav/Svitly4nyi-Vla2yslav',
  emailUrl: 'mailto:svetli4nuyvla2islav@gmail.com?subject=Gespr%C3%A4ch%20zur%20Bewerbung%20bei%20plehn%20media',
  bookingUrl: configuredBookingUrl || '',
  cvUrl: configuredCvUrl || '/documents/Vladyslav-Svitlychnyi-Lebenslauf.pdf',
  videoUrl: configuredVideoUrl || '/videos/plehn-recruiter-demo.mp4',
  videoPosterUrl: configuredVideoPosterUrl || '/videos/plehn-recruiter-poster.webp',
  figmaUrl: plehnFigmaUrl,
  canvaUrl: '',
} as const;

export const stack = ['React 19', 'TypeScript', 'Node.js', 'OpenAI API', 'GitHub', 'Figma', 'Canva'] as const;

export const caseStudies: readonly PlehnCaseStudy[] = [
  {
    id: 'vs-web-studio',
    number: '01',
    label: 'Produktionsnahe Plattform',
    title: 'VS Web Studio',
    purpose: 'Eine mehrsprachige Webpräsenz aufbauen, die Leistungen erklärt und Anfragen in klare Prozesse überführt.',
    role: 'Konzept, UX, Frontend, Inhaltsstruktur, SEO-Basis, Kontakt- und KI-Flows sowie laufende Weiterentwicklung.',
    implementation: 'React/TypeScript-Komponenten, i18n, lokale Landingpages, Firebase-Anbindungen, serverlose Formulare und ein Assistent mit kontrolliertem Fallback.',
    result: 'Eine reale, deployte Arbeitsbasis, an der Technik, Kommunikation und Lead-Prozesse gemeinsam weiterentwickelt werden.',
    learning: 'Eine Website ist kein isoliertes UI. Sie ist Teil eines Vertriebs-, Informations- und Serviceprozesses.',
    tech: ['React 19', 'TypeScript', 'Firebase', 'i18next', 'Netlify', 'SEO'],
    liveUrl: 'https://vs-web-studio.de/',
    repoUrl: 'https://github.com/Svitly4nyi-Vla2yslav/VS-Studio',
    accent: 'gold',
    imagePath: plehnProjectAssets.vsWebStudio.path,
    imageAlt: plehnProjectAssets.vsWebStudio.alt,
  },
  {
    id: 'airtexno',
    number: '02',
    label: 'Service- & Datenfluss',
    title: 'AirTexno',
    purpose: 'Serviceanfragen für einen Reparaturbetrieb verständlich erfassen und inklusive Herkunft strukturiert weitergeben.',
    role: 'Frontend, mehrsprachige Inhaltsstruktur, Anfrage-Flow, Attribution und produktionsnahe Deployment-Arbeit.',
    implementation: 'React/TypeScript-SPA mit vier Sprachen, Netlify Function für E-Mail, optionaler PostgreSQL-Persistenz und UTM-/Ad-Click-Attribution.',
    result: 'Ein deployter Service-Request-Flow, der nicht nur Formulardaten, sondern auch Kampagnenkontext transportieren kann.',
    learning: 'Gute Oberflächen enden nicht am Absenden-Button: Der nachgelagerte Daten- und Rückmeldungsfluss gehört zum Produkt.',
    tech: ['React 19', 'TypeScript', 'i18next', 'Netlify Functions', 'PostgreSQL', 'Nodemailer'],
    liveUrl: 'https://airtexno.com/',
    repoUrl: 'https://github.com/Svitly4nyi-Vla2yslav/AirTexno',
    accent: 'cyan',
    imagePath: plehnProjectAssets.airtexno.path,
    imageAlt: plehnProjectAssets.airtexno.alt,
  },
  {
    id: 'sabsus',
    number: '03',
    label: 'Visuelles Produktsystem',
    title: 'SABSUS',
    purpose: 'Ein komplexes POS-/CRM-/Operations-Konzept für Gastronomie und Retail als verständliche Marketing-Website strukturieren.',
    role: 'Visuelle Umsetzung, Komponentenstruktur, Service-Seiten, Mehrsprachigkeit und technische SEO-Grundlage.',
    implementation: 'React/TypeScript, modulare Routen, i18next, Framer Motion, Swiper sowie bewusst eingesetzte Spline-/Three.js-Elemente.',
    result: 'Eine umfangreiche öffentliche Produktdarstellung mit mehreren Funktionsbereichen und starken visuellen Oberflächen.',
    learning: 'Viele Grafiken und Effekte haben mir gezeigt, wie schnell visuelle Qualität Performance kosten kann. Seitdem achte ich stärker auf Rendering, Lazy Loading und Performance-Budgets.',
    tech: ['React 19', 'TypeScript', 'Framer Motion', 'Three.js', 'i18next', 'SEO'],
    liveUrl: 'https://srm-sabsus.netlify.app/',
    repoUrl: 'https://github.com/Svitly4nyi-Vla2yslav/srm-sabsus',
    accent: 'blue',
    imagePath: plehnProjectAssets.sabsus.path,
    imageAlt: plehnProjectAssets.sabsus.alt,
  },
] as const;

export const workflowSteps = [
  { number: '01', title: 'Briefing', note: 'Ziel und Grenzen klären' },
  { number: '02', title: 'KI-Recherche', note: 'Varianten vergleichen' },
  { number: '03', title: 'Figma', note: 'Hierarchie prototypen' },
  { number: '04', title: 'Motion', note: 'Ablauf und Fokus planen' },
  { number: '05', title: 'Code', note: 'React + TypeScript' },
  { number: '06', title: 'Test', note: 'A11y, Viewports, Build' },
  { number: '07', title: 'Conversion', note: 'Verstehen und verbessern' },
] as const;

export const currentSkills = [
  'React / TypeScript',
  'Node.js / REST APIs',
  'Responsive UI / UX',
  'SEO / Conversion Grundlagen',
  'KI-gestützte Entwicklung',
  'GitHub / Deployment',
  'Figma / Canva Workflow',
] as const;

export const growingSkills = ['Astro', 'TYPO3', 'Shopware', 'Python für Automationen', 'GEO / agent-ready web'] as const;

export const workflowImage = plehnProjectAssets.workflow;
