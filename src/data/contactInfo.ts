export interface ContactInfo {
  readonly brandName: string;
  readonly founderName: string;
  readonly websiteLabel: string;
  readonly websiteUrl: string;
  readonly email: string;
  readonly emailHref: string;
  readonly phone: string;
  readonly phoneHref: string;
  readonly githubLabel: string;
  readonly githubUrl: string;
  readonly addressLine: string;
  readonly cityCountry: string;
  readonly mapsUrl: string;
}

// Єдине джерело контактів VS Web Studio для основного сайту й portfolio-сторінки.
export const contactInfo: ContactInfo = {
  brandName: 'VS Web Studio',
  founderName: 'Vladyslav Svitlychnyi',
  websiteLabel: 'vs-web-studio.de',
  websiteUrl: 'https://vs-web-studio.de/',
  email: 'anfrage@vs-web-studio.de',
  emailHref: 'mailto:anfrage@vs-web-studio.de',
  phone: '+49 1516 4392053',
  phoneHref: 'tel:+4915164392053',
  githubLabel: 'github.com/Svitly4nyi-Vla2yslav',
  githubUrl: 'https://github.com/Svitly4nyi-Vla2yslav',
  addressLine: ', 31135 Hildesheim',
  cityCountry: 'Hildesheim, Germany',
  mapsUrl: 'https://www.google.com/maps/place/Ehrlicherstr.+52,+31135+Hildesheim',
};
