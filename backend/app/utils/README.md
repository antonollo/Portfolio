# Utils (`backend/app/utils`)

## Finalidade
Armazenar funções utilitárias puras, pequenas e altamente reutilizáveis que apoiam múltiplas partes do backend sem pertencer a um domínio específico.

## Conteúdo Armazenado
- Helpers de manipulação de strings, datas, fusos horários e formatação;
- Geradores de identificadores, slugs ou funções auxiliares matemáticas/de conversão;
- Pequenas funções puras sem efeitos colaterais.

## Responsabilidades
- Evitar duplicação de código genérico entre diferentes módulos da aplicação;
- Manter funções independentes de estado global, banco de dados, contexto HTTP ou regras de negócio específicas — evitando que o diretório se torne um depósito genérico desorganizado.

## Subdiretórios
Este diretório não possui subdiretórios pré-fixados. Os arquivos devem ser organizados por categoria de utilidade (por exemplo: `dates.py`, `strings.py`).
