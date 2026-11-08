# Conteúdo do curso em MDX no repositório, sem painel admin

Módulos, Aulas e Exercícios ficam em arquivos MDX versionados no Git, e não no banco. Há uma única autora, e escrever em Markdown com revisão pelo Git é mais simples do que manter telas de cadastro, upload de imagens e um papel de administrador. Por isso não existe Adm no sistema: o banco guarda apenas dados do Usuário (conta, Respostas, Progresso, Roteiros).

## Consequences

- Publicar ou corrigir conteúdo exige um commit e um deploy.
- Respostas e Progresso referenciam Exercícios e Módulos por um identificador estável (slug) definido no MDX, não por id do banco. Renomear um slug quebra o vínculo com Respostas já gravadas.
- Se um dia houver vários autores sem acesso ao repositório, esta decisão precisa ser revista (CMS ou volta ao banco).
