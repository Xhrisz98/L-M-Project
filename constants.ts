
import { MenuItem, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Inicio', href: '#home' },
  { label: 'Especialidades', href: '#menu' },
  { label: 'Nosotros', href: '#about' },
  { label: 'Contacto', href: '#contact' },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'asado-1',
    title: 'Borrego Asado',
    description: 'Nuestra especialidad estrella: carne de borrego tierna asada lentamente.',
    longDescription: 'Nuestro Borrego Asado es el corazón de la casa. Seleccionamos ejemplares jóvenes para garantizar ternura, marinados por 12 horas en una mezcla de especias secretas y asados a la leña de eucalipto.',
    ingredients: ['Carne de borrego seleccionada', 'Leña de eucalipto', 'Adobo de la casa', 'Acompañado de papas y ensalada'],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop',
    category: 'asados',
    price: '$15.50'
  },
  {
    id: 'asado-2',
    title: 'Parrillada Completa',
    description: 'Un festín de sabores para compartir en familia.',
    longDescription: 'La parrillada L&M incluye los mejores cortes de res, chuleta de cerdo, pollo, chorizo ambateño y nuestra famosa porción de borrego, todo asado al carbón.',
    ingredients: ['Cortes de res', 'Borrego', 'Chorizo', 'Pollo', 'Guarniciones típicas'],
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop',
    category: 'asados',
    price: '$28.00'
  },
  {
    id: 'picadita-1',
    title: 'Patitas Asadas',
    description: 'Deliciosas y crujientes patitas asadas al carbón.',
    longDescription: 'Una delicia tradicional que requiere técnica y paciencia. Servidas bien crujientes con una salsa de maní artesanal.',
    ingredients: ['Patitas seleccionadas', 'Salsa de maní', 'Especias tradicionales'],
    image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=2070&auto=format&fit=crop',
    category: 'picaditas',
    price: '$8.00'
  },
  {
    id: 'picadita-2',
    title: 'Mollejas Crujientes',
    description: 'Preparadas con nuestra receta secreta, doradas y tiernas.',
    longDescription: 'Limpia y sazonada a la perfección, nuestra molleja es un favorito local por su textura equilibrada y sabor intenso.',
    image: 'https://images.unsplash.com/photo-1532636875304-0c89119d9b4d?q=80&w=2070&auto=format&fit=crop',
    category: 'picaditas',
    price: '$7.50'
  },
  {
    id: 'tradicion-1',
    title: 'Maito Amazónico',
    description: 'Una joya de nuestra selva envuelta en hojas de bijao.',
    longDescription: 'Traemos el oriente a la Sierra. Pescado fresco de río (o trucha) sazonado solo con sal de grano y asado en hojas de bijao.',
    ingredients: ['Pescado fresco', 'Hojas de Bijao', 'Sal de grano', 'Yuca cocida'],
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=2072&auto=format&fit=crop',
    category: 'tradicion',
    price: '$12.00'
  },
  {
    id: 'tradicion-2',
    title: 'Caldo de Gallina Criolla',
    description: 'El sabor del hogar en un plato sustancioso.',
    longDescription: 'Preparado a fuego lento con gallinas criollas de corral, verduras frescas del huerto y el toque justo de cilantro.',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=1925&auto=format&fit=crop',
    category: 'tradicion',
    price: '$6.50'
  }
];

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/p/La-Casa-del-Borrego-61555920032425/',
  maps: 'https://maps.app.goo.gl/CUhY4fDqGm6pyFXG6',
  whatsapp: 'https://wa.me/593987654321'
};

export const OPENING_HOURS = {
  weekdays: { open: 10, close: 20 },
  weekends: { open: 10, close: 22 },
  sunday: { open: 9, close: 18 }
};
