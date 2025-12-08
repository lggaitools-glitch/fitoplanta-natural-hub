import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { getProductBySlug, products } from '@/data/products';
import { ProductCard } from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';
import { ShoppingBag, Leaf, Check, Star, ChevronLeft, Shield, Truck, Award } from 'lucide-react';
import { useState } from 'react';

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || '');
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

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

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${quantity}x ${product.name} adicionado ao carrinho!`);
  };

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-cream-dark py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/produtos" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <ChevronLeft className="w-4 h-4" />
            <span>Voltar para Produtos</span>
          </Link>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="animate-fade-up">
              <div className="aspect-square rounded-2xl bg-green-soft overflow-hidden relative">
                {product.badge && (
                  <Badge className="absolute top-6 left-6 bg-accent text-accent-foreground z-10">
                    {product.badge}
                  </Badge>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
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
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  ({product.testimonials.length} avaliações)
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                {product.originalPrice && (
                  <span className="text-muted-foreground line-through text-lg block">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
                <span className="text-3xl font-bold text-primary">
                  {formatPrice(product.price)}
                </span>
                <span className="text-sm text-muted-foreground ml-2">
                  ou até 3x de {formatPrice(product.price / 3)} sem juros
                </span>
              </div>

              {/* Technical Info */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="px-4 py-2 bg-green-soft rounded-lg">
                  <span className="text-xs text-muted-foreground block">Conteúdo</span>
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

              {/* Quantity & Add to Cart */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center hover:bg-muted transition-colors"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center hover:bg-muted transition-colors"
                  >
                    +
                  </button>
                </div>
                <Button size="lg" variant="premium" onClick={handleAddToCart} className="flex-1">
                  <ShoppingBag className="w-5 h-5" />
                  Adicionar ao Carrinho
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 py-6 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield className="w-4 h-4 text-secondary" />
                  <span>Compra Segura</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Truck className="w-4 h-4 text-secondary" />
                  <span>Frete Grátis acima de R$150</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Award className="w-4 h-4 text-secondary" />
                  <span>Garantia de Qualidade</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-12 bg-cream-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible defaultValue="description" className="space-y-4">
              <AccordionItem value="description" className="bg-card rounded-xl px-6 border-none shadow-card">
                <AccordionTrigger className="font-display text-lg hover:no-underline">
                  Descrição
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {product.description}
                </AccordionContent>
              </AccordionItem>

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

              <AccordionItem value="ingredients" className="bg-card rounded-xl px-6 border-none shadow-card">
                <AccordionTrigger className="font-display text-lg hover:no-underline">
                  Composição
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
                  Modo de Uso
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

              <AccordionItem value="faq" className="bg-card rounded-xl px-6 border-none shadow-card">
                <AccordionTrigger className="font-display text-lg hover:no-underline">
                  Perguntas Frequentes
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6">
                    {product.faqs.map((faq, index) => (
                      <div key={index}>
                        <h4 className="font-medium text-foreground mb-2">{faq.question}</h4>
                        <p className="text-muted-foreground text-sm">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-center mb-8">
            Avaliações de Clientes
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {product.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-card">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-4">"{testimonial.text}"</p>
                <p className="font-medium text-foreground">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-cream-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-center mb-8">
            Produtos Relacionados
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
