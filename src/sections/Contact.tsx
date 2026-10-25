import { useState } from 'react';
import type { FormEvent } from 'react';
import { AtSign, Mail, MessageCircle, Phone, Send } from 'lucide-react';
import { SERVICES } from '@/data/mock';
import { SITE } from '@/config/site';
import { buildWaLink } from '@/utils/whatsapp';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

interface FormErrors {
  name?: string;
  phone?: string;
  service?: string;
}

/**
 * Form kontak dengan validasi frontend.
 * KETERBATASAN: tanpa backend — submit membuka chat WhatsApp dengan pesan prefill.
 */
export function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [note, setNote] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (name.trim().length < 3) next.name = 'Nama minimal 3 karakter.';
    if (!/^(08\d{8,11}|628\d{7,11})$/.test(phone.replace(/[\s-]/g, ''))) {
      next.phone = 'Nomor tidak valid. Contoh: 081234567890.';
    }
    if (!service) next.service = 'Pilih salah satu layanan.';
    return next;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    const message = [
      SITE.bookingWaMessage,
      '',
      `Nama: ${name.trim()}`,
      `No. HP: ${phone.trim()}`,
      `Layanan: ${service}`,
      note.trim() ? `Catatan: ${note.trim()}` : '',
    ]
      .filter(Boolean)
      .join('\n');
    window.open(buildWaLink(SITE.waNumber, message), '_blank', 'noopener,noreferrer');
  };

  const inputClass = (invalid: boolean) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-ink-500/50 focus:border-brand-700 ${
      invalid ? 'border-clay-500' : 'border-brand-700/20'
    }`;

  const waDirect = buildWaLink(SITE.waNumber, SITE.defaultWaMessage);

  return (
    <section id="kontak" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Kontak & Reservasi"
          title="Pesan Jadwal Anda Sekarang"
          subtitle="Isi formulir di bawah — pesanan diteruskan ke WhatsApp. Tanpa akun, tanpa aplikasi tambahan."
        />
        <div className="grid gap-6 lg:grid-cols-5">
          <Card className="reveal lg:col-span-2 !bg-brand-900 !text-blush-100">
            <h3 className="font-display text-xl font-semibold mb-1">Hubungi Langsung</h3>
            <p className="text-sm text-blush-100/70 mb-6">
              Hubungi kami langsung atau isi formulir — pesanan diteruskan ke WhatsApp.
            </p>
            <ul className="space-y-4 text-sm">
              <li>
                <a href={waDirect} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 hover:text-accent-300">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shrink-0">
                    <MessageCircle className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-blush-100/60 text-xs">WhatsApp</span>
                    {SITE.phoneDisplay}
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blush-100/10 shrink-0">
                  <Phone className="h-5 w-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-blush-100/60 text-xs">Telepon</span>
                  {SITE.phoneDisplay}
                </span>
              </li>
              {SITE.email && (
                <li className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blush-100/10 shrink-0">
                    <Mail className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-blush-100/60 text-xs">Email</span>
                    {SITE.email}
                  </span>
                </li>
              )}
              {SITE.instagram && (
                <li className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blush-100/10 shrink-0">
                    <AtSign className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-blush-100/60 text-xs">Instagram</span>
                    {SITE.instagram}
                  </span>
                </li>
              )}
            </ul>
          </Card>

          <Card className="reveal lg:col-span-3">
            <form onSubmit={onSubmit} noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="nama" className="block text-sm font-semibold text-brand-800 mb-1.5">
                    Nama Lengkap
                  </label>
                  <input
                    id="nama"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nama Anda"
                    className={inputClass(!!errors.name)}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'err-nama' : undefined}
                  />
                  {errors.name && <p id="err-nama" className="mt-1 text-xs text-clay-500">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="nowa" className="block text-sm font-semibold text-brand-800 mb-1.5">
                    Nomor WhatsApp
                  </label>
                  <input
                    id="nowa"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="081234567890"
                    className={inputClass(!!errors.phone)}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'err-nowa' : undefined}
                  />
                  {errors.phone && <p id="err-nowa" className="mt-1 text-xs text-clay-500">{errors.phone}</p>}
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="layanan" className="block text-sm font-semibold text-brand-800 mb-1.5">
                  Pilih Layanan
                </label>
                <select
                  id="layanan"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className={inputClass(!!errors.service)}
                  aria-invalid={!!errors.service}
                  aria-describedby={errors.service ? 'err-layanan' : undefined}
                >
                  <option value="">— Pilih layanan —</option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
                {errors.service && <p id="err-layanan" className="mt-1 text-xs text-clay-500">{errors.service}</p>}
              </div>
              <div className="mt-4">
                <label htmlFor="catatan" className="block text-sm font-semibold text-brand-800 mb-1.5">
                  Catatan <span className="font-normal text-ink-500">(opsional)</span>
                </label>
                <textarea
                  id="catatan"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Contoh: alamat, jadwal yang diinginkan"
                  rows={3}
                  className={`${inputClass(false)} resize-y`}
                />
              </div>
              <Button type="submit" variant="wa" size="lg" className="w-full mt-6" icon={<Send className="h-5 w-5" aria-hidden />}>
                Kirim Pesanan via WhatsApp
              </Button>
              <p className="mt-3 text-xs text-ink-500 text-center">
                Submit membuka aplikasi WhatsApp dengan pesan terisi otomatis. Data tidak disimpan
                di server mana pun.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
