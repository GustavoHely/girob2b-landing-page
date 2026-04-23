export type FAQItem = { question: string; answer: string };

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Quanto custa para o comprador?',
    answer:
      'Zero. Sempre. O comprador busca, compara e envia cotação sem pagar nada. Monetização vem do lado fornecedor.',
  },
  {
    question: 'Quando a plataforma abre?',
    answer:
      'Lançamento previsto para maio/2026. Quem entra na lista de espera é avisado antes do lançamento público e recebe onboarding prioritário.',
  },
  {
    question: 'Preciso de CNPJ para me cadastrar como fornecedor?',
    answer:
      'Sim. Aceitamos MEI, ME, EPP, Médias e Grandes empresas. O CNPJ é validado na Receita Federal no cadastro.',
  },
  {
    question: 'Posso desistir depois de entrar na fila?',
    answer:
      'Sim. Se receber o aviso de lançamento e decidir não prosseguir, basta não completar o cadastro. Zero compromisso financeiro antes do cadastro efetivo no plano escolhido.',
  },
  {
    question: 'Como funciona a quota mensal de leads?',
    answer:
      'Cada plano concede N leads/mês (30, 100, 300 ou ilimitada). Leads não utilizados no mês expiram — não acumulam. Se você esgotar a quota, faz upgrade de tier; não oferecemos compra avulsa (o upgrade é mais vantajoso).',
  },
  {
    question: 'Posso migrar meu catálogo de outra plataforma?',
    answer:
      'No lançamento: cadastro manual (recomendado para ajustar ao template de atributos). Bulk upload via CSV está previsto pra segunda versão do MVP.',
  },
  {
    question: 'Para quais setores funciona?',
    answer:
      'Todos os setores B2B, desde o lançamento. Ferramentas, insumos industriais, embalagens, EPI, materiais de construção, eletrônicos, metalúrgica, químicos, têxtil, alimentos e muitos outros.',
  },
  {
    question: 'E a LGPD? Meus dados estão seguros?',
    answer:
      'Sim. Dados de contato do comprador só são desbloqueados quando o fornecedor consome 1 lead da quota. Consentimento explícito é capturado no cadastro. Política de privacidade completa será publicada antes do lançamento público.',
  },
];
