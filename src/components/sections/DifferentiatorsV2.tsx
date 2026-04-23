import { DIFFERENTIATORS } from '@/data/differentiators';
import { IconCheck, IconX } from '@/components/icons';

export function DifferentiatorsV2() {
  return (
    <section
      id="diferenciais"
      className="py-16 md:py-24 relative overflow-hidden"
      style={{ background: '#0A5C5C' }}
    >
      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'rgba(192,138,46,0.08)', filter: 'blur(70px)' }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 -left-16 w-56 h-56 rounded-full pointer-events-none"
        style={{ background: 'rgba(42,122,122,0.3)', filter: 'blur(60px)' }}
      />

      <div className="max-w-container mx-auto px-6 relative">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="font-sans font-bold uppercase tracking-widest text-gold-soft text-xs mb-3">O que muda com a GiroB2B</p>
          <h2 className="font-sans font-black text-3xl md:text-4xl text-offwhite mb-4 max-w-2xl mx-auto">
            Por que a GiroB2B funciona diferente
          </h2>
          {/* IndiaMART citation */}
          <p className="font-sans text-offwhite/65 text-sm max-w-xl mx-auto leading-relaxed">
            Modelo inspirado em marketplaces consolidados como IndiaMART — R$ 950M/ano, 8,4M fornecedores — adaptado ao mercado brasileiro.
          </p>
        </div>

        {/* Grid of differentiator cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {DIFFERENTIATORS.map((d) => (
            <div
              key={d.title}
              className="rounded-xl overflow-hidden"
              style={{
                border: '1px solid rgba(192,138,46,0.20)',
                background: 'rgba(10,92,92,0.5)',
                backdropFilter: 'blur(8px)',
              }}
            >
              {/* Card header */}
              <div
                className="px-6 py-4"
                style={{ borderBottom: '1px solid rgba(192,138,46,0.15)' }}
              >
                <h3 className="font-sans font-bold text-lg text-offwhite">{d.title}</h3>
              </div>

              {/* Two-column content */}
              <div className="grid grid-cols-[1fr_1px_1fr] items-stretch">
                {/* Left — today (problem) */}
                <div className="px-6 py-5">
                  <p
                    className="text-xs font-sans font-bold uppercase tracking-widest mb-3"
                    style={{ color: '#C08A2E' }}
                  >
                    Mercado hoje
                  </p>
                  <div className="flex items-start gap-2.5">
                    <IconX
                      size={15}
                      strokeWidth={2}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: 'rgba(192,138,46,0.6)' } as React.CSSProperties}
                    />
                    <p className="text-sm leading-relaxed text-offwhite">
                      {d.marketToday}
                    </p>
                  </div>
                </div>

                {/* Vertical hairline separator */}
                <div style={{ background: 'rgba(192,138,46,0.25)' }} />

                {/* Right — with GiroB2B (solution) */}
                <div className="px-6 py-5">
                  <p
                    className="text-xs font-sans font-bold uppercase tracking-widest mb-3"
                    style={{ color: '#D4A04A' }}
                  >
                    Com GiroB2B
                  </p>
                  <div className="flex items-start gap-2.5">
                    <IconCheck
                      size={15}
                      strokeWidth={2}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: '#D4A04A' } as React.CSSProperties}
                    />
                    <p className="text-sm leading-relaxed text-offwhite">
                      {d.withGiroB2B}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
