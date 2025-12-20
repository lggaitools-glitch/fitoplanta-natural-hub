import { useParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { RelatedLinkCard, SiloNavigation } from '@/components/navigation/InternalLinks';
import { CombinedDisclaimer } from '@/components/content/Disclaimers';
import { getWellnessTopicBySlug, wellnessTopics } from '@/data/wellness';
import { getPlantBySlug } from '@/data/plants';
import { getGuideBySlug } from '@/data/guides';
import { Lightbulb } from 'lucide-react';
import NotFound from '@/pages/NotFound';

const WellnessDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const topic = getWellnessTopicBySlug(slug || '');

  if (!topic) {
    return <NotFound />;
  }

  const relatedPages = wellnessTopics
    .filter(t => t.slug !== slug)
    .map(t => ({ title: t.title, href: `/bem-estar/${t.slug}` }));

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: 'Bem-estar', href: '/bem-estar' },
            { label: topic.title }
          ]}
        />

        <div className="grid lg:grid-cols-4 gap-8">
          <article className="lg:col-span-3">
            <header className="mb-8">
              <span className="text-sm font-medium text-accent uppercase tracking-wide">
                {topic.subtitle}
              </span>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
                {topic.title}
              </h1>
              <p className="text-xl text-muted-foreground">{topic.description}</p>
            </header>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="lead">{topic.introduction}</p>
              {topic.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return <h2 key={index}>{paragraph.replace('## ', '')}</h2>;
                }
                if (paragraph.startsWith('### ')) {
                  return <h3 key={index}>{paragraph.replace('### ', '')}</h3>;
                }
                return <p key={index}>{paragraph}</p>;
              })}
            </div>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-accent" />
                Dicas Práticas
              </h2>
              <ul className="space-y-3">
                {topic.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3 p-4 rounded-lg bg-accent/10 border border-accent/20">
                    <span className="text-accent font-bold">{index + 1}.</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </section>

            {topic.recommendedPlants.length > 0 && (
              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Plantas Recomendadas
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {topic.recommendedPlants.map(plantSlug => {
                    const plant = getPlantBySlug(plantSlug);
                    return plant ? (
                      <RelatedLinkCard
                        key={plantSlug}
                        to={`/plantas-medicinais/${plantSlug}`}
                        title={plant.name}
                        description={`Benefícios da ${plant.name.toLowerCase()} para ${topic.title.toLowerCase()}`}
                      />
                    ) : null;
                  })}
                </div>
              </section>
            )}

            {topic.recommendedGuides.length > 0 && (
              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Guias Relacionados
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {topic.recommendedGuides.map(guideSlug => {
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
              pillarTitle="Bem-estar"
              pillarHref="/bem-estar"
              currentPage={`/bem-estar/${slug}`}
              relatedPages={relatedPages}
            />
          </aside>
        </div>
      </div>
    </Layout>
  );
};

export default WellnessDetail;
