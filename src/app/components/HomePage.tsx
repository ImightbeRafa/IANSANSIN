import React from 'react';
import { ArrowRight, MessageCircle, Target, Rocket, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center bg-black text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Ian Kupferschmidt
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white">
            Contenido de Alto Rendimiento
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-white">
            Transformando negocios a través de una estrategia de contenido de alto rendimiento y mentoría en Costa Rica
          </p>
          <ChevronDown className="w-8 h-8 mx-auto animate-bounce text-white" />
        </div>
      </header>

      {/* Process Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-black">Flujo del servicio</h2>
          
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
      </section>

      {/* Expertise Section */}
      <section className="py-24 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">Áreas de Especialización</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
              <div key={index} className="border border-white p-8">
                <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-white">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">¿Listo para Transformar Tu Estrategia de Contenido?</h2>
          <Link 
            href="/booking"
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 text-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Comienza Tu Viaje
            <ArrowRight className="w-5 h-5 text-white" />
          </Link>
        </div>
      </section>
    </div>
  );
};

const expertise = [
  {
    title: "Guiones AR(Alto rendimiento)",
    description: "Desarrollamos guiones que maximizan las propuestas de valor de tu negocio."
  },
  {
    title: "Produccion de video professional",
    description: "Equipo y personal capacitado para garantizarte la mejor calidad en tus videos."
  },
  {
    title: "Media Buyer",
    description: "Excelente equipo de media buyers que complementa el contenido AR para minimizar al maximo el costo de tus anuncios."
  },
  {
    title: "Expertos en procesos de venta ",
    description: "Analizamos y adaptamos tus procesos de ventas para maximizar y inccrementar tus capacidades de venta."
  }
];

export default HomePage;