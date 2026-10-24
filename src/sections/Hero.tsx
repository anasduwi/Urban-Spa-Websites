import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, MessageCircle, ShieldCheck, Tag } from 'lucide-react';
import { HERO_SLIDES } from '@/data/mock';
import { SITE } from '@/config/site';
import { buildWaLink } from '@/utils/whatsapp';
import { cn } from '@/utils/cn';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

/** Hero dengan slider manual: prev/next, dots, autoplay + pause on hover. */
export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = HERO_SLIDES.length;
  const slide = HERO_SLIDES[index] ?? HERO_SLIDES[0];

  const go = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i + dir + count) % count),
    [count],
  );

  useEffect(() => {
    if (paused || count <= 1) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), 6000);
    return () => clearInterval(t);
  }, [paused, count]);

  const waLink = buildWaLink(SITE.waNumber, SITE.bookingWaMessage);

  return (
    <section
      id="beranda"
      className="relative overflow-hidden bg-brand-900 text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Dekorasi latar */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-600/40 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-accent-400/15 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
        <div className="max-w-3xl">
          <Badge tone="accent" dark className="mb-5">
            <Clock className="h-3 w-3" aria-hidden />
            {slide.eyebrow}
          </Badge>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-balance">
            {slide.title}
          </h1>
          <p className="mt-5 text-base md:text-lg text-blush-100/80 leading-relaxed max-w-2xl">
            {slide.subtitle}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button
              href={waLink}
              external
              variant="wa"
              size="lg"
              icon={<MessageCircle className="h-5 w-5" aria-hidden />}
            >
              Pesan via WhatsApp
            </Button>
            <Button href="#harga" variant="outline" size="lg" className="!border-blush-100/40 !text-white hover:!bg-white hover:!text-brand-800">
              <Tag className="h-5 w-5" aria-hidden />
              Lihat Daftar Harga
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-blush-100/70">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-accent-300" aria-hidden />
              Terapis profesional
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-accent-300" aria-hidden />
              {SITE.hours}
            </span>
          </div>
        </div>

        {/* Kontrol slider */}
        {count > 1 && (
          <div className="mt-10 flex items-center gap-4">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Slide sebelumnya"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-blush-100/30 hover:bg-white hover:text-brand-800 transition-colors"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Slide berikutnya"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-blush-100/30 hover:bg-white hover:text-brand-800 transition-colors"
              >
                <ChevronRight className="h-5 w-5" aria-hidden />
              </button>
            </div>
            <div className="flex gap-2" role="tablist" aria-label="Pilih slide">
              {HERO_SLIDES.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Slide ${i + 1}: ${s.eyebrow}`}
                  onClick={() => setIndex(i)}
                  className={cn(
                    'h-2 rounded-full transition-all',
                    i === index ? 'w-8 bg-accent-400' : 'w-2 bg-blush-100/40 hover:bg-blush-100/70',
                  )}
                />
              ))}
            </div>
            <p className="text-sm text-blush-100/60" aria-live="polite">
              {index + 1} / {count}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
