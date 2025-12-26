
import React, { useState, useEffect } from 'react';
import { SOCIAL_LINKS, OPENING_HOURS } from '../constants';

const StatusBadge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      // Local time Ecuador (UTC-5)
      const now = new Date();
      const ecuadorTime = new Date(now.toLocaleString("en-US", {timeZone: "America/Guayaquil"}));
      const day = ecuadorTime.getDay();
      const hour = ecuadorTime.getHours();

      let schedule = OPENING_HOURS.weekdays;
      if (day === 0) schedule = OPENING_HOURS.sunday;
      else if (day === 5 || day === 6) schedule = OPENING_HOURS.weekends;

      setIsOpen(hour >= schedule.open && hour < schedule.close);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
      isOpen ? 'bg-green-500/20 text-green-400 border border-green-500/50' : 'bg-red-500/20 text-red-400 border border-red-500/50'
    }`}>
      <span className={`w-2 h-2 rounded-full mr-2 ${isOpen ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></span>
      {isOpen ? 'Abierto ahora' : 'Cerrado por ahora'}
    </div>
  );
};

const Footer: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <footer id="contact" className="bg-[#2D241E] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Form Section */}
        <div className="bg-[#3D2B1F] rounded-3xl p-8 md:p-12 shadow-2xl mb-24 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-bl-full"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <h3 className="font-serif text-3xl md:text-4xl mb-6">¿Tienes alguna duda o quieres reservar?</h3>
              <p className="text-gray-400 mb-8 font-sans leading-relaxed">
                Estamos aquí para atenderte. Envíanos un mensaje y nos pondremos en contacto contigo lo antes posible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#D4AF37]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500">Llámanos</p>
                    <p className="font-bold">+593 98 765 4321</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#D4AF37]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500">Dirección</p>
                    <p className="font-bold">Calle Principal, Ecuador</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#2D241E] p-8 rounded-2xl border border-white/5">
              {formStatus === 'success' ? (
                <div className="text-center py-12 animate-fadeIn">
                  <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h4 className="font-serif text-2xl mb-2 text-white">¡Mensaje Enviado!</h4>
                  <p className="text-gray-400">Gracias por escribirnos. Te responderemos pronto.</p>
                  <button onClick={() => setFormStatus('idle')} className="mt-8 text-[#D4AF37] font-bold uppercase text-xs tracking-widest underline">Enviar otro mensaje</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input 
                      required
                      type="text" 
                      placeholder="Nombre" 
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors w-full"
                    />
                    <input 
                      required
                      type="email" 
                      placeholder="Email" 
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors w-full"
                    />
                  </div>
                  <textarea 
                    required
                    placeholder="Tu mensaje..." 
                    rows={4}
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors w-full resize-none"
                  ></textarea>
                  <button 
                    disabled={formStatus === 'sending'}
                    className="w-full bg-[#C04000] hover:bg-[#A03600] text-white py-4 rounded-xl font-bold transition-all flex items-center justify-center uppercase tracking-widest"
                  >
                    {formStatus === 'sending' ? (
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    ) : 'Enviar Mensaje'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1">
            <h3 className="font-serif text-2xl font-bold mb-6 italic">L&M Casa del Borrego</h3>
            <p className="text-gray-400 mb-6 text-sm">Tradición familiar desde el corazón de Ecuador.</p>
            <StatusBadge />
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-[#D4AF37]">Navegación</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Especialidades</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-[#D4AF37]">Síguenos</h4>
            <div className="flex space-x-4">
              <a href={SOCIAL_LINKS.facebook} target="_blank" className="hover:text-[#D4AF37] transition-colors">Facebook</a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">Instagram</a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-[#D4AF37]">Visítanos</h4>
            <a href={SOCIAL_LINKS.maps} target="_blank" className="text-sm bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 px-4 py-2 rounded-lg hover:bg-[#D4AF37] hover:text-[#3D2B1F] transition-all inline-block">
              Abrir en Google Maps
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 text-center">
          <p className="text-gray-500 text-xs font-sans tracking-widest uppercase">
            &copy; {new Date().getFullYear()} L&M La Casa del Borrego. Tradición de Hogar.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
