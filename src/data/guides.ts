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
  }
];

export const getGuideBySlug = (slug: string): Guide | undefined => {
  return guides.find(g => g.slug === slug);
};
