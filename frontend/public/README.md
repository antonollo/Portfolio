# Public (`frontend/public`)

## Finalidade
Armazenar arquivos estáticos que precisam ser servidos diretamente pela raiz da aplicação web, mantendo seus nomes e caminhos fixos sem passar pelo processamento do bundler.

## Conteúdo Armazenado
- `favicon.ico`, manifestos web (`manifest.json`), `robots.txt` e ícones de aplicativo;
- Imagens ou arquivos estáticos referenciados por caminho absoluto público (ex.: `/og-image.png`).

## Responsabilidades
- Disponibilizar recursos estáticos em URLs previsíveis e fixas;
- Evitar armazenar aqui imagens ou ícones que devam ser importados via TypeScript/React e otimizados no build (esses pertencem a `src/assets/`).

## Subdiretórios
Este diretório não possui subdiretórios pré-fixados. Arquivos estáticos públicos devem ser adicionados diretamente conforme a necessidade do projeto.
