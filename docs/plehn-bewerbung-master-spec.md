# Plehn Media Bewerbung – MASTER SPEC

## Goal
Build a highly personalized application landing page for the plehn media role `Web- & KI-Umsetzer:in (Webtechnik, Design & Conversion)`.

The page itself must be a proof-of-work. It should demonstrate React/TypeScript, practical AI usage, conversion thinking, design workflow, honest self-assessment, and the ability to turn an idea into a polished implementation.

Do not build a generic portfolio page. Do not build a brochure. Build a recruiter-facing product experience.

Primary route: `/plehn`
Primary UI language: German.
Tech names may remain English.

---

# 1. Existing project constraints

Use the existing VS-Studio codebase and conventions.

Existing useful parts:
- React 19
- TypeScript
- React Router
- styled-components
- Framer Motion
- existing `TerminalType` component on the Contact page
- existing AI assistant architecture under `src/features/ai-assistant`
- existing `AssistantPanel`, `AssistantOrb`, `useAssistant`
- existing CV PDF and project URLs/config where available

Do not rewrite unrelated pages.
Do not expose API keys or secrets in the client.
Do not invent project facts or professional experience.

The page should be isolated enough that it can later be reused for another employer by changing a small configuration object.

Recommended structure:

```txt
src/pages/PlehnApplication/
  index.tsx
  PlehnApplication.styled.ts
  applicationData.ts
  recruiterQuestions.ts
  components/
    AnimatedHero.tsx
    RecruiterAssistant.tsx
    CaseStudy.tsx
    MotionWorkflow.tsx
    AIWorkbench.tsx
    VideoSection.tsx
    EmploymentReason.tsx
    SkillsMatrix.tsx
    EvasiveBookingButton.tsx
```

A different structure is acceptable if it fits the repository better.

---

# 2. Visual direction

Reference the Figma file created for this application:
`https://www.figma.com/design/xRlWD90Xg0913bseOpMcFx`

Use the updated `Plehn Media Bewerbung – Landing Demo v2` frame as visual reference.

Visual identity:
- dark premium background, almost black / deep charcoal
- VS Web Studio gold as primary accent
- turquoise/cyan as secondary technology accent
- subtle electric blue for depth
- strong white typography
- muted cool gray body text
- modern rounded panels, but avoid a page made only of repetitive cards
- large typography and generous spacing
- strong visual rhythm
- premium, technical, creative, not gaming/neon-chaos

Approximate tokens:

```css
--bg: #07090d;
--surface: #0e1218;
--surface-2: #131923;
--text: #f7f8fa;
--muted: #9ba3b0;
--gold: #efb33e;
--cyan: #33e0d1;
--blue: #316bf9;
--line: #292f3b;
```

Content max width on desktop: roughly 1180–1220 px.

Breakpoints to validate manually:
- 1440
- 1024
- 768
- 390

No visible text overlap at any breakpoint.

---

# 3. Hero – must feel alive

Headline:

`Ich könnte Ihnen schreiben, dass ich KI nutze. Ich zeige es lieber.`

The headline must type itself like a live terminal/text writer.
Reuse the existing `TerminalType` logic if practical.

Behavior:
- start only when hero is visible
- 35–45 ms per character as a starting point
- blinking cursor around 650–750 ms
- run once only
- keep the final text after typing
- do not restart on small re-renders
- `prefers-reduced-motion`: render complete text immediately

Hero support text:

`Eine Bewerbung als kleines Produkt: echte Projekte, echte Grenzen, echte KI-Workflows. Nicht nur erzählen, sondern zeigen.`

Primary CTA:
`KI-Assistent testen`

Secondary CTA:
`80-Sekunden-Demo ansehen`

Secondary top navigation links:
- GitHub
- Lebenslauf PDF

Show stack badges, but keep them visually secondary:
- React 19
- TypeScript
- Node.js
- OpenAI API
- GitHub
- Figma
- Canva

## Hero background motion

Add 3 very large blurred gradient blobs behind the hero content.

Suggested layers:
- warm gold blob
- blue blob
- turquoise blob

Motion:
- duration 18–24 seconds per loop
- translate 30–80 px
- scale 1.0 → max 1.15
- opacity around 0.12–0.24
- blur around 80–140 px
- very slow movement
- no sudden direction changes
- do not reduce text contrast
- reduced-motion => completely static

The hero should feel alive, not busy.

---

# 4. Recruiter AI assistant

Create a separate application/recruiter mode. Do not simply expose the generic business assistant.

