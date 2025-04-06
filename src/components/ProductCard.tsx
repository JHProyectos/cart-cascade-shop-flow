
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  category,
  isNew = false,
  onAddToCart,
}) => {
  return (
    <div className="product-card group animate-fade-in">
      <div className="relative overflow-hidden">
        <Link to={`/productos/${id}`}>
          <img
            src={image}
            alt={name}
            className="product-image"
          />
        </Link>
        
        {isNew && (
          <div className="absolute top-2 left-2">
            <span className="badge badge-primary">Nuevo</span>
          </div>
        )}
        
        <div className="absolute top-2 right-2">
          <button 
            className="p-1.5 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
            aria-label="Add to favorites"
          >
            <Heart className="h-4 w-4 text-gray-600" />
          </button>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <Button 
            size="sm" 
            className="w-full bg-white text-gray-800 hover:bg-shop-mint"
            onClick={onAddToCart}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Agregar al carrito
          </Button>
        </div>
      </div>
      
      <div className="p-4">
        <div className="text-xs text-gray-500 mb-1">{category}</div>
        <Link to={`/productos/${id}`} className="block">
          <h3 className="font-medium text-gray-800 hover:text-shop-coral transition-colors line-clamp-2">
            {name}
          </h3>
        </Link>
        <div className="mt-2 font-semibold text-shop-coral">
          €{price.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
