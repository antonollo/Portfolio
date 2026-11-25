# Tests (`frontend/tests`)

## Finalidade
Reservar um espaço centralizado e padronizado para os testes automatizados do frontend, pronto para apoiar a evolução do projeto à medida que a prática de testes for adotada.

## Conteúdo Armazenado
- Testes unitários de utilitários (`src/lib/`), custom hooks (`src/hooks/`) e componentes isolados (`src/components/`);
- Testes de integração de fluxos de páginas, navegação entre rotas e interações com API mockada;
- Configurações auxiliares de ambiente de teste e mocks compartilhados.

## Responsabilidades
- Garantir confiabilidade da interface e prevenir regressões visuais ou comportamentais em alterações futuras;
- Separar claramente testes isolados e rápidos (`unit/`) de testes de fluxos completos de tela e rotas (`integration/`).

## Subdiretórios
- `unit/` — Testes rápidos e isolados de funções puras, hooks e componentes individuais;
- `integration/` — Testes de fluxos de usuário envolvendo páginas, rotas e respostas simuladas do backend.
