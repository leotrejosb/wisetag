import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Zap, Target, Users, Award } from 'lucide-react';

export default function QuienesSomosPage() {
  const values = [
    {
      icon: Zap,
      title: "Innovación",
      description: "Estamos a la vanguardia de la tecnología NFC, desarrollando soluciones que simplifican la conexión digital."
    },
    {
      icon: Target,
      title: "Precisión",
      description: "Cada producto es diseñado con atención al detalle para garantizar la mejor experiencia del usuario."
    },
    {
      icon: Users,
      title: "Compromiso",
      description: "Nuestro éxito se mide por el éxito de nuestros clientes. Su crecimiento es nuestro crecimiento."
    },
    {
      icon: Award,
      title: "Calidad",
      description: "Utilizamos únicamente materiales premium y procesos de fabricación de alta calidad."
    }
  ];

  const whatsappMessage = "¡Hola Wisetag! Me gustaría conocer más sobre su empresa y cómo pueden ayudarme con mis necesidades de tecnología NFC.";
  const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-gray-950 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Somos <span className="gradient-text">Wisetag</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Pioneros en tecnología NFC para el mundo empresarial y personal
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Nuestra <span className="gradient-text">Misión</span>
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Simplificar la conexión digital para profesionales y marcas a través de 
                  tecnología NFC innovadora, accesible y de alta calidad.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Creemos que el networking y la identificación digital deben ser instantáneos, 
                  elegantes y eficientes. Por eso desarrollamos productos que conectan el mundo 
                  físico con el digital de manera seamless.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  <span>Hablemos</span>
                </a>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">¿Por qué NFC?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Conexión instantánea sin aplicaciones</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Compatible con todos los smartphones modernos</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Información siempre actualizada</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Impacto ambiental mínimo</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Nuestros <span className="gradient-text">Valores</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Los principios que guían cada decisión y cada producto que creamos
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="bg-blue-600/10 border border-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:border-blue-600/40 transition-colors">
                      <Icon className="w-8 h-8 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-24 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-600/10 to-blue-800/10 border border-blue-600/20 rounded-2xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Nuestra <span className="gradient-text">Visión</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Ser la plataforma líder en soluciones NFC para América Latina, empoderando 
                a profesionales, empresas y particulares a conectar de manera más inteligente 
                y eficiente en un mundo cada vez más digital.
              </p>
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">2024</div>
                  <div className="text-gray-400 text-sm">Año de fundación</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">∞</div>
                  <div className="text-gray-400 text-sm">Posibilidades</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                  <div className="text-gray-400 text-sm">Dedicación</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}