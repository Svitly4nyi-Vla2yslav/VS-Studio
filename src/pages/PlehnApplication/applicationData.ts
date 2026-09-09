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
};

const configuredBookingUrl = import.meta.env.VITE_PLEHN_BOOKING_URL?.trim() || 'https://calendar.app.google/PhHiySoC7cJsVot28';
const configuredCvUrl = import.meta.env.VITE_PLEHN_CV_URL?.trim();
const configuredVideoUrl = import.meta.env.VITE_PLEHN_VIDEO_URL?.trim();
const configuredCaptionsUrl = import.meta.env.VITE_PLEHN_VIDEO_CAPTIONS_URL?.trim();

export const plehnApplication = {
  recruiter: 'Herr Plehn',
  company: 'plehn media',
  role: 'Web- & KI-Umsetzer:in',
  githubUrl: 'https://github.com/Svitly4nyi-Vla2yslav',
  profileUrl: 'https://github.com/Svitly4nyi-Vla2yslav/Svitly4nyi-Vla2yslav',
  emailUrl: 'mailto:svetli4nuyvla2islav@gmail.com?subject=Gespr%C3%A4ch%20zur%20Bewerbung%20bei%20plehn%20media',
  bookingUrl: configuredBookingUrl || '',
  cvUrl: configuredCvUrl || '/documents/Vladyslav-Svitlychnyi-Lebenslauf.pdf',
  videoUrl: configuredVideoUrl || '',
  captionsUrl: configuredCaptionsUrl || '',
  figmaUrl: 'https://www.figma.com/design/xRlWD90Xg0913bseOpMcFx',
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
  },
  {
    id: 'design-workflow',
    number: '04',
    label: 'Design- & KI-Workflow',
    title: 'Von der Idee zur Conversion',
    purpose: 'Nicht nur behaupten, dass KI und Design zum Prozess gehören, sondern den Weg an dieser Bewerbung sichtbar machen.',
    role: 'Briefing zerlegen, Varianten recherchieren, Figma-Struktur entwickeln, Motion-Sequenz konzipieren, implementieren und testen.',
    implementation: 'Ein zusammenhängender Ablauf aus Briefing, KI-Recherche, Figma, Canva Motion, Code, responsivem QA und Conversion-Entscheidungen.',
    result: 'Diese Seite selbst: ein recruiter-facing Produkt statt einer austauschbaren Portfolio-Broschüre.',
    learning: 'Werkzeuge sind nur dann wertvoll, wenn ihre Ergebnisse geprüft, verbunden und auf ein klares Ziel ausgerichtet werden.',
    tech: ['Figma', 'Canva', 'KI-Recherche', 'React', 'Accessibility', 'Conversion'],
    liveUrl: 'https://www.figma.com/design/xRlWD90Xg0913bseOpMcFx',
    accent: 'gold',
  },
] as const;

export const workflowSteps = [
  { number: '01', title: 'Briefing', note: 'Ziel und Grenzen klären' },
  { number: '02', title: 'KI-Recherche', note: 'Varianten vergleichen' },
  { number: '03', title: 'Figma', note: 'Hierarchie prototypen' },
  { number: '04', title: 'Code', note: 'React + TypeScript' },
  { number: '05', title: 'Test', note: 'A11y, Viewports, Build' },
  { number: '06', title: 'Conversion', note: 'Verstehen und verbessern' },
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

export const videoTranscript = [
  'Hallo Herr Plehn. Ich könnte Ihnen einfach erzählen, dass ich gerne mit KI arbeite. Für diese Stelle fand ich es sinnvoller, es direkt zu zeigen.',
  'Deshalb habe ich für meine Bewerbung diese kleine Seite gebaut. Hier kann mein Bewerbungsassistent Fragen zu meinem Lebenslauf, meinen Projekten, meinen Stärken, aber auch zu meinen Schwächen beantworten.',
  'Mein Schwerpunkt liegt heute auf React und TypeScript. VS Web Studio zeigt meine aktuelle Arbeit mit Webentwicklung, SEO, Leads und KI. AirTexno zeigt stärker Geschäftsprozesse und Automatisierung. Und bei SABSUS habe ich intensiv mit visuellen Oberflächen gearbeitet.',
  'Ich nutze KI aber nicht nur beim Programmieren. Für Konzepte und Kommunikation arbeite ich auch mit Figma und Canva. Von der Idee über den Prototyp bis zur Umsetzung versuche ich, den gesamten Prozess zu verstehen.',
  'Vielleicht fragen Sie sich, warum ich eine Stelle suche, obwohl ich VS Web Studio aufbaue. Die Antwort ist ziemlich einfach: Ich würde langfristig lieber in einem guten Team Verantwortung übernehmen, als allein gleichzeitig Entwickler, Verkäufer und Bürokratie-Abteilung zu sein.',
  'Wenn Sie neugierig geworden sind, sehen Sie sich gerne meinen GitHub an oder vereinbaren Sie direkt einen kurzen Termin mit mir. Dann zeige ich Ihnen lieber echten Code als noch eine weitere Bewerbungsfloskel. Vielen Dank für Ihre Zeit.',
] as const;
