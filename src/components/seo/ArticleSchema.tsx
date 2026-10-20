import JsonLd from './JsonLd';

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
      ...(author === "Marta Leni" ? { url: "https://fitoplantamed.com/sobre" } : {})
    },
    "publisher": {
      "@type": "Organization",
      "name": "FitoPlantaMed",
      "logo": {
        "@type": "ImageObject",
        "url": "https://fitoplantamed.com/brand/brand-logo.webp"
      }
    },
    "datePublished": publishedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://fitoplantamed.com/artigos/${slug}`
    },
    "articleSection": category,
    "inLanguage": "pt-BR"
  };

  return <JsonLd data={schema} />;
};

export default ArticleSchema;
