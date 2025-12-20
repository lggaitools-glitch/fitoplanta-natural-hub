import { Layout } from '@/components/layout/Layout';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { RelatedLinkCard } from '@/components/navigation/InternalLinks';
import { CombinedDisclaimer } from '@/components/content/Disclaimers';
import { fitoterapiaSubpages } from '@/data/fitoterapia';
import { Leaf, BookOpen, Shield, FlaskConical } from 'lucide-react';

const FitoterapiaPillar = () => {
  const features = [
    { icon: Leaf, title: 'Natural', description: 'Tratamentos derivados de plantas medicinais' },
    { icon: BookOpen, title: 'Baseado em Evidências', description: 'Respaldado por estudos científicos' },
    { icon: Shield, title: 'Seguro', description: 'Menos efeitos colaterais quando usado corretamente' },
    { icon: FlaskConical, title: 'Regulamentado', description: 'Aprovado pela ANVISA no Brasil' },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'Fitoterapia' }]} />

        <header className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Fitoterapia
          </h1>
          <p className="text-xl text-muted-foreground">
            O guia completo sobre o uso de plantas medicinais para saúde e bem-estar, 
            baseado em ciência e tradição.
          </p>
        </header>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl bg-card border border-border text-center">
              <feature.icon className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <section className="prose prose-lg max-w-none mb-12">
          <h2>O Que é Fitoterapia?</h2>
          <p>
            A fitoterapia é a ciência que estuda e aplica o uso de plantas medicinais no tratamento 
            e prevenção de doenças. Reconhecida pela Organização Mundial da Saúde (OMS) e regulamentada 
            no Brasil pela ANVISA, representa uma alternativa natural e eficaz para diversos problemas de saúde.
          </p>

          <h2>Como Funciona?</h2>
          <p>
            As plantas medicinais contêm compostos bioativos que interagem com nosso organismo de forma 
            similar aos medicamentos sintéticos, mas geralmente com menos efeitos colaterais. A chave está 
            na escolha de produtos de qualidade e no uso correto.
          </p>

          <h2>Segurança e Eficácia</h2>
          <p>
            Embora naturais, fitoterápicos devem ser usados com responsabilidade. É importante escolher 
            marcas confiáveis, respeitar dosagens e, quando necessário, consultar um profissional de saúde.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">
            Explore Este Tema
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {fitoterapiaSubpages.map((subpage) => (
              <RelatedLinkCard
                key={subpage.slug}
                to={`/fitoterapia/${subpage.slug}`}
                title={subpage.title}
                description={subpage.description}
              />
            ))}
          </div>
        </section>

        <CombinedDisclaimer />
      </div>
    </Layout>
  );
};

export default FitoterapiaPillar;
