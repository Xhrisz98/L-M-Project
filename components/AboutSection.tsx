
import React, { useState } from 'react';

const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'historia' | 'mision' | 'calidad'>('historia');

  const tabs = {
    historia: "Nacimos de un sueño familiar en el corazón de Ecuador. Lo que comenzó como un pequeño puesto de asados se convirtió en el punto de encuentro favorito para los amantes del buen borrego.",
    mision: "Nuestra misión es preservar las recetas tradicionales de nuestra tierra, brindando un servicio cálido que haga que cada visitante se sienta parte de nuestra propia familia.",
    calidad: "Trabajamos directamente con productores locales para asegurar que la carne de borrego sea fresca y de pastoreo natural. La leña que usamos es seleccionada para dar el aroma perfecto."
  };

  return (
    <section id="about" className="py-24 bg-[#3D2B1F] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#C04000]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-[#D4AF37] font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Nuestra Herencia</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight italic">Compromiso con el Sabor Real</h2>
            
            {/* Tabs Functionality */}
            <div className="flex space-x-6 mb-8 border-b border-white/10">
              {(['historia', 'mision', 'calidad'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 text-sm font-bold uppercase tracking-widest transition-all relative ${
                    activeTab === tab ? 'text-[#D4AF37]' : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37]"></span>
                  )}
                </button>
              ))}
            </div>
            
            <div className="min-h-[120px]">
              <p className="text-gray-300 font-sans text-lg leading-relaxed animate-fadeIn">
                {tabs[activeTab]}
              </p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-2xl font-serif text-[#D4AF37]">+15</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400">Años de Sabor</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-2xl font-serif text-[#D4AF37]">100%</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400">Artesanal</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-2xl font-serif text-[#D4AF37]">5k</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400">Clientes</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square rounded-full overflow-hidden border-8 border-white/5 shadow-2xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop" 
                alt="Nuestro Local" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D2B1F]/80 to-transparent flex items-end justify-center pb-12">
                <p className="font-serif text-2xl italic">Ambiente Familiar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
