# LLM (`backend/app/llm`)

## Finalidade
Isolar toda a lógica relacionada a modelos de linguagem (LLMs) e Inteligência Artificial generativa, evitando que prompts, configurações de SDK e fluxos de inferência fiquem espalhados pela aplicação.

## Conteúdo Armazenado
- Clientes e adaptadores para provedores de LLM (ex.: Gemini, OpenAI, Anthropic, Ollama);
- Templates de prompts, instruções de sistema e exemplos (few-shot);
- Pipelines de execução, extração estruturada (structured outputs), tool calling e pós-processamento.

## Responsabilidades
- Desacoplar o restante da aplicação de um provedor específico de LLM, facilitando troca de modelos ou fallback;
- Manter prompts organizados, legíveis e fáceis de versionar;
- Garantir conformidade com os contratos definidos em `docs/contracts/llm/`.

## Subdiretórios
- `providers/` — Configuração, autenticação e clientes dos provedores de LLM;
- `prompts/` — Templates de prompts, system instructions e variações versionadas;
- `pipelines/` — Fluxos compostos de chamada, chains, structured outputs e pós-processamento de respostas.
