# API (`backend/app/api`)

## Finalidade
Concentrar a camada de entrada HTTP da aplicação FastAPI, responsável por receber requisições externas, aplicar validações e interceptações de transporte e delegar o processamento para os serviços adequados.

## Conteúdo Armazenado
- Definições de rotas/endpoints FastAPI (`APIRouter`);
- Middlewares HTTP transversais (CORS, rastreamento de requisições, tratamento global de exceções);
- Funções de injeção de dependência reutilizáveis via `Depends(...)` (sessão de banco, usuário autenticado, paginação).

## Responsabilidades
- Traduzir requisições HTTP em chamadas para `services/` e formatar respostas usando `schemas/`;
- Manter rotas enxutas, sem concentrar regras de negócio complexas diretamente nos endpoints;
- Garantir consistência de códigos de status HTTP, headers e tratamento de erros.

## Subdiretórios
- `routes/` — Endpoints agrupados por recurso ou funcionalidade (ex.: usuários, autenticação, chat);
- `middlewares/` — Interceptadores aplicados ao ciclo de requisição/resposta HTTP;
- `dependencies/` — Injeções de dependência reutilizáveis entre múltiplas rotas FastAPI.
