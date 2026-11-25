# Docs (`docs`)

## Finalidade
Centralizar todos os artefatos de documentação e governança referentes ao projeto como um todo, servindo como fonte única de contexto para humanos e agentes ao longo de todo o ciclo de vida do software.

## Conteúdo Armazenado
- Artefatos de gestão e planejamento inspirados no PMBOK (`management/`);
- Especificações e planos do processo Spec-Driven Development (`specs/`);
- Registros históricos de decisões técnicas e diagramas de arquitetura (`adrs/`);
- Contratos técnicos de comunicação e integração entre partes do sistema (`contracts/`).

## Responsabilidades
- Manter alinhamento entre visão de negócio, especificações funcionais, decisões técnicas e contratos de implementação;
- Garantir rastreabilidade histórica do *porquê* das decisões tomadas ao longo do projeto;
- Separar documentação de projeto/arquitetura (aqui em `docs/`) das instruções operacionais de setup local (que vivem nos `README.md` de `backend/` e `frontend/`).

## Subdiretórios
- `management/` — Artefatos de gestão de projeto (TAP, EAP, Roadmap, Gerenciamento de Riscos);
- `specs/` — Especificações funcionais/técnicas e planos do fluxo Spec-Driven Development (SDD);
- `adrs/` — *Architecture Decision Records* (decisões técnicas numeradas) e diagramas de apoio;
- `contracts/` — Contratos técnicos de API (frontend ↔ backend) e de LLMs (prompts e saídas estruturadas).
