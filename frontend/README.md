# Frontend

## Finalidade

Centralizar toda a aplicação de interface do usuário construída com **React + React-Router + TypeScript + TailwindCSS + shadcn/ui**, separando o código-fonte (`src/`), arquivos públicos estáticos (`public/`), testes automatizados (`tests/`) e arquivos de configuração que residem na raiz deste diretório (como `package.json`, `tsconfig.json`, `vite.config.ts`, `components.json` e `.env.example`).

## Conteúdo Armazenado

- Código-fonte da interface, rotas, layouts, páginas, componentes, serviços de conexão com o backend, hooks, tipagens, estilos, utilitários e assets (`src/`);
- Arquivos estáticos servidos diretamente sem processamento pelo bundler (`public/`);
- Arquivos de configuração da stack e execução local do servidor de desenvolvimento (na raiz de `frontend/`).

## Responsabilidades

- Entregar uma interface responsiva, tipada e consistente com TailwindCSS e componentes shadcn/ui;
- Gerenciar navegação entre telas e proteção de rotas com React-Router;
- Centralizar toda a comunicação HTTP com o backend em `src/services/`, evitando chamadas soltas dentro de componentes;
- Manter separação clara entre componentes base de UI (`components/ui/`), componentes de produto (`components/common/`), layouts e páginas.

## Subdiretórios

O frontend organiza seu código-fonte dentro do contêiner `src/`, além de `public/` e `tests/` na raiz:

- `public/` — Arquivos estáticos servidos diretamente na raiz (ex.: `favicon.ico`, `robots.txt`);
- `src/routes/` — Mapa de rotas do React-Router e guards de proteção de rota;
- `src/layouts/` — Molduras visuais compartilhadas entre múltiplas páginas;
- `src/pages/` — Telas completas associadas às rotas da aplicação;
- `src/components/` — Componentes de interface reutilizáveis (`ui/` para shadcn/ui e `common/` para o projeto);
- `src/services/` — Esquema de conexão com o backend (cliente HTTP e endpoints);
- `src/hooks/` — Custom hooks React reutilizáveis;
- `src/types/` — Tipagens e interfaces TypeScript compartilhadas;
- `src/styles/` — Estilos globais, diretivas do TailwindCSS e variáveis de tema;
- `src/lib/` — Utilitários puros e helpers de bibliotecas (como `cn()` do shadcn/ui);
- `src/assets/` — Recursos estáticos importados pelo código e otimizados no build.
