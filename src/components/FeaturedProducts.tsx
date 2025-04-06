
import React from 'react';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

// Sample products data (would normally come from API)
const featuredProducts = [
  {
    id: '1',
    name: 'Camiseta Básica Algodón',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    category: 'Ropa',
    isNew: true,
  },
  {
    id: '2',
    name: 'Auriculares Bluetooth',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    category: 'Electrónica',
    isNew: false,
  },
  {
    id: '3',
    name: 'Jarrón Decorativo',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1604067423422-c58331a17d0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    category: 'Hogar',
    isNew: true,
  },
  {
    id: '4',
    name: 'Set de Cremas Faciales',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2tpbmNhcmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    category: 'Belleza',
    isNew: false,
  },
];

const FeaturedProducts = () => {
  const { toast } = useToast();
  
  const handleAddToCart = (productName: string) => {
    toast({
      title: "Añadido al carrito",
      description: `${productName} ha sido añadido a tu carrito`,
    });
  };

  return (
    <section className="py-16 bg-shop-lightGray">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Productos Destacados</h2>
            <p className="text-gray-600">Nuestra selección de los mejores productos</p>
          </div>
          <Button 
            variant="outline"
            className="mt-4 sm:mt-0 border-shop-coral text-shop-coral hover:bg-shop-coral/10"
            asChild
          >
            <Link to="/productos">Ver Todo</Link>
          </Button>
        </div>
        
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              category={product.category}
              isNew={product.isNew}
              onAddToCart={() => handleAddToCart(product.name)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
