import type { NavLink } from '@/types';

/** Daftar menu navigasi anchor. Urutan = urutan section di halaman. */
export const NAV_LINKS: NavLink[] = [
  { id: 'beranda', label: 'Beranda', href: '#beranda' },
  { id: 'layanan', label: 'Layanan', href: '#layanan' },
  { id: 'keunggulan', label: 'Keunggulan', href: '#keunggulan' },
  { id: 'harga', label: 'Harga', href: '#harga' },
  { id: 'area', label: 'Area', href: '#area' },
  { id: 'testimoni', label: 'Testimoni', href: '#testimoni' },
  { id: 'faq', label: 'FAQ', href: '#faq' },
  { id: 'kontak', label: 'Kontak', href: '#kontak' },
];
