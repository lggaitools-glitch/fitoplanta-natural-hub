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
  },
  {
    slug: 'curcuma',
    name: 'Cúrcuma',
    scientificName: 'Curcuma longa',
    description: 'A cúrcuma, também conhecida como açafrão-da-terra, é uma especiaria milenar originária da Índia. Rica em curcumina, seu principal composto ativo, é amplamente estudada por suas potentes propriedades anti-inflamatórias e antioxidantes.',
    heroImage: '/plants/curcuma.jpg',
    benefits: [
      'Potente ação anti-inflamatória natural',
      'Forte propriedade antioxidante',
      'Pode auxiliar na saúde das articulações',
      'Suporte à saúde digestiva',
      'Potencial neuroprotetor',
      'Pode ajudar na saúde cardiovascular'
    ],
    uses: [
      'Inflamações crônicas e agudas',
      'Dores articulares e artrite',
      'Problemas digestivos',
      'Suporte ao sistema imunológico',
      'Promoção da saúde cerebral',
      'Prevenção do envelhecimento celular'
    ],
    sideEffects: [
      'Desconforto gastrointestinal em doses altas',
      'Pode aumentar risco de sangramento',
      'Náusea em algumas pessoas',
      'Diarreia se consumida em excesso',
      'Reações alérgicas raras'
    ],
    contraindications: [
      'Uso com anticoagulantes',
      'Cálculos biliares ou obstrução biliar',
      'Gravidez em doses terapêuticas',
      'Antes de cirurgias (suspender 2 semanas)',
      'Diabetes com medicação (monitorar glicemia)'
    ],
    subpages: [
      { slug: 'beneficios', title: 'Benefícios da Cúrcuma', description: 'Descubra os benefícios anti-inflamatórios e antioxidantes da cúrcuma para sua saúde' },
      { slug: 'como-usar', title: 'Como Usar Cúrcuma', description: 'Dosagem, formas de uso e dicas para melhorar a absorção da curcumina' },
      { slug: 'efeitos-colaterais', title: 'Efeitos Colaterais da Cúrcuma', description: 'Possíveis efeitos adversos e contraindicações da cúrcuma' },
      { slug: 'melhores-marcas', title: 'Melhores Marcas de Cúrcuma', description: 'Análise das melhores marcas de cúrcuma e curcumina no Brasil' }
    ]
  },
  {
    slug: 'camomila',
    name: 'Camomila',
    scientificName: 'Matricaria chamomilla',
    description: 'A camomila é uma das plantas medicinais mais populares e seguras do mundo. Conhecida por suas delicadas flores brancas com centro amarelo, esta planta aromática é tradicionalmente usada para acalmar o sistema nervoso, melhorar a digestão e promover o relaxamento. Seus compostos ativos, especialmente a apigenina, conferem propriedades ansiolíticas suaves e anti-inflamatórias.',
    heroImage: '/plants/camomila.jpg',
    benefits: [
      'Efeito calmante e relaxante natural',
      'Melhora a qualidade do sono',
      'Auxilia na digestão e alívio de gases',
      'Propriedades anti-inflamatórias suaves',
      'Pode ajudar com cólicas menstruais',
      'Efeito antiespasmódico no trato digestivo',
      'Segura para uso prolongado'
    ],
    uses: [
      'Ansiedade leve e nervosismo',
      'Insônia e dificuldades para dormir',
      'Problemas digestivos e gastrite',
      'Cólicas abdominais e menstruais',
      'Irritações cutâneas (uso tópico)',
      'Desconforto em bebês (cólica infantil)',
      'Estresse e tensão do dia a dia'
    ],
    sideEffects: [
      'Reações alérgicas raras em pessoas sensíveis',
      'Sonolência em doses altas',
      'Possível interação com anticoagulantes',
      'Náusea ocasional em estômago vazio'
    ],
    contraindications: [
      'Alergia a plantas da família Asteraceae',
      'Uso com medicamentos sedativos (potencialização)',
      'Gravidez em doses terapêuticas altas',
      'Antes de cirurgias (suspender 2 semanas)'
    ],
    subpages: [
      { slug: 'beneficios', title: 'Benefícios da Camomila', description: 'Propriedades calmantes, digestivas e anti-inflamatórias da camomila' },
      { slug: 'como-usar', title: 'Como Usar Camomila', description: 'Formas de preparo, dosagem e melhores horários para usar camomila' },
      { slug: 'efeitos-colaterais', title: 'Efeitos Colaterais da Camomila', description: 'Possíveis efeitos adversos e precauções no uso da camomila' },
      { slug: 'melhores-marcas', title: 'Melhores Marcas de Camomila', description: 'Análise das melhores marcas de camomila em chá, extrato e cápsulas' }
    ]
  },
  {
    slug: 'ashwagandha',
    name: 'Ashwagandha',
    scientificName: 'Withania somnifera',
    description: 'A ashwagandha, conhecida como "ginseng indiano", é uma das plantas adaptógenas mais estudadas da medicina ayurvédica. Esta raiz aromática tem ganhado reconhecimento mundial por sua capacidade única de ajudar o organismo a se adaptar ao estresse, melhorar os níveis de energia e promover o bem-estar geral. Rica em witanolídeos, compostos bioativos únicos, a ashwagandha oferece benefícios tanto para o corpo quanto para a mente.',
    heroImage: '/plants/ashwagandha.jpg',
    benefits: [
      'Reduz significativamente os níveis de cortisol',
      'Melhora a adaptação ao estresse físico e mental',
      'Aumenta energia e vitalidade natural',
      'Pode melhorar a qualidade do sono',
      'Suporte à função cognitiva e memória',
      'Possível aumento da testosterona em homens',
      'Propriedades anti-inflamatórias e antioxidantes',
      'Auxilia no controle da ansiedade'
    ],
    uses: [
      'Estresse crônico e burnout',
      'Fadiga e baixa energia',
      'Ansiedade e nervosismo',
      'Insônia e sono não reparador',
      'Baixa libido e problemas sexuais',
      'Suporte durante exercícios intensos',
      'Recuperação pós-doença',
      'Apoio durante períodos de alta demanda'
    ],
    sideEffects: [
      'Sonolência em algumas pessoas (Sensoril)',
      'Desconforto gastrointestinal ocasional',
      'Possível aumento da tireoide (monitorar)',
      'Dor de cabeça leve em doses altas',
      'Alterações no humor inicial (adaptação)'
    ],
    contraindications: [
      'Gravidez e amamentação',
      'Doenças autoimunes (lupus, artrite reumatoide)',
      'Hipertireoidismo',
      'Uso com medicamentos para tireoide',
      'Diabetes (monitorar glicemia)',
      'Cirurgias (suspender 2 semanas antes)'
    ],
    subpages: [
      { slug: 'beneficios', title: 'Benefícios da Ashwagandha', description: 'Como a ashwagandha reduz estresse e melhora energia e vitalidade' },
      { slug: 'como-usar', title: 'Como Usar Ashwagandha', description: 'Dosagem, timing e diferenças entre KSM-66 e Sensoril' },
      { slug: 'efeitos-colaterais', title: 'Efeitos Colaterais da Ashwagandha', description: 'Precauções, contraindicações e efeitos adversos da ashwagandha' },
      { slug: 'melhores-marcas', title: 'Melhores Marcas de Ashwagandha', description: 'Comparativo das melhores marcas com KSM-66 e Sensoril no Brasil' }
    ]
  },
  {
    slug: 'boldo',
    name: 'Boldo',
    scientificName: 'Peumus boldus',
    description: 'O boldo é uma planta nativa do Chile, tradicionalmente utilizada na medicina popular brasileira para problemas digestivos e hepáticos. Rica em boldina, um alcaloide com propriedades hepatoprotetoras, esta planta aromática é reconhecida por sua capacidade de estimular a função biliar e melhorar a digestão de gorduras. É uma das plantas medicinais mais tradicionais para saúde digestiva no Brasil.',
    heroImage: '/plants/boldo.jpg',
    benefits: [
      'Estimula a produção e fluxo de bile',
      'Melhora a digestão de gorduras',
      'Propriedades hepatoprotetoras',
      'Alivia desconforto estomacal',
      'Ação antioxidante suave',
      'Pode auxiliar em problemas vesiculares',
      'Efeito carminativo (reduz gases)',
      'Tradicionalmente usado para ressaca'
    ],
    uses: [
      'Indigestão e má digestão',
      'Sensação de estômago pesado',
      'Flatulência e gases excessivos',
      'Desconforto após refeições gordurosas',
      'Apoio à função hepática',
      'Problemas biliares leves',
      'Náuseas ocasionais',
      'Desintoxicação hepática suave'
    ],
    sideEffects: [
      'Irritação gastrointestinal em doses altas',
      'Possível diarreia com uso excessivo',
      'Não recomendado uso prolongado',
      'Pode agravar refluxo gastroesofágico'
    ],
    contraindications: [
      'Obstrução das vias biliares',
      'Cálculos biliares (pedras na vesícula)',
      'Gravidez e amamentação',
      'Doenças hepáticas graves',
      'Úlcera péptica ativa',
      'Uso por mais de 4 semanas consecutivas'
    ],
    subpages: [
      { slug: 'beneficios', title: 'Benefícios do Boldo', description: 'Como o boldo melhora a digestão e protege o fígado' },
      { slug: 'como-usar', title: 'Como Usar Boldo', description: 'Formas de preparo, dosagem e duração segura de uso do boldo' },
      { slug: 'efeitos-colaterais', title: 'Efeitos Colaterais do Boldo', description: 'Precauções importantes e contraindicações do boldo' },
      { slug: 'melhores-marcas', title: 'Melhores Marcas de Boldo', description: 'Melhores produtos de boldo em chá, cápsulas e extratos' }
    ]
  },
  {
    slug: 'maracuja',
    name: 'Maracujá/Passiflora',
    scientificName: 'Passiflora incarnata',
    description: 'A passiflora, conhecida popularmente como maracujá, é uma das plantas calmantes mais reconhecidas mundialmente. Suas propriedades ansiolíticas são amplamente estudadas e comprovadas cientificamente. Rica em flavonoides e alcaloides, a passiflora oferece um efeito tranquilizante natural sem causar dependência ou sonolência residual, sendo uma excelente opção para ansiedade e insônia.',
    heroImage: '/plants/maracuja.jpg',
    benefits: [
      'Potente efeito ansiolítico natural',
      'Melhora significativa na qualidade do sono',
      'Reduz agitação e nervosismo',
      'Não causa dependência física',
      'Efeito antiespasmódico suave',
      'Pode auxiliar em síndrome pré-menstrual',
      'Propriedades levemente sedativas',
      'Combina bem com outras plantas calmantes'
    ],
    uses: [
      'Transtornos de ansiedade leve a moderada',
      'Insônia e dificuldades para adormecer',
      'Inquietação e agitação mental',
      'Estresse e tensão nervosa',
      'Síndrome do pânico (como coadjuvante)',
      'Abstinência de benzodiazepínicos',
      'Hiperatividade em crianças',
      'Tensão pré-menstrual'
    ],
    sideEffects: [
      'Sonolência diurna em doses altas',
      'Tontura ocasional',
      'Náusea rara em estômago vazio',
      'Possível interação com sedativos'
    ],
    contraindications: [
      'Uso com medicamentos sedativos',
      'Gravidez (pode estimular contrações)',
      'Antes de cirurgias (efeito sedativo)',
      'Hipotensão severa',
      'Crianças menores de 12 anos sem supervisão'
    ],
    subpages: [
      { slug: 'beneficios', title: 'Benefícios da Passiflora', description: 'Propriedades ansiolíticas e sedativas da passiflora para ansiedade e sono' },
      { slug: 'como-usar', title: 'Como Usar Passiflora', description: 'Dosagem, formas de uso e combinações da passiflora' },
      { slug: 'efeitos-colaterais', title: 'Efeitos Colaterais da Passiflora', description: 'Efeitos adversos, interações e precauções da passiflora' },
      { slug: 'melhores-marcas', title: 'Melhores Marcas de Passiflora', description: 'Análise das melhores marcas de passiflora em cápsulas e extratos' }
    ]
  },
  {
    slug: 'espinheira-santa',
    name: 'Espinheira-santa',
    scientificName: 'Maytenus ilicifolia',
    description: 'A espinheira-santa é uma planta medicinal nativa da América do Sul, especialmente valorizada no Brasil por suas propriedades gastroprotetoras. Conhecida popularmente como "insulina vegetal", esta planta tem sido tradicionalmente usada para tratar problemas estomacais, úlceras e questões digestivas. Rica em taninos e flavonoides, oferece proteção à mucosa gástrica e propriedades anti-inflamatórias.',
    heroImage: '/plants/espinheira-santa.jpg',
    benefits: [
      'Proteção da mucosa gástrica',
      'Auxilia no tratamento de úlceras',
      'Propriedades anti-inflamatórias digestivas',
      'Pode auxiliar no controle da glicemia',
      'Efeito cicatrizante na parede do estômago',
      'Reduz acidez estomacal excessiva',
      'Propriedades antioxidantes',
      'Tradicionalmente usada como digestiva'
    ],
    uses: [
      'Úlceras gástricas e duodenais',
      'Gastrite e inflamação estomacal',
      'Azia e refluxo gastroesofágico',
      'Dispepsia e má digestão',
      'Proteção estomacal durante uso de AINEs',
      'Apoio em diabetes tipo 2 (adjuvante)',
      'Dores abdominais de origem gástrica',
      'Prevenção de lesões gástricas'
    ],
    sideEffects: [
      'Boca seca em alguns usuários',
      'Possível constipação intestinal',
      'Náusea ocasional em doses altas',
      'Dor de cabeça leve em pessoas sensíveis'
    ],
    contraindications: [
      'Gravidez e amamentação',
      'Obstrução intestinal',
      'Hipoglicemia severa',
      'Uso com medicamentos hipoglicemiantes (monitorar)',
      'Cirurgias (pode afetar glicemia)',
      'Crianças menores de 12 anos'
    ],
    subpages: [
      { slug: 'beneficios', title: 'Benefícios da Espinheira-santa', description: 'Como a espinheira-santa protege o estômago e auxilia na digestão' },
      { slug: 'como-usar', title: 'Como Usar Espinheira-santa', description: 'Formas de preparo, dosagem e duração de uso da espinheira-santa' },
      { slug: 'efeitos-colaterais', title: 'Efeitos Colaterais da Espinheira-santa', description: 'Precauções e contraindicações da espinheira-santa' },
      { slug: 'melhores-marcas', title: 'Melhores Marcas de Espinheira-santa', description: 'Melhores produtos de espinheira-santa disponíveis no Brasil' }
    ]
  }
];

export const getPlantBySlug = (slug: string): Plant | undefined => {
  return plants.find(plant => plant.slug === slug);
};
