import JsonLd from './JsonLd';

const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FitoPlantaMed",
    "url": "https://fitoplantamed.com",
    "logo": "https://fitoplantamed.com/brand/brand-logo.webp",
    "description": "Portal de informações sobre fitoterapia, plantas medicinais e suplementos naturais.",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": "https://fitoplantamed.com/contato",
      "availableLanguage": "Portuguese"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR"
    }
  };

  return <JsonLd data={schema} />;
};

export default OrganizationSchema;
