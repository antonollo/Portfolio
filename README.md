# Portfolio:

<img src="./public/gitlogo.svg" width="100%" alt="Banner" />

> **Nota conceitual:** Esta estrutura define _organização de diretórios por responsabilidade_ — ela **não impõe** um estilo arquitetural rígido (como Clean Architecture ou Hexagonal Architecture).

## Premissas do Repositório

Este repositório visa tornar público o acesso ao código-fonte do meu portfólio técnico, atualmente disponível também no [Vercel](https://antonolloportfolio.vercel.app).

Este repositório é produto de um laboratório de experimentação de Agentic SDLC, SDD (Spec-Driven Development) e Orquestração Linear de Agentes de IA, como Spec-Agent (especificações com `Openspec`), UI-Agent (planejamento e desenho de arquitetura), QA (Quality Assurance) Agent e Motion-Agent (animações com GSAP). Os esboços das telas foram originalmente desenhados a punho no **Figma**.

## Pilares do Projeto

| Diretório   | Papel no Monorepo                                                                                                   | Documentação                               |
| :---------- | :------------------------------------------------------------------------------------------------------------------ | :----------------------------------------- |
| `frontend/` | Interface web, rotas, componentes e comunicação com a API (React + TS + Tailwind + GSAP + Lenis + React-Router-DOM) | [frontend/README.md](./frontend/README.md) |

## Convenção de Documentação da Estrutura:

- **Diretórios principais:** Possuem um `README.md` descrevendo finalidade, conteúdo armazenado, responsabilidades e mapa de subdiretórios.
- **Subdiretórios:** Não possuem documentação própria;
