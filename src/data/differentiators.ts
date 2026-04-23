export type Differentiator = {
  title: string;
  marketToday: string;
  withGiroB2B: string;
};

export const DIFFERENTIATORS: Differentiator[] = [
  {
    title: 'Cadastro técnico estruturado',
    marketToday: '"Parafuso M8" é texto livre em cada site. Impossível comparar.',
    withGiroB2B: 'Template de atributos por categoria (diâmetro, material, rosca, acabamento). Busca técnica real.',
  },
  {
    title: 'Filtros facetados por atributo',
    marketToday: 'Você filtra por categoria e lê texto de 40 cards.',
    withGiroB2B: 'Slider de diâmetro, checkbox de material, toggle de certificação. Encontra em 5 segundos.',
  },
  {
    title: 'Selo Verificado GiroB2B (Pro+)',
    marketToday: 'Você confia no CNPJ que o fornecedor disse ter.',
    withGiroB2B: 'CNPJ validado + endereço conferido + identidade do dono. Selo visível no card.',
  },
  {
    title: 'Lead Manager integrado (Pro+)',
    marketToday: 'Você exporta lead pra planilha, perde follow-up, esquece.',
    withGiroB2B: 'Lead tem status, notas, data de follow-up. No mesmo lugar da plataforma.',
  },
];
