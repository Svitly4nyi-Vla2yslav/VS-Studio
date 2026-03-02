import fs from 'node:fs';
import path from 'node:path';

const filePath = path.join(process.cwd(), 'public', 'locales', 'tr', 'translation.json');
const raw = fs.readFileSync(filePath, 'utf8').replace(/^\uFEFF/, '');
const data = JSON.parse(raw);

data.common = {
  ...data.common,
  projectRequest: 'Proje talep et',
  viewPrices: 'Fiyatlari gor',
  cancel: 'Iptal',
};

data.header = {
  ...data.header,
  menu: 'Menu',
  menuAria: 'Gezinme menusunu ac',
  services: 'Hizmetler',
  preise: 'Fiyatlar',
  referenzen: 'Referanslar',
  ueberUns: 'Hakkimizda',
  kontakt: 'Iletisim',
};

data.footer = {
  ...data.footer,
  tagline: 'VS Studio · Web siteleri, web uygulamalari, reklam ve otomasyon',
  impressum: 'Kunye',
  datenschutz: 'Gizlilik',
  agb: 'Genel sartlar',
  cookies: 'Cerezler',
  cookieSettings: 'Cerez ayarlari',
  blog: 'Blog',
};

data.home = {
  ...data.home,
  heroTitle: 'Sadece guzel gorunen degil, talep getiren web siteleri.',
  heroSubtitle:
    "Almanya'daki yerel isletmeler icin net konumlandirma, hizli uygulama ve seffaf paketler.",
  toFaq: "SSS'ye git",
  partnersTitle: 'One cikanlar, hedef kitleler ve hizmetler',
  groups: {
    highlights: 'One cikanlar',
    forWhom: 'Kimler icin',
    services: 'Hizmetler',
  },
  partners: {
    fastLoad: { title: 'Hizli yukleme', desc: 'Sayfa saniyeler icinde acilir' },
    moreLeads: { title: 'Daha fazla talep', desc: 'Formlar uzerinden daha cok iletisim' },
    clearPrices: { title: 'Net fiyatlar', desc: 'Maliyeti onceden bilirsiniz' },
    personalHelp: { title: 'Kisisel destek', desc: 'Beklemeden dogrudan destek' },
    handwerker: { title: 'Ustalar', desc: 'Sehir ve hizmet bazli talepler' },
    praxen: { title: 'Klinikler', desc: 'Hastalar daha hizli randevu bulur' },
    werkstaetten: { title: 'Atolyeler', desc: 'Takipli net hizmet sayfalari' },
    localServices: { title: 'Yerel hizmetler', desc: 'Bolgenizde daha fazla gorunurluk' },
    websites: { title: 'Web siteleri', desc: 'Modern, hizli, mobil uyumlu' },
    webApps: { title: 'Web uygulamalari', desc: 'Ekip ve musteriler icin araclar' },
    aiIntegration: { title: 'Yapay zeka entegrasyonu', desc: 'Sorular ve leadler icin chatbot' },
    socialMedia: { title: 'Sosyal medya', desc: 'Web sitesi + Instagram/Meta baglantisi' },
    socialAds: { title: 'Sosyal reklamlar', desc: 'Olculebilir sonuclarla hedefli reklam' },
  },
  hero: {
    bento: {
      speed: { label: 'Hiz', value: '90+ Lighthouse' },
      seo: { label: 'SEO', value: 'Teknik temel' },
      leads: { label: 'Talepler', value: 'Net CTA ve formlar' },
      support: { label: 'Destek', value: "Yayina alimdan sonra" },
    },
  },
  partnersSection: {
    title: 'Avantajlar ve odak alanlari',
    desc: 'Hangi ihtiyaclari cozdugumuz ve hangi yerel isletmeler icin en sik site ve lead hunisi kurdugumuz.',
  },
  marquee: {
    aria: 'Nisler',
    title: 'Calistigimiz sektorler',
    desc: 'Bir yon secin ve uygun stil orneklerini inceleyin. Boylece isletmeniz icin daha hizli dogru teklif cikaririz.',
    items: {
      handwerk: 'Ustalik',
      praxen: 'Klinikler',
      werkstaetten: 'Atolyeler',
      gastronomie: 'Gastronomi',
      beauty: 'Guzellik',
      immobilien: 'Gayrimenkul',
      kanzlei: 'Danismanlik',
      fitness: 'Fitness',
      reinigung: 'Temizlik',
      transport: 'Tasima',
      coaching: 'Kocluk',
      bildung: 'Egitim',
    },
  },
  process: {
    title: 'Nasil calisiyoruz',
    desc: 'Gereksiz adimlar olmadan seffaf surec: kisa briften yayina alma ve optimizasyona kadar.',
    aria: 'Calisma asamalari',
    stage: 'Asama',
    nav: { prev: 'Geri', next: 'Ileri' },
    steps: {
      s1: {
        title: '15 dakikalik gorusme',
        text: 'Hedefi, KPI ve teslim tarihini netlestiririz. Yayina alim formatini hemen belirleriz.',
      },
      s2: {
        title: '48 saatte prototip',
        text: 'Gelistirme oncesinde sayfa yapisi, CTA ve talep akislarini gosteririz.',
      },
      s3: {
        title: '7-14 gunde gelistirme',
        text: 'Kodlama, SEO temeli, entegrasyonlar ve analitik kurulumunu gereksiz karmasa olmadan yapariz.',
      },
      s4: {
        title: 'Yayina alma ve optimizasyon',
        text: "Canliya alir, donusumu kontrol eder ve 30 gunluk iyilestirme plani sunariz.",
      },
    },
  },
  projects: {
    title: 'Projeler / Vaka calismalari',
    desc: 'Bos vaatler olmadan gercek ihtiyaclar ve ongorulebilir sonuclar. Canli onizleme icin case kartinin uzerine gelin.',
    cards: {
      c1: {
        title: 'Yerel talepler icin web sitesi',
        description: 'Form, arama ve mobilde hizli iletisim odakli acilis sayfasi.',
        goal: 'Hedef: butce artirmadan daha fazla talep',
      },
      c2: {
        title: 'Reklam icin acilis sayfasi',
        description: 'Meta/Google kampanyalari icin ayri ve takipli acilis sayfasi.',
        goal: 'Beklenen etki: reklamlardan daha nitelikli lead',
      },
      c3: {
        title: 'Klinik icin web sitesi',
        description: 'Net hizmet yapisi, SSS ve online randevu akis senaryosu.',
        goal: 'Hedef: daha az geri donus sorusuyla daha fazla randevu',
      },
      c4: {
        title: 'Lead yonetim paneli',
        description: 'Lead isleme ve durum takibi icin dahili arayuz.',
        goal: 'Beklenen etki: taleplerin daha hizli islenmesi',
      },
    },
  },
  configurator: {
    title: 'Teklif olusturucu',
    desc: 'Proje parametrelerini secin, kurulum maliyet araligini ve uygun destek tarifelerini gorun.',
    labels: {
      goal: 'Hedef',
      integrations: 'Entegrasyonlar',
      ads: 'Reklam',
      term: 'Sure',
      content: 'Icerik seviyesi',
      languages: 'Diller',
      hosting: 'Hosting',
      domain: 'Alan adi',
      pages: 'Sayfalar',
      seo: 'SEO',
    },
    options: {
      common: { other: 'Diger' },
      goal: { leads: 'Lead', calls: 'Arama', booking: 'Rezervasyon' },
      integrations: { booking: 'Rezervasyon', crm: 'CRM', chat: 'Sohbet', payments: 'Odeme' },
      ads: { none: 'Reklam yok', meta: 'Meta', google: 'Google' },
      term: { up_to_7: '1 haftaya kadar', from_7_to_14: '7-14 gun', from_14_to_21: '14-21 gun', from_21_to_30: '21-30 gun' },
      content: { has: 'Icerik hazir', copy: 'Metin yazimi gerekli' },
      languages: { basic: '1 dil', multi: '2+ dil' },
      hosting: { shared: 'Paylasimli hosting', vps: 'VPS', managed: 'Yonetilen hosting' },
      domain: { new_domain: 'Yeni alan adi', existing_domain: 'Alan adi mevcut', transfer: 'Alan adi tasima' },
      pages: { one: '1 sayfa', up_to_3: '3 sayfaya kadar', five_plus: '5+ sayfa' },
      seo: { base: 'SEO Temel', extended: 'SEO Gelismis' },
    },
    reset: 'Sifirla ve yeniden basla',
    empty:
      'Her bolumde en az bir secenek secin. Birden fazla secim yapabilirsiniz; "Diger" seceneginde ek ucret uygulanmaz.',
    recommended: 'Onerilen:',
    pack: { starter: 'Starter', business: 'Business' },
    launchPrice: 'Tahmini kurulum maliyeti:',
    supportMonthly: 'Destek / ay',
    supportYearly: 'Destek / yil (-30%)',
    cta: 'Iletisim talebi ve net teklif al',
    bullets: {
      prototype: 'Lead odakli prototip ve yapi',
      goal: 'Hedefler: {{value}}',
      integrations: 'Entegrasyonlar: {{value}}',
      term: 'Sure: {{value}}',
      hosting: 'Hosting: {{value}}',
      domain: 'Alan adi: {{value}}',
      pages: 'Sayfalar: {{value}}',
      analytics: 'Formlar/olaylar icin GA4 ve event takibi',
      copy_true: 'Metin ve teklif icerigi konusunda destek',
      copy_false: 'Hazir metinlerinizle calisiriz',
      market_note: 'Kucuk isletmeler icin piyasa ortalamasinin altinda tahmini fiyat',
    },
    brief: {
      title: 'Teklif olusturucudan brif:',
      goal: 'Hedef: {{value}}',
      integrations: 'Entegrasyonlar: {{value}}',
      ads: 'Reklam: {{value}}',
      term: 'Sure: {{value}}',
      content: 'Icerik: {{value}}',
      languages: 'Diller: {{value}}',
      hosting: 'Hosting: {{value}}',
      domain: 'Alan adi: {{value}}',
      pages: 'Sayfalar: {{value}}',
      seo: 'SEO: {{value}}',
      launch_price: 'Tahmini kurulum maliyeti: {{value}}',
      support_monthly: 'Destek / ay: {{value}}',
      support_yearly: 'Destek / yil (-30%): {{value}}',
    },
  },
  trust: {
    title: '14 gunde alacaklariniz',
    desc: 'Baslangicta somut ciktilar: talep odakli web sitesi, kurulu analitik ve devam buyume plani.',
    deliverables: {
      d1: {
        title: '48 saatte prototip',
        text: 'Kararlar ongorulebilir olsun diye koddan once yapi ve CTA gorunur olur.',
      },
      d2: {
        title: 'Talep odakli web sitesi',
        text: 'Form, arama, mesajlasma ve hizli erisim icin mobil surum.',
      },
      d3: {
        title: 'Analitik ve takip',
        text: 'GA4 ve olaylar ile taleplerin hangi kanaldan geldigi net gorulur.',
      },
      d4: {
        title: '30 gunluk optimizasyon plani',
        text: 'Yayindan sonra donusumu artiracak net sonraki adimlar.',
      },
    },
  },
  faq: {
    q1: 'Ne kadar hizli baslayabilirsiniz?',
    a1: 'Genellikle 3-5 is gunu icinde basliyoruz. Talebinizden hemen sonra ilk adimlari iceren kisa bir plan paylasiyoruz.',
    q2: 'Baslangicta musteriden ne gerekiyor?',
    a2: "Hizmetleriniz, hedef kitleniz ve iletisim kanallari hakkinda temel bilgiler yeterli. Sonrasinda yapi, metin ve oncelikleri birlikte netlestiriyoruz.",
    q3: 'Is birligi nasil ilerliyor?',
    a3: 'Kisa etaplarla ilerliyoruz: konsept, tasarim, gelistirme, yayina alma. Her adimda net guncellemeler alirsiniz.',
    q4: 'Bu kucuk isletmeler icin uygun mu?',
    a4: 'Evet. Paketlerimiz yerel isletmeler icin tasarlandi: net fiyatlar, hizli baslangic ve gercek taleplere odak.',
    q5: 'Yayina alimdan sonra ne oluyor?',
    a5: "Yayindan sonra veriyi analiz ediyor, donusum noktalarini iyilestiriyor ve surekli optimizasyonla buyumeyi destekliyoruz.",
    desc: 'Sure, maliyet, lansman sureci ve devam eden destek hakkindaki sik sorularin cevaplari.',
  },
};

fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
console.log('Turkish locale fixed for HomePage content.');
