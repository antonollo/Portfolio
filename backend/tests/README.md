# Tests (`backend/tests`)

## Finalidade
Centralizar os testes automatizados do backend, garantindo um espaço dedicado e padronizado para validar o comportamento da aplicação conforme ela evolui.

## Conteúdo Armazenado
- Testes unitários de funções utilitárias, regras de negócio e componentes isolados;
- Testes de integração envolvendo endpoints FastAPI, banco de dados de teste e integrações;
- Arquivos de configuração e fixtures compartilhadas (ex.: `conftest.py` no `pytest`).

## Responsabilidades
- Validar que novas alterações não quebrem comportamentos existentes (prevenção de regressões);
- Documentar na prática o comportamento esperado das regras de negócio e dos endpoints;
- Separar testes rápidos e isolados (`unit/`) de testes que exercitam múltiplas partes em conjunto (`integration/`).

## Subdiretórios
- `unit/` — Testes rápidos e isolados que validam funções e lógicas individuais sem depender de banco ou rede;
- `integration/` — Testes que validam a interação entre rotas HTTP, banco de dados, segurança e serviços em conjunto.
