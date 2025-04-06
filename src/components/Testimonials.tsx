
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'María García',
    avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    rating: 5,
    text: 'Los productos son de excelente calidad. Estoy muy contenta con mi compra y volveré a comprar aquí sin duda.',
  },
  {
    id: 2,
    name: 'Antonio López',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 4,
    text: 'La entrega fue muy rápida y el producto estaba en perfectas condiciones. Lo recomiendo.',
  },
  {
    id: 3,
    name: 'Carmen Rodríguez',
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
    rating: 5,
    text: 'Excelente servicio al cliente. Me ayudaron a resolver todas mis dudas antes de realizar la compra.',
  },
];

const Testimonials = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Nuestros clientes son nuestra prioridad y nos esforzamos por brindarles la mejor experiencia.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-medium text-gray-800">{testimonial.name}</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        size={16}
                        className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
