import { Link } from 'react-router-dom';
import { Star, ExternalLink, ArrowRight } from 'lucide-react';
import { productReviews, ProductReview } from '@/data/products';
import { AFFILIATE_CONFIG } from '@/config/affiliate';

interface RelatedProductsProps {
  category?: string;
  limit?: number;
  title?: string;
}

export const RelatedProducts = ({ 
  category, 
  limit = 3,
  title = 'Produtos Recomendados' 
}: RelatedProductsProps) => {
  let products: ProductReview[];
  
  if (category) {
    products = productReviews.filter(p => 
      p.category.toLowerCase().includes(category.toLowerCase()) ||
      p.name.toLowerCase().includes(category.toLowerCase())
    );
    // Fill remaining with featured if not enough
    if (products.length < limit) {
      const remaining = productReviews.filter(p => !products.includes(p));
      products = [...products, ...remaining].slice(0, limit);
    }
  } else {
    products = productReviews.filter(p => p.featured).slice(0, limit);
  }

  if (products.length === 0) {
    products = productReviews.slice(0, limit);
  }

  return (
    <section className="my-12 py-10 bg-cream-dark rounded-2xl">
      <div className="px-6 sm:px-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-display text-xl font-bold text-foreground">{title}</h3>
          <Link 
            to="/produtos" 
            className="text-sm text-primary font-medium hover:underline flex items-center gap-1"
          >
            Ver todos
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.slice(0, limit).map((product) => (
            <div key={product.id} className="bg-card rounded-xl p-5 shadow-card hover:shadow-elevated transition-all">
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-muted'}`} 
                  />
                ))}
                <span className="text-xs text-muted-foreground ml-1">{product.rating}</span>
              </div>
              
              <Link to={`/produtos/${product.slug}`}>
                <h4 className="font-semibold text-foreground hover:text-primary transition-colors mb-1">
                  {product.name}
                </h4>
              </Link>
              <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{product.tagline}</p>
              
              <div className="flex gap-2">
                <a
                  href={AFFILIATE_CONFIG.mainLink}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-2 bg-primary text-primary-foreground rounded-lg text-xs font-medium hover:bg-primary/90 transition-colors"
                >
                  Comprar
                  <ExternalLink className="w-3 h-3" />
                </a>
                <Link
                  to={`/produtos/${product.slug}`}
                  className="px-3 py-2 border border-border rounded-lg text-xs font-medium text-foreground hover:bg-muted transition-colors"
                >
                  Análise
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground text-center mt-4">
          Links de afiliado. Podemos receber comissão sem custo adicional para você.
        </p>
      </div>
    </section>
  );
};