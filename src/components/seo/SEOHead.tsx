import { useContext, useEffect } from 'react';
import { HeadContext, normalizePath } from '@/lib/seo';
import { useLocation } from 'react-router-dom';

const SITE_DOMAIN = 'https://fitoplantamed.com';
const SITE_NAME = 'FitoPlantaMed';

interface SEOHeadProps {
  title: string;
  description: string;
  robots?: 'index,follow' | 'noindex,follow' | 'noindex,nofollow';
  ogImage?: string;
  type?: 'website' | 'article';
}

const SEOHead = ({ 
  title, 
  description, 
  robots = 'index,follow',
  ogImage = '/og-image.jpg',
  type = 'website'
}: SEOHeadProps) => {
  const location = useLocation();
  
  // Build canonical URL from current path
  const canonicalUrl = `${SITE_DOMAIN}${normalizePath(location.pathname)}`;
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  const imageUrl = new URL(ogImage, SITE_DOMAIN).href;
  const head = useContext(HeadContext);
  if (head) head.metadata = { title: fullTitle, description, canonical: canonicalUrl, robots, image: imageUrl, type };

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Helper to update or create meta tags
    const updateMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Helper to update or create link tags
    const updateLink = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      
      if (!link) {
        link = document.createElement('link');
        link.rel = rel;
        document.head.appendChild(link);
      }
      link.href = href;
    };

    // Update meta description
    updateMeta('description', description);

    // Update robots
    updateMeta('robots', robots);

    // Update canonical
    updateLink('canonical', canonicalUrl);

    // Update Open Graph tags
    updateMeta('og:title', fullTitle, true);
    updateMeta('og:description', description, true);
    updateMeta('og:url', canonicalUrl, true);
    updateMeta('og:type', type, true);
    updateMeta('og:image', imageUrl, true);
    updateMeta('og:locale', 'pt_BR', true);
    updateMeta('og:site_name', SITE_NAME, true);

    // Update Twitter tags
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', fullTitle);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', imageUrl);

  }, [fullTitle, description, robots, canonicalUrl, imageUrl, type]);

  return null;
};

export default SEOHead;
