import { useParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { RelatedLinkCard, SiloNavigation } from '@/components/navigation/InternalLinks';
import { CombinedDisclaimer } from '@/components/content/Disclaimers';
import { getGuideBySlug, guides } from '@/data/guides';
import { getPlantBySlug } from '@/data/plants';
import { Button } from '@/components/ui/button';
import { Check, X, ExternalLink } from 'lucide-react';
import NotFound from '@/pages/NotFound';
import { AFFILIATE_CONFIG } from '@/config/affiliate';
import SEOHead from '@/components/seo/SEOHead';

const GuideDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const guide = getGuideBySlug(slug || '');

  if (!guide) {
    return <NotFound />;
  }

  const relatedPages = guides
    .filter(g => g.slug !== slug)
    .slice(0, 4)
    .map(g => ({ title: g.title, href: `/guias/${g.slug}` }));

  return (
    <Layout>
      <SEOHead
        title={guide.title}
        description={guide.description}
      />
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: 'Guias de Compra', href: '/guias' },
            { label: guide.title }
          ]}
        />

        <div className="grid lg:grid-cols-4 gap-8">
          <article className="lg:col-span-3">
            <header className="mb-8">
              <span className="text-sm font-medium text-accent uppercase tracking-wide">
                {guide.subtitle}
              </span>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
                {guide.title}
              </h1>
              <p className="text-xl text-muted-foreground">{guide.description}</p>
            </header>

            <div className="prose prose-lg max-w-none mb-8">
              <p>{guide.introduction}</p>
            </div>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Nossos Critérios de Avaliação
              </h2>
              <ul className="grid md:grid-cols-2 gap-2">
                {guide.criteria.map((criterion, index) => (
                  <li key={index} className="flex items-center gap-2 p-2 rounded-lg bg-muted/50">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm">{criterion}</span>
                  </li>
                ))}
              </ul>
            </section>

            {guide.productsBR.length > 0 && (
              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  🇧🇷 Opções Disponíveis no Brasil
                </h2>
                <div className="space-y-6">
                  {guide.productsBR.map((product, index) => (
                    <div key={index} className="p-6 rounded-xl bg-card border border-border">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-display text-xl font-semibold text-foreground">
                            {product.name}
                          </h3>
                          <p className="text-muted-foreground">{product.brand}</p>
                        </div>
                        <Button variant="gold" size="sm" className="gap-2" asChild>
                          <a href={AFFILIATE_CONFIG.mainLink} target="_blank" rel="noopener noreferrer nofollow">
                            {AFFILIATE_CONFIG.ctaText} <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                      <p className="text-muted-foreground mb-4">{product.description}</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-green-700 dark:text-green-400 mb-2">Pontos Positivos</h4>
                          <ul className="space-y-1">
                            {product.pros.map((pro, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                <span>{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-red-700 dark:text-red-400 mb-2">Pontos de Atenção</h4>
                          <ul className="space-y-1">
                            {product.cons.map((con, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <X className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                                <span>{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {guide.productsUS.length > 0 && (
              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  🇺🇸 Marcas Internacionais (EUA)
                </h2>
                <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 mb-4">
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    <strong>Nota sobre importação:</strong> Produtos internacionais podem ser importados 
                    via sites como iHerb ou Amazon. Atenção às taxas de importação e limite de US$50 para isenção.
                  </p>
                </div>
                <div className="space-y-6">
                  {guide.productsUS.map((product, index) => (
                    <div key={index} className="p-6 rounded-xl bg-card border border-border">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-display text-xl font-semibold text-foreground">
                            {product.name}
                          </h3>
                          <p className="text-muted-foreground">{product.brand}</p>
                        </div>
                        <Button variant="gold" size="sm" className="gap-2" asChild>
                          <a href={AFFILIATE_CONFIG.mainLink} target="_blank" rel="noopener noreferrer nofollow">
                            {AFFILIATE_CONFIG.ctaText} <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                      <p className="text-muted-foreground mb-4">{product.description}</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-green-700 dark:text-green-400 mb-2">Pontos Positivos</h4>
                          <ul className="space-y-1">
                            {product.pros.map((pro, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                <span>{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-red-700 dark:text-red-400 mb-2">Pontos de Atenção</h4>
                          <ul className="space-y-1">
                            {product.cons.map((con, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <X className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                                <span>{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section className="mb-8 p-6 rounded-xl bg-muted/50 border border-border">
              <h2 className="font-display text-xl font-bold text-foreground mb-3">Conclusão</h2>
              <p className="text-muted-foreground">{guide.conclusion}</p>
            </section>

            {guide.relatedPlants.length > 0 && (
              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Plantas Relacionadas
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {guide.relatedPlants.map(plantSlug => {
                    const plant = getPlantBySlug(plantSlug);
                    return plant ? (
                      <RelatedLinkCard
                        key={plantSlug}
                        to={`/plantas-medicinais/${plantSlug}`}
                        title={plant.name}
                        description={`Saiba tudo sobre ${plant.name.toLowerCase()}`}
                      />
                    ) : null;
                  })}
                </div>
              </section>
            )}

            <CombinedDisclaimer />
          </article>

          <aside className="lg:col-span-1">
            <SiloNavigation
              pillarTitle="Guias de Compra"
              pillarHref="/guias"
              currentPage={`/guias/${slug}`}
              relatedPages={relatedPages}
            />
          </aside>
        </div>
      </div>
    </Layout>
  );
};

export default GuideDetail;
