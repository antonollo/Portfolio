# Components (`frontend/src/components`)

## Finalidade
Centralizar todos os componentes de interface reutilizáveis da aplicação, separando claramente os componentes primitivos gerados pelo **shadcn/ui** dos componentes compostos criados especificamente para o projeto.

## Conteúdo Armazenado
- Componentes base de UI instalados via CLI do `shadcn/ui` (`ui/`);
- Componentes reutilizáveis construídos para o projeto a partir da composição de primitivos e estilos TailwindCSS (`common/`).

## Responsabilidades
- Promover reuso e consistência visual em toda a aplicação;
- Manter os componentes do `shadcn/ui` isolados em `ui/` para facilitar atualizações e customizações controladas;
- Manter componentes focados em apresentação e interação, evitando acoplamento direto com rotas específicas.

## Subdiretórios
- `ui/` — Componentes base gerados pelo **shadcn/ui** (ex.: `button.tsx`, `dialog.tsx`, `input.tsx`, `card.tsx`);
- `common/` — Componentes reutilizáveis próprios do projeto (ex.: cabeçalhos de seção, estados vazios, tabelas customizadas).
