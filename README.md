# project-patterns

Repositório privado com uma **estrutura padronizada de diretórios** para projetos de desenvolvimento de software em formato **monorepo**.

> **Nota conceitual:** Esta estrutura define *organização de diretórios por responsabilidade* — ela **não impõe** um estilo arquitetural rígido (como Clean Architecture ou Hexagonal Architecture), permitindo que cada projeto evolua no nível de complexidade adequado ao seu contexto.

## Premissas do Repositório

1. **Monorepo:** `backend/`, `frontend/` e `docs/` versionados juntos no mesmo repositório;
2. **Backend:** Padrão voltado para **Python + FastAPI + uv**, contemplando esquema de segurança, conexões (banco de dados e integrações externas), serviços de LLMs e testes automatizados;
3. **Frontend:** Padrão voltado para **React + React-Router + TypeScript + TailwindCSS + shadcn/ui**, contemplando esquemas de conexão com o backend e espaço preparado para testes automatizados;
4. **Documentação (`docs/`):** Centralização dos artefatos de Gestão (inspiração PMBOK), Especificações (SDD), Decisões Técnicas (ADRs) e Contratos.

## Pilares do Projeto

| Diretório | Papel no Monorepo | Documentação |
| :--- | :--- | :--- |
| `backend/` | API, regras de negócio, segurança, conexões e serviços de LLMs (FastAPI + uv) | [backend/README.md](./backend/README.md) |
| `frontend/` | Interface web, rotas, componentes e comunicação com a API (React + TS + Tailwind + shadcn/ui) | [frontend/README.md](./frontend/README.md) |
| `docs/` | Artefatos centralizados de gestão, especificações (SDD), ADRs e contratos | [docs/README.md](./docs/README.md) |

## Convenção de Documentação da Estrutura

- **Diretórios principais:** Possuem um `README.md` descrevendo finalidade, conteúdo armazenado, responsabilidades e mapa de subdiretórios.
- **Subdiretórios:** Não possuem documentação própria; contêm exclusivamente um arquivo `.gitkeep` para preservação da estrutura no Git até que recebam arquivos reais do projeto.
