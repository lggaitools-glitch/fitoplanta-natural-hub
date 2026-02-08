import { Layout } from '@/components/layout/Layout';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { RelatedLinkCard } from '@/components/navigation/InternalLinks';
import { CombinedDisclaimer } from '@/components/content/Disclaimers';
import { guides } from '@/data/guides';
import { BookMarked } from 'lucide-react';
import SEOHead from '@/components/seo/SEOHead';

const GuiasPillar = () => {
  return (
    <Layout>
      <SEOHead
        title="Guias de Compra - Melhores Fitoterápicos e Suplementos"
        description="Análises detalhadas e imparciais para ajudar você a escolher os melhores produtos naturais. Comparativos de marcas e recomendações."
      />
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'Guias de Compra' }]} />

        <header className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Guias de Compra
          </h1>
          <p className="text-xl text-muted-foreground">
            Análises detalhadas e imparciais para ajudar você a escolher os melhores produtos naturais.
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-12">
          <h2>Como Escolhemos os Produtos</h2>
          <p>
            Nossa equipe analisa dezenas de produtos em cada categoria, avaliando qualidade dos ingredientes, 
            concentração de ativos, reputação da marca, certificações e relação custo-benefício.
          </p>
          <p>
            <strong>Transparência:</strong> Este site é mantido através de comissões de afiliados. 
            Quando você compra através dos nossos links, podemos receber uma comissão sem custo adicional para você.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">
            Nossos Guias
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {guides.map((guide) => (
              <div key={guide.slug} className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-start gap-3 mb-3">
                  <BookMarked className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">{guide.title}</h3>
                    <p className="text-sm text-muted-foreground">{guide.subtitle}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{guide.description}</p>
                <RelatedLinkCard to={`/guias/${guide.slug}`} title="Ler guia completo" />
              </div>
            ))}
          </div>
        </section>

        <CombinedDisclaimer />
      </div>
    </Layout>
  );
};

export default GuiasPillar;
