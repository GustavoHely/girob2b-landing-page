import { useState } from 'react';
import { FAQ_ITEMS } from '@/data/faqItems';
import { trackEvent } from '@/lib/analytics';

export function FAQV2() {
  const [open, setOpen] = useState<number | null>(null);

  function toggle(idx: number) {
    const next = open === idx ? null : idx;
    setOpen(next);
    if (next !== null) trackEvent('faq_expand', { question: FAQ_ITEMS[next].question });
  }

  return (
    <section id="faq" className="py-16 md:py-20 bg-white">
      <div className="max-w-container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-deep text-center mb-12">
          Perguntas frequentes
        </h2>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => (
            <div key={item.question} className="border border-graphite-soft/20 rounded">
              <button
                onClick={() => toggle(idx)}
                aria-expanded={open === idx}
                className="w-full text-left px-5 py-4 flex justify-between items-center hover:bg-offwhite transition"
              >
                <span className="font-medium text-graphite pr-4">{item.question}</span>
                <span className="text-gold-burnt text-xl flex-shrink-0">{open === idx ? '−' : '+'}</span>
              </button>
              {open === idx && (
                <div className="px-5 pb-4 text-sm text-graphite leading-relaxed">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
