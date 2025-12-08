import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { ShoppingBag, Leaf } from 'lucide-react';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} adicionado ao carrinho!`);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link
      to={`/produtos/${product.slug}`}
      className="group block bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] bg-green-soft overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement!.classList.add('flex', 'items-center', 'justify-center');
            const icon = document.createElement('div');
            icon.innerHTML = '<svg class="w-16 h-16 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.5c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5m0-3c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z"/></svg>';
            e.currentTarget.parentElement!.appendChild(icon);
          }}
        />
        {product.badge && (
          <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground font-medium">
            {product.badge}
          </Badge>
        )}
        {discount > 0 && (
          <Badge className="absolute top-4 right-4 bg-destructive text-destructive-foreground font-medium">
            -{discount}%
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 text-secondary text-sm mb-2">
          <Leaf className="w-4 h-4" />
          <span>{product.category}</span>
        </div>
        
        <h3 className="font-display text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {product.tagline}
        </p>

        <div className="flex items-end justify-between">
          <div>
            {product.originalPrice && (
              <span className="text-muted-foreground text-sm line-through block">
                {formatPrice(product.originalPrice)}
              </span>
            )}
            <span className="text-2xl font-bold text-primary">
              {formatPrice(product.price)}
            </span>
          </div>
          <Button
            size="sm"
            variant="gold"
            onClick={handleAddToCart}
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ShoppingBag className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Link>
  );
};
