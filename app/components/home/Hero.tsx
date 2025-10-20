import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';

export default function Hero() {
  const whatsappMessage = "¡Hola Wisetag! Me interesa conocer más sobre la tecnología NFC y sus productos. ¿Podrían brindarme información detallada?";
  const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-blue-600/10 border border-blue-600/20 rounded-full px-6 py-2">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Tecnología NFC de Nueva Generación</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="block text-white">Conecta tu mundo</span>
            <span className="block gradient-text">con un solo toque</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transforma la manera en que compartes tu información profesional. 
            Tarjetas NFC, manillas inteligentes y collares para mascotas que conectan 
            instantáneamente con perfiles digitales personalizados.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link
              href="/planes"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 glow-blue"
            >
              <span>Ver Planes</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 border border-gray-600 hover:border-blue-600 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all"
            >
              <span>Contactar por WhatsApp</span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400">100%</div>
              <div className="text-gray-400 text-sm mt-1">Tecnología NFC</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400">3</div>
              <div className="text-gray-400 text-sm mt-1">Planes Disponibles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400">24/7</div>
              <div className="text-gray-400 text-sm mt-1">Soporte Técnico</div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}