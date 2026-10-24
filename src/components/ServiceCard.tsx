import { ArrowRight, Clock } from 'lucide-react';
import type { ServiceItem } from '@/types';
import { SITE } from '@/config/site';
import { formatDurasi, formatRupiah } from '@/utils/format';
import { buildWaLink } from '@/utils/whatsapp';
import { Badge } from '@/components/ui/Badge';

interface ServiceCardProps {
  service: ServiceItem;
}

/** Kartu layanan: ikon, nama, deskripsi, durasi, harga awal, CTA booking. */
export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;
  const waLink = buildWaLink(
    SITE.waNumber,
    `${SITE.bookingWaMessage} Layanan: ${service.title}.`,
  );

  return (
    <article className="reveal group flex flex-col rounded-card bg-white p-6 shadow-soft transition-shadow hover:shadow-lift">
      <div className="flex items-start justify-between mb-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-700/10 text-brand-700 group-hover:bg-brand-700 group-hover:text-accent-300 transition-colors">
          <Icon className="h-6 w-6" aria-hidden />
        </span>
        {service.featured && <Badge tone="accent">Populer</Badge>}
      </div>
      <h3 className="font-display text-xl font-semibold text-brand-800 mb-2">{service.title}</h3>
      <p className="text-sm text-ink-500 leading-relaxed flex-1">{service.description}</p>
      <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-ink-500">
        <Clock className="h-3.5 w-3.5" aria-hidden />
        {service.durationMinutes.map(formatDurasi).join(' / ')}
      </p>
      <div className="mt-4 pt-4 border-t border-brand-700/10 flex items-center justify-between">
        <div>
          <p className="text-xs text-ink-500">Mulai dari</p>
          <p className="font-bold text-brand-700">{formatRupiah(service.priceFrom)}</p>
        </div>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-accent-500 transition-colors"
          aria-label={`Pesan ${service.title} via WhatsApp`}
        >
          Pesan
          <ArrowRight className="h-4 w-4" aria-hidden />
        </a>
      </div>
    </article>
  );
}
