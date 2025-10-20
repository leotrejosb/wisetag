import { ShoppingCart, Palette, Zap } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: ShoppingCart,
      title: "1. Elige tu producto",
      description: "Selecciona entre tarjetas NFC, manillas o collares para mascotas según tus necesidades."
    },
    {
      icon: Palette,
      title: "2. Personalizamos tu perfil",
      description: "Diseñamos y configuramos tu página de perfil digital con toda tu información."
    },
    {
      icon: Zap,
      title: "3. Conecta al instante",
      description: "Solo acerca tu dispositivo NFC a cualquier smartphone y comparte tu información al instante."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Cómo <span className="gradient-text">funciona</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Un proceso simple y rápido para comenzar a usar tu tecnología NFC
          </p>
        </div>

        {/* gap-12 equivale a 3rem */}
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              // El contenedor de la columna debe ser relativo
              <div key={index} className="text-center group relative">
                
                {/* El ícono debe estar por encima de la línea (z-10) */}
                <div className="relative mb-8 z-10">
                  <div className="bg-blue-600/10 border-2 border-blue-600/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto group-hover:border-blue-600/60 transition-colors">
                    <Icon className="w-8 h-8 text-blue-400" />
                  </div>
                </div>
                
                {/* LÍNEA DE CONEXIÓN CORREGIDA:
                  - top-10: Centra la línea verticalmente (mitad de h-20).
                  - z-0: La pone detrás del ícono.
                  - left-[calc(50%+40px)]: Empieza en el centro (50%) + mitad del ícono (40px).
                  - w-[calc(100%+3rem-80px)]: Ancho de columna (100%) + gap (3rem) - dos mitades de ícono (80px).
                */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 h-0.5 bg-gradient-to-r from-blue-600/30 to-transparent z-0
                                 left-[calc(50%+40px)] w-[calc(100%+3rem-80px)]"
                  ></div>
                )}
                
                {/* El texto también debe estar por encima (z-10) */}
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
                  {step.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed relative z-10">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Tecnología NFC Compatible
            </h3>
            <p className="text-gray-300 mb-6">
              Nuestros dispositivos funcionan con cualquier smartphone moderno (iOS y Android) 
              sin necesidad de descargar aplicaciones adicionales.
            </p>
            {/* Ajustado para mejor responsive en móvil */}
            <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-8 space-y-2 sm:space-y-0 text-gray-400">
              <span className="text-sm">✓ iPhone (iOS 11+)</span>
              <span className="text-sm">✓ Android (4.4+)</span>
              <span className="text-sm">✓ Sin apps necesarias</span>
              <span className="text-sm">✓ Activación instantánea</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}