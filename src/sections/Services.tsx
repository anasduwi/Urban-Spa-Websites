import { SERVICES } from '@/data/mock';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';

/** Grid layanan treatment. */
export function Services() {
  return (
    <section id="layanan" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Layanan Kami"
          title="Pilih Perawatan Sesuai Kebutuhan Anda"
          subtitle="Empat treatment andalan dengan tarif pasti — pesan via WhatsApp."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
