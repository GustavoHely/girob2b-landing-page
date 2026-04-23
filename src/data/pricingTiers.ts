export type PricingTier = {
  id: 'starter' | 'pro' | 'premium' | 'enterprise';
  name: string;
  priceMonthly: number | null; // null = sob consulta
  priceAnnual: number | null;
  monthlyLeadQuota: number | null; // null = ilimitado
  skuLimit: number | null;
  features: string[];
  highlighted: boolean;
  ctaLabel: string;
};

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    priceMonthly: 89,
    priceAnnual: 908,
    monthlyLeadQuota: 30,
    skuLimit: 200,
    features: ['30 leads/mês', 'Até 200 SKUs', 'Até 3 categorias', 'Trial: 7 leads pro-rata no primeiro mês'],
    highlighted: false,
    ctaLabel: 'Entrar na lista de espera',
  },
  {
    id: 'pro',
    name: 'Pro',
    priceMonthly: 349,
    priceAnnual: 3560,
    monthlyLeadQuota: 100,
    skuLimit: 1000,
    features: [
      '100 leads/mês',
      'Até 1.000 SKUs',
      'Selo Verificado GiroB2B',
      'Lead Manager CRM básico',
    ],
    highlighted: true,
    ctaLabel: 'Entrar na lista de espera',
  },
  {
    id: 'premium',
    name: 'Premium',
    priceMonthly: 999,
    priceAnnual: 10190,
    monthlyLeadQuota: 300,
    skuLimit: 5000,
    features: [
      '300 leads/mês',
      'Até 5.000 SKUs',
      'Prioridade na busca',
      '"Quem viu meu catálogo" analytics',
      'Subdomínio personalizado',
    ],
    highlighted: false,
    ctaLabel: 'Entrar na lista de espera',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    priceMonthly: null,
    priceAnnual: null,
    monthlyLeadQuota: null,
    skuLimit: null,
    features: [
      'Leads e SKUs ilimitados',
      'Account Manager dedicado',
      'SLA de atendimento contratado',
      'API completa e white-label',
    ],
    highlighted: false,
    ctaLabel: 'Falar com o time',
  },
];
