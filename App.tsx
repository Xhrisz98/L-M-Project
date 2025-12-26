
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Banner de Bienvenida Corto */}
        <section className="py-12 bg-white flex items-center justify-center border-b border-gray-100">
          <div className="max-w-4xl text-center px-4">
            <h3 className="font-serif text-2xl md:text-3xl text-[#3D2B1F] italic mb-2">"La calidez de un negocio familiar con el sabor de la alta calidad."</h3>
            <p className="text-[#C04000] font-sans font-bold uppercase tracking-widest text-sm">Somos L&M La Casa del Borrego</p>
          </div>
        </section>

        <MenuSection />
        <AboutSection />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
