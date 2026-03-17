import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const rootDir = process.cwd();
const publicDir = path.join(rootDir, 'public');
const distDir = path.join(rootDir, 'dist');
const configPath = path.join(rootDir, 'src', 'seo', 'route-seo.json');

const config = JSON.parse(await readFile(configPath, 'utf8'));
const buildDate = new Date().toISOString().slice(0, 10);

const site = config.site;
const websiteId = `${site.baseUrl}/#website`;
const organizationId = `${site.baseUrl}/#organization`;

const pageTypeByKind = {
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

const normalizePath = pathname => {
  if (!pathname || pathname === '/') {
    return '/';
  }

  const trimmed = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  return trimmed === '/home' ? '/' : trimmed;
};

const buildAbsoluteUrl = pathname => {
  const normalizedPath = normalizePath(pathname);
  return normalizedPath === '/' ? `${site.baseUrl}/` : `${site.baseUrl}${normalizedPath}`;
};

const resolveRoute = route => ({
  ...route,
  path: normalizePath(route.path),
  absoluteUrl: buildAbsoluteUrl(route.path),
  canonicalUrl: buildAbsoluteUrl(route.path),
  robots: route.indexable
    ? 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'
    : 'noindex,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
});

const resolvedRoutes = config.routes.map(resolveRoute);
const homeRoute = resolvedRoutes.find(route => route.path === '/') ?? resolvedRoutes[0];

const escapeHtml = value =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

const escapeXml = value =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

const createBreadcrumbNode = route => ({
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
  name: site.siteName,
  url: `${site.baseUrl}/`,
  logo: `${site.baseUrl}/apple-touch-icon.png`,
  image: site.defaultImage,
  email: site.email,
  telephone: site.telephone,
  priceRange: site.priceRange,
  address: {
    '@type': 'PostalAddress',
    ...site.address,
  },
  geo: {
    '@type': 'GeoCoordinates',
    ...site.geo,
  },
  areaServed: [
    { '@type': 'City', name: 'Hildesheim' },
    { '@type': 'AdministrativeArea', name: 'Niedersachsen' },
    { '@type': 'Country', name: 'Germany' },
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: site.email,
      telephone: site.telephone,
      availableLanguage: ['de', 'uk', 'en'],
    },
  ],
});

const createWebsiteNode = () => ({
  '@type': 'WebSite',
  '@id': websiteId,
  url: `${site.baseUrl}/`,
  name: site.siteName,
  inLanguage: 'de-DE',
  publisher: { '@id': organizationId },
});

const createPageNode = route => ({
  '@type': pageTypeByKind[route.pageKind] ?? 'WebPage',
  '@id': `${route.absoluteUrl}#webpage`,
  url: route.absoluteUrl,
  name: route.title,
  headline: route.title,
  description: route.description,
  inLanguage: 'de-DE',
  isPartOf: { '@id': websiteId },
  about: { '@id': organizationId },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: site.defaultImage,
  },
});

const createHomeFaqNode = () => ({
  '@type': 'FAQPage',
  '@id': `${site.baseUrl}/#faq`,
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
  '@id': `${site.baseUrl}/preise#offers`,
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
  '@id': `${site.baseUrl}/services#service`,
  serviceType: [
    'Website Entwicklung',
    'Landingpages',
    'SEO Basis',
    'Tracking und Analytics',
    'Social Ads',
    'Automationen und KI',
  ],
  provider: { '@id': organizationId },
  areaServed: 'DE',
});

const createNicheNode = route => ({
  '@type': 'Service',
  '@id': `${route.absoluteUrl}#service`,
  name: route.name,
  description: route.description,
  provider: { '@id': organizationId },
  areaServed: 'DE',
});

