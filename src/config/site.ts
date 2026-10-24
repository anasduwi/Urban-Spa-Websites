/**
 * KONFIGURASI SITUS — satu tempat untuk mengganti identitas & kontak.
 * Nama brand sudah Urban Spa. Kontak masih CONTOH — ganti dengan data asli
 * sebelum produksi.
 */
export const SITE = {
  name: 'Urban Spa',
  tagline: 'Body, mind & soul — spa & pijat panggilan ke rumah Anda',
  /** Nomor WhatsApp CONTOH (format internasional tanpa "+"). */
  waNumber: '62812XXXXXXXX',
  /** Nomor telepon tampilan CONTOH. */
  phoneDisplay: '0812-XXXX-XXXX',
  email: 'contoh@email.com',
  instagram: '@contoh_spa',
  hours: 'Buka 24 Jam Setiap Hari',
  defaultWaMessage: 'Halo Urban Spa, saya ingin bertanya tentang layanan spa & pijat panggilan.',
  bookingWaMessage: 'Halo Urban Spa, saya ingin memesan layanan spa & pijat panggilan.',
} as const;
