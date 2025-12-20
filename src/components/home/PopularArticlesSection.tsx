import { Link } from 'react-router-dom';
import { getPopularArticles } from '@/data/articles';
import { TrendingUp, ArrowRight, Clock } from 'lucide-react';

export const PopularArticlesSection = () => {
  const popularArticles = getPopularArticles(3);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 text-secondary mb-2">
              <TrendingUp className="w-5 h-5" />
              <span className="text-sm font-medium">Mais Lidos</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
              Artigos Populares
            </h2>
          </div>
          <Link
            to="/artigos"
            className="hidden sm:flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Ver todos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="space-y-6">
          {popularArticles.map((article, index) => (
            <Link
              key={article.id}
              to={`/artigos/${article.slug}`}
              className="flex flex-col md:flex-row gap-6 bg-card p-6 rounded-xl shadow-card hover:shadow-elevated transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-full md:w-48 h-32 rounded-lg bg-green-soft overflow-hidden flex-shrink-0">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <span className="text-xs font-medium text-secondary">{article.category}</span>
                <h3 className="font-display text-lg font-semibold text-foreground mt-1 mb-2">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{article.author}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime} min
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            to="/artigos"
            className="inline-flex items-center gap-2 text-primary font-medium"
          >
            Ver todos os artigos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
