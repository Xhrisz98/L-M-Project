
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop")' }}
      >
        <div className="absolute inset-0 bg-black/50 bg-gradient-to-t from-[#2D241E] to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl animate-fadeIn">
        <h2 className="text-[#D4AF37] font-serif text-lg md:text-2xl mb-2 tracking-widest uppercase">Especialistas en Asados</h2>
        <h1 className="text-white font-serif text-4xl md:text-7xl mb-6 leading-tight">
          L&M La Casa del Borrego: <br />
          <span className="italic">Tradición que se siente en cada bocado</span>
        </h1>
        <p className="text-gray-200 font-sans text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Los mejores asados y platos típicos ecuatorianos con el sabor inconfundible del hogar y la calidez de nuestra familia.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#menu" 
            className="bg-[#C04000] hover:bg-[#A03600] text-white px-8 py-4 rounded-full font-bold transition-transform hover:scale-105 shadow-xl uppercase tracking-wider"
          >
            Ver Menú
          </a>
          <a 
            href="#about" 
            className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold transition-transform hover:scale-105 uppercase tracking-wider"
          >
            Nuestra Historia
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#menu" className="text-white/60">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
