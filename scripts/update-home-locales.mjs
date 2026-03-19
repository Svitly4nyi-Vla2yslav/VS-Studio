import fs from 'node:fs';
import path from 'node:path';

const HOME_UPDATES = {
  de: {
    hero: {
      bento: {
        speed: { label: 'Geschwindigkeit', value: '90+ Lighthouse' },
        seo: { label: 'SEO', value: 'Technisches Fundament' },
        leads: { label: 'Anfragen', value: 'Klare CTA und Formulare' },
        support: { label: 'Support', value: 'Nach dem Launch' },
      },
    },
    partnersSection: {
      title: 'Vorteile und Einsatzbereiche',
      desc: 'Welche Aufgaben wir abdecken und fÃ¼r welche lokalen Unternehmen wir am hÃ¤ufigsten Websites und Lead-Funnels umsetzen.',
    },
    marquee: {
      aria: 'Branchen',
      title: 'Branchen, mit denen wir arbeiten',
      desc: 'WÃ¤hlen Sie eine Richtung und sehen Sie passende Stilbeispiele. So bauen wir schneller ein prÃ¤zises Angebot fÃ¼r Ihr Unternehmen.',
      items: {
        handwerk: 'Handwerk',
        praxen: 'Praxen',
        werkstaetten: 'WerkstÃ¤tten',
        gastronomie: 'Gastronomie',
        beauty: 'Beauty',
        immobilien: 'Immobilien',
        kanzlei: 'Kanzlei',
        fitness: 'Fitness',
        reinigung: 'Reinigung',
        transport: 'Transport',
        coaching: 'Coaching',
        bildung: 'Bildung',
      },
    },
    process: {
      title: 'Wie wir arbeiten',
      desc: 'Ein transparenter Prozess ohne unnÃ¶tige Schritte: vom kurzen Briefing bis zu Launch und Optimierung mit klaren Deadlines.',
      aria: 'Projektphasen',
      stage: 'Phase',
      nav: { prev: 'ZurÃ¼ck', next: 'Weiter' },
      steps: {
        s1: { title: '15-Minuten-Call', text: 'Wir klÃ¤ren Aufgabe, KPI und Deadline und stimmen sofort das Launch-Format ab.' },
        s2: { title: 'Prototyp in 48h', text: 'Wir zeigen Seitenstruktur, CTA und Lead-Flow vor der Entwicklung.' },
        s3: { title: 'Entwicklung in 7-14 Tagen', text: 'Umsetzung, SEO-Basis, Integrationen und Analytics ohne unnÃ¶tigen Overhead.' },
        s4: { title: 'Launch und Optimierung', text: 'Wir gehen live, prÃ¼fen Conversion und liefern einen 30-Tage-Verbesserungsplan.' },
      },
    },
    projects: {
      title: 'Projekte / Case Studies',
      desc: 'Reale Aufgaben und erwartbare Ergebnisse ohne leere Versprechen. Hover auf einen Case fÃ¼r Live-Preview.',
      cards: {
        c1: {
          title: 'Website fÃ¼r lokale Anfragen',
          description: 'Landingpage mit Fokus auf Formular, Anruf und schnellen Mobile-Kontakt.',
          goal: 'Ziel: mehr Anfragen ohne BudgeterhÃ¶hung',
        },
        c2: {
          title: 'Landingpage fÃ¼r Ads',
          description: 'Separate Seite mit Tracking fÃ¼r Meta- und Google-Kampagnen.',
          goal: 'Erwarteter Effekt: qualifiziertere Leads aus Werbung',
        },
        c3: {
          title: 'Website fÃ¼r Praxis',
          description: 'Klare Leistungsstruktur, FAQ und Online-Termin-Flow.',
          goal: 'Ziel: mehr Terminbuchungen mit weniger RÃ¼ckfragen',
        },
        c4: {
          title: 'Dashboard fÃ¼r Leads',
          description: 'Internes Interface zur Lead-Bearbeitung und Statuskontrolle.',
          goal: 'Erwarteter Effekt: schnellere Bearbeitung von Anfragen',
        },
      },
    },
    configurator: {
      title: 'Angebots-Konfigurator',
      desc: 'WÃ¤hlen Sie Projektparameter und erhalten Sie einen Startpreis sowie passende Support-Tarife.',
      labels: {
        goal: 'Ziel',
        integrations: 'Integrationen',
        ads: 'Werbung',
        term: 'Zeitrahmen',
        content: 'Content-Level',
        languages: 'Sprachen',
        hosting: 'Hosting',
        domain: 'Domain',
        pages: 'Seiten',
        seo: 'SEO',
      },
      options: {
        common: { other: 'Andere' },
        goal: { leads: 'Leads', calls: 'Anrufe', booking: 'Buchungen' },
        integrations: { booking: 'Buchung', crm: 'CRM', chat: 'Chat', payments: 'Zahlungen' },
        ads: { none: 'Ohne Werbung', meta: 'Meta', google: 'Google' },
        term: { up_to_7: 'Bis 1 Woche', from_7_to_14: '7-14 Tage', from_14_to_21: '14-21 Tage', from_21_to_30: '21-30 Tage' },
        content: { has: 'Texte vorhanden', copy: 'Copywriting nÃ¶tig' },
        languages: { basic: '1 Sprache', multi: '2+ Sprachen' },
        hosting: { shared: 'Shared Hosting', vps: 'VPS', managed: 'Managed Hosting' },
        domain: { new_domain: 'Neue Domain', existing_domain: 'Domain vorhanden', transfer: 'Domain-Transfer' },
        pages: { one: '1 Seite', up_to_3: 'Bis 3 Seiten', five_plus: '5+ Seiten' },
        seo: { base: 'SEO Base', extended: 'SEO Extended' },
      },
      reset: 'Alles zurÃ¼cksetzen',
      empty: 'WÃ¤hlen Sie mindestens eine Option in jedem Block. Mehrfachauswahl ist mÃ¶glich; bei "Andere" wird keine ZusatzgebÃ¼hr berechnet.',
      recommended: 'Empfohlen:',
      pack: { starter: 'Starter', business: 'Business' },
      launchPrice: 'Startpreis:',
      supportMonthly: 'Support / Monat',
      supportYearly: 'Support / Jahr (-30%)',
      cta: 'Kontaktanfrage und exakter Kostenvoranschlag',
      bullets: {
        prototype: 'Prototyp und Struktur mit Fokus auf Anfragen',
        goal: 'Ziele: {{value}}',
        integrations: 'Integrationen: {{value}}',
        term: 'Zeitrahmen: {{value}}',
        hosting: 'Hosting: {{value}}',
        domain: 'Domain: {{value}}',
        pages: 'Seiten: {{value}}',
        analytics: 'GA4 und Event-Tracking fÃ¼r Formulare/Kontakte',
        copy_true: 'UnterstÃ¼tzung bei Texten und Offer',
        copy_false: 'Wir arbeiten mit Ihren vorhandenen Texten',
        market_note: 'Orientierungspreis unter marktÃ¼blichem Niveau fÃ¼r kleine Unternehmen',
      },
      brief: {
        title: 'Brief aus dem Angebots-Konfigurator:',
        goal: 'Ziel: {{value}}',
        integrations: 'Integrationen: {{value}}',
        ads: 'Werbung: {{value}}',
        term: 'Zeitrahmen: {{value}}',
        content: 'Content: {{value}}',
        languages: 'Sprachen: {{value}}',
        hosting: 'Hosting: {{value}}',
        domain: 'Domain: {{value}}',
        pages: 'Seiten: {{value}}',
        seo: 'SEO: {{value}}',
        launch_price: 'Startpreis: {{value}}',
        support_monthly: 'Support / Monat: {{value}}',
        support_yearly: 'Support / Jahr (-30%): {{value}}',
      },
    },
    trust: {
      title: 'Was Sie in 14 Tagen bekommen',
      desc: 'Konkrete Start-Ergebnisse: eine anfrageorientierte Website, eingerichtete Analytics und ein Plan fÃ¼r weiteres Wachstum.',
      deliverables: {
        d1: { title: 'Prototyp in 48h', text: 'Wir zeigen Struktur und CTA vor dem Coding, damit Entscheidungen planbar bleiben.' },
        d2: { title: 'Website fÃ¼r Anfragen', text: 'Formular, Anruf, Messenger und mobile Version fÃ¼r schnelle Kontaktaufnahme.' },
        d3: { title: 'Analytics und Tracking', text: 'GA4 plus Events, damit sichtbar wird, wo Anfragen entstehen.' },
        d4: { title: '30-Tage-Optimierungsplan', text: 'Klare nÃ¤chste Schritte zur Conversion-Steigerung nach Launch.' },
      },
    },
    faq: {
      desc: 'Antworten auf hÃ¤ufige Fragen zu Timing, Kosten, Launch-Prozess und laufender Betreuung.',
    },
  },
  uk: {
    hero: { bento: { speed: { label: 'Ð¨Ð²Ð¸Ð´ÐºÑ–ÑÑ‚ÑŒ', value: '90+ Lighthouse' }, seo: { label: 'SEO', value: 'Ð¢ÐµÑ…Ð½Ñ–Ñ‡Ð½Ð¸Ð¹ Ñ„ÑƒÐ½Ð´Ð°Ð¼ÐµÐ½Ñ‚' }, leads: { label: 'Ð—Ð°ÑÐ²ÐºÐ¸', value: 'Ð§Ñ–Ñ‚ÐºÑ– CTA Ñ– Ñ„Ð¾Ñ€Ð¼Ð¸' }, support: { label: 'ÐŸÑ–Ð´Ñ‚Ñ€Ð¸Ð¼ÐºÐ°', value: 'ÐŸÑ–ÑÐ»Ñ Ð·Ð°Ð¿ÑƒÑÐºÑƒ' } } },
    partnersSection: { title: 'ÐŸÐµÑ€ÐµÐ²Ð°Ð³Ð¸ Ñ‚Ð° Ð½Ð°Ð¿Ñ€ÑÐ¼ÐºÐ¸', desc: 'Ð¯ÐºÑ– Ð·Ð°Ð´Ð°Ñ‡Ñ– Ð·Ð°ÐºÑ€Ð¸Ð²Ð°Ñ”Ð¼Ð¾ Ñ– Ð´Ð»Ñ ÑÐºÐ¸Ñ… Ð»Ð¾ÐºÐ°Ð»ÑŒÐ½Ð¸Ñ… Ð±Ñ–Ð·Ð½ÐµÑÑ–Ð² Ð½Ð°Ð¹Ñ‡Ð°ÑÑ‚Ñ–ÑˆÐµ Ð·Ð°Ð¿ÑƒÑÐºÐ°Ñ”Ð¼Ð¾ ÑÐ°Ð¹Ñ‚Ð¸ Ñ‚Ð° Ð²Ð¾Ñ€Ð¾Ð½ÐºÐ¸ Ð¿Ñ€Ð¾Ð´Ð°Ð¶Ñ–Ð².' },
    marquee: { aria: 'ÐÑ–ÑˆÑ–', title: 'ÐÑ–ÑˆÑ–, Ð· ÑÐºÐ¸Ð¼Ð¸ Ð¿Ñ€Ð°Ñ†ÑŽÑ”Ð¼Ð¾', desc: 'ÐžÐ±ÐµÑ€Ñ–Ñ‚ÑŒ Ð½Ð°Ð¿Ñ€ÑÐ¼ Ñ– Ð¿ÐµÑ€ÐµÐ³Ð»ÑÐ½ÑŒÑ‚Ðµ Ð¿Ñ€Ð¸ÐºÐ»Ð°Ð´Ð¸ ÑÑ‚Ð¸Ð»ÑŽ. Ð¦Ðµ Ð´Ð¾Ð¿Ð¾Ð¼Ð¾Ð¶Ðµ ÑˆÐ²Ð¸Ð´ÑˆÐµ Ð·Ñ–Ð±Ñ€Ð°Ñ‚Ð¸ Ñ‚Ð¾Ñ‡Ð½Ð¸Ð¹ Ð¾Ñ„ÐµÑ€ Ð¿Ñ–Ð´ Ð²Ð°Ñˆ Ð±Ñ–Ð·Ð½ÐµÑ.', items: { handwerk: 'ÐœÐ°Ð¹ÑÑ‚Ñ€Ð¸', praxen: 'ÐŸÑ€Ð°ÐºÑ‚Ð¸ÐºÐ¸', werkstaetten: 'ÐœÐ°Ð¹ÑÑ‚ÐµÑ€Ð½Ñ–', gastronomie: 'Ð“Ð°ÑÑ‚Ñ€Ð¾Ð½Ð¾Ð¼Ñ–Ñ', beauty: 'Ð‘Ê¼ÑŽÑ‚Ñ–', immobilien: 'ÐÐµÑ€ÑƒÑ…Ð¾Ð¼Ñ–ÑÑ‚ÑŒ', kanzlei: 'ÐšÐ°Ð½Ñ†ÐµÐ»ÑÑ€Ñ–Ñ', fitness: 'Ð¤Ñ–Ñ‚Ð½ÐµÑ', reinigung: 'ÐšÐ»Ñ–Ð½Ñ–Ð½Ð³', transport: 'Ð¢Ñ€Ð°Ð½ÑÐ¿Ð¾Ñ€Ñ‚', coaching: 'ÐšÐ¾ÑƒÑ‡Ð¸Ð½Ð³', bildung: 'ÐžÑÐ²Ñ–Ñ‚Ð°' } },
    process: { title: 'Ð¯Ðº Ð¼Ð¸ Ð¿Ñ€Ð°Ñ†ÑŽÑ”Ð¼Ð¾', desc: 'ÐŸÑ€Ð¾Ð·Ð¾Ñ€Ð¸Ð¹ Ð¿Ñ€Ð¾Ñ†ÐµÑ Ð±ÐµÐ· Ð·Ð°Ð¹Ð²Ð¸Ñ… ÐµÑ‚Ð°Ð¿Ñ–Ð²: Ð²Ñ–Ð´ ÐºÐ¾Ñ€Ð¾Ñ‚ÐºÐ¾Ð³Ð¾ Ð±Ñ€Ð¸Ñ„Ñƒ Ð´Ð¾ Ð·Ð°Ð¿ÑƒÑÐºÑƒ Ñ‚Ð° Ð¾Ð¿Ñ‚Ð¸Ð¼Ñ–Ð·Ð°Ñ†Ñ–Ñ— Ð· Ñ‡Ñ–Ñ‚ÐºÐ¸Ð¼Ð¸ Ð´ÐµÐ´Ð»Ð°Ð¹Ð½Ð°Ð¼Ð¸.', aria: 'Ð•Ñ‚Ð°Ð¿Ð¸ Ñ€Ð¾Ð±Ð¾Ñ‚Ð¸', stage: 'Ð•Ñ‚Ð°Ð¿', nav: { prev: 'ÐÐ°Ð·Ð°Ð´', next: 'Ð”Ð°Ð»Ñ–' }, steps: { s1: { title: 'Ð”Ð·Ð²Ñ–Ð½Ð¾Ðº 15 Ñ…Ð²', text: 'Ð¤Ñ–ÐºÑÑƒÑ”Ð¼Ð¾ Ð·Ð°Ð´Ð°Ñ‡Ñƒ, KPI Ñ– Ð´ÐµÐ´Ð»Ð°Ð¹Ð½. ÐžÐ´Ñ€Ð°Ð·Ñƒ Ð¿Ð¾Ð³Ð¾Ð´Ð¶ÑƒÑ”Ð¼Ð¾ Ñ„Ð¾Ñ€Ð¼Ð°Ñ‚ Ð·Ð°Ð¿ÑƒÑÐºÑƒ.' }, s2: { title: 'ÐŸÑ€Ð¾Ñ‚Ð¾Ñ‚Ð¸Ð¿ 48 Ð³Ð¾Ð´', text: 'ÐŸÐ¾ÐºÐ°Ð·ÑƒÑ”Ð¼Ð¾ ÑÑ‚Ñ€ÑƒÐºÑ‚ÑƒÑ€Ñƒ ÑÑ‚Ð¾Ñ€Ñ–Ð½ÐºÐ¸, CTA Ñ– ÑÑ†ÐµÐ½Ð°Ñ€Ñ–Ð¹ Ð·Ð°ÑÐ²ÐºÐ¸ Ð´Ð¾ Ñ€Ð¾Ð·Ñ€Ð¾Ð±ÐºÐ¸.' }, s3: { title: 'Ð Ð¾Ð·Ñ€Ð¾Ð±ÐºÐ° 7-14 Ð´Ð½Ñ–Ð²', text: 'Ð’ÐµÑ€ÑÑ‚ÐºÐ°, SEO-Ð±Ð°Ð·Ð°, Ñ–Ð½Ñ‚ÐµÐ³Ñ€Ð°Ñ†Ñ–Ñ— Ñ‚Ð° Ð°Ð½Ð°Ð»Ñ–Ñ‚Ð¸ÐºÐ° Ð±ÐµÐ· Ð·Ð°Ð¹Ð²Ð¾Ð³Ð¾ ÑˆÑƒÐ¼Ñƒ.' }, s4: { title: 'Ð—Ð°Ð¿ÑƒÑÐº Ñ‚Ð° Ð¾Ð¿Ñ‚Ð¸Ð¼Ñ–Ð·Ð°Ñ†Ñ–Ñ', text: 'Ð—Ð°Ð¿ÑƒÑÐºÐ°Ñ”Ð¼Ð¾, Ð¿ÐµÑ€ÐµÐ²Ñ–Ñ€ÑÑ”Ð¼Ð¾ ÐºÐ¾Ð½Ð²ÐµÑ€ÑÑ–Ñ— Ñ– Ð´Ð°Ñ”Ð¼Ð¾ Ð¿Ð»Ð°Ð½ Ð¿Ð¾ÐºÑ€Ð°Ñ‰ÐµÐ½ÑŒ Ð½Ð° 30 Ð´Ð½Ñ–Ð².' } } },
    projects: { title: 'ÐŸÑ€Ð¾Ñ”ÐºÑ‚Ð¸ / ÐšÐµÐ¹ÑÐ¸', desc: 'Ð ÐµÐ°Ð»ÑŒÐ½Ñ– Ð·Ð°Ð´Ð°Ñ‡Ñ– Ñ‚Ð° Ð¿Ñ€Ð¾Ð³Ð½Ð¾Ð·Ð¾Ð²Ð°Ð½Ð¸Ð¹ Ñ€ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚ Ð±ÐµÐ· Ð¿Ð¾Ñ€Ð¾Ð¶Ð½Ñ–Ñ… Ð¾Ð±Ñ–Ñ†ÑÐ½Ð¾Ðº. ÐÐ°Ð²ÐµÐ´Ñ–Ñ‚ÑŒ ÐºÑƒÑ€ÑÐ¾Ñ€ Ð½Ð° ÐºÐµÐ¹Ñ, Ñ‰Ð¾Ð± Ð¿Ð¾Ð±Ð°Ñ‡Ð¸Ñ‚Ð¸ live preview.', cards: { c1: { title: 'Ð¡Ð°Ð¹Ñ‚ Ð¿Ñ–Ð´ Ð»Ð¾ÐºÐ°Ð»ÑŒÐ½Ñ– Ð·Ð°ÑÐ²ÐºÐ¸', description: 'Ð›ÐµÐ½Ð´Ñ–Ð½Ð³ Ð· Ð°ÐºÑ†ÐµÐ½Ñ‚Ð¾Ð¼ Ð½Ð° Ñ„Ð¾Ñ€Ð¼Ñƒ, Ð´Ð·Ð²Ñ–Ð½Ð¾Ðº Ñ– ÑˆÐ²Ð¸Ð´ÐºÐ¸Ð¹ ÐºÐ¾Ð½Ñ‚Ð°ÐºÑ‚ Ð· Ð¼Ð¾Ð±Ñ–Ð»ÑŒÐ½Ð¾Ð³Ð¾.', goal: 'Ð¦Ñ–Ð»ÑŒ: Ð±Ñ–Ð»ÑŒÑˆÐµ Ð·Ð°ÑÐ²Ð¾Ðº Ð±ÐµÐ· Ð·Ð±Ñ–Ð»ÑŒÑˆÐµÐ½Ð½Ñ Ð±ÑŽÐ´Ð¶ÐµÑ‚Ñƒ' }, c2: { title: 'Ð¡Ñ‚Ð¾Ñ€Ñ–Ð½ÐºÐ° Ð¿Ñ–Ð´ Ñ€ÐµÐºÐ»Ð°Ð¼Ñƒ', description: 'ÐžÐºÑ€ÐµÐ¼Ð° Ð¿Ð¾ÑÐ°Ð´ÐºÐ¾Ð²Ð° ÑÑ‚Ð¾Ñ€Ñ–Ð½ÐºÐ° Ð· Ñ‚Ñ€ÐµÐºÑ–Ð½Ð³Ð¾Ð¼ ÐºÐ°Ð¼Ð¿Ð°Ð½Ñ–Ð¹ Meta/Google.', goal: 'ÐžÑ‡Ñ–ÐºÑƒÐ²Ð°Ð½Ð¸Ð¹ ÐµÑ„ÐµÐºÑ‚: Ñ‡Ð¸ÑÑ‚Ñ–ÑˆÑ– Ð»Ñ–Ð´Ð¸ Ð· Ñ€ÐµÐºÐ»Ð°Ð¼Ð¸' }, c3: { title: 'Ð¡Ð°Ð¹Ñ‚ Ð´Ð»Ñ Ð¿Ñ€Ð°ÐºÑ‚Ð¸ÐºÐ¸', description: 'Ð§Ñ–Ñ‚ÐºÐ° ÑÑ‚Ñ€ÑƒÐºÑ‚ÑƒÑ€Ð° Ð¿Ð¾ÑÐ»ÑƒÐ³, FAQ Ñ‚Ð° ÑÑ†ÐµÐ½Ð°Ñ€Ñ–Ð¹ Ð¾Ð½Ð»Ð°Ð¹Ð½-Ð·Ð°Ð¿Ð¸ÑÑƒ.', goal: 'Ð¦Ñ–Ð»ÑŒ: Ð±Ñ–Ð»ÑŒÑˆÐµ Ð·Ð°Ð¿Ð¸ÑÑ–Ð² Ð±ÐµÐ· Ð·Ð°Ð¹Ð²Ð¸Ñ… Ð´Ð·Ð²Ñ–Ð½ÐºÑ–Ð²' }, c4: { title: 'ÐšÐ°Ð±Ñ–Ð½ÐµÑ‚ Ð´Ð»Ñ Ð·Ð°ÑÐ²Ð¾Ðº', description: 'Ð’Ð½ÑƒÑ‚Ñ€Ñ–ÑˆÐ½Ñ–Ð¹ Ñ–Ð½Ñ‚ÐµÑ€Ñ„ÐµÐ¹Ñ Ð´Ð»Ñ Ð¾Ð±Ñ€Ð¾Ð±ÐºÐ¸ Ð»Ñ–Ð´Ñ–Ð² Ñ– ÐºÐ¾Ð½Ñ‚Ñ€Ð¾Ð»ÑŽ ÑÑ‚Ð°Ñ‚ÑƒÑÑ–Ð².', goal: 'ÐžÑ‡Ñ–ÐºÑƒÐ²Ð°Ð½Ð¸Ð¹ ÐµÑ„ÐµÐºÑ‚: ÑˆÐ²Ð¸Ð´ÑˆÐ° Ð¾Ð±Ñ€Ð¾Ð±ÐºÐ° Ð·Ð°Ð¿Ð¸Ñ‚Ñ–Ð²' } } },
    configurator: { title: 'ÐžÑ„ÐµÑ€-ÐºÐ¾Ð½ÑÑ‚Ñ€ÑƒÐºÑ‚Ð¾Ñ€', desc: 'ÐžÐ±ÐµÑ€Ñ–Ñ‚ÑŒ Ð¿Ð°Ñ€Ð°Ð¼ÐµÑ‚Ñ€Ð¸ Ð¿Ñ€Ð¾Ñ”ÐºÑ‚Ñƒ Ñ‚Ð° Ð¾Ñ‚Ñ€Ð¸Ð¼Ð°Ð¹Ñ‚Ðµ Ð¾Ñ€Ñ–Ñ”Ð½Ñ‚Ð¾Ð²Ð½Ñƒ Ñ†Ñ–Ð½Ñƒ Ð·Ð°Ð¿ÑƒÑÐºÑƒ Ñ– Ñ‚Ð°Ñ€Ð¸Ñ„Ð¸ Ð¿Ñ–Ð´Ñ‚Ñ€Ð¸Ð¼ÐºÐ¸.', labels: { goal: 'Ð¦Ñ–Ð»ÑŒ', integrations: 'Ð†Ð½Ñ‚ÐµÐ³Ñ€Ð°Ñ†Ñ–Ñ—', ads: 'Ð ÐµÐºÐ»Ð°Ð¼Ð°', term: 'Ð¢ÐµÑ€Ð¼Ñ–Ð½', content: 'Ð Ñ–Ð²ÐµÐ½ÑŒ ÐºÐ¾Ð½Ñ‚ÐµÐ½Ñ‚Ñƒ', languages: 'ÐœÐ¾Ð²Ð¸', hosting: 'Ð¥Ð¾ÑÑ‚Ð¸Ð½Ð³', domain: 'Ð”Ð¾Ð¼ÐµÐ½Ð½Ðµ Ñ–Ð¼Ê¼Ñ', pages: 'Ð¡Ñ‚Ð¾Ñ€Ñ–Ð½ÐºÐ¸', seo: 'SEO' }, options: { common: { other: 'Ð†Ð½ÑˆÐµ' }, goal: { leads: 'Leads', calls: 'Calls', booking: 'Booking' }, integrations: { booking: 'Booking', crm: 'CRM', chat: 'Chat', payments: 'Payments' }, ads: { none: 'Ð‘ÐµÐ· Ñ€ÐµÐºÐ»Ð°Ð¼Ð¸', meta: 'Meta', google: 'Google' }, term: { up_to_7: 'Ð”Ð¾ 1 Ñ‚Ð¸Ð¶Ð½Ñ', from_7_to_14: '7-14 Ð´Ð½Ñ–Ð²', from_14_to_21: '14-21 Ð´Ð½Ñ–Ð²', from_21_to_30: '21-30 Ð´Ð½Ñ–Ð²' }, content: { has: 'Ð„ Ñ‚ÐµÐºÑÑ‚Ð¸', copy: 'ÐŸÐ¾Ñ‚Ñ€Ñ–Ð±ÐµÐ½ ÐºÐ¾Ð¿Ñ–Ñ€Ð°Ð¹Ñ‚' }, languages: { basic: '1 Ð¼Ð¾Ð²Ð°', multi: '2+ Ð¼Ð¾Ð²Ð¸' }, hosting: { shared: 'Shared hosting', vps: 'VPS', managed: 'Managed hosting' }, domain: { new_domain: 'ÐÐ¾Ð²Ð¸Ð¹ Ð´Ð¾Ð¼ÐµÐ½', existing_domain: 'Ð’Ð¶Ðµ Ñ” Ð´Ð¾Ð¼ÐµÐ½', transfer: 'ÐŸÐµÑ€ÐµÐ½ÐµÑÐµÐ½Ð½Ñ Ð´Ð¾Ð¼ÐµÐ½Ñƒ' }, pages: { one: '1 ÑÑ‚Ð¾Ñ€Ñ–Ð½ÐºÐ°', up_to_3: 'Ð”Ð¾ 3 ÑÑ‚Ð¾Ñ€Ñ–Ð½Ð¾Ðº', five_plus: '5+ ÑÑ‚Ð¾Ñ€Ñ–Ð½Ð¾Ðº' }, seo: { base: 'SEO Base', extended: 'SEO Extended' } }, reset: 'Ð¡Ñ‚ÐµÑ€Ñ‚Ð¸ Ð²ÑÐµ Ñ– Ð¿Ð¾Ñ‡Ð°Ñ‚Ð¸ Ð·Ð½Ð¾Ð²Ñƒ', empty: 'ÐžÐ±ÐµÑ€Ñ–Ñ‚ÑŒ Ñ…Ð¾Ñ‡Ð° Ð± Ð¾Ð´Ð¸Ð½ Ð²Ð°Ñ€Ñ–Ð°Ð½Ñ‚ Ñƒ ÐºÐ¾Ð¶Ð½Ð¾Ð¼Ñƒ Ð¿ÑƒÐ½ÐºÑ‚Ñ–. ÐœÐ¾Ð¶Ð½Ð° Ð¾Ð±Ð¸Ñ€Ð°Ñ‚Ð¸ Ð´ÐµÐºÑ–Ð»ÑŒÐºÐ° Ð¿Ð¾Ð·Ð¸Ñ†Ñ–Ð¹; Ð´Ð»Ñ Â«Ð†Ð½ÑˆÐµÂ» Ð´Ð¾Ð¿Ð»Ð°Ñ‚Ð° Ð½Ðµ Ð´Ð¾Ð´Ð°Ñ”Ñ‚ÑŒÑÑ.', recommended: 'Ð ÐµÐºÐ¾Ð¼ÐµÐ½Ð´Ð¾Ð²Ð°Ð½Ð¾:', pack: { starter: 'Starter', business: 'Business' }, launchPrice: 'ÐžÑ€Ñ–Ñ”Ð½Ñ‚Ð¾Ð²Ð½Ð° Ð²Ð°Ñ€Ñ‚Ñ–ÑÑ‚ÑŒ Ð·Ð°Ð¿ÑƒÑÐºÑƒ:', supportMonthly: 'ÐŸÑ–Ð´Ñ‚Ñ€Ð¸Ð¼ÐºÐ° / Ð¼Ñ–ÑÑÑ†ÑŒ', supportYearly: 'ÐŸÑ–Ð´Ñ‚Ñ€Ð¸Ð¼ÐºÐ° / Ñ€Ñ–Ðº (-30%)', cta: 'Ð—Ð°Ð¿Ð¸Ñ‚ Ð½Ð° ÐºÐ¾Ð½Ñ‚Ð°ÐºÑ‚ Ñ– Ñ‚Ð¾Ñ‡Ð½Ð¸Ð¹ ÐºÐ¾ÑˆÑ‚Ð¾Ñ€Ð¸Ñ', bullets: { prototype: 'ÐŸÑ€Ð¾Ñ‚Ð¾Ñ‚Ð¸Ð¿ Ñ– ÑÑ‚Ñ€ÑƒÐºÑ‚ÑƒÑ€Ð° Ð¿Ñ–Ð´ Ð·Ð°ÑÐ²ÐºÐ¸', goal: 'Ð¦Ñ–Ð»Ñ–: {{value}}', integrations: 'Ð†Ð½Ñ‚ÐµÐ³Ñ€Ð°Ñ†Ñ–Ñ—: {{value}}', term: 'Ð¢ÐµÑ€Ð¼Ñ–Ð½Ð¸: {{value}}', hosting: 'Ð¥Ð¾ÑÑ‚Ð¸Ð½Ð³: {{value}}', domain: 'Ð”Ð¾Ð¼ÐµÐ½: {{value}}', pages: 'Ð¡Ñ‚Ð¾Ñ€Ñ–Ð½ÐºÐ¸: {{value}}', analytics: 'ÐŸÑ–Ð´ÐºÐ»ÑŽÑ‡ÐµÐ½Ð½Ñ GA4 Ñ‚Ð° Ð²Ñ–Ð´ÑÑ‚ÐµÐ¶ÐµÐ½Ð½Ñ Ñ„Ð¾Ñ€Ð¼/Ð¿Ð¾Ð´Ñ–Ð¹', copy_true: 'Ð”Ð¾Ð¿Ð¾Ð¼Ð¾Ð³Ð° Ð· Ñ‚ÐµÐºÑÑ‚Ð°Ð¼Ð¸ Ñ‚Ð° Ð¾Ñ„ÐµÑ€Ð¾Ð¼', copy_false: 'ÐŸÑ€Ð°Ñ†ÑŽÑ”Ð¼Ð¾ Ð· Ð²Ð°ÑˆÐ¸Ð¼Ð¸ Ð³Ð¾Ñ‚Ð¾Ð²Ð¸Ð¼Ð¸ Ñ‚ÐµÐºÑÑ‚Ð°Ð¼Ð¸', market_note: 'ÐžÑ€Ñ–Ñ”Ð½Ñ‚Ð¾Ð²Ð½Ð° Ñ†Ñ–Ð½Ð° Ð½Ð¸Ð¶Ñ‡Ð° Ð·Ð° ÑÐµÑ€ÐµÐ´Ð½ÑŒÐ¾Ñ€Ð¸Ð½ÐºÐ¾Ð²Ñƒ Ð´Ð»Ñ Ð¼Ð°Ð»Ð¾Ð³Ð¾ Ð±Ñ–Ð·Ð½ÐµÑÑƒ' }, brief: { title: 'Ð‘Ñ€Ð¸Ñ„ Ð· ÐžÑ„ÐµÑ€-ÐºÐ¾Ð½ÑÑ‚Ñ€ÑƒÐºÑ‚Ð¾Ñ€Ð°:', goal: 'Ð¦Ñ–Ð»ÑŒ: {{value}}', integrations: 'Ð†Ð½Ñ‚ÐµÐ³Ñ€Ð°Ñ†Ñ–Ñ—: {{value}}', ads: 'Ð ÐµÐºÐ»Ð°Ð¼Ð°: {{value}}', term: 'Ð¢ÐµÑ€Ð¼Ñ–Ð½Ð¸: {{value}}', content: 'ÐšÐ¾Ð½Ñ‚ÐµÐ½Ñ‚: {{value}}', languages: 'ÐœÐ¾Ð²Ð¸: {{value}}', hosting: 'Ð¥Ð¾ÑÑ‚Ð¸Ð½Ð³: {{value}}', domain: 'Ð”Ð¾Ð¼ÐµÐ½: {{value}}', pages: 'Ð¡Ñ‚Ð¾Ñ€Ñ–Ð½ÐºÐ¸: {{value}}', seo: 'SEO: {{value}}', launch_price: 'ÐžÑ€Ñ–Ñ”Ð½Ñ‚Ð¾Ð²Ð½Ð° Ñ†Ñ–Ð½Ð° Ð·Ð°Ð¿ÑƒÑÐºÑƒ: {{value}}', support_monthly: 'ÐŸÑ–Ð´Ñ‚Ñ€Ð¸Ð¼ÐºÐ° / Ð¼Ñ–ÑÑÑ†ÑŒ: {{value}}', support_yearly: 'ÐŸÑ–Ð´Ñ‚Ñ€Ð¸Ð¼ÐºÐ° / Ñ€Ñ–Ðº (-30%): {{value}}' } },
    trust: { title: 'Ð©Ð¾ Ð²Ð¸ Ð¾Ñ‚Ñ€Ð¸Ð¼Ð°Ñ”Ñ‚Ðµ Ð·Ð° 14 Ð´Ð½Ñ–Ð²', desc: 'ÐšÐ¾Ð½ÐºÑ€ÐµÑ‚Ð½Ñ– Ñ€ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚Ð¸ Ð½Ð° ÑÑ‚Ð°Ñ€Ñ‚Ñ–: Ð³Ð¾Ñ‚Ð¾Ð²Ð¸Ð¹ ÑÐ°Ð¹Ñ‚ Ð¿Ñ–Ð´ Ð·Ð°ÑÐ²ÐºÐ¸, Ð½Ð°Ð»Ð°ÑˆÑ‚Ð¾Ð²Ð°Ð½Ð° Ð°Ð½Ð°Ð»Ñ–Ñ‚Ð¸ÐºÐ° Ñ– Ð¿Ð»Ð°Ð½ Ð¿Ð¾Ð´Ð°Ð»ÑŒÑˆÐ¾Ð³Ð¾ Ñ€Ð¾ÑÑ‚Ñƒ.', deliverables: { d1: { title: 'ÐŸÑ€Ð¾Ñ‚Ð¾Ñ‚Ð¸Ð¿ Ð·Ð° 48 Ð³Ð¾Ð´', text: 'ÐŸÐ¾ÐºÐ°Ð·ÑƒÑ”Ð¼Ð¾ ÑÑ‚Ñ€ÑƒÐºÑ‚ÑƒÑ€Ñƒ Ñ– CTA Ñ‰Ðµ Ð´Ð¾ ÐºÐ¾Ð´Ñƒ, Ñ‰Ð¾Ð± Ñ€Ñ–ÑˆÐµÐ½Ð½Ñ Ð±ÑƒÐ»Ð¾ Ð¿Ñ€Ð¾Ð³Ð½Ð¾Ð·Ð¾Ð²Ð°Ð½Ð¸Ð¼.' }, d2: { title: 'Ð“Ð¾Ñ‚Ð¾Ð²Ð¸Ð¹ ÑÐ°Ð¹Ñ‚ Ð¿Ñ–Ð´ Ð·Ð°ÑÐ²ÐºÐ¸', text: 'Ð¤Ð¾Ñ€Ð¼Ð°, Ð´Ð·Ð²Ñ–Ð½Ð¾Ðº, Ð¼ÐµÑÐµÐ½Ð´Ð¶ÐµÑ€ Ñ– Ð¼Ð¾Ð±Ñ–Ð»ÑŒÐ½Ð° Ð²ÐµÑ€ÑÑ–Ñ Ð´Ð»Ñ ÑˆÐ²Ð¸Ð´ÐºÐ¾Ð³Ð¾ Ð·Ð²ÐµÑ€Ð½ÐµÐ½Ð½Ñ.' }, d3: { title: 'ÐÐ½Ð°Ð»Ñ–Ñ‚Ð¸ÐºÐ° Ñ– Ñ‚Ñ€ÐµÐºÑ–Ð½Ð³', text: 'GA4 + Ð¿Ð¾Ð´Ñ–Ñ—, Ñ‰Ð¾Ð± Ð±Ð°Ñ‡Ð¸Ñ‚Ð¸, Ð·Ð²Ñ–Ð´ÐºÐ¸ Ð¿Ñ€Ð¸Ñ…Ð¾Ð´ÑÑ‚ÑŒ Ð·Ð°ÑÐ²ÐºÐ¸.' }, d4: { title: 'ÐŸÐ»Ð°Ð½ Ð¿Ð¾ÐºÑ€Ð°Ñ‰ÐµÐ½ÑŒ Ð½Ð° 30 Ð´Ð½Ñ–Ð²', text: 'Ð§Ñ–Ñ‚ÐºÑ– Ð½Ð°ÑÑ‚ÑƒÐ¿Ð½Ñ– ÐºÑ€Ð¾ÐºÐ¸ Ð´Ð»Ñ Ñ€Ð¾ÑÑ‚Ñƒ ÐºÐ¾Ð½Ð²ÐµÑ€ÑÑ–Ñ— Ð¿Ñ–ÑÐ»Ñ Ð·Ð°Ð¿ÑƒÑÐºÑƒ.' } } },
    faq: { desc: 'Ð’Ñ–Ð´Ð¿Ð¾Ð²Ñ–Ð´Ñ– Ð½Ð° Ñ‡Ð°ÑÑ‚Ñ– Ð¿Ð¸Ñ‚Ð°Ð½Ð½Ñ Ð¿Ñ€Ð¾ ÑÑ‚Ñ€Ð¾ÐºÐ¸, Ð²Ð°Ñ€Ñ‚Ñ–ÑÑ‚ÑŒ, Ð¿Ñ€Ð¾Ñ†ÐµÑ Ð·Ð°Ð¿ÑƒÑÐºÑƒ Ñ‚Ð° Ð¿Ð¾Ð´Ð°Ð»ÑŒÑˆÑƒ Ð¿Ñ–Ð´Ñ‚Ñ€Ð¸Ð¼ÐºÑƒ Ð¿Ñ€Ð¾Ñ”ÐºÑ‚Ñƒ.' },
  },
};

