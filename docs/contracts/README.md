# Contracts (`docs/contracts`)

## Finalidade
Documentar formalmente os contratos técnicos e interfaces de comunicação entre as diferentes partes do sistema, reduzindo divergências de integração.

## Conteúdo Armazenado
- Especificações de API HTTP/REST trocadas entre `frontend/` e `backend/` (`api/`);
- Especificações de contratos envolvendo modelos de linguagem, formatos de saída estruturada e requisitos de prompts (`llm/`).

## Responsabilidades
- Atuar como fonte da verdade compartilhada entre backend (`app/schemas/`, `app/llm/`) e frontend (`src/services/`, `src/types/`);
- Tornar explícitos formatos de payload, códigos de status, padrões de erro, requisitos de autenticação e esquemas esperados de respostas de LLMs;
- Facilitar o desenvolvimento paralelo entre frontend e backend com menos quebras de integração.

## Subdiretórios
- `api/` — Contratos HTTP/REST entre frontend e backend (OpenAPI/Swagger, exemplos de payloads, autenticação e padrões de erro);
- `llm/` — Contratos de entrada/saída estruturada (JSON Schemas), critérios de avaliação e especificações de prompts críticos.
