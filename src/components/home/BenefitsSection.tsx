import { Truck, Shield, Leaf, Award, HeartHandshake, FlaskConical } from 'lucide-react';

const benefits = [
  {
    icon: Leaf,
    title: '100% Natural',
    description: 'Ingredientes puros e extratos padronizados de alta qualidade.',
  },
  {
    icon: FlaskConical,
    title: 'Base Científica',
    description: 'Fórmulas desenvolvidas com respaldo de estudos clínicos.',
  },
  {
    icon: Shield,
    title: 'Segurança Garantida',
    description: 'Rigoroso controle de qualidade e rastreabilidade completa.',
  },
  {
    icon: Award,
    title: 'Qualidade Premium',
    description: 'Extratos padronizados com concentração garantida de ativos.',
  },
  {
    icon: Truck,
    title: 'Entrega Rápida',
    description: 'Enviamos para todo o Brasil com total cuidado e agilidade.',
  },
  {
    icon: HeartHandshake,
    title: 'Suporte Dedicado',
    description: 'Equipe pronta para ajudar você em sua jornada de bem-estar.',
  },
];

export const BenefitsSection = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Por Que Escolher FitoPlantaMed?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            Compromisso com excelência em cada detalhe, da seleção de ingredientes até a entrega em sua casa.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="flex items-start gap-4 p-6 rounded-xl bg-primary-foreground/5 backdrop-blur-sm hover:bg-primary-foreground/10 transition-colors animate-fade-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-2">
                  {benefit.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
