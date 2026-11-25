# Services (`backend/app/services`)

## Finalidade
Concentrar as regras de negócio e a orquestração dos fluxos principais da aplicação, mantendo a lógica central desacoplada dos detalhes HTTP de `app/api/`.

## Conteúdo Armazenado
- Módulos de serviço agrupados por funcionalidade ou recurso do sistema;
- Fluxos que combinam leitura/escrita no banco (`models/` + `connections/`), validações de negócio e chamadas a serviços auxiliares ou de IA (`llm/`).

## Responsabilidades
- Implementar e garantir as regras de negócio da aplicação;
- Coordenar operações entre persistência, segurança, integrações externas e LLMs;
- Permitir que a mesma regra de negócio seja reutilizada por diferentes endpoints, tarefas em background ou testes sem depender de objetos HTTP do FastAPI.

## Subdiretórios
Este diretório não possui subdiretórios pré-fixados. Os módulos devem ser criados conforme as funcionalidades do projeto evoluem (por exemplo: `user_service.py`, `auth_service.py`).
