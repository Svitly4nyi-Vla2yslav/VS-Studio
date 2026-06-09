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
  readonly socialLinks: readonly SocialLink[];
}

export interface SocialLink {
  readonly id: 'linkedin' | 'facebook' | 'instagram';
  readonly label: string;
  readonly url: string;
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
  socialLinks: [
    {
      id: 'linkedin',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/company/vs-web-studio/',
    },
    {
      id: 'facebook',
      label: 'Facebook',
      url: 'https://www.facebook.com/people/VS-Web-Studio/61568000211668/?locale=uk_UA',
    },
    {
      id: 'instagram',
      label: 'Instagram',
      url: 'https://www.instagram.com/vs.studio.anfrage/',
    },
  ],
};
