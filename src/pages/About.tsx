import { Layout } from '@/components/layout/Layout';
import { ConsultationBooking } from '@/components/contact/ConsultationBooking';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  User, 
  GraduationCap, 
  Award, 
  BookOpen, 
  Briefcase, 
  Shield, 
  Heart,
  CheckCircle,
  Microscope,
  Leaf,
  Building2,
  FileCheck,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import PersonSchema from '@/components/seo/PersonSchema';
import SEOHead from '@/components/seo/SEOHead';

const About = () => {
  const scrollToForm = () => {
    const contactSection = document.getElementById('consulta-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      <SEOHead
        title="Sobre Marta Leni - Farmacêutica Clínica Especialista em Fitoterapia"
        description="Conheça Marta Leni, Farmacêutica Clínica com mais de 20 anos de experiência em fitoterapia e práticas integrativas. CRF-SP 93119."
      />
      <PersonSchema />
      
      {/* Hero Section - Apresentação */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary via-primary/95 to-green-800 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo Placeholder */}
            <div className="flex justify-center lg:order-2 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <div className="absolute inset-0 bg-gold/20 rounded-full blur-2xl scale-110" />
                <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-primary-foreground/10 backdrop-blur-sm border-4 border-gold/30 flex items-center justify-center overflow-hidden">
                  {/* Placeholder - será substituído pela foto */}
                  <User className="w-32 h-32 lg:w-40 lg:h-40 text-primary-foreground/40" />
                </div>
                {/* Badge flutuante */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gold text-primary px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  CRF-SP 93119
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="text-primary-foreground lg:order-1 animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-sm mb-6">
                <Sparkles className="w-4 h-4 text-gold" />
                <span>Especialista em Fitoterapia Clínica</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
                Marta Leni
              </h1>
              
              <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium mb-4">
                Farmacêutica Clínica | Fitoterapia Baseada em Evidências
              </p>
              
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl">
                Profissional da área da saúde com formação sólida e atuação prática em fitoterapia clínica, 
                dedicada à promoção do uso seguro e responsável de plantas medicinais e terapias integrativas.
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 bg-gold/20 rounded-full text-sm">
                  <Award className="w-4 h-4 text-gold" />
                  <span>20+ Anos de Experiência</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full text-sm">
                  <Microscope className="w-4 h-4" />
                  <span>Baseada em Evidências</span>
                </div>
              </div>

              {/* Placeholder para redes sociais */}
              <div className="flex items-center gap-4">
                <Button 
                  variant="gold" 
                  size="lg"
                  onClick={scrollToForm}
                >
                  Agendar Consulta
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                {/* Redes sociais serão adicionadas aqui */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formação Acadêmica */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm text-primary mb-4">
              <GraduationCap className="w-4 h-4" />
              <span>Credenciais</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Formação Acadêmica
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: GraduationCap,
                title: "Graduação em Farmácia",
                description: "Universidade Anhanguera",
                color: "bg-primary"
              },
              {
                icon: Microscope,
                title: "Farmacêutico-Bioquímico",
                description: "Habilitação em Análises Clínicas e Toxicológicas",
                color: "bg-green-600"
              },
              {
                icon: Leaf,
                title: "Fitoterapia Clínica",
                description: "Formação em Fitoterapia Clínica e Prescrição de Fitoterápicos",
                color: "bg-gold"
              },
              {
                icon: Heart,
                title: "Práticas Integrativas",
                description: "Capacitações em Práticas Integrativas e Complementares (PICS)",
                color: "bg-accent"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Especializações */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full text-sm text-gold mb-4">
              <Award className="w-4 h-4" />
              <span>Expertise</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Áreas de Especialização
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Formação contínua em instituições reconhecidas como FIOCRUZ, IBPM, Racine e outras entidades de referência.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Leaf,
                title: "Fitoterapia Clínica",
                description: "Baseada em evidências científicas"
              },
              {
                icon: Microscope,
                title: "Plantas Medicinais",
                description: "Uso racional e seguro"
              },
              {
                icon: Heart,
                title: "Terapias Integrativas",
                description: "Práticas complementares em saúde"
              },
              {
                icon: BookOpen,
                title: "Farmacognosia",
                description: "Princípios ativos vegetais"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center hover:border-gold/50 hover:shadow-lg transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiência Acadêmica */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full text-sm mb-6">
                <BookOpen className="w-4 h-4" />
                <span>Autoridade</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Experiência Acadêmica
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Atuação como docente, palestrante e facilitadora em cursos e eventos voltados à formação 
                de profissionais de saúde na área de fitoterapia e práticas integrativas.
              </p>
              
              <div className="space-y-4">
                {[
                  "Docência em cursos de formação em fitoterapia",
                  "Palestras e workshops em eventos de saúde",
                  "Facilitadora de capacitações em PICS"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-primary-foreground/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-6">Temas Abordados</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: FileCheck, text: "Prescrição responsável de fitoterápicos" },
                    { icon: Microscope, text: "Farmacognosia aplicada" },
                    { icon: Leaf, text: "Farmácia Viva e políticas públicas" },
                    { icon: Heart, text: "Práticas integrativas no SUS" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-primary-foreground/5 rounded-lg">
                      <item.icon className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-primary-foreground/90">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiência Profissional */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm text-primary mb-4">
              <Briefcase className="w-4 h-4" />
              <span>Trajetória</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Experiência Profissional
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Farmácia de Manipulação */}
            <div className="bg-card border border-border rounded-2xl p-8 animate-fade-up">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Farmácia de Manipulação
              </h3>
              <ul className="space-y-3">
                {[
                  "Experiência em desenvolvimento de formulações magistrais",
                  "Orientação farmacêutica especializada",
                  "Manipulação de fitoterápicos personalizados",
                  "Controle de qualidade de matérias-primas vegetais"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trabalho Voluntário */}
            <div className="bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/30 rounded-2xl p-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Compromisso Social
              </h3>
              <div className="bg-gold/10 rounded-xl p-4 mb-4">
                <p className="text-2xl font-bold text-gold">20+ Anos</p>
                <p className="text-foreground font-medium">de Trabalho Voluntário em Saúde</p>
              </div>
              <ul className="space-y-3">
                {[
                  "Atendimento individualizado em terapias integrativas",
                  "Educação em saúde para comunidades",
                  "Promoção do acesso a informação de qualidade"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Compromisso Ético */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-600/10 rounded-full text-sm text-green-600 mb-4">
              <Shield className="w-4 h-4" />
              <span>Confiança</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Compromisso Ético e Segurança
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Atuação alinhada aos mais altos padrões de ética profissional e segurança em saúde.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Shield,
                title: "CRF-SP 93119",
                description: "Registro profissional ativo"
              },
              {
                icon: FileCheck,
                title: "Ministério da Saúde",
                description: "Diretrizes oficiais"
              },
              {
                icon: Microscope,
                title: "Evidências Científicas",
                description: "Conteúdo baseado em pesquisa"
              },
              {
                icon: Heart,
                title: "Ética Profissional",
                description: "Segurança e individualização"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-green-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Agendar Consulta */}
      <section id="consulta-section" className="scroll-mt-20">
        <ConsultationBooking onFormClick={() => {
          window.location.href = '/contato?assunto=consulta';
        }} />
      </section>

      {/* Explorar Conteúdo */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
            Explore o Conteúdo do FitoPlantaMed
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Artigos, guias e informações sobre fitoterapia e plantas medicinais, 
            desenvolvidos com rigor científico e linguagem acessível.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="default" size="lg" asChild>
              <Link to="/artigos">
                <BookOpen className="w-4 h-4 mr-2" />
                Ver Artigos
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/plantas-medicinais">
                <Leaf className="w-4 h-4 mr-2" />
                Plantas Medicinais
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* YMYL Disclaimer */}
      <section className="py-8 bg-muted/50 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <Shield className="w-4 h-4" />
              <span className="font-medium">Informação em Saúde Baseada em Evidências</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Os conteúdos apresentados são desenvolvidos por profissional qualificada da área da saúde, 
              com formação acadêmica comprovada e experiência prática em fitoterapia clínica. 
              As informações seguem critérios de qualidade, segurança e responsabilidade. 
              Toda informação disponibilizada neste site tem caráter educativo, não substituindo 
              avaliação profissional individualizada quando necessária.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
