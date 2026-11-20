/* =====================================================================
   DADOS DO SITE  ·  este é o único arquivo que você precisa editar.
   ---------------------------------------------------------------------
   Dicas rápidas:
   - Textos ficam sempre entre aspas: "assim".
   - Cada item de uma lista termina com vírgula.
   - Datas no formato "AAAA-MM-DD" e hora "HH:MM" (horário de Brasília).
   - O site calcula sozinho qual encontro é o próximo e quais já passaram.
   ===================================================================== */

window.DADOS = {

  /* ---------- SOBRE VOCÊ ---------- */
  perfil: {
    nome: "Matheus Leone",
    bio: "Advogado e Escritor. Autor de \"Carmen\" e \"A Maldição do Bastardo\". Faz vlogs de leitura, bastidores da escrita e tece comentários sobre o mercado literário em suas redes sociais: @omatheusleone.",
    // Sua foto (aparece pequena e redonda). Vazio = mostra suas iniciais.
    foto: "img/avatar.jpg",
    // Imagem de fundo do topo do site (fica escurecida e desfocada). Vazio = fundo verde.
    fundo: "img/fundo.jpg",
    instagram: "https://www.instagram.com/omatheusleone/",
    tiktok: "https://www.tiktok.com/@omatheusleone",
    youtube: "https://www.youtube.com/@omatheusleone",
    amazon: "https://www.amazon.com.br/stores/Matheus-Leone/author/B0FP4RFSVC",
    // Opcional. Vazio = a seção de contato some.
    email: "",
    // Link de newsletter (Substack, Beehiiv etc.). Vazio = não aparece.
    newsletter: ""
  },

  /* ---------- CLUBE DO LIVRO ---------- */
  clube: {
    // Uma frase sobre o clube. Troque como quiser.
    // Link do grupo do clube (Instagram). Vazio = o botão some.
    grupo: "https://ig.me/j/ttNsZ1FG1RqR5SBp/",

    descricao: "Um livro por vez, lido em partes, com debates no fim de cada etapa. Qualquer pessoa pode participar.",

    livroAtual: {
      titulo: "Amanhecer na Colheita",
      tituloOriginal: "Sunrise on the Reaping",
      autor: "Suzanne Collins",
      // Imagem da capa: um link ou um arquivo da pasta (ex.: "capas/amanhecer.jpg"). Vazio = capa desenhada pelo site.
      capa: "capas/amanhecer.jpg",
      estrutura: "27 capítulos e epílogo, em 3 partes",
      // Link para comprar o livro (opcional). Vazio = o botão some.
      link: "https://a.co/d/05GdnShK"
    },

    // Um bloco por encontro. Para o próximo livro, é só trocar estes blocos.
    encontros: [
      {
        data: "2026-11-29",
        hora: "20:00",
        formato: "Debate escrito",
        parte: "Parte 1",
        capitulos: "Capítulos 1 a 9",
        // Onde acontece / link (opcional). Vazio = não aparece.
        local: "grupo do Instagram",
        link: "https://ig.me/j/ttNsZ1FG1RqR5SBp/"
      },
      {
        data: "2026-12-06",
        hora: "20:00",
        formato: "Debate escrito",
        parte: "Parte 2",
        capitulos: "Capítulos 10 a 18",
        local: "grupo do Instagram",
        link: "https://ig.me/j/ttNsZ1FG1RqR5SBp/"
      },
      {
        data: "2026-12-13",
        hora: "20:00",
        formato: "Debate ao vivo no Google Meet",
        parte: "Parte 3 e encerramento",
        capitulos: "Capítulo 19 ao epílogo",
        local: "Google Meet",
        link: "https://meet.google.com/cic-tpkz-dmv"
      }
    ],

    // Livros que o clube já leu. Adicione um bloco por livro (o mais recente primeiro).
    // Exemplo: { titulo: "Nome do livro", autor: "Autor", quando: "Out/2026" },
    lidos: [
    ]
  },

  /* ---------- MEUS EBOOKS ---------- */
  // Um bloco por ebook. Enquanto a lista estiver vazia, aparece um botão para a sua página na Amazon.
  // Exemplo:
  // {
  //   titulo: "Título do ebook",
  //   capa: "https://m.media-amazon.com/images/I/XXXX.jpg",
  //   sinopse: "Duas ou três frases sobre o livro.",
  //   link: "https://www.amazon.com.br/dp/XXXXXXXXXX"
  // },
  ebooks: [
    {
      titulo: "Carmen",
      capa: "capas/carmen.jpg",
      sinopse: "Carmen só tinha uma certeza na vida, a de que não seria puta.",
      link: "https://a.co/d/0dUY5sYb"
    },
    {
      titulo: "O Paladino da Alvorada",
      capa: "capas/paladino.jpg",
      sinopse: "A pior pessoa do mundo tem redenção?",
      link: "https://a.co/d/05UyuNIg"
    },
    {
      titulo: "A Maldição do Bastardo",
      capa: "capas/bastardo.jpg",
      sinopse: "Filho de uma prostituta foge de casa e tem que se virar nas ruas.",
      link: "https://a.co/d/0doU4fAK"
    },
    {
      titulo: "Neon Noir",
      capa: "capas/neon.jpg",
      sinopse: "Rio de Janeiro, cyberpunk, 2054.",
      link: "https://a.co/d/0eYRUogM"
    }
  ]
};
