# Routes (`frontend/src/routes`)

## Finalidade
Centralizar a configuração de navegação da aplicação usando **React-Router**, definindo o mapeamento entre URLs, layouts e páginas, bem como regras de proteção de acesso.

## Conteúdo Armazenado
- Definição da árvore de rotas (públicas, privadas/autenticadas, fallback 404);
- Componentes ou wrappers de proteção de rota (route guards) que verificam autenticação/permissões antes de renderizar páginas;
- Constantes de caminhos de rota para evitar strings repetidas espalhadas pelo código.

## Responsabilidades
- Servir como fonte única da verdade sobre a navegação do frontend;
- Associar cada rota ao seu respectivo `layout` (`src/layouts/`) e `page` (`src/pages/`);
- Impedir que lógica de controle de acesso por rota fique duplicada dentro de cada tela.

## Subdiretórios
Este diretório não possui subdiretórios pré-fixados. Os arquivos podem ser organizados por agrupamento de rotas (por exemplo: `index.tsx`, `private-route.tsx`).
