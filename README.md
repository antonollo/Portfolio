# Portfolio:

Repositório privado com uma **estrutura padronizada de diretórios** para projetos de desenvolvimento de software em formato **monorepo**.

> **Nota conceitual:** Esta estrutura define *organização de diretórios por responsabilidade* — ela **não impõe** um estilo arquitetural rígido (como Clean Architecture ou Hexagonal Architecture), permitindo que cada projeto evolua no nível de complexidade adequado ao seu contexto.

## Premissas do Repositório

1. **Monorepo:** `frontend/` versionado;
2. **Frontend:** Padrão voltado para **React + React-Router + TypeScript + TailwindCSS + shadcn/ui**, contemplando esquemas de conexão com o backend e espaço preparado para testes automatizados;

## Pilares do Projeto

| Diretório | Papel no Monorepo | Documentação |
| :--- | :--- | :--- |
| `frontend/` | Interface web, rotas, componentes e comunicação com a API (React + TS + Tailwind + shadcn/ui) | [frontend/README.md](./frontend/README.md) |

## Convenção de Documentação da Estrutura

- **Diretórios principais:** Possuem um `README.md` descrevendo finalidade, conteúdo armazenado, responsabilidades e mapa de subdiretórios.
- **Subdiretórios:** Não possuem documentação própria;
