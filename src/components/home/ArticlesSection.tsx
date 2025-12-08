import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { getRecentArticles } from '@/data/articles';
import { ArticleCard } from '@/components/articles/ArticleCard';
import { ArrowRight } from 'lucide-react';

export const ArticlesSection = () => {
  const articles = getRecentArticles(3);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div className="animate-fade-up">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Artigos e Conteúdos
            </h2>
            <p className="text-muted-foreground text-lg">
              Conhecimento para sua jornada de saúde natural
            </p>
          </div>
          <Button variant="outline" asChild className="animate-fade-up delay-100 group">
            <Link to="/artigos">
              Ver Todos
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

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
  );
};
