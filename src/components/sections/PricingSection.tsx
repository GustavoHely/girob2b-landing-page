import { useState } from 'react';
import { PRICING_TIERS } from '@/data/pricingTiers';
import { PricingCard } from '@/components/ui/PricingCard';
import { WaitlistModal } from '@/components/modals/WaitlistModal';
import { EnterpriseModal } from '@/components/modals/EnterpriseModal';
import { trackEvent } from '@/lib/analytics';

export function PricingSection() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [enterpriseOpen, setEnterpriseOpen] = useState(false);

  function handleCta(tierId: string) {
    if (tierId === 'enterprise') {
      setEnterpriseOpen(true);
      trackEvent('enterprise_contact_open');
    } else {
      setWaitlistOpen(true);
    }
  }

  function toggleBilling(next: 'monthly' | 'annual') {
    setBilling(next);
    trackEvent(next === 'annual' ? 'pricing_toggle_annual' : 'pricing_toggle_monthly');
  }

  return (
    <section id="pricing" className="py-16 md:py-20 bg-offwhite">
      <div className="max-w-container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-deep text-center mb-4">
          Planos para fornecedores
        </h2>
        <p className="text-lg text-graphite text-center mb-8">
          O comprador navega grátis. O fornecedor paga mensalidade transparente.
        </p>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white rounded-full border border-graphite-soft/30 p-1">
            <button
              onClick={() => toggleBilling('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                billing === 'monthly' ? 'bg-teal-deep text-white' : 'text-graphite'
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => toggleBilling('annual')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                billing === 'annual' ? 'bg-teal-deep text-white' : 'text-graphite'
              }`}
            >
              Anual <span className="text-gold-burnt">(economize 15%)</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 pt-4">
          {PRICING_TIERS.map((tier) => (
            <PricingCard key={tier.id} tier={tier} billing={billing} onCtaClick={() => handleCta(tier.id)} />
          ))}
        </div>
      </div>

      <WaitlistModal open={waitlistOpen} onClose={() => setWaitlistOpen(false)} source="landing_pricing" />
      <EnterpriseModal open={enterpriseOpen} onClose={() => setEnterpriseOpen(false)} />
    </section>
  );
}
