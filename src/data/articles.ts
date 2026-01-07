export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  tags: string[];
  author: string;
  publishedAt: string;
  readTime: number;
}

export const categories = [
  "Fitoterapia",
  "Plantas Medicinais",
  "Suplementos Naturais",
  "Bem-estar",
  "Guias de Compra"
];

export const articles: Article[] = [
  {
    id: "1",
    title: "O que é Fitoterapia? Guia Completo Baseado em Evidências",
    slug: "o-que-e-fitoterapia-guia-completo",
    excerpt: "Descubra o que é fitoterapia, como funciona, seus benefícios comprovados pela ciência e como incorporar plantas medicinais na sua rotina de saúde de forma segura.",
    content: `
A fitoterapia é a ciência milenar que utiliza plantas medicinais e seus derivados para prevenção, tratamento e cura de diversas condições de saúde. Reconhecida pela Organização Mundial da Saúde (OMS) e regulamentada pela ANVISA no Brasil, esta prática representa uma ponte entre o conhecimento tradicional e a medicina baseada em evidências.

## O Que Exatamente é Fitoterapia?

Diferente do uso popular de chás e infusões, a fitoterapia moderna trabalha com **extratos padronizados** — preparações onde a concentração de princípios ativos é cientificamente controlada e garantida. Isso significa previsibilidade de resultados e segurança no uso.

A palavra "fitoterapia" vem do grego: *phyton* (planta) + *therapeia* (tratamento). Portanto, é literalmente o tratamento através das plantas. Mas não se engane: apesar de naturais, os fitoterápicos são substâncias farmacologicamente ativas que exigem conhecimento adequado para uso seguro.

## Como a Fitoterapia Funciona?

As plantas produzem centenas de compostos químicos chamados **metabólitos secundários** — substâncias que não são essenciais para seu crescimento, mas que têm funções de defesa e adaptação. Muitos desses compostos apresentam atividade terapêutica quando consumidos por humanos.

Por exemplo:
- **Valeriana** contém ácidos valerênicos que se ligam aos receptores GABA no cérebro, promovendo relaxamento
- **Equinácea** possui polissacarídeos e alquilamidas que modulam o sistema imunológico
- **Cúrcuma** tem curcuminoides com potente ação anti-inflamatória

## Benefícios Comprovados da Fitoterapia

A literatura científica documenta extensivamente os benefícios de diversos fitoterápicos:

### Menor Incidência de Efeitos Colaterais
Estudos comparativos mostram que muitos fitoterápicos apresentam perfil de segurança superior aos equivalentes sintéticos, especialmente em uso prolongado.

### Ação Sinérgica
Os múltiplos compostos presentes na planta frequentemente trabalham em conjunto, potencializando efeitos e reduzindo toxicidade — algo difícil de replicar em medicamentos de molécula única.

### Sustentabilidade
O cultivo responsável de plantas medicinais representa uma alternativa mais sustentável à síntese química industrial.

## Como Incorporar a Fitoterapia na Sua Vida

O primeiro passo é sempre consultar um profissional qualificado — médico, farmacêutico ou nutricionista com conhecimento em fitoterapia. Eles podem orientar sobre:

- Qual planta é mais indicada para sua condição
- A forma farmacêutica mais adequada (cápsula, tintura, extrato)
- Dosagem correta
- Possíveis interações com medicamentos

**Importante**: Nunca abandone um tratamento convencional para usar fitoterápicos sem orientação médica.

## Conclusão

A fitoterapia representa uma opção terapêutica séria e cientificamente fundamentada. Quando utilizada corretamente, pode ser uma aliada valiosa na busca por saúde e bem-estar. O segredo está em escolher produtos de qualidade, buscar orientação profissional e manter expectativas realistas sobre os resultados.

---

*Este artigo tem caráter informativo e não substitui a consulta a um profissional de saúde qualificado.*
    `,
    image: "/articles/fitoterapia.jpg",
    category: "Fitoterapia",
    tags: ["fitoterapia", "plantas medicinais", "saúde natural", "medicina integrativa", "evidências científicas"],
    author: "Marta Leni, Farmacêutica Clínica",
    publishedAt: "2024-01-15",
    readTime: 8
  },
  {
    id: "2",
    title: "As Plantas Medicinais Mais Usadas no Brasil e Seus Benefícios",
    slug: "plantas-medicinais-mais-usadas-brasil",
    excerpt: "Conheça as plantas medicinais mais populares e estudadas no Brasil, desde a camomila até o guaraná, e descubra como cada uma pode beneficiar sua saúde.",
    content: `
O Brasil possui uma das maiores biodiversidades do planeta, incluindo milhares de espécies vegetais com potencial medicinal. Muitas dessas plantas fazem parte da cultura popular há gerações e, atualmente, contam com respaldo científico significativo. Vamos conhecer as mais importantes.

## 1. Camomila (Matricaria chamomilla)

A camomila é provavelmente a planta medicinal mais conhecida no mundo. Seus delicados compostos flavonoides, especialmente a apigenina, conferem propriedades calmantes e anti-inflamatórias.

**Benefícios comprovados:**
- Auxílio no tratamento de ansiedade leve
- Melhora da qualidade do sono
- Alívio de desconfortos digestivos
- Propriedades anti-inflamatórias tópicas

**Como usar:** Chá (infusão), cápsulas de extrato padronizado ou uso tópico.

## 2. Valeriana (Valeriana officinalis)

Conhecida como "valium natural", a valeriana é uma das plantas mais estudadas para distúrbios do sono. Seus compostos agem nos receptores GABA, promovendo relaxamento sem causar dependência.

**Benefícios comprovados:**
- Redução do tempo para adormecer
- Melhora da qualidade do sono
- Diminuição da ansiedade
- Alívio de tensão muscular

**Como usar:** Extratos padronizados em cápsulas, preferencialmente à noite.

## 3. Guaraná (Paullinia cupana)

Planta amazônica famosa por seu efeito energético. O guaraná contém cafeína natural e outros compostos que promovem energia sustentada, diferente do pico e queda do café comum.

**Benefícios comprovados:**
- Aumento de energia e disposição
- Melhora da concentração e foco
- Ação antioxidante
- Auxílio na performance física

**Como usar:** Cápsulas ou pó, preferencialmente pela manhã.

## 4. Erva-cidreira / Melissa (Melissa officinalis)

Popular nos quintais brasileiros, a melissa oferece suave efeito calmante e auxilia na digestão. Frequentemente combinada com valeriana para potencializar efeitos relaxantes.

**Benefícios comprovados:**
- Alívio de ansiedade leve
- Melhora digestiva
- Auxílio em cólicas menstruais
- Efeito antiviral (herpes labial)

## 5. Boldo (Peumus boldus)

O boldo é tradicionalmente usado para problemas digestivos e hepáticos. Contém boldina, um alcaloide com propriedades hepatoprotetoras e digestivas.

**Benefícios comprovados:**
- Estímulo da produção de bile
- Auxílio na digestão de gorduras
- Proteção hepática
- Alívio de desconforto estomacal

**Importante:** Não usar em caso de obstrução biliar.

## 6. Maracujá (Passiflora incarnata)

A passiflora é reconhecida mundialmente por suas propriedades ansiolíticas. No Brasil, é uma das plantas mais prescritas para ansiedade e insônia.

**Benefícios comprovados:**
- Redução de ansiedade
- Auxílio no sono
- Alívio de tensão nervosa
- Sem efeito de dependência

## 7. Gengibre (Zingiber officinale)

Além de tempero culinário, o gengibre é uma poderosa planta medicinal com múltiplas aplicações terapêuticas comprovadas.

**Benefícios comprovados:**
- Alívio de náuseas e enjoos
- Ação anti-inflamatória
- Auxílio digestivo
- Suporte imunológico

## Considerações de Segurança

Apesar de naturais, plantas medicinais podem:
- Interagir com medicamentos
- Ser contraindicadas em certas condições
- Causar reações em pessoas sensíveis

Sempre consulte um profissional de saúde antes de iniciar qualquer tratamento fitoterápico, especialmente se você toma outros medicamentos ou tem condições de saúde pré-existentes.

---

*Este artigo tem caráter informativo e não substitui a consulta a um profissional de saúde qualificado.*
    `,
    image: "/articles/plantas-ciencia.jpg",
    category: "Plantas Medicinais",
    tags: ["plantas medicinais", "camomila", "valeriana", "guaraná", "melissa", "boldo", "gengibre"],
    author: "Marta Leni, Farmacêutica Clínica",
    publishedAt: "2024-01-20",
    readTime: 10
  },
  {
    id: "3",
    title: "Fitoterápicos Funcionam Mesmo? O Que Diz a Ciência",
    slug: "fitoterapicos-funcionam-ciencia",
    excerpt: "Uma análise imparcial das evidências científicas sobre a eficácia dos fitoterápicos. Descubra o que realmente funciona e o que é mito.",
    content: `
"Produtos naturais realmente funcionam?" Esta é uma das perguntas mais frequentes entre pessoas interessadas em alternativas aos medicamentos convencionais. A resposta, como veremos, é mais nuanceada do que um simples "sim" ou "não".

## O Estado Atual da Pesquisa

A fitoterapia moderna está longe de ser uma prática baseada apenas em tradição. Milhares de estudos clínicos, incluindo ensaios randomizados controlados (o padrão ouro da pesquisa médica), investigam a eficácia de plantas medicinais.

**Fatos importantes:**
- A base de dados PubMed contém mais de 50.000 estudos sobre plantas medicinais
- A OMS reconhece a fitoterapia como parte da medicina tradicional com evidências
- Diversos países europeus incluem fitoterápicos em seus sistemas de saúde

## Fitoterápicos com Evidências Robustas

Algumas plantas possuem nível de evidência comparável ou superior a medicamentos convencionais:

### Valeriana para Insônia
Mais de 200 estudos investigaram a valeriana. Meta-análises confirmam sua eficácia no tratamento de insônia, com a vantagem de não causar dependência ou sonolência residual matinal.

### Equinácea para Prevenção de Gripes
Revisão Cochrane (considerada referência em medicina baseada em evidências) concluiu que a equinácea pode reduzir duração e gravidade de resfriados, especialmente quando iniciada precocemente.

### Ginkgo Biloba para Cognição
Estudos mostram benefícios modestos mas consistentes para memória e função cognitiva, especialmente em idosos. Na Alemanha, é medicamento de prescrição para demência.

### Curcumina para Inflamação
A curcumina, princípio ativo da cúrcuma, demonstra efeito anti-inflamatório comparável a ibuprofeno em alguns estudos, mas sem os efeitos gastrointestinais negativos.

## Por Que Alguns Estudos São Negativos?

Estudos com resultados negativos frequentemente apresentam falhas metodológicas:

**Problemas comuns:**
- Uso de extratos não padronizados (sem garantia de concentração de ativos)
- Doses inadequadas
- Duração insuficiente
- Qualidade variável do material vegetal

Por isso, a qualidade do fitoterápico é crucial para obter resultados. Um extrato padronizado de marca confiável pode ter eficácia muito diferente de um produto genérico de qualidade duvidosa.

## O Que NÃO Funciona

A honestidade intelectual exige reconhecer: nem tudo que é vendido como "natural" tem respaldo científico. Alguns produtos populares têm evidências fracas ou nulas:

- Muitos "queimadores de gordura" naturais
- Produtos milagrosos para emagrecimento
- "Curas" naturais para doenças graves

Desconfie sempre de promessas exageradas.

## Limitações da Fitoterapia

É importante ter expectativas realistas:

- Fitoterápicos geralmente têm ação mais lenta e gradual
- Podem não ser suficientes para condições graves
- Não substituem medicamentos essenciais (pressão alta, diabetes, etc.)
- Exigem consistência no uso

## Conclusão: O Equilíbrio é a Chave

A ciência apoia o uso de diversos fitoterápicos para condições específicas. A chave está em:

1. **Escolher produtos de qualidade** (extratos padronizados)
2. **Ter expectativas realistas** sobre resultados
3. **Buscar orientação profissional** para uso adequado
4. **Não abandonar tratamentos convencionais** necessários

Fitoterapia baseada em evidências é uma ferramenta valiosa no arsenal terapêutico moderno — nem mais, nem menos.

---

*Este artigo tem caráter informativo e não substitui a consulta a um profissional de saúde qualificado.*
    `,
    image: "/articles/premium.jpg",
    category: "Fitoterapia",
    tags: ["ciência", "evidências", "estudos clínicos", "eficácia", "fitoterapia"],
    author: "Marta Leni, Farmacêutica Clínica",
    publishedAt: "2024-01-25",
    readTime: 9
  },
  {
    id: "4",
    title: "Como Escolher Suplementos Naturais de Qualidade",
    slug: "como-escolher-suplementos-naturais-qualidade",
    excerpt: "Guia prático para identificar suplementos naturais de qualidade no mercado brasileiro. Aprenda a ler rótulos, identificar certificações e evitar produtos duvidosos.",
    content: `
O mercado de suplementos naturais cresce exponencialmente no Brasil, mas junto com ele crescem também os produtos de qualidade duvidosa. Saber diferenciar um bom produto de um ruim pode significar a diferença entre resultados reais e dinheiro jogado fora — ou pior, riscos à saúde.

## Por Que a Qualidade Importa Tanto?

Diferente de medicamentos sintéticos, onde a molécula ativa é produzida em laboratório com pureza controlada, produtos naturais dependem da qualidade da matéria-prima vegetal. Fatores como solo, clima, época da colheita e processamento afetam diretamente a concentração de princípios ativos.

**Exemplo prático:** Um extrato de valeriana pode conter de 0,1% a 0,8% de ácido valerênico dependendo da origem. Essa diferença de 8x na concentração significa que você pode estar tomando uma dose terapêutica — ou praticamente placebo.

## Critérios Essenciais para Avaliação

### 1. Extratos Padronizados

Este é o critério mais importante. Um extrato padronizado garante:
- Concentração fixa e conhecida de ativos
- Consistência entre lotes
- Dosagem previsível

**O que procurar no rótulo:**
"Extrato padronizado em X% de [princípio ativo]"

Exemplo: "Extrato de Ginkgo biloba padronizado em 24% de ginkgoflavonoides e 6% de terpenolactonas"

### 2. Registro na ANVISA

Produtos legais devem ter:
- Número de registro ou notificação
- Nome do responsável técnico
- Fabricante identificável

Você pode verificar produtos no site da ANVISA.

### 3. Certificação GMP/BPF

As Boas Práticas de Fabricação garantem:
- Controle de qualidade em cada etapa
- Rastreabilidade de ingredientes
- Ambientes de produção controlados

### 4. Testes de Terceiros

Marcas premium frequentemente submetem seus produtos a laboratórios independentes para verificar:
- Concentração de ativos
- Ausência de contaminantes
- Identidade do material vegetal

### 5. Transparência do Fabricante

Desconfie de empresas que:
- Não divulgam informações claras
- Não têm SAC funcional
- Não identificam origem dos ingredientes

## Sinais de Alerta: O Que Evitar

🚩 **Promessas exageradas**: "Perca 10kg em uma semana", "Cura garantida"

🚩 **Preços muito baixos**: Qualidade tem custo. Preços irreais indicam ingredientes de baixa qualidade

🚩 **Falta de informações técnicas**: Rótulos vagos sem especificação de concentração

🚩 **Venda apenas online por empresas desconhecidas**: Sem CNPJ ou endereço físico verificável

🚩 **Ingredientes "secretos" ou "fórmulas exclusivas"**: Bons produtos mostram exatamente o que contêm

## Formas Farmacêuticas: Qual Escolher?

### Cápsulas
**Vantagens:** Dosagem precisa, sem sabor, conveniente
**Desvantagens:** Pode conter excipientes, custo maior

### Tinturas/Extratos Líquidos
**Vantagens:** Absorção rápida, dose ajustável
**Desvantagens:** Gosto forte, álcool na composição

### Chás e Infusões
**Vantagens:** Tradicionais, baixo custo
**Desvantagens:** Concentração variável, difícil padronizar

### Pós
**Vantagens:** Versátil, sem excipientes
**Desvantagens:** Dosagem manual, sabor pode ser desagradável

## Dicas Práticas de Compra

1. **Pesquise a marca** antes de comprar — avaliações, tempo de mercado, reputação
2. **Leia o rótulo completo** — não apenas o nome do produto
3. **Compare concentrações** entre produtos, não apenas preços
4. **Prefira marcas** que investem em educação e informação
5. **Consulte profissionais** para indicações personalizadas

## Conclusão

Investir em suplementos de qualidade não é gasto — é economia a longo prazo. Produtos baratos que não funcionam são mais caros que produtos premium que entregam resultados. Informe-se, compare criteriosamente e priorize sempre a qualidade sobre o preço.

---

*Este artigo tem caráter informativo e não substitui a consulta a um profissional de saúde qualificado.*
    `,
    image: "/articles/guia-suplementos.jpg",
    category: "Guias de Compra",
    tags: ["suplementos", "qualidade", "como escolher", "guia de compra", "ANVISA"],
    author: "Marta Leni, Farmacêutica Clínica",
    publishedAt: "2024-02-01",
    readTime: 11
  },
  {
    id: "5",
    title: "Fitoterápicos x Suplementos Sintéticos: Qual a Diferença?",
    slug: "fitoterapicos-vs-suplementos-sinteticos-diferenca",
    excerpt: "Entenda as diferenças fundamentais entre fitoterápicos e suplementos sintéticos, suas vantagens, desvantagens e quando cada um é mais indicado.",
    content: `
Na busca por saúde e bem-estar, deparamo-nos frequentemente com duas categorias de produtos: fitoterápicos (de origem vegetal) e suplementos sintéticos (produzidos em laboratório). Mas afinal, qual a diferença real entre eles? E quando escolher um ou outro?

## Definições Básicas

### Fitoterápicos
Produtos obtidos exclusivamente de matéria-prima vegetal ativa. Podem ser plantas inteiras, partes de plantas ou extratos concentrados. Contêm centenas de compostos naturais que atuam em conjunto.

**Exemplos:** Extrato de valeriana, cápsulas de ginkgo biloba, óleo de prímula.

### Suplementos Sintéticos
Produtos fabricados em laboratório, contendo vitaminas, minerais ou outros nutrientes em forma isolada e purificada. A molécula ativa é produzida quimicamente.

**Exemplos:** Vitamina C pura, zinco quelado, melatonina sintética.

## Diferenças Fundamentais

### Composição

**Fitoterápicos:**
- Múltiplos compostos ativos
- Matriz complexa de nutrientes
- Presença de cofatores naturais
- Variabilidade natural entre lotes (minimizada em extratos padronizados)

**Sintéticos:**
- Molécula única e isolada
- Alta pureza (geralmente 99%+)
- Sem outros compostos
- Consistência total entre lotes

### Mecanismo de Ação

**Fitoterápicos:**
- Ação frequentemente sinérgica (compostos que se potencializam)
- Efeitos mais amplos e sutis
- Menos "agressivos" ao organismo
- Podem atuar em múltiplos alvos simultaneamente

**Sintéticos:**
- Ação específica e direcionada
- Efeitos mais intensos e rápidos
- Podem sobrecarregar certas vias metabólicas
- Atuam em alvo específico

### Absorção e Biodisponibilidade

Esta é uma das maiores diferenças. Vitaminas naturais frequentemente vêm acompanhadas de cofatores que melhoram sua absorção. Por exemplo:

- Vitamina C de frutas vem com bioflavonoides que potencializam sua ação
- Ferro de origem vegetal é melhor tolerado que formas sintéticas
- Vitamina E natural (d-alfa) é mais biodisponível que sintética (dl-alfa)

Por outro lado, algumas formas sintéticas foram desenvolvidas especificamente para melhorar absorção (como zinco quelado).

## Vantagens e Desvantagens

### Fitoterápicos

**Vantagens:**
✅ Ação sinérgica dos compostos
✅ Geralmente melhor tolerados
✅ Menor risco de toxicidade em doses adequadas
✅ Tradição de uso seguro em muitos casos
✅ Sustentabilidade (quando cultivados responsavelmente)

**Desvantagens:**
❌ Ação mais lenta
❌ Variabilidade de qualidade no mercado
❌ Podem conter alérgenos
❌ Interações medicamentosas possíveis
❌ Mais difícil determinar dose exata

### Sintéticos

**Vantagens:**
✅ Dosagem precisa e consistente
✅ Ação rápida e específica
✅ Custo geralmente menor
✅ Fácil padronização
✅ Ideal para corrigir deficiências específicas

**Desvantagens:**
❌ Ausência de cofatores naturais
❌ Risco de superdosagem
❌ Alguns são mal absorvidos
❌ Podem conter aditivos artificiais
❌ Produção menos sustentável

## Quando Escolher Cada Um?

### Prefira Fitoterápicos quando:
- Busca efeitos adaptativos e reguladores (estresse, sono, energia)
- Quer suporte para sistemas inteiros (imunidade, digestão)
- Tem sensibilidade a suplementos sintéticos
- Prefere abordagem mais holística
- O uso será prolongado

### Prefira Sintéticos quando:
- Tem deficiência específica diagnosticada (ex: anemia por falta de ferro)
- Precisa de dose alta e precisa de um nutriente
- Necessita de resultado rápido
- O custo é fator determinante
- Há dificuldade de absorção (formas otimizadas podem ajudar)

## A Terceira Via: Combinação Inteligente

Muitos profissionais de saúde recomendam uma abordagem combinada:

- **Base fitoterápica** para suporte geral ao organismo
- **Suplementação sintética pontual** para corrigir deficiências específicas

Por exemplo: usar ashwagandha (fitoterápico) para gerenciar estresse crônico, enquanto suplementa com vitamina D3 sintética para corrigir uma deficiência documentada.

## Conclusão

Não existe uma resposta universal sobre qual é "melhor". A escolha depende de:
- Objetivo terapêutico
- Condição de saúde individual
- Preferências pessoais
- Orientação profissional

O mais importante é escolher produtos de qualidade, seguir dosagens recomendadas e, idealmente, ter acompanhamento de um profissional de saúde qualificado.

---

*Este artigo tem caráter informativo e não substitui a consulta a um profissional de saúde qualificado.*
    `,
    image: "/articles/natural-vs-sintetico.jpg",
    category: "Suplementos Naturais",
    tags: ["fitoterápicos", "suplementos", "sintéticos", "naturais", "comparação"],
    author: "Marta Leni, Farmacêutica Clínica",
    publishedAt: "2024-02-10",
    readTime: 10
  }
];

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(a => a.slug === slug);
};

export const getRecentArticles = (limit: number = 3): Article[] => {
  return [...articles]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
};

export const getArticlesByCategory = (category: string): Article[] => {
  return articles.filter(a => a.category === category);
};

export const getPopularArticles = (limit: number = 3): Article[] => {
  // In a real app, this would be based on views/engagement
  return articles.slice(0, limit);
};
