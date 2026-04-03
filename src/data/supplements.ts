export interface Supplement {
  slug: string;
  name: string;
  plant: string;
  form: string;
  description: string;
  benefits: string[];
  howToUse: string;
  dosage: string;
  affiliateLinkBR?: string;
  affiliateLinkUS?: string;
}

export const supplements: Supplement[] = [
  {
    slug: 'valeriana-capsulas',
    name: 'Valeriana em Cápsulas',
    plant: 'Valeriana',
    form: 'Cápsulas',
    description: 'As cápsulas de valeriana são a forma mais popular de suplementação desta planta. Oferecem dosagem precisa e fácil ingestão, sendo ideais para quem busca melhorar a qualidade do sono e reduzir a ansiedade de forma natural.',
    benefits: [
      'Dosagem precisa e padronizada',
      'Fácil de transportar e consumir',
      'Sem sabor desagradável',
      'Absorção eficiente',
      'Ideal para uso diário'
    ],
    howToUse: 'Tomar 1 a 2 cápsulas 30 minutos antes de dormir. Pode ser usado diariamente por até 4 semanas, seguido de uma pausa.',
    dosage: 'Dosagem típica: 300-600mg de extrato padronizado por dia'
  },
  {
    slug: 'guarana-capsulas',
    name: 'Guaraná em Cápsulas',
    plant: 'Guaraná',
    form: 'Cápsulas',
    description: 'O guaraná em cápsulas oferece uma forma prática de obter energia natural. Rico em cafeína, é ideal para quem precisa de disposição extra sem os efeitos negativos de energéticos artificiais.',
    benefits: [
      'Energia de liberação gradual',
      'Sem açúcar ou aditivos',
      'Praticidade no dia a dia',
      'Concentração padronizada',
      'Alternativa natural ao café'
    ],
    howToUse: 'Tomar 1 a 2 cápsulas pela manhã ou antes de atividades que exigem concentração. Evitar após as 16h para não afetar o sono.',
    dosage: 'Dosagem típica: 200-400mg por dia (equivalente a 40-80mg de cafeína)'
  },
  {
    slug: 'equinacea-extrato',
    name: 'Equinácea em Extrato',
    plant: 'Equinácea',
    form: 'Extrato líquido',
    description: 'O extrato de equinácea é uma forma concentrada e de rápida absorção para fortalecer o sistema imunológico. Ideal para prevenção e tratamento de resfriados e gripes.',
    benefits: [
      'Absorção rápida',
      'Concentração elevada de ativos',
      'Flexibilidade na dosagem',
      'Pode ser misturado em bebidas',
      'Início de ação mais rápido'
    ],
    howToUse: 'Diluir 20-30 gotas em água, 2 a 3 vezes ao dia. Para prevenção, usar por 2-3 semanas. Para tratamento, iniciar aos primeiros sintomas.',
    dosage: 'Dosagem típica: 2.5ml de extrato 3x ao dia durante infecções'
  },
  {
    slug: 'melissa-cha',
    name: 'Melissa em Chá',
    plant: 'Melissa',
    form: 'Chá / Infusão',
    description: 'O chá de melissa é uma das formas mais tradicionais e agradáveis de consumir esta planta. Com sabor suave e levemente cítrico, é perfeito para relaxar e melhorar a digestão.',
    benefits: [
      'Preparo simples e tradicional',
      'Sabor agradável',
      'Ritual relaxante',
      'Pode ser consumido quente ou gelado',
      'Hidratação adicional'
    ],
    howToUse: 'Preparar uma infusão com 1-2 colheres de chá de folhas secas em 200ml de água quente. Deixar em infusão por 5-10 minutos. Consumir 2-3 xícaras ao dia.',
    dosage: 'Dosagem típica: 1.5-4.5g de folhas secas por dia, divididas em 2-3 xícaras'
  },
  {
    slug: 'ashwagandha-capsulas',
    name: 'Ashwagandha KSM-66 em Cápsulas',
    plant: 'Ashwagandha',
    form: 'Cápsulas',
    description: 'As cápsulas de Ashwagandha KSM-66 representam a forma mais estudada e eficaz de suplementar com este poderoso adaptógeno. O extrato KSM-66 é produzido exclusivamente a partir da raiz, garantindo máxima concentração de witanolídeos e eficácia comprovada em mais de 20 estudos clínicos para redução do estresse e cortisol.',
    benefits: [
      'Dosagem precisa de extrato padronizado',
      'Forma mais estudada cientificamente',
      'Conveniência para uso diário',
      'Estabilidade e conservação superiores',
      'Sem sabor amargo da raiz',
      'Absorção otimizada',
      'Resultados consistentes e previsíveis'
    ],
    howToUse: 'Tomar 1-2 cápsulas por dia com alimentos. Para estresse: 1 cápsula de manhã e 1 à tarde. Para sono: 1-2 cápsulas 1-2 horas antes de dormir. Usar consistentemente por pelo menos 2-4 semanas para avaliar resultados.',
    dosage: 'Dosagem típica: 300-600mg de extrato KSM-66 por dia (equivalente a 15-30mg de witanolídeos)'
  },
  {
    slug: 'curcuma-piperina-capsulas',
    name: 'Cúrcuma + Piperina em Cápsulas',
    plant: 'Cúrcuma',
    form: 'Cápsulas',
    description: 'A combinação de cúrcuma com piperina em cápsulas resolve o principal problema da curcumina: sua baixa biodisponibilidade. A piperina aumenta a absorção da curcumina em até 2000%, garantindo que você obtenha os benefícios anti-inflamatórios reais desta especiaria milenar.',
    benefits: [
      'Biodisponibilidade 20x maior que cúrcuma isolada',
      'Dosagem padronizada de curcuminoides',
      'Praticidade para uso anti-inflamatório',
      'Concentração muito superior ao tempero culinário',
      'Sem necessidade de preparação especial',
      'Ação prolongada no organismo',
      'Ideal para uso terapêutico'
    ],
    howToUse: 'Tomar 1-2 cápsulas por dia com refeições que contenham gordura (melhora absorção). Para inflamação aguda: 2 cápsulas 2x ao dia. Para manutenção: 1 cápsula ao dia. Sempre com alimentos para evitar irritação gástrica.',
    dosage: 'Dosagem típica: 500-1000mg de curcumina padronizada + 5-10mg de piperina por dia'
  },
  {
    slug: 'passiflora-capsulas',
    name: 'Passiflora em Cápsulas',
    plant: 'Maracujá (Passiflora)',
    form: 'Cápsulas',
    description: 'As cápsulas de passiflora (Passiflora incarnata) são uma das opções mais populares para quem busca alívio natural da ansiedade e melhora do sono. A passiflora atua nos receptores GABAérgicos do cérebro, promovendo relaxamento sem causar dependência ou efeitos residuais no dia seguinte.',
    benefits: [
      'Ação ansiolítica natural comprovada',
      'Não causa dependência ou tolerância',
      'Melhora a qualidade do sono',
      'Sem sonolência excessiva no dia seguinte',
      'Pode ser combinada com valeriana',
      'Segura para uso prolongado',
      'Boa tolerabilidade geral'
    ],
    howToUse: 'Tomar 1 a 2 cápsulas 30 a 60 minutos antes de dormir para insônia, ou 1 cápsula 2 vezes ao dia para ansiedade. Pode ser associada à valeriana e melissa para potencializar os efeitos.',
    dosage: 'Dosagem típica: 200-500mg de extrato padronizado por dia, dividido em 1-2 doses'
  },
  {
    slug: 'gengibre-capsulas',
    name: 'Gengibre em Cápsulas',
    plant: 'Gengibre',
    form: 'Cápsulas de extrato padronizado',
    description: 'Extrato padronizado de gengibre (Zingiber officinale) em cápsulas, concentrado em gingeróis. Ideal para quem busca os benefícios anti-inflamatórios e digestivos do gengibre de forma prática e com dosagem controlada.',
    benefits: [
      'Alívio de náuseas e enjoos',
      'Ação anti-inflamatória potente',
      'Melhora da digestão e alívio de dispepsia',
      'Suporte ao sistema imunológico',
      'Auxílio no controle glicêmico'
    ],
    howToUse: 'Tomar 1 a 2 cápsulas ao dia, preferencialmente com as refeições. Para náuseas, pode ser tomado 30 minutos antes de viagens ou situações que causem enjoo.',
    dosage: '250 mg a 1 g de extrato padronizado, 2 a 3 vezes ao dia. Não exceder 5 g/dia equivalente de gengibre.'
  },
  {
    slug: 'ginkgo-biloba-capsulas',
    name: 'Ginkgo Biloba em Cápsulas',
    plant: 'Ginkgo Biloba',
    form: 'Cápsulas',
    description: 'As cápsulas de Ginkgo Biloba oferecem a forma mais conveniente de obter os benefícios cognitivos desta planta milenar. Com extrato padronizado em ginkgoflavonoides e terpenolactonas, proporcionam suporte científico comprovado para memória, concentração e circulação cerebral.',
    benefits: [
      'Extrato padronizado com concentração garantida',
      'Livre de ácido ginkgólico (substância tóxica)',
      'Dosagem precisa para benefícios cognitivos',
      'Estabilidade superior às folhas secas',
      'Conveniente para uso prolongado',
      'Concentração 50x maior que chás',
      'Resultados mensuráveis em testes cognitivos'
    ],
    howToUse: 'Tomar 1-2 cápsulas por dia com alimentos, preferencialmente divididas (manhã e tarde). Para estudantes: usar durante períodos de alta demanda cognitiva. Para idosos: uso contínuo com pausas mensais. Resultados aparecem após 4-6 semanas.',
    dosage: 'Dosagem típica: 120-240mg de extrato padronizado (24% flavonoides, 6% terpenolactonas) por dia'
  }
];

export const getSupplementBySlug = (slug: string): Supplement | undefined => {
  return supplements.find(s => s.slug === slug);
};
