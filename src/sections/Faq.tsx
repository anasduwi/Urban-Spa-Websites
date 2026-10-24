import { FAQS } from '@/data/mock';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Accordion } from '@/components/ui/Accordion';

/** Section FAQ dengan accordion. */
export function Faq() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-blush-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Pertanyaan yang Sering Diajukan"
          subtitle="Jawaban berikut adalah contoh. Sesuaikan dengan kebijakan operasional yang sebenarnya."
        />
        <Accordion items={FAQS} />
      </div>
    </section>
  );
}
