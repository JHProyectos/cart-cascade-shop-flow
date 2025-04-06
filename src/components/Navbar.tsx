
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = ({ cartItemCount = 0 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-shop-coral to-shop-mint bg-clip-text text-transparent">
              MiTienda
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-shop-coral transition-colors">
              Inicio
            </Link>
            <Link to="/productos" className="text-gray-700 hover:text-shop-coral transition-colors">
              Productos
            </Link>
            <Link to="/categorias" className="text-gray-700 hover:text-shop-coral transition-colors">
              Categorías
            </Link>
            <Link to="/ofertas" className="text-gray-700 hover:text-shop-coral transition-colors">
              Ofertas
            </Link>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleSearch}
              className="p-1 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5 text-gray-600" />
            </button>
            
            <Link to="/carrito" className="p-1 rounded-full hover:bg-gray-100 transition-colors relative">
              <ShoppingCart className="h-5 w-5 text-gray-600" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-shop-coral text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
            
            <button
              onClick={toggleMenu}
              className="p-1 rounded-full hover:bg-gray-100 transition-colors md:hidden"
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-gray-600" />
              ) : (
                <Menu className="h-5 w-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Search bar */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-300",
            isSearchOpen ? "max-h-16 py-2" : "max-h-0"
          )}
        >
          <div className="flex items-center border rounded-full px-4 py-1 bg-gray-50">
            <Search className="h-4 w-4 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Buscar productos..."
              className="w-full bg-transparent border-none focus:outline-none text-sm"
            />
            <Button
              variant="ghost"
              size="sm"
              className="text-xs"
              onClick={toggleSearch}
            >
              Cerrar
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          isMenuOpen ? "max-h-60" : "max-h-0"
        )}
      >
        <div className="px-4 py-2 space-y-1 bg-gray-50">
          <Link
            to="/"
            className="block px-3 py-2 text-gray-700 hover:bg-shop-mint hover:text-gray-900 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Inicio
          </Link>
          <Link
            to="/productos"
            className="block px-3 py-2 text-gray-700 hover:bg-shop-mint hover:text-gray-900 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Productos
          </Link>
          <Link
            to="/categorias"
            className="block px-3 py-2 text-gray-700 hover:bg-shop-mint hover:text-gray-900 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Categorías
          </Link>
          <Link
            to="/ofertas"
            className="block px-3 py-2 text-gray-700 hover:bg-shop-mint hover:text-gray-900 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Ofertas
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
