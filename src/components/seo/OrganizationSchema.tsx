import { useEffect } from 'react';

const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FitoPlantaMed",
    "url": "https://fitoplantamed.com",
    "logo": "https://fitoplantamed.com/favicon.png",
    "description": "Portal de informações sobre fitoterapia, plantas medicinais e suplementos naturais, com conteúdo revisado por profissionais de saúde.",
    "founder": {
      "@type": "Person",
      "name": "Marta Leni",
      "jobTitle": "Farmacêutica Clínica"
    },
    "foundingDate": "2024",
    "sameAs": [],
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

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'organization-schema';
    script.textContent = JSON.stringify(schema);
    
    const existing = document.getElementById('organization-schema');
    if (existing) existing.remove();
    
    document.head.appendChild(script);
    
    return () => {
      const schemaScript = document.getElementById('organization-schema');
      if (schemaScript) schemaScript.remove();
    };
  }, []);

  return null;
};

export default OrganizationSchema;
