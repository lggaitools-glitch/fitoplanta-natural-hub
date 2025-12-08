export interface Product {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  benefits: string[];
  ingredients: string[];
  howToUse: string;
  technicalInfo: {
    quantity: string;
    form: string;
    dosage: string;
  };
  contraindications: string;
  faqs: { question: string; answer: string }[];
  testimonials: { name: string; text: string; rating: number }[];
  featured: boolean;
  badge?: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "FitoCalm",
    slug: "fitocalm",
    tagline: "Tranquilidade e sono natural",
    description: "FitoCalm é uma fórmula premium desenvolvida com extratos padronizados de Valeriana e Melissa, duas plantas tradicionais reconhecidas por suas propriedades calmantes. Nossa tecnologia de extração preserva os compostos ativos em sua forma mais biodisponível, garantindo eficácia comprovada para noites de sono restaurador e dias mais tranquilos.",
    price: 89.90,
    originalPrice: 119.90,
    image: "/products/fitocalm.jpg",
    category: "Relaxamento",
    benefits: [
      "Promove relaxamento natural sem sonolência diurna",
      "Melhora a qualidade do sono profundo",
      "Reduz a ansiedade e o estresse do dia a dia",
      "Auxilia no equilíbrio emocional",
      "Não causa dependência"
    ],
    ingredients: [
      "Extrato seco de Valeriana (Valeriana officinalis) 250mg",
      "Extrato seco de Melissa (Melissa officinalis) 150mg",
      "Vitamina B6 1,3mg",
      "Magnésio quelado 65mg"
    ],
    howToUse: "Tomar 2 cápsulas ao dia, preferencialmente 30 minutos antes de dormir. Para ansiedade diurna, tomar 1 cápsula pela manhã e 1 à noite.",
    technicalInfo: {
      quantity: "60 cápsulas",
      form: "Cápsulas vegetais",
      dosage: "2 cápsulas ao dia"
    },
    contraindications: "Não recomendado para gestantes, lactantes e menores de 18 anos sem orientação médica. Consulte um profissional de saúde antes do uso se estiver tomando medicamentos para ansiedade ou depressão.",
    faqs: [
      {
        question: "FitoCalm causa dependência?",
        answer: "Não. Por ser um produto 100% natural à base de plantas, FitoCalm não causa dependência física ou psicológica, podendo ser usado de forma contínua com segurança."
      },
      {
        question: "Posso tomar durante o dia?",
        answer: "Sim. Embora promova relaxamento, FitoCalm não causa sonolência excessiva, podendo ser utilizado durante o dia para controle do estresse."
      },
      {
        question: "Em quanto tempo verei resultados?",
        answer: "Os efeitos podem ser percebidos já nas primeiras doses. Para resultados ótimos no sono, recomendamos uso contínuo por pelo menos 2 semanas."
      }
    ],
    testimonials: [
      {
        name: "Maria S.",
        text: "Finalmente consegui dormir bem depois de anos de insônia. FitoCalm mudou minha qualidade de vida!",
        rating: 5
      },
      {
        name: "Carlos R.",
        text: "Uso há 3 meses e a diferença é incrível. Acordo disposto e sem aquela sensação de cansaço.",
        rating: 5
      }
    ],
    featured: true,
    badge: "Mais Vendido"
  },
  {
    id: "2",
    name: "ImmunoPlanta",
    slug: "immunoplanta",
    tagline: "Fortalecimento diário da imunidade",
    description: "ImmunoPlanta combina o poder da Equinácea com Gengibre e Zinco quelatado em uma fórmula sinérgica para fortalecimento do sistema imunológico. Desenvolvido com extratos padronizados de alta concentração, oferece proteção natural e suporte às defesas do organismo durante todo o ano.",
    price: 79.90,
    image: "/products/immunoplanta.jpg",
    category: "Imunidade",
    benefits: [
      "Fortalece o sistema imunológico naturalmente",
      "Ação antioxidante potente",
      "Auxilia na prevenção de gripes e resfriados",
      "Acelera a recuperação do organismo",
      "Suporte para mudanças de estação"
    ],
    ingredients: [
      "Extrato seco de Equinácea (Echinacea purpurea) 300mg",
      "Extrato seco de Gengibre (Zingiber officinale) 150mg",
      "Zinco quelado 15mg",
      "Vitamina C 500mg",
      "Vitamina D3 2000UI"
    ],
    howToUse: "Tomar 2 cápsulas ao dia, preferencialmente com as principais refeições. Em períodos de maior exposição, pode-se aumentar para 3 cápsulas ao dia por até 2 semanas.",
    technicalInfo: {
      quantity: "60 cápsulas",
      form: "Cápsulas vegetais",
      dosage: "2 cápsulas ao dia"
    },
    contraindications: "Não recomendado para pessoas com doenças autoimunes, gestantes e lactantes sem orientação médica. Pessoas em uso de imunossupressores devem consultar um médico.",
    faqs: [
      {
        question: "Posso tomar ImmunoPlanta todo dia?",
        answer: "Sim, ImmunoPlanta foi desenvolvido para uso contínuo e seguro. Recomendamos ciclos de 3 meses de uso com 1 mês de pausa."
      },
      {
        question: "É indicado para crianças?",
        answer: "ImmunoPlanta é formulado para adultos. Para crianças, consulte um pediatra para orientação adequada."
      },
      {
        question: "Pode ser tomado com outros suplementos?",
        answer: "Sim, mas evite combinar com outros produtos que contenham Zinco ou Vitamina D para não exceder as doses diárias recomendadas."
      }
    ],
    testimonials: [
      {
        name: "Ana P.",
        text: "Desde que comecei a usar ImmunoPlanta, não peguei mais gripe. Recomendo a todos!",
        rating: 5
      },
      {
        name: "Roberto M.",
        text: "Excelente produto! Sinto que meu corpo está mais resistente às mudanças de clima.",
        rating: 5
      }
    ],
    featured: true,
    badge: "Novidade"
  },
  {
    id: "3",
    name: "EnergiaVerde",
    slug: "energiaverde",
    tagline: "Energia natural e foco prolongado",
    description: "EnergiaVerde é a escolha inteligente para quem busca energia sustentada sem os efeitos colaterais de estimulantes artificiais. Nossa fórmula exclusiva combina Guaraná brasileiro premium com Ginseng coreano, oferecendo disposição física e mental que dura o dia todo, sem picos ou crashes.",
    price: 94.90,
    originalPrice: 114.90,
    image: "/products/energiaverde.jpg",
    category: "Energia",
    benefits: [
      "Energia sustentada ao longo do dia",
      "Melhora o foco e concentração mental",
      "Combate a fadiga física e mental",
      "Não causa nervosismo ou insônia",
      "Suporte para atividades físicas intensas"
    ],
    ingredients: [
      "Extrato seco de Guaraná (Paullinia cupana) 350mg",
      "Extrato seco de Ginseng Coreano (Panax ginseng) 200mg",
      "Vitamina B12 methylcobalamina 500mcg",
      "Coenzima Q10 50mg",
      "Taurina 100mg"
    ],
    howToUse: "Tomar 1 a 2 cápsulas pela manhã, preferencialmente com o café da manhã. Evitar o uso após as 16h para não interferir no sono.",
    technicalInfo: {
      quantity: "60 cápsulas",
      form: "Cápsulas vegetais",
      dosage: "1-2 cápsulas ao dia"
    },
    contraindications: "Não recomendado para pessoas sensíveis à cafeína, hipertensos, gestantes e lactantes. Não exceder a dose recomendada. Consulte um médico se estiver em uso de medicamentos.",
    faqs: [
      {
        question: "EnergiaVerde contém cafeína?",
        answer: "Sim, o Guaraná naturalmente contém cafeína. Cada cápsula fornece aproximadamente 40mg de cafeína natural, equivalente a meia xícara de café."
      },
      {
        question: "Posso usar para treinos?",
        answer: "Sim! EnergiaVerde é excelente como pré-treino natural, fornecendo energia sustentada e foco para suas atividades físicas."
      },
      {
        question: "É seguro para uso diário?",
        answer: "Sim, dentro da dose recomendada. Para uso prolongado, sugerimos ciclos de 8 semanas com pausa de 2 semanas."
      }
    ],
    testimonials: [
      {
        name: "Fernando L.",
        text: "Substitui o excesso de café por EnergiaVerde. Energia constante sem aquela ansiedade!",
        rating: 5
      },
      {
        name: "Juliana C.",
        text: "Perfeito para quem trabalha muito. Me sinto focada e produtiva o dia inteiro.",
        rating: 5
      }
    ],
    featured: true,
    badge: "Premium"
  }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.featured);
};
