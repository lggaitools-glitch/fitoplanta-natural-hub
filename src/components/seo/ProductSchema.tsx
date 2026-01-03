import { useEffect } from 'react';

interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  slug: string;
  rating: number;
  category: string;
}

const ProductSchema = ({ name, description, image, slug, rating, category }: ProductSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "image": `https://fitoplantamed.com.br${image}`,
    "brand": {
      "@type": "Brand",
      "name": "FitoPlantaMed"
    },
    "category": category,
    "url": `https://fitoplantamed.com.br/produtos/${slug}`,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating.toString(),
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "1"
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": rating.toString(),
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Marta Leni",
        "url": "https://fitoplantamed.com.br/sobre"
      }
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'product-schema';
    script.textContent = JSON.stringify(schema);
    
    const existing = document.getElementById('product-schema');
    if (existing) existing.remove();
    
    document.head.appendChild(script);
    
    return () => {
      const schemaScript = document.getElementById('product-schema');
      if (schemaScript) schemaScript.remove();
    };
  }, [name, slug]);

  return null;
};

export default ProductSchema;
