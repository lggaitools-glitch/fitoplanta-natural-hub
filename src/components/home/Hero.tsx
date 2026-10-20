import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, Shield, FlaskConical, BookOpen } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="botanical-hero relative overflow-hidden flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-foreground animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-sm mb-6">
              <BookOpen className="w-4 h-4" />
              <span>Portal de Conteúdo sobre Fitoterapia</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight mb-6">
              Fitoterapia, Ciência e{' '}
              <span className="text-muted-foreground italic">
                Saúde Natural
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-foreground/80 mb-8 max-w-xl leading-relaxed">
              Informação confiável para quem busca alternativas naturais com segurança. 
              Conteúdo educativo baseado em evidências científicas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" variant="default" asChild className="group">
                <Link to="/artigos">
                  Explorar Artigos
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="ghost" asChild className="text-foreground hover:bg-primary/10">
                <Link to="/produtos">
                  Produtos Recomendados
                </Link>
              </Button>
            </div>

            {/* Quick Access Links for SEO */}
            <div className="flex flex-wrap gap-3 mb-8">
              <Link to="/fitoterapia" className="text-sm text-foreground/70 hover:text-foreground underline underline-offset-2">
                O que é Fitoterapia?
              </Link>
              <span className="text-foreground/40">•</span>
              <Link to="/plantas-medicinais" className="text-sm text-foreground/70 hover:text-foreground underline underline-offset-2">
                Plantas Medicinais
              </Link>
              <span className="text-foreground/40">•</span>
              <Link to="/guias" className="text-sm text-foreground/70 hover:text-foreground underline underline-offset-2">
                Guias de Compra
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-foreground/80">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <span className="text-sm">Conteúdo Verificado</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/80">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <FlaskConical className="w-5 h-5" />
                </div>
                <span className="text-sm">Base Científica</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/80">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Leaf className="w-5 h-5" />
                </div>
                <span className="text-sm">100% Natural</span>
              </div>
            </div>
          </div>

          {/* Botanical illustration cropped directly from the supplied logo. */}
          <div className="mx-auto w-full max-w-md">
            <div className="botanical-art">
              <img src="/brand/brand-emblem.webp" alt="Planta medicinal com raízes acolhida por mãos" width="640" height="654" />
            </div>
            <p className="botanical-caption">Fitoterapia Clínica · Cuidado Natural</p>
          </div>
        </div>
      </div>
    </section>
  );
};
