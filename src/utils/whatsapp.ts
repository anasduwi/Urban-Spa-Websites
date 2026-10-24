/** Membangun link wa.me dengan pesan prefill yang ter-encode. */
export function buildWaLink(phone: string, message: string): string {
  const digits = phone.replace(/\D/g, '');
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
