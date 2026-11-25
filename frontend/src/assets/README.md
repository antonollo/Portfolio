# Assets (`frontend/src/assets`)

## Finalidade
Armazenar recursos estáticos que são importados diretamente pelo código TypeScript/React para serem processados, otimizados e versionados com hash pelo bundler durante o build.

## Conteúdo Armazenado
- Imagens, ilustrações e gráficos utilizados dentro de componentes e páginas (`images/`);
- Ícones customizados e arquivos SVG próprios da marca ou do produto (`icons/`).

## Responsabilidades
- Organizar recursos visuais processados pelo build separados dos arquivos estáticos públicos de `frontend/public/`;
- Facilitar a localização e reutilização de mídia sem espalhar arquivos soltos junto ao código-fonte.

## Subdiretórios
- `images/` — Imagens, fotografias e ilustrações importadas em componentes e páginas;
- `icons/` — Ícones customizados e SVGs próprios que não vêm de bibliotecas de ícones (como `lucide-react`).
