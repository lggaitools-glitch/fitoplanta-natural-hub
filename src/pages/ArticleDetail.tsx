import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { getArticleBySlug, getRecentArticles } from '@/data/articles';
import { ArticleCard } from '@/components/articles/ArticleCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ReadingProgress } from '@/components/ui/reading-progress';
import { ChevronLeft, Clock, User, Calendar, Share2, Facebook, Twitter, Linkedin, List } from 'lucide-react';
import ArticleSchema from '@/components/seo/ArticleSchema';
import SEOHead from '@/components/seo/SEOHead';
import DOMPurify from 'dompurify';

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticleBySlug(slug || '');

  if (!article) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Artigo não encontrado</h1>
          <Button asChild>
            <Link to="/artigos">Ver Artigos</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const relatedArticles = getRecentArticles(3).filter(a => a.id !== article.id);

  return (
    <>
      <ReadingProgress />
      <Layout>
      <SEOHead
        title={article.title}
        description={article.excerpt}
        ogImage={article.image}
      />
      <ArticleSchema
        title={article.title}
        description={article.excerpt}
        image={article.image}
        author={article.author}
        publishedAt={article.publishedAt}
        slug={article.slug}
        category={article.category}
      />
      
      {/* Breadcrumb */}
      <div className="bg-cream-dark py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/artigos" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <ChevronLeft className="w-4 h-4" />
            <span>Voltar para Artigos</span>
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Badge className="mb-4 bg-primary text-primary-foreground">
              {article.category}
            </Badge>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <Link to="/sobre" className="flex items-center gap-2 hover:text-primary transition-colors">
                <User className="w-4 h-4" />
                <span className="underline underline-offset-2">{article.author}</span>
              </Link>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(article.publishedAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime} min de leitura</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="aspect-[16/9] rounded-2xl bg-green-soft overflow-hidden mb-8">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Table of Contents */}
            <TableOfContents content={article.content} />

            <article 
              className="prose prose-lg max-w-none 
                prose-headings:font-display prose-headings:font-bold prose-headings:text-foreground
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-5 prose-h2:border-b prose-h2:border-border prose-h2:pb-2
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-primary
                prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-3
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
                prose-strong:text-foreground prose-strong:font-bold
                prose-li:text-muted-foreground prose-li:my-1
                prose-ul:list-disc prose-ul:pl-6 prose-ul:my-4 prose-ul:marker:text-primary prose-ul:marker:font-bold
                prose-ol:list-decimal prose-ol:pl-6 prose-ol:my-4 prose-ol:marker:text-primary prose-ol:marker:font-bold"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(formatContent(article.content)) }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm text-muted-foreground mr-2">Tags:</span>
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="capitalize">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Share */}
            <div className="mt-8 p-6 bg-cream-dark rounded-xl">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-foreground">
                  <Share2 className="w-5 h-5" />
                  <span className="font-medium">Compartilhe este artigo:</span>
                </div>
                <div className="flex gap-3">
                  <button className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Facebook className="w-5 h-5 text-primary" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Twitter className="w-5 h-5 text-primary" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-cream-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-center mb-8">
              Artigos Relacionados
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedArticles.map((a) => (
                <ArticleCard key={a.id} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
    </>
  );
};

// Helper to generate slug from heading text
function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// Table of Contents Component
function TableOfContents({ content }: { content: string }) {
  const headings: { level: number; text: string; id: string }[] = [];
  
  // Extract H2 and H3 headings
  const h2Regex = /^## (.+)$/gm;
  const h3Regex = /^### (.+)$/gm;
  
  let match;
  while ((match = h2Regex.exec(content)) !== null) {
    headings.push({ level: 2, text: match[1], id: generateSlug(match[1]) });
  }
  while ((match = h3Regex.exec(content)) !== null) {
    headings.push({ level: 3, text: match[1], id: generateSlug(match[1]) });
  }
  
  // Sort by position in content
  headings.sort((a, b) => content.indexOf(`## ${a.text}`) - content.indexOf(`## ${b.text}`));
  
  // Re-extract in order
  const orderedHeadings: { level: number; text: string; id: string }[] = [];
  const lines = content.split('\n');
  for (const line of lines) {
    const h2Match = line.match(/^## (.+)$/);
    const h3Match = line.match(/^### (.+)$/);
    if (h2Match) {
      orderedHeadings.push({ level: 2, text: h2Match[1], id: generateSlug(h2Match[1]) });
    } else if (h3Match) {
      orderedHeadings.push({ level: 3, text: h3Match[1], id: generateSlug(h3Match[1]) });
    }
  }

  if (orderedHeadings.length < 2) return null;

  return (
    <nav className="mb-10 p-6 bg-muted/50 rounded-xl border border-border">
      <div className="flex items-center gap-2 mb-4">
        <List className="w-5 h-5 text-primary" />
        <h2 className="font-display font-bold text-lg text-foreground">Neste artigo</h2>
      </div>
      <ul className="space-y-2">
        {orderedHeadings.map((heading, index) => (
          <li 
            key={index} 
            className={heading.level === 3 ? 'ml-4' : ''}
          >
            <a 
              href={`#${heading.id}`}
              className={`block text-muted-foreground hover:text-primary transition-colors ${
                heading.level === 2 ? 'font-medium' : 'text-sm'
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// Helper function to format markdown-like content to HTML
function formatContent(content: string): string {
  let html = content
    // Headers with IDs for anchor navigation (ordem importa - do maior para o menor)
    .replace(/#### (.*)/g, (_, text) => `<h4>${text}</h4>`)
    .replace(/### (.*)/g, (_, text) => `<h3 id="${generateSlug(text)}">${text}</h3>`)
    .replace(/## (.*)/g, (_, text) => `<h2 id="${generateSlug(text)}">${text}</h2>`)
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italic (single asterisk, but not inside words)
    .replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<em>$1</em>')
    // Horizontal rule
    .replace(/^---$/gm, '<hr>');

  // Processar listas não ordenadas (- item)
  html = html.replace(/^- (.*)/gm, '<li class="ul-item">$1</li>');
  
  // Processar listas numeradas (1. item, 2. item, etc)
  html = html.replace(/^\d+\. (.*)/gm, '<li class="ol-item">$1</li>');
  
  // Agrupar <li class="ul-item"> consecutivos em <ul>
  html = html.replace(/(<li class="ul-item">.*?<\/li>\n?)+/g, (match) => {
    const items = match.replace(/class="ul-item"/g, '');
    return '<ul>' + items + '</ul>';
  });
  
  // Agrupar <li class="ol-item"> consecutivos em <ol>
  html = html.replace(/(<li class="ol-item">.*?<\/li>\n?)+/g, (match) => {
    const items = match.replace(/class="ol-item"/g, '');
    return '<ol>' + items + '</ol>';
  });

  // Line breaks para parágrafos
  html = html.replace(/\n\n/g, '</p><p>');
  
  // Wrap em parágrafos
  html = '<p>' + html + '</p>';
  
  // Limpar parágrafos vazios e corrigir estrutura
  html = html.replace(/<p>\s*<\/p>/g, '');
  html = html.replace(/<p>\s*(<h[2-4]|<ul|<ol|<hr)/g, '$1');
  html = html.replace(/(<\/h[2-4]>|<\/ul>|<\/ol>|<hr>)\s*<\/p>/g, '$1');

  return html;
}

export default ArticleDetail;
