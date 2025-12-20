import { Link } from 'react-router-dom';
import { categories } from '@/data/articles';
import { Leaf, Pill, Heart, BookOpen, ShoppingBag } from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  "Fitoterapia": <Leaf className="w-6 h-6" />,
  "Plantas Medicinais": <Leaf className="w-6 h-6" />,
  "Suplementos Naturais": <Pill className="w-6 h-6" />,
  "Bem-estar": <Heart className="w-6 h-6" />,
  "Guias de Compra": <ShoppingBag className="w-6 h-6" />,
};

export const CategoriesSection = () => {
  return (
    <section className="py-16 bg-cream-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-secondary mb-4">
            <BookOpen className="w-5 h-5" />
            <span className="text-sm font-medium">Navegue por Categoria</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Categorias Principais
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <Link
              key={category}
              to={`/artigos?categoria=${encodeURIComponent(category.toLowerCase().replace(' ', '-'))}`}
              className="bg-card p-6 rounded-xl text-center shadow-card hover:shadow-elevated transition-all duration-300 group animate-fade-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {categoryIcons[category] || <Leaf className="w-6 h-6" />}
              </div>
              <span className="font-medium text-foreground text-sm">{category}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
