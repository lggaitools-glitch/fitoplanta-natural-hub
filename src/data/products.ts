export interface ProductReview {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  image: string;
  category: string;
  benefits: string[];
  ingredients: string[];
  howToUse: string;
  pros: string[];
  cons: string[];
  forWhom: string[];
  technicalInfo: {
    quantity: string;
    form: string;
    dosage: string;
  };
  contraindications: string;
  affiliateUrl: string;
  featured: boolean;
  rating: number;
}

export const productReviews: ProductReview[] = [
  {
    id: "1",
    name: "Valeriana",
    slug: "valeriana-beneficios-melhores-marcas",
    tagline: "Benefícios, Como Funciona e Melhores Marcas",
    description: `A valeriana (Valeriana officinalis) é uma das plantas medicinais mais estudadas e utilizadas no mundo para tratamento de insônia e ansiedade. Originária da Europa e Ásia, esta planta contém compostos únicos que atuam nos receptores GABA do cérebro, promovendo relaxamento sem os efeitos colaterais de medicamentos sintéticos.

Estudos clínicos demonstram que a valeriana pode reduzir significativamente o tempo necessário para adormecer e melhorar a qualidade do sono, especialmente quando usada de forma contínua por algumas semanas.`,
    image: "/products/fitocalm.jpg",
    category: "Relaxamento e Sono",
    benefits: [
      "Reduz o tempo para adormecer naturalmente",
      "Melhora a qualidade do sono profundo",
      "Não causa dependência física ou psicológica",
      "Diminui sintomas de ansiedade leve",
      "Não causa sonolência residual matinal",
      "Pode ser combinada com outras plantas relaxantes"
    ],
    ingredients: [
      "Raiz de Valeriana (Valeriana officinalis)",
      "Ácidos valerênicos (0,8% em extratos padronizados)",
      "Valeranona e outros sesquiterpenos",
      "Flavonoides e lignanas"
    ],
    howToUse: "Tomar 300-600mg de extrato padronizado (0,8% de ácido valerênico) 30 minutos a 2 horas antes de dormir. Para ansiedade, pode-se dividir a dose em 2-3 tomadas ao dia.",
    pros: [
      "Eficácia comprovada em centenas de estudos",
      "Não causa dependência",
      "Perfil de segurança excelente",
      "Pode ser usada a longo prazo",
      "Boa tolerabilidade"
    ],
    cons: [
      "Efeito pode demorar 2-4 semanas para se consolidar",
      "Odor característico desagradável",
      "Não indicada para grávidas/lactantes",
      "Pode interagir com sedativos"
    ],
    forWhom: [
      "Pessoas com dificuldade para adormecer",
      "Quem busca alternativa natural aos soníferos",
      "Pessoas com ansiedade leve a moderada",
      "Quem deseja evitar dependência de medicamentos"
    ],
    technicalInfo: {
      quantity: "60 cápsulas (comum)",
      form: "Cápsulas de extrato seco padronizado",
      dosage: "300-600mg ao dia"
    },
    contraindications: "Não usar durante gravidez e amamentação. Evitar combinar com álcool, benzodiazepínicos ou outros sedativos. Suspender uso 2 semanas antes de cirurgias.",
    affiliateUrl: "#",
    featured: true,
    rating: 4.7
  },
  {
    id: "2",
    name: "Equinácea",
    slug: "equinacea-imunidade-funciona",
    tagline: "Para Imunidade Funciona Mesmo?",
    description: `A equinácea (Echinacea purpurea) é uma das plantas medicinais mais pesquisadas para suporte imunológico. Nativa da América do Norte, foi utilizada por séculos pelos povos indígenas e hoje é um dos fitoterápicos mais vendidos no mundo ocidental.

A grande pergunta que muitos fazem: ela realmente funciona? A resposta baseada em evidências é nuanceada. Estudos mostram que a equinácea pode sim ajudar a reduzir a duração e gravidade de resfriados, especialmente quando iniciada nos primeiros sinais de sintomas. No entanto, seu uso preventivo a longo prazo tem resultados menos consistentes.`,
    image: "/products/immunoplanta.jpg",
    category: "Imunidade",
    benefits: [
      "Pode reduzir duração de resfriados em 1-2 dias",
      "Estimula células do sistema imunológico",
      "Ação anti-inflamatória das vias respiratórias",
      "Efeito antiviral contra vírus respiratórios",
      "Propriedades antioxidantes"
    ],
    ingredients: [
      "Raiz e/ou partes aéreas de Echinacea purpurea",
      "Polissacarídeos imunomoduladores",
      "Alquilamidas (marcadores de qualidade)",
      "Derivados do ácido cafeico",
      "Flavonoides"
    ],
    howToUse: "Ao primeiro sinal de resfriado: 500-1000mg de extrato padronizado, 3x ao dia, por 5-10 dias. Para prevenção: doses menores em ciclos (ex: 3 semanas sim, 1 semana não).",
    pros: [
      "Evidências científicas moderadas a boas",
      "Pode encurtar duração de gripes",
      "Geralmente bem tolerada",
      "Disponível em diversas formas"
    ],
    cons: [
      "Resultados variam entre estudos",
      "Uso preventivo contínuo não é ideal",
      "Contraindicada em doenças autoimunes",
      "Possível alergia em sensíveis a asteráceas"
    ],
    forWhom: [
      "Pessoas que pegam resfriados frequentemente",
      "Quem busca suporte imunológico natural",
      "Para uso nos primeiros sinais de gripe",
      "Pessoas saudáveis em épocas de risco (inverno)"
    ],
    technicalInfo: {
      quantity: "60 cápsulas (comum)",
      form: "Cápsulas ou tintura",
      dosage: "500-1000mg, 1-3x ao dia"
    },
    contraindications: "Não usar em doenças autoimunes (lúpus, artrite reumatoide, esclerose múltipla). Evitar em alérgicos a plantas da família Asteraceae (margaridas, crisântemos). Não usar por mais de 8 semanas contínuas.",
    affiliateUrl: "#",
    featured: true,
    rating: 4.3
  },
  {
    id: "3",
    name: "Guaraná em Cápsulas",
    slug: "guarana-capsulas-energia-natural-marketing",
    tagline: "Energia Natural ou Marketing?",
    description: `O guaraná (Paullinia cupana) é uma planta amazônica famosa mundialmente por seu efeito energético. As sementes de guaraná contêm cerca de 4-6% de cafeína — aproximadamente o dobro do café — além de outros compostos como teobromina e teofilina.

Mas será que o guaraná em cápsulas é realmente superior ao café comum? Ou é apenas marketing aproveitando o apelo do "natural"? Vamos analisar as evidências de forma imparcial.`,
    image: "/products/energiaverde.jpg",
    category: "Energia e Foco",
    benefits: [
      "Aumento de energia e alerta mental",
      "Melhora da concentração e foco",
      "Liberação mais gradual de cafeína que café",
      "Propriedades antioxidantes",
      "Pode auxiliar na performance física",
      "Efeito termogênico suave"
    ],
    ingredients: [
      "Semente de Guaraná (Paullinia cupana)",
      "Cafeína natural (4-6%)",
      "Teobromina",
      "Teofilina",
      "Taninos e saponinas"
    ],
    howToUse: "500-1000mg de pó de guaraná (equivale a 20-60mg de cafeína) pela manhã ou antes de atividades que exijam foco. Evitar após as 16h para não interferir no sono.",
    pros: [
      "Energia sustentada, menos \"pico e queda\"",
      "Compostos adicionais além da cafeína",
      "Tradicionalmente usado há séculos",
      "Conveniente em forma de cápsulas"
    ],
    cons: [
      "Efeitos similares a outras fontes de cafeína",
      "Custo maior que café comum",
      "Pode causar dependência da cafeína",
      "Não indicado para sensíveis a estimulantes"
    ],
    forWhom: [
      "Pessoas que buscam energia sem excesso de café",
      "Quem prefere suplementação em cápsulas",
      "Atletas e praticantes de exercícios",
      "Profissionais que precisam de foco prolongado"
    ],
    technicalInfo: {
      quantity: "60-120 cápsulas (comum)",
      form: "Cápsulas de pó ou extrato",
      dosage: "500-1000mg ao dia"
    },
    contraindications: "Não usar em casos de hipertensão não controlada, arritmias cardíacas, ansiedade severa ou durante a gravidez. Evitar combinar com outros estimulantes. Não exceder 400mg de cafeína/dia de todas as fontes.",
    affiliateUrl: "#",
    featured: true,
    rating: 4.5
  }
];

export const getProductBySlug = (slug: string): ProductReview | undefined => {
  return productReviews.find(p => p.slug === slug);
};

export const getFeaturedProducts = (): ProductReview[] => {
  return productReviews.filter(p => p.featured);
};
