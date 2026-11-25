# Models (`backend/app/models`)

## Finalidade
Definir as estruturas de persistência de dados da aplicação, representando como as informações são armazenadas no banco de dados.

## Conteúdo Armazenado
- Definições de tabelas, colunas, relacionamentos e índices (ex.: modelos SQLAlchemy ou SQLModel);
- Enums e tipos específicos ligados à camada de persistência.

## Responsabilidades
- Espelhar fielmente o modelo de dados armazenado no banco;
- Manter separação clara em relação a `app/schemas/`, evitando expor diretamente estruturas internas do banco (como hashes de senha ou metadados internos) nas respostas da API.

## Subdiretórios
Este diretório não possui subdiretórios pré-fixados. Os arquivos devem ser organizados organicamente por recurso ou módulo do projeto (por exemplo: `user.py`, `document.py`).
