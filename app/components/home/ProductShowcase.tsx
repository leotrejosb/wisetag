import { CreditCard, Watch, Heart } from 'lucide-react';

export default function ProductShowcase() {
  const products = [
    {
      icon: CreditCard,
      title: "Tarjetas NFC",
      description: "Tarjetas de presentación digitales elegantes y profesionales. Comparte tu información al instante.",
      features: ["Material premium", "Diseño personalizable", "Resistente al agua", "Descuento por volumen"]
    },
    {
      icon: Watch,
      title: "Manillas NFC",
      description: "Pulseras inteligentes para uso personal y deportivo. Tecnología wearable de última generación.",
      features: ["Cómoda y resistente", "Múltiples colores", "Sensor de proximidad", "Batería de larga duración"]
    },
    {
      icon: Heart,
      title: "Collares para Mascotas",
      description: "Identificación inteligente para tus mascotas. Información de contacto siempre actualizada.",
      features: ["Material hipoalergénico", "Resistente a la intemperie", "Fácil configuración", "Información médica"]
    }
  ];

  return (
    <section id="productos" className="py-24 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nuestros <span className="gradient-text">Productos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dispositivos NFC de alta calidad diseñados para profesionales, 
            particulares y el cuidado de mascotas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={index}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 card-hover group"
              >
                <div className="mb-6">
                  <div className="bg-blue-600/10 p-4 rounded-lg inline-flex group-hover:bg-blue-600/20 transition-colors">
                    <Icon className="w-8 h-8 text-blue-400" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {product.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {product.description}
                </p>

                <ul className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Special offer banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-600/10 to-blue-800/10 border border-blue-600/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">
            ¡Oferta Especial!
          </h3>
          <p className="text-blue-400 text-lg">
            15% de descuento en la compra de 10 o más tarjetas NFC
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Ideal para equipos, empresas y eventos corporativos
          </p>
        </div>
      </div>
    </section>
  );
}