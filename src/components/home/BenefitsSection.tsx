import { Truck, Shield, Leaf, Award, HeartHandshake, FlaskConical } from 'lucide-react';

const benefits = [
  {
    icon: Leaf,
    title: 'Plantas Medicinais',
    description: 'Conteúdo educativo organizado por plantas e temas de saúde.',
  },
  {
    icon: FlaskConical,
    title: 'Informação para Consulta',
    description: 'Artigos para apoiar suas perguntas ao profissional de saúde.',
  },
  {
    icon: Shield,
    title: 'Limites do Conteúdo',
    description: 'Informações gerais não substituem avaliação individual.',
  },
  {
    icon: Award,
    title: 'Guias de Leitura',
    description: 'Conheça termos e características citados em rótulos de suplementos.',
  },
  {
    icon: Truck,
    title: 'Lojas Parceiras',
    description: 'Não fabricamos nem enviamos produtos. Compras e entregas são responsabilidade da loja.',
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
            Um portal de informação, consultas e links de afiliados — não uma loja ou fabricante.
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
