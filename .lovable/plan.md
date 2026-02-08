

# Plano: Corrigir Problemas de Indexacao Google ("Discovered - currently not indexed")

## Diagnostico dos Problemas Atuais

Apos analise detalhada do projeto, identifiquei os seguintes problemas criticos que afetam a indexacao:

### Problemas Encontrados

| Problema | Gravidade | Impacto |
|----------|-----------|---------|
| Falta de meta robots "index,follow" | Critica | Google nao recebe sinal claro de indexacao |
| URL canonical estatica no index.html | Critica | Todas as paginas usam canonical errado |
| Sitemap desatualizado (falta Curcuma) | Alta | Paginas novas nao sao descobertas |
| Sitemap usa dominio .com, canonical usa .com.br | Critica | Sinais conflitantes |
| Pagina 404 sem meta noindex | Media | Pode confundir crawl budget |
| Ausencia de lastmod dinamico | Media | Google nao prioriza crawl |
| Falta de links internos na homepage | Alta | Reduz prioridade de crawl |

---

## Secao Tecnica - Implementacao Detalhada

### 1. Criar Componente SEO Dinamico (CRITICO)

**Novo arquivo:** `src/components/seo/SEOHead.tsx`

Este componente gerenciara dinamicamente todas as meta tags SEO para cada pagina:

```text
+------------------------------------------+
|            SEOHead Component             |
+------------------------------------------+
|  - title (document.title)                |
|  - description (meta)                    |
|  - canonical (auto-gerado por rota)      |
|  - robots: "index,follow"                |
|  - og:title, og:description, og:url      |
|  - twitter:title, twitter:description    |
+------------------------------------------+
```

**Funcionalidades:**
- Atualiza `document.title` dinamicamente
- Injeta/atualiza meta tags no head
- Gera canonical URL automaticamente baseado na rota atual
- Usa dominio consistente: `https://fitoplantamed.com`
- Remove duplicatas ao navegar entre paginas

### 2. Implementar SEO em Todas as Paginas

**Arquivos a modificar:**

| Pagina | Arquivo | Titulo Dinamico |
|--------|---------|-----------------|
| Home | `src/pages/Index.tsx` | "FitoPlantaMed - Fitoterapia e Saude Natural" |
| Artigos | `src/pages/Articles.tsx` | "Artigos sobre Fitoterapia - FitoPlantaMed" |
| Artigo Detalhe | `src/pages/ArticleDetail.tsx` | "{titulo do artigo} - FitoPlantaMed" |
| Plantas | `src/pages/silos/PlantasMedicinaisPillar.tsx` | "Plantas Medicinais - FitoPlantaMed" |
| Planta Detalhe | `src/pages/silos/PlantDetail.tsx` | "{nome da planta} - FitoPlantaMed" |
| Planta Subpagina | `src/pages/silos/PlantSubpage.tsx` | "{subpagina} - {planta} - FitoPlantaMed" |
| Fitoterapia | `src/pages/silos/FitoterapiaPillar.tsx` | "Fitoterapia - FitoPlantaMed" |
| Suplementos | `src/pages/silos/SuplementosPillar.tsx` | "Suplementos Naturais - FitoPlantaMed" |
| Guias | `src/pages/silos/GuiasPillar.tsx` | "Guias de Compra - FitoPlantaMed" |
| Bem-estar | `src/pages/silos/BemEstarPillar.tsx` | "Bem-estar Natural - FitoPlantaMed" |
| Sobre | `src/pages/About.tsx` | "Sobre Nos - FitoPlantaMed" |
| Contato | `src/pages/Contact.tsx` | "Contato - FitoPlantaMed" |
| Transparencia | `src/pages/Transparency.tsx` | "Transparencia - FitoPlantaMed" |
| NotFound | `src/pages/NotFound.tsx` | "Pagina Nao Encontrada - FitoPlantaMed" |

### 3. Corrigir index.html (CRITICO)

**Arquivo:** `index.html`

**Alteracoes:**
1. Remover canonical estatico (sera dinamico via React)
2. Adicionar meta robots padrao
3. Corrigir dominio para consistencia

```html
<!-- REMOVER -->
<link rel="canonical" href="https://fitoplantamed.com.br" />

<!-- ADICIONAR -->
<meta name="robots" content="index,follow" />
```

### 4. Corrigir Pagina 404 (IMPORTANTE)

**Arquivo:** `src/pages/NotFound.tsx`

**Alteracoes:**
- Adicionar SEOHead com `robots="noindex,follow"`
- Adicionar Layout para consistencia visual
- Melhorar UX com links internos

### 5. Atualizar Sitemap (CRITICO)

**Arquivo:** `public/sitemap.xml`

**Alteracoes:**
1. Adicionar Curcuma e todas suas subpaginas
2. Corrigir dominio de `.com` para `.com` (sem .br para consistencia)
3. Adicionar lastmod com data atual
4. Verificar que todas as URLs coincidem com canonicals

**Novas URLs a adicionar:**
```xml
<!-- Curcuma -->
<url>
  <loc>https://fitoplantamed.com/plantas-medicinais/curcuma</loc>
  <lastmod>2025-02-08</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
<url>
  <loc>https://fitoplantamed.com/plantas-medicinais/curcuma/beneficios</loc>
  <lastmod>2025-02-08</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
<!-- + mais 3 subpaginas -->
```

### 6. Fortalecer Links Internos na Homepage (MUITO IMPORTANTE)

**Arquivo:** `src/components/home/Hero.tsx`

**Alteracoes:**
- Adicionar link direto para `/plantas-medicinais`
- Adicionar link direto para `/fitoterapia`

**Arquivo:** `src/pages/Index.tsx`

**Alteracoes:**
- Adicionar nova secao com links diretos para artigos populares
- Garantir que todas as 5 silos principais estejam linkadas

### 7. Atualizar Footer com Curcuma

**Arquivo:** `src/components/layout/Footer.tsx`

**Alteracoes:**
- Adicionar Curcuma na lista de plantas no footer

### 8. Corrigir Dominio nos Schemas JSON-LD

**Arquivos:**
- `src/components/seo/OrganizationSchema.tsx`
- `src/components/seo/ArticleSchema.tsx`
- `src/components/seo/ProductSchema.tsx`
- `src/components/seo/PersonSchema.tsx`

**Alteracoes:**
- Garantir que todos usem `https://fitoplantamed.com` (sem .br)

---

## Resumo das Alteracoes

| # | Acao | Tipo | Prioridade |
|---|------|------|------------|
| 1 | Criar SEOHead.tsx | Novo arquivo | Critica |
| 2 | Implementar SEO em 15+ paginas | Modificacao | Critica |
| 3 | Corrigir index.html | Modificacao | Critica |
| 4 | Melhorar NotFound.tsx | Modificacao | Alta |
| 5 | Atualizar sitemap.xml | Modificacao | Critica |
| 6 | Adicionar links internos Hero | Modificacao | Alta |
| 7 | Atualizar Footer.tsx | Modificacao | Media |
| 8 | Corrigir dominios nos Schemas | Modificacao | Alta |

---

## Resultado Esperado

Apos implementacao:
- Todas as paginas terao canonical correto e auto-referenciado
- Meta robots "index,follow" em todas as paginas publicas
- Meta robots "noindex,follow" apenas na pagina 404
- Sitemap sincronizado com todas as URLs indexaveis
- Links internos fortalecem descoberta de paginas
- Sinais consistentes para Googlebot

O status no Google Search Console deve mudar de "Discovered - currently not indexed" para "Crawled - currently indexed" em dias a semanas apos implementacao.

