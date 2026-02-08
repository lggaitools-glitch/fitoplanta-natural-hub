import { Layout } from '@/components/layout/Layout';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { RelatedLinkCard } from '@/components/navigation/InternalLinks';
import { CombinedDisclaimer } from '@/components/content/Disclaimers';
import { plants } from '@/data/plants';
import { Sprout } from 'lucide-react';
import SEOHead from '@/components/seo/SEOHead';

const PlantasMedicinaisPillar = () => {
  return (
    <Layout>
      <SEOHead
        title="Plantas Medicinais - Guia Completo"
        description="Conheça as principais plantas medicinais, seus benefícios comprovados e como utilizá-las com segurança. Valeriana, equinácea, guaraná e mais."
      />
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'Plantas Medicinais' }]} />

        <header className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Plantas Medicinais
          </h1>
          <p className="text-xl text-muted-foreground">
            Conheça as principais plantas medicinais, seus benefícios comprovados e como utilizá-las com segurança.
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-12">
          <h2>O Poder das Plantas Medicinais</h2>
          <p>
            Há milhares de anos, a humanidade utiliza plantas para tratar doenças e promover bem-estar. 
            Hoje, a ciência moderna valida muitos desses usos tradicionais, identificando os compostos 
            responsáveis pelos efeitos terapêuticos.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">
            Plantas em Destaque
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plants.map((plant) => (
              <div key={plant.slug} className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Sprout className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">{plant.name}</h3>
                    <p className="text-sm text-muted-foreground italic">{plant.scientificName}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{plant.description}</p>
                <RelatedLinkCard
                  to={`/plantas-medicinais/${plant.slug}`}
                  title={`Ver tudo sobre ${plant.name}`}
                />
              </div>
            ))}
          </div>
        </section>

        <CombinedDisclaimer />
      </div>
    </Layout>
  );
};

export default PlantasMedicinaisPillar;
