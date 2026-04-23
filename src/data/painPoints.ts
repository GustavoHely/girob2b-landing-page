export type PainPoint = {
  icon: 'search' | 'phone' | 'list' | 'shield';
  title: string;
  body: string;
};

export const PAIN_POINTS: PainPoint[] = [
  {
    icon: 'search',
    title: 'Google não te serve',
    body: 'Fornecedores PME não aparecem nos primeiros resultados. Você acaba achando o mesmo punhado de grandes que já conhece.',
  },
  {
    icon: 'phone',
    title: 'Ligar de um em um',
    body: 'Sem plataforma, o comprador faz cold call pedindo cotação. O fornecedor perde tempo atendendo curiosidade em vez de pedido real.',
  },
  {
    icon: 'list',
    title: 'Especificação inconsistente',
    body: '"Parafuso M8 inox" na plataforma A é "Bolt 8mm stainless" na B. Impossível comparar. Cada fornecedor escreve do jeito dele.',
  },
  {
    icon: 'shield',
    title: 'Sem histórico de confiança',
    body: 'Você não sabe se o fornecedor entrega no prazo, se o CNPJ está ativo, se o endereço é real.',
  },
];

export const MARKET_STATS = '24,2M empresas ativas no Brasil · 93,7% são PMEs · R$ 2,4T em GMV B2B anual — menos de 5% digital hoje';
