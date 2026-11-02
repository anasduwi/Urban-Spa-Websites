/**
 * DATA LAYANAN & HARGA — tarif resmi Urban Spa.
 * Diambil dari satu sumber ini; komponen UI hanya menampilkan.
 */
import { Droplets, Flower2, Hand, HeartHandshake, Sparkles, Sprout } from 'lucide-react';
import type {
  Advantage,
  Area,
  Faq,
  HeroSlide,
  PriceItem,
  ServiceItem,
  Testimonial,
} from '@/types';

/** Slide hero generik (contoh). */
export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-1',
    eyebrow: 'Layanan 24 Jam',
    title: 'Spa & Pijat Panggilan ke Rumah Anda',
    subtitle:
      'Nikmati relaksasi profesional di rumah, kos, apartemen, atau hotel — kapan saja, tanpa perlu keluar rumah.',
  },
  {
    id: 'slide-2',
    eyebrow: 'Terapis Profesional',
    title: 'Tenaga Terlatih, Pelayanan Sopan',
    subtitle:
      'Ditangani terapis berpengalaman dengan standar pelayanan yang ramah dan profesional.',
  },
  {
    id: 'slide-3',
    eyebrow: 'Bahan Alami',
    title: 'Aroma & Bahan Alami Pilihan',
    subtitle:
      'Minyak esensial dan bahan tradisional pilihan untuk pengalaman relaksasi yang menenangkan.',
  },
];

/** Daftar layanan treatment Urban Spa. */
export const SERVICES: ServiceItem[] = [
  {
    id: 'tradisional',
    title: 'Spa Tradisional',
    category: 'treatment',
    description: 'Pijatan tradisional untuk meredakan pegal dan ketegangan otot.',
    durationMinutes: [60, 120],
    priceFrom: 150000,
    icon: Hand,
    featured: true,
  },
  {
    id: 'aromaterapi',
    title: 'Spa Aromaterapi',
    category: 'treatment',
    description: 'Pijatan relaksasi dengan minyak esensial aroma menenangkan.',
    durationMinutes: [60, 120],
    priceFrom: 150000,
    icon: Flower2,
    featured: true,
  },
  {
    id: 'bodyscrub',
    title: 'Body Scrub',
    category: 'treatment',
    description: 'Lulur badan untuk mengangkat sel kulit mati dan mencerahkan kulit.',
    durationMinutes: [60, 120],
    priceFrom: 150000,
    icon: Droplets,
  },
  {
    id: 'full-body-treatment',
    title: 'Full Body Treatment',
    category: 'treatment',
    description: 'Paket perawatan lengkap 120 menit: pijat + scrub + aromaterapi.',
    durationMinutes: [120],
    priceFrom: 400000,
    icon: Sparkles,
    featured: true,
  },
];

/** Daftar harga resmi Urban Spa. */
export const PRICES: PriceItem[] = [
  {
    serviceId: 'tradisional',
    name: 'Spa Tradisional',
    category: 'treatment',
    variants: [
      { duration: 60, price: 150000 },
      { duration: 120, price: 300000 },
    ],
  },
  {
    serviceId: 'aromaterapi',
    name: 'Spa Aromaterapi',
    category: 'treatment',
    variants: [
      { duration: 60, price: 150000 },
      { duration: 120, price: 300000 },
    ],
  },
  {
    serviceId: 'bodyscrub',
    name: 'Body Scrub',
    category: 'treatment',
    variants: [
      { duration: 60, price: 150000 },
      { duration: 120, price: 300000 },
    ],
  },
  {
    serviceId: 'full-body-treatment',
    name: 'Full Body Treatment',
    category: 'treatment',
    variants: [{ duration: 120, price: 400000 }],
    note: 'Paket lengkap 120 menit',
  },
];

/** Keunggulan generik (contoh). */
export const ADVANTAGES: Advantage[] = [
  {
    id: 'aroma',
    title: 'Aroma Esensial',
    description:
      'Pilihan wewangian menenangkan seperti lavender, jahe, dan lemon untuk suasana relaksasi.',
    icon: Flower2,
  },
  {
    id: 'alami',
    title: 'Bahan Alami',
    description:
      'Menggunakan bahan-bahan alami pilihan yang aman dan nyaman di kulit.',
    icon: Sprout,
  },
  {
    id: 'terapis',
    title: 'Terapis Profesional',
    description:
      'Ditangani tenaga terlatih yang mengutamakan kesopanan dan profesionalitas.',
    icon: HeartHandshake,
  },
];

