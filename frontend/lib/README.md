# Lib (`frontend/src/lib`)

## Finalidade
Centralizar funções utilitárias puras e pequenos módulos de suporte/integração com bibliotecas de terceiros, seguindo a convenção padrão do ecossistema **shadcn/ui + TailwindCSS**.

## Conteúdo Armazenado
- Utilitário `cn()` (combinação de `clsx` e `tailwind-merge`, padrão do shadcn/ui em `src/lib/utils.ts`);
- Funções puras de formatação (datas, moedas, textos), validações genéricas e helpers reutilizáveis.

## Responsabilidades
- Fornecer helpers genéricos e previsíveis para qualquer camada do frontend sem acoplamento a componentes React específicos;
- Evitar que lógica utilitária pura seja duplicada entre páginas, hooks e serviços.

## Subdiretórios
Este diretório não possui subdiretórios pré-fixados. Os arquivos devem ser organizados conforme a finalidade (por exemplo: `utils.ts`, `formatters.ts`).
