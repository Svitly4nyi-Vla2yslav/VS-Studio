export type RecruiterQuestion = {
  id: string;
  label: string;
  answer: string;
  sources: readonly string[];
  keywords: readonly string[];
  quick?: boolean;
};

const cvSource = 'Lebenslauf, Stand 28.08.2026';

const questions: readonly RecruiterQuestion[] = [
  {
    id: 'strengths',
    label: 'Was sind Vlads größte Stärken?',
    answer: 'Meine größten Stärken sind Ausdauer, Lernfähigkeit und praktische Umsetzung. Seit Anfang 2023 arbeite ich kontinuierlich an Webprojekten und verbessere meine Fähigkeiten Schritt für Schritt. Wenn ich etwas noch nicht kann, stelle ich es nicht schöner dar, sondern zerlege das Problem, recherchiere, baue einen ersten funktionierenden Ansatz und verbessere ihn weiter.',
    sources: [cvSource, 'GitHub-Verlauf', 'Projektarbeit seit 2023'],
    keywords: ['stärke', 'stärken', 'ausdauer', 'lernfähigkeit'],
  },
  {
    id: 'weaknesses',
    label: 'Was sind seine Schwächen?',
    answer: 'Eine Schwäche von mir ist, dass ich mich für neue Ideen sehr schnell begeistern kann und dadurch manchmal zu viele Dinge gleichzeitig ausprobieren möchte. Ich priorisiere deshalb stärker und stelle zuerst eine funktionierende Version fertig. Außerdem ist mein Deutsch trotz bestandenem B2 Beruf noch nicht so mühelos wie meine Muttersprache. Ich arbeite regelmäßig daran, besonders an Kundengesprächen und klarer Argumentation.',
    sources: ['Selbsteinschätzung', 'Deutsch B2 Beruf'],
    keywords: ['schwäche', 'schwächen', 'priorisieren'],
  },
  {
    id: 'gaps',
    label: 'Was kann er heute noch nicht gut?',
    answer: 'Mein stärkster Bereich ist aktuell React/TypeScript und moderne Webentwicklung. TYPO3, Shopware und Astro gehören noch nicht zu meinen stärksten praktischen Bereichen. Python nutze ich bisher nicht auf demselben Niveau wie JavaScript/TypeScript. Ich würde diese Lücken deshalb nicht verstecken, sondern gezielt in echten Aufgaben ausbauen.',
    sources: ['Aktueller Tech-Stack', 'Offene Lernfelder'],
    keywords: ['nicht gut', 'lücke', 'lücken', 'typo3', 'shopware', 'astro', 'python'],
  },
  {
    id: 'fit',
    label: 'Warum passt er zu plehn media?',
    answer: 'Die Rolle passt zu mir, weil sie nicht nur reine Entwicklung verlangt. Mich interessiert genau die Verbindung aus Webtechnik, Design, Conversion und KI. Ich möchte nicht nur Komponenten programmieren, sondern verstehen, warum eine Seite gebaut wird, wie Nutzer reagieren und wie Technik ein messbares Ergebnis unterstützen kann.',
    sources: ['Stellenprofil', 'Diese Bewerbungsseite'],
    keywords: ['plehn', 'passt', 'warum er', 'rolle', 'stelle'],
  },
  {
    id: 'employment',
    label: 'Warum sucht er eine Festanstellung, wenn er VS Web Studio aufbaut?',
    answer: 'Ich würde langfristig lieber in einem guten Team Verantwortung übernehmen, als allein dauerhaft Entwicklung, Vertrieb und Bürokratie gleichzeitig zu jonglieren. VS Web Studio ist mein Weg, während der Jobsuche nicht stehenzubleiben und meine Fähigkeiten praktisch weiterzuentwickeln. Eine passende Festanstellung bleibt für mich die attraktivere langfristige Perspektive.',
    sources: ['VS Web Studio', 'Kanonische Bewerbungsantwort'],
    keywords: ['festanstellung', 'vs web studio', 'selbstständig', 'aufbaut', 'anstellung'],
  },
  {
    id: 'five-years',
    label: 'Wo sieht er sich in fünf Jahren?',
    answer: 'In fünf Jahren möchte ich ein Entwickler sein, dem man ein reales Problem geben kann und nicht nur eine einzelne Komponente. Ich möchte technisch deutlich stärker sein, aber gleichzeitig Anforderungen, Nutzer und geschäftliche Ziele besser verstehen. Besonders wichtig ist mir, Verantwortung für komplette Features und ihre Qualität übernehmen zu können.',
    sources: ['Kanonische Bewerbungsantwort'],
    keywords: ['fünf jahre', '5 jahre', 'fünf jahren', 'zukunft'],
  },
  {
    id: 'ten-years',
    label: 'Wo sieht er sich in zehn Jahren?',
    answer: 'In zehn Jahren sehe ich mich nicht unbedingt in einer bestimmten Jobbezeichnung. Mir ist wichtiger, dass ich fachlich so weit bin, komplexe digitale Produkte von der Idee bis zur Umsetzung mitgestalten zu können. Ich könnte mir eine Rolle mit mehr technischer und produktbezogener Verantwortung vorstellen, möchte aber weiterhin selbst nah an der Umsetzung bleiben.',
    sources: ['Kanonische Bewerbungsantwort'],
    keywords: ['zehn jahre', '10 jahre', 'zehn jahren'],
  },
  {
    id: 'ai',
    label: 'Wie arbeitet er mit KI?',
    answer: 'Ich nutze KI nicht nur zum Generieren von Text. Ich setze sie als Arbeitswerkzeug für Recherche, Varianten, Strukturierung, Code-Analyse, Debugging, Dokumentation, Ideenvergleich und Prototyping ein. Wichtig ist mir, Ergebnisse zu prüfen und KI nicht als Ersatz für Verständnis zu behandeln. Diese Bewerbungsseite verbindet dafür Figma-Konzept, strukturierte Prompts, Code, Tests und Conversion-Überlegungen.',
    sources: ['Figma-Bewerbungsdemo', 'Implementierter Workflow'],
    keywords: ['ki', 'ai', 'künstliche intelligenz', 'prompt', 'chatgpt'],
  },
  {
    id: 'learning',
    label: 'Wie lernt er neue Technologien?',
    answer: 'Ich lerne am besten praktisch. Ich lese die Grundlagen, probiere ein kleines Beispiel und übertrage es möglichst schnell auf ein echtes Projekt. Wenn etwas nicht funktioniert, analysiere ich den Fehler und dokumentiere die Lösung. Deshalb sind mir reale Projekte und kontinuierliche Arbeit wichtiger als nur viele abgeschlossene Tutorials.',
    sources: ['GitHub-Projekte', 'Kanonische Bewerbungsantwort'],
    keywords: ['lernt', 'lernen', 'technologie', 'tutorial'],
  },
  {
    id: 'projects',
    label: 'Welche Projekte zeigen seine Fähigkeiten am besten?',
    answer: 'Als Bewerbungsassistent würde ich drei Projekte zuerst ansehen: VS Web Studio zeigt Vlads aktuelle React/TypeScript-Arbeit mit Mehrsprachigkeit, SEO, Firebase und KI. AirTexno belegt einen produktionsnahen Service-Request- und Attribution-Flow. SABSUS zeigt eine deutlich visuellere, umfangreiche Produktdarstellung und die daraus gelernten Performance-Grenzen. Unfertige Projekte bleiben bewusst außen vor.',
    sources: ['VS Web Studio', 'AirTexno', 'SABSUS'],
    keywords: ['projekt', 'projekte', 'fähigkeiten', 'portfolio', 'airtexno', 'sabsus'],
  },
  {
    id: 'clients',
    label: 'Wie geht er mit Kunden um?',
    answer: 'Ich habe internationale Berufserfahrung und Erfahrung im direkten Umgang mit Menschen und Kunden. In Deutschland trainiere ich zusätzlich gezielt professionelle Kundengespräche auf Deutsch. Mein Ziel ist, zuerst das Problem zu verstehen und erst danach eine Lösung vorzuschlagen.',
    sources: [cvSource, 'Deutsch B2 Beruf'],
    keywords: ['kunde', 'kunden', 'kommunikation', 'menschen'],
  },
  {
    id: 'criticism',
    label: 'Wie reagiert er auf Kritik oder Fehler?',
    answer: 'Wenn ich einen Fehler mache, versuche ich zuerst zu verstehen, warum er passiert ist und wie ich verhindere, dass er sich wiederholt. Kritik ist für mich dann hilfreich, wenn sie konkret ist. Ich muss nicht beweisen, dass meine erste Idee richtig war. Wichtiger ist, dass das Ergebnis besser wird.',
    sources: ['Kanonische Bewerbungsantwort'],
    keywords: ['kritik', 'fehler', 'feedback', 'falsch'],
  },
  {
    id: 'age',
    label: 'Wie alt ist Vlad?',
    answer: 'Rechnen kann ich – aber im freigegebenen Lebenslauf fehlt das dafür notwendige Geburtsdatum. Aus dem Abiturjahr 2010 oder späteren Stationen ließe sich nur eine grobe Spanne schätzen, kein belegbares Alter. Deshalb nenne ich hier bewusst keine Zahl. Mit einer freigegebenen Geburtsdatum-Angabe könnte ich den aktuellen vollständigen Lebensjahren automatisch berechnen.',
    sources: [cvSource, 'Geburtsdatum nicht dokumentiert'],
    keywords: ['wie alt', 'alter', 'geboren', 'geburtsdatum', 'geburtstag'],
    quick: false,
  },
  {
    id: 'experience',
    label: 'Welche Berufserfahrung bringt er mit?',
    answer: 'Seit Anfang 2023 entwickelt Vlad kontinuierlich Webprojekte. 2024 sammelte er praktische Frontend-Erfahrung bei Angel Systems / SoftRyzen, 2025 folgte ein Full-Stack-Praktikum bei SABSUS mit Frontend- und Backend-Aufgaben. Zuvor arbeitete er international als technischer Spezialist auf Kreuzfahrtschiffen. Diese Stationen verbinden Webentwicklung mit präziser technischer Arbeit, Teamkommunikation und Erfahrung in internationalen Umgebungen.',
    sources: [cvSource],
    keywords: ['berufserfahrung', 'erfahrung', 'praktikum', 'softryzen', 'angel systems', 'kreuzfahrtschiff'],
  },
  {
    id: 'education',
    label: 'Welche Ausbildung und Zertifikate hat er?',
    answer: 'Vlad absolvierte 2023 die Fullstack-Developer-Ausbildung bei der GoIT IT School mit HTML, CSS, JavaScript, React, Node.js, TypeScript und Teamprojekten; das Zertifikat wurde am 24.01.2024 ausgestellt. 2025 nahm er an einer Weiterbildung bei der PBF GmbH in Hildesheim teil. Davor studierte er von 2010 bis 2014 Rechtswissenschaften.',
    sources: [cvSource, 'GoIT-Zertifikat, ID 22798'],
    keywords: ['ausbildung', 'zertifikat', 'goit', 'weiterbildung', 'studium', 'rechtswissenschaft'],
  },
  {
    id: 'languages',
    label: 'Welche Sprachen spricht er?',
    answer: 'Ukrainisch ist Vlads Muttersprache, Russisch spricht er fließend. Deutsch ist auf dem Niveau B2 Beruf belegt; die telc-Prüfung bestand er im Juli 2026. Englisch nutzt er auf grundlegendem Niveau A2.',
    sources: [cvSource, 'telc Deutsch-Test für den Beruf B2, 24.07.2026'],
    keywords: ['sprache', 'sprachen', 'deutsch', 'ukrainisch', 'russisch', 'englisch', 'telc'],
  },
  {
    id: 'stack',
    label: 'Mit welchen Technologien arbeitet er?',
    answer: 'Dokumentiert sind HTML5, CSS3/SASS, JavaScript, TypeScript, React, React Router, Redux Toolkit, Node.js, Express, REST APIs, JWT, MongoDB/Mongoose und Firebase. Im Workflow nutzt Vlad unter anderem Git/GitHub, Vite, Postman, Docker, npm, Hosting und Linux/SSH. Sein aktueller Schwerpunkt liegt klar auf React und TypeScript.',
    sources: [cvSource, 'Öffentliche Projekte'],
    keywords: ['technologien', 'tech stack', 'stack', 'react', 'typescript', 'node', 'firebase', 'mongo'],
    quick: false,
  },
  {
    id: 'profile',
    label: 'Wie lässt sich sein Profil kurz zusammenfassen?',
    answer: 'Vlad ist ein praxisorientierter Webentwickler mit Schwerpunkt React, TypeScript, responsive Benutzeroberflächen und REST APIs. Er setzt komplette Lösungen von der Idee bis zum Deployment um und verbindet seine Webpraxis mit internationaler technischer Berufserfahrung, strukturierter Kundenkommunikation und kontinuierlicher Weiterbildung.',
    sources: [cvSource, 'Öffentliche Projekte'],
    keywords: ['profil', 'zusammenfassen', 'wer ist vlad', 'über ihn'],
    quick: false,
  },
  {
    id: 'previous-work',
    label: 'Was hat er vor der Webentwicklung gemacht?',
    answer: 'Vor der Webentwicklung arbeitete Vlad unter anderem als technischer Spezialist für Reparatur, Wartung und Modernisierung von Kreuzfahrtschiffen in internationalen Einsätzen. Weitere Stationen waren ein Sicherheitsdienst mit Arbeit unter Zeitdruck, präzise Möbel- und Holzarbeit sowie eine Tätigkeit als Funker. Diese Erfahrung ist kein Ersatz für Web-Skills, erklärt aber seine technische Ruhe, Zuverlässigkeit und Teamorientierung.',
    sources: [cvSource],
    keywords: ['vor webentwicklung', 'früher', 'vorher', 'marine', 'sicherheitsdienst', 'funker', 'tischler'],
    quick: false,
  },
] as const;

export const recruiterQuestions = questions;
export const quickRecruiterQuestions = questions.filter(question => question.quick !== false);

export const findRecruiterAnswer = (input: string): RecruiterQuestion | null => {
  const normalized = input.toLocaleLowerCase('de-DE');
  let best: RecruiterQuestion | null = null;
  let bestScore = 0;

  for (const question of questions) {
    const score = question.keywords.reduce(
      (total, keyword) => total + (normalized.includes(keyword) ? keyword.length : 0),
      0,
    );
    if (score > bestScore) {
      best = question;
      bestScore = score;
    }
  }

  return best;
};

export const unsupportedRecruiterAnswer =
  'Als Bewerbungsassistent kann ich diese Information nicht belegen. Sie ist in der freigegebenen Wissensbasis aus Lebenslauf, GitHub und den ausgewählten Projekten nicht dokumentiert. Bitte fragen Sie Vlad im Gespräch direkt danach.';