const fallbackFrom = HOME_UPDATES.de;
const targets = ['tr', 'ar', 'pl', 'ku', 'fa', 'it', 'es', 'el', 'ro', 'bg'];

for (const lang of targets) {
  HOME_UPDATES[lang] = JSON.parse(JSON.stringify(HOME_UPDATES.de));
}

const translatedHeaders = {
  tr: { partnersTitle: 'Avantajlar ve odak alanlari', marqueeTitle: 'Calistigimiz sektorler', processTitle: 'Nasil calisiyoruz', projectsTitle: 'Projeler / Vaka calismalari', configuratorTitle: 'Teklif olusturucu', trustTitle: '14 gunde alacaklariniz', faqDesc: 'Surec, maliyet, lansman ve destek hakkinda sik sorulan sorularin cevaplari.' },
  ar: { partnersTitle: 'Ø§Ù„Ù…Ø²Ø§ÙŠØ§ ÙˆÙ…Ø¬Ø§Ù„Ø§Øª Ø§Ù„Ø¹Ù…Ù„', marqueeTitle: 'Ø§Ù„Ù‚Ø·Ø§Ø¹Ø§Øª Ø§Ù„ØªÙŠ Ù†Ø¹Ù…Ù„ Ù…Ø¹Ù‡Ø§', processTitle: 'ÙƒÙŠÙ Ù†Ø¹Ù…Ù„', projectsTitle: 'Ø§Ù„Ù…Ø´Ø§Ø±ÙŠØ¹ / Ø¯Ø±Ø§Ø³Ø§Øª Ø§Ù„Ø­Ø§Ù„Ø©', configuratorTitle: 'Ù…ÙÙ†Ø´Ø¦ Ø§Ù„Ø¹Ø±Ø¶', trustTitle: 'Ù…Ø§ Ø§Ù„Ø°ÙŠ Ø³ØªØ­ØµÙ„ Ø¹Ù„ÙŠÙ‡ Ø®Ù„Ø§Ù„ 14 ÙŠÙˆÙ…Ø§', faqDesc: 'Ø§Ø¬Ø§Ø¨Ø§Øª Ø¹Ù† Ø§Ù„Ø§Ø³Ø¦Ù„Ø© Ø§Ù„Ø´Ø§Ø¦Ø¹Ø© Ø­ÙˆÙ„ Ø§Ù„Ù…Ø¯Ø© ÙˆØ§Ù„ØªÙƒÙ„ÙØ© ÙˆØ§Ø·Ù„Ø§Ù‚ Ø§Ù„Ù…Ø´Ø±ÙˆØ¹ ÙˆØ§Ù„Ø¯Ø¹Ù… Ø¨Ø¹Ø¯ Ø§Ù„Ø§Ø·Ù„Ø§Ù‚.' },
  pl: { partnersTitle: 'Korzyści i obszary działania', marqueeTitle: 'Branże, z którymi pracujemy', processTitle: 'Jak pracujemy', projectsTitle: 'Projekty / case studies', configuratorTitle: 'Kalkulator oferty', trustTitle: 'Co otrzymasz w 14 dni', faqDesc: 'Odpowiedzi na najczęstsze pytania o terminy, koszty, wdrożenie i wsparcie po starcie.' },
  ku: { partnersTitle: 'Feyde Ã» qada xebatÃª', marqueeTitle: 'BeÅŸÃªn ku em bi wan re dixebitin', processTitle: 'Em Ã§awa dixebitin', projectsTitle: 'Proje / Case study', configuratorTitle: 'SazkerÃª pÃªÅŸniyarÃª', trustTitle: 'Di 14 rojan de tu Ã§i distÃ®nÃ®', faqDesc: 'BersivÃªn pirsÃªn gelemperÃ® derbarÃª dem, nirx, destpÃªk Ã» piÅŸtgiriyÃª.' },
  fa: { partnersTitle: 'Ù…Ø²Ø§ÛŒØ§ Ùˆ Ø­ÙˆØ²Ù‡ Ù‡Ø§ÛŒ Ú©Ø§Ø±ÛŒ', marqueeTitle: 'ØµÙ†Ø¹Øª Ù‡Ø§ÛŒÛŒ Ú©Ù‡ Ø¨Ø§ Ø¢Ù†Ù‡Ø§ Ú©Ø§Ø± Ù…ÛŒ Ú©Ù†ÛŒÙ…', processTitle: 'Ú†Ø·ÙˆØ± Ú©Ø§Ø± Ù…ÛŒ Ú©Ù†ÛŒÙ…', projectsTitle: 'Ù¾Ø±ÙˆÚ˜Ù‡ Ù‡Ø§ / Ù†Ù…ÙˆÙ†Ù‡ Ú©Ø§Ø±Ù‡Ø§', configuratorTitle: 'Ø³Ø§Ø²Ù†Ø¯Ù‡ Ù¾ÛŒØ´Ù†Ù‡Ø§Ø¯', trustTitle: 'Ø¯Ø± 14 Ø±ÙˆØ² Ú†Ù‡ Ø¯Ø±ÛŒØ§ÙØª Ù…ÛŒ Ú©Ù†ÛŒØ¯', faqDesc: 'Ù¾Ø§Ø³Ø® Ø¨Ù‡ Ø³ÙˆØ§Ù„Ø§Øª Ø±Ø§ÛŒØ¬ Ø¯Ø±Ø¨Ø§Ø±Ù‡ Ø²Ù…Ø§Ù†ØŒ Ù‡Ø²ÛŒÙ†Ù‡ØŒ ÙØ±Ø§ÛŒÙ†Ø¯ Ù„Ø§Ù†Ú† Ùˆ Ù¾Ø´ØªÛŒØ¨Ø§Ù†ÛŒ Ø¨Ø¹Ø¯ Ø§Ø² Ù„Ø§Ù†Ú†.' },
  it: { partnersTitle: 'Vantaggi e aree di lavoro', marqueeTitle: 'Settori con cui lavoriamo', processTitle: 'Come lavoriamo', projectsTitle: 'Progetti / Case study', configuratorTitle: 'Configuratore offerta', trustTitle: 'Cosa ottieni in 14 giorni', faqDesc: 'Risposte alle domande frequenti su tempi, costi, lancio e supporto continuo.' },
  es: { partnersTitle: 'Ventajas y areas de trabajo', marqueeTitle: 'Sectores con los que trabajamos', processTitle: 'Como trabajamos', projectsTitle: 'Proyectos / Casos de estudio', configuratorTitle: 'Configurador de oferta', trustTitle: 'Lo que recibes en 14 dias', faqDesc: 'Respuestas a preguntas frecuentes sobre plazos, costes, lanzamiento y soporte continuo.' },
  el: { partnersTitle: 'Î Î»ÎµÎ¿Î½ÎµÎºÏ„Î·Î¼Î±Ï„Î± ÎºÎ±Î¹ Ï„Î¿Î¼ÎµÎ¹Ï‚', marqueeTitle: 'ÎšÎ»Î±Î´Î¿Î¹ Î¼Îµ Ï„Î¿Ï…Ï‚ Î¿Ï€Î¿Î¹Î¿Ï…Ï‚ Î´Î¿Ï…Î»ÎµÏ…Î¿Ï…Î¼Îµ', processTitle: 'Î Ï‰Ï‚ Î´Î¿Ï…Î»ÎµÏ…Î¿Ï…Î¼Îµ', projectsTitle: 'Î•ÏÎ³Î± / ÎœÎµÎ»ÎµÏ„ÎµÏ‚ Ï€ÎµÏÎ¹Ï€Ï„Ï‰ÏƒÎ·Ï‚', configuratorTitle: 'Î”Î¹Î±Î¼Î¿ÏÏ†Ï‰Ï„Î·Ï‚ Ï€ÏÎ¿ÏƒÏ†Î¿ÏÎ±Ï‚', trustTitle: 'Î¤Î¹ Î¸Î± Ï€Î±ÏÎµÎ¹Ï‚ ÏƒÎµ 14 Î·Î¼ÎµÏÎµÏ‚', faqDesc: 'Î‘Ï€Î±Î½Ï„Î·ÏƒÎµÎ¹Ï‚ ÏƒÎµ ÏƒÏ…Ï‡Î½ÎµÏ‚ ÎµÏÏ‰Ï„Î·ÏƒÎµÎ¹Ï‚ Î³Î¹Î± Ï‡ÏÎ¿Î½Î¿, ÎºÎ¿ÏƒÏ„Î¿Ï‚, Î»Î±Î½ÏƒÎ±ÏÎ¹ÏƒÎ¼Î± ÎºÎ±Î¹ Ï…Ï€Î¿ÏƒÏ„Î·ÏÎ¹Î¾Î·.' },
  ro: { partnersTitle: 'Avantaje si directii', marqueeTitle: 'Nisele cu care lucram', processTitle: 'Cum lucram', projectsTitle: 'Proiecte / Studii de caz', configuratorTitle: 'Configurator oferta', trustTitle: 'Ce primesti in 14 zile', faqDesc: 'Raspunsuri la intrebarile frecvente despre termen, cost, lansare si suport continuu.' },
  bg: { partnersTitle: 'ÐŸÑ€ÐµÐ´Ð¸Ð¼ÑÑ‚Ð²Ð° Ð¸ Ð¿Ð¾ÑÐ¾ÐºÐ¸', marqueeTitle: 'ÐÐ¸ÑˆÐ¸, Ñ ÐºÐ¾Ð¸Ñ‚Ð¾ Ñ€Ð°Ð±Ð¾Ñ‚Ð¸Ð¼', processTitle: 'ÐšÐ°Ðº Ñ€Ð°Ð±Ð¾Ñ‚Ð¸Ð¼', projectsTitle: 'ÐŸÑ€Ð¾ÐµÐºÑ‚Ð¸ / ÐšÐ°Ð·ÑƒÑÐ¸', configuratorTitle: 'ÐšÐ¾Ð½Ñ„Ð¸Ð³ÑƒÑ€Ð°Ñ‚Ð¾Ñ€ Ð½Ð° Ð¾Ñ„ÐµÑ€Ñ‚Ð°', trustTitle: 'ÐšÐ°ÐºÐ²Ð¾ Ð¿Ð¾Ð»ÑƒÑ‡Ð°Ð²Ð°Ñ‚Ðµ Ð·Ð° 14 Ð´Ð½Ð¸', faqDesc: 'ÐžÑ‚Ð³Ð¾Ð²Ð¾Ñ€Ð¸ Ð½Ð° Ñ‡ÐµÑÑ‚Ð¸ Ð²ÑŠÐ¿Ñ€Ð¾ÑÐ¸ Ð·Ð° ÑÑ€Ð¾Ðº, Ñ†ÐµÐ½Ð°, ÑÑ‚Ð°Ñ€Ñ‚Ð¸Ñ€Ð°Ð½Ðµ Ð¸ Ð¿Ð¾ÑÐ»ÐµÐ´Ð²Ð°Ñ‰Ð° Ð¿Ð¾Ð´Ð´Ñ€ÑŠÐ¶ÐºÐ°.' },
};

