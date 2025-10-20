import Link from 'next/link';
import { Zap, MessageCircle, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const whatsappMessage = "¡Hola Wisetag! Me gustaría obtener más información sobre sus productos y servicios NFC.";
  const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Wisetag</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Conecta tu mundo profesional con un solo toque. Tecnología NFC de vanguardia.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white mb-4">Navegación</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Inicio
              </Link>
              <Link href="/planes" className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Planes
              </Link>
              <Link href="/quienes-somos" className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Quiénes Somos
              </Link>
              <Link href="/contacto" className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Contacto
              </Link>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-white mb-4">Productos</h3>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">Tarjetas NFC</p>
              <p className="text-gray-400 text-sm">Manillas NFC</p>
              <p className="text-gray-400 text-sm">Collares para Mascotas</p>
              <p className="text-gray-400 text-sm">Perfiles Digitales</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contacto</h3>
            <div className="space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4" />
                <span>info@wisetag.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Pereira, Colombia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Wisetag. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}