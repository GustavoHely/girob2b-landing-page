import { DIFFERENTIATORS } from '@/data/differentiators';

export function DifferentiatorsV2() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-deep text-center mb-3">
          Por que a GiroB2B funciona diferente
        </h2>
        <p className="text-sm text-graphite-soft text-center mb-12 max-w-3xl mx-auto">
          Modelo inspirado em marketplaces consolidados como IndiaMART (R$ 950M/ano, 8,4M fornecedores na Índia), adaptado ao mercado brasileiro.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {DIFFERENTIATORS.map((d) => (
            <div key={d.title} className="border border-graphite-soft/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-teal-deep mb-4">{d.title}</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-bold text-graphite-soft uppercase tracking-wider mb-1">
                    Mercado hoje
                  </p>
                  <p className="text-sm text-graphite">{d.marketToday}</p>
                </div>
                <div className="border-l-4 border-gold-burnt pl-3">
                  <p className="text-xs font-bold text-gold-burnt uppercase tracking-wider mb-1">
                    Com GiroB2B
                  </p>
                  <p className="text-sm text-graphite">{d.withGiroB2B}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