for (const [lang, text] of Object.entries(translatedHeaders)) {
  HOME_UPDATES[lang].partnersSection.title = text.partnersTitle;
  HOME_UPDATES[lang].marquee.title = text.marqueeTitle;
  HOME_UPDATES[lang].process.title = text.processTitle;
  HOME_UPDATES[lang].projects.title = text.projectsTitle;
  HOME_UPDATES[lang].configurator.title = text.configuratorTitle;
  HOME_UPDATES[lang].trust.title = text.trustTitle;
  HOME_UPDATES[lang].faq.desc = text.faqDesc;
}

function deepMerge(target, source) {
  const output = { ...target };
  for (const [key, value] of Object.entries(source)) {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      output[key] = deepMerge(target[key] || {}, value);
    } else {
      output[key] = value;
    }
  }
  return output;
}

const localesRoot = path.join(process.cwd(), 'public', 'locales');
const langs = ['de', 'uk', ...targets];

for (const lang of langs) {
  const filePath = path.join(localesRoot, lang, 'translation.json');
  const raw = fs.readFileSync(filePath, 'utf8').replace(/^\uFEFF/, '');
  const content = JSON.parse(raw);
  const patch = HOME_UPDATES[lang] || fallbackFrom;
  content.home = deepMerge(content.home || {}, patch);
  fs.writeFileSync(filePath, `${JSON.stringify(content, null, 2)}\n`, 'utf8');
}

console.log('Updated HomePage i18n keys in all locales.');

