import JsonLd from './JsonLd';

const PersonSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Marta Leni",
    "url": "https://fitoplantamed.com/sobre",
    "image": "https://fitoplantamed.com/brand/marta-leni.webp"
  };

  return <JsonLd data={schema} />;
};

export default PersonSchema;
