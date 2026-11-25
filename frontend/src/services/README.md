# Services (`frontend/src/services`)

## Finalidade
Centralizar todo o esquema de conexão do frontend com o backend (FastAPI), isolando detalhes de transporte HTTP, autenticação e mapeamento de endpoints.

## Conteúdo Armazenado
- Configuração do cliente HTTP base (`client/`);
- Funções tipadas que encapsulam chamadas específicas aos endpoints da API (`endpoints/`).

## Responsabilidades
- Configurar em um único ponto a URL base da API, headers padrão, envio de tokens de autenticação e tratamento global de erros HTTP (como `401 Unauthorized`);
- Impedir que chamadas `fetch`/`axios` fiquem espalhadas diretamente dentro de páginas ou componentes;
- Garantir que requisições e respostas respeitem as tipagens de `src/types/` e os contratos documentados em `docs/contracts/api/`.

## Subdiretórios
- `client/` — Instância e configuração base do cliente HTTP (baseURL, headers, interceptors e tratamento global de erros);
- `endpoints/` — Funções de comunicação com a API agrupadas por recurso (ex.: `auth.ts`, `users.ts`, `llm.ts`).
