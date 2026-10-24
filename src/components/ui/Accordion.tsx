import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { Faq } from '@/types';
import { cn } from '@/utils/cn';

interface AccordionProps {
  items: Faq[];
  allowMultiple?: boolean;
}

/** Accordion FAQ: satu terbuka dalam satu waktu (default), aksesibel keyboard. */
export function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [open, setOpen] = useState<string[]>(items[0] ? [items[0].id] : []);

  if (items.length === 0) {
    return <p className="text-center text-ink-500">Belum ada pertanyaan yang tersedia.</p>;
  }

  const toggle = (id: string) => {
    setOpen((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      return allowMultiple ? [...prev, id] : [id];
    });
  };

  return (
    <div className="divide-y divide-brand-700/10 rounded-card border border-brand-700/10 bg-white shadow-soft overflow-hidden">
      {items.map((item) => {
        const isOpen = open.includes(item.id);
        return (
          <div key={item.id}>
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 md:px-6 py-4 text-left font-semibold text-brand-800 hover:bg-blush-100/60 transition-colors"
            >
              <span>{item.question}</span>
              <ChevronDown
                className={cn(
                  'h-5 w-5 shrink-0 text-accent-500 transition-transform',
                  isOpen && 'rotate-180',
                )}
                aria-hidden
              />
            </button>
            <div
              className={cn(
                'grid transition-all duration-300',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 md:px-6 pb-5 text-ink-500 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
