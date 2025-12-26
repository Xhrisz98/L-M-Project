
import React, { useState } from 'react';
import { MENU_ITEMS, SOCIAL_LINKS } from '../constants';
import { MenuItem } from '../types';

const MenuModal: React.FC<{ item: MenuItem; onClose: () => void }> = ({ item, onClose }) => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
    <div className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="h-64 md:h-full">
          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
        </div>
        <div className="p-8 md:p-12">
          <span className="text-[#C04000] font-bold uppercase tracking-widest text-sm mb-2 block">{item.category}</span>
          <h3 className="font-serif text-4xl text-[#3D2B1F] mb-4">{item.title}</h3>
          <p className="text-[#D4AF37] text-2xl font-bold mb-6">{item.price}</p>
          <div className="w-12 h-1 bg-[#D4AF37] mb-6"></div>
          <p className="text-gray-600 font-sans leading-relaxed mb-8">
            {item.longDescription || item.description}
          </p>
          
          {item.ingredients && (
            <div className="mb-8">
              <h4 className="font-bold text-[#3D2B1F] mb-3 uppercase text-xs tracking-widest">Ingredientes clave:</h4>
              <ul className="grid grid-cols-2 gap-2">
                {item.ingredients.map((ing, i) => (
                  <li key={i} className="text-sm text-gray-500 flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mr-2"></span>
                    {ing}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <a 
            href={`${SOCIAL_LINKS.whatsapp}?text=Hola! Me gustaría pedir el plato: ${item.title}`}
            target="_blank"
            className="block w-full text-center bg-[#C04000] hover:bg-[#A03600] text-white py-4 rounded-xl font-bold transition-all shadow-lg uppercase tracking-widest"
          >
            Pedir por WhatsApp
          </a>
        </div>
      </div>
    </div>
  </div>
);

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'asados' | 'picaditas' | 'tradicion'>('all');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const filteredItems = activeCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'asados', label: 'Asados' },
    { id: 'picaditas', label: 'Picaditas' },
    { id: 'tradicion', label: 'Tradición' }
  ];

  return (
    <section id="menu" className="py-24 bg-[#FCF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <span className="text-[#C04000] font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Nuestra Carta</span>
        <h2 className="font-serif text-4xl md:text-5xl text-[#3D2B1F] mb-6">Nuestras Especialidades</h2>
        <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full mb-10"></div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-6 py-2 rounded-full font-bold transition-all border-2 text-sm uppercase tracking-widest ${
                activeCategory === cat.id 
                ? 'bg-[#3D2B1F] border-[#3D2B1F] text-white shadow-lg' 
                : 'border-gray-200 text-gray-500 hover:border-[#D4AF37] hover:text-[#D4AF37]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group border border-gray-100 flex flex-col animate-fadeIn"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button 
                    onClick={() => setSelectedItem(item)}
                    className="bg-white text-[#3D2B1F] px-6 py-3 rounded-xl font-bold uppercase text-xs tracking-widest shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all"
                  >
                    Detalles
                  </button>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-serif text-xl text-[#3D2B1F]">{item.title}</h4>
                  <span className="text-[#D4AF37] font-bold">{item.price}</span>
                </div>
                <p className="text-gray-500 text-sm italic mb-6 line-clamp-2">{item.description}</p>
                <button 
                  onClick={() => setSelectedItem(item)}
                  className="mt-auto text-[#C04000] font-bold uppercase text-xs tracking-widest flex items-center hover:translate-x-1 transition-transform"
                >
                  Ver más <span className="ml-2">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <MenuModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </section>
  );
};

export default MenuSection;
