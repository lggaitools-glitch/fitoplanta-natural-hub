import { Link } from 'react-router-dom';
import { Leaf, Pill, Heart, BookOpen, ShoppingBag, Sprout } from 'lucide-react';

const siloCategories = [
  { name: 'Fitoterapia', href: '/fitoterapia', icon: Leaf, description: 'Ciência das plantas medicinais' },
  { name: 'Plantas Medicinais', href: '/plantas-medicinais', icon: Sprout, description: 'Guia de plantas e benefícios' },
  { name: 'Suplementos', href: '/suplementos-naturais', icon: Pill, description: 'Formas e dosagens' },
  { name: 'Guias de Compra', href: '/guias', icon: ShoppingBag, description: 'Melhores produtos' },
  { name: 'Bem-estar', href: '/bem-estar', icon: Heart, description: 'Saúde natural no dia a dia' },
];

export const CategoriesSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-accent mb-4">
            <BookOpen className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wide">Explore Nosso Conteúdo</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Navegue por Tema
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {siloCategories.map((category, index) => (
            <Link
              key={category.name}
              to={category.href}
              className="bg-card p-6 rounded-xl text-center border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group animate-fade-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <category.icon className="w-7 h-7" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{category.name}</h3>
              <p className="text-xs text-muted-foreground">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