The assistant may answer only from approved, grounded information:
- current CV
- GitHub profile and selected repositories
- VS Web Studio
- AirTexno
- SABSUS
- current Figma application design
- approved Canva motion case
- documented languages/certificates
- documented work history

Never invent a skill.
Never claim professional TYPO3/Shopware/Astro/Python experience if it is not proven.
When uncertain, explicitly say so.

The assistant can answer in first person as Vlad when a pre-written canonical answer exists. Otherwise clearly identify itself as `Bewerbungsassistent`.

## Quick questions

Show these as recruiter quick actions:

1. `Was sind Vlads größte Stärken?`
2. `Was sind seine Schwächen?`
3. `Was kann er heute noch nicht gut?`
4. `Warum passt er zu plehn media?`
5. `Warum sucht er eine Festanstellung, wenn er VS Web Studio aufbaut?`
6. `Wo sieht er sich in fünf Jahren?`
7. `Wo sieht er sich in zehn Jahren?`
8. `Wie arbeitet er mit KI?`
9. `Wie lernt er neue Technologien?`
10. `Welche Projekte zeigen seine Fähigkeiten am besten?`
11. `Wie geht er mit Kunden um?`
12. `Wie reagiert er auf Kritik oder Fehler?`

## Canonical seed answers

### Strengths
`Meine größten Stärken sind Ausdauer, Lernfähigkeit und praktische Umsetzung. Seit Anfang 2023 arbeite ich kontinuierlich an Webprojekten und verbessere meine Fähigkeiten Schritt für Schritt. Wenn ich etwas noch nicht kann, versuche ich nicht, es schöner darzustellen, sondern zerlege das Problem, recherchiere, baue einen ersten funktionierenden Ansatz und verbessere ihn weiter. Genau diese Arbeitsweise sieht man auch in meinem GitHub-Verlauf und meinen Projekten.`

### Weaknesses
`Eine Schwäche von mir ist, dass ich mich für neue Ideen sehr schnell begeistern kann und dadurch manchmal zu viele Dinge gleichzeitig ausprobieren möchte. Ich habe deshalb begonnen, Aufgaben stärker zu priorisieren und zuerst eine funktionierende Version fertigzustellen, bevor ich zusätzliche Ideen einbaue. Außerdem ist mein Deutsch trotz bestandenem B2 Beruf noch nicht so mühelos wie meine Muttersprache. Ich arbeite aber regelmäßig daran, besonders an Kundengesprächen und klarer Argumentation.`

### What he cannot yet do well
`Mein stärkster Bereich ist aktuell React/TypeScript und moderne Webentwicklung. TYPO3, Shopware und Astro gehören noch nicht zu meinen stärksten praktischen Bereichen. Python nutze ich bisher nicht auf demselben Niveau wie JavaScript/TypeScript. Ich würde diese Lücken deshalb nicht verstecken, sondern gezielt in echten Aufgaben ausbauen.`

### Why plehn media
`Die Rolle passt zu mir, weil sie nicht nur reine Entwicklung verlangt. Mich interessiert genau die Verbindung aus Webtechnik, Design, Conversion und KI. Ich möchte nicht nur Komponenten programmieren, sondern verstehen, warum eine Seite gebaut wird, wie Nutzer reagieren und wie Technik ein messbares Ergebnis unterstützen kann.`

### Why employment despite VS Web Studio
`Ich würde langfristig lieber in einem guten Team Verantwortung übernehmen, als allein dauerhaft Entwicklung, Vertrieb und Bürokratie gleichzeitig zu jonglieren. VS Web Studio ist mein Weg, während der Jobsuche nicht stehenzubleiben und meine Fähigkeiten praktisch weiterzuentwickeln. Eine passende Festanstellung bleibt für mich die attraktivere langfristige Perspektive.`

### In five years
`In fünf Jahren möchte ich ein Entwickler sein, dem man ein reales Problem geben kann und nicht nur eine einzelne Komponente. Ich möchte technisch deutlich stärker sein, aber gleichzeitig Anforderungen, Nutzer und geschäftliche Ziele besser verstehen. Besonders wichtig ist mir, Verantwortung für komplette Features und ihre Qualität übernehmen zu können.`

### In ten years
`In zehn Jahren sehe ich mich nicht unbedingt in einer bestimmten Jobbezeichnung. Mir ist wichtiger, dass ich fachlich so weit bin, komplexe digitale Produkte von der Idee bis zur Umsetzung mitgestalten zu können. Ich könnte mir eine Rolle mit mehr technischer und produktbezogener Verantwortung vorstellen, möchte aber weiterhin selbst nah an der Umsetzung bleiben.`

