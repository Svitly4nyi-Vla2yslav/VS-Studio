import seoConfig from './route-seo.json';

type PageKind =
  | 'home'
  | 'services'
  | 'pricing'
  | 'references'
  | 'about'
  | 'contact'
  | 'blog'
  | 'niche'
  | 'legal'
  | 'notFound';

interface SeoRouteConfig {
  path: string;
  name: string;
  title: string;
  description: string;
  keywords: string;
  pageKind: PageKind;
  changeFrequency: string;
  priority: number;
  indexable: boolean;
  sitemap: boolean;
  breadcrumb: string[];
}

interface HomeFaqEntry {
  question: string;
  answer: string;
}

interface PricingPackage {
  name: string;
  price: string;
  description: string;
}

interface SeoConfig {
  site: {
    baseUrl: string;
    siteName: string;
    defaultTitle: string;
    defaultDescription: string;
    defaultImage: string;
    defaultImageAlt: string;
    locale: string;
    language: string;
    themeColor: string;
    telephone: string;
    email: string;
    priceRange: string;
    address: {
      streetAddress: string;
      addressLocality: string;
      postalCode: string;
      addressCountry: string;
    };
    geo: {
      latitude: string;
      longitude: string;
    };
  };
  homeFaq: HomeFaqEntry[];
  pricingPackages: PricingPackage[];
  routes: SeoRouteConfig[];
}

const config = seoConfig as SeoConfig;

export const siteSeo = config.site;
export const seoRoutes = config.routes;
export const homeFaq = config.homeFaq;
export const pricingPackages = config.pricingPackages;

export interface SeoResolvedRoute extends SeoRouteConfig {
  absoluteUrl: string;
  robots: string;
  canonicalUrl: string | null;
}

const routeMap = new Map(config.routes.map(route => [route.path, route]));

const notFoundRoute: SeoResolvedRoute = {
  path: '/404',
  name: '404',
  title: '404 | Seite nicht gefunden | VS Web Studio',
  description:
    'Die angeforderte Seite wurde nicht gefunden. Wechseln Sie zur Startseite oder senden Sie uns direkt eine Projektanfrage.',
  keywords: '404, seite nicht gefunden, vs web studio',
  pageKind: 'notFound',
  changeFrequency: 'yearly',
  priority: 0,
  indexable: false,
  sitemap: false,
  breadcrumb: ['Startseite', '404'],
  absoluteUrl: `${config.site.baseUrl}/404`,
  robots: 'noindex,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
  canonicalUrl: null,
};

export const normalizeSeoPath = (pathname: string): string => {
  const pathWithoutQuery = pathname.split('?')[0]?.split('#')[0] ?? '/';
  if (!pathWithoutQuery || pathWithoutQuery === '/') {
    return '/';
  }

  const normalizedPath = pathWithoutQuery.endsWith('/')
    ? pathWithoutQuery.slice(0, -1)
    : pathWithoutQuery;

  return normalizedPath === '/home' ? '/' : normalizedPath;
};

export const buildAbsoluteUrl = (path: string): string => {
  if (path === '/') {
    return `${config.site.baseUrl}/`;
  }

  return `${config.site.baseUrl}${path}`;
};

export const getSeoRoute = (pathname: string): SeoResolvedRoute => {
  const normalizedPath = normalizeSeoPath(pathname);
  const route = routeMap.get(normalizedPath);

  if (!route) {
    return notFoundRoute;
  }

  return {
    ...route,
    absoluteUrl: buildAbsoluteUrl(route.path),
    robots: route.indexable
      ? 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'
      : 'noindex,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
    canonicalUrl: buildAbsoluteUrl(route.path),
  };
};

const websiteId = `${config.site.baseUrl}/#website`;
const organizationId = `${config.site.baseUrl}/#organization`;
const importantRoutePaths = ['/services', '/preise', '/referenzen', '/ueber-uns', '/kontakt'];
const importantRoutes = config.routes.filter(route => importantRoutePaths.includes(route.path));

const pageTypeByKind: Record<PageKind, string> = {
  home: 'WebPage',
  services: 'CollectionPage',
  pricing: 'CollectionPage',
  references: 'CollectionPage',
  about: 'AboutPage',
  contact: 'ContactPage',
  blog: 'Blog',
  niche: 'Service',
  legal: 'WebPage',
  notFound: 'WebPage',
};

