import { type PricingTier } from '@/data/pricingTiers';

type Props = {
  tier: PricingTier;
  billing: 'monthly' | 'annual';
  onCtaClick: () => void;
};

export function PricingCard({ tier, billing, onCtaClick }: Props) {
  const isEnterprise = tier.id === 'enterprise';

  const price =
    billing === 'monthly' ? tier.priceMonthly : tier.priceAnnual ? Math.round(tier.priceAnnual / 12) : null;

  const periodLabel = billing === 'monthly' ? '/mês' : '/mês cobrado anualmente';

  const cardClass = isEnterprise
    ? 'bg-teal-deep text-offwhite border-teal-deep'
    : tier.highlighted
    ? 'bg-white border-gold-burnt border-2 shadow-lg relative'
    : 'bg-white border-graphite-soft/20';

  return (
    <div className={`rounded-lg p-6 border ${cardClass} flex flex-col`}>
      {tier.highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-burnt text-white text-xs font-bold px-3 py-1 rounded-full">
          Mais popular
        </div>
      )}

      <h3 className={`text-xl font-bold mb-2 ${isEnterprise ? 'text-offwhite' : 'text-teal-deep'}`}>
        {tier.name}
      </h3>

      {isEnterprise ? (
        <div className="mb-4">
          <p className="text-lg font-medium">Precisa de mais?</p>
          <p className="text-sm text-offwhite/80 mt-1">Pricing sob consulta</p>
        </div>
      ) : (
        <div className="mb-4">
          <span className="text-3xl font-bold text-graphite">R$ {price}</span>
          <span className="text-sm text-graphite-soft ml-1">{periodLabel}</span>
        </div>
      )}

      <ul className={`space-y-2 mb-6 flex-1 ${isEnterprise ? 'text-offwhite/90' : 'text-graphite'}`}>
        {tier.features.map((f) => (
          <li key={f} className="text-sm flex items-start gap-2">
            <span className={isEnterprise ? 'text-gold-soft' : 'text-gold-burnt'}>✓</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={onCtaClick}
        className={`w-full py-3 rounded font-medium transition ${
          tier.highlighted || isEnterprise
            ? 'bg-gold-burnt text-white hover:bg-gold-soft'
            : 'bg-teal-deep text-white hover:bg-teal-mid'
        }`}
      >
        {tier.ctaLabel}
      </button>
    </div>
  );
}
