export interface GuideProduct {
  name: string;
  brand: string;
  country: 'BR' | 'US';
  description: string;
  pros: string[];
  cons: string[];
  affiliateLink?: string;
}

export interface Guide {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  heroImage: string;
  introduction: string;
  criteria: string[];
  productsBR: GuideProduct[];
  productsUS: GuideProduct[];
  conclusion: string;
  relatedGuides: string[];
  relatedPlants: string[];
}

export const guides: Guide[] = [
  {
    slug: 'melhor-valeriana',
    title: 'Melhor Valeriana',
    subtitle: 'Guia Completo 2024',
    description: 'Análise das melhores marcas de valeriana disponíveis no Brasil e EUA, com critérios rigorosos de qualidade.',
    category: 'sono',
    heroImage: '/guides/valeriana.jpg',
    introduction: 'A valeriana é um dos fitoterápicos mais procurados para melhorar o sono e reduzir a ansiedade. Porém, nem todos os produtos no mercado oferecem a mesma qualidade. Neste guia, analisamos as melhores opções disponíveis no Brasil e nos Estados Unidos.',
    criteria: [
      'Concentração de ácido valerênico (princípio ativo)',
      'Origem e certificação da matéria-prima',
      'Presença de testes de terceiros',
      'Relação custo-benefício',
      'Reputação da marca',
      'Transparência nos ingredientes'
    ],
    productsBR: [
      {
        name: 'Valeriana 500mg',
        brand: 'Herbarium',
        country: 'BR',
        description: 'Uma das marcas mais tradicionais do Brasil, com décadas de experiência em fitoterápicos.',
        pros: ['Marca consolidada no mercado', 'Fácil de encontrar', 'Preço acessível', 'Registro na ANVISA'],
        cons: ['Concentração moderada', 'Embalagem simples']
      },
      {
        name: 'Valeriane',
        brand: 'Natulab',
        country: 'BR',
        description: 'Produto premium com extrato padronizado de alta qualidade.',
        pros: ['Extrato padronizado', 'Boa concentração', 'Embalagem prática'],
        cons: ['Preço mais elevado', 'Menor disponibilidade']
      }
    ],
    productsUS: [
      {
        name: 'Valerian Root Extract',
        brand: "Nature's Way",
        country: 'US',
        description: 'Marca americana renomada com rigoroso controle de qualidade.',
        pros: ['Certificação TRU-ID', 'Alta concentração', 'Testes de terceiros', 'Non-GMO'],
        cons: ['Necessita importação', 'Preço em dólar']
      },
      {
        name: 'Valerian Root',
        brand: 'NOW Foods',
        country: 'US',
        description: 'Excelente custo-benefício com qualidade garantida.',
        pros: ['Preço competitivo', 'GMP certified', 'Boa reputação', 'Fácil de importar'],
        cons: ['Cápsulas grandes', 'Pode ter aroma forte']
      }
    ],
    conclusion: 'Para quem busca praticidade e confiabilidade no Brasil, a Herbarium é uma escolha sólida. Se você pode importar e busca máxima qualidade, a Nature\'s Way oferece um produto excepcional.',
    relatedGuides: ['melhor-fitoterapico-para-sono'],
    relatedPlants: ['valeriana', 'melissa']
  },
  {
    slug: 'melhor-fitoterapico-para-sono',
    title: 'Melhor Fitoterápico Para Sono',
    subtitle: 'Comparativo Completo 2024',
    description: 'Descubra qual fitoterápico é mais eficaz para melhorar a qualidade do seu sono naturalmente.',
    category: 'sono',
    heroImage: '/guides/sono.jpg',
    introduction: 'Dormir bem é essencial para a saúde, mas milhões de brasileiros sofrem com problemas de sono. Os fitoterápicos oferecem uma alternativa natural aos medicamentos sintéticos, com menos efeitos colaterais.',
    criteria: [
      'Eficácia comprovada em estudos',
      'Rapidez de ação',
      'Segurança a longo prazo',
      'Facilidade de uso',
      'Ausência de dependência'
    ],
    productsBR: [
      {
        name: 'Valeriana + Passiflora',
        brand: 'Herbarium',
        country: 'BR',
        description: 'Combinação sinérgica de duas plantas calmantes.',
        pros: ['Efeito potencializado', 'Ação rápida', 'Bem tolerado'],
        cons: ['Pode causar sonolência diurna']
      },
      {
        name: 'Maracugina',
        brand: 'Catarinense',
        country: 'BR',
        description: 'Tradicional produto à base de passiflora.',
        pros: ['Marca conhecida', 'Preço acessível', 'Longa tradição'],
        cons: ['Concentração variável', 'Formulação antiga']
      }
    ],
    productsUS: [
      {
        name: 'Sleep Formula',
        brand: 'Gaia Herbs',
        country: 'US',
        description: 'Blend premium com múltiplas plantas para sono.',
        pros: ['Fórmula completa', 'Orgânico', 'Rastreabilidade'],
        cons: ['Preço elevado', 'Importação necessária']
      }
    ],
    conclusion: 'A combinação de valeriana com passiflora tende a ser mais eficaz que plantas isoladas. Para casos mais leves, a melissa também é uma excelente opção.',
    relatedGuides: ['melhor-valeriana'],
    relatedPlants: ['valeriana', 'melissa']
  },
  {
    slug: 'melhor-suplemento-para-imunidade',
    title: 'Melhor Suplemento Para Imunidade',
    subtitle: 'Guia Completo 2024',
    description: 'Os melhores suplementos naturais para fortalecer seu sistema imunológico.',
    category: 'imunidade',
    heroImage: '/guides/imunidade.jpg',
    introduction: 'Um sistema imunológico forte é a primeira linha de defesa do corpo. Diversos suplementos naturais podem ajudar a fortalecer sua imunidade, especialmente em épocas de maior vulnerabilidade.',
    criteria: [
      'Evidência científica de eficácia',
      'Qualidade dos ingredientes',
      'Biodisponibilidade',
      'Segurança do produto',
      'Sustentabilidade da marca'
    ],
    productsBR: [
      {
        name: 'Equinácea Composta',
        brand: 'Herbarium',
        country: 'BR',
        description: 'Combinação de equinácea com própolis e vitamina C.',
        pros: ['Fórmula completa', 'Marca confiável', 'Bom preço'],
        cons: ['Gosto pode ser forte']
      }
    ],
    productsUS: [
      {
        name: 'Echinacea Supreme',
        brand: 'Gaia Herbs',
        country: 'US',
        description: 'Extrato concentrado de alta potência.',
        pros: ['Orgânico certificado', 'Altíssima qualidade', 'Rastreável'],
        cons: ['Preço premium', 'Difícil de encontrar']
      }
    ],
    conclusion: 'A equinácea é o fitoterápico mais estudado para imunidade. Combine com hábitos saudáveis para melhores resultados.',
    relatedGuides: [],
    relatedPlants: ['equinacea']
  },
  {
    slug: 'melhor-anti-inflamatorio-natural',
    title: 'Melhor Anti-inflamatório Natural',
    subtitle: 'Guia Completo 2024',
    description: 'Comparativo dos melhores anti-inflamatórios naturais: cúrcuma, gengibre, boswellia e mais. Descubra qual funciona melhor para dores e inflamações.',
    category: 'anti-inflamatorio',
    heroImage: '/guides/anti-inflamatorio.jpg',
    introduction: 'A inflamação crônica é considerada a raiz de diversas doenças modernas, incluindo artrite, doenças cardíacas e até depressão. Os anti-inflamatórios naturais oferecem uma alternativa com menos efeitos colaterais gastrointestinais que os AINEs convencionais. Neste guia, comparamos os mais eficazes.',
    criteria: [
      'Potência anti-inflamatória comprovada em estudos clínicos',
      'Biodisponibilidade do princípio ativo',
      'Perfil de segurança a longo prazo',
      'Versatilidade de aplicações terapêuticas',
      'Relação custo-benefício',
      'Disponibilidade no mercado brasileiro'
    ],
    productsBR: [
      {
        name: 'Cúrcuma + Piperina 500mg',
        brand: 'Vitafor',
        country: 'BR',
        description: 'Cúrcuma com 95% de curcuminoides e piperina para máxima absorção.',
        pros: ['Extrato padronizado', 'Piperina inclusa', 'Boa concentração', 'Marca respeitada'],
        cons: ['Preço médio-alto', 'Cápsulas grandes']
      },
      {
        name: 'Curcuma Longa',
        brand: 'Herbarium',
        country: 'BR',
        description: 'Extrato padronizado da cúrcuma com registro fitoterápico.',
        pros: ['Registro ANVISA', 'Marca tradicional', 'Preço acessível'],
        cons: ['Sem piperina na fórmula', 'Absorção limitada']
      }
    ],
    productsUS: [
      {
        name: 'Turmeric Supreme',
        brand: 'Gaia Herbs',
        country: 'US',
        description: 'Fórmula líquida de alta absorção com cúrcuma orgânica.',
        pros: ['Orgânico', 'Phyto-Caps líquidas', 'Absorção superior', 'Rastreável'],
        cons: ['Preço premium', 'Necessita importação']
      },
      {
        name: 'CurcuminRich Theracurmin',
        brand: 'Natural Factors',
        country: 'US',
        description: 'Forma micronizada de curcumina com 27x mais absorção.',
        pros: ['Tecnologia Theracurmin', 'Absorção 27x superior', 'Estudado clinicamente'],
        cons: ['Preço elevado', 'Poucas cápsulas por embalagem']
      }
    ],
    conclusion: 'A cúrcuma com piperina é a opção mais acessível e eficaz para uso geral. Para casos que exigem maior potência, as formulações com tecnologia de absorção avançada (como Theracurmin) são superiores.',
    relatedGuides: ['melhor-suplemento-para-imunidade'],
    relatedPlants: ['curcuma']
  },
  {
    slug: 'melhor-fitoterapico-para-ansiedade',
    title: 'Melhor Fitoterápico Para Ansiedade',
    subtitle: 'Guia Completo 2024',
    description: 'Os melhores fitoterápicos para ansiedade: passiflora, ashwagandha, valeriana e melissa. Comparativo com base em evidências científicas.',
    category: 'ansiedade',
    heroImage: '/guides/ansiedade.jpg',
    introduction: 'A ansiedade é um dos transtornos mentais mais prevalentes no Brasil, que lidera o ranking mundial. Muitas pessoas buscam alternativas naturais aos ansiolíticos convencionais, que podem causar dependência. Os fitoterápicos oferecem opções seguras e eficazes para ansiedade leve a moderada.',
    criteria: [
      'Eficácia ansiolítica comprovada em ensaios clínicos',
      'Rapidez de ação (aguda vs acumulativa)',
      'Ausência de dependência ou tolerância',
      'Segurança no uso prolongado',
      'Compatibilidade com a rotina diária',
      'Disponibilidade e custo no Brasil'
    ],
    productsBR: [
      {
        name: 'Passiflora Composta',
        brand: 'Herbarium',
        country: 'BR',
        description: 'Combinação de passiflora com outras plantas calmantes.',
        pros: ['Ação sinérgica', 'Marca confiável', 'Registro ANVISA', 'Preço acessível'],
        cons: ['Pode causar leve sonolência', 'Efeito demora alguns dias']
      },
      {
        name: 'Calman',
        brand: 'Aspen Pharma',
        country: 'BR',
        description: 'Fitoterápico clássico à base de passiflora, valeriana e crataegus.',
        pros: ['Fórmula clássica brasileira', 'Amplamente estudado', 'Fácil acesso'],
        cons: ['Fórmula antiga', 'Pode interagir com sedativos']
      }
    ],
    productsUS: [
      {
        name: 'Ashwagandha KSM-66',
        brand: 'Jarrow Formulas',
        country: 'US',
        description: 'Extrato patenteado de ashwagandha com mais de 20 estudos clínicos.',
        pros: ['Extrato KSM-66 patenteado', 'Reduz cortisol comprovadamente', 'Ação adaptogênica', 'Non-GMO'],
        cons: ['Importação necessária', 'Resultados após 4-8 semanas']
      },
      {
        name: 'Calm Support',
        brand: 'Gaia Herbs',
        country: 'US',
        description: 'Blend com ashwagandha, lavanda e aveia verde para alívio da ansiedade.',
        pros: ['Fórmula completa', 'Orgânico', 'Ação rápida e sustentada'],
        cons: ['Preço elevado', 'Muitos ingredientes ativos']
      }
    ],
    conclusion: 'Para ansiedade aguda, a passiflora e a melissa oferecem alívio mais rápido. Para ansiedade crônica e estresse prolongado, a ashwagandha é superior por sua ação adaptogênica que reduz o cortisol ao longo do tempo. A combinação de ambas as abordagens pode ser ideal.',
    relatedGuides: ['melhor-fitoterapico-para-sono', 'melhor-valeriana'],
    relatedPlants: ['maracuja', 'ashwagandha', 'valeriana', 'melissa']
  },
  {
    slug: 'melhor-energia-natural',
    title: 'Melhor Suplemento Para Energia Natural',
    subtitle: 'Alternativas Saudáveis ao Café',
    description: 'Descubra os melhores suplementos naturais para aumentar sua energia e disposição.',
    category: 'energia',
    heroImage: '/guides/energia.jpg',
    introduction: 'Cansaço e falta de energia são queixas comuns no mundo moderno. Felizmente, existem alternativas naturais que podem ajudar a aumentar a disposição sem os efeitos negativos de estimulantes sintéticos.',
    criteria: [
      'Tipo de energia fornecida (rápida vs sustentada)',
      'Ausência de efeitos colaterais',
      'Adaptabilidade ao estresse',
      'Qualidade e pureza',
      'Sustentabilidade do efeito'
    ],
    productsBR: [
      {
        name: 'Guaraná da Amazônia',
        brand: 'Amazonas',
        country: 'BR',
        description: 'Guaraná puro da floresta amazônica.',
        pros: ['100% natural', 'Origem sustentável', 'Energia gradual'],
        cons: ['Pode conter variação de cafeína']
      }
    ],
    productsUS: [
      {
        name: 'Korean Ginseng',
        brand: "Nature's Way",
        country: 'US',
        description: 'Ginseng coreano padronizado em ginsenosídeos.',
        pros: ['Adaptógeno comprovado', 'Energia sustentada', 'Melhora cognitiva'],
        cons: ['Efeito demora a aparecer', 'Preço elevado']
      }
    ],
    conclusion: 'O guaraná é ideal para energia rápida, enquanto o ginseng funciona melhor a longo prazo como adaptógeno.',
    relatedGuides: [],
    relatedPlants: ['guarana', 'ginseng']
  },
  {
    slug: 'melhor-gengibre',
    title: 'Melhor Gengibre em Cápsulas',
    subtitle: 'Guia Completo 2026',
    description: 'Comparativo das melhores marcas de gengibre em cápsulas disponíveis no Brasil. Avaliamos concentração de gingeróis, padronização, custo-benefício e qualidade.',
    category: 'anti-inflamatorio',
    heroImage: '/guides/gengibre.jpg',
    introduction: 'O gengibre é uma das plantas medicinais mais versáteis e estudadas do mundo. Em cápsulas, oferece praticidade e dosagem controlada para quem busca seus benefícios anti-inflamatórios, digestivos e antináusea. Neste guia, comparamos as melhores opções do mercado brasileiro e internacional.',
    criteria: [
      'Concentração de gingeróis (mínimo 5%)',
      'Padronização do extrato',
      'Certificação de qualidade (BPF/GMP)',
      'Custo-benefício',
      'Reputação da marca'
    ],
    productsBR: [
      {
        name: 'Gengibre Premium Gold',
        brand: 'Vitafor',
        country: 'BR',
        description: 'Extrato padronizado de gengibre com alta concentração de gingeróis e certificação de qualidade.',
        pros: ['Extrato padronizado com 5% de gingeróis', 'Certificação BPF', 'Boa concentração por cápsula', 'Marca respeitada no mercado'],
        cons: ['Preço acima da média', 'Disponibilidade limitada em farmácias']
      },
      {
        name: 'Gengibre Essencial Plus',
        brand: 'Herbarium',
        country: 'BR',
        description: 'Gengibre em cápsulas de marca tradicional brasileira com registro na ANVISA.',
        pros: ['Registro ANVISA', 'Marca consolidada', 'Preço acessível', 'Fácil de encontrar'],
        cons: ['Concentração de gingeróis não especificada', 'Extrato não padronizado']
      }
    ],
    productsUS: [
      {
        name: 'Gengibre Puro Natural',
        brand: "Nature's Way",
        country: 'US',
        description: 'Extrato de gengibre de alta qualidade com padronização rigorosa e testes de terceiros.',
        pros: ['Certificação TRU-ID', 'Padronizado em gingeróis', 'Non-GMO', 'Testes de terceiros independentes'],
        cons: ['Necessita importação', 'Preço em dólar']
      }
    ],
    conclusion: 'O gengibre em cápsulas é uma forma prática e eficaz de obter os benefícios desta raiz milenar. Priorize extratos padronizados com mínimo de 5% de gingeróis e certificação de qualidade.',
    relatedGuides: ['melhor-anti-inflamatorio-natural'],
    relatedPlants: ['gengibre', 'curcuma']
  },
  {
    slug: 'melhor-suplemento-estresse-ansiedade',
    title: 'Melhor Suplemento Para Estresse e Ansiedade',
    subtitle: 'Guia Comparativo 2026',
    description: 'Comparativo completo dos melhores suplementos naturais para estresse e ansiedade: Ashwagandha, Passiflora, Valeriana, Rhodiola e Melissa.',
    category: 'ansiedade',
    heroImage: '/guides/estresse-ansiedade.jpg',
    introduction: 'O estresse e a ansiedade são os males do século, e a busca por alternativas naturais nunca foi tão grande. Neste guia, comparamos os melhores suplementos naturais para quem deseja aliviar esses sintomas de forma segura, com base em evidências científicas e disponibilidade no mercado.',
    criteria: [
      'Eficácia comprovada em estudos clínicos',
      'Perfil de segurança',
      'Velocidade de ação',
      'Versatilidade de uso',
      'Custo-benefício'
    ],
    productsBR: [
      {
        name: 'Ashwagandha KSM-66 Premium',
        brand: 'Vitafor',
        country: 'BR',
        description: 'Extrato patenteado KSM-66 de ashwagandha, o mais estudado do mundo para redução de estresse e cortisol.',
        pros: ['Extrato KSM-66 patenteado', 'Redução comprovada de cortisol em 28%', 'Ação adaptogênica ampla', 'Resultados em 4-8 semanas'],
        cons: ['Preço mais elevado', 'Efeito não é imediato', 'Pode causar sonolência em alguns']
      },
      {
        name: 'Passiflora Concentrada Plus',
        brand: 'Herbarium',
        country: 'BR',
        description: 'Extrato concentrado de passiflora com ação ansiolítica rápida e comprovada.',
        pros: ['Ação rápida (30-60 minutos)', 'Não causa dependência', 'Registro ANVISA', 'Preço acessível'],
        cons: ['Pode causar sonolência', 'Menos eficaz para estresse crônico', 'Foco principal em ansiedade aguda']
      }
    ],
    productsUS: [
      {
        name: 'Complexo Anti-Estresse Natural',
        brand: 'Gaia Herbs',
        country: 'US',
        description: 'Blend premium com rhodiola, ashwagandha e melissa para alívio completo do estresse e ansiedade.',
        pros: ['Fórmula sinérgica completa', 'Ingredientes orgânicos', 'Ação em múltiplas vias do estresse', 'Rastreabilidade total'],
        cons: ['Preço premium', 'Necessita importação', 'Muitos ingredientes ativos simultâneos']
      }
    ],
    conclusion: 'A escolha ideal depende do seu perfil: para estresse com fadiga, prefira Ashwagandha ou Rhodiola. Para ansiedade com insônia, Passiflora ou Valeriana são mais indicadas. Melissa é uma excelente opção para quem busca efeito calmante suave sem sonolência.',
    relatedGuides: ['melhor-fitoterapico-para-ansiedade', 'melhor-fitoterapico-para-sono'],
    relatedPlants: ['ashwagandha', 'valeriana', 'maracuja', 'melissa', 'rhodiola']
  }
];

export const getGuideBySlug = (slug: string): Guide | undefined => {
  return guides.find(g => g.slug === slug);
};
