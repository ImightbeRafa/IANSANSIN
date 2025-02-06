"use client"

import React, { useEffect } from 'react';
import { Star, Check, Play, Calendar, Users, Trophy, MessageCircle, Target, Rocket } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
}

interface Testimonial {
  name: string;
  quote: string;
  image: string;
}

const features: Feature[] = [
  {
    title: "Período de Transformación",
    description: "Un período de 3 meses de transformación para tu negocio. Nos gusta optimizar el tiempo, ¡calcula que vas a ver resultados rápidos!"
  },
  {
    title: "Onboarding (1 a 7 días después de realizar el pago)",
    description: "Acceso a recursos para escalar tu negocio, acceso a una comunidad con decenas de emprendedores, iniciamos los primeros pasos del programa ADVANCE y te regalamos una camiseta."
  },
  {
    title: "Refinamos tu Oferta",
    description: "Trabajamos con ofertas que sean más fáciles de vender, ayudándote a customizar tus ofertas en función a lo que vendes. Estructuramos una oferta ganadora con propuestas de valor, valor añadido, diferenciación y facilidad."
  },
  {
    title: "Posicionamiento en Redes Sociales",
    description: "Te posicionamos con anuncios AR que venden, para que recibas mensajes de personas interesadas en comprar todos los días. Creamos guiones con ángulos de venta que generan deseo de compra y grabamos videos que destacan visualmente en redes sociales."
  },
  {
    title: "Edición y Publicación de Videos",
    description: "Trabajamos con editores de primera para que el video sea dinámico y transmita confianza. Nos encargamos de publicar los videos, optimizando tu perfil y creando descripciones que alineen con tu negocio."
  },
  {
    title: "Configuración de Anuncios en Meta",
    description: "Creamos campañas con los anuncios grabados, utilizando datos de campañas anteriores para llegar a tu público meta. Definimos el presupuesto adecuado y hacemos seguimiento para optimizar constantemente la campaña."
  },
  {
    title: "Reforma de tu Perfil de Instagram",
    description: "Optimizamos tu perfil para maximizar la conversión de los anuncios. Revisamos y modificamos la foto de perfil, estructuramos una biografía persuasiva y creamos historias destacadas estratégicas."
  },
  {
    title: "Mejora de tu Proceso de Venta",
    description: "Creamos un proceso de ventas personalizado, ayudamos a delegar atención al cliente y hacemos seguimiento para asegurar que tus colaboradores en ventas estén haciendo bien su trabajo."
  },
  {
    title: "Ciclo de Creación de Anuncios AR 2.0",
    description: "Renovamos los anuncios para no cansar a la audiencia y terminamos el programa con un segundo impulso de ventas, contando con un sistema probado para predecir ventas y mantener circulación estable en el negocio."
  }
];

const testimonials: Testimonial[] = [
  {
    name: "Chemas Collector",
    quote: "¡mi negocio ahora factura 50,000$ al mes!!",
    image: "chemas.png"
  },
  {
    name: "Incanto",
    quote: "Gracias a Ian mi negocio pasó de factura nada a más de 10,000$ al mes.",
    image: "incanto.png"
  },
  {
    name: "Pongale Huevos",
    quote: "Gracias a Ian hago más de 6,000$ vendiendo huevos online!!!.",
    image: "pongaleh.png"
  }
];

const LandingPage: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: 'Página de Reserva',
        page_path: '/booking',
      });
    } else {
      console.error('gtag is not defined');
    }
  }, []);

  const scrollToForm = () => {
    const formElement = document.getElementById('booking-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = () => {
    window.location.href = 'https://calendly.com/rafa-iankupfer/asesoria-basica';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <header className="relative h-screen flex flex-col items-center justify-center">
        
        <div className="relative z-10 text-center">
          <img 
            src="/images/iank.png" 
            alt="Centered Image" 
            className="max-w-full h-auto rounded-lg shadow-2xl" 
          />
          <button 
            className="mt-8 bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors"
            onClick={scrollToForm}
          >
            Reserva Tu Sesión Gratuita
          </button>
        </div>
      </header>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">¿Por Qué Elegir Nuestro Servicio de Creación de Contenido?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 border border-black rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <Check className="text-black w-6 h-6" />
                  <h3 className="text-xl font-semibold ml-2 text-black">{feature.title}</h3>
                </div>
                <p className="text-black">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Historias de Éxito</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative pt-[56.25%] bg-gray-200">
                  <img 
                    src={`/images/${testimonial.image}`} 
                    alt={testimonial.name} 
                    className="absolute inset-0 w-full h-full object-cover" 
                  />
                </div>
                <div className="p-6">
                  <p className="font-semibold mb-2 text-black">{testimonial.name}</p>
                  <p className="text-black">{testimonial.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="booking-form" className="py-16">
        {/* Sección eliminada: ¿Cómo Funciona Nuestro Proceso? */}
        {/* 
        <h2 className="text-3xl font-bold text-center mb-12 text-black">¿Cómo Funciona Nuestro Proceso?</h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-24">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <MessageCircle className="w-16 h-16 text-black" />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-black">1. Consulta Inicial (onboarding)</h3>
                <p className="text-black">Entendemos tus objetivos, desafíos y la estrategia de contenido actual. Discutiremos tus metas comerciales e identificaremos áreas clave para mejorar durante una llamada de 1 hora.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <Target className="w-16 h-16 text-black" />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-black">2. Creación de Guiones AR (Alto rendimiento)</h3>
                <p className="text-black">Después de identificar las propuestas de valor y los problemas que tu producto o servicio resuelve, procederemos a desarrollar guiones de videos de alto rendimiento, maximizando el costo por mensaje.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <Rocket className="w-16 h-16 text-black" />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-black">3. Preproducción y Producción de Video</h3>
                <p className="text-black">Se agenda una sesión para aclarar detalles y cualquier cambio en los guiones, así como para coordinar la sesión de grabación. Después de coordinar, se realiza la producción con el equipo y recursos previamente acordados.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <MessageCircle className="w-16 h-16 text-black" />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-black">4. Edición y Revisión de Videos</h3>
                <p className="text-black">Revisamos y editamos los videos para asegurar que cumplan con los estándares de calidad y se alineen con la estrategia de contenido.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <Target className="w-16 h-16 text-black" />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-black">5. Pauta / Media Buyer</h3>
                <p className="text-black">Implementamos estrategias de pauta para maximizar el alcance y la efectividad de los videos en las plataformas adecuadas.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <Rocket className="w-16 h-16 text-black" />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-black">6. Revisión del Rendimiento / Optimización</h3>
                <p className="text-black">Analizamos el rendimiento de los videos y optimizamos la estrategia según los resultados obtenidos.</p>
              </div>
            </div>
          </div>
        </div>
        */}
      </section>
    </div>
  );
};

export default LandingPage;