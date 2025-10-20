import { Gift, CreditCard } from 'lucide-react';

export default function VolumeDiscount() {
  const whatsappMessage = "¡Hola Wisetag! Me interesa la oferta de descuento por volumen en tarjetas NFC. Necesito información sobre precios para pedidos de 10 o más tarjetas.";
  const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="py-24 bg-gradient-to-r from-blue-600/5 to-blue-800/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600/10 to-blue-800/10 border border-blue-600/20 rounded-2xl p-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-600/20 p-4 rounded-full">
              <Gift className="w-12 h-12 text-blue-400" />
            </div>
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-4">
            ¡Oferta Especial por <span className="gradient-text">Volumen</span>!
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ideal para empresas, equipos de ventas, eventos corporativos y conferencias
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <CreditCard className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-white mb-2">15% de Descuento</h3>
              <p className="text-gray-300 mb-3">En compras de 10 o más tarjetas NFC</p>
              <p className="text-blue-400 font-semibold">Precio especial por unidad</p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-2">Casos de Uso</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Equipos comerciales</li>
                <li>• Eventos y ferias</li>
                <li>• Tarjetas corporativas</li>
                <li>• Networking masivo</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-gray-400 text-sm">
              * Descuento aplicable únicamente a tarjetas NFC. No acumulable con otras ofertas.
            </p>
            
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 glow-blue"
            >
              <span>Consultar Descuento por Volumen</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}