import { Layout } from '@/components/layout/Layout';
import { products } from '@/data/products';
import { ProductCard } from '@/components/products/ProductCard';
import { Leaf } from 'lucide-react';

const Products = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-primary-foreground animate-fade-up">
            <div className="flex items-center gap-2 text-accent mb-4">
              <Leaf className="w-5 h-5" />
              <span className="text-sm font-medium">Catálogo Completo</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              Nossos Produtos
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Descubra nossa linha completa de fitoterápicos premium, desenvolvidos com ciência e natureza para seu bem-estar.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-cream-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Qualidade Premium em Cada Produto
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Todos os produtos FitoPlantaMed são desenvolvidos com extratos padronizados de alta concentração, 
              garantindo a eficácia terapêutica comprovada cientificamente. Trabalhamos apenas com fornecedores 
              certificados e cada lote passa por rigoroso controle de qualidade.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
