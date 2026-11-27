# Types (`frontend/src/types`)

## Finalidade
Centralizar definições de tipos e interfaces TypeScript compartilhadas entre múltiplas partes do frontend, garantindo segurança de tipos de ponta a ponta.

## Conteúdo Armazenado
- Interfaces e types que representam contratos de requisição e resposta trocados com o backend;
- Tipos compartilhados de entidades de interface, enums, respostas paginadas e formatos padronizados de erro.

## Responsabilidades
- Servir como referência única de tipagem para `src/services/`, `src/hooks/`, `src/pages/` e `src/components/`;
- Evitar duplicação de interfaces e divergências de contrato entre frontend e backend;
- Manter tipos estritamente locais a um único componente junto ao próprio componente, reservando `src/types/` para tipos compartilhados.

## Subdiretórios
Este diretório não possui subdiretórios pré-fixados. Os arquivos devem ser organizados por domínio ou recurso (por exemplo: `auth.ts`, `api.ts`, `user.ts`).
