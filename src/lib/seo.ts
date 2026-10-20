import { createContext } from 'react';
import { escapeHtml } from './markdown';
export const SITE_DOMAIN = 'https://fitoplantamed.com';
export const normalizePath = (path: string) => path.split(/[?#]/)[0].replace(/\/+$/, '') || '/';
export interface PageMetadata { title: string; description: string; canonical: string; robots: string; image: string; type: string }
export const HeadContext = createContext<{ metadata?: PageMetadata } | null>(null);
export function metadataTags(meta: PageMetadata): string {
  const attr = escapeHtml;
  const fields = [
    ['name', 'description', meta.description], ['name', 'robots', meta.robots],
    ['property', 'og:title', meta.title], ['property', 'og:description', meta.description],
    ['property', 'og:url', meta.canonical], ['property', 'og:type', meta.type],
    ['property', 'og:image', meta.image], ['property', 'og:locale', 'pt_BR'],
    ['property', 'og:site_name', 'FitoPlantaMed'],
    ['name', 'twitter:card', 'summary_large_image'], ['name', 'twitter:title', meta.title],
    ['name', 'twitter:description', meta.description], ['name', 'twitter:image', meta.image],
  ];
  return `<title>${attr(meta.title)}</title><link rel="canonical" href="${attr(meta.canonical)}">` +
    fields.map(([key, name, value]) => `<meta ${key}="${name}" content="${attr(value)}">`).join('');
}
