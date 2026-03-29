import { Layout } from '@/components/layout/Layout';
import { articles } from '@/data/articles';
import { ArticleCard } from '@/components/articles/ArticleCard';
import { BookOpen } from 'lucide-react';
import SEOHead from '@/components/seo/SEOHead';

const Articles = () => {
  return (
    <Layout>
      <SEOHead
        title="Artigos sobre Fitoterapia e Saúde Natural"
        description="Artigos educativos sobre fitoterapia, plantas medicinais e suplementos naturais. Informações baseadas em ciência para sua jornada de bem-estar."
      />
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
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-leaf-pattern opacity-20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center text-primary-foreground">
            <div className="w-14 h-14 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-7 h-7" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">
              E-book Gratuito: 10 Plantas Essenciais
            </h2>
            <p className="text-primary-foreground/80 mb-8 text-sm sm:text-base">
              Receba nosso guia exclusivo com as plantas medicinais mais estudadas pela ciência, 
              dicas de uso seguro e recomendações de produtos. 100% grátis.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-xl border-0 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent text-primary rounded-xl font-semibold hover:bg-accent/90 transition-colors whitespace-nowrap shadow-gold"
              >
                Quero Receber
              </button>
            </form>
            <p className="text-xs text-primary-foreground/50 mt-4">
              Sem spam • Cancele quando quiser • +2.000 inscritos
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Articles;
