export type TeamRole = 'Co-founder' | 'Head of BD';

export interface TeamMember {
  name: string;
  title: string;
  role: TeamRole;
  bio: string;
  photoUrl: string;
  linkedinUrl: string | null;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Gustavo Hely Ferreira da Silva',
    title: 'CEO & Co-founder',
    role: 'Co-founder',
    bio: 'CEO e co-fundador da GiroB2B. Lidera produto, estratégia e visão de negócios na construção de uma camada de conexão comercial entre empresas de diferentes setores no Brasil.',
    photoUrl: '/team/gustavo.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/gustavo-hely/',
  },
  {
    name: 'Vitor de Souza Barreto',
    title: 'CTO & Co-founder',
    role: 'Co-founder',
    bio: 'CTO e co-fundador da GiroB2B. Engenheiro de software há mais de 5 anos, com foco em React, Next.js, TypeScript e cloud (AWS, Supabase). Lidera tecnologia, arquitetura e desenvolvimento da plataforma.',
    photoUrl: '/team/vitor.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/vitordsb/',
  },
  {
    name: 'Márcio Ramos',
    title: 'Head of BD',
    role: 'Head of BD',
    bio: 'Mais de 30 anos conectando empresas no mercado B2B brasileiro. Na GiroB2B, lidera relacionamento comercial, parcerias e aquisição de compradores.',
    photoUrl: '/team/marcio.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/marcio-ramos-933b80168/',
  },
];
