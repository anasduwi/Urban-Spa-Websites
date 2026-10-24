/**
 * MOCK DATA — SEMUA DATA DI SINI ADALAH CONTOH untuk menguji tampilan.
 * Bukan data aktual. Ganti dengan data asli tanpa mengubah komponen UI.
 */
import {
  Baby,
  BatteryCharging,
  Droplets,
  Flame,
  Flower,
  Flower2,
  Footprints,
  Hand,
  Heart,
  HeartHandshake,
  Smile,
  Sparkles,
  Sprout,
} from 'lucide-react';
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

/** Kategori layanan generik (contoh). */
export const SERVICES: ServiceItem[] = [
  {
    id: 'refleksi',
    title: 'Pijat Refleksi',
    category: 'massage',
    description: 'Tekanan titik refleksi kaki untuk melancarkan peredaran darah.',
    durationMinutes: [60, 90],
    priceFrom: 100000,
    icon: Footprints,
  },
  {
    id: 'tradisional',
    title: 'Pijat Tradisional',
    category: 'massage',
    description: 'Pijatan khas untuk meredakan pegal dan ketegangan otot.',
    durationMinutes: [60, 90, 120],
    priceFrom: 120000,
    icon: Hand,
    featured: true,
  },
  {
    id: 'full-body',
    title: 'Full Body Massage',
    category: 'massage',
    description: 'Pijatan menyeluruh dari kepala hingga kaki untuk relaksasi total.',
    durationMinutes: [90, 120],
    priceFrom: 150000,
    icon: Sparkles,
    featured: true,
  },
  {
    id: 'capek',
    title: 'Pijat Capek',
    category: 'massage',
    description: 'Pijatan ringan melepas lelah setelah aktivitas seharian.',
    durationMinutes: [60, 90],
    priceFrom: 100000,
    icon: BatteryCharging,
  },
  {
    id: 'couple',
    title: 'Pijat Couple',
    category: 'massage',
    description: 'Sesi pijat berpasangan dengan dua terapis sekaligus.',
    durationMinutes: [90, 120],
    priceFrom: 280000,
    icon: HeartHandshake,
  },
  {
    id: 'bayi',
    title: 'Pijat Bayi',
    category: 'massage',
    description: 'Sentuhan lembut untuk kenyamanan dan kualitas tidur si kecil.',
    durationMinutes: [30, 60],
    priceFrom: 80000,
    icon: Baby,
  },
  {
    id: 'scrub',
    title: 'Body Scrub',
    category: 'treatment',
    description: 'Lulur badan untuk mengangkat sel kulit mati dan mencerahkan.',
    durationMinutes: [60, 90],
    priceFrom: 130000,
    icon: Droplets,
  },
  {
    id: 'masker',
    title: 'Body Masker',
    category: 'treatment',
    description: 'Masker tubuh menutrisi dan melembapkan kulit.',
    durationMinutes: [60],
    priceFrom: 120000,
    icon: Flower2,
  },
  {
    id: 'totok',
    title: 'Totok Wajah',
    category: 'treatment',
    description: 'Teknik akupresur wajah untuk kesegaran dan relaksasi.',
    durationMinutes: [45, 60],
    priceFrom: 90000,
    icon: Smile,
  },
  {
    id: 'kerik',
    title: 'Pijat Kerik',
    category: 'add-on',
    description: 'Layanan tambahan kerikan tradisional per area badan.',
    durationMinutes: [30],
    priceFrom: 50000,
    icon: Flower,
  },
  {
    id: 'ear-candle',
    title: 'Ear Candle',
    category: 'add-on',
    description: 'Terapi lilin telinga untuk sensasi rileks dan nyaman.',
    durationMinutes: [30],
    priceFrom: 60000,
    icon: Flame,
  },
  {
    id: 'hamil',
    title: 'Pijat Hamil',
    category: 'massage',
    description: 'Pijatan aman dan nyaman khusus ibu hamil oleh terapis terlatih.',
    durationMinutes: [60, 90],
    priceFrom: 140000,
    icon: Heart,
  },
];

