import { Link } from 'react-router-dom';
import { CheckCircle, Shield, ArrowRight } from 'lucide-react';

export const HowWeChooseSection = () => {
  const criteria = [
    "Evidências científicas e estudos clínicos",
    "Qualidade dos ingredientes (extratos padronizados)",
    "Reputação e certificações da marca",
    "Custo-benefício e acessibilidade",
    "Feedback real de usuários"
  ];

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="flex items-center gap-2 text-accent mb-4">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">Nosso Compromisso</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              Como Escolhemos os Produtos que Recomendamos
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed mb-8">
              Nossa equipe analisa dezenas de produtos antes de recomendar. 
              Priorizamos ciência, qualidade e transparência. Sem promessas milagrosas — 
              apenas informação honesta baseada em evidências.
            </p>
            <Link
              to="/transparencia"
              className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
            >
              Conheça nossa metodologia
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="animate-fade-up delay-100">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="font-display text-xl font-semibold mb-6">
                Nossos Critérios de Avaliação
              </h3>
              <ul className="space-y-4">
                {criteria.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-primary-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
