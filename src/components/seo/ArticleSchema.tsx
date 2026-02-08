import { useEffect } from 'react';

interface ArticleSchemaProps {
  title: string;
  description: string;
  image: string;
  author: string;
  publishedAt: string;
  slug: string;
  category: string;
}

const ArticleSchema = ({ title, description, image, author, publishedAt, slug, category }: ArticleSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": `https://fitoplantamed.com${image}`,
    "author": {
      "@type": "Person",
      "name": author,
      "url": "https://fitoplantamed.com/sobre"
    },
    "publisher": {
      "@type": "Organization",
      "name": "FitoPlantaMed",
      "logo": {
        "@type": "ImageObject",
        "url": "https://fitoplantamed.com/favicon.png"
      }
    },
    "datePublished": publishedAt,
    "dateModified": publishedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://fitoplantamed.com/artigos/${slug}`
    },
    "articleSection": category,
    "inLanguage": "pt-BR"
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'article-schema';
    script.textContent = JSON.stringify(schema);
    
    // Remove existing schema if present
    const existing = document.getElementById('article-schema');
    if (existing) existing.remove();
    
    document.head.appendChild(script);
    
    return () => {
      const schemaScript = document.getElementById('article-schema');
      if (schemaScript) schemaScript.remove();
    };
  }, [title, slug]);

  return null;
};

export default ArticleSchema;
