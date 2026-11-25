# Security (`backend/app/security`)

## Finalidade
Isolar todo o esquema de segurança da aplicação backend, concentrando mecanismos de identificação de usuários, controle de acesso e proteção de credenciais.

## Conteúdo Armazenado
- Lógica de autenticação (emissão e validação de tokens JWT, OAuth2, API keys);
- Funções de hashing e verificação de senhas;
- Regras de autorização, papéis (RBAC), escopos e verificadores de permissão.

## Responsabilidades
- Garantir que credenciais e tokens sejam manipulados de forma centralizada, auditável e segura;
- Separar claramente **autenticação** (*quem é o usuário*) de **autorização** (*o que o usuário pode fazer*);
- Fornecer funções e dependências claras para proteger endpoints em `app/api/`.

## Subdiretórios
- `auth/` — Fluxos e utilitários de autenticação (tokens, senhas, validação de identidade);
- `permissions/` — Políticas de autorização, papéis (RBAC), escopos e guards de acesso.
