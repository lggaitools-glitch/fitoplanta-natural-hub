import { useParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { RelatedLinkCard, SiloNavigation } from '@/components/navigation/InternalLinks';
import { CombinedDisclaimer } from '@/components/content/Disclaimers';
import { getSupplementBySlug, supplements } from '@/data/supplements';
import { getPlantBySlug } from '@/data/plants';
import { Button } from '@/components/ui/button';
import { Check, ExternalLink, Pill } from 'lucide-react';
import NotFound from '@/pages/NotFound';

const SupplementDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const supplement = getSupplementBySlug(slug || '');

  if (!supplement) {
    return <NotFound />;
  }

  const plant = getPlantBySlug(supplement.plant.toLowerCase());
  
  const relatedPages = supplements
    .filter(s => s.slug !== slug)
    .map(s => ({ title: s.name, href: `/suplementos-naturais/${s.slug}` }));

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: 'Suplementos Naturais', href: '/suplementos-naturais' },
            { label: supplement.name }
          ]}
        />

        <div className="grid lg:grid-cols-4 gap-8">
          <article className="lg:col-span-3">
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Pill className="w-10 h-10 text-primary" />
                <div>
                  <h1 className="font-display text-3xl md:text-4xl font-bold text-primary">
                    {supplement.name}
                  </h1>
                  <p className="text-muted-foreground">{supplement.form} • {supplement.plant}</p>
                </div>
              </div>
              <p className="text-xl text-muted-foreground">{supplement.description}</p>
            </header>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Benefícios
              </h2>
              <ul className="space-y-2">
                {supplement.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Como Usar
              </h2>
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="mb-4">{supplement.howToUse}</p>
                <p className="text-sm text-muted-foreground">
                  <strong>Dosagem típica:</strong> {supplement.dosage}
                </p>
              </div>
            </section>

            <section className="mb-8">
              <div className="p-6 rounded-xl bg-primary/10 border border-primary/20">
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  Onde Comprar
                </h3>
                <p className="text-muted-foreground mb-4">
                  Encontre as melhores opções de {supplement.name.toLowerCase()} em nossa análise de marcas.
                </p>
                <Button variant="gold" className="gap-2" asChild>
                  <a href="https://lmdee.link/wmVbhyOITYsp" target="_blank" rel="noopener noreferrer nofollow">
                    Ver Preço na BioVittare <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </section>

            {plant && (
              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Sobre a Planta
                </h2>
                <RelatedLinkCard
                  to={`/plantas-medicinais/${plant.slug}`}
                  title={plant.name}
                  description={`Conheça todos os benefícios e usos da ${plant.name.toLowerCase()}`}
                />
              </section>
            )}

            <CombinedDisclaimer />
          </article>

          <aside className="lg:col-span-1">
            <SiloNavigation
              pillarTitle="Suplementos Naturais"
              pillarHref="/suplementos-naturais"
              currentPage={`/suplementos-naturais/${slug}`}
              relatedPages={relatedPages}
            />
          </aside>
        </div>
      </div>
    </Layout>
  );
};

export default SupplementDetail;
