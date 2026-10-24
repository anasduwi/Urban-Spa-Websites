/**
 * DESIGN TOKENS — Urban Spa brand identity.
 * Satu-satunya sumber kebenaran warna. Jangan hardcode hex di komponen.
 *
 * Palet:
 * - brand  : Deep Magenta #8D006C (primer) / Plum #821668 (hover, gelap)
 * - blush  : Soft Mauve #D2ACCA (section alt, surface lembut)
 * - accent : Rose Pink #E47DAE (aksen kecil saja — bukan background tombol)
 * - ink    : teks #342532 / muted #766777
 * - line   : border #EADDE7
 * Dikecualikan: hijau WhatsApp #25D366 dan clay error (bukan bagian brand).
 */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FBF0F8',
          100: '#F5DDEF',
          200: '#E9BEE0',
          600: '#A3137F',
          700: '#8D006C',
          800: '#821668',
          900: '#4A0A31',
        },
        blush: {
          50: '#FDF8FB',
          100: '#F9EDF4',
          200: '#F3DCE8',
          300: '#D2ACCA',
        },
        accent: {
          300: '#F2A6CB',
          400: '#E47DAE',
          // Turunan rose yang digelapkan khusus untuk TEKS di atas terang
          // (accent-400 #E47DAE gagal kontras WCAG sebagai warna teks).
          500: '#A92E6B',
        },
        ink: {
          500: '#766777',
          700: '#4A3A47',
          900: '#342532',
        },
        line: '#EADDE7',
        clay: {
          500: '#B4654A',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 8px 30px rgb(141 0 108 / 0.08)',
        lift: '0 14px 40px rgb(141 0 108 / 0.14)',
      },
      borderRadius: {
        card: '12px',
      },
    },
  },
  plugins: [],
};
