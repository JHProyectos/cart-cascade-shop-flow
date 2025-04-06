
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Filter, SlidersHorizontal, Search } from 'lucide-react';
import ProductCard from '@/components/ProductCard';

// Lista de productos de ejemplo (normalmente vendría de una API)
const allProducts = [
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
  {
    id: '5',
    name: 'Zapatillas Deportivas',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    category: 'Calzado',
    isNew: true,
  },
  {
    id: '6',
    name: 'Reloj Inteligente',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    category: 'Electrónica',
    isNew: false,
  },
  {
    id: '7',
    name: 'Bolso de Cuero',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFnfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    category: 'Accesorios',
    isNew: true,
  },
  {
    id: '8',
    name: 'Lámpara de Mesa',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFtcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    category: 'Hogar',
    isNew: false,
  }
];

// Todas las categorías disponibles
const categories = [...new Set(allProducts.map(product => product.category))];

const ProductsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const { addItem, getCartCount } = useCart();

  // Filtrar productos basados en la búsqueda y categoría
  const filteredProducts = allProducts.filter(product => {
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === '' || product.category === selectedCategory)
    );
  });

  // Calcular productos para la página actual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Restablecer a la primera página cuando cambian los filtros
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll hacia arriba cuando se cambia de página
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar cartItemCount={getCartCount()} />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Nuestros Productos</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explora nuestra colección de productos de alta calidad 
            seleccionados cuidadosamente para ti
          </p>
        </div>

        {/* Barra de búsqueda y filtros */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input 
              type="text" 
              placeholder="Buscar productos..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              onClick={() => setShowFilters(!showFilters)}
              className="whitespace-nowrap"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
            <Button 
              variant={selectedCategory ? "default" : "outline"} 
              onClick={() => setSelectedCategory('')}
              className="whitespace-nowrap"
            >
              Todos
            </Button>
          </div>
        </div>

        {/* Panel de filtros */}
        {showFilters && (
          <Card className="p-4 mb-6 shadow-sm border border-gray-200 bg-gray-50">
            <div className="flex items-center mb-3">
              <SlidersHorizontal className="h-5 w-5 text-gray-600 mr-2" />
              <h3 className="font-medium text-gray-800">Filtrar por categoría</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className="cursor-pointer hover:bg-shop-coral/10"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </Card>
        )}

        {/* Resultados y mensajes */}
        {filteredProducts.length > 0 ? (
          <div className="mb-4 text-sm text-gray-500">
            Mostrando {currentProducts.length} de {filteredProducts.length} productos
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">No se encontraron productos que coincidan con tu búsqueda.</p>
            <Button onClick={() => {setSearchTerm(''); setSelectedCategory('')}}>
              Limpiar filtros
            </Button>
          </div>
        )}

        {/* Grid de productos */}
        {filteredProducts.length > 0 && (
          <div className="product-grid">
            {currentProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
                isNew={product.isNew}
                onAddToCart={() => addItem(product)}
              />
            ))}
          </div>
        )}

        {/* Paginación */}
        {filteredProducts.length > productsPerPage && (
          <Pagination className="my-10">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
              
              {[...Array(totalPages)].map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    isActive={currentPage === i + 1}
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <PaginationNext 
                  onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductsPage;
