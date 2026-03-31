import fs from 'node:fs';
import path from 'node:path';

const projectsByLocale = {
  de: {
    eyebrow: 'Ausgewählte Demo-Projekte',
    title: 'Ausgewählte Websites für lokale Unternehmen',
    desc:
      'Diese ausgewählten Demos zeigen, wie ich Websites für echte lokale Unternehmen aufbaue: klar strukturiert, vertrauenswürdig und auf schnelle Kontaktaufnahme ausgerichtet.',
    benefitLabel: 'Geschäftlicher Nutzen',
    cta: {
      livePreview: 'Demo ansehen',
      github: 'GitHub',
      moreOnGithub: 'Mehr Projekte auf GitHub',
    },
    tags: {
      localLeads: 'Lokale Anfragen',
      services: 'Leistungen',
      fastContact: 'Schneller Kontakt',
      booking: 'Terminbuchung',
      faq: 'Häufige Fragen',
      onePageWebsite: 'Einseitige Website',
      trust: 'Vertrauen',
    },
    items: {
      handwerk: {
        title: 'Website für Heizung, Sanitär und Wärmepumpen',
        description:
          'Eine klare Service-Website für einen lokalen Fachbetrieb. Besucher sehen sofort, welche Leistungen angeboten werden, wo der Betrieb arbeitet und wie sie schnell Kontakt aufnehmen können.',
        benefit:
          'Hilft dabei, schneller Anrufe und Anfragen von Menschen zu bekommen, die bereits einen Handwerker suchen.',
      },
      autoWorkshop: {
        title: 'Website für eine Auto-Werkstatt',
        description:
          'Eine klare Service-Seite mit Leistungen, häufigen Fragen und schnellem Kontakt. Ohne Überladung und ohne unnötige Klicks.',
        benefit:
          'Hilft dabei, Besucher in Buchungen und Anfragen zu verwandeln statt sie nach dem ersten Besuch zu verlieren.',
      },
      singlePageBeautySalon: {
        title: 'Website für ein Kosmetikstudio',
        description:
          'Eine visuell starke einseitige Website, um Leistungen zu präsentieren, Vertrauen aufzubauen und schnelle Terminbuchungen zu fördern.',
        benefit:
          'Hilft dabei, schon auf dem ersten Bildschirm Vertrauen zu schaffen und mehr Buchungen auszulösen.',
      },
    },
  },
  uk: {
    eyebrow: 'Вибрані демо-проекти',
    title: 'Вибрані сайти для локального бізнесу',
    desc:
      'Ці демо-проекти показують, як я створюю сайти для реального локального бізнесу: зрозуміло, акуратно і з фокусом на швидкий контакт із клієнтом.',
    benefitLabel: 'Користь для бізнесу',
    cta: {
      livePreview: 'Відкрити демо',
      github: 'GitHub',
      moreOnGithub: 'Більше проектів на GitHub',
    },
    tags: {
      localLeads: 'Локальні заявки',
      services: 'Послуги',
      fastContact: 'Швидкий контакт',
      booking: 'Запис',
      faq: 'Поширені питання',
      onePageWebsite: 'Односторінковий сайт',
      trust: 'Довіра',
    },
    items: {
      handwerk: {
        title: 'Сайт для послуг з опалення, сантехніки та теплових насосів',
        description:
          'Зрозумілий сервісний сайт для локальної компанії. Відвідувач одразу бачить, які послуги ви надаєте, де працюєте і як швидко з вами зв’язатися.',
        benefit:
          'Допомагає швидше отримувати дзвінки та заявки від людей, які вже шукають майстра.',
      },
      autoWorkshop: {
        title: 'Сайт для автосервісу',
        description:
          'Чітка сервісна сторінка з послугами, частими питаннями та швидким контактом. Без перевантаження і без зайвих кліків.',
        benefit:
          'Допомагає переводити відвідувачів у записи та звернення, а не втрачати їх після першого візиту.',
      },
      singlePageBeautySalon: {
        title: 'Сайт для салону краси',
        description:
          'Візуально сильний односторінковий сайт для презентації послуг, довіри та швидкого запису клієнтів.',
        benefit:
          'Допомагає викликати довіру з першого екрану та збільшувати кількість записів.',
      },
    },
  },
  tr: {
    eyebrow: 'Secili demo projeler',
    title: 'Yerel isletmeler icin secili siteler',
    desc:
      'Bu demo projeler, gercek yerel isletmeler icin nasil web siteleri kurdugumu gosterir: acik, dengeli ve hizli iletisim icin tasarlanmis.',
    benefitLabel: 'Is faydasi',
    cta: {
      livePreview: 'Demoyu ac',
      github: 'GitHub',
      moreOnGithub: "GitHub'da daha fazla proje",
    },
    tags: {
      localLeads: 'Yerel talepler',
      services: 'Hizmetler',
      fastContact: 'Hizli iletisim',
      booking: 'Randevu',
      faq: 'Sik sorulanlar',
      onePageWebsite: 'Tek sayfali site',
      trust: 'Guven',
    },
    items: {
      handwerk: {
        title: 'Isitma, tesisat ve isi pompalari icin web sitesi',
        description:
          'Yerel bir sirket icin acik bir hizmet sitesi. Ziyaretci hangi hizmetleri sundugunuzu, hangi bolgede calistiginizi ve nasil hizli iletisim kuracagini hemen gorur.',
        benefit:
          'Zaten usta arayan kisilerden daha hizli arama ve talep almaya yardim eder.',
      },
      autoWorkshop: {
        title: 'Oto servis icin web sitesi',
        description:
          'Hizmetler, sik sorulan sorular ve hizli iletisim iceren net bir servis sayfasi. Ne kalabalik ne de gereksiz tiklama var.',
        benefit:
          'Ziyaretcileri ilk ziyaret sonrasinda kaybetmek yerine randevu ve iletisime donusturmeye yardim eder.',
      },
      singlePageBeautySalon: {
        title: 'Guzellik salonu icin web sitesi',
        description:
          'Hizmetleri tanitmak, guven olusturmak ve hizli randevu almak icin gorsel olarak guclu tek sayfali bir site.',
        benefit:
          'Ilk ekrandan itibaren guven olusturmaya ve randevu sayisini artirmaya yardim eder.',
      },
    },
  },
  ar: {
    eyebrow: 'مشاريع ديمو مختارة',
    title: 'مواقع مختارة للشركات المحلية',
    desc:
      'هذه المشاريع التجريبية توضح كيف أبني مواقع لشركات محلية حقيقية: بشكل واضح ومتوازن ومصمم ليسهّل التواصل السريع.',
    benefitLabel: 'الفائدة التجارية',
    cta: {
      livePreview: 'فتح الديمو',
      github: 'GitHub',
      moreOnGithub: 'المزيد من المشاريع على GitHub',
    },
    tags: {
      localLeads: 'طلبات محلية',
      services: 'الخدمات',
      fastContact: 'تواصل سريع',
      booking: 'حجز',
      faq: 'الأسئلة الشائعة',
      onePageWebsite: 'موقع من صفحة واحدة',
      trust: 'ثقة',
    },
    items: {
      handwerk: {
        title: 'موقع لخدمات التدفئة والسباكة ومضخات الحرارة',
        description:
          'موقع خدمات واضح لشركة محلية. يرى الزائر فوراً ما هي الخدمات التي تقدمها الشركة وأين تعمل وكيف يمكنه التواصل بسرعة.',
        benefit:
          'يساعد على الحصول بشكل أسرع على مكالمات وطلبات من أشخاص يبحثون بالفعل عن فني.',
      },
      autoWorkshop: {
        title: 'موقع لورشة سيارات',
        description:
          'صفحة خدمات واضحة تحتوي على الخدمات والأسئلة الشائعة ووسائل تواصل سريعة. من دون ازدحام ومن دون نقرات غير ضرورية.',
        benefit:
          'يساعد على تحويل الزوار إلى حجوزات وطلبات تواصل بدلاً من خسارتهم بعد الزيارة الأولى.',
      },
      singlePageBeautySalon: {
        title: 'موقع لصالون تجميل',
        description:
          'موقع بصري قوي من صفحة واحدة لعرض الخدمات وبناء الثقة وتشجيع الحجز السريع.',
        benefit:
          'يساعد على بناء الثقة من أول شاشة وزيادة عدد الحجوزات.',
      },
    },
  },
  pl: {
    eyebrow: 'Wybrane projekty demo',
    title: 'Wybrane strony dla lokalnych firm',
    desc:
      'Te projekty demo pokazują, jak tworzę strony dla prawdziwych lokalnych firm: jasno, estetycznie i z naciskiem na szybki kontakt.',
    benefitLabel: 'Korzyść biznesowa',
    cta: {
      livePreview: 'Otwórz demo',
      github: 'GitHub',
      moreOnGithub: 'Więcej projektów na GitHub',
    },
    tags: {
      localLeads: 'Lokalne zapytania',
      services: 'Usługi',
      fastContact: 'Szybki kontakt',
      booking: 'Rezerwacja',
      faq: 'Najczęstsze pytania',
      onePageWebsite: 'Strona jednostronicowa',
      trust: 'Zaufanie',
    },
    items: {
      handwerk: {
        title: 'Strona dla usług ogrzewania, hydrauliki i pomp ciepła',
        description:
          'Przejrzysta strona usługowa dla lokalnej firmy. Odwiedzający od razu widzi, jakie usługi oferujesz, gdzie działasz i jak szybko może się z Tobą skontaktować.',
        benefit:
          'Pomaga szybciej otrzymywać telefony i formularze od osób, które już szukają fachowca.',
      },
      autoWorkshop: {
        title: 'Strona dla warsztatu samochodowego',
        description:
          'Czytelna strona usługowa z ofertą, najczęstszymi pytaniami i szybkim kontaktem. Bez przeładowania i bez zbędnych kliknięć.',
        benefit:
          'Pomaga zamieniać odwiedzających w rezerwacje i zapytania zamiast tracić ich po pierwszej wizycie.',
      },
      singlePageBeautySalon: {
        title: 'Strona dla salonu urody',
        description:
          'Mocna wizualnie strona jednostronicowa do prezentacji usług, budowania zaufania i szybkiego umawiania klientów.',
        benefit:
          'Pomaga budować zaufanie od pierwszego ekranu i zwiększać liczbę rezerwacji.',
      },
    },
  },
  ku: {
    eyebrow: 'Projeyên demo yên hilbijartî',
    title: 'Malperên hilbijartî ji bo karsaziyên herêmî',
    desc:
      'Van projeyên demo nîşan didin ku ez çawa ji bo karsaziyên herêmî yên rastîn malper ava dikim: zelal, xweşbîn û bi armanca peywendiya zû.',
    benefitLabel: 'Feydeya karsaziyê',
    cta: {
      livePreview: 'Demoyê veke',
      github: 'GitHub',
      moreOnGithub: 'Projeyên din li ser GitHub',
    },
    tags: {
      localLeads: 'Daxwazên herêmî',
      services: 'Xizmet',
      fastContact: 'Peywendiya bilez',
      booking: 'Rezervasyon',
      faq: 'Pirsên gelemperî',
      onePageWebsite: 'Malpera yek-rûpel',
      trust: 'Bawerî',
    },
    items: {
      handwerk: {
        title: 'Malper ji bo xizmetên germkirin, avahî û pompayên germê',
        description:
          'Malperek xizmetê ya zelal ji bo şirketa herêmî. Serdanker di demeke kurt de dibîne ku hûn çi xizmet dikin, li ku derê dixebitin û çawa dikare zû bi we re têkeve peywendiyê.',
        benefit:
          'Alîkarî dike ku zûtir telefon û daxwazên formê ji kesên ku jixwe li pey pispor in bistînin.',
      },
      autoWorkshop: {
        title: 'Malper ji bo tamîrxaneya otomobîlan',
        description:
          'Rûpelek xizmetê ya zelal bi xizmet, pirsên gelemperî û peywendiya bilez. Ne pir tijî ye û ne jî hewceyê klikên zêde heye.',
        benefit:
          'Alîkarî dike ku serdanker bibin rezervasyon û daxwaz, ne ku piştî serdana yekem winda bibin.',
      },
      singlePageBeautySalon: {
        title: 'Malper ji bo salonê bedewiyê',
        description:
          'Malperek yek-rûpel a bi dîtina bihêz ji bo pêşkêşandina xizmet, avakirina baweriyê û rezervasyona bilez a mişteriyan.',
        benefit:
          'Alîkarî dike ku ji yekem ekranê bawerî were çêkirin û hejmara rezervasyonan zêde bibe.',
      },
    },
  },
  fa: {
    eyebrow: 'پروژه‌های دمو منتخب',
    title: 'وب‌سایت‌های منتخب برای کسب‌وکارهای محلی',
    desc:
      'این پروژه‌های دمو نشان می‌دهند که چگونه برای کسب‌وکارهای محلی واقعی سایت می‌سازم: شفاف، متعادل و با تمرکز بر ارتباط سریع.',
    benefitLabel: 'فایده برای کسب‌وکار',
    cta: {
      livePreview: 'باز کردن دمو',
      github: 'GitHub',
      moreOnGithub: 'پروژه‌های بیشتر در GitHub',
    },
    tags: {
      localLeads: 'درخواست‌های محلی',
      services: 'خدمات',
      fastContact: 'ارتباط سریع',
      booking: 'رزرو',
      faq: 'سوالات رایج',
      onePageWebsite: 'سایت تک‌صفحه‌ای',
      trust: 'اعتماد',
    },
    items: {
      handwerk: {
        title: 'سایت برای خدمات گرمایش، لوله‌کشی و پمپ حرارتی',
        description:
          'یک سایت خدماتی شفاف برای یک شرکت محلی. بازدیدکننده فوراً می‌بیند چه خدماتی ارائه می‌دهید، در چه محدوده‌ای کار می‌کنید و چطور می‌تواند سریع با شما تماس بگیرد.',
        benefit:
          'کمک می‌کند سریع‌تر تماس و درخواست از افرادی بگیرید که همین حالا دنبال متخصص هستند.',
      },
      autoWorkshop: {
        title: 'سایت برای تعمیرگاه خودرو',
        description:
          'یک صفحه خدماتی روشن با خدمات، سوالات رایج و تماس سریع. بدون شلوغی و بدون کلیک‌های اضافه.',
        benefit:
          'کمک می‌کند بازدیدکنندگان را به رزرو و درخواست تبدیل کنید، نه اینکه بعد از اولین بازدید آن‌ها را از دست بدهید.',
      },
      singlePageBeautySalon: {
        title: 'سایت برای سالن زیبایی',
        description:
          'یک سایت تک‌صفحه‌ای با هویت بصری قوی برای معرفی خدمات، ایجاد اعتماد و ثبت نوبت سریع مشتریان.',
        benefit:
          'کمک می‌کند از همان صفحه اول اعتماد ایجاد شود و تعداد نوبت‌ها بیشتر شود.',
      },
    },
  },
  it: {
    eyebrow: 'Progetti demo selezionati',
    title: 'Siti selezionati per attività locali',
    desc:
      'Questi progetti demo mostrano come realizzo siti per vere attività locali: chiari, curati e orientati a facilitare il contatto rapido.',
    benefitLabel: 'Vantaggio per il business',
    cta: {
      livePreview: 'Apri demo',
      github: 'GitHub',
      moreOnGithub: 'Altri progetti su GitHub',
    },
    tags: {
      localLeads: 'Contatti locali',
      services: 'Servizi',
      fastContact: 'Contatto rapido',
      booking: 'Prenotazione',
      faq: 'Domande frequenti',
      onePageWebsite: 'Sito a pagina unica',
      trust: 'Fiducia',
    },
    items: {
      handwerk: {
        title: 'Sito per servizi di riscaldamento, idraulica e pompe di calore',
        description:
          'Un sito servizi chiaro per un’attività locale. Il visitatore vede subito quali servizi offri, dove lavori e come contattarti rapidamente.',
        benefit:
          'Aiuta a ricevere più velocemente chiamate e richieste da persone che stanno già cercando un tecnico.',
      },
      autoWorkshop: {
        title: 'Sito per un’officina auto',
        description:
          'Una pagina servizi chiara con offerte, domande frequenti e contatto rapido. Senza sovraccarico e senza clic inutili.',
        benefit:
          'Aiuta a trasformare i visitatori in prenotazioni e richieste invece di perderli dopo la prima visita.',
      },
      singlePageBeautySalon: {
        title: 'Sito per un salone di bellezza',
        description:
          'Un sito a pagina unica, forte dal punto di vista visivo, per presentare servizi, fiducia e prenotazioni rapide.',
        benefit:
          'Aiuta a creare fiducia fin dal primo schermo e ad aumentare il numero di prenotazioni.',
      },
    },
  },
  es: {
    eyebrow: 'Proyectos demo seleccionados',
    title: 'Sitios seleccionados para negocios locales',
    desc:
      'Estos proyectos demo muestran cómo construyo sitios para negocios locales reales: claros, equilibrados y pensados para facilitar un contacto rápido.',
    benefitLabel: 'Beneficio para el negocio',
    cta: {
      livePreview: 'Abrir demo',
      github: 'GitHub',
      moreOnGithub: 'Más proyectos en GitHub',
    },
    tags: {
      localLeads: 'Solicitudes locales',
      services: 'Servicios',
      fastContact: 'Contacto rápido',
      booking: 'Reservas',
      faq: 'Preguntas frecuentes',
      onePageWebsite: 'Sitio de una sola página',
      trust: 'Confianza',
    },
    items: {
      handwerk: {
        title: 'Sitio para servicios de calefacción, fontanería y bombas de calor',
        description:
          'Un sitio de servicios claro para una empresa local. El visitante ve de inmediato qué servicios ofreces, dónde trabajas y cómo puede contactarte rápido.',
        benefit:
          'Ayuda a recibir más rápido llamadas y solicitudes de personas que ya están buscando un profesional.',
      },
      autoWorkshop: {
        title: 'Sitio para un taller mecánico',
        description:
          'Una página de servicios clara con servicios, preguntas frecuentes y contacto rápido. Sin sobrecarga y sin clics innecesarios.',
        benefit:
          'Ayuda a convertir visitantes en reservas y consultas en lugar de perderlos después de la primera visita.',
      },
      singlePageBeautySalon: {
        title: 'Sitio para un salón de belleza',
        description:
          'Un sitio de una sola página, visualmente fuerte, para presentar servicios, generar confianza y facilitar reservas rápidas.',
        benefit:
          'Ayuda a generar confianza desde la primera pantalla y a aumentar el número de reservas.',
      },
    },
  },
  el: {
    eyebrow: 'Επιλεγμένα demo έργα',
    title: 'Επιλεγμένες ιστοσελίδες για τοπικές επιχειρήσεις',
    desc:
      'Αυτά τα demo έργα δείχνουν πώς δημιουργώ ιστοσελίδες για πραγματικές τοπικές επιχειρήσεις: καθαρές, ισορροπημένες και σχεδιασμένες για γρήγορη επικοινωνία.',
    benefitLabel: 'Επιχειρηματικό όφελος',
    cta: {
      livePreview: 'Άνοιγμα demo',
      github: 'GitHub',
      moreOnGithub: 'Περισσότερα έργα στο GitHub',
    },
    tags: {
      localLeads: 'Τοπικά αιτήματα',
      services: 'Υπηρεσίες',
      fastContact: 'Γρήγορη επικοινωνία',
      booking: 'Κρατήσεις',
      faq: 'Συχνές ερωτήσεις',
      onePageWebsite: 'Μονοσέλιδη ιστοσελίδα',
      trust: 'Εμπιστοσύνη',
    },
    items: {
      handwerk: {
        title: 'Ιστοσελίδα για θέρμανση, υδραυλικά και αντλίες θερμότητας',
        description:
          'Μια καθαρή ιστοσελίδα υπηρεσιών για τοπική επιχείρηση. Ο επισκέπτης βλέπει αμέσως ποιες υπηρεσίες προσφέρετε, πού εξυπηρετείτε και πώς μπορεί να επικοινωνήσει γρήγορα.',
        benefit:
          'Βοηθά να έρχονται πιο γρήγορα κλήσεις και αιτήματα από ανθρώπους που ήδη ψάχνουν τεχνικό.',
      },
      autoWorkshop: {
        title: 'Ιστοσελίδα για συνεργείο αυτοκινήτων',
        description:
          'Μια καθαρή σελίδα υπηρεσιών με υπηρεσίες, συχνές ερωτήσεις και γρήγορη επικοινωνία. Χωρίς υπερφόρτωση και χωρίς περιττά κλικ.',
        benefit:
          'Βοηθά να μετατρέπονται οι επισκέπτες σε κρατήσεις και αιτήματα αντί να χάνονται μετά την πρώτη επίσκεψη.',
      },
      singlePageBeautySalon: {
        title: 'Ιστοσελίδα για σαλόνι ομορφιάς',
        description:
          'Μια οπτικά δυνατή μονοσέλιδη ιστοσελίδα για παρουσίαση υπηρεσιών, χτίσιμο εμπιστοσύνης και γρήγορες κρατήσεις.',
        benefit:
          'Βοηθά να δημιουργείται εμπιστοσύνη από την πρώτη οθόνη και να αυξάνονται οι κρατήσεις.',
      },
    },
  },
  ro: {
    eyebrow: 'Proiecte demo selectate',
    title: 'Site-uri selectate pentru afaceri locale',
    desc:
      'Aceste proiecte demo arata cum construiesc site-uri pentru afaceri locale reale: clar, echilibrat si gandit pentru contact rapid.',
    benefitLabel: 'Beneficiu pentru business',
    cta: {
      livePreview: 'Deschide demo',
      github: 'GitHub',
      moreOnGithub: 'Mai multe proiecte pe GitHub',
    },
    tags: {
      localLeads: 'Cereri locale',
      services: 'Servicii',
      fastContact: 'Contact rapid',
      booking: 'Programari',
      faq: 'Intrebari frecvente',
      onePageWebsite: 'Site cu o singura pagina',
      trust: 'Incredere',
    },
    items: {
      handwerk: {
        title: 'Site pentru servicii de incalzire, instalatii si pompe de caldura',
        description:
          'Un site de servicii clar pentru o companie locala. Vizitatorul vede imediat ce servicii oferiti, unde lucrati si cum va poate contacta rapid.',
        benefit:
          'Ajuta sa primiti mai repede apeluri si cereri de la oameni care deja cauta un meserias.',
      },
      autoWorkshop: {
        title: 'Site pentru un service auto',
        description:
          'O pagina de servicii clara, cu servicii, intrebari frecvente si contact rapid. Fara incarcare inutila si fara clicuri in plus.',
        benefit:
          'Ajuta sa transformati vizitatorii in programari si solicitari, in loc sa ii pierdeti dupa prima vizita.',
      },
      singlePageBeautySalon: {
        title: 'Site pentru un salon de infrumusetare',
        description:
          'Un site cu o singura pagina, puternic vizual, pentru prezentarea serviciilor, construirea increderii si programari rapide.',
        benefit:
          'Ajuta sa creati incredere din primul ecran si sa cresteti numarul de programari.',
      },
    },
  },
  bg: {
    eyebrow: 'Подбрани демо проекти',
    title: 'Подбрани сайтове за локален бизнес',
    desc:
      'Тези демо проекти показват как изграждам сайтове за реален локален бизнес: ясно, балансирано и с фокус върху бърз контакт.',
    benefitLabel: 'Полза за бизнеса',
    cta: {
      livePreview: 'Отвори демо',
      github: 'GitHub',
      moreOnGithub: 'Още проекти в GitHub',
    },
    tags: {
      localLeads: 'Локални заявки',
      services: 'Услуги',
      fastContact: 'Бърз контакт',
      booking: 'Записване',
      faq: 'Чести въпроси',
      onePageWebsite: 'Едностраничен сайт',
      trust: 'Доверие',
    },
    items: {
      handwerk: {
        title: 'Сайт за отопление, ВиК и термопомпи',
        description:
          'Ясен сервизен сайт за локална компания. Посетителят веднага вижда какви услуги предлагате, къде работите и как може бързо да се свърже с вас.',
        benefit:
          'Помага по-бързо да получавате обаждания и заявки от хора, които вече търсят майстор.',
      },
      autoWorkshop: {
        title: 'Сайт за автосервиз',
        description:
          'Ясна сервизна страница с услуги, чести въпроси и бърз контакт. Без претоварване и без излишни кликове.',
        benefit:
          'Помага да превръщате посетителите в записвания и запитвания, вместо да ги губите след първото посещение.',
      },
      singlePageBeautySalon: {
        title: 'Сайт за салон за красота',
        description:
          'Визуално силен едностраничен сайт за представяне на услуги, изграждане на доверие и бързо записване на клиенти.',
        benefit:
          'Помага да създадете доверие още от първия екран и да увеличите броя на записванията.',
      },
    },
  },
};

for (const lang of Object.keys(projectsByLocale)) {
  const filePath = path.join(process.cwd(), 'public', 'locales', lang, 'translation.json');
  const raw = fs.readFileSync(filePath, 'utf8').replace(/^\uFEFF/, '');
  const content = JSON.parse(raw);

  content.home = content.home || {};
  content.home.projects = projectsByLocale[lang];

  fs.writeFileSync(filePath, `${JSON.stringify(content, null, 2)}\n`, 'utf8');
}

console.log('Updated featured projects translations in all active locales.');