### How he works with AI
`Ich nutze KI nicht nur zum Generieren von Text. Ich setze sie als Arbeitswerkzeug für Recherche, Varianten, Strukturierung, Code-Analyse, Debugging, Dokumentation, Ideenvergleich und Prototyping ein. Wichtig ist mir, Ergebnisse zu prüfen und KI nicht als Ersatz für Verständnis zu behandeln. Diese Bewerbungsseite ist bewusst selbst ein Beispiel dafür: Idee, Figma-Konzept, strukturierte Prompts, Code, Tests und Conversion-Überlegungen greifen zusammen.`

### How he learns
`Ich lerne am besten praktisch. Ich lese die Grundlagen, probiere ein kleines Beispiel und übertrage es möglichst schnell auf ein echtes Projekt. Wenn etwas nicht funktioniert, analysiere ich den Fehler und dokumentiere die Lösung. Deshalb sind mir reale Projekte und kontinuierliche Arbeit wichtiger als nur viele abgeschlossene Tutorials.`

### Client communication
`Ich habe internationale Berufserfahrung und Erfahrung im direkten Umgang mit Menschen und Kunden. In Deutschland trainiere ich zusätzlich gezielt professionelle Kundengespräche auf Deutsch. Mein Ziel ist, zuerst das Problem zu verstehen und erst danach eine Lösung vorzuschlagen.`

### Criticism and errors
`Wenn ich einen Fehler mache, versuche ich zuerst zu verstehen, warum er passiert ist und wie ich verhindere, dass er sich wiederholt. Kritik ist für mich dann hilfreich, wenn sie konkret ist. Ich muss nicht beweisen, dass meine erste Idee richtig war. Wichtiger ist, dass das Ergebnis besser wird.`

If a user asks for a fact not supported by the approved knowledge base, answer honestly that it is not documented.

Voice mode is a later enhancement. Text MVP first.

---

# 5. Projects must be real case studies

Do NOT show LeadFlow yet.

Use these public-facing cases:

## Case 1 – VS Web Studio

Purpose:
Show current production-oriented work and overall maturity.

Structure:
- Problem / Ziel
- Meine Rolle
- Umsetzung
- Tech
- Ergebnis
- Learning
- Live link
- GitHub link
- large screenshot or visual preview

Content direction:
- React/TypeScript
- multilingual UX
- SEO / Local SEO
- pricing and service structure
- contact/lead flows
- Firebase
- AI assistant
- deployment

Core learning:
`Eine Website ist kein isoliertes UI. Sie ist Teil eines Vertriebs-, Informations- und Serviceprozesses.`

## Case 2 – AirTexno

Purpose:
Show business workflow thinking instead of only design.

Highlight:
- lead/order/business workflows
- data flows
- automation
- dashboard/operational logic
- backend/API work where supported
- deployment/documentation

Do not invent metrics.

## Case 3 – SABSUS

Use the existing public SABSUS repositories as evidence.

Purpose:
Show visual implementation, heavier graphics/UI and learning from performance limitations.

Be honest:
The project is visually intensive and can be performance-heavy.
Turn this into a learning point:

`Viele Grafiken und Effekte haben mir gezeigt, wie schnell visuelle Qualität Performance kosten kann. Seitdem achte ich stärker auf Rendering, Lazy Loading und Performance-Budgets.`

## Case 4 – Design workflow

This is not a fake client project.
It is a process case:

`Briefing → KI-Recherche → Figma → Canva Motion → Code → Test → Conversion`

Show:
- Figma application demo
- Canva motion piece
- implementation screenshot
- final landing page

Each case study should visually alternate preview/content where useful.
Avoid four identical cards in a grid.

Hover behavior:
- subtle 3–5 px lift
- soft glow
- no 3D flip cards

---

# 6. Canva Motion Case

Do not create a static slide that says `I use AI`.
The point is to demonstrate motion storytelling and process thinking.

Create a short 12–18 second motion sequence in Canva.

Title:
`Wie ich mit KI arbeite`

Sequence:

1. `Briefing`
   - a short client/problem note appears
   - subtle fade/slide

2. `Recherche mit KI`
   - prompt appears
   - 2–3 result options branch out
   - one option is selected/highlighted

3. `Figma-Prototyp`
   - wireframe rectangles assemble into a UI
   - layout snaps into place

4. `Code`
   - short code lines animate in
   - React/TypeScript labels appear

5. `Test`
   - responsive sizes / accessibility / performance checks appear
   - check marks resolve

