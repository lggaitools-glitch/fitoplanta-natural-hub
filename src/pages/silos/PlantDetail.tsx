import { useParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { RelatedLinkCard, SiloNavigation } from '@/components/navigation/InternalLinks';
import { CombinedDisclaimer } from '@/components/content/Disclaimers';
import { getPlantBySlug, plants } from '@/data/plants';
import { Check, AlertTriangle, Sprout, ExternalLink } from 'lucide-react';
import NotFound from '@/pages/NotFound';
import { Button } from '@/components/ui/button';
import { AFFILIATE_CONFIG } from '@/config/affiliate';
import SEOHead from '@/components/seo/SEOHead';

const PlantDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const plant = getPlantBySlug(slug || '');

  if (!plant) {
    return <NotFound />;
  }

  const relatedPages = plant.subpages.map(s => ({
    title: s.title,
    href: `/plantas-medicinais/${slug}/${s.slug}`
  }));

  const otherPlants = plants.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <Layout>
      <SEOHead
        title={`${plant.name} - Benefícios, Como Usar e Efeitos Colaterais`}
        description={plant.description}
      />
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: 'Plantas Medicinais', href: '/plantas-medicinais' },
            { label: plant.name }
          ]}
        />

        <div className="grid lg:grid-cols-4 gap-8">
          <article className="lg:col-span-3">
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Sprout className="w-10 h-10 text-primary" />
                <div>
                  <h1 className="font-display text-3xl md:text-4xl font-bold text-primary">
                    {plant.name}
                  </h1>
                  <p className="text-muted-foreground italic">{plant.scientificName}</p>
                </div>
              </div>
              <p className="text-xl text-muted-foreground">{plant.description}</p>
            </header>

            <div className="mb-8">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <a 
                  href={AFFILIATE_CONFIG.mainLink} 
                  target="_blank" 
                  rel="noopener noreferrer nofollow"
                >
                  {AFFILIATE_CONFIG.plantCtaText}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Principais Benefícios
              </h2>
              <ul className="space-y-2">
                {plant.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Para Que Serve
              </h2>
              <ul className="space-y-2">
                {plant.uses.map((use, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <span>{use}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Efeitos Colaterais
              </h2>
              <ul className="space-y-2">
                {plant.sideEffects.map((effect, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>{effect}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Contraindicações
              </h2>
              <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800">
                <ul className="space-y-1">
                  {plant.contraindications.map((item, index) => (
                    <li key={index} className="text-red-700 dark:text-red-300">• {item}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Explore Mais Sobre {plant.name}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {plant.subpages.map((subpage) => (
                  <RelatedLinkCard
                    key={subpage.slug}
                    to={`/plantas-medicinais/${slug}/${subpage.slug}`}
                    title={subpage.title}
                    description={subpage.description}
                  />
                ))}
              </div>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Outras Plantas Medicinais
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {otherPlants.map((p) => (
                  <RelatedLinkCard
                    key={p.slug}
                    to={`/plantas-medicinais/${p.slug}`}
                    title={p.name}
                  />
                ))}
              </div>
            </section>

            <CombinedDisclaimer />
          </article>

          <aside className="lg:col-span-1">
            <SiloNavigation
              pillarTitle="Plantas Medicinais"
              pillarHref="/plantas-medicinais"
              currentPage={`/plantas-medicinais/${slug}`}
              relatedPages={relatedPages}
            />
          </aside>
        </div>
      </div>
    </Layout>
  );
};

export default PlantDetail;
