export interface WellnessTopic {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  introduction: string;
  content: string;
  tips: string[];
  recommendedPlants: string[];
  recommendedGuides: string[];
}

export const wellnessTopics: WellnessTopic[] = [
  {
    slug: 'sono-natural',
    title: 'Sono Natural',
    subtitle: 'Melhore seu Sono com a Natureza',
    description: 'Descubra como melhorar a qualidade do seu sono usando métodos naturais e fitoterápicos.',
    heroImage: '/wellness/sono.jpg',
    introduction: 'O sono de qualidade é fundamental para a saúde física e mental. Quando dormimos bem, nosso corpo se recupera, consolidamos memórias e reequilibramos hormônios essenciais.',
    content: `A insônia e os distúrbios do sono afetam milhões de pessoas no Brasil. Antes de recorrer a medicamentos sintéticos, vale explorar as alternativas naturais que a fitoterapia oferece.

## Por Que Dormimos Mal?

O estilo de vida moderno é um dos principais vilões do sono. Excesso de telas, estresse, alimentação inadequada e falta de rotina são fatores que prejudicam nossa capacidade de dormir bem.

## Fitoterápicos Para o Sono

A valeriana é a planta mais estudada para o sono. Seus compostos atuam nos receptores GABA, promovendo relaxamento natural. A melissa e a passiflora também são excelentes opções, especialmente quando combinadas.

## Hábitos Que Ajudam

Além dos fitoterápicos, alguns hábitos são essenciais: manter horários regulares, evitar telas antes de dormir, criar um ambiente escuro e fresco, e praticar técnicas de relaxamento.`,
    tips: [
      'Tome valeriana 30 minutos antes de dormir',
      'Evite cafeína após as 14h',
      'Mantenha o quarto escuro e fresco',
      'Crie uma rotina relaxante antes de dormir',
      'Evite telas por 1 hora antes de deitar'
    ],
    recommendedPlants: ['valeriana', 'melissa'],
    recommendedGuides: ['melhor-valeriana', 'melhor-fitoterapico-para-sono']
  },
  {
    slug: 'imunidade-natural',
    title: 'Imunidade Natural',
    subtitle: 'Fortaleça Suas Defesas',
    description: 'Aprenda como fortalecer seu sistema imunológico naturalmente com fitoterápicos e hábitos saudáveis.',
    heroImage: '/wellness/imunidade.jpg',
    introduction: 'Um sistema imunológico forte é sua melhor proteção contra doenças. A boa notícia é que podemos fortalecê-lo naturalmente.',
    content: `O sistema imunológico é uma rede complexa de células, tecidos e órgãos que trabalham juntos para defender o corpo. Quando está funcionando bem, você raramente fica doente.

## Como Funciona a Imunidade

Nosso corpo possui duas linhas de defesa: a imunidade inata (nascemos com ela) e a adaptativa (desenvolvemos ao longo da vida). Ambas podem ser fortalecidas com bons hábitos.

## Plantas Que Fortalecem a Imunidade

A equinácea é a campeã quando o assunto é imunidade. Estudos mostram que ela pode reduzir a duração de resfriados e prevenir novas infecções. O própolis e a vitamina C são complementos excelentes.

## Estilo de Vida Imune

Sono adequado, exercício moderado, alimentação rica em vegetais e controle do estresse são pilares fundamentais para uma imunidade forte.`,
    tips: [
      'Use equinácea preventivamente no inverno',
      'Durma pelo menos 7-8 horas por noite',
      'Consuma vegetais coloridos diariamente',
      'Pratique exercícios moderados regularmente',
      'Gerencie o estresse com técnicas de relaxamento'
    ],
    recommendedPlants: ['equinacea'],
    recommendedGuides: ['melhor-suplemento-para-imunidade']
  },
  {
    slug: 'energia-e-foco',
    title: 'Energia e Foco',
    subtitle: 'Disposição Natural Para o Dia a Dia',
    description: 'Descubra como aumentar sua energia e concentração de forma natural e sustentável.',
    heroImage: '/wellness/energia.jpg',
    introduction: 'Fadiga e falta de concentração são queixas comuns. A natureza oferece soluções que podem ajudar sem os efeitos negativos de estimulantes artificiais.',
    content: `A falta de energia pode ter diversas causas: sono insuficiente, estresse crônico, alimentação inadequada ou mesmo condições de saúde que precisam de atenção médica.

## Energia Natural vs. Artificial

Energéticos e excesso de café podem dar um impulso imediato, mas frequentemente levam a um "crash" posterior. Os adaptógenos e estimulantes naturais oferecem energia mais sustentada.

## Plantas Para Energia

O guaraná brasileiro é um dos melhores estimulantes naturais, com cafeína de liberação gradual. O ginseng, por sua vez, trabalha diferente: como adaptógeno, ele ajuda o corpo a produzir energia de forma mais eficiente ao longo do tempo.

## Hábitos Energizantes

Hidratação adequada, refeições balanceadas e exercícios regulares são fundamentais para manter a energia ao longo do dia.`,
    tips: [
      'Tome guaraná pela manhã para energia duradoura',
      'Hidrate-se bem ao longo do dia',
      'Faça refeições menores e mais frequentes',
      'Use ginseng para energia sustentada',
      'Evite açúcar refinado que causa picos de energia'
    ],
    recommendedPlants: ['guarana', 'ginseng'],
    recommendedGuides: ['melhor-energia-natural']
  },
  {
    slug: 'gestao-do-estresse',
    title: 'Gestão do Estresse',
    subtitle: 'Encontre o Equilíbrio Natural',
    description: 'Aprenda a gerenciar o estresse do dia a dia com abordagens naturais e fitoterápicos.',
    heroImage: '/wellness/estresse.jpg',
    introduction: 'O estresse crônico é um dos maiores problemas de saúde da atualidade. Felizmente, existem muitas ferramentas naturais para ajudar.',
    content: `O estresse em si não é ruim - ele nos ajuda a reagir a desafios. O problema é quando ele se torna crônico, afetando sono, digestão, imunidade e bem-estar geral.

## Entendendo o Estresse

Quando estressados, nosso corpo libera cortisol e adrenalina. Em excesso, esses hormônios prejudicam a saúde. A chave é aprender a regular essa resposta.

## Adaptógenos: Aliados Naturais

Os adaptógenos são plantas que ajudam o corpo a se adaptar ao estresse. O ginseng é um clássico, mas a ashwagandha e a rhodiola também são excelentes opções.

## Técnicas de Relaxamento

A fitoterapia funciona melhor combinada com técnicas como respiração profunda, meditação, exercícios e hobbies relaxantes.`,
    tips: [
      'Use melissa para momentos de ansiedade',
      'Pratique respiração profunda diariamente',
      'Reserve tempo para atividades prazerosas',
      'Considere adaptógenos como ginseng',
      'Limite consumo de notícias estressantes'
    ],
    recommendedPlants: ['melissa', 'ginseng', 'valeriana'],
    recommendedGuides: ['melhor-fitoterapico-para-ansiedade']
  },
  {
    slug: 'saude-digestiva-natural',
    title: 'Saúde Digestiva Natural',
    subtitle: 'Cuide do Seu Intestino Naturalmente',
    description: 'Descubra como manter a saúde digestiva e intestinal com plantas medicinais, probióticos naturais e hábitos alimentares saudáveis.',
    heroImage: '/wellness/digestao.jpg',
    introduction: 'A saúde digestiva é a base do bem-estar geral. O intestino é considerado o "segundo cérebro" e sua saúde afeta desde a imunidade até o humor. Plantas medicinais e alimentos funcionais podem transformar sua digestão.',
    content: `Problemas digestivos como gastrite, refluxo, constipação e síndrome do intestino irritável afetam milhões de brasileiros. A boa notícia é que a natureza oferece diversas soluções eficazes.

## O Intestino Como Segundo Cérebro

O intestino contém mais de 100 milhões de neurônios e produz cerca de 90% da serotonina do corpo. Quando sua microbiota está desequilibrada (disbiose), todo o organismo sofre — desde o humor até a imunidade.

## Plantas Medicinais Para a Digestão

A espinheira-santa é a grande estrela brasileira para problemas gástricos. Seus taninos protegem a mucosa estomacal e auxiliam no tratamento de úlceras e gastrite. O boldo, outra planta nativa, é excelente para a digestão lenta e problemas hepáticos.

A camomila, além de calmante, possui propriedades antiespasmódicas que aliviam cólicas e gases. Já a hortelã-pimenta é comprovadamente eficaz para a síndrome do intestino irritável.

## Probióticos Naturais

Alimentos fermentados como kefir, kombucha, chucrute e iogurte natural são fontes de probióticos que ajudam a reequilibrar a flora intestinal. Consumir esses alimentos regularmente pode reduzir inflamação e melhorar a absorção de nutrientes.

## Fibras e Prebióticos

As fibras alimentares são o combustível das boas bactérias intestinais. Frutas, vegetais, grãos integrais e sementes como chia e linhaça fornecem fibras solúveis e insolúveis essenciais para o trânsito intestinal adequado.`,
    tips: [
      'Use espinheira-santa para proteção gástrica',
      'Consuma alimentos fermentados diariamente',
      'Aumente gradualmente a ingestão de fibras',
      'Beba camomila após refeições pesadas',
      'Mastigue bem os alimentos para facilitar a digestão',
      'Evite comer em situações de estresse',
      'Mantenha-se hidratado ao longo do dia'
    ],
    recommendedPlants: ['espinheira-santa', 'boldo', 'camomila'],
    recommendedGuides: []
  },
  {
    slug: 'saude-cognitiva-memoria',
    title: 'Saúde Cognitiva e Memória',
    subtitle: 'Mantenha Seu Cérebro Afiado Naturalmente',
    description: 'Aprenda como melhorar a memória, concentração e saúde cerebral com fitoterápicos, nootrópicos naturais e hábitos cognitivos saudáveis.',
    heroImage: '/wellness/cognitiva.jpg',
    introduction: 'Com o envelhecimento da população e a crescente demanda cognitiva do trabalho moderno, manter o cérebro saudável tornou-se prioridade. Plantas medicinais e hábitos adequados podem fazer uma grande diferença.',
    content: `A saúde cognitiva não depende apenas de genética — hábitos, alimentação e suplementação adequada podem proteger e até melhorar a função cerebral ao longo da vida.

## Como o Cérebro Envelhece

O declínio cognitivo leve começa por volta dos 30 anos, mas pode ser significativamente retardado com as estratégias certas. Estresse oxidativo, inflamação e má circulação cerebral são os principais vilões da saúde cognitiva.

## Nootrópicos Naturais

O Ginkgo biloba é o fitoterápico mais estudado para função cerebral. Melhora a circulação cerebral, protege neurônios do estresse oxidativo e pode melhorar memória e concentração. Estudos mostram benefícios especialmente em idosos com comprometimento cognitivo leve.

A ashwagandha, além de adaptogênica, demonstrou em estudos clínicos capacidade de reduzir a ansiedade que prejudica a concentração e pode proteger contra neurodegeneração.

O guaraná brasileiro, com sua cafeína de liberação gradual, melhora o estado de alerta e a velocidade de processamento mental sem os picos e quedas do café.

## Alimentação Para o Cérebro

Ômega-3 (presente em peixes, chia e linhaça), antioxidantes (frutas vermelhas, cacau) e colina (ovos, fígado) são nutrientes essenciais para a saúde cerebral. A dieta mediterrânea é consistentemente associada a menor risco de demência.

## Exercícios Cognitivos e Físicos

O exercício aeróbico é um dos mais poderosos nootrópicos naturais, aumentando o fator neurotrófico derivado do cérebro (BDNF). Combinado com desafios cognitivos como aprender idiomas ou tocar instrumentos, oferece proteção robusta.`,
    tips: [
      'Tome Ginkgo biloba para melhorar a circulação cerebral',
      'Pratique exercícios aeróbicos 3-5 vezes por semana',
      'Consuma alimentos ricos em ômega-3 regularmente',
      'Durma 7-8 horas — o cérebro se "limpa" durante o sono',
      'Desafie seu cérebro com aprendizado constante',
      'Medite para reduzir o estresse oxidativo cerebral',
      'Use guaraná para foco sustentado em vez de café excessivo'
    ],
    recommendedPlants: ['ginseng', 'ashwagandha', 'guarana'],
    recommendedGuides: ['melhor-energia-natural']
  }
  {
    slug: 'saude-articular',
    title: 'Saúde Articular',
    subtitle: 'Mobilidade Natural Para o Dia a Dia',
    description: 'Descubra como plantas medicinais e suplementos naturais podem ajudar a manter suas articulações saudáveis e a mobilidade em dia.',
    heroImage: '/wellness/articular.jpg',
    introduction: 'A saúde articular é fundamental para a qualidade de vida em qualquer idade. Dores nas articulações, rigidez e perda de mobilidade afetam milhões de brasileiros e podem ser amenizadas com abordagens naturais.',
    content: `Manter as articulações saudáveis é essencial para uma vida ativa e independente. Plantas medicinais, suplementos naturais e hábitos adequados podem fazer uma grande diferença na prevenção e no manejo de problemas articulares.

## A Importância da Saúde Articular

As articulações são estruturas complexas compostas por cartilagem, líquido sinovial, ligamentos e tendões. Com o tempo, o desgaste natural, inflamação crônica e falta de nutrientes podem comprometer sua função. Osteoartrite, artrite reumatoide e dores articulares crônicas são cada vez mais comuns, especialmente com o envelhecimento da população.

## Plantas e Suplementos Para as Articulações

A **cúrcuma** é um dos anti-inflamatórios naturais mais estudados. Seus curcuminoides inibem vias inflamatórias como NF-kB e COX-2, com eficácia comparável a anti-inflamatórios convencionais em alguns estudos. A associação com piperina aumenta sua absorção em até 2000%.

O **gengibre** complementa a ação da cúrcuma com seus gingeróis e shogaóis. Estudos mostram redução significativa de dor e rigidez em pacientes com osteoartrite. A combinação cúrcuma + gengibre é uma das mais eficazes para inflamação articular.

A **boswellia** (Boswellia serrata) contém ácidos boswélicos que inibem a enzima 5-lipoxigenase, reduzindo leucotrienos inflamatórios. É especialmente eficaz para osteoartrite do joelho.

## Hábitos Naturais Para Mobilidade

O **movimento regular** é o melhor remédio para as articulações. Exercícios de baixo impacto como caminhada, natação e yoga mantêm a lubrificação articular e fortalecem os músculos de suporte. A inatividade, por outro lado, acelera o desgaste.

A **alimentação anti-inflamatória** rica em ômega-3 (peixes, chia, linhaça), vegetais coloridos e especiarias como cúrcuma e gengibre ajuda a reduzir a inflamação sistêmica que agrava problemas articulares.

Manter um **peso saudável** é crucial — cada quilo extra exerce 3-4 kg de pressão adicional sobre os joelhos.

## Quando Procurar um Médico

Consulte um profissional de saúde se você apresentar: dor articular persistente por mais de 2 semanas, inchaço significativo, vermelhidão ou calor na articulação, limitação progressiva de movimento, ou dor que desperta durante a noite. Estas podem ser sinais de condições que requerem avaliação e tratamento médico especializado.`,
    tips: [
      'Combine cúrcuma com piperina para máxima absorção',
      'Use gengibre diariamente para efeito anti-inflamatório cumulativo',
      'Pratique exercícios de baixo impacto regularmente',
      'Mantenha um peso saudável para reduzir a carga articular',
      'Consuma alimentos ricos em ômega-3',
      'Alongue-se diariamente para manter a flexibilidade',
      'Considere boswellia como complemento para dor articular'
    ],
    recommendedPlants: ['curcuma', 'gengibre'],
    recommendedGuides: ['melhor-anti-inflamatorio-natural', 'melhor-gengibre']
  }
];

export const getWellnessTopicBySlug = (slug: string): WellnessTopic | undefined => {
  return wellnessTopics.find(t => t.slug === slug);
};
