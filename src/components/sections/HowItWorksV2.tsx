import { HOW_IT_WORKS_STEPS } from '@/data/howItWorksSteps';

export function HowItWorksV2() {
  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-white">
      <div className="max-w-container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="font-sans font-bold uppercase tracking-widest text-gold-burnt text-xs mb-3">Em três passos</p>
          <h2 className="font-sans font-black text-3xl md:text-4xl text-graphite mb-4">
            Como a GiroB2B resolve
          </h2>
          <p className="text-graphite/60 text-lg">
            Três passos para transformar sua operação comercial B2B.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-0 relative">
          {HOW_IT_WORKS_STEPS.map((step, idx) => {
            const isLast = idx === HOW_IT_WORKS_STEPS.length - 1;
            return (
              <div key={step.n} className="relative px-8 py-2 first:pl-0 last:pr-0">
                {/* Connecting hairline (desktop only, between cards) */}
                {!isLast && (
                  <div
                    aria-hidden="true"
                    className="hidden md:block absolute top-10 right-0 w-px h-16"
                    style={{
                      background: 'linear-gradient(180deg, rgba(192,138,46,0.4), rgba(192,138,46,0.05))',
                      transform: 'translateX(50%)',
                    }}
                  />
                )}

                {/* Step number — DM Sans black, big */}
                <div
                  className="font-sans font-black leading-none mb-5 select-none"
                  style={{
                    fontSize: '5rem',
                    color: '#C08A2E',
                    opacity: 0.85,
                    lineHeight: 1,
                  }}
                >
                  {step.n}
                </div>

                <h3 className="font-sans font-bold text-xl text-graphite mb-3">{step.title}</h3>
                <p className="text-graphite/65 leading-relaxed">{step.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