/** Area cakupan operasional: Jabodetabek. */
export const AREAS: Area[] = [
  {
    id: 'jakarta',
    city: 'Jakarta',
    districts: ['Jakarta Selatan', 'Jakarta Timur', 'Jakarta Barat', 'Jakarta Utara', 'Jakarta Pusat'],
  },
  {
    id: 'penyangga',
    city: 'Bogor, Depok, Tangerang, Bekasi',
    districts: ['Bogor', 'Depok', 'Tangerang', 'Tangerang Selatan', 'Bekasi'],
  },
];

/**
 * Testimoni DUMMY untuk keperluan tampilan — TODO: ganti dengan testimoni asli pelanggan.
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Ibu Ratna',
    area: 'Jakarta Selatan',
    rating: 5,
    text: 'Terapisnya datang tepat waktu dan sangat sopan. Badan terasa segar setelah sesi 90 menit, pijatannya pas tidak terlalu keras.',
  },
  {
    id: 't2',
    name: 'Bapak Andi',
    area: 'Bekasi',
    rating: 5,
    text: 'Praktis sekali, tidak perlu keluar rumah. Reservasi via WhatsApp cepat direspons, malam itu juga langsung dapat jadwal.',
  },
  {
    id: 't3',
    name: 'Ibu Sinta',
    area: 'Depok',
    rating: 4,
    text: 'Aromaterapinya wangi dan menenangkan. Cocok untuk melepas penat setelah seharian kerja, tidurnya jadi lebih nyenyak.',
  },
  {
    id: 't4',
    name: 'Ibu Dewi',
    area: 'Tangerang',
    rating: 5,
    text: 'Sudah tiga kali pesan untuk pijat refleksi. Terapisnya ramah, alat-alatnya bersih dan wangi. Pasti pesan lagi bulan depan.',
  },
  {
    id: 't5',
    name: 'Bapak Hendra',
    area: 'Jakarta Timur',
    rating: 5,
    text: 'Pesan paket couple untuk saya dan istri. Pelayanannya profesional, harganya jelas di depan tanpa biaya tambahan.',
  },
  {
    id: 't6',
    name: 'Kak Nabila',
    area: 'Bogor',
    rating: 4,
    text: 'Lulurannya enak, kulit terasa halus dan wangi. Datangnya sedikit terlambat karena macet, tapi dikabari dulu via WhatsApp jadi tidak masalah.',
  },
];

/** FAQ CONTOH. */
export const FAQS: Faq[] = [
  {
    id: 'f1',
    question: 'Bagaimana cara memesan layanan?',
    answer:
      'Hubungi kami melalui tombol WhatsApp atau isi formulir kontak di bawah. Sertakan nama, layanan yang diinginkan, dan alamat lengkap Anda.',
  },
  {
    id: 'f2',
    question: 'Apakah layanan tersedia 24 jam?',
    answer:
      'Ya, kami buka 24 jam setiap hari. Anda bisa memesan kapan saja, termasuk malam hari dan akhir pekan.',
  },
  {
    id: 'f3',
    question: 'Wilayah mana saja yang dilayani?',
    answer:
      'Kami melayani seluruh Jabodetabek: Jakarta (Selatan, Timur, Barat, Utara, Pusat) serta Bogor, Depok, Tangerang, Tangerang Selatan, dan Bekasi. Lihat daftar lengkapnya pada bagian Area.',
  },
  {
    id: 'f4',
    question: 'Bagaimana metode pembayarannya?',
    answer:
      'Pembayaran tunai setelah layanan selesai atau transfer bank. Detail pembayaran akan dikonfirmasi via WhatsApp saat pemesanan.',
  },
  {
    id: 'f5',
    question: 'Apakah privasi saya terjaga?',
    answer:
      'Kami mengutamakan profesionalitas dan kenyamanan pelanggan. Seluruh sesi dilakukan secara profesional sesuai standar layanan.',
  },
];

export const CATEGORY_LABELS: Record<string, string> = {
  massage: 'Pijat',
  treatment: 'Treatment',
  'add-on': 'Add-on',
};
