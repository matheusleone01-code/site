# Seu site: como atualizar e publicar

## O que tem na pasta

| Arquivo | Para quê | Precisa mexer? |
|---|---|---|
| `dados.js` | Bio, redes, livro atual, datas, perguntas, livros lidos, ebooks | **Sim, só este** |
| `index.html` | Estrutura da página | Não |
| `estilo.css` | Cores e fontes | Não |
| `app.js` | Monta a página a partir do `dados.js` | Não |
| `capas/` | Imagens das capas (o `dados.js` aponta pra elas) | Só pra adicionar capas novas |
| `img/` | Sua foto e a imagem de fundo do topo | Só pra trocar as imagens |

## Atualizar o clube (sem mexer em código)

Abra `dados.js` e altere só o que está entre aspas.

- **Trocar de livro:** edite `livroAtual` (título, autor, estrutura) e os blocos de `encontros`.
- **Mudar data/hora:** `data: "2026-12-06"` (ano-mês-dia) e `hora: "20:00"` (Brasília).
- **Link do Google Meet:** cole em `link: ""` do encontro de 13/12. O botão "Entrar no encontro" aparece sozinho.
- **Terminou um livro:** adicione em `lidos`, por exemplo
  `{ titulo: "Amanhecer na Colheita", autor: "Suzanne Collins", quando: "Dez/2026" },`
- **Ebooks:** um bloco por livro em `ebooks` (há um modelo comentado no arquivo).
- **Contato:** preencha `email` e/ou `newsletter`. Se ficarem vazios, a seção some.

O site marca sozinho qual encontro é o "Próximo", conta os dias que faltam e marca os passados como "Concluído".

Cuidado com aspas e vírgulas: cada item termina com vírgula, e todo texto fica entre aspas.

## Publicar de graça (recomendado: GitHub Pages)

1. Crie uma conta em github.com (se ainda não tiver).
2. Clique em **New repository**, dê um nome (ex.: `site`), deixe **Public** e crie.
3. Na página do repositório, clique em **uploading an existing file** e arraste os 4 arquivos (`index.html`, `estilo.css`, `app.js`, `dados.js`) e as pastas `capas` e `img`. Clique em **Commit changes**.
4. Vá em **Settings → Pages**, em "Branch" escolha `main` e `/ (root)`, e clique em **Save**.
5. Em 1 ou 2 minutos o site fica em `https://SEU-USUARIO.github.io/site/`. Coloque esse link na bio do Instagram.

Para atualizar depois: abra `dados.js` no GitHub, clique no lápis (Edit), altere e clique em **Commit changes**. O site atualiza em cerca de 1 minuto, inclusive pelo celular.

### Alternativa mais rápida: Netlify Drop

Entre em app.netlify.com/drop e arraste a pasta inteira. O site sai na hora com um link `*.netlify.app`. A desvantagem é que, para atualizar, você precisa arrastar a pasta de novo.

### Domínio próprio (opcional)

Os dois aceitam domínio próprio (ex.: `matheusleone.com.br`, registrado no registro.br por cerca de R$ 40/ano).
