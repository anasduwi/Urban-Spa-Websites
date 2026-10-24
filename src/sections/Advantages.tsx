import { ADVANTAGES } from '@/data/mock';
import { SectionHeading } from '@/components/ui/SectionHeading';

/** Section keunggulan: 3 item dengan ikon. */
export function Advantages() {
  return (
    <section id="keunggulan" className="py-16 md:py-24 bg-blush-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Keunggulan"
          title="Kenapa Memilih Layanan Kami"
          subtitle="Poin-poin berikut adalah contoh. Sesuaikan dengan keunggulan yang sebenarnya."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {ADVANTAGES.map((adv) => {
            const Icon = adv.icon;
            return (
              <article key={adv.id} className="reveal rounded-card bg-white p-7 shadow-soft text-center">
                <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent-400/15 text-accent-500">
                  <Icon className="h-7 w-7" aria-hidden />
                </span>
                <h3 className="font-display text-xl font-semibold text-brand-800 mb-2">
                  {adv.title}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed">{adv.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
