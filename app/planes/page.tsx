import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PricingTable from '../components/pricing/PricingTable';
import VolumeDiscount from '../components/pricing/VolumeDiscount';

export default function PlanesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-gray-950 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Elige tu <span className="gradient-text">Plan Perfecto</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Desde dispositivos básicos hasta soluciones integrales con diseño personalizado 
              y mantenimiento continuo. Encuentra el plan que mejor se adapte a tus necesidades.
            </p>
          </div>
        </section>

        <PricingTable />
        <VolumeDiscount />
      </main>
      <Footer />
    </>
  );
}