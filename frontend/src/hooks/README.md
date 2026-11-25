# Hooks (`frontend/src/hooks`)

## Finalidade
Armazenar custom hooks React reutilizáveis que encapsulam lógica de estado, efeitos colaterais, interações de interface ou futuras integrações de busca e cache de dados.

## Conteúdo Armazenado
- Custom hooks nomeados com o prefixo `use` (ex.: `useDebounce.ts`, `useMediaQuery.ts`, `useAuth.ts`);
- Futuramente, hooks especializados de gerenciamento de estado assíncrono e cache (como hooks baseados em TanStack Query).

## Responsabilidades
- Reutilizar lógica comportamental entre múltiplos componentes e páginas sem duplicação;
- Manter componentes visuais mais limpos, separando lógica reativa da marcação JSX.

## Subdiretórios
Este diretório não possui subdiretórios pré-fixados. Os hooks devem ser criados diretamente conforme a necessidade da aplicação.
