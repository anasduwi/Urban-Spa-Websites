import { MessageCircle } from 'lucide-react';
import { PRICES } from '@/data/mock';
import { SITE } from '@/config/site';
import { buildWaLink } from '@/utils/whatsapp';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PriceTable } from '@/components/PriceTable';
import { Button } from '@/components/ui/Button';

/** Section daftar harga treatment + CTA. */
export function Pricing() {
  const waLink = buildWaLink(SITE.waNumber, `${SITE.bookingWaMessage} Saya ingin bertanya tentang daftar harga.`);

  return (
    <section id="harga" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Daftar Harga"
          title="Tarif Layanan"
          subtitle="Tarif pasti di bawah ini — hubungi kami untuk konfirmasi jadwal terbaru."
        />

        <PriceTable items={PRICES} />

        <div className="mt-8 rounded-card bg-blush-100 p-6 text-center">
          <p className="text-sm text-ink-500 mb-4">
            Harga dapat berubah sewaktu-waktu. Hubungi kami untuk konfirmasi tarif dan ketersediaan
            jadwal terbaru.
          </p>
          <Button
            href={waLink}
            external
            variant="wa"
            icon={<MessageCircle className="h-5 w-5" aria-hidden />}
          >
            Tanya Harga via WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
