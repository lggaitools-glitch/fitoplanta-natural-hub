import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { RelatedLinkCard, SiloNavigation } from '@/components/navigation/InternalLinks';
import { CombinedDisclaimer } from '@/components/content/Disclaimers';
import { getPlantBySlug } from '@/data/plants';
import NotFound from '@/pages/NotFound';
import { Button } from '@/components/ui/button';
import { AFFILIATE_CONFIG } from '@/config/affiliate';
import { ExternalLink } from 'lucide-react';

const PlantSubpage = () => {
  const { slug, subSlug } = useParams<{ slug: string; subSlug: string }>();
  const plant = getPlantBySlug(slug || '');

  if (!plant) {
    return <NotFound />;
  }

  const subpage = plant.subpages.find(s => s.slug === subSlug);

  if (!subpage) {
    return <NotFound />;
  }

  const relatedPages = plant.subpages.map(s => ({
    title: s.title,
    href: `/plantas-medicinais/${slug}/${s.slug}`
  }));

  const getSubpageContent = () => {
    switch (subSlug) {
      case 'beneficios':
        return (
          <>
            <h2>Benefícios Comprovados</h2>
            <ul className="space-y-3 my-6">
              {plant.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 p-3 rounded-lg bg-green-50 dark:bg-green-950/30">
                  <span className="text-green-600">✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <p>
              Estes benefícios são apoiados por estudos científicos e uso tradicional documentado. 
              A eficácia pode variar de pessoa para pessoa, e é sempre recomendado consultar um 
              profissional de saúde antes de iniciar qualquer suplementação.
            </p>
          </>
        );
      case 'como-usar':
        return (
          <>
            <h2>Formas de Uso</h2>
            <p>
              A {plant.name.toLowerCase()} pode ser utilizada de diversas formas, sendo as mais comuns:
            </p>
            <ul className="my-6 space-y-2">
              <li><strong>Cápsulas:</strong> Forma mais prática e com dosagem precisa</li>
              <li><strong>Chá/Infusão:</strong> Método tradicional, ideal para uso esporádico</li>
              <li><strong>Extrato líquido:</strong> Alta concentração, absorção rápida</li>
              <li><strong>Tintura:</strong> Versão alcoólica concentrada</li>
            </ul>
            <h3>Dosagem Recomendada</h3>
            <p>
              A dosagem varia conforme a forma de apresentação e concentração do produto. 
              Sempre siga as instruções do fabricante e, se possível, consulte um fitoterapeuta.
            </p>
            <h3>Melhor Horário</h3>
            <p>
              Para {plant.name.toLowerCase()}, o melhor horário depende do objetivo de uso. 
              Consulte a embalagem do produto para orientações específicas.
            </p>
          </>
        );
      case 'efeitos-colaterais':
        return (
          <>
            <h2>Possíveis Efeitos Colaterais</h2>
            <p>
              Embora geralmente segura quando usada corretamente, a {plant.name.toLowerCase()} pode 
              causar alguns efeitos adversos em certas pessoas:
            </p>
            <ul className="my-6 space-y-3">
              {plant.sideEffects.map((effect, index) => (
                <li key={index} className="flex items-start gap-3 p-3 rounded-lg bg-amber-50 dark:bg-amber-950/30">
                  <span className="text-amber-600">⚠</span>
                  <span>{effect}</span>
                </li>
              ))}
            </ul>
            <h3>Contraindicações</h3>
            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 my-6">
              <p className="font-medium text-red-800 dark:text-red-200 mb-2">Não use se você:</p>
              <ul className="space-y-1">
                {plant.contraindications.map((item, index) => (
                  <li key={index} className="text-red-700 dark:text-red-300">• {item}</li>
                ))}
              </ul>
            </div>
          </>
        );
      case 'melhores-marcas':
        return (
          <>
            <h2>Como Escolher a Melhor Marca</h2>
            <p>
              Ao escolher um produto de {plant.name.toLowerCase()}, considere os seguintes critérios:
            </p>
            <ul className="my-6 space-y-2">
              <li><strong>Padronização:</strong> Verifique se o extrato é padronizado nos compostos ativos</li>
              <li><strong>Certificações:</strong> Procure selos de qualidade e registro na ANVISA</li>
              <li><strong>Reputação:</strong> Prefira marcas estabelecidas no mercado</li>
              <li><strong>Transparência:</strong> Boas marcas divulgam testes de qualidade</li>
            </ul>
            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20 my-6">
              <p className="text-sm">
                📚 Para uma análise detalhada das melhores marcas, consulte nosso{' '}
                <Link to="/guias" className="text-primary underline">Guia de Compra</Link>.
              </p>
            </div>
          </>
        );
      default:
        return <p>Conteúdo não encontrado.</p>;
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: 'Plantas Medicinais', href: '/plantas-medicinais' },
            { label: plant.name, href: `/plantas-medicinais/${slug}` },
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

            <div className="prose prose-lg max-w-none">
              {getSubpageContent()}
            </div>

            <section className="mt-12">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Mais Sobre {plant.name}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {plant.subpages
                  .filter(s => s.slug !== subSlug)
                  .map((s) => (
                    <RelatedLinkCard
                      key={s.slug}
                      to={`/plantas-medicinais/${slug}/${s.slug}`}
                      title={s.title}
                    />
                  ))}
              </div>
            </section>

            <CombinedDisclaimer />
          </article>

          <aside className="lg:col-span-1">
            <SiloNavigation
              pillarTitle={plant.name}
              pillarHref={`/plantas-medicinais/${slug}`}
              currentPage={`/plantas-medicinais/${slug}/${subSlug}`}
              relatedPages={relatedPages}
            />
          </aside>
        </div>
      </div>
    </Layout>
  );
};

export default PlantSubpage;
