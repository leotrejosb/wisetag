import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ContactForm from '../components/contact/ContactForm';
import { MessageCircle, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactoPage() {
  const whatsappMessage = "¡Hola Wisetag! Me gustaría ponerme en contacto con ustedes para conocer más sobre sus productos y servicios NFC.";
  const whatsappUrl = `https://wa.me/3216982181?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-gray-950 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Hablemos sobre tu <span className="gradient-text">proyecto</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Estamos aquí para ayudarte a encontrar la solución NFC perfecta para tus necesidades
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-24 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">
                  Nuestra forma <span className="gradient-text">preferida</span>
                </h2>
                
                {/* WhatsApp CTA */}
                <div className="bg-gradient-to-r from-green-600/10 to-green-800/10 border border-green-600/20 rounded-xl p-8 mb-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-green-600/20 p-3 rounded-full">
                      <MessageCircle className="w-8 h-8 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">WhatsApp Business</h3>
                      <p className="text-green-400">La manera más rápida de contactarnos</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Obtén respuesta inmediata a tus consultas sobre productos, precios, 
                    tiempos de entrega y asesoramiento personalizado.
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Iniciar Chat</span>
                  </a>
                </div>

                {/* Other Contact Methods */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-600/20 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Email</h4>
                      <p className="text-gray-400">info@wisetag.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-600/20 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Ubicación</h4>
                      <p className="text-gray-400">Ciudad, País</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-600/20 p-3 rounded-full">
                      <Clock className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Horario</h4>
                      <p className="text-gray-400">Lunes a Viernes: 9:00 - 18:00</p>
                      <p className="text-gray-400">Sábados: 9:00 - 14:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  Formulario de <span className="gradient-text">contacto</span>
                </h2>
                <p className="text-gray-400 mb-8">
                  Para consultas generales que no sean de venta directa
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Quick Access */}
        <section className="py-24 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                ¿Tienes una <span className="gradient-text">pregunta rápida</span>?
              </h2>
              <p className="text-xl text-gray-300">
                Estas son algunas de las consultas más comunes
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-3">¿Cuánto demora la entrega?</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Los dispositivos básicos se entregan en 24-48h. Los planes con diseño personalizado demoran 3-5 días hábiles.
                </p>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">
                  Preguntar por WhatsApp →
                </a>
              </div>
              
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-3">¿Los NFC funcionan con iPhone?</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Sí, funcionan con todos los iPhone desde iOS 11 en adelante, sin necesidad de descargar apps adicionales.
                </p>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">
                  Más información →
                </a>
              </div>
              
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-3">¿Puedo actualizar mi información?</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Con los planes Pro y Premium puedes actualizar tu información cuando quieras desde nuestro panel de control.
                </p>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">
                  Conocer planes →
                </a>
              </div>
              
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-3">¿Ofrecen descuentos por volumen?</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Sí, ofrecemos 15% de descuento en compras de 10 o más tarjetas NFC. Ideal para empresas.
                </p>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">
                  Consultar descuentos →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}