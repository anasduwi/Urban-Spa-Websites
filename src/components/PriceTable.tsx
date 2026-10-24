import type { PriceItem } from '@/types';
import { formatDurasi, formatRupiah } from '@/utils/format';
import { Card } from '@/components/ui/Card';

interface PriceTableProps {
  items: PriceItem[];
}

/**
 * Daftar harga: tabel di layar md+ dan stacked cards di mobile.
 * Menampilkan empty state jika tidak ada item.
 */
export function PriceTable({ items }: PriceTableProps) {
  if (items.length === 0) {
    return (
      <Card className="text-center text-ink-500">
        Belum ada daftar harga untuk kategori ini.
      </Card>
    );
  }

  const maxVariants = Math.max(...items.map((i) => i.variants.length));

  return (
    <>
      {/* Tabel desktop */}
      <div className="hidden md:block overflow-x-auto rounded-card border border-brand-700/10 bg-white shadow-soft">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-brand-700 text-white">
              <th scope="col" className="px-6 py-4 font-semibold">Layanan</th>
              {Array.from({ length: maxVariants }, (_, i) => (
                <th key={i} scope="col" className="px-6 py-4 font-semibold text-right">
                  Durasi {i + 1}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-700/10">
            {items.map((item) => (
              <tr key={item.serviceId} className="hover:bg-blush-100/60">
                <th scope="row" className="px-6 py-4">
                  <span className="block font-semibold text-brand-800">{item.name}</span>
                  {item.note && <span className="block text-xs font-normal text-ink-500">{item.note}</span>}
                </th>
                {Array.from({ length: maxVariants }, (_, i) => {
                  const v = item.variants[i];
                  return (
                    <td key={i} className="px-6 py-4 text-right whitespace-nowrap">
                      {v ? (
                        <>
                          <span className="block font-bold text-brand-700">{formatRupiah(v.price)}</span>
                          <span className="block text-xs text-ink-500">{formatDurasi(v.duration)}</span>
                        </>
                      ) : (
                        <span className="text-ink-500/50">—</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cards mobile */}
      <div className="md:hidden space-y-4">
        {items.map((item) => (
          <Card key={item.serviceId}>
            <h3 className="font-semibold text-brand-800">{item.name}</h3>
            {item.note && <p className="text-xs text-ink-500 mt-0.5">{item.note}</p>}
            <dl className="mt-3 space-y-2">
              {item.variants.map((v) => (
                <div
                  key={v.duration}
                  className="flex items-center justify-between rounded-xl bg-blush-100 px-4 py-2.5 text-sm"
                >
                  <dt className="text-ink-500">{formatDurasi(v.duration)}</dt>
                  <dd className="font-bold text-brand-700">{formatRupiah(v.price)}</dd>
                </div>
              ))}
            </dl>
          </Card>
        ))}
      </div>
    </>
  );
}
