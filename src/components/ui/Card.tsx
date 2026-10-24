import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface CardProps {
  children: ReactNode;
  className?: string;
}

/** Wrapper card generik: bg putih, radius, shadow lembut. */
export function Card({ children, className }: CardProps) {
  return (
    <div className={cn('bg-white rounded-card shadow-soft p-6', className)}>{children}</div>
  );
}
