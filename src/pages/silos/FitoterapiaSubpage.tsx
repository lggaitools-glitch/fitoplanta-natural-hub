import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { RelatedLinkCard, SiloNavigation } from '@/components/navigation/InternalLinks';
import { CombinedDisclaimer } from '@/components/content/Disclaimers';
import { getFitoterapiaSubpageBySlug, fitoterapiaSubpages } from '@/data/fitoterapia';
import { getPlantBySlug } from '@/data/plants';
import { getGuideBySlug } from '@/data/guides';
import NotFound from '@/pages/NotFound';

const FitoterapiaSubpage = () => {
  const { slug } = useParams<{ slug: string }>();
  const subpage = getFitoterapiaSubpageBySlug(slug || '');

  if (!subpage) {
    return <NotFound />;
  }

  const relatedPages = fitoterapiaSubpages
    .filter(s => s.slug !== slug)
    .map(s => ({ title: s.title, href: `/fitoterapia/${s.slug}` }));

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: 'Fitoterapia', href: '/fitoterapia' },
            { label: subpage.title }
          ]}
        />

        <div className="grid lg:grid-cols-4 gap-8">
          <article className="lg:col-span-3">
            <header className="mb-8">
              <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
                {subpage.title}
              </h1>
              <p className="text-xl text-muted-foreground">{subpage.description}</p>
            </header>

            <div className="prose prose-lg max-w-none">
              {subpage.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return <h2 key={index}>{paragraph.replace('## ', '')}</h2>;
                }
                if (paragraph.startsWith('### ')) {
                  return <h3 key={index}>{paragraph.replace('### ', '')}</h3>;
                }
                return <p key={index}>{paragraph}</p>;
              })}
            </div>

            {(subpage.relatedPlants.length > 0 || subpage.relatedGuides.length > 0) && (
              <section className="mt-12">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Conteúdo Relacionado
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {subpage.relatedPlants.map(plantSlug => {
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
                  {subpage.relatedGuides.map(guideSlug => {
                    const guide = getGuideBySlug(guideSlug);
                    return guide ? (
                      <RelatedLinkCard
                        key={guideSlug}
                        to={`/guias/${guideSlug}`}
                        title={guide.title}
                        description={guide.subtitle}
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
              pillarTitle="Fitoterapia"
              pillarHref="/fitoterapia"
              currentPage={`/fitoterapia/${slug}`}
              relatedPages={relatedPages}
            />
          </aside>
        </div>
      </div>
    </Layout>
  );
};

export default FitoterapiaSubpage;
