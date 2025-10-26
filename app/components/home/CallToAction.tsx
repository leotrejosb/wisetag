import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function CallToAction() {
  const whatsappMessage = "¡Hola Wisetag! Estoy listo para comenzar con la tecnología NFC. ¿Podrían ayudarme a elegir el mejor plan para mis necesidades?";
  const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-blue-800/5 to-blue-600/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para <span className="gradient-text">conectar</span> tu mundo?
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Únete a miles de profesionales que ya están usando la tecnología NFC 
            para hacer networking de manera más efectiva y moderna.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/planes"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 glow-blue"
            >
              <span>Ver Todos los Planes</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 border-2 border-gray-600 hover:border-blue-600 text-gray-300 hover:text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Consultar por WhatsApp</span>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">500+</div>
              <div className="text-gray-400 text-sm">Clientes Satisfechos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime Garantizado</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">24h</div>
              <div className="text-gray-400 text-sm">Entrega Express</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">∞</div>
              <div className="text-gray-400 text-sm">Actualizaciones</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}