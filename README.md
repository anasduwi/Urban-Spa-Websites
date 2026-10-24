# Urban Spa — Landing Page (Spa & Pijat Panggilan)

Landing page satu halaman untuk **Urban Spa** — jasa spa & pijat panggilan
(body, mind & soul). Struktur mengikuti referensi company-profile (topbar,
header, hero slider, layanan, keunggulan, harga, area, testimoni, FAQ, kontak,
footer, tombol WhatsApp melayang), dengan identitas visual Urban Spa.

> Seluruh **konten, harga, kontak, area, dan testimoni adalah CONTOH** untuk
> pengembangan. Ganti dengan data asli sebelum produksi.

## Identitas visual

- Palet (lihat `tailwind.config.js` — satu-satunya sumber kebenaran warna):
  - Primer Deep Magenta `#8D006C`, hover Plum `#821668`
  - Sekunder Soft Mauve `#D2ACCA` (section selang-seling)
  - Aksen Rose Pink `#E47DAE` (aksen kecil saja)
  - Teks `#342532`, muted `#766777`, border `#EADDE7`, radius `12px`
  - Hijau WhatsApp `#25D366` dipertahankan (brand recognition), bukan bagian palet
- Logo resmi: `public/brand/logo.svg` — vektor asli hasil ekstraksi dari
  `SIGNAGE URBAN SPA-1.pdf` (teks dikonversi ke path, tanpa dependensi font),
  plus `logo-512.png`, `logo-192.png`, `favicon-64.png`.
- Komponen `src/components/brand/Logo.tsx` memakai aset SVG dengan fallback
  wordmark teks sementara bila aset gagal dimuat.

## Menjalankan

```powershell
npm install
npm run dev      # buka http://localhost:5173
npm run build    # output produksi ke dist/
npm run preview  # cek hasil build
```

## Mengganti konten

- Identitas & kontak: `src/config/site.ts` (nama, nomor WA, email, IG).
  Nomor WA masih placeholder (`62812XXXXXXXX`) — wajib diganti.
- Menu navigasi: `src/config/navigation.ts`.
- Data contoh: `src/data/mock.ts` (layanan, harga, keunggulan, area, testimoni, FAQ, slide hero).
- Warna: `tailwind.config.js` + `src/styles/index.css` (`:root`).

## Keterbatasan (placeholder / mock)

- Semua harga, testimoni, area, dan FAQ adalah **data contoh fiktif**, bukan data aktual.
- Form kontak **tanpa backend**: submit yang valid membuka chat WhatsApp dengan
  pesan terisi otomatis. Data tidak disimpan di mana pun.
- Tanpa autentikasi, database, routing multi-halaman, atau payment gateway.
