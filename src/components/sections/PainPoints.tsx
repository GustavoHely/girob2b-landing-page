import { PAIN_POINTS, MARKET_STATS } from '@/data/painPoints';
import { IconSearch, IconPhone, IconListStructured, IconShieldCheck } from '@/components/icons';
import type { ComponentType } from 'react';

// Map data keys to components
const ICON_MAP: Record<string, ComponentType<{ className?: string; size?: number; strokeWidth?: number }>> = {
  search: IconSearch,
  phone: IconPhone,
  list: IconListStructured,
  shield: IconShieldCheck,
};

export function PainPoints() {
  return (
    <section
      className="py-16 md:py-24 relative"
      style={{
        background: `
          radial-gradient(ellipse at 50% 0%, rgba(192,138,46,0.04), transparent 55%),
          #F4F1EA
        `,
      }}
    >
      <div className="max-w-container mx-auto px-6">
        {/* Eyebrow + heading */}
        <div className="text-center mb-14">
          <p className="font-sans font-bold uppercase tracking-widest text-gold-burnt text-xs mb-3">O problema</p>
          <h2 className="font-sans font-black text-3xl md:text-4xl text-graphite mb-5 max-w-2xl mx-auto">
            Encontrar fornecedores B2B no Brasil hoje é manual e caro
          </h2>
          <p className="text-graphite/70 text-lg max-w-3xl mx-auto leading-relaxed">
            O B2B brasileiro movimenta R$ 2,4 trilhões por ano. Menos de 5% acontece em plataformas digitais transacionais.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PAIN_POINTS.map((pp) => {
            const Icon = ICON_MAP[pp.icon];
            return (
              <div
                key={pp.title}
                className="bg-white p-7 shadow-sm"
                style={{
                  border: '1px solid rgba(192, 138, 46, 0.18)',
                  borderRadius: '10px',
                }}
              >
                {/* Icon container */}
                {Icon && (
                  <div
                    className="w-12 h-12 flex items-center justify-center mb-5"
                    style={{
                      borderRadius: '50%',
                      border: '1px solid rgba(192, 138, 46, 0.35)',
                      background: 'rgba(10, 92, 92, 0.05)',
                      color: '#C08A2E',
                    }}
                  >
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                )}

                <h3 className="font-sans font-bold text-lg text-graphite mb-2">{pp.title}</h3>
                <p className="text-sm text-graphite/70 leading-relaxed">{pp.body}</p>
              </div>
            );
          })}
        </div>

        {/* Market stat footnote */}
        <p className="text-xs text-center text-graphite/40 mt-10 tracking-wide">{MARKET_STATS}</p>
      </div>
    </section>
  );
}
