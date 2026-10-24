/** Format angka menjadi Rupiah, contoh: 150000 -> "Rp150.000". */
export function formatRupiah(value: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(value);
}

/** Format durasi menit, contoh: 90 -> "90 mnt". */
export function formatDurasi(minutes: number): string {
  return `${minutes} mnt`;
}
