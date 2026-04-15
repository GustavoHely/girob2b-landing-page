export type TeamRole = 'Co-founder' | 'Conselheiro Estratégico';

export interface TeamMember {
  name: string;
  title: string;
  role: TeamRole;
  bio: string;
  photoUrl: string;
  linkedinUrl: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Gustavo Hely Ferreira da Silva',
    title: 'CEO & Co-founder',
    role: 'Co-founder',
    bio: 'CEO e co-fundador da Giro B2B. Lidera produto, estratégia e visão de negócios na construção de uma camada de conexão comercial entre empresas de diferentes setores no Brasil.',
    photoUrl: '/team/gustavo.jpg',
    linkedinUrl: '[PENDENTE: URL LinkedIn do Gustavo]',
  },
  {
    name: 'Vitor de Souza Barreto',
    title: 'CTO & Co-founder',
    role: 'Co-founder',
    bio: 'CTO e co-fundador da Giro B2B. Engenheiro de software com experiência em React, Next.js, TypeScript e cloud (AWS, Supabase). Lidera tecnologia, arquitetura e desenvolvimento da plataforma.',
    photoUrl: '/team/vitor.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/vitordsb/',
  },
  {
    name: 'Márcio [PENDENTE: sobrenome]',
    title: 'Conselheiro Estratégico',
    role: 'Conselheiro Estratégico',
    bio: 'Contribui com relacionamento comercial, parcerias e visão de mercado B2B brasileiro.',
    photoUrl: '/team/marcio.jpg',
    linkedinUrl: '[PENDENTE: URL LinkedIn do Márcio]',
  },
];
