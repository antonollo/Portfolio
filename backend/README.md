# Backend

## Finalidade
Centralizar toda a aplicação servidora do projeto, construída sobre o ecossistema **Python + FastAPI + uv**, separando claramente o código-fonte executável (`app/`), os testes automatizados (`tests/`) e os arquivos de configuração do projeto que residem na raiz deste diretório (como `pyproject.toml`, `uv.lock`, `.env.example` e `Dockerfile`).

## Conteúdo Armazenado
- Código-fonte da API, configurações centrais, segurança, conexões externas, modelos de dados, schemas de validação, regras de negócio, serviços de LLMs e utilitários (`app/`);
- Suíte de testes automatizados (`tests/`);
- Arquivos de configuração de ambiente, dependências (`uv`) e execução local do servidor (na raiz de `backend/`).

## Responsabilidades
- Expor endpoints HTTP seguros e bem validados para consumo do frontend e integrações;
- Gerenciar autenticação, autorização e proteção de dados;
- Centralizar conexões com bancos de dados, serviços externos e provedores de LLMs;
- Garantir isolamento entre contratos de entrada/saída (`schemas/`), persistência (`models/`) e lógica de negócio (`services/`).

## Subdiretórios
O backend organiza seu código-fonte dentro do contêiner `app/` e seus testes em `tests/`:

- `app/api/` — Camada de entrada HTTP (rotas, middlewares e dependências FastAPI);
- `app/core/` — Configurações globais da aplicação e logging;
- `app/security/` — Autenticação, autorização e regras de acesso;
- `app/connections/` — Conexões com banco de dados e serviços/APIs externos;
- `app/models/` — Estruturas de persistência (tabelas/ORM);
- `app/schemas/` — Contratos de entrada e saída validados com Pydantic;
- `app/services/` — Regras de negócio e orquestração da aplicação;
- `app/llm/` — Integrações, prompts e pipelines envolvendo LLMs;
- `app/utils/` — Funções utilitárias puras e reutilizáveis;
- `tests/` — Testes automatizados (unitários e de integração).
