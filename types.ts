
export interface MenuItem {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  ingredients?: string[];
  image: string;
  price?: string;
  category: 'asados' | 'picaditas' | 'tradicion';
}

export interface NavLink {
  label: string;
  href: string;
}
