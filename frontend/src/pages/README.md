# Pages (`frontend/src/pages`)

## Finalidade
Conter as telas completas da aplicação que são renderizadas diretamente pelas rotas configuradas em `src/routes/`.

## Conteúdo Armazenado
- Componentes de página completos (ex.: `LoginPage`, `DashboardPage`, `SettingsPage`);
- Composição de componentes de `src/components/`, chamadas a `src/services/` ou `src/hooks/` e organização do estado específico de cada tela.

## Responsabilidades
- Orquestrar a experiência completa de cada tela (carregamento, estados vazios, erros e interações do usuário);
- Compor elementos reutilizáveis de `src/components/` em vez de reimplementar blocos de UI repetitivos;
- Delegar chamadas HTTP para `src/services/` e regras compartilhadas para `src/hooks/`.

## Subdiretórios
Este diretório não possui subdiretórios pré-fixados. Conforme a aplicação cresce, cada tela ou fluxo pode ser organizado em arquivos ou pastas próprias por domínio (por exemplo: `dashboard/`, `auth/`).
