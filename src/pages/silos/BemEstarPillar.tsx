import { Layout } from '@/components/layout/Layout';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { RelatedLinkCard } from '@/components/navigation/InternalLinks';
import { CombinedDisclaimer } from '@/components/content/Disclaimers';
import { wellnessTopics } from '@/data/wellness';
import { Heart } from 'lucide-react';
import SEOHead from '@/components/seo/SEOHead';

const BemEstarPillar = () => {
  return (
    <Layout>
      <SEOHead
        title="Bem-estar Natural - Sono, Energia e Imunidade"
        description="Descubra como melhorar sua qualidade de vida com abordagens naturais para sono, energia, imunidade e gestão do estresse."
      />
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'Bem-estar' }]} />

        <header className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Bem-estar Natural
          </h1>
          <p className="text-xl text-muted-foreground">
            Descubra como melhorar sua qualidade de vida com abordagens naturais para sono, 
            energia, imunidade e gestão do estresse.
          </p>
        </header>

        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            {wellnessTopics.map((topic) => (
              <div key={topic.slug} className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="w-8 h-8 text-primary" />
                  <h3 className="font-display text-xl font-semibold text-foreground">{topic.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{topic.description}</p>
                <RelatedLinkCard to={`/bem-estar/${topic.slug}`} title="Saiba mais" />
              </div>
            ))}
          </div>
        </section>

        <CombinedDisclaimer />
      </div>
    </Layout>
  );
};

export default BemEstarPillar;
