import { Check, Star, Zap } from 'lucide-react';

/*
  Componente de Tabla de Precios (PricingTable)
  Muestra los planes de servicio de Wisetag con los precios y características actualizados.
  Utiliza los precios en COP y la estructura sostenible que definimos.
*/
export default function PricingTable() {
  const plans = [
    {
      name: "Plan Básico",
      subtitle: "Solo el dispositivo",
      price: "$70.000",
      priceSubtext: "Pago Único",
      description: "La solución ideal para usuarios que ya tienen una presencia digital y solo necesitan el hardware.",
      features: [
        "Dispositivo NFC de elección",
        "Guía de configuración",
        "Garantía de hardware por 1 año",
        "Soporte técnico básico"
      ],
      cta: "Consultar Dispositivos",
      popular: false,
      whatsappMessage: "¡Hola Wisetag! Estoy interesado en el 'Plan Básico' de $70.000. ¿Qué dispositivos tienen disponibles?"
    },
    {
      name: "Plan Pro",
      subtitle: "Dispositivo + Perfil en Plantilla",
      price: "$190.000",
      priceSubtext: "Renovación anual: $80.000",
      description: "El producto estrella. Perfecto para profesionales que necesitan una vCard digital de alto impacto.",
      features: [
        "Dispositivo NFC premium",
        "Diseño de perfil web basado en 3 plantillas premium",
        "1 ronda de revisión de contenido",
        "Alojamiento (Hosting) por 1 año incluido",
        "Soporte prioritario"
      ],
      cta: "¡Quiero el Plan Pro!",
      popular: true,
      whatsappMessage: "¡Hola Wisetag! Me interesa mucho el 'Plan Pro' de $190.000 con el perfil basado en plantilla. ¿Podemos comenzar?"
    },
    {
      name: "Plan Premium",
      subtitle: "Solución + Mantenimiento",
      price: "$350.000",
      priceSubtext: "Suscripción anual: $250.000",
      description: "La solución 'llave en mano' para clientes que valoran su tiempo y necesitan actualizaciones periódicas.",
      features: [
        "Dispositivo NFC premium",
        "Diseño avanzado sobre plantilla",
        "Hosting incluido (suscripción activa)",
        "Hasta 4 actualizaciones de contenido por año",
        "Soporte prioritario y analytics básicos"
      ],
      cta: "Comenzar Premium",
      popular: false,
      whatsappMessage: "¡Hola Wisetag! Estoy interesado en el 'Plan Premium' de $350.000. Me gustaría entender más sobre el diseño avanzado y las actualizaciones."
    }
  ];

  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            // URL de WhatsApp con mensaje personalizado para cada plan
            const whatsappUrl = `https://wa.me/+573216982181?text=${encodeURIComponent(plan.whatsappMessage)}`;
            
            return (
              <div
                key={index}
                className={`relative bg-gray-800/50 border rounded-xl p-8 flex flex-col ${
                  plan.popular 
                    ? 'border-blue-600 ring-2 ring-blue-600/20 card-hover' 
                    : 'border-gray-700 card-hover'
                }`}
              >
                {/* Insignia de Popular */}
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
                  
                  {/* Sección de Precio Actualizada */}
                  <div className="text-4xl font-bold text-white">{plan.price}</div>
                  {plan.priceSubtext && (
                    <p className="text-yellow-400 text-xs font-semibold mt-1">
                      {plan.priceSubtext}
                    </p>
                  )}
                  <p className="text-gray-400 text-sm mt-4">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Botón de Llamada a la Acción (CTA) */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full mt-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
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

        {/* Sección de ayuda */}
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
              href="https://wa.me/+573216982181?text=¡Hola%20Wisetag!%20Necesito%20ayuda%20para%20elegir%20el%20plan%20perfecto%20para%20mis%20necesidades.%20¿Podrían%20asesorarme?"
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
