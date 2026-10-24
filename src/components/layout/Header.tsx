import { useEffect, useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import { NAV_LINKS } from '@/config/navigation';
import { SITE } from '@/config/site';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useLockBody } from '@/hooks/useLockBody';
import { buildWaLink } from '@/utils/whatsapp';
import { cn } from '@/utils/cn';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/brand/Logo';

/** Header sticky: logo + nav desktop + drawer mobile. */
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(NAV_LINKS.map((l) => l.id));
  useLockBody(open);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const waLink = buildWaLink(SITE.waNumber, SITE.defaultWaMessage);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 bg-white/95 backdrop-blur border-b transition-shadow',
        scrolled ? 'shadow-soft border-brand-700/10' : 'border-transparent',
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[72px]">
        <a href="#beranda" className="flex items-center gap-2.5" aria-label={`${SITE.name} — Beranda`}>
          <Logo className="h-11" />
          <span className="leading-tight hidden sm:block">
            <span className="block font-display font-semibold text-brand-800 text-lg">
              {SITE.name}
            </span>
            <span className="block text-xs text-ink-500">{SITE.hours}</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Navigasi utama">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                active === link.id
                  ? 'bg-brand-700 text-white'
                  : 'text-brand-800 hover:bg-blush-100',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={waLink} external variant="wa" size="sm" icon={<MessageCircle className="h-4 w-4" aria-hidden />}>
            Pesan Sekarang
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full text-brand-800 hover:bg-blush-100"
          aria-label="Buka menu navigasi"
          aria-expanded={open}
        >
          <Menu className="h-6 w-6" aria-hidden />
        </button>
      </div>

      {/* Drawer mobile */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Menu navigasi">
          <button
            type="button"
            aria-label="Tutup menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-brand-900/50 cursor-default"
          />
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-lift flex flex-col">
            <div className="flex items-center justify-between px-5 h-[72px] border-b border-brand-700/10">
              <span className="font-display font-semibold text-brand-800">{SITE.name}</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-brand-800 hover:bg-blush-100"
                aria-label="Tutup menu navigasi"
              >
                <X className="h-6 w-6" aria-hidden />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto p-4" aria-label="Navigasi mobile">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'block rounded-xl px-4 py-3 font-semibold transition-colors',
                    active === link.id
                      ? 'bg-brand-700 text-white'
                      : 'text-brand-800 hover:bg-blush-100',
                  )}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="p-4 border-t border-brand-700/10">
              <Button
                href={waLink}
                external
                variant="wa"
                className="w-full"
                icon={<MessageCircle className="h-5 w-5" aria-hidden />}
              >
                Pesan via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
