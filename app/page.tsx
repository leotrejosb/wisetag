import Hero from './components/home/Hero';
import ProductShowcase from './components/home/ProductShowcase';
import HowItWorks from './components/home/HowItWorks';
import CallToAction from './components/home/CallToAction';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductShowcase />
        <HowItWorks />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}