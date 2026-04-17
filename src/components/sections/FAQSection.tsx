import { useState } from 'react';
import { faqItems } from '../../data/faq';
import styles from '../../styles/LandingPage.module.css';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20 md:py-24 xl:py-28">
      <div className={styles.container}>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-accent">
            Perguntas frequentes
          </p>
          <h2 className="mt-4 text-3xl font-black text-slate-950 md:text-4xl xl:text-5xl">
            Dúvidas mais comuns sobre a GiroB2B.
          </h2>
          <p className="mt-4 text-base text-slate-700 md:text-lg">
            Se a sua pergunta não estiver aqui, fale com a gente em{' '}
            <a
              href="mailto:comercial@girob2b.com.br"
              className="font-bold text-brand-accent hover:text-emerald-700"
            >
              comercial@girob2b.com.br
            </a>
            .
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article
                key={item.question}
                className="rounded-2xl border border-emerald-100 bg-[#f7fbf8] shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-black text-slate-950 md:text-lg">
                    {item.question}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent transition-transform ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6">
                    <p className="text-sm leading-relaxed text-slate-700 md:text-base">
                      {item.answer}
                    </p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
