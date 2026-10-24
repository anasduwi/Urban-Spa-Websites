import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface BadgeProps {
  children: ReactNode;
  tone?: 'accent' | 'brand' | 'neutral';
  /** true saat badge tampil di atas background gelap (teks terang agar kontras). */
  dark?: boolean;
  className?: string;
}

const TONES: Record<string, string> = {
  accent: 'bg-accent-400/15 text-accent-500 border-accent-400/40',
  brand: 'bg-brand-700/10 text-brand-700 border-brand-700/20',
  neutral: 'bg-ink-900/5 text-ink-500 border-ink-900/10',
};

const DARK_TONES: Record<string, string> = {
  accent: 'bg-white/10 text-accent-300 border-accent-300/40',
  brand: 'bg-white/10 text-blush-100 border-white/25',
  neutral: 'bg-white/10 text-blush-100 border-white/25',
};

/** Label kecil berbentuk pill. */
export function Badge({ children, tone = 'neutral', dark = false, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold',
        dark ? DARK_TONES[tone] : TONES[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
