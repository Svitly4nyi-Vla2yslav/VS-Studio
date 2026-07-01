# SEO / UX / Performance Audit Notes

## Was bereits gut war

- Projekt ist React + Vite mit `react-router-dom`.
- Es gibt bereits Layout, Header, Footer, Kontaktseite, Legal-Seiten, SEO-Head-Management und einen SEO-Asset-Generator.
- `public/robots.txt`, `public/sitemap.xml`, Open Graph Bild (`public/og.png`) und Favicons existieren.
- Fonts werden lokal per `@font-face` mit `font-display: swap` eingebunden.
- Kontaktformular nutzt echte Netlify/API-Endpunkte und keine Fake-URL.

## Was verbessert wurde

- Hero der Startseite auf lokales Conversion-Ziel ausgerichtet: Hildesheim/Niedersachsen, mehr Anfragen, klare CTA.
- Neue Startseitenblöcke ergänzt: Zielgruppen, enthaltene Leistungen, Ablauf, Warum VS Web Studio.
- Neue SEO-Routes erstellt:
  - `/webdesign-hildesheim/`
  - `/website-erstellen-lassen/`
  - `/seo-hildesheim/`
  - `/lead-systeme/`
  - `/websites-fuer-handwerker/`
  - `/faq/`
- `/portfolio/` in SEO-Head, sitemap und route-specific HTML aufgenommen.
- Route-spezifische Meta title, description, canonical, robots und Open Graph Daten aktualisiert.
- JSON-LD auf `ProfessionalService` ohne unvollständige postalAddress/geo-Daten bereinigt.
- Brand-Signal für `vs web studio` gestärkt: Homepage-Title beginnt mit `VS Web Studio`, Keywords enthalten Brand-Varianten, Organization schema enthält `alternateName`.
- FAQPage schema für FAQ ergänzt.
- `sitemap.xml` und `robots.txt` über den Build neu generiert.
- Navigation und Footer auf lokale SEO-Seiten, Leistungen, Regionen, Rechtliches und Kontakt ausgerichtet.
- Kontaktformular erweitert: Telefon optional, Website optional, gewünschte Leistung, echte Labels.
- Impressum/Datenschutz Fake-Placeholder durch TODO-Hinweise ersetzt.
- `prefers-reduced-motion` Fallback in Global Styles ergänzt.
- Preise in deutscher Pricing-Übersetzung auf `Preis auf Anfrage` / individuelles Angebot geändert.

## TODO / Risiken

- SPA-Meta werden im Browser per `SeoHead` gesetzt; der Build erzeugt zwar route-specific HTML in `dist`, langfristig wäre Astro/Next.js/SSG oder Prerendering sauberer.
- Impressum und Datenschutzerklärung müssen rechtlich final ergänzt/geprüft werden.
- Offizielle Adresse, Rechtsform, USt-ID, Steuerdaten und Anbieterkennzeichnung fehlen weiterhin.
- Einige Assets sind groß; Vite meldet große Chunks und mehrere Bilder/Videos über 1 MB. Bild-/Video-Komprimierung und weiteres Code-Splitting bleiben Performance-TODO.
- `og-image.jpg` existiert nicht; verwendet wird das vorhandene `public/og.png`.
- Pricing-/Assistant-Daten enthalten in manchen nicht-deutschen internen Datenquellen noch historische Preislogik; sichtbare deutsche Pricing-Texte wurden entschärft.
- Google Ranking für `vs web studio` kann nicht garantiert werden. TODO außerhalb des Codes: Google Search Console einrichten, Domain Property verifizieren, Sitemap einreichen, Indexierung prüfen, Google Business Profile und Social Profiles konsistent mit exakt `VS Web Studio` benennen, erste echte Backlinks/Brand Mentions aufbauen.

## Geänderte Dateien

- `src/App.tsx`
- `src/GlobalStyle.ts`
- `src/components/Header/Header.tsx`
- `src/components/Header/styles/Header.styles.ts`
- `src/components/Footer/Footer.tsx`
- `src/components/Footer/styles/Footer.styles.ts`
- `src/pages/HomePage/HomePage.tsx`
- `src/pages/HomePage/components/HeroSection.tsx`
- `src/pages/HomePage/components/LocalSeoSections.tsx`
- `src/pages/HomePage/components/styles/HeroSection.styles.ts`
- `src/pages/SeoLanding/SeoLanding.tsx`
- `src/pages/Contact/Contact.tsx`
- `src/pages/Contact/Contact.styled.ts`
- `src/seo/seo.ts`
- `src/seo/route-seo.json`
- `scripts/generate-seo-assets.mjs`
- `public/locales/de/translation.json`
- `index.html`
- `public/sitemap.xml`
- `public/robots.txt`
- `dist/` build output

## Self-check

- `npm.cmd run build` erfolgreich.
- TypeScript Build erfolgreich.
- Neue route-specific HTML-Dateien in `dist` erzeugt.
- Sitemap enthält nur vorhandene indexierbare URLs.
- Robots verweist auf `https://vs-web-studio.de/sitemap.xml`.
- Homepage hat weiterhin nur einen H1 im Hero.
- Kontaktformular hat Labels und validiert E-Mail.
- Keine neuen Fake-Impressum-Daten ergänzt.
