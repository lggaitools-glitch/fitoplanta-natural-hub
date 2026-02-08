import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_DOMAIN = 'https://fitoplantamed.com';
const SITE_NAME = 'FitoPlantaMed';

interface SEOHeadProps {
  title: string;
  description: string;
  robots?: 'index,follow' | 'noindex,follow' | 'noindex,nofollow';
  ogImage?: string;
}

const SEOHead = ({ 
  title, 
  description, 
  robots = 'index,follow',
  ogImage = '/og-image.jpg'
}: SEOHeadProps) => {
  const location = useLocation();
  
  // Build canonical URL from current path
  const canonicalUrl = `${SITE_DOMAIN}${location.pathname}`;
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

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
    updateMeta('og:type', 'website', true);
    updateMeta('og:image', `${SITE_DOMAIN}${ogImage}`, true);
    updateMeta('og:locale', 'pt_BR', true);
    updateMeta('og:site_name', SITE_NAME, true);

    // Update Twitter tags
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', fullTitle);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', `${SITE_DOMAIN}${ogImage}`);

  }, [fullTitle, description, robots, canonicalUrl, ogImage]);

  return null;
};

export default SEOHead;
