import { MapPin, Star } from 'lucide-react';
import type { Testimonial } from '@/types';
import { Card } from '@/components/ui/Card';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

/** Kartu testimoni: rating bintang, teks, nama, area. */
export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="reveal flex flex-col h-full">
      <div className="flex gap-1 mb-3" aria-label={`Rating ${testimonial.rating} dari 5`}>
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            className={
              i < testimonial.rating
                ? 'h-4 w-4 fill-accent-500 text-accent-500'
                : 'h-4 w-4 text-ink-500/30'
            }
            aria-hidden
          />
        ))}
      </div>
      <blockquote className="text-sm text-ink-900 leading-relaxed flex-1">
        “{testimonial.text}”
      </blockquote>
      <footer className="mt-4 pt-4 border-t border-brand-700/10">
        <p className="font-semibold text-brand-800 text-sm">{testimonial.name}</p>
        <p className="inline-flex items-center gap-1 text-xs text-ink-500 mt-0.5">
          <MapPin className="h-3 w-3" aria-hidden />
          {testimonial.area}
        </p>
      </footer>
    </Card>
  );
}
