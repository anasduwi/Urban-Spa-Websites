import { TESTIMONIALS } from '@/data/mock';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TestimonialCard } from '@/components/TestimonialCard';

/** Grid testimoni contoh. */
export function Testimonials() {
  return (
    <section id="testimoni" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimoni"
          title="Kata Mereka Tentang Layanan Kami"
          subtitle="Seluruh testimoni di bawah ini adalah contoh fiktif untuk keperluan tampilan."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
