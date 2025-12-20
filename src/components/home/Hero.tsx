import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, Shield, FlaskConical, BookOpen } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero min-h-[80vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-leaf-pattern opacity-30" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl animate-fade-up">
          {/* Content */}
          <div className="text-primary-foreground">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-sm mb-6">
              <BookOpen className="w-4 h-4" />
              <span>Portal de Conteúdo sobre Fitoterapia</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Fitoterapia, Ciência e{' '}
              <span className="text-gradient-gold bg-clip-text text-transparent bg-gradient-to-r from-gold to-gold-light">
                Saúde Natural
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8 max-w-xl leading-relaxed">
              Informação confiável para quem busca alternativas naturais com segurança. 
              Conteúdo educativo baseado em evidências científicas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="xl" variant="heroOutline" asChild className="group">
                <Link to="/artigos">
                  Explorar Artigos
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="xl" variant="ghost" asChild className="text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/produtos">
                  Produtos Recomendados
                </Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <span className="text-sm">Conteúdo Verificado</span>
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
        </div>
      </div>
    </section>
  );
};