/** Daftar harga CONTOH (angka fiktif untuk uji tampilan). */
export const PRICES: PriceItem[] = [
  {
    serviceId: 'refleksi',
    name: 'Pijat Refleksi',
    category: 'massage',
    variants: [
      { duration: 60, price: 100000 },
      { duration: 90, price: 140000 },
    ],
  },
  {
    serviceId: 'tradisional',
    name: 'Pijat Tradisional',
    category: 'massage',
    variants: [
      { duration: 60, price: 120000 },
      { duration: 90, price: 160000 },
      { duration: 120, price: 200000 },
    ],
  },
  {
    serviceId: 'full-body',
    name: 'Full Body Massage',
    category: 'massage',
    variants: [
      { duration: 90, price: 180000 },
      { duration: 120, price: 230000 },
    ],
    note: 'Termasuk aromaterapi pilihan (contoh)',
  },
  {
    serviceId: 'couple',
    name: 'Pijat Couple',
    category: 'massage',
    variants: [
      { duration: 90, price: 320000 },
      { duration: 120, price: 400000 },
    ],
    note: 'Harga untuk 2 orang (contoh)',
  },
  {
    serviceId: 'scrub',
    name: 'Body Scrub',
    category: 'treatment',
    variants: [
      { duration: 60, price: 130000 },
      { duration: 90, price: 170000 },
    ],
  },
  {
    serviceId: 'totok',
    name: 'Totok Wajah',
    category: 'treatment',
    variants: [
      { duration: 45, price: 90000 },
      { duration: 60, price: 110000 },
    ],
  },
  {
    serviceId: 'kerik',
    name: 'Pijat Kerik (add-on)',
    category: 'add-on',
    variants: [{ duration: 30, price: 50000 }],
  },
  {
    serviceId: 'ear-candle',
    name: 'Ear Candle (add-on)',
    category: 'add-on',
    variants: [{ duration: 30, price: 60000 }],
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

/** Area cakupan CONTOH — ganti dengan wilayah operasional asli. */
export const AREAS: Area[] = [
  {
    id: 'jakarta',
    city: 'Jakarta (Contoh)',
    districts: ['Jakarta Selatan', 'Jakarta Timur', 'Jakarta Barat', 'Jakarta Utara', 'Jakarta Pusat'],
  },
  {
    id: 'penyangga',
    city: 'Kota Penyangga (Contoh)',
    districts: ['Depok', 'Bekasi', 'Tangerang', 'Bogor'],
  },
];

/** Testimoni CONTOH — nama disamarkan, isi fiktif. */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Ibu R. (contoh)',
    area: 'Jakarta Selatan',
    rating: 5,
    text: 'Terapisnya datang tepat waktu dan sangat sopan. Badan terasa segar setelah sesi 90 menit. (Contoh testimoni)',
  },
  {
    id: 't2',
    name: 'Bapak A. (contoh)',
    area: 'Bekasi',
    rating: 5,
    text: 'Praktis sekali, tidak perlu keluar rumah. Reservasi via WhatsApp juga cepat direspons. (Contoh testimoni)',
  },
  {
    id: 't3',
    name: 'Ibu S. (contoh)',
    area: 'Depok',
    rating: 4,
    text: 'Aromaterapinya wangi dan menenangkan. Cocok untuk melepas penat akhir pekan. (Contoh testimoni)',
  },
];

/** FAQ CONTOH. */
export const FAQS: Faq[] = [
  {
    id: 'f1',
    question: 'Bagaimana cara memesan layanan? (contoh)',
    answer:
      'Hubungi kami melalui tombol WhatsApp atau formulir kontak di bawah. Sertakan nama, layanan yang diinginkan, dan alamat. Ini alur contoh — sesuaikan dengan proses operasional Anda.',
  },
  {
    id: 'f2',
    question: 'Apakah layanan tersedia 24 jam? (contoh)',
    answer:
      'Jam operasional pada contoh ini 24 jam setiap hari. Ganti jawaban ini dengan jam operasional yang sebenarnya.',
  },
  {
    id: 'f3',
    question: 'Wilayah mana saja yang dilayani? (contoh)',
    answer:
      'Lihat daftar area cakupan pada bagian Area. Wilayah di halaman ini hanyalah contoh dan perlu diganti dengan wilayah operasional asli.',
  },
  {
    id: 'f4',
    question: 'Bagaimana metode pembayarannya? (contoh)',
    answer:
      'Contoh: pembayaran tunai setelah layanan selesai atau transfer bank. Sesuaikan dengan kebijakan pembayaran yang sebenarnya.',
  },
  {
    id: 'f5',
    question: 'Apakah privasi saya terjaga? (contoh)',
    answer:
      'Kami mengutamakan profesionalitas dan kenyamanan pelanggan. Seluruh sesi dilakukan secara profesional sesuai standar layanan.',
  },
];

export const CATEGORY_LABELS: Record<string, string> = {
  massage: 'Pijat',
  treatment: 'Treatment',
  'add-on': 'Add-on',
};
