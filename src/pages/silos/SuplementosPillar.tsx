import { Layout } from '@/components/layout/Layout';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { RelatedLinkCard } from '@/components/navigation/InternalLinks';
import { CombinedDisclaimer } from '@/components/content/Disclaimers';
import { supplements } from '@/data/supplements';
import { Pill } from 'lucide-react';

const SuplementosPillar = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'Suplementos Naturais' }]} />

        <header className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Suplementos Naturais
          </h1>
          <p className="text-xl text-muted-foreground">
            Guia completo sobre suplementos derivados de plantas medicinais: formas de uso, 
            dosagens e como escolher produtos de qualidade.
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-12">
          <h2>Formas de Apresentação</h2>
          <p>
            Suplementos naturais podem ser encontrados em diversas formas: cápsulas, extratos líquidos, 
            chás, pós e tinturas. Cada forma tem suas vantagens e é mais indicada para diferentes situações.
          </p>

          <h2>Critérios de Qualidade</h2>
          <p>
            Ao escolher um suplemento, verifique: padronização do extrato, certificações de qualidade, 
            ausência de aditivos desnecessários e reputação do fabricante.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">
            Suplementos em Destaque
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {supplements.map((supplement) => (
              <div key={supplement.slug} className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <Pill className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">{supplement.name}</h3>
                    <p className="text-sm text-muted-foreground">{supplement.form}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{supplement.description}</p>
                <RelatedLinkCard to={`/suplementos-naturais/${supplement.slug}`} title="Ver detalhes" />
              </div>
            ))}
          </div>
        </section>

        <CombinedDisclaimer />
      </div>
    </Layout>
  );
};

export default SuplementosPillar;
