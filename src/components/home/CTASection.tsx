import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-leaf-pattern opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-primary-foreground animate-fade-up">
          <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Leaf className="w-8 h-8" />
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Comece Sua Jornada de Bem-Estar Hoje
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Descubra como a fitoterapia premium pode transformar sua saúde. Produtos naturais, ciência comprovada, resultados reais.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="heroOutline" asChild className="group">
              <Link to="/produtos">
                Explorar Produtos
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="xl" variant="ghost" asChild className="text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/contato">
                Fale Conosco
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
