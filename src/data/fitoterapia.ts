export interface FitoterapiaSubpage {
  slug: string;
  title: string;
  description: string;
  content: string;
  relatedPlants: string[];
  relatedGuides: string[];
}

export const fitoterapiaSubpages: FitoterapiaSubpage[] = [
  {
    slug: 'o-que-e-fitoterapia',
    title: 'O Que é Fitoterapia?',
    description: 'Entenda o que é fitoterapia, sua história e como ela é utilizada na medicina moderna.',
    content: `A fitoterapia é a ciência que estuda a utilização de plantas medicinais para prevenção e tratamento de doenças. O termo vem do grego "phyton" (planta) e "therapeia" (tratamento).

## História da Fitoterapia

O uso de plantas medicinais remonta à pré-história. Registros egípcios, chineses e indianos de milhares de anos já documentavam o uso terapêutico de diversas plantas. No Brasil, a tradição indígena contribuiu enormemente para o conhecimento de plantas nativas como o guaraná e a espinheira-santa.

## Fitoterapia na Medicina Moderna

Hoje, a fitoterapia é reconhecida pela OMS e regulamentada pela ANVISA no Brasil. Muitos medicamentos modernos têm origem em plantas: a aspirina veio do salgueiro, a morfina da papoula, e diversos outros exemplos.

## Como Funciona

Os fitoterápicos contêm compostos bioativos que interagem com nosso organismo. Diferente dos medicamentos sintéticos que geralmente têm um único princípio ativo, as plantas contêm dezenas de compostos que atuam em sinergia.

## Diferença Entre Fitoterápico e Planta Medicinal

É importante distinguir: planta medicinal é a planta in natura, enquanto fitoterápico é o produto industrializado, padronizado e com eficácia comprovada. Ambos têm seu valor, mas o fitoterápico oferece maior segurança na dosagem.`,
    relatedPlants: ['valeriana', 'equinacea', 'guarana'],
    relatedGuides: ['melhor-valeriana']
  },
  {
    slug: 'fitoterapia-funciona',
    title: 'Fitoterapia Funciona?',
    description: 'Análise baseada em evidências sobre a eficácia real da fitoterapia.',
    content: `Uma das perguntas mais comuns é: "Fitoterápicos realmente funcionam?" A resposta, baseada em décadas de pesquisa científica, é um sonoro "sim, muitos deles funcionam".

## O Que Dizem as Evidências

Diversas plantas medicinais têm eficácia comprovada em estudos clínicos rigorosos:

- **Valeriana**: Múltiplos estudos confirmam sua eficácia para insônia leve a moderada
- **Equinácea**: Meta-análises mostram redução na duração de resfriados
- **Ginkgo biloba**: Evidências sólidas para função cognitiva
- **Hipérico**: Tão eficaz quanto antidepressivos leves para depressão leve

## Por Que Alguns São Céticos

O ceticismo existe por alguns motivos legítimos: produtos de baixa qualidade no mercado, falta de padronização e marketing exagerado de alguns fabricantes. Isso não invalida a fitoterapia, mas destaca a importância de escolher produtos de qualidade.

## A Importância da Padronização

Um fitoterápico de qualidade deve ser padronizado em seus compostos ativos. Por exemplo, valeriana deve ter concentração definida de ácido valerênico, garantindo eficácia consistente.

## Limitações e Realismo

Fitoterápicos não são milagrosos. Eles funcionam melhor para condições leves a moderadas e como complemento a um estilo de vida saudável. Condições graves sempre requerem acompanhamento médico.`,
    relatedPlants: ['valeriana', 'equinacea'],
    relatedGuides: []
  },
  {
    slug: 'beneficios-e-riscos',
    title: 'Benefícios e Riscos da Fitoterapia',
    description: 'Conheça os benefícios e possíveis riscos do uso de fitoterápicos.',
    content: `Como qualquer terapia, a fitoterapia tem benefícios e riscos que devem ser conhecidos para um uso seguro e eficaz.

## Principais Benefícios

### Menor Incidência de Efeitos Colaterais
Quando usados corretamente, fitoterápicos geralmente causam menos efeitos adversos que medicamentos sintéticos.

### Ação Sinérgica
A combinação natural de compostos nas plantas pode oferecer benefícios que um composto isolado não teria.

### Acessibilidade
Muitos fitoterápicos são mais acessíveis que medicamentos de marca.

### Sustentabilidade
Plantas podem ser cultivadas de forma sustentável, com menor impacto ambiental.

## Riscos e Precauções

### Interações Medicamentosas
Alguns fitoterápicos interagem perigosamente com medicamentos. O hipérico, por exemplo, reduz a eficácia de anticoncepcionais.

### Falta de Regulamentação em Alguns Países
Nem todos os países regulamentam fitoterápicos rigorosamente, levando a produtos de qualidade duvidosa.

### Uso Incorreto
A ideia de que "natural = seguro" é perigosa. Doses excessivas ou uso inadequado podem causar problemas.

### Contaminação
Produtos de origem duvidosa podem conter contaminantes, metais pesados ou até adulterantes.

## Como Usar com Segurança

1. Escolha marcas confiáveis e regulamentadas
2. Informe seu médico sobre o uso de fitoterápicos
3. Respeite dosagens recomendadas
4. Observe possíveis reações adversas
5. Não substitua tratamentos médicos sem orientação`,
    relatedPlants: [],
    relatedGuides: []
  },
  {
    slug: 'fitoterapia-x-suplementos',
    title: 'Fitoterapia vs Suplementos Sintéticos',
    description: 'Entenda as diferenças entre fitoterápicos e suplementos sintéticos.',
    content: `Uma confusão comum é entre fitoterápicos e suplementos sintéticos. Embora ambos possam beneficiar a saúde, são produtos fundamentalmente diferentes.

## O Que São Fitoterápicos

Fitoterápicos são derivados exclusivamente de plantas medicinais. Contêm o complexo natural de compostos da planta, muitas vezes padronizados em um marcador específico.

**Exemplos:** Valeriana, equinácea, ginkgo biloba, hipérico

## O Que São Suplementos Sintéticos

Suplementos sintéticos são produzidos em laboratório. Mesmo quando "imitam" compostos naturais, são moléculas isoladas produzidas quimicamente.

**Exemplos:** Vitamina C sintética, melatonina sintética, vitaminas do complexo B

## Principais Diferenças

### Complexidade
Fitoterápicos contêm dezenas de compostos que atuam juntos. Sintéticos são geralmente moléculas isoladas.

### Biodisponibilidade
Em alguns casos, compostos naturais são melhor absorvidos. Em outros, os sintéticos são superiores.

### Padronização
Sintéticos são mais fáceis de padronizar com precisão. Fitoterápicos dependem da qualidade da extração.

### Custo
Varia muito caso a caso, sem regra geral.

## Qual Escolher?

Depende do objetivo:

- Para condições como ansiedade leve ou problemas digestivos, fitoterápicos costumam ser excelentes
- Para suprir deficiências nutricionais específicas, suplementos sintéticos podem ser mais diretos
- O ideal é avaliar caso a caso, preferencialmente com orientação profissional`,
    relatedPlants: ['valeriana', 'guarana'],
    relatedGuides: []
  }
];

export const getFitoterapiaSubpageBySlug = (slug: string): FitoterapiaSubpage | undefined => {
  return fitoterapiaSubpages.find(s => s.slug === slug);
};