6. `Conversion`
   - CTA + small funnel/graph appears
   - final line: `Nicht nur bauen. Verstehen, testen, verbessern.`

Motion direction:
- premium
- dark background
- gold/cyan accents
- smooth easing
- no cartoon effects
- no hyperactive TikTok pacing
- loopable if possible
- 12–18 sec total

Use this as a proof of Canva ability inside the application page.

---

# 7. KI-Werkbank

The old `Conversion Copilot` concept was too hard to understand.
Rename it to:

`KI-Werkbank`

Purpose:
Demonstrate in a tiny interactive example how AI can support conversion work.

Desktop:
Show a compact example by default.

Mobile:
Collapsed by default with button:
`Kleine KI-Demo ausprobieren`

Input example:
- Produkt: `Shopware-Plugin`
- Zielgruppe: `Shopware-Agenturen`
- aktuelle Headline: `Mehr Effizienz für Ihren Shop`

Output:
- Variante A
- Variante B
- CTA
- one short A/B hypothesis

The section must be understandable within 10 seconds.
It is optional, not the main story.

---

# 8. Video section

No autoplay.

Target duration: 70–80 seconds.

Video UI:
- 16:9 poster
- play button
- `80 Sekunden · Deutsch`
- subtitles available
- transcript beside it on desktop
- transcript below on mobile

## Final script

### 0–8s
`Hallo Herr Plehn. Ich könnte Ihnen einfach erzählen, dass ich gerne mit KI arbeite. Für diese Stelle fand ich es sinnvoller, es direkt zu zeigen.`

Visual:
Hero + cursor typing.

### 8–20s
`Deshalb habe ich für meine Bewerbung diese kleine Seite gebaut. Hier kann mein Bewerbungsassistent Fragen zu meinem Lebenslauf, meinen Projekten, meinen Stärken, aber auch zu meinen Schwächen beantworten.`

Visual:
Open recruiter assistant and click one quick question.

### 20–38s
`Mein Schwerpunkt liegt heute auf React und TypeScript. VS Web Studio zeigt meine aktuelle Arbeit mit Webentwicklung, SEO, Leads und KI. AirTexno zeigt stärker Geschäftsprozesse und Automatisierung. Und bei SABSUS habe ich intensiv mit visuellen Oberflächen gearbeitet.`

Visual:
Cycle through three cases.

### 38–50s
`Ich nutze KI aber nicht nur beim Programmieren. Für Konzepte und Kommunikation arbeite ich auch mit Figma und Canva. Von der Idee über den Prototyp bis zur Umsetzung versuche ich, den gesamten Prozess zu verstehen.`

Visual:
Show Figma and Canva motion workflow.

### 50–65s
`Vielleicht fragen Sie sich, warum ich eine Stelle suche, obwohl ich VS Web Studio aufbaue. Die Antwort ist ziemlich einfach: Ich würde langfristig lieber in einem guten Team Verantwortung übernehmen, als allein gleichzeitig Entwickler, Verkäufer und Bürokratie-Abteilung zu sein.`

Visual:
Camera + employment reason section.

### 65–78s
`Wenn Sie neugierig geworden sind, sehen Sie sich gerne meinen GitHub an oder vereinbaren Sie direkt einen kurzen Termin mit mir. Dann zeige ich Ihnen lieber echten Code als noch eine weitere Bewerbungsfloskel. Vielen Dank für Ihre Zeit.`

Visual:
Booking CTA.

Subtitles should be available by default.

---

# 9. Employment reason section

Question:
`Warum suche ich eine Festanstellung, wenn ich VS Web Studio aufbaue?`

Answer:
`Ich würde langfristig lieber in einem guten Team Verantwortung übernehmen, als allein dauerhaft Entwicklung, Vertrieb und Bürokratie gleichzeitig zu jonglieren. VS Web Studio ist mein Weg, während der Jobsuche nicht stehenzubleiben. Eine passende Festanstellung bleibt für mich die attraktivere langfristige Perspektive.`

Typewriter behavior:
- start around 30–40% viewport intersection
- once only
- keep final text
- no restart on scroll back
- reduced motion => static text immediately

---

# 10. Skills section

Two columns desktop, one column mobile.

## Das bringe ich mit
- React / TypeScript
- Node.js / REST APIs
- Responsive UI / UX
- SEO / Conversion Grundlagen
- KI-gestützte Entwicklung
- GitHub / Deployment
- Figma / Canva Workflow

## Das baue ich gerade aus
- Astro
- TYPO3
- Shopware
- Python für Automationen
- GEO / agent-ready web

