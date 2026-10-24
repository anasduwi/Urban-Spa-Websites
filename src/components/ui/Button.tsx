import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils/cn';

type Variant = 'primary' | 'wa' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

const VARIANTS: Record<Variant, string> = {
  primary: 'bg-brand-700 text-white hover:bg-brand-800 shadow-soft',
  wa: 'bg-[#25D366] text-white hover:brightness-95 shadow-soft',
  outline:
    'border-2 border-brand-700 text-brand-700 hover:bg-brand-700 hover:text-white',
  ghost: 'text-brand-700 hover:bg-blush-100',
};

const SIZES: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  ariaLabel?: string;
}

/** Tombol reusable: render <a> jika href ada, <button> jika tidak. */
export function Button({
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  icon,
  children,
  className,
  onClick,
  type = 'button',
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    VARIANTS[variant],
    SIZES[size],
    className,
  );
  const content = (
    <>
      {icon}
      {children}
    </>
  );
  if (href) {
    const anchorProps: AnchorHTMLAttributes<HTMLAnchorElement> = {
      className: classes,
      'aria-label': ariaLabel,
    };
    if (external) {
      anchorProps.target = '_blank';
      anchorProps.rel = 'noopener noreferrer';
    }
    return (
      <a href={href} {...anchorProps}>
        {content}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes} aria-label={ariaLabel}>
      {content}
    </button>
  );
}
