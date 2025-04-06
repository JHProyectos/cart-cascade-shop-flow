
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-shop-lightGray pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Sobre Nosotros</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              MiTienda ofrece una selección de productos de alta calidad a precios accesibles. Nuestra misión es brindar una experiencia de compra excepcional.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <Link to="/" className="hover:text-shop-coral transition-colors">Inicio</Link>
              </li>
              <li>
                <Link to="/productos" className="hover:text-shop-coral transition-colors">Catálogo</Link>
              </li>
              <li>
                <Link to="/ofertas" className="hover:text-shop-coral transition-colors">Ofertas</Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-shop-coral transition-colors">Contacto</Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Atención al Cliente</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <Link to="/preguntas-frecuentes" className="hover:text-shop-coral transition-colors">Preguntas Frecuentes</Link>
              </li>
              <li>
                <Link to="/envios" className="hover:text-shop-coral transition-colors">Envíos</Link>
              </li>
              <li>
                <Link to="/devoluciones" className="hover:text-shop-coral transition-colors">Devoluciones</Link>
              </li>
              <li>
                <Link to="/terminos" className="hover:text-shop-coral transition-colors">Términos y Condiciones</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Contacto</h3>
            <address className="not-italic text-gray-600 text-sm space-y-2">
              <p>Calle Principal 123</p>
              <p>Madrid, España</p>
              <p>Email: info@mitienda.com</p>
              <p>Teléfono: +34 91 123 4567</p>
            </address>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} MiTienda. Todos los derechos reservados.
          </p>
          
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-gray-500 hover:text-shop-coral transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="text-gray-500 hover:text-shop-coral transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-gray-500 hover:text-shop-coral transition-colors">
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
