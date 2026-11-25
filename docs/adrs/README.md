# ADRs (`docs/adrs`)

## Finalidade
Registrar de forma cronológica, curta e auditável as decisões técnicas e arquiteturais relevantes tomadas ao longo do projeto por meio de **Architecture Decision Records (ADRs)**.

## Conteúdo Armazenado
- Arquivos Markdown numerados sequencialmente na raiz deste diretório (ex.: `0001-escolha-fastapi-uv.md`, `0002-uso-shadcn-ui.md`), contendo contexto, decisão tomada, alternativas avaliadas, consequências e status (*Proposed*, *Accepted*, *Superseded*);
- Diagramas visuais que apoiam o entendimento das decisões e da arquitetura do sistema (`diagrams/`).

## Responsabilidades
- Preservar a memória técnica do projeto (o *porquê* de cada escolha importante);
- Evitar a gestão de decisões em um único arquivo monolítico difícil de versionar, permitindo substituir decisões antigas sem apagar o histórico;
- Facilitar o onboarding de novos participantes ou agentes no repositório.

## Subdiretórios
- `diagrams/` — Diagramas de apoio às decisões e visão de arquitetura (ex.: fluxos de dados, DER do banco, diagramas C4 em Mermaid, SVG ou PNG).
