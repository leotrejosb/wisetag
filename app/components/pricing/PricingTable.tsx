import { Check, Star, Zap } from 'lucide-react';

export default function PricingTable() {
  const plans = [
    {
      name: "Plan Básico",
      subtitle: "Solo el dispositivo",
      price: "Desde $25",
      description: "Perfecto para usuarios que quieren configurar su NFC por cuenta propia.",
      features: [
        "Dispositivo NFC de tu elección",
        "Guía de configuración",
        "Soporte técnico básico",
        "Garantía de 1 año"
      ],
      cta: "Consultar Dispositivos",
      popular: false,
      whatsappMessage: "¡Hola Wisetag! Estoy interesado en el 'Plan Básico' y me gustaría conocer más detalles sobre los dispositivos disponibles y precios."
    },
    {
      name: "Plan Pro",
      subtitle: "Dispositivo + Landing",
      price: "Desde $75",
      description: "La opción más popular. Incluye diseño y desarrollo de tu perfil digital profesional.",
      features: [
        "Dispositivo NFC premium",
        "Diseño de página de perfil personalizada",
        "Hosting por 1 año incluido",
        "3 revisiones de diseño",
        "Analytics básicos",
        "Soporte prioritario"
      ],
      cta: "¡Quiero el Plan Pro!",
      popular: true,
      whatsappMessage: "¡Hola Wisetag! Me interesa mucho el 'Plan Pro' que incluye el dispositivo NFC y el diseño de la landing page. ¿Podrían darme más información sobre el proceso y tiempos de entrega?"
    },
    {
      name: "Plan Premium",
      subtitle: "Solución integral",
      price: "Desde $150",
      description: "La experiencia completa con mantenimiento continuo y actualizaciones regulares.",
      features: [
        "Dispositivo NFC premium",
        "Diseño web totalmente personalizado",
        "Hosting ilimitado",
        "Revisiones ilimitadas",
        "Analytics avanzados",
        "3 actualizaciones mensuales",
        "Soporte 24/7",
        "Dominio personalizado opcional"
      ],
      cta: "Comenzar Premium",
      popular: false,
      whatsappMessage: "¡Hola Wisetag! Estoy interesado en el 'Plan Premium' con la solución integral. Me gustaría conocer todos los beneficios y el proceso completo de implementación."
    }
  ];

  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(plan.whatsappMessage)}`;
            
            return (
              <div
                key={index}
                className={`relative bg-gray-800/50 border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-blue-600 ring-2 ring-blue-600/20 card-hover' 
                    : 'border-gray-700 card-hover'
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>Más Popular</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-blue-400 text-sm font-medium mb-4">{plan.subtitle}</p>
                  <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white glow-blue'
                      : 'border border-gray-600 hover:border-blue-600 text-gray-300 hover:text-white'
                  }`}
                >
                  <Zap className="w-4 h-4" />
                  <span>{plan.cta}</span>
                </a>
              </div>
            );
          })}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿No estás seguro cuál plan elegir?
            </h3>
            <p className="text-gray-300 mb-6">
              Nuestro equipo de expertos puede ayudarte a encontrar la solución perfecta 
              para tus necesidades específicas.
            </p>
            <a
              href="https://wa.me/1234567890?text=¡Hola%20Wisetag!%20Necesito%20ayuda%20para%20elegir%20el%20plan%20perfecto%20para%20mis%20necesidades.%20¿Podrían%20asesorarme?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              <span>Hablar con un Experto</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}