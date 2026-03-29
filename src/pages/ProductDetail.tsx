import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { getProductBySlug, productReviews } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Leaf, Check, Star, ChevronLeft, ExternalLink, AlertCircle, ThumbsUp, ThumbsDown } from 'lucide-react';
import ProductSchema from '@/components/seo/ProductSchema';
import { AFFILIATE_CONFIG } from '@/config/affiliate';
import SEOHead from '@/components/seo/SEOHead';
import { StickyAffiliateCTA } from '@/components/monetization/StickyAffiliateCTA';

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || '');

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Produto não encontrado</h1>
          <Button asChild>
            <Link to="/produtos">Ver Produtos</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const relatedProducts = productReviews.filter(p => p.id !== product.id).slice(0, 2);

  return (
    <Layout>
      <SEOHead
        title={product.name}
        description={product.tagline}
        ogImage={product.image}
      />
      <ProductSchema
        name={product.name}
        description={product.description.substring(0, 200)}
        image={product.image}
        slug={product.slug}
        rating={product.rating}
        category={product.category}
      />
      
      {/* Breadcrumb */}
      <div className="bg-cream-dark py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/produtos" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <ChevronLeft className="w-4 h-4" />
            <span>Voltar para Produtos</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="animate-fade-up">
              <div className="aspect-square rounded-2xl bg-green-soft overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Info */}
            <div className="animate-fade-up delay-100">
              <div className="flex items-center gap-2 text-secondary mb-2">
                <Leaf className="w-4 h-4" />
                <span className="text-sm font-medium">{product.category}</span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">
                {product.name}
              </h1>
              <p className="text-lg text-muted-foreground mb-4">{product.tagline}</p>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-muted'}`} />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  Avaliação: {product.rating}/5
                </span>
              </div>

              {/* Description */}
              <div className="prose prose-sm text-muted-foreground mb-6">
                {product.description.split('\n\n').map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Technical Info */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="px-4 py-2 bg-green-soft rounded-lg">
                  <span className="text-xs text-muted-foreground block">Conteúdo Comum</span>
                  <span className="font-medium text-foreground">{product.technicalInfo.quantity}</span>
                </div>
                <div className="px-4 py-2 bg-green-soft rounded-lg">
                  <span className="text-xs text-muted-foreground block">Forma</span>
                  <span className="font-medium text-foreground">{product.technicalInfo.form}</span>
                </div>
                <div className="px-4 py-2 bg-green-soft rounded-lg">
                  <span className="text-xs text-muted-foreground block">Dose</span>
                  <span className="font-medium text-foreground">{product.technicalInfo.dosage}</span>
                </div>
              </div>

              {/* CTA */}
              <Button size="lg" variant="premium" className="w-full sm:w-auto" asChild>
                <a href={AFFILIATE_CONFIG.mainLink} target="_blank" rel="noopener noreferrer nofollow">
                  {AFFILIATE_CONFIG.ctaText}
                  <ExternalLink className="w-5 h-5" />
                </a>
              </Button>

              {/* Affiliate Notice */}
              <p className="text-xs text-muted-foreground mt-4 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                Link de afiliado. Podemos receber comissão sem custo adicional para você.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="py-12 bg-cream-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-xl shadow-card">
              <h3 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <ThumbsUp className="w-5 h-5 text-green-600" />
                Pontos Positivos
              </h3>
              <ul className="space-y-3">
                {product.pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-card">
              <h3 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <ThumbsDown className="w-5 h-5 text-red-500" />
                Pontos Negativos
              </h3>
              <ul className="space-y-3">
                {product.cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5">✗</span>
                    <span className="text-muted-foreground text-sm">{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible defaultValue="benefits" className="space-y-4">
              <AccordionItem value="benefits" className="bg-card rounded-xl px-6 border-none shadow-card">
                <AccordionTrigger className="font-display text-lg hover:no-underline">
                  Benefícios
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-3">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="forWhom" className="bg-card rounded-xl px-6 border-none shadow-card">
                <AccordionTrigger className="font-display text-lg hover:no-underline">
                  Para Quem é Indicado
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-3">
                    {product.forWhom.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="ingredients" className="bg-card rounded-xl px-6 border-none shadow-card">
                <AccordionTrigger className="font-display text-lg hover:no-underline">
                  Composição Típica
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {product.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <Leaf className="w-4 h-4 text-secondary" />
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="howToUse" className="bg-card rounded-xl px-6 border-none shadow-card">
                <AccordionTrigger className="font-display text-lg hover:no-underline">
                  Como Usar
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {product.howToUse}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="contraindications" className="bg-card rounded-xl px-6 border-none shadow-card">
                <AccordionTrigger className="font-display text-lg hover:no-underline">
                  Contraindicações
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {product.contraindications}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Aviso:</strong> Este conteúdo é informativo e não substitui orientação médica. 
              Consulte um profissional de saúde antes de iniciar qualquer suplementação.
            </p>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-cream-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-center mb-8">
              Veja Também
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {relatedProducts.map((p) => (
                <Link key={p.id} to={`/produtos/${p.slug}`} className="bg-card p-6 rounded-xl shadow-card hover:shadow-elevated transition-all">
                  <h3 className="font-display text-lg font-semibold text-foreground">{p.name}</h3>
                  <p className="text-sm text-muted-foreground">{p.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      <StickyAffiliateCTA productName={product.name} />
    </Layout>
  );
};

export default ProductDetail;
