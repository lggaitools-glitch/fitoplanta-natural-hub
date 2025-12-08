import { Layout } from '@/components/layout/Layout';
import { articles } from '@/data/articles';
import { ArticleCard } from '@/components/articles/ArticleCard';
import { BookOpen } from 'lucide-react';

const Articles = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-primary-foreground animate-fade-up">
            <div className="flex items-center gap-2 text-accent mb-4">
              <BookOpen className="w-5 h-5" />
              <span className="text-sm font-medium">Blog & Conhecimento</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              Artigos e Conteúdos
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Informações baseadas em ciência sobre fitoterapia, saúde natural e bem-estar para sua jornada de vida saudável.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div
                key={article.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-cream-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Receba Novos Conteúdos
            </h2>
            <p className="text-muted-foreground mb-8">
              Inscreva-se para receber artigos exclusivos sobre saúde natural e ofertas especiais.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Inscrever
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Articles;
