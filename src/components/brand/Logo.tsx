import { useState } from 'react';
import { cn } from '@/utils/cn';

interface LogoProps {
  /** Kelas ukuran, default h-10. Kirim h-11/h-12 dari pemanggil bila perlu. */
  className?: string;
}

/**
 * Logo resmi Urban Spa — aset vektor hasil ekstraksi dari
 * SIGNAGE URBAN SPA-1.pdf, disimpan di public/brand/logo.svg.
 * Jika aset gagal dimuat, tampilkan wordmark teks sementara
 * (BUKAN logo asli — ganti file asetnya, bukan komponen ini).
 */
export function Logo({ className = 'h-10' }: LogoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className={cn('flex items-center gap-2.5', className)}
        role="img"
        aria-label="Urban Spa"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-700 font-display text-lg font-bold text-white">
          U
        </span>
        <span className="font-display text-lg font-semibold text-brand-800">Urban Spa</span>
      </span>
    );
  }

  return (
    <img
      src="/brand/logo.svg"
      alt="Urban Spa — body mind soul"
      className={cn('w-auto rounded-lg', className)}
      onError={() => setFailed(true)}
    />
  );
}
