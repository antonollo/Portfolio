# Schemas (`backend/app/schemas`)

## Finalidade
Centralizar os contratos de entrada e saída da API usando modelos de validação (Pydantic), definindo exatamente quais dados a aplicação aceita receber e retorna.

## Conteúdo Armazenado
- Modelos Pydantic para validação de payloads de requisição (`requests/`);
- Modelos Pydantic para serialização e padronização de respostas (`responses/`);
- Schemas auxiliares compartilhados (ex.: envelopes de paginação e formatos padrão de erro).

## Responsabilidades
- Validar e tipar automaticamente os dados que entram pela camada `app/api/`;
- Garantir que apenas campos autorizados sejam serializados nas respostas da API, evitando vazamento de dados sensíveis;
- Manter alinhamento com os contratos documentados em `docs/contracts/api/`.

## Subdiretórios
- `requests/` — Schemas de validação para dados recebidos pela API (body, query, filtros);
- `responses/` — Schemas que definem o formato das respostas devolvidas pela API.
