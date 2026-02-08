import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Article } from '@/data/articles';
import { Clock, ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface ArticleCardProps {
  article: Article;
}

// Fallback icon component to avoid innerHTML XSS risks
const FallbackIcon = () => (
  <svg className="w-16 h-16 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
  </svg>
);

// Safe image component with React-based fallback
const ArticleImage = ({ src, alt, category }: { src: string; alt: string; category: string }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative aspect-[16/10] bg-green-soft overflow-hidden ${hasError ? 'flex items-center justify-center' : ''}`}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => setHasError(true)}
        />
      ) : (
        <FallbackIcon />
      )}
      <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
        {category}
      </Badge>
    </div>
  );
};

export const ArticleCard = ({ article }: ArticleCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <Link
      to={`/artigos/${article.slug}`}
      className="group block bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300"
    >
      {/* Image */}
      <ArticleImage src={article.image} alt={article.title} category={article.category} />

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {article.readTime} min de leitura
          </span>
        </div>

        <h3 className="font-display text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {article.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            {formatDate(article.publishedAt)}
          </span>
          <span className="flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
            Ler mais
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
};