Do not use percentage skill bars.

---

# 11. Booking CTA

Final heading:

`Wenn Sie bis hier gelesen haben, hat die Bewerbung ihren Job schon halb erfüllt.`

Supporting text:
`Der Rest lässt sich besser in 20 Minuten Gespräch klären als in weiteren 800 Wörtern.`

Primary button:
`Gespräch vereinbaren`

Use a configurable `bookingUrl`.
Do not hardcode a fake URL.

Preferred booking flow:
Google Calendar Appointment Schedule → Google Meet.
Zoom can be added later if a real booking integration exists.

## Playful evasive button

Desktop pointer only.

Behavior:
- first hover/approach: move 40–70 px away
- second approach: move again
- optional third and final small move
- then stop permanently and remain clickable
- max 2–3 evasions
- never move off-screen
- never overlap important content
- keyboard focus must never trigger evasion
- touch: disabled
- reduced motion: disabled

Microcopy after final evade:
`Okay. Ein kleines bisschen mussten Sie noch um mich kämpfen. 🙂`

The joke must not block conversion.

---

# 12. Motion system

General section reveal:
- opacity 0 → 1
- y 28 → 0
- duration 500–700 ms
- optional child stagger 60–90 ms
- once only

Do not animate every paragraph.
Reserve stronger animation for:
- hero
- recruiter assistant
- case study previews
- Canva workflow
- employment reason typewriter
- final CTA

Respect `prefers-reduced-motion` everywhere.

---

# 13. Language QA

All visible application UI should be German.

Replace labels such as:
- `Selected Work` → `Case Studies` or `Projekte`
- `Recruiter Mode` → remove or `Recruiter-Ansicht`
- `Mini Tool` → `Kleine KI-Demo`
- `Input/Output` → `Eingabe/Ergebnis`

Technology/product names may remain English.

Check umlauts and German punctuation.

---

# 14. SEO / privacy

Use a specific title and description for `/plehn`.

Suggested title:
`Vladyslav Svitlychnyi × plehn media | Web, KI & Conversion`

This is a personalized application page, so consider `noindex, nofollow` unless there is a deliberate reason to index it.

Do not expose private application data beyond what is already intentionally public.

---

# 15. Accessibility

Must support:
- keyboard navigation
- visible focus styles
- semantic headings
- buttons as buttons, links as links
- sufficient contrast
- reduced motion
- accessible video controls
- transcript
- alt text for meaningful project images

The evasive CTA must remain fully keyboard-accessible.

---

# 16. Performance

Hero animation must not destroy performance.
Prefer CSS transforms/opacity and Framer Motion transform animations.
Avoid huge continuously repainting filters when possible.
If heavy blur blobs cause frame drops, pre-render gradients or simplify them.

Lazy-load:
- video
- heavy case-study images
- optional KI-Werkbank

Do not load voice functionality in MVP.

---

# 17. Responsive behavior

## 1440
- max content ~1200 px
- case studies can use alternating 2-column layout
- transcript beside video

## 1024
- hero remains spacious
- AI panel may stack if needed
- case studies may still use reduced two-column layout

## 768
- collapse most two-column sections
- project preview above text
- video transcript below video

## 390
- 20–24 px page padding
- single column
- readable type sizes
- buttons may become full width
- hero badges wrap cleanly
- no horizontal scrolling
- no evasive button behavior

---

# 18. Implementation sequence

1. inspect existing design system and reusable components
2. add `/plehn` lazy route
3. build page shell + data config
4. implement hero + motion
5. build recruiter assistant mode with static/grounded canonical answers first
6. implement case-study sections
7. implement Canva/Figma workflow section
8. implement optional KI-Werkbank
9. implement video section with placeholder/config source
10. implement employment reason typewriter
11. implement skills section
12. implement booking CTA + safe evasive behavior
13. responsive pass
14. accessibility pass
15. lint/build
16. screenshot desktop/mobile and fix visual issues

---

# 19. Definition of Done

Run and pass the repository's available checks. At minimum:

- `npm run lint` if available
- `npm run build`

Also verify:
- no TypeScript errors
- no visible text overlap
- no horizontal overflow at 390 px
- all German UI labels are consistent
- project links work
- GitHub link works
- CV link works
- booking URL is configurable
- AI does not invent facts
- no secret/API key committed
- reduced-motion works
- evasive CTA remains accessible
- no autoplay video
- no LeadFlow public case study

Before declaring completion, provide a short summary of:
- files changed
- important interaction decisions
- any data/links still missing
- screenshots or manual checks performed
