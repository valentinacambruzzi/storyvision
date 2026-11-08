# StoryVision

Plataforma que ensina storytelling com dados e ajuda a pessoa a transformar os próprios dados em uma narrativa apresentável.

## Pessoas

**Usuário**:
Pessoa com conta no StoryVision, que aprende pelos Módulos e cria Roteiros com o Assistente.
_Avoid_: Aluno, conta, cliente
_Code_: `User`

## Aprender

**Módulo**:
Unidade temática do curso, composta por Aulas e Exercícios em uma ordem definida.
_Avoid_: Curso, capítulo, unidade
_Code_: `Module`

**Aula**:
Conteúdo explicativo que pertence a exatamente um Módulo.
_Avoid_: Lição, conteúdo
_Code_: `Lesson`

**Exercício**:
Pergunta de fixação que pertence a exatamente um Módulo e tem uma resposta correta.
_Avoid_: Questão, quiz, atividade
_Code_: `Exercise`

**Resposta**:
Uma tentativa de resolver um Exercício; um Exercício pode receber várias Respostas.
_Avoid_: Tentativa, submissão
_Code_: `Answer`

**Módulo concluído**:
Módulo em que todos os Exercícios já receberam ao menos uma Resposta correta. Ler as Aulas não conta.
_Avoid_: Módulo finalizado, módulo completo
_Code_: `Completed module`

**Progresso**:
O conjunto de Módulos concluídos e Exercícios acertados de uma pessoa.
_Avoid_: Andamento, status
_Code_: `Progress`

## Criar

**Assistente**:
Ajudante que guia a pessoa na construção de uma narrativa a partir dos dados dela. Não produz slides nem gráficos prontos.
_Avoid_: Chat, bot, IA
_Code_: `Assistant`

**Roteiro**:
Plano de apresentação gerado pelo Assistente: mensagem principal, sequência de slides e tipo de gráfico sugerido para cada slide.
_Avoid_: Apresentação, storyboard, deck
_Code_: `Script`

**Público**:
Quem vai assistir à apresentação; dado de entrada do Roteiro.
_Avoid_: Audiência
_Code_: `Audience`

**Objetivo**:
O que a apresentação quer que o Público saiba ou faça; dado de entrada do Roteiro.
_Avoid_: Meta, propósito
_Code_: `Goal`

## Apoio

**Material**:
Referência externa ou complementar ao curso, classificada por tipo (ferramenta, leitura, dica).
_Avoid_: Recurso, ferramenta, dica (como entidades separadas)
_Code_: `Material`
