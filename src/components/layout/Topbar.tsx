import { AtSign, Clock, Mail, Phone } from 'lucide-react';
import { SITE } from '@/config/site';

/** Strip atas: info kontak + jam operasional. Disembunyikan di mobile. */
export function Topbar() {
  return (
    <div className="hidden md:block bg-brand-900 text-blush-100 text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2">
        <div className="flex items-center gap-5">
          <a href={`tel:${SITE.waNumber}`} className="inline-flex items-center gap-1.5 hover:text-accent-300">
            <Phone className="h-3.5 w-3.5" aria-hidden />
            {SITE.phoneDisplay}
          </a>
          {SITE.email && (
            <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-1.5 hover:text-accent-300">
              <Mail className="h-3.5 w-3.5" aria-hidden />
              {SITE.email}
            </a>
          )}
        </div>
        <div className="flex items-center gap-5">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-accent-300" aria-hidden />
            {SITE.hours}
          </span>
          {SITE.instagram && (
            <span className="inline-flex items-center gap-1.5">
              <AtSign className="h-3.5 w-3.5" aria-hidden />
              {SITE.instagram}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
