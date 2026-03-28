import { AFFILIATE_CONFIG } from '@/config/affiliate';

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
    affiliateUrl: AFFILIATE_CONFIG.mainLink,
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
    affiliateUrl: AFFILIATE_CONFIG.mainLink,
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
    affiliateUrl: AFFILIATE_CONFIG.mainLink,
    featured: true,
    rating: 4.5
  },
  {
    id: "4",
    name: "Ashwagandha KSM-66",
    slug: "ashwagandha-ksm66-estresse-ansiedade",
    tagline: "O Adaptógeno Mais Estudado Para Estresse e Cortisol",
    description: `A Ashwagandha KSM-66® é considerada o padrão ouro dos extratos de ashwagandha, sendo a forma mais pesquisada e clinicamente testada disponível no mercado. Diferente de extratos genéricos, o KSM-66 utiliza exclusivamente a raiz da planta e possui mais de 20 estudos clínicos que comprovam sua eficácia na redução do cortisol, melhora do estresse e aumento da energia.

Este extrato patenteado e padronizado garante 5% de witanolídeos (os compostos ativos da ashwagandha) através de um processo de extração único que preserva o perfil completo de compostos da raiz, sem uso de álcool ou solventes químicos.`,
    image: "/products/ashwagandha-ksm66.jpg",
    category: "Adaptógenos e Estresse",
    benefits: [
      "Redução comprovada de 27% nos níveis de cortisol",
      "Melhora significativa na percepção de estresse",
      "Aumento de energia e vitalidade sem estimulantes",
      "Melhora na qualidade do sono e recuperação",
      "Suporte à função cognitiva e concentração",
      "Possível aumento da testosterona em homens",
      "Não causa dependência ou efeitos de rebote"
    ],
    ingredients: [
      "Extrato de raiz de Ashwagandha KSM-66®",
      "5% de witanolídeos totais padronizados",
      "Livre de folhas (apenas raiz)",
      "Sem álcool, sem solventes químicos",
      "Certificação orgânica disponível"
    ],
    howToUse: "Tomar 300-600mg por dia, preferencialmente com alimentos. Para estresse: dividir em 2 doses (manhã e tarde). Para sono: dose única 1-2h antes de dormir. Resultados aparecem entre 2-8 semanas de uso consistente.",
    pros: [
      "Padrão ouro com mais estudos clínicos",
      "Extração pura sem solventes químicos",
      "Resultados consistentes e previsíveis",
      "Perfil de segurança excelente",
      "Certificações de qualidade rigorosas"
    ],
    cons: [
      "Custo superior a extratos genéricos",
      "Efeitos demoram 2-4 semanas para aparecer",
      "Sabor amargo característico",
      "Não recomendado para gestantes"
    ],
    forWhom: [
      "Pessoas com estresse crônico elevado",
      "Quem busca adaptógeno com respaldo científico sólido",
      "Profissionais em ambientes de alta pressão",
      "Atletas em períodos de treino intenso",
      "Pessoas com níveis altos de cortisol"
    ],
    technicalInfo: {
      quantity: "60 cápsulas (comum)",
      form: "Cápsulas de extrato KSM-66®",
      dosage: "300-600mg ao dia"
    },
    contraindications: "Não usar durante gravidez e amamentação. Evitar em casos de doenças autoimunes ativas. Pessoas com problemas de tireoide devem monitorar TSH. Suspender 2 semanas antes de cirurgias. Pode interagir com medicamentos para diabetes.",
    affiliateUrl: AFFILIATE_CONFIG.mainLink,
    featured: true,
    rating: 4.6
  },
  {
    id: "5",
    name: "Cúrcuma com Piperina",
    slug: "curcuma-piperina-anti-inflamatorio",
    tagline: "Anti-inflamatório Natural Para Articulações e Dor",
    description: `A combinação de cúrcuma (curcumina) com piperina representa uma das soluções mais eficazes para inflamação crônica disponível naturalmente. A piperina, extraída da pimenta-do-reino, aumenta a biodisponibilidade da curcumina em até 2000%, resolvendo o principal problema desta especiaria milenar.

Esta formulação oferece benefícios anti-inflamatórios comparáveis ao ibuprofeno para dor articular, mas sem os efeitos colaterais gastrointestinais. Ideal para quem busca alternativa natural aos anti-inflamatórios convencionais ou deseja suporte preventivo para saúde articular.`,
    image: "/products/curcuma-piperina.jpg",
    category: "Anti-inflamatórios Naturais",
    benefits: [
      "Redução significativa de marcadores inflamatórios",
      "Alívio da dor articular e muscular",
      "Melhora da mobilidade e flexibilidade",
      "Proteção contra danos oxidativos",
      "Suporte à saúde cerebral e cardiovascular",
      "Auxilia na recuperação pós-exercício",
      "Pode reduzir necessidade de AINEs"
    ],
    ingredients: [
      "Extrato de Cúrcuma padronizado (95% curcuminoides)",
      "Piperina (extrato de pimenta-do-reino)",
      "Curcumina, demetoxicurcumina, bisdemetoxicurcumina",
      "Proporção otimizada 100:1 (curcumina:piperina)"
    ],
    howToUse: "Tomar 500-1000mg de curcumina + 5-10mg de piperina, 1-2 vezes ao dia com alimentos ricos em gordura. Para dor aguda: dose maior dividida em 2-3 tomadas. Para manutenção: dose menor uma vez ao dia após refeição principal.",
    pros: [
      "Biodisponibilidade até 20x maior com piperina",
      "Eficácia comparável a anti-inflamatórios sintéticos",
      "Perfil de segurança superior aos AINEs",
      "Benefícios além da ação anti-inflamatória",
      "Pode ser usado a longo prazo"
    ],
    cons: [
      "Pode aumentar risco de sangramento",
      "Contraindicado com cálculos biliares",
      "Interação com anticoagulantes",
      "Absorção depende de ingestão com gorduras"
    ],
    forWhom: [
      "Pessoas com artrite ou artrose",
      "Atletas com inflamação crônica",
      "Quem tem dor muscular frequente",
      "Pessoas que querem reduzir uso de AINEs",
      "Indivíduos com inflamação sistêmica elevada"
    ],
    technicalInfo: {
      quantity: "90 cápsulas (comum)",
      form: "Cápsulas com extrato padronizado",
      dosage: "500-1000mg de curcumina + 5-10mg piperina"
    },
    contraindications: "Não usar com anticoagulantes sem supervisão médica. Evitar em casos de cálculos biliares ou obstrução biliar. Suspender 2 semanas antes de cirurgias. Gravidez: evitar doses terapêuticas. Monitorar glicemia em diabéticos.",
    affiliateUrl: AFFILIATE_CONFIG.mainLink,
    featured: true,
    rating: 4.4
  },
  {
    id: "6",
    name: "Ginkgo Biloba",
    slug: "ginkgo-biloba-memoria-concentracao",
    tagline: "Para Memória, Concentração e Circulação Cerebral",
    description: `O Ginkgo Biloba é uma das plantas medicinais mais antigas e estudadas para suporte cognitivo, com mais de 300 estudos clínicos documentando seus benefícios para memória, concentração e circulação cerebral. Esta "árvore da memória" de 200 milhões de anos oferece compostos únicos que melhoram o fluxo sanguíneo cerebral e protegem os neurônios contra danos oxidativos.

Extratos padronizados de Ginkgo (EGb 761) são reconhecidos como medicamento de prescrição em vários países europeus para demência e declínio cognitivo, demonstrando a seriedade científica desta planta milenar.`,
    image: "/products/ginkgo-biloba.jpg",
    category: "Cognição e Memória",
    benefits: [
      "Melhora da memória de curto e longo prazo",
      "Aumento da concentração e foco mental",
      "Melhora da circulação sanguínea cerebral",
      "Proteção neuronal contra radicais livres",
      "Pode reduzir sintomas de vertigem",
      "Suporte à função cognitiva em idosos",
      "Possível melhora em zumbido no ouvido"
    ],
    ingredients: [
      "Extrato padronizado de Ginkgo biloba",
      "24% de ginkgoflavonoides (flavonoides)",
      "6% de terpenolactonas (ginkgolídeos + bilobalídeos)",
      "Livre de ácido ginkgólico (<5ppm)",
      "Concentração 50:1 (folha:extrato)"
    ],
    howToUse: "Tomar 120-240mg de extrato padronizado por dia, dividido em 2-3 doses com alimentos. Para memória: doses menores (120mg) em uso prolongado. Para circulação: doses maiores (240mg) por períodos específicos. Resultados aparecem após 4-6 semanas de uso.",
    pros: [
      "Centenas de estudos clínicos de suporte",
      "Benefícios cognitivos bem documentados",
      "Melhora mensurável em testes de memória",
      "Seguro para uso a longo prazo",
      "Reconhecido como medicamento na Europa"
    ],
    cons: [
      "Efeitos demoram 4-6 semanas para aparecer",
      "Pode interagir com anticoagulantes",
      "Qualidade varia muito entre marcas",
      "Alguns estudos mostram resultados mistos"
    ],
    forWhom: [
      "Estudantes e profissionais intelectuais",
      "Pessoas com declínio cognitivo inicial",
      "Idosos com perda de memória",
      "Quem tem problemas circulatórios cerebrais",
      "Pessoas que buscam neuroproteção preventiva"
    ],
    technicalInfo: {
      quantity: "60 cápsulas (comum)",
      form: "Cápsulas de extrato padronizado",
      dosage: "120-240mg ao dia"
    },
    contraindications: "Não usar com anticoagulantes sem supervisão médica. Evitar antes de cirurgias (risco hemorrágico). Pessoas com epilepsia devem ter cautela. Pode interagir com alguns antidepressivos. Não recomendado em gravidez.",
    affiliateUrl: AFFILIATE_CONFIG.mainLink,
    featured: true,
    rating: 4.2
  }
];

export const getProductBySlug = (slug: string): ProductReview | undefined => {
  return productReviews.find(p => p.slug === slug);
};

export const getFeaturedProducts = (): ProductReview[] => {
  return productReviews.filter(p => p.featured);
};
