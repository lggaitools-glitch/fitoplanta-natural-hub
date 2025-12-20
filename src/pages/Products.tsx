import { Layout } from '@/components/layout/Layout';
import { productReviews } from '@/data/products';
import { Link } from 'react-router-dom';
import { Leaf, Star, ExternalLink, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Products = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-primary-foreground animate-fade-up">
            <div className="flex items-center gap-2 text-accent mb-4">
              <Leaf className="w-5 h-5" />
              <span className="text-sm font-medium">Guias & Reviews</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              Produtos Recomendados
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Análises detalhadas e imparciais de fitoterápicos e suplementos naturais. 
              Descubra o que realmente funciona baseado em evidências científicas.
            </p>
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="py-6 bg-accent/10 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 text-sm text-muted-foreground">
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <p>
              <strong>Transparência:</strong> Este site contém links de afiliados. Se você comprar através deles, 
              podemos receber uma comissão sem custo adicional para você. Isso nos ajuda a manter o conteúdo gratuito e de qualidade.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productReviews.map((product, index) => (
              <article
                key={product.id}
                className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 animate-fade-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video bg-green-soft overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-secondary">{product.category}</span>
                  <h2 className="font-display text-xl font-semibold text-foreground mt-1 mb-2">
                    {product.name}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4">{product.tagline}</p>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-muted'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">{product.rating}/5</span>
                  </div>

                  <Button asChild variant="premium" className="w-full">
                    <Link to={`/produtos/${product.slug}`}>
                      Ver Análise Completa
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How We Choose */}
      <section className="py-16 bg-cream-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Como Escolhemos os Produtos
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Analisamos dezenas de produtos antes de recomendar. Nossos critérios incluem: 
              evidências científicas, qualidade dos ingredientes, reputação da marca, 
              custo-benefício e feedback de usuários reais. Priorizamos extratos padronizados 
              e marcas com certificações de qualidade.
            </p>
            <Link to="/transparencia" className="text-primary font-medium hover:underline">
              Saiba mais sobre nossa metodologia →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
