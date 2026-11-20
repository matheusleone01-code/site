/* Monta o site a partir de dados.js. Você não precisa mexer aqui. */
(function () {
  var D = window.DADOS;
  var P = D.perfil, C = D.clube;
  var MESES = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
  var DIAS = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(id) { return document.getElementById(id); }
  // Horário de Brasília (UTC-3)
  function quando(e) { return new Date(e.data + "T" + (e.hora || "20:00") + ":00-03:00"); }
  function iniciais(n) { return n.split(/\s+/).map(function (p) { return p[0]; }).slice(0, 2).join("").toUpperCase(); }
  // Capa: usa a imagem se houver; senão desenha uma. Com link, a capa vira clicável.
  function capa(titulo, autor, url, link) {
    var c = url
      ? '<img class="capa" src="' + esc(url) + '" alt="Capa de ' + esc(titulo) + '" loading="lazy">'
      : '<div class="capa" aria-hidden="true"><span class="t">' + esc(titulo) + '</span><span class="a">' + esc(autor) + "</span></div>";
    if (!link) return c;
    return '<a class="capa-link" href="' + esc(link) + '" target="_blank" rel="noopener" aria-label="' + esc(titulo) + ' na Amazon">' + c + "</a>";
  }

  var ICONES = {
    instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zM17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM12 2c-2.7 0-3 0-4.1.1C5.3 2.2 3.3 3.7 2.6 6 2.2 7.2 2 8.5 2 12s0 3.6.1 4.1c.2 2.7 1.6 4.6 4 5.3 1.2.4 2.4.6 5.9.6s3.6 0 4.1-.1c2.7-.2 4.6-1.6 5.3-4 .4-1.2.6-2.4.6-5.9s0-3.6-.1-4.1c-.2-2.7-1.6-4.6-4-5.3C16.8 2.2 15.5 2 12 2zm0 1.8c3.4 0 3.5 0 4 .1 1.9.1 3.4 1 4 2.8.2.7.3 1.6.3 4.9 0 3.4 0 3.5-.1 4-.1 1.9-1 3.4-2.8 4-.7.2-1.6.3-5.4.3-3.4 0-3.5 0-4-.1-1.9-.1-3.4-1-4-2.8-.2-.7-.3-1.6-.3-5.4 0-3.4 0-3.5.1-4 .1-1.9 1-3.4 2.8-4 .7-.2 1.6-.3 5.4-.3z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.7 15V9l5.8 3-5.8 3z"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.6 2h-3.3v13.4a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .9.1V9.2a6.2 6.2 0 1 0 5.3 6.2V8.6a7.6 7.6 0 0 0 4.4 1.4V6.7A4.4 4.4 0 0 1 16.6 2z"/></svg>'
  };

  /* Início */
  document.title = P.nome;
  $("avatar").outerHTML = P.foto
    ? '<img class="avatar" id="avatar" src="' + esc(P.foto) + '" alt="Foto de ' + esc(P.nome) + '">'
    : '<div class="avatar" id="avatar" aria-hidden="true">' + esc(iniciais(P.nome)) + "</div>";
  if (P.fundo) $("topo-fundo").style.backgroundImage = 'url("' + P.fundo + '")';
  $("nome").textContent = P.nome;
  $("bio").textContent = P.bio;
  var redes = "";
  if (P.instagram) redes += '<a class="botao" href="' + esc(P.instagram) + '" target="_blank" rel="noopener">' + ICONES.instagram + "Instagram</a>";
  if (P.tiktok) redes += '<a class="botao" href="' + esc(P.tiktok) + '" target="_blank" rel="noopener">' + ICONES.tiktok + "TikTok</a>";
  if (P.youtube) redes += '<a class="botao" href="' + esc(P.youtube) + '" target="_blank" rel="noopener">' + ICONES.youtube + "YouTube</a>";
  redes += '<a class="botao principal" href="#clube">Clube do livro</a>';
  $("redes").innerHTML = redes;

  /* Clube: livro atual */
  var L = C.livroAtual;
  $("clube-intro").textContent = C.descricao;
  if (C.grupo) $("clube-intro").insertAdjacentHTML("afterend", '<p class="cta-grupo"><a class="botao principal" href="' + esc(C.grupo) + '" target="_blank" rel="noopener">Entrar no grupo do clube</a></p>');
  $("livro").innerHTML =
    capa(L.titulo, L.autor, L.capa, L.link) +
    "<div><h3>" + esc(L.titulo) + "</h3>" +
    (L.tituloOriginal ? '<p class="orig">' + esc(L.tituloOriginal) + " · " + esc(L.autor) + "</p>" : '<p class="orig">' + esc(L.autor) + "</p>") +
    (L.estrutura ? '<p class="meta">' + esc(L.estrutura) + "</p>" : "") +
    (L.link ? '<p class="comprar"><a class="botao" href="' + esc(L.link) + '" target="_blank" rel="noopener">Ver o livro na Amazon</a></p>' : "") +
    '<div id="proximo"></div></div>';

  /* Clube: cronograma */
  var agora = new Date();
  var idxProximo = -1;
  C.encontros.forEach(function (e, i) {
    // um encontro conta como "passado" 2h depois do início
    if (idxProximo < 0 && quando(e).getTime() + 2 * 3600e3 > agora.getTime()) idxProximo = i;
  });

  $("cronograma").innerHTML = C.encontros.map(function (e, i) {
    var d = quando(e);
    var dia = Number(e.data.slice(8, 10)), mes = MESES[Number(e.data.slice(5, 7)) - 1];
    var semana = DIAS[new Date(e.data + "T12:00:00-03:00").getUTCDay()];
    var estado = i === idxProximo ? ["proximo-selo", "Próximo encontro"] : (idxProximo < 0 || i < idxProximo) ? ["feito", "Concluído"] : ["breve", "Em breve"];
    var linkHtml = e.link ? '<a class="link-encontro" href="' + esc(e.link) + '" target="_blank" rel="noopener">Entrar no ' + esc(e.local || 'encontro') + ' →</a>'
      : (e.local ? '<p class="detalhe">Local: ' + esc(e.local) + (/meet/i.test(e.local) && i >= idxProximo && idxProximo >= 0 ? " (link em breve)" : "") + "</p>" : "");
    var perguntas = (e.perguntas || []).length
      ? "<details" + (i === idxProximo ? " open" : "") + "><summary>Perguntas para o debate</summary><ol>" +
        e.perguntas.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ol></details>"
      : "";
    return '<li class="encontro' + (estado[0] === "feito" ? " passado" : "") + '">' +
      '<div class="dia"><b>' + dia + "</b><span>" + mes + "</span></div>" +
      "<div>" + '<span class="selo ' + estado[0] + '">' + estado[1] + "</span>" +
      "<h3>" + esc(e.parte) + ": " + esc(e.capitulos) + "</h3>" +
      '<p class="detalhe">' + esc(e.formato) + " · " + semana + ", " + esc(e.hora) + " (Brasília)</p>" +
      linkHtml + perguntas + "</div></li>";
  }).join("");

  /* Próximo encontro */
  if (idxProximo >= 0) {
    var e = C.encontros[idxProximo], d = quando(e);
    // diferença em dias de calendário, no horário de Brasília
    function diaBR(t) { return Math.floor((t - 3 * 3600e3) / 864e5); }
    var dias = diaBR(d.getTime()) - diaBR(agora.getTime());
    var falta = d - agora <= 0 ? "Acontecendo agora" : dias === 0 ? "É hoje" : dias === 1 ? "É amanhã" : "Faltam " + dias + " dias";
    $("proximo").innerHTML = '<div class="proximo"><div class="rotulo" style="margin:0 0 .4rem">Próximo encontro</div>' +
      '<div class="quando">' + Number(e.data.slice(8, 10)) + " de " + MESES[Number(e.data.slice(5, 7)) - 1] + " às " + esc(e.hora.replace(":00", "h")) + "</div>" +
      "<div>" + esc(e.formato) + ": " + esc(e.capitulos.toLowerCase()) + "</div>" +
      '<div class="falta">' + falta + "</div></div>";
  }

  /* Livros lidos */
  $("lidos").innerHTML = (C.lidos || []).length
    ? "<ul>" + C.lidos.map(function (l) {
        return "<li><div><strong>" + esc(l.titulo) + "</strong> · " + esc(l.autor) + "</div><span>" + esc(l.quando || "") + "</span></li>";
      }).join("") + "</ul>"
    : '<p class="vazio">A lista começa quando terminarmos o primeiro livro.</p>';

  /* Ebooks */
  var E = D.ebooks || [];
  $("ebooks").innerHTML = E.map(function (b) {
    return '<article class="ebook">' + capa(b.titulo, P.nome, b.capa, b.link) +
      "<h3>" + esc(b.titulo) + "</h3>" + (b.sinopse ? "<p>" + esc(b.sinopse) + "</p>" : "") +
      (b.link ? '<a class="botao principal" href="' + esc(b.link) + '" target="_blank" rel="noopener">Ver na Amazon</a>' : "") + "</article>";
  }).join("");
  $("ebooks").hidden = !E.length;
  $("amazon").innerHTML = P.amazon
    ? '<a class="botao' + (E.length ? "" : " principal") + '" href="' + esc(P.amazon) + '" target="_blank" rel="noopener">' + (E.length ? "Ver todos na Amazon" : "Ver meus ebooks na Amazon") + "</a>"
    : "";

  /* Ilustrações */
  var IL = D.ilustracoes;
  if (IL && (IL.imagens || []).length) {
    $("ilustracoes").innerHTML =
      "<h3>" + esc(IL.titulo || "Ilustrações") + "</h3>" +
      (IL.texto ? '<p class="ilustracoes-texto">' + esc(IL.texto) + "</p>" : "") +
      '<div class="ilustracoes-grade">' + IL.imagens.map(function (im) {
        return '<a class="ilustracao" href="' + esc(im.src) + '" target="_blank" rel="noopener"><img src="' + esc(im.src) + '" alt="' + esc(im.descricao || "") + '" loading="lazy"></a>';
      }).join("") + "</div>" +
      (IL.credito ? '<p class="ilustracoes-credito">' + esc(IL.credito) + "</p>" : "");
    $("ilustracoes").hidden = false;
  }

  /* Contato */
  if (!P.email && !P.newsletter) {
    $("contato").hidden = true;
    var navC = document.querySelector('.nav a[href="#contato"]');
    if (navC) navC.parentNode.hidden = true;
  } else {
    var c = "";
    if (P.email) c += "<div>E-mail: <code>" + esc(P.email) + "</code></div>";
    if (P.newsletter) c += '<div><a class="botao principal" href="' + esc(P.newsletter) + '" target="_blank" rel="noopener">Assinar a newsletter</a></div>';
    $("contato-conteudo").innerHTML = c;
  }

  $("ano").textContent = new Date().getFullYear();
})();
