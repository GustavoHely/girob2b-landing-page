_# Landing Page - SaaS B2B

Este é o projeto da Landing Page para a plataforma SaaS B2B, desenvolvido com **Vite + React + TypeScript + Tailwind CSS + CSS Modules**.

## Tecnologias Utilizadas
- **Vite**: Build tool extremamente rápida.
- **React**: Biblioteca para construção da interface.
- **Tailwind CSS (v4)**: Estilização utilitária.
- **CSS Modules**: Escopo local para estilos CSS.
- **TypeScript**: Tipagem estática para maior segurança.

## Como Executar Localmente

### Pré-requisitos
- Node.js (v18 ou superior)
- npm, yarn ou pnpm

### Passos para Instalação

1. **Extraia o arquivo zip** em uma pasta de sua preferência.
2. **Abra o terminal** na pasta do projeto.
3. **Instale as dependências**:
   ```bash
   npm install
   # ou
   pnpm install
   # ou
   yarn install
   ```
4. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   # ou
   pnpm dev
   # ou
   yarn dev
   ```
5. **Acesse no navegador**:
   O terminal informará a URL (geralmente `http://localhost:5173`).

## Estrutura do Projeto
- `src/components/`: Componentes React reutilizáveis (Header, Hero, Features, HowItWorks, Footer).
- `src/pages/`: Páginas roteadas da landing (`/`, `/como-funciona`, `/funcionalidades`, `/about`, `/contato`).
- `src/styles/`: CSS Modules para estilização específica.
- `src/App.tsx`: Ponto de entrada da aplicação.
- `src/index.css`: Configurações globais do Tailwind.

## Build para Produção
Para gerar os arquivos otimizados para hospedagem:
```bash
npm run build
```
Os arquivos serão gerados na pasta `dist/`.
