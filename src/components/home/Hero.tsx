import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, Shield, FlaskConical } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero min-h-[90vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-leaf-pattern opacity-30" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-sm mb-6">
              <Leaf className="w-4 h-4" />
              <span>Produtos 100% Naturais e Certificados</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Saúde Natural com{' '}
              <span className="text-gradient-gold bg-clip-text text-transparent bg-gradient-to-r from-gold to-gold-light">
                Ciência e Eficácia
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8 max-w-xl leading-relaxed">
              Descubra o poder da fitoterapia premium. Produtos naturais desenvolvidos com rigor científico para transformar sua saúde e bem-estar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="xl" variant="heroOutline" asChild className="group">
                <Link to="/produtos">
                  Conheça Nossos Produtos
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="xl" variant="ghost" asChild className="text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/sobre">
                  Sobre a FitoPlantaMed
                </Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <span className="text-sm">Qualidade Premium</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <FlaskConical className="w-5 h-5" />
                </div>
                <span className="text-sm">Base Científica</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <Leaf className="w-5 h-5" />
                </div>
                <span className="text-sm">100% Natural</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block animate-fade-up delay-200">
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-accent/20 rounded-full blur-2xl" />
              <img
                src="/hero-plants.jpg"
                alt="Plantas medicinais premium"
                className="relative z-10 w-full h-full object-cover rounded-3xl shadow-elevated"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-2xl shadow-card z-20 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-soft rounded-full flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Satisfação</p>
                    <p className="font-display font-semibold text-primary">98% dos clientes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
