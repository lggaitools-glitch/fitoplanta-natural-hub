import { Layout } from '@/components/layout/Layout';
import { Leaf, Target, Eye, Heart, BookOpen, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-primary-foreground animate-fade-up">
            <div className="flex items-center gap-2 text-accent mb-4">
              <Leaf className="w-5 h-5" />
              <span className="text-sm font-medium">Quem Somos</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              Sobre a FitoPlantaMed
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Um portal dedicado a oferecer informação confiável e baseada em evidências sobre fitoterapia e saúde natural.
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
                  A FitoPlantaMed nasceu da necessidade de criar um espaço onde pessoas interessadas em saúde natural pudessem encontrar informação de qualidade, baseada em ciência — não em promessas milagrosas ou marketing agressivo.
                </p>
                <p>
                  Somos um time de profissionais de saúde, pesquisadores e entusiastas da fitoterapia que acredita no poder das plantas medicinais, mas também no rigor científico. Não defendemos que "natural é sempre melhor" — defendemos que informação bem embasada permite melhores escolhas.
                </p>
                <p>
                  Nosso compromisso é ser transparentes: quando há evidências fortes, dizemos. Quando há limitações, também. Nosso objetivo é empoderar você a tomar decisões informadas sobre sua saúde.
                </p>
              </div>
            </div>
            <div className="animate-fade-up delay-100">
              <div className="aspect-[4/3] rounded-2xl bg-green-soft overflow-hidden flex items-center justify-center">
                <BookOpen className="w-32 h-32 text-primary/30" />
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
                Oferecer informação confiável sobre fitoterapia e produtos naturais, com foco em eficácia, segurança e evidências científicas — sem promessas milagrosas.
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
                Tornar-se referência em conteúdo educativo sobre fitoterápicos e saúde natural no Brasil e no mundo lusófono.
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
                Transparência, rigor científico, honestidade editorial, respeito ao leitor e compromisso genuíno com a saúde.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              O Que Fazemos
            </h2>
            <p className="text-muted-foreground">
              Conteúdo educativo e recomendações baseadas em critérios rigorosos
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4 animate-fade-up">
              <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  Artigos Educativos
                </h3>
                <p className="text-muted-foreground text-sm">
                  Conteúdo aprofundado sobre plantas medicinais, fitoterápicos e suplementos naturais, sempre com referências científicas.
                </p>
              </div>
            </div>
            <div className="flex gap-4 animate-fade-up delay-100">
              <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  Análises de Produtos
                </h3>
                <p className="text-muted-foreground text-sm">
                  Reviews imparciais com pontos positivos e negativos, para que você tome decisões informadas.
                </p>
              </div>
            </div>
            <div className="flex gap-4 animate-fade-up delay-200">
              <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  Guias Práticos
                </h3>
                <p className="text-muted-foreground text-sm">
                  Orientações sobre como escolher, usar e avaliar a qualidade de produtos naturais.
                </p>
              </div>
            </div>
            <div className="flex gap-4 animate-fade-up delay-300">
              <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Leaf className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  Transparência Total
                </h3>
                <p className="text-muted-foreground text-sm">
                  Disclosure claro sobre monetização por afiliados e nossos critérios editoriais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-4">
              Conheça Nosso Conteúdo
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Explore nossos artigos e guias para aprender mais sobre fitoterapia e saúde natural.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/artigos"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors"
              >
                Explorar Artigos
              </Link>
              <Link
                to="/transparencia"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground/10 text-primary-foreground rounded-lg font-medium hover:bg-primary-foreground/20 transition-colors"
              >
                Nossa Política de Transparência
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
