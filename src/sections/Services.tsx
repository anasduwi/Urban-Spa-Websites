import { useState } from 'react';
import { SERVICES, CATEGORY_LABELS } from '@/data/mock';
import type { ServiceCategory } from '@/types';
import { cn } from '@/utils/cn';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';

type Filter = 'all' | ServiceCategory;

const FILTERS: Array<{ id: Filter; label: string }> = [
  { id: 'all', label: 'Semua' },
  { id: 'massage', label: CATEGORY_LABELS.massage },
  { id: 'treatment', label: CATEGORY_LABELS.treatment },
  { id: 'add-on', label: CATEGORY_LABELS['add-on'] },
];

/** Grid layanan dengan tab filter kategori. */
export function Services() {
  const [filter, setFilter] = useState<Filter>('all');
  const visible = SERVICES.filter((s) => filter === 'all' || s.category === filter);

  return (
    <section id="layanan" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Layanan Kami"
          title="Pilih Perawatan Sesuai Kebutuhan Anda"
          subtitle="Seluruh daftar layanan di bawah ini adalah contoh untuk pengembangan tampilan."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-10" role="tablist" aria-label="Filter kategori layanan">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={cn(
                'rounded-full px-5 py-2.5 text-sm font-semibold transition-colors',
                filter === f.id
                  ? 'bg-brand-700 text-white shadow-soft'
                  : 'bg-white text-brand-800 border border-brand-700/15 hover:border-brand-700/40',
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="text-center text-ink-500">Tidak ada layanan pada kategori ini.</p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
