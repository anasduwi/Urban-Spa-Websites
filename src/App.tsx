import { Topbar } from '@/components/layout/Topbar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingWA } from '@/components/layout/FloatingWA';
import { Hero } from '@/sections/Hero';
import { Services } from '@/sections/Services';
import { Advantages } from '@/sections/Advantages';
import { Pricing } from '@/sections/Pricing';
import { Areas } from '@/sections/Areas';
import { Testimonials } from '@/sections/Testimonials';
import { Faq } from '@/sections/Faq';
import { Contact } from '@/sections/Contact';
import { useReveal } from '@/hooks/useReveal';

/** Komposisi landing page satu halaman: layout + section berurutan. */
export default function App() {
  useReveal();

  return (
    <div className="min-h-screen">
      <Topbar />
      <Header />
      <main>
        <Hero />
        <Services />
        <Advantages />
        <Pricing />
        <Areas />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingWA />
    </div>
  );
}
