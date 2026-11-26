# Layouts (`frontend/src/layouts`)

## Finalidade
Agrupar as molduras visuais estruturais compartilhadas entre grupos de páginas, evitando repetição de elementos persistentes durante a navegação.

## Conteúdo Armazenado
- Estruturas de página reutilizáveis (ex.: `AppLayout` com barra lateral e cabeçalho, `AuthLayout` para telas de login/cadastro, `PublicLayout`);
- Containers que utilizam `<Outlet />` do React-Router para renderizar o conteúdo da página ativa.

## Responsabilidades
- Garantir consistência visual entre telas que compartilham a mesma estrutura;
- Evitar que componentes estruturais (como sidebar e navbar) sejam remontados desnecessariamente a cada troca de rota;
- Manter foco apenas na composição estrutural, delegando o conteúdo específico para `src/pages/`.

## Subdiretórios
Este diretório não possui subdiretórios pré-fixados. Os layouts devem ser adicionados conforme os contextos visuais da aplicação (por exemplo: `app-layout.tsx`, `auth-layout.tsx`).
