import { Target, Eye, Heart } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Missão',
    description: 'Oferecer produtos naturais com eficácia e segurança, promovendo saúde e bem-estar através da fitoterapia baseada em evidências científicas.',
  },
  {
    icon: Eye,
    title: 'Visão',
    description: 'Tornar-se referência internacional no mercado de fitoterápicos e produtos naturais, sendo reconhecida pela excelência e inovação.',
  },
  {
    icon: Heart,
    title: 'Valores',
    description: 'Qualidade, segurança, transparência, ciência e compromisso genuíno com o bem-estar de nossos clientes e do planeta.',
  },
];

export const MissionSection = () => {
  return (
    <section className="py-20 bg-gradient-nature">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Nosso Propósito
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Guiados pela ciência e inspirados pela natureza, trabalhamos para transformar vidas através da fitoterapia de qualidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <div
              key={item.title}
              className="bg-card p-8 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 animate-fade-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
