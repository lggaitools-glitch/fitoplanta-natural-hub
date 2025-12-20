import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface InternalLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export const InternalLink = ({ to, children, className = '' }: InternalLinkProps) => {
  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-1 text-primary hover:text-primary/80 underline underline-offset-2 transition-colors ${className}`}
    >
      {children}
    </Link>
  );
};

interface RelatedLinkCardProps {
  to: string;
  title: string;
  description?: string;
}

export const RelatedLinkCard = ({ to, title, description }: RelatedLinkCardProps) => {
  return (
    <Link
      to={to}
      className="block p-4 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all group"
    >
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
            {title}
          </h4>
          {description && (
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          )}
        </div>
        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
      </div>
    </Link>
  );
};

interface SiloNavigationProps {
  pillarTitle: string;
  pillarHref: string;
  currentPage?: string;
  relatedPages: Array<{ title: string; href: string }>;
}

export const SiloNavigation = ({ pillarTitle, pillarHref, currentPage, relatedPages }: SiloNavigationProps) => {
  return (
    <aside className="p-6 rounded-xl bg-muted/50 border border-border">
      <h3 className="font-display text-lg font-semibold text-foreground mb-4">
        Navegue pelo tema
      </h3>
      
      <Link
        to={pillarHref}
        className="block p-3 rounded-lg bg-primary/10 text-primary font-medium mb-3 hover:bg-primary/20 transition-colors"
      >
        📚 {pillarTitle}
      </Link>
      
      <div className="space-y-2">
        {relatedPages.map((page, index) => (
          <Link
            key={index}
            to={page.href}
            className={`block p-2 rounded-lg text-sm transition-colors ${
              currentPage === page.href
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
            }`}
          >
            {page.title}
          </Link>
        ))}
      </div>
    </aside>
  );
};
