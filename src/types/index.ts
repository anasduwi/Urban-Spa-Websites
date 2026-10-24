import type { LucideIcon } from 'lucide-react';

export type ServiceCategory = 'massage' | 'treatment' | 'add-on';

export interface ServiceItem {
  id: string;
  title: string;
  category: ServiceCategory;
  description: string;
  durationMinutes: number[];
  priceFrom: number;
  icon: LucideIcon;
  featured?: boolean;
}

export interface PriceVariant {
  duration: number;
  price: number;
}

export interface PriceItem {
  serviceId: string;
  name: string;
  category: ServiceCategory;
  variants: PriceVariant[];
  note?: string;
}

export interface Advantage {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: string;
  name: string;
  area: string;
  rating: number;
  text: string;
}

export interface Faq {
  id: string;
  question: string;
  answer: string;
}

export interface Area {
  id: string;
  city: string;
  districts: string[];
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface HeroSlide {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
}
