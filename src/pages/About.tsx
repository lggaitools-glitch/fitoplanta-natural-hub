import { Layout } from '@/components/layout/Layout';
import { Leaf, Target, Eye, Heart, Award, Users, Globe } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-primary-foreground animate-fade-up">
            <div className="flex items-center gap-2 text-accent mb-4">
              <Leaf className="w-5 h-5" />
              <span className="text-sm font-medium">Nossa História</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              Sobre a FitoPlantaMed
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Conheça nossa jornada de compromisso com a saúde natural e descubra por que somos referência em fitoterápicos premium.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Nossa História
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A FitoPlantaMed nasceu da paixão por unir o conhecimento ancestral das plantas medicinais com a ciência moderna. Fundada por profissionais de saúde e pesquisadores, nossa empresa surgiu da necessidade de oferecer ao mercado brasileiro produtos fitoterápicos de qualidade verdadeiramente premium.
                </p>
                <p>
                  Desde o início, nossa missão foi clara: democratizar o acesso à fitoterapia de qualidade, sem comprometer a eficácia ou a segurança. Cada produto é resultado de extensiva pesquisa, desenvolvido com extratos padronizados que garantem a concentração exata de princípios ativos.
                </p>
                <p>
                  Hoje, a FitoPlantaMed é reconhecida pela excelência de seus produtos e pelo compromisso inabalável com a saúde e o bem-estar de nossos clientes.
                </p>
              </div>
            </div>
            <div className="animate-fade-up delay-100">
              <div className="aspect-[4/3] rounded-2xl bg-green-soft overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <Leaf className="w-32 h-32 text-primary/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-cream-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Nossos Pilares
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-card animate-fade-up">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Missão
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Oferecer produtos naturais com eficácia e segurança comprovadas, promovendo saúde e bem-estar através da fitoterapia baseada em evidências científicas rigorosas.
              </p>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-card animate-fade-up delay-100">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Visão
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Tornar-se referência internacional no mercado de fitoterápicos e produtos naturais, sendo reconhecida pela excelência, inovação e compromisso com a qualidade.
              </p>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-card animate-fade-up delay-200">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Valores
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Qualidade, segurança, transparência, ciência e compromisso genuíno com o bem-estar de nossos clientes e a preservação do meio ambiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Nossos Diferenciais
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              O que nos torna únicos no mercado de fitoterápicos
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center animate-fade-up">
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">Extratos Padronizados</h3>
              <p className="text-primary-foreground/70 text-sm">
                Concentração garantida de princípios ativos em cada lote
              </p>
            </div>
            <div className="text-center animate-fade-up delay-100">
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">Equipe Especializada</h3>
              <p className="text-primary-foreground/70 text-sm">
                Farmacêuticos e nutricionistas em nosso time
              </p>
            </div>
            <div className="text-center animate-fade-up delay-200">
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">Fornecedores Globais</h3>
              <p className="text-primary-foreground/70 text-sm">
                Ingredientes dos melhores produtores do mundo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Faça Parte da Nossa História
            </h2>
            <p className="text-muted-foreground mb-8">
              Milhares de pessoas já transformaram sua saúde com nossos produtos. Que tal começar sua jornada de bem-estar hoje?
            </p>
            <a
              href="/produtos"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Conhecer Produtos
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
