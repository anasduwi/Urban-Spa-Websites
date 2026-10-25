/**
 * KONFIGURASI SITUS — satu tempat untuk mengganti identitas & kontak.
 * Kosongkan `email` / `instagram` bila belum ada — komponen menyembunyikannya otomatis.
 */
export const SITE = {
  name: 'Urban Spa',
  tagline: 'Body, mind & soul — spa & pijat panggilan ke rumah Anda',
  /** Nomor WhatsApp pemesanan (format internasional tanpa "+"). */
  waNumber: '6285288580694',
  /** Nomor telepon tampilan. */
  phoneDisplay: '0852-8858-0694',
  email: '',
  instagram: '',
  hours: 'Buka 24 Jam Setiap Hari',
  defaultWaMessage: 'Halo Urban Spa, saya ingin bertanya tentang layanan spa & pijat panggilan.',
  bookingWaMessage: 'Halo Urban Spa, saya ingin memesan layanan spa & pijat panggilan.',
} as const;