const buildStructuredData = route => {
  const graph = [
    createOrganizationNode(),
    createWebsiteNode(),
    createPageNode(route),
    createBreadcrumbNode(route),
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

const replaceOrInsert = (html, regex, replacement) =>
  regex.test(html) ? html.replace(regex, replacement) : html.replace('</head>', `    ${replacement}\n  </head>`);

const replaceMeta = (html, attribute, key, content) => {
  const escapedContent = escapeHtml(content);
  const regex = new RegExp(`<meta\\s+${attribute}="${key}"\\s+content="[^"]*"\\s*\\/?>`, 'i');
  return replaceOrInsert(
    html,
    regex,
    `<meta ${attribute}="${key}" content="${escapedContent}" />`
  );
};

const replaceLink = (html, rel, href) => {
  const regex = new RegExp(`<link\\s+rel="${rel}"\\s+href="[^"]*"\\s*\\/?>`, 'i');
  return replaceOrInsert(html, regex, `<link rel="${rel}" href="${escapeHtml(href)}" />`);
};

const replaceTitle = (html, title) => html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);

const replaceStructuredData = (html, payload) =>
  html.replace(
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/i,
    `<script type="application/ld+json">${JSON.stringify(payload)}</script>`
  );

const applySeoToHtml = (template, route) => {
  let html = template;

  html = html.replace(/<html lang="[^"]*">/i, `<html lang="${site.language}">`);
  html = replaceTitle(html, route.title);
  html = replaceLink(html, 'canonical', route.canonicalUrl);
  html = replaceMeta(html, 'name', 'description', route.description);
  html = replaceMeta(html, 'name', 'keywords', route.keywords);
  html = replaceMeta(html, 'name', 'author', site.siteName);
  html = replaceMeta(html, 'name', 'robots', route.robots);
  html = replaceMeta(html, 'name', 'googlebot', route.robots);
  html = replaceMeta(html, 'name', 'theme-color', site.themeColor);

  html = replaceMeta(html, 'property', 'og:type', route.pageKind === 'blog' ? 'article' : 'website');
  html = replaceMeta(html, 'property', 'og:locale', site.locale);
  html = replaceMeta(html, 'property', 'og:site_name', site.siteName);
  html = replaceMeta(html, 'property', 'og:title', route.title);
  html = replaceMeta(html, 'property', 'og:description', route.description);
  html = replaceMeta(html, 'property', 'og:url', route.absoluteUrl);
  html = replaceMeta(html, 'property', 'og:image', site.defaultImage);
  html = replaceMeta(html, 'property', 'og:image:secure_url', site.defaultImage);
  html = replaceMeta(html, 'property', 'og:image:type', 'image/png');
  html = replaceMeta(html, 'property', 'og:image:width', '1200');
  html = replaceMeta(html, 'property', 'og:image:height', '630');
  html = replaceMeta(html, 'property', 'og:image:alt', site.defaultImageAlt);

  html = replaceMeta(html, 'name', 'twitter:card', 'summary_large_image');
  html = replaceMeta(html, 'name', 'twitter:title', route.title);
  html = replaceMeta(html, 'name', 'twitter:description', route.description);
  html = replaceMeta(html, 'name', 'twitter:image', site.defaultImage);
  html = replaceMeta(html, 'name', 'twitter:image:alt', site.defaultImageAlt);
  html = replaceMeta(html, 'name', 'twitter:url', route.absoluteUrl);

  return replaceStructuredData(html, buildStructuredData(route));
};

const createSitemapXml = routes => {
  const urlEntries = routes
    .filter(route => route.sitemap && route.indexable)
    .map(
      route => `  <url>
    <loc>${escapeXml(route.absoluteUrl)}</loc>
    <lastmod>${buildDate}</lastmod>
    <changefreq>${route.changeFrequency}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;
};

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${site.baseUrl}/sitemap.xml
`;

const manifest = JSON.stringify(
  {
    name: site.siteName,
    short_name: 'VS Studio',
    description: 'Websites, SEO und Lead-Systeme für lokale Unternehmen in Deutschland.',
    id: `${site.baseUrl}/`,
    scope: '/',
    start_url: '/',
    display: 'standalone',
    orientation: 'any',
    background_color: site.themeColor,
    theme_color: site.themeColor,
    lang: 'de-DE',
    icons: [
      { src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  null,
  2
);

const create404Html = () => `<!DOCTYPE html>
<html lang="${site.language}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>404 | Seite nicht gefunden | ${site.siteName}</title>
    <meta
      name="description"
      content="Die angeforderte Seite wurde nicht gefunden. Wechseln Sie zur Startseite oder senden Sie uns direkt eine Projektanfrage."
    />
    <meta name="robots" content="noindex,follow" />
    <meta name="theme-color" content="${site.themeColor}" />
    <style>
      :root {
        color-scheme: dark;
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        padding: 24px;
        font-family: "Noto Sans", Arial, sans-serif;
        background:
          radial-gradient(circle at top left, rgba(72, 154, 255, 0.24), transparent 38%),
          radial-gradient(circle at top right, rgba(255, 206, 126, 0.18), transparent 34%),
          #090d16;
        color: #f6f9ff;
      }

      main {
        width: min(100%, 760px);
        padding: 32px;
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 24px;
        background: rgba(10, 16, 28, 0.86);
        box-shadow: 0 28px 80px rgba(0, 0, 0, 0.45);
      }

      .eyebrow {
        margin: 0 0 16px;
        font-size: 12px;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: rgba(174, 215, 255, 0.76);
      }

      h1 {
        margin: 0;
        font-size: clamp(34px, 8vw, 64px);
        line-height: 1;
      }

      p {
        margin: 16px 0 0;
        max-width: 56ch;
        color: rgba(235, 244, 255, 0.78);
        line-height: 1.7;
      }

      .actions {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin-top: 28px;
      }

      a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 48px;
        padding: 0 18px;
        border-radius: 999px;
        border: 1px solid rgba(255, 212, 156, 0.38);
        color: #09111f;
        font-weight: 700;
        text-decoration: none;
        background: linear-gradient(135deg, #ffd8a0, #ffeccb);
      }

      a.secondary {
        color: #eef6ff;
        border-color: rgba(128, 199, 255, 0.34);
        background: rgba(21, 35, 57, 0.76);
      }
    </style>
  </head>
  <body>
    <main>
      <p class="eyebrow">404</p>
      <h1>Seite nicht gefunden.</h1>
      <p>
        Diese URL existiert nicht oder wurde verschoben. Gehen Sie zur
        Startseite zurueck oder senden Sie uns direkt Ihre Projektanfrage.
      </p>
      <div class="actions">
        <a href="/">Zur Startseite</a>
        <a class="secondary" href="/kontakt">Projekt anfragen</a>
      </div>
    </main>
  </body>
</html>
`;

const templateHtml = await readFile(path.join(distDir, 'index.html'), 'utf8');
const sitemapXml = createSitemapXml(resolvedRoutes);

await writeFile(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf8');
await writeFile(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf8');
await writeFile(path.join(publicDir, 'robots.txt'), robotsTxt, 'utf8');
await writeFile(path.join(distDir, 'robots.txt'), robotsTxt, 'utf8');
await writeFile(path.join(publicDir, 'manifest.webmanifest'), manifest, 'utf8');
await writeFile(path.join(publicDir, 'site.webmanifest'), manifest, 'utf8');
await writeFile(path.join(distDir, 'manifest.webmanifest'), manifest, 'utf8');
await writeFile(path.join(distDir, 'site.webmanifest'), manifest, 'utf8');

const updatedHomeHtml = applySeoToHtml(templateHtml, homeRoute);
await writeFile(path.join(distDir, 'index.html'), updatedHomeHtml, 'utf8');

for (const route of resolvedRoutes) {
  if (route.path === '/') {
    continue;
  }

  const routeDir = path.join(distDir, route.path.slice(1));
  await mkdir(routeDir, { recursive: true });
  await writeFile(path.join(routeDir, 'index.html'), applySeoToHtml(templateHtml, route), 'utf8');
}

const static404 = create404Html();
await writeFile(path.join(publicDir, '404.html'), static404, 'utf8');
await writeFile(path.join(distDir, '404.html'), static404, 'utf8');
