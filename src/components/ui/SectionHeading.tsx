import { cn } from '@/utils/cn';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  dark?: boolean;
}

/** Judul section terpusat: eyebrow + judul + subjudul opsional. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-10 md:mb-14',
        align === 'center' ? 'text-center mx-auto max-w-2xl' : 'text-left max-w-3xl',
      )}
    >
      <p
        className={cn(
          'text-sm font-bold uppercase tracking-[0.2em] mb-3',
          dark ? 'text-accent-300' : 'text-brand-700',
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          'font-display text-3xl md:text-4xl font-semibold text-balance',
          dark ? 'text-white' : 'text-brand-800',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn('mt-4 text-base md:text-lg', dark ? 'text-blush-100/80' : 'text-ink-500')}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
