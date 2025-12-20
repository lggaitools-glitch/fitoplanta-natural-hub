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
  }
];

export const getSupplementBySlug = (slug: string): Supplement | undefined => {
  return supplements.find(s => s.slug === slug);
};
