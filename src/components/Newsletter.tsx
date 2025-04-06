
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Error",
        description: "Por favor, introduce un correo electrónico válido",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "¡Gracias por suscribirte!",
      description: "Recibirás nuestras próximas ofertas en tu correo.",
    });
    
    setEmail('');
  };

  return (
    <section className="py-16 bg-gradient-to-r from-shop-coral to-shop-mint">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Suscríbete a Nuestra Newsletter</h2>
          <p className="mb-8">
            Recibe las últimas noticias, ofertas exclusivas y novedades directamente en tu correo electrónico.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-grow bg-white/90 border-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button 
              type="submit" 
              className="bg-white text-shop-coral hover:bg-white/90"
            >
              Suscribirse
            </Button>
          </form>
          
          <p className="text-sm mt-4 text-white/80">
            No compartimos tu información con terceros. Puedes darte de baja en cualquier momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
