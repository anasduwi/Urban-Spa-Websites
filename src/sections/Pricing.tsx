import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { PRICES, CATEGORY_LABELS } from '@/data/mock';
import { SITE } from '@/config/site';
import { buildWaLink } from '@/utils/whatsapp';
import { cn } from '@/utils/cn';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PriceTable } from '@/components/PriceTable';
import { Button } from '@/components/ui/Button';

type Filter = 'all' | 'massage' | 'treatment' | 'add-on';

/** Section daftar harga dengan tab kategori + catatan contoh + CTA. */
export function Pricing() {
  const [filter, setFilter] = useState<Filter>('all');
  const visible = PRICES.filter((p) => filter === 'all' || p.category === filter);
  const waLink = buildWaLink(SITE.waNumber, `${SITE.bookingWaMessage} Saya ingin bertanya tentang daftar harga.`);

  return (
    <section id="harga" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Daftar Harga"
          title="Tarif Layanan"
          subtitle="Seluruh angka harga di bawah ini adalah CONTOH untuk uji tampilan, bukan tarif sebenarnya."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-8" role="tablist" aria-label="Filter kategori harga">
          {(['all', 'massage', 'treatment', 'add-on'] as Filter[]).map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={cn(
                'rounded-full px-5 py-2.5 text-sm font-semibold transition-colors',
                filter === f
                  ? 'bg-brand-700 text-white shadow-soft'
                  : 'bg-white text-brand-800 border border-brand-700/15 hover:border-brand-700/40',
              )}
            >
              {f === 'all' ? 'Semua' : CATEGORY_LABELS[f]}
            </button>
          ))}
        </div>

        <PriceTable items={visible} />

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
