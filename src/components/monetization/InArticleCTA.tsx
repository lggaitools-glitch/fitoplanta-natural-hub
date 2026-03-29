import { ExternalLink, Star, Shield } from 'lucide-react';
import { AFFILIATE_CONFIG } from '@/config/affiliate';

interface InArticleCTAProps {
  productName?: string;
  description?: string;
  ctaText?: string;
  variant?: 'default' | 'compact' | 'highlight';
}

export const InArticleCTA = ({ 
  productName = 'Suplementos Naturais Premium',
  description = 'Produtos selecionados com base científica e qualidade garantida.',
  ctaText = AFFILIATE_CONFIG.ctaText,
  variant = 'default'
}: InArticleCTAProps) => {
  const handleClick = () => {
    // Track affiliate click
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'affiliate_click', {
        event_category: 'monetization',
        event_label: productName,
        transport_type: 'beacon',
      });
    }
  };

  if (variant === 'compact') {
    return (
      <div className="my-8 p-4 bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Star className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground text-sm">{productName}</p>
              <p className="text-xs text-muted-foreground">{description}</p>
            </div>
          </div>
          <a
            href={AFFILIATE_CONFIG.mainLink}
            target="_blank"
            rel="noopener noreferrer nofollow"
            onClick={handleClick}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            {ctaText}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    );
  }

  if (variant === 'highlight') {
    return (
      <div className="my-10 relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-8 text-primary-foreground">
        <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-accent">Recomendação FitoPlantaMed</span>
          </div>
          <h3 className="font-display text-2xl font-bold mb-2">{productName}</h3>
          <p className="text-primary-foreground/80 mb-6 max-w-lg">{description}</p>
          <a
            href={AFFILIATE_CONFIG.mainLink}
            target="_blank"
            rel="noopener noreferrer nofollow"
            onClick={handleClick}
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-primary rounded-lg font-semibold hover:bg-accent/90 transition-colors shadow-gold"
          >
            {ctaText}
            <ExternalLink className="w-5 h-5" />
          </a>
          <p className="text-xs text-primary-foreground/50 mt-4">
            * Link de afiliado. Comissão sem custo adicional para você.
          </p>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className="my-10 p-6 bg-card border-2 border-accent/30 rounded-2xl shadow-card">
      <div className="flex items-center gap-2 mb-3">
        <Star className="w-5 h-5 text-accent fill-accent" />
        <span className="text-sm font-medium text-accent">Produto Recomendado</span>
      </div>
      <h3 className="font-display text-xl font-bold text-foreground mb-2">{productName}</h3>
      <p className="text-muted-foreground text-sm mb-5">{description}</p>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <a
          href={AFFILIATE_CONFIG.mainLink}
          target="_blank"
          rel="noopener noreferrer nofollow"
          onClick={handleClick}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors"
        >
          {ctaText}
          <ExternalLink className="w-5 h-5" />
        </a>
        <span className="text-xs text-muted-foreground flex items-center gap-1">
          <Shield className="w-3 h-3" />
          Qualidade verificada pela equipe FitoPlantaMed
        </span>
      </div>
    </div>
  );
};