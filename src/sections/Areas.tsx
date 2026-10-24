import { MapPin } from 'lucide-react';
import { AREAS } from '@/data/mock';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

/** Section area cakupan berupa chip per wilayah. */
export function Areas() {
  return (
    <section id="area" className="py-16 md:py-24 bg-blush-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Area Layanan"
          title="Wilayah Jangkauan Kami"
          subtitle="Daftar wilayah berikut adalah contoh. Ganti dengan area operasional yang sebenarnya."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {AREAS.map((area) => (
            <Card key={area.id} className="reveal">
              <h3 className="inline-flex items-center gap-2 font-display text-xl font-semibold text-brand-800 mb-4">
                <MapPin className="h-5 w-5 text-accent-500" aria-hidden />
                {area.city}
              </h3>
              <div className="flex flex-wrap gap-2">
                {area.districts.map((d) => (
                  <Badge key={d} tone="brand">
                    {d}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
