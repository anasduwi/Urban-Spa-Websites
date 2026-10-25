import { AtSign, Clock, Mail, MapPin, Phone } from 'lucide-react';
import { NAV_LINKS } from '@/config/navigation';
import { SITE } from '@/config/site';
import { SERVICES } from '@/data/mock';
import { buildWaLink } from '@/utils/whatsapp';
import { Logo } from '@/components/brand/Logo';

/** Footer: identitas, tautan, layanan, kontak, disclaimer, copyright. */
export function Footer() {
  const waLink = buildWaLink(SITE.waNumber, SITE.defaultWaMessage);
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-900 text-blush-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Logo className="h-11" />
              <span className="font-display font-semibold text-lg">{SITE.name}</span>
            </div>
            <p className="text-blush-100/70 text-sm leading-relaxed">{SITE.tagline}.</p>
            <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-accent-300">
              <Clock className="h-4 w-4" aria-hidden />
              {SITE.hours}
            </p>
          </div>

          <nav aria-label="Navigasi footer">
            <h3 className="font-semibold text-accent-300 mb-4 uppercase text-sm tracking-wider">Menu</h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a href={link.href} className="text-blush-100/80 hover:text-accent-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-semibold text-accent-300 mb-4 uppercase text-sm tracking-wider">Layanan</h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <a href="#layanan" className="text-blush-100/80 hover:text-accent-300 transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-accent-300 mb-4 uppercase text-sm tracking-wider">Kontak Reservasi</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blush-100/80 hover:text-accent-300">
                  <Phone className="h-4 w-4 shrink-0" aria-hidden />
                  {SITE.phoneDisplay} (WA/Telp)
                </a>
              </li>
              {SITE.email && (
                <li className="inline-flex items-center gap-2 text-blush-100/80">
                  <Mail className="h-4 w-4 shrink-0" aria-hidden />
                  {SITE.email}
                </li>
              )}
              {SITE.instagram && (
                <li className="inline-flex items-center gap-2 text-blush-100/80">
                  <AtSign className="h-4 w-4 shrink-0" aria-hidden />
                  {SITE.instagram}
                </li>
              )}
              <li className="inline-flex items-start gap-2 text-blush-100/80">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" aria-hidden />
                <span>Melayani panggilan ke rumah, kos, apartemen, dan hotel (area Jabodetabek).</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-blush-100/15 text-xs text-blush-100/60 space-y-2">
          <p>
            Seluruh layanan dilakukan secara profesional. Kami tidak melayani permintaan di luar
            standar layanan yang tercantum.
          </p>
          <p>
            © {year} {SITE.name}. Hak cipta dilindungi undang-undang.
          </p>
        </div>
      </div>
    </footer>
  );
}
