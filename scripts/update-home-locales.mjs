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
      desc: 'Welche Aufgaben wir abdecken und für welche lokalen Unternehmen wir am häufigsten Websites und Lead-Funnels umsetzen.',
    },
    marquee: {
      aria: 'Branchen',
      title: 'Branchen, mit denen wir arbeiten',
      desc: 'Wählen Sie eine Richtung und sehen Sie passende Stilbeispiele. So bauen wir schneller ein präzises Angebot für Ihr Unternehmen.',
      items: {
        handwerk: 'Handwerk',
        praxen: 'Praxen',
        werkstaetten: 'Werkstätten',
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
      desc: 'Ein transparenter Prozess ohne unnötige Schritte: vom kurzen Briefing bis zu Launch und Optimierung mit klaren Deadlines.',
      aria: 'Projektphasen',
      stage: 'Phase',
      nav: { prev: 'Zurück', next: 'Weiter' },
      steps: {
        s1: { title: '15-Minuten-Call', text: 'Wir klären Aufgabe, KPI und Deadline und stimmen sofort das Launch-Format ab.' },
        s2: { title: 'Prototyp in 48h', text: 'Wir zeigen Seitenstruktur, CTA und Lead-Flow vor der Entwicklung.' },
        s3: { title: 'Entwicklung in 7-14 Tagen', text: 'Umsetzung, SEO-Basis, Integrationen und Analytics ohne unnötigen Overhead.' },
        s4: { title: 'Launch und Optimierung', text: 'Wir gehen live, prüfen Conversion und liefern einen 30-Tage-Verbesserungsplan.' },
      },
    },
    projects: {
      title: 'Projekte / Case Studies',
      desc: 'Reale Aufgaben und erwartbare Ergebnisse ohne leere Versprechen. Hover auf einen Case für Live-Preview.',
      cards: {
        c1: {
          title: 'Website für lokale Anfragen',
          description: 'Landingpage mit Fokus auf Formular, Anruf und schnellen Mobile-Kontakt.',
          goal: 'Ziel: mehr Anfragen ohne Budgeterhöhung',
        },
        c2: {
          title: 'Landingpage für Ads',
          description: 'Separate Seite mit Tracking für Meta- und Google-Kampagnen.',
          goal: 'Erwarteter Effekt: qualifiziertere Leads aus Werbung',
        },
        c3: {
          title: 'Website für Praxis',
          description: 'Klare Leistungsstruktur, FAQ und Online-Termin-Flow.',
          goal: 'Ziel: mehr Terminbuchungen mit weniger Rückfragen',
        },
        c4: {
          title: 'Dashboard für Leads',
          description: 'Internes Interface zur Lead-Bearbeitung und Statuskontrolle.',
          goal: 'Erwarteter Effekt: schnellere Bearbeitung von Anfragen',
        },
      },
    },
    configurator: {
      title: 'Angebots-Konfigurator',
      desc: 'Wählen Sie Projektparameter und erhalten Sie einen Startpreis sowie passende Support-Tarife.',
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
        content: { has: 'Texte vorhanden', copy: 'Copywriting nötig' },
        languages: { basic: '1 Sprache', multi: '2+ Sprachen' },
        hosting: { shared: 'Shared Hosting', vps: 'VPS', managed: 'Managed Hosting' },
        domain: { new_domain: 'Neue Domain', existing_domain: 'Domain vorhanden', transfer: 'Domain-Transfer' },
        pages: { one: '1 Seite', up_to_3: 'Bis 3 Seiten', five_plus: '5+ Seiten' },
        seo: { base: 'SEO Base', extended: 'SEO Extended' },
      },
      reset: 'Alles zurücksetzen',
      empty: 'Wählen Sie mindestens eine Option in jedem Block. Mehrfachauswahl ist möglich; bei "Andere" wird keine Zusatzgebühr berechnet.',
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
        analytics: 'GA4 und Event-Tracking für Formulare/Kontakte',
        copy_true: 'Unterstützung bei Texten und Offer',
        copy_false: 'Wir arbeiten mit Ihren vorhandenen Texten',
        market_note: 'Orientierungspreis unter marktüblichem Niveau für kleine Unternehmen',
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
      desc: 'Konkrete Start-Ergebnisse: eine anfrageorientierte Website, eingerichtete Analytics und ein Plan für weiteres Wachstum.',
      deliverables: {
        d1: { title: 'Prototyp in 48h', text: 'Wir zeigen Struktur und CTA vor dem Coding, damit Entscheidungen planbar bleiben.' },
        d2: { title: 'Website für Anfragen', text: 'Formular, Anruf, Messenger und mobile Version für schnelle Kontaktaufnahme.' },
        d3: { title: 'Analytics und Tracking', text: 'GA4 plus Events, damit sichtbar wird, wo Anfragen entstehen.' },
        d4: { title: '30-Tage-Optimierungsplan', text: 'Klare nächste Schritte zur Conversion-Steigerung nach Launch.' },
      },
    },
    faq: {
      desc: 'Antworten auf häufige Fragen zu Timing, Kosten, Launch-Prozess und laufender Betreuung.',
    },
  },
  uk: {
    hero: { bento: { speed: { label: 'Швидкість', value: '90+ Lighthouse' }, seo: { label: 'SEO', value: 'Технічний фундамент' }, leads: { label: 'Заявки', value: 'Чіткі CTA і форми' }, support: { label: 'Підтримка', value: 'Після запуску' } } },
    partnersSection: { title: 'Переваги та напрямки', desc: 'Які задачі закриваємо і для яких локальних бізнесів найчастіше запускаємо сайти та воронки продажів.' },
    marquee: { aria: 'Ніші', title: 'Ніші, з якими працюємо', desc: 'Оберіть напрям і перегляньте приклади стилю. Це допоможе швидше зібрати точний офер під ваш бізнес.', items: { handwerk: 'Майстри', praxen: 'Практики', werkstaetten: 'Майстерні', gastronomie: 'Гастрономія', beauty: 'Бʼюті', immobilien: 'Нерухомість', kanzlei: 'Канцелярія', fitness: 'Фітнес', reinigung: 'Клінінг', transport: 'Транспорт', coaching: 'Коучинг', bildung: 'Освіта' } },
    process: { title: 'Як ми працюємо', desc: 'Прозорий процес без зайвих етапів: від короткого брифу до запуску та оптимізації з чіткими дедлайнами.', aria: 'Етапи роботи', stage: 'Етап', nav: { prev: 'Назад', next: 'Далі' }, steps: { s1: { title: 'Дзвінок 15 хв', text: 'Фіксуємо задачу, KPI і дедлайн. Одразу погоджуємо формат запуску.' }, s2: { title: 'Прототип 48 год', text: 'Показуємо структуру сторінки, CTA і сценарій заявки до розробки.' }, s3: { title: 'Розробка 7-14 днів', text: 'Верстка, SEO-база, інтеграції та аналітика без зайвого шуму.' }, s4: { title: 'Запуск та оптимізація', text: 'Запускаємо, перевіряємо конверсії і даємо план покращень на 30 днів.' } } },
    projects: { title: 'Проєкти / Кейси', desc: 'Реальні задачі та прогнозований результат без порожніх обіцянок. Наведіть курсор на кейс, щоб побачити live preview.', cards: { c1: { title: 'Сайт під локальні заявки', description: 'Лендінг з акцентом на форму, дзвінок і швидкий контакт з мобільного.', goal: 'Ціль: більше заявок без збільшення бюджету' }, c2: { title: 'Сторінка під рекламу', description: 'Окрема посадкова сторінка з трекінгом кампаній Meta/Google.', goal: 'Очікуваний ефект: чистіші ліди з реклами' }, c3: { title: 'Сайт для практики', description: 'Чітка структура послуг, FAQ та сценарій онлайн-запису.', goal: 'Ціль: більше записів без зайвих дзвінків' }, c4: { title: 'Кабінет для заявок', description: 'Внутрішній інтерфейс для обробки лідів і контролю статусів.', goal: 'Очікуваний ефект: швидша обробка запитів' } } },
    configurator: { title: 'Офер-конструктор', desc: 'Оберіть параметри проєкту та отримайте орієнтовну ціну запуску і тарифи підтримки.', labels: { goal: 'Ціль', integrations: 'Інтеграції', ads: 'Реклама', term: 'Термін', content: 'Рівень контенту', languages: 'Мови', hosting: 'Хостинг', domain: 'Доменне імʼя', pages: 'Сторінки', seo: 'SEO' }, options: { common: { other: 'Інше' }, goal: { leads: 'Leads', calls: 'Calls', booking: 'Booking' }, integrations: { booking: 'Booking', crm: 'CRM', chat: 'Chat', payments: 'Payments' }, ads: { none: 'Без реклами', meta: 'Meta', google: 'Google' }, term: { up_to_7: 'До 1 тижня', from_7_to_14: '7-14 днів', from_14_to_21: '14-21 днів', from_21_to_30: '21-30 днів' }, content: { has: 'Є тексти', copy: 'Потрібен копірайт' }, languages: { basic: '1 мова', multi: '2+ мови' }, hosting: { shared: 'Shared hosting', vps: 'VPS', managed: 'Managed hosting' }, domain: { new_domain: 'Новий домен', existing_domain: 'Вже є домен', transfer: 'Перенесення домену' }, pages: { one: '1 сторінка', up_to_3: 'До 3 сторінок', five_plus: '5+ сторінок' }, seo: { base: 'SEO Base', extended: 'SEO Extended' } }, reset: 'Стерти все і почати знову', empty: 'Оберіть хоча б один варіант у кожному пункті. Можна обирати декілька позицій; для «Інше» доплата не додається.', recommended: 'Рекомендовано:', pack: { starter: 'Starter', business: 'Business' }, launchPrice: 'Орієнтовна вартість запуску:', supportMonthly: 'Підтримка / місяць', supportYearly: 'Підтримка / рік (-30%)', cta: 'Запит на контакт і точний кошторис', bullets: { prototype: 'Прототип і структура під заявки', goal: 'Цілі: {{value}}', integrations: 'Інтеграції: {{value}}', term: 'Терміни: {{value}}', hosting: 'Хостинг: {{value}}', domain: 'Домен: {{value}}', pages: 'Сторінки: {{value}}', analytics: 'Підключення GA4 та відстеження форм/подій', copy_true: 'Допомога з текстами та офером', copy_false: 'Працюємо з вашими готовими текстами', market_note: 'Орієнтовна ціна нижча за середньоринкову для малого бізнесу' }, brief: { title: 'Бриф з Офер-конструктора:', goal: 'Ціль: {{value}}', integrations: 'Інтеграції: {{value}}', ads: 'Реклама: {{value}}', term: 'Терміни: {{value}}', content: 'Контент: {{value}}', languages: 'Мови: {{value}}', hosting: 'Хостинг: {{value}}', domain: 'Домен: {{value}}', pages: 'Сторінки: {{value}}', seo: 'SEO: {{value}}', launch_price: 'Орієнтовна ціна запуску: {{value}}', support_monthly: 'Підтримка / місяць: {{value}}', support_yearly: 'Підтримка / рік (-30%): {{value}}' } },
    trust: { title: 'Що ви отримаєте за 14 днів', desc: 'Конкретні результати на старті: готовий сайт під заявки, налаштована аналітика і план подальшого росту.', deliverables: { d1: { title: 'Прототип за 48 год', text: 'Показуємо структуру і CTA ще до коду, щоб рішення було прогнозованим.' }, d2: { title: 'Готовий сайт під заявки', text: 'Форма, дзвінок, месенджер і мобільна версія для швидкого звернення.' }, d3: { title: 'Аналітика і трекінг', text: 'GA4 + події, щоб бачити, звідки приходять заявки.' }, d4: { title: 'План покращень на 30 днів', text: 'Чіткі наступні кроки для росту конверсії після запуску.' } } },
    faq: { desc: 'Відповіді на часті питання про строки, вартість, процес запуску та подальшу підтримку проєкту.' },
  },
};

