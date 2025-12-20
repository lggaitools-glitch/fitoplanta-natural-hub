export interface PlantSubpage {
  slug: string;
  title: string;
  description: string;
}

export interface Plant {
  slug: string;
  name: string;
  scientificName: string;
  description: string;
  heroImage: string;
  benefits: string[];
  uses: string[];
  sideEffects: string[];
  contraindications: string[];
  subpages: PlantSubpage[];
}

export const plants: Plant[] = [
  {
    slug: 'valeriana',
    name: 'Valeriana',
    scientificName: 'Valeriana officinalis',
    description: 'A valeriana é uma das plantas medicinais mais estudadas para o tratamento natural de distúrbios do sono e ansiedade. Originária da Europa e Ásia, é utilizada há séculos na medicina tradicional.',
    heroImage: '/plants/valeriana.jpg',
    benefits: [
      'Melhora a qualidade do sono',
      'Reduz a ansiedade e o estresse',
      'Ajuda no relaxamento muscular',
      'Pode auxiliar na redução da pressão arterial',
      'Efeito calmante natural sem dependência'
    ],
    uses: [
      'Insônia e dificuldade para dormir',
      'Ansiedade leve a moderada',
      'Tensão e estresse do dia a dia',
      'Inquietação e nervosismo',
      'Sintomas de menopausa relacionados ao sono'
    ],
    sideEffects: [
      'Sonolência diurna em alguns casos',
      'Dor de cabeça leve',
      'Desconforto gastrointestinal',
      'Tontura em doses altas'
    ],
    contraindications: [
      'Gravidez e amamentação',
      'Uso com sedativos ou álcool',
      'Antes de cirurgias',
      'Crianças menores de 12 anos'
    ],
    subpages: [
      { slug: 'beneficios', title: 'Benefícios da Valeriana', description: 'Conheça todos os benefícios comprovados da valeriana para sono e ansiedade' },
      { slug: 'como-usar', title: 'Como Usar Valeriana', description: 'Dosagem, formas de uso e melhores horários para tomar valeriana' },
      { slug: 'efeitos-colaterais', title: 'Efeitos Colaterais da Valeriana', description: 'Possíveis efeitos adversos e contraindicações da valeriana' },
      { slug: 'melhores-marcas', title: 'Melhores Marcas de Valeriana', description: 'Análise das melhores marcas de valeriana disponíveis no Brasil e exterior' }
    ]
  },
  {
    slug: 'equinacea',
    name: 'Equinácea',
    scientificName: 'Echinacea purpurea',
    description: 'A equinácea é uma planta nativa da América do Norte conhecida por suas propriedades imunoestimulantes. É amplamente utilizada para prevenção e tratamento de resfriados e gripes.',
    heroImage: '/plants/equinacea.jpg',
    benefits: [
      'Fortalece o sistema imunológico',
      'Reduz duração de resfriados',
      'Propriedades anti-inflamatórias',
      'Pode ajudar em infecções respiratórias',
      'Ação antioxidante'
    ],
    uses: [
      'Prevenção de gripes e resfriados',
      'Tratamento de infecções das vias aéreas',
      'Fortalecimento da imunidade no inverno',
      'Recuperação pós-infecção',
      'Suporte imunológico geral'
    ],
    sideEffects: [
      'Reações alérgicas em pessoas sensíveis',
      'Desconforto estomacal',
      'Náusea em doses altas',
      'Erupções cutâneas raras'
    ],
    contraindications: [
      'Doenças autoimunes',
      'Alergias a plantas da família Asteraceae',
      'Uso prolongado por mais de 8 semanas',
      'Imunossupressão'
    ],
    subpages: [
      { slug: 'beneficios', title: 'Benefícios da Equinácea', description: 'Como a equinácea fortalece seu sistema imunológico' },
      { slug: 'como-usar', title: 'Como Usar Equinácea', description: 'Guia completo de dosagem e formas de uso da equinácea' },
      { slug: 'efeitos-colaterais', title: 'Efeitos Colaterais da Equinácea', description: 'Efeitos adversos e precauções ao usar equinácea' },
      { slug: 'melhores-marcas', title: 'Melhores Marcas de Equinácea', description: 'Comparativo das melhores marcas de equinácea no mercado' }
    ]
  },
  {
    slug: 'guarana',
    name: 'Guaraná',
    scientificName: 'Paullinia cupana',
    description: 'O guaraná é uma planta nativa da Amazônia brasileira, conhecida por seu alto teor de cafeína natural. É amplamente utilizado como estimulante e energético natural.',
    heroImage: '/plants/guarana.jpg',
    benefits: [
      'Aumenta energia e disposição',
      'Melhora concentração e foco',
      'Estimula o metabolismo',
      'Propriedades antioxidantes',
      'Pode auxiliar na perda de peso'
    ],
    uses: [
      'Fadiga e cansaço',
      'Melhora do desempenho físico',
      'Aumento da concentração nos estudos',
      'Suplementação esportiva natural',
      'Apoio em dietas de emagrecimento'
    ],
    sideEffects: [
      'Insônia se tomado à noite',
      'Nervosismo em excesso',
      'Aumento da frequência cardíaca',
      'Ansiedade em pessoas sensíveis'
    ],
    contraindications: [
      'Problemas cardíacos',
      'Hipertensão não controlada',
      'Transtornos de ansiedade',
      'Gravidez e amamentação',
      'Sensibilidade à cafeína'
    ],
    subpages: [
      { slug: 'beneficios', title: 'Benefícios do Guaraná', description: 'Todos os benefícios do guaraná para energia e foco mental' },
      { slug: 'como-usar', title: 'Como Usar Guaraná', description: 'Dosagem correta e melhores formas de consumir guaraná' },
      { slug: 'efeitos-colaterais', title: 'Efeitos Colaterais do Guaraná', description: 'Possíveis efeitos adversos e quem deve evitar guaraná' },
      { slug: 'melhores-marcas', title: 'Melhores Marcas de Guaraná', description: 'As melhores marcas de guaraná em cápsulas e pó' }
    ]
  },
  {
    slug: 'melissa',
    name: 'Melissa',
    scientificName: 'Melissa officinalis',
    description: 'A melissa, também conhecida como erva-cidreira, é uma planta aromática com propriedades calmantes e digestivas. É uma das plantas medicinais mais versáteis e seguras.',
    heroImage: '/plants/melissa.jpg',
    benefits: [
      'Efeito calmante e relaxante',
      'Melhora a digestão',
      'Alivia cólicas e gases',
      'Pode ajudar com herpes labial',
      'Melhora a qualidade do sono'
    ],
    uses: [
      'Ansiedade e nervosismo',
      'Problemas digestivos',
      'Insônia leve',
      'Cólicas menstruais',
      'Dores de cabeça tensionais'
    ],
    sideEffects: [
      'Sonolência em doses altas',
      'Pode interagir com medicamentos para tireoide',
      'Náusea rara',
      'Dor abdominal em excesso'
    ],
    contraindications: [
      'Hipotireoidismo',
      'Uso com sedativos',
      'Gravidez em doses altas',
      'Antes de cirurgias'
    ],
    subpages: [
      { slug: 'beneficios', title: 'Benefícios da Melissa', description: 'Propriedades calmantes e digestivas da melissa' },
      { slug: 'como-usar', title: 'Como Usar Melissa', description: 'Formas de preparo e dosagem da melissa' },
      { slug: 'efeitos-colaterais', title: 'Efeitos Colaterais da Melissa', description: 'Efeitos adversos e interações da melissa' },
      { slug: 'melhores-marcas', title: 'Melhores Marcas de Melissa', description: 'Melhores produtos de melissa no mercado' }
    ]
  },
  {
    slug: 'ginseng',
    name: 'Ginseng',
    scientificName: 'Panax ginseng',
    description: 'O ginseng é uma das plantas medicinais mais valorizadas na medicina tradicional asiática. É conhecido como adaptógeno, ajudando o corpo a lidar com estresse e fadiga.',
    heroImage: '/plants/ginseng.jpg',
    benefits: [
      'Aumenta energia e vitalidade',
      'Melhora função cognitiva',
      'Propriedades adaptógenas',
      'Pode melhorar função sexual',
      'Suporte ao sistema imunológico'
    ],
    uses: [
      'Fadiga crônica',
      'Melhora do desempenho mental',
      'Recuperação física',
      'Estresse e adaptação',
      'Suporte geral à saúde'
    ],
    sideEffects: [
      'Insônia em algumas pessoas',
      'Dor de cabeça',
      'Problemas digestivos',
      'Alterações na pressão arterial'
    ],
    contraindications: [
      'Hipertensão não controlada',
      'Doenças autoimunes',
      'Uso com anticoagulantes',
      'Gravidez e amamentação',
      'Diabetes sem acompanhamento'
    ],
    subpages: [
      { slug: 'beneficios', title: 'Benefícios do Ginseng', description: 'Propriedades adaptógenas e energizantes do ginseng' },
      { slug: 'como-usar', title: 'Como Usar Ginseng', description: 'Dosagem e formas de suplementação com ginseng' },
      { slug: 'efeitos-colaterais', title: 'Efeitos Colaterais do Ginseng', description: 'Efeitos adversos e precauções do ginseng' },
      { slug: 'melhores-marcas', title: 'Melhores Marcas de Ginseng', description: 'Comparativo das melhores marcas de ginseng' }
    ]
  }
];

export const getPlantBySlug = (slug: string): Plant | undefined => {
  return plants.find(plant => plant.slug === slug);
};
