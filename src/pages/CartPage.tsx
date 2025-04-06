
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Trash2, ShoppingBag, Plus, Minus, ArrowLeft, ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';

const CartPage: React.FC = () => {
  const { items, removeItem, updateQuantity, clearCart, getCartTotal, getCartCount } = useCart();
  const { toast } = useToast();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    
    // Simulación de proceso de checkout
    setTimeout(() => {
      toast({
        title: "Pedido completado",
        description: "¡Gracias por tu compra! Recibirás un email con los detalles.",
      });
      clearCart();
      setIsCheckingOut(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar cartItemCount={getCartCount()} />
      
      <main className="flex-grow container mx-auto px-4 py-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Tu Carrito</h1>
          <p className="text-gray-600">
            Revisa los productos que has añadido a tu carrito
          </p>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-16 max-w-md mx-auto">
            <div className="bg-shop-mint/20 rounded-full h-24 w-24 flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="h-10 w-10 text-shop-mint" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Tu carrito está vacío</h2>
            <p className="text-gray-600 mb-8">
              Parece que aún no has añadido ningún producto a tu carrito.
              Explora nuestro catálogo para encontrar lo que necesitas.
            </p>
            <Button asChild className="bg-shop-coral hover:bg-shop-coral/90">
              <Link to="/productos">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Ir a la tienda
              </Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Lista de productos en el carrito */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden mb-6">
                <div className="p-4 bg-gray-50 border-b border-gray-100">
                  <h2 className="font-medium text-lg text-gray-800">Productos en tu carrito</h2>
                </div>
                
                <CardContent className="p-0">
                  {items.map((item) => (
                    <div key={item.id} className="border-b border-gray-100 last:border-0">
                      <div className="flex p-4 gap-4">
                        {/* Imagen del producto */}
                        <div className="flex-shrink-0 w-20 h-20">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover rounded-md"
                          />
                        </div>
                        
                        {/* Información del producto */}
                        <div className="flex-grow">
                          <h3 className="font-medium text-gray-800">{item.name}</h3>
                          <p className="text-sm text-gray-500 mb-2">Precio unitario: €{item.price.toFixed(2)}</p>
                          
                          {/* Controles de cantidad */}
                          <div className="flex items-center">
                            <button
                              className="p-1 rounded-full hover:bg-gray-100"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              aria-label="Disminuir cantidad"
                            >
                              <Minus className="h-4 w-4 text-gray-600" />
                            </button>
                            <span className="mx-3 min-w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              className="p-1 rounded-full hover:bg-gray-100"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              aria-label="Aumentar cantidad"
                            >
                              <Plus className="h-4 w-4 text-gray-600" />
                            </button>
                          </div>
                        </div>
                        
                        {/* Precio total del ítem */}
                        <div className="flex flex-col items-end justify-between">
                          <span className="font-semibold text-shop-coral">
                            €{(item.price * item.quantity).toFixed(2)}
                          </span>
                          <button
                            className="text-gray-400 hover:text-red-500 transition-colors p-1"
                            onClick={() => removeItem(item.id)}
                            aria-label="Eliminar producto"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
              
              <div className="flex justify-between">
                <Button variant="outline" asChild>
                  <Link to="/productos" className="flex items-center">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Seguir comprando
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="text-red-500 hover:text-red-600 hover:bg-red-50 border-red-200"
                  onClick={clearCart}
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Vaciar carrito
                </Button>
              </div>
            </div>
            
            {/* Resumen del pedido */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <div className="p-4 bg-gray-50 border-b border-gray-100">
                  <h2 className="font-medium text-lg text-gray-800">Resumen del pedido</h2>
                </div>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal:</span>
                      <span className="font-medium">€{getCartTotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Gastos de envío:</span>
                      <span className="font-medium">€0.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Impuestos:</span>
                      <span className="font-medium">Incluidos</span>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total:</span>
                      <span className="text-shop-coral">€{getCartTotal().toFixed(2)}</span>
                    </div>
                    
                    <Button 
                      className="w-full bg-shop-coral hover:bg-shop-coral/90 mt-4"
                      onClick={handleCheckout}
                      disabled={isCheckingOut}
                    >
                      {isCheckingOut ? 'Procesando...' : 'Finalizar compra'}
                    </Button>
                    
                    <p className="text-xs text-gray-500 text-center mt-4">
                      Al finalizar la compra, aceptas nuestros 
                      <span className="text-shop-coral hover:underline cursor-pointer"> términos y condiciones</span> 
                      {' '}y nuestra{' '}
                      <span className="text-shop-coral hover:underline cursor-pointer">política de privacidad</span>.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default CartPage;
