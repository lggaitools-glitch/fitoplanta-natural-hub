import JsonLd from './JsonLd';

interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  slug: string;
  rating: number;
  category: string;
}

const ProductSchema = ({ name, description, image, slug }: ProductSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": name,
    "description": description,
    "image": new URL(image, 'https://fitoplantamed.com').href,
    "url": `https://fitoplantamed.com/produtos/${slug}`
  };

  return <JsonLd data={schema} />;
};

export default ProductSchema;
