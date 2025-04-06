
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface Category {
  id: string;
  name: string;
  image: string;
  color: string;
}

const categories: Category[] = [
  {
    id: 'ropa',
    name: 'Ropa',
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhlcyUyMHJhY2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    color: 'bg-shop-coral/20',
  },
  {
    id: 'electronica',
    name: 'Electrónica',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    color: 'bg-shop-mint/20',
  },
  {
    id: 'hogar',
    name: 'Hogar',
    image: 'https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9tZSUyMGRlY29yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    color: 'bg-shop-yellow/20',
  },
  {
    id: 'belleza',
    name: 'Belleza',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXR5JTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    color: 'bg-shop-blue/20',
  },
];

const FeaturedCategories = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestras Categorías</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Explora nuestra amplia variedad de categorías y encuentra exactamente lo que estás buscando.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/categorias/${category.id}`}
              className={cn(
                "rounded-xl overflow-hidden group relative h-64 flex items-center justify-center shadow-md transition-all duration-300 hover:shadow-xl",
                category.color
              )}
            >
              <img 
                src={category.image} 
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-60 group-hover:opacity-80 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <div className="relative z-20 text-center p-4">
                <span className="bg-white/70 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full font-medium inline-block">
                  {category.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
