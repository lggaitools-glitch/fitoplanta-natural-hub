import { useEffect } from 'react';

const PersonSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Marta Leni",
    "jobTitle": "Farmacêutica Clínica",
    "description": "Farmacêutica Clínica especializada em Fitoterapia e Prescrição de Fitoterápicos, com Mestrado em Biotecnologia pela UFSCar e mais de 20 anos de experiência na área da saúde.",
    "url": "https://fitoplantamed.com/sobre",
    "image": "https://fitoplantamed.com/sobre/marta-leni.jpg",
    "sameAs": [],
    "alumniOf": [
      {
        "@type": "CollegeOrUniversity",
        "name": "Universidade Anhanguera",
        "department": "Farmácia"
      },
      {
        "@type": "CollegeOrUniversity", 
        "name": "Universidade Federal de São Carlos (UFSCar)",
        "department": "Biotecnologia"
      }
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "degree",
        "name": "Graduação em Farmácia",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Universidade Anhanguera"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "degree",
        "name": "Mestrado em Biotecnologia",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Universidade Federal de São Carlos"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "certificate",
        "name": "Especialização em Fitoterapia Clínica",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Instituto de Pesquisa e Ensino em Saúde de São Paulo"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "certificate",
        "name": "Prescrição de Fitoterápicos",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Conselho Regional de Farmácia"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "license",
        "name": "CRF-SP 93119",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Conselho Regional de Farmácia de São Paulo"
        }
      }
    ],
    "knowsAbout": [
      "Fitoterapia",
      "Plantas Medicinais",
      "Fitoterápicos",
      "Farmácia Clínica",
      "Biotecnologia",
      "Suplementação Natural"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "FitoPlantaMed",
      "url": "https://fitoplantamed.com"
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'person-schema';
    script.textContent = JSON.stringify(schema);
    
    const existing = document.getElementById('person-schema');
    if (existing) existing.remove();
    
    document.head.appendChild(script);
    
    return () => {
      const schemaScript = document.getElementById('person-schema');
      if (schemaScript) schemaScript.remove();
    };
  }, []);

  return null;
};

export default PersonSchema;
