import fs from 'fs';
import path from 'path';

const CONTACT = {
  de: {
    h1: 'Kontakt & Anfrage fuer dein Projekt',
    responseTime: 'Antwortzeit aktuell:',
    quickContacts: 'Schnelle Kontakte',
    form: {
      name: 'Name',
      business: 'Business',
      need: 'Was brauchst du genau?',
      submit: 'Anfrage senden',
    },
  },
  uk: {
    h1: 'Контакт і заявка для вашого проєкту',
    responseTime: 'Поточний час відповіді:',
    quickContacts: 'Швидкі контакти',
    form: {
      name: "Ім'я",
      business: 'Назва бізнесу',
      need: 'Що саме вам потрібно?',
      submit: 'Надіслати заявку',
    },
  },
  tr: {
    h1: 'Projeniz icin iletisim ve talep',
    responseTime: 'Guncel yanit suresi:',
    quickContacts: 'Hizli iletisim',
    form: {
      name: 'Isim',
      business: 'Isletme',
      need: 'Tam olarak neye ihtiyaciniz var?',
      submit: 'Talep gonder',
    },
  },
  ar: {
    h1: 'تواصل وطلب لمشروعك',
    responseTime: 'وقت الرد الحالي:',
    quickContacts: 'جهات اتصال سريعة',
    form: {
      name: 'الاسم',
      business: 'اسم النشاط',
      need: 'ما الذي تحتاجه بالضبط؟',
      submit: 'إرسال الطلب',
    },
  },
  pl: {
    h1: 'Kontakt i zapytanie o Twoj projekt',
    responseTime: 'Aktualny czas odpowiedzi:',
    quickContacts: 'Szybki kontakt',
    form: {
      name: 'Imie',
      business: 'Firma',
      need: 'Czego dokladnie potrzebujesz?',
      submit: 'Wyslij zapytanie',
    },
  },
  ku: {
    h1: 'Têkilî û daxwaz ji bo projeya we',
    responseTime: 'Dema bersivê ya niha:',
    quickContacts: 'Têkiliyên zû',
    form: {
      name: 'Nav',
      business: 'Navê karsaziyê',
      need: 'Bi tamî çi hewce dike?',
      submit: 'Daxwazê bişîne',
    },
  },
  fa: {
    h1: 'تماس و درخواست برای پروژه شما',
    responseTime: 'زمان پاسخ فعلی:',
    quickContacts: 'راه‌های ارتباط سریع',
    form: {
      name: 'نام',
      business: 'نام کسب‌وکار',
      need: 'دقیقاً به چه چیزی نیاز دارید؟',
      submit: 'ارسال درخواست',
    },
  },
  it: {
    h1: 'Contatto e richiesta per il tuo progetto',
    responseTime: 'Tempo di risposta attuale:',
    quickContacts: 'Contatti rapidi',
    form: {
      name: 'Nome',
      business: 'Azienda',
      need: 'Di cosa hai bisogno esattamente?',
      submit: 'Invia richiesta',
    },
  },
  es: {
    h1: 'Contacto y solicitud para tu proyecto',
    responseTime: 'Tiempo de respuesta actual:',
    quickContacts: 'Contactos rapidos',
    form: {
      name: 'Nombre',
      business: 'Negocio',
      need: 'Que necesitas exactamente?',
      submit: 'Enviar solicitud',
    },
  },
  el: {
    h1: 'Επικοινωνία και αίτημα για το project σας',
    responseTime: 'Τρέχων χρόνος απάντησης:',
    quickContacts: 'Γρήγορες επαφές',
    form: {
      name: 'Όνομα',
      business: 'Επιχείρηση',
      need: 'Τι ακριβώς χρειάζεστε;',
      submit: 'Αποστολή αιτήματος',
    },
  },
  ro: {
    h1: 'Contact si cerere pentru proiectul tau',
    responseTime: 'Timpul actual de raspuns:',
    quickContacts: 'Contacte rapide',
    form: {
      name: 'Nume',
      business: 'Afacere',
      need: 'De ce ai nevoie exact?',
      submit: 'Trimite cererea',
    },
  },
  bg: {
    h1: 'Контакт и запитване за вашия проект',
    responseTime: 'Текущо време за отговор:',
    quickContacts: 'Бързи контакти',
    form: {
      name: 'Име',
      business: 'Бизнес',
      need: 'От какво точно имате нужда?',
      submit: 'Изпрати запитване',
    },
  },
};

const localesRoot = path.join(process.cwd(), 'public', 'locales');

for (const [lang, patch] of Object.entries(CONTACT)) {
  const filePath = path.join(localesRoot, lang, 'translation.json');
  const raw = fs.readFileSync(filePath, 'utf8').replace(/^\uFEFF/, '');
  const content = JSON.parse(raw);
  content.contact = { ...(content.contact || {}), ...patch };
  fs.writeFileSync(filePath, `${JSON.stringify(content, null, 2)}\n`, 'utf8');
}

console.log('Updated Contact page i18n keys.');
