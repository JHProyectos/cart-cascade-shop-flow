
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-shop-mint/10 to-shop-coral/10 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <span className="inline-block px-3 py-1 bg-shop-yellow text-gray-800 rounded-full text-sm font-medium">
              Nueva Colección
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Descubre Productos
              <span className="block bg-gradient-to-r from-shop-coral to-shop-mint bg-clip-text text-transparent">
                Únicos y Especiales
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Explora nuestra selección de productos de alta calidad a precios increíbles. Envío gratis en compras superiores a €50.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-shop-coral hover:bg-shop-coral/90 text-white rounded-full"
                asChild
              >
                <Link to="/productos">
                  Comprar Ahora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="rounded-full border-shop-coral text-shop-coral hover:bg-shop-coral/10"
                asChild
              >
                <Link to="/ofertas">
                  Ver Ofertas
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative animate-scale-in hidden md:block">
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-shop-yellow rounded-full opacity-50"></div>
            <div className="absolute -bottom-12 -right-8 w-32 h-32 bg-shop-blue rounded-full opacity-40"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1485125639709-a60c3a500bf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Product showcase" 
              className="rounded-lg shadow-xl relative z-10 w-full h-full object-cover"
            />
            
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg flex gap-4 z-20">
              <div className="text-center">
                <div className="text-xl font-bold text-shop-coral">500+</div>
                <div className="text-xs text-gray-500">Productos</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-shop-coral">5,000+</div>
                <div className="text-xs text-gray-500">Clientes</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-shop-coral">99%</div>
                <div className="text-xs text-gray-500">Satisfacción</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
