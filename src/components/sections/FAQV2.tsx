import { useState } from 'react';
import { FAQ_ITEMS } from '@/data/faqItems';
import { IconChevronDown } from '@/components/icons';
import { trackEvent } from '@/lib/analytics';

export function FAQV2() {
  const [open, setOpen] = useState<number | null>(null);

  function toggle(idx: number) {
    const next = open === idx ? null : idx;
    setOpen(next);
    if (next !== null) trackEvent('faq_expand', { question: FAQ_ITEMS[next].question });
  }

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <p className="font-sans font-bold uppercase tracking-widest text-gold-burnt text-xs mb-3">Dúvidas comuns</p>
            <h2 className="font-sans font-black text-3xl md:text-4xl text-graphite">
              Perguntas frequentes
            </h2>
          </div>

          {/* Accordion */}
          <div className="divide-y" style={{ borderColor: 'rgba(26,31,31,0.08)' }}>
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = open === idx;
              return (
                <div key={item.question}>
                  <button
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    className="w-full text-left px-0 py-5 flex justify-between items-center gap-4 group transition"
                  >
                    <span className="font-sans font-medium text-graphite group-hover:text-teal-deep transition-colors">
                      {item.question}
                    </span>
                    <IconChevronDown
                      size={20}
                      strokeWidth={1.5}
                      className="flex-shrink-0 transition-transform duration-300 text-gold-burnt"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      } as React.CSSProperties}
                    />
                  </button>

                  {/* Answer — height transition via max-height trick */}
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: isOpen ? '400px' : '0px' }}
                  >
                    <p className="pb-5 text-sm text-graphite/70 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
