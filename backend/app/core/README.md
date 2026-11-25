# Core (`backend/app/core`)

## Finalidade
Centralizar configurações globais e recursos transversais essenciais para a inicialização e observabilidade da aplicação backend.

## Conteúdo Armazenado
- Classes e módulos de leitura e validação de variáveis de ambiente (ex.: `pydantic-settings`);
- Configurações de logging estruturado, níveis de log e formatação;
- Constantes globais de inicialização da aplicação.

## Responsabilidades
- Garantir que todas as variáveis de ambiente obrigatórias sejam validadas na inicialização (fail-fast);
- Fornecer um ponto único de acesso às configurações da aplicação, evitando leituras espalhadas de `os.getenv`;
- Padronizar a emissão de logs para facilitar depuração e monitoramento.

## Subdiretórios
- `config/` — Definição, carregamento e validação de configurações e variáveis de ambiente;
- `logging/` — Setup de loggers, formatadores e handlers da aplicação.