const fallbackFrom = HOME_UPDATES.de;
const targets = ['tr', 'ar', 'pl', 'ku', 'fa', 'it', 'es', 'el', 'ro', 'bg'];

for (const lang of targets) {
  HOME_UPDATES[lang] = JSON.parse(JSON.stringify(HOME_UPDATES.de));
}

const translatedHeaders = {
  tr: { partnersTitle: 'Avantajlar ve odak alanlari', marqueeTitle: 'Calistigimiz sektorler', processTitle: 'Nasil calisiyoruz', projectsTitle: 'Projeler / Vaka calismalari', configuratorTitle: 'Teklif olusturucu', trustTitle: '14 gunde alacaklariniz', faqDesc: 'Surec, maliyet, lansman ve destek hakkinda sik sorulan sorularin cevaplari.' },
  ar: { partnersTitle: 'المزايا ومجالات العمل', marqueeTitle: 'القطاعات التي نعمل معها', processTitle: 'كيف نعمل', projectsTitle: 'المشاريع / دراسات الحالة', configuratorTitle: 'مُنشئ العرض', trustTitle: 'ما الذي ستحصل عليه خلال 14 يوما', faqDesc: 'اجابات عن الاسئلة الشائعة حول المدة والتكلفة واطلاق المشروع والدعم بعد الاطلاق.' },
  pl: { partnersTitle: 'Korzyści i obszary działania', marqueeTitle: 'Branze, z ktorymi pracujemy', processTitle: 'Jak pracujemy', projectsTitle: 'Projekty / Case studies', configuratorTitle: 'Kalkulator oferty', trustTitle: 'Co otrzymasz w 14 dni', faqDesc: 'Odpowiedzi na najczestsze pytania o terminy, koszty, wdrozenie i wsparcie po starcie.' },
  ku: { partnersTitle: 'Feyde û qada xebatê', marqueeTitle: 'Beşên ku em bi wan re dixebitin', processTitle: 'Em çawa dixebitin', projectsTitle: 'Proje / Case study', configuratorTitle: 'Sazkerê pêşniyarê', trustTitle: 'Di 14 rojan de tu çi distînî', faqDesc: 'Bersivên pirsên gelemperî derbarê dem, nirx, destpêk û piştgiriyê.' },
  fa: { partnersTitle: 'مزایا و حوزه های کاری', marqueeTitle: 'صنعت هایی که با آنها کار می کنیم', processTitle: 'چطور کار می کنیم', projectsTitle: 'پروژه ها / نمونه کارها', configuratorTitle: 'سازنده پیشنهاد', trustTitle: 'در 14 روز چه دریافت می کنید', faqDesc: 'پاسخ به سوالات رایج درباره زمان، هزینه، فرایند لانچ و پشتیبانی بعد از لانچ.' },
  it: { partnersTitle: 'Vantaggi e aree di lavoro', marqueeTitle: 'Settori con cui lavoriamo', processTitle: 'Come lavoriamo', projectsTitle: 'Progetti / Case study', configuratorTitle: 'Configuratore offerta', trustTitle: 'Cosa ottieni in 14 giorni', faqDesc: 'Risposte alle domande frequenti su tempi, costi, lancio e supporto continuo.' },
  es: { partnersTitle: 'Ventajas y areas de trabajo', marqueeTitle: 'Sectores con los que trabajamos', processTitle: 'Como trabajamos', projectsTitle: 'Proyectos / Casos de estudio', configuratorTitle: 'Configurador de oferta', trustTitle: 'Lo que recibes en 14 dias', faqDesc: 'Respuestas a preguntas frecuentes sobre plazos, costes, lanzamiento y soporte continuo.' },
  el: { partnersTitle: 'Πλεονεκτηματα και τομεις', marqueeTitle: 'Κλαδοι με τους οποιους δουλευουμε', processTitle: 'Πως δουλευουμε', projectsTitle: 'Εργα / Μελετες περιπτωσης', configuratorTitle: 'Διαμορφωτης προσφορας', trustTitle: 'Τι θα παρεις σε 14 ημερες', faqDesc: 'Απαντησεις σε συχνες ερωτησεις για χρονο, κοστος, λανσαρισμα και υποστηριξη.' },
  ro: { partnersTitle: 'Avantaje si directii', marqueeTitle: 'Nisele cu care lucram', processTitle: 'Cum lucram', projectsTitle: 'Proiecte / Studii de caz', configuratorTitle: 'Configurator oferta', trustTitle: 'Ce primesti in 14 zile', faqDesc: 'Raspunsuri la intrebarile frecvente despre termen, cost, lansare si suport continuu.' },
  bg: { partnersTitle: 'Предимства и посоки', marqueeTitle: 'Ниши, с които работим', processTitle: 'Как работим', projectsTitle: 'Проекти / Казуси', configuratorTitle: 'Конфигуратор на оферта', trustTitle: 'Какво получавате за 14 дни', faqDesc: 'Отговори на чести въпроси за срок, цена, стартиране и последваща поддръжка.' },
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