const createBreadcrumbNode = (route: SeoResolvedRoute) => ({
  '@type': 'BreadcrumbList',
  '@id': `${route.absoluteUrl}#breadcrumb`,
  itemListElement: route.breadcrumb.map((name, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name,
    item: index === 0 ? buildAbsoluteUrl('/') : buildAbsoluteUrl(route.path),
  })),
});

const createOrganizationNode = () => ({
  '@type': ['ProfessionalService', 'Organization'],
  '@id': organizationId,
  name: config.site.siteName,
  url: `${config.site.baseUrl}/`,
  logo: `${config.site.baseUrl}/android-chrome-512x512.png`,
  image: config.site.defaultImage,
  email: config.site.email,
  telephone: config.site.telephone,
  priceRange: config.site.priceRange,
  address: {
    '@type': 'PostalAddress',
    ...config.site.address,
  },
  geo: {
    '@type': 'GeoCoordinates',
    ...config.site.geo,
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Hildesheim',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Niedersachsen',
    },
    {
      '@type': 'Country',
      name: 'Germany',
    },
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: config.site.email,
      telephone: config.site.telephone,
      availableLanguage: ['de', 'uk', 'en'],
    },
  ],
});

const createWebsiteNode = () => ({
  '@type': 'WebSite',
  '@id': websiteId,
  url: `${config.site.baseUrl}/`,
  name: config.site.siteName,
  inLanguage: 'de-DE',
  hasPart: importantRoutes.map(route => ({
    '@id': `${buildAbsoluteUrl(route.path)}#navigation`,
  })),
  publisher: {
    '@id': organizationId,
  },
});

const createPageNode = (route: SeoResolvedRoute) => ({
  '@type': pageTypeByKind[route.pageKind],
  '@id': `${route.absoluteUrl}#webpage`,
  url: route.absoluteUrl,
  name: route.title,
  headline: route.title,
  description: route.description,
  inLanguage: 'de-DE',
  isPartOf: {
    '@id': websiteId,
  },
  about: {
    '@id': organizationId,
  },
  significantLink:
    route.pageKind === 'home'
      ? importantRoutes.map(item => buildAbsoluteUrl(item.path))
      : undefined,
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: config.site.defaultImage,
  },
});

const createNavigationNodes = () =>
  importantRoutes.map(route => ({
    '@type': 'SiteNavigationElement',
    '@id': `${buildAbsoluteUrl(route.path)}#navigation`,
    name: route.name,
    url: buildAbsoluteUrl(route.path),
    inLanguage: 'de-DE',
    isPartOf: {
      '@id': websiteId,
    },
  }));

const createHomeFaqNode = () => ({
  '@type': 'FAQPage',
  '@id': `${config.site.baseUrl}/#faq`,
  mainEntity: config.homeFaq.map(item => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
});

const createPricingNode = () => ({
  '@type': 'OfferCatalog',
  '@id': `${config.site.baseUrl}/preise#offers`,
  name: 'Website- und Lead-System Pakete',
  itemListElement: config.pricingPackages.map((item, index) => ({
    '@type': 'Offer',
    position: index + 1,
    name: item.name,
    description: item.description,
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'EUR',
      description: item.price,
    },
  })),
});

const createServicesNode = () => ({
  '@type': 'Service',
  '@id': `${config.site.baseUrl}/services#service`,
  serviceType: [
    'Website Entwicklung',
    'Landingpages',
    'SEO Basis',
    'Tracking und Analytics',
    'Social Ads',
    'Automationen und KI',
  ],
  provider: {
    '@id': organizationId,
  },
  areaServed: 'DE',
});

const createNicheNode = (route: SeoResolvedRoute) => ({
  '@type': 'Service',
  '@id': `${route.absoluteUrl}#service`,
  name: route.name,
  description: route.description,
  provider: {
    '@id': organizationId,
  },
  areaServed: 'DE',
});

export const buildStructuredData = (route: SeoResolvedRoute) => {
  const graph: Record<string, unknown>[] = [
    createOrganizationNode(),
    createWebsiteNode(),
    createPageNode(route),
    createBreadcrumbNode(route),
    ...createNavigationNodes(),
  ];

  if (route.pageKind === 'home') {
    graph.push(createHomeFaqNode());
  }

  if (route.pageKind === 'pricing') {
    graph.push(createPricingNode());
  }

  if (route.pageKind === 'services') {
    graph.push(createServicesNode());
  }

  if (route.pageKind === 'niche') {
    graph.push(createNicheNode(route));
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
};
