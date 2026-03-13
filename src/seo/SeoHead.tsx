import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { buildStructuredData, getSeoRoute, siteSeo } from './seo';

const ensureMeta = (attribute: 'name' | 'property', key: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
};

const ensureLink = (rel: string, href: string) => {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
};

const ensureStructuredData = (payload: Record<string, unknown>) => {
  let element = document.head.querySelector<HTMLScriptElement>('script[data-seo="structured-data"]');

  if (!element) {
    element = document.createElement('script');
    element.type = 'application/ld+json';
    element.setAttribute('data-seo', 'structured-data');
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(payload);
};

const removeCanonical = () => {
  const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  canonical?.remove();
};

const SeoHead: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const route = getSeoRoute(location.pathname);
    const structuredData = buildStructuredData(route);

    document.title = route.title;
    document.documentElement.lang = siteSeo.language;

    ensureMeta('name', 'description', route.description);
    ensureMeta('name', 'keywords', route.keywords);
    ensureMeta('name', 'author', siteSeo.siteName);
    ensureMeta('name', 'robots', route.robots);
    ensureMeta('name', 'googlebot', route.robots);
    ensureMeta('name', 'theme-color', siteSeo.themeColor);

    ensureMeta('property', 'og:type', route.pageKind === 'blog' ? 'article' : 'website');
    ensureMeta('property', 'og:locale', siteSeo.locale);
    ensureMeta('property', 'og:site_name', siteSeo.siteName);
    ensureMeta('property', 'og:title', route.title);
    ensureMeta('property', 'og:description', route.description);
    ensureMeta('property', 'og:url', route.absoluteUrl);
    ensureMeta('property', 'og:image', siteSeo.defaultImage);
    ensureMeta('property', 'og:image:secure_url', siteSeo.defaultImage);
    ensureMeta('property', 'og:image:type', 'image/png');
    ensureMeta('property', 'og:image:width', '1200');
    ensureMeta('property', 'og:image:height', '630');
    ensureMeta('property', 'og:image:alt', siteSeo.defaultImageAlt);

    ensureMeta('name', 'twitter:card', 'summary_large_image');
    ensureMeta('name', 'twitter:title', route.title);
    ensureMeta('name', 'twitter:description', route.description);
    ensureMeta('name', 'twitter:image', siteSeo.defaultImage);
    ensureMeta('name', 'twitter:image:alt', siteSeo.defaultImageAlt);
    ensureMeta('name', 'twitter:url', route.absoluteUrl);

    if (route.canonicalUrl) {
      ensureLink('canonical', route.canonicalUrl);
    } else {
      removeCanonical();
    }

    ensureStructuredData(structuredData);
  }, [location.pathname]);

  return null;
};

export default SeoHead;
