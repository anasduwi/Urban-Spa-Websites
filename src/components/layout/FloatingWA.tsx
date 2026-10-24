import { MessageCircle } from 'lucide-react';
import { SITE } from '@/config/site';
import { buildWaLink } from '@/utils/whatsapp';

/** Tombol WhatsApp melayang kanan-bawah, selalu terlihat. */
export function FloatingWA() {
  const waLink = buildWaLink(SITE.waNumber, SITE.bookingWaMessage);
  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp untuk reservasi"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" aria-hidden />
      <MessageCircle className="h-7 w-7 relative" aria-hidden />
    </a>
  );
}
