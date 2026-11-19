/* Motor do jogo. Não precisa mexer aqui: as cenas ficam em cenas.js. */
(function () {
  var J = window.JOGO;
  var CHAVE = J.chave || "carmen-jogo-v1";
  var palco = document.getElementById("palco");
  var rotuloArco = document.getElementById("rotulo-arco");
  var botaoFichas = document.getElementById("botao-fichas");
  var painel = document.getElementById("painel-fichas");
  var listaFichas = document.getElementById("lista-fichas");

  /* ---------- estado (checkpoint) ---------- */
  var estado = carregar() || novoEstado();
  function novoEstado() {
    var abertas = Object.keys(J.fichas).filter(function (k) { return J.fichas[k].inicial; });
    return { arco: 0, fichas: abertas, novas: [], venceu: false, arroba: "", data: "", iniciado: false };
  }
  function carregar() {
    try { var s = JSON.parse(localStorage.getItem(CHAVE)); return s && typeof s.arco === "number" ? s : null; } catch (e) { return null; }
  }
  function salvar() { try { localStorage.setItem(CHAVE, JSON.stringify(estado)); } catch (e) {} }

  /* ---------- utilidades ---------- */
  function esc(t) { return String(t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function fmt(t) { return esc(t).replace(/\*([^*]+)\*/g, "<em>$1</em>"); }
  function paragrafos(lista, classe) {
    return (lista || []).map(function (p) {
      var fala = /^\s*—/.test(p);
      return '<p class="' + (classe || "") + (fala ? " fala" : "") + '">' + fmt(p) + "</p>";
    }).join("");
  }
  function embaralhar(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function mostrar(html, foco) {
    palco.innerHTML = html;
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    var alvo = palco.querySelector(foco || "h2, h1");
    if (alvo) { alvo.setAttribute("tabindex", "-1"); alvo.focus({ preventScroll: true }); }
  }
  function numeral(n) { return ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"][n] || String(n + 1); }
  function rotulo(texto) { rotuloArco.textContent = texto || ""; }

  /* ---------- fichas ---------- */
  function abrirFichas(ids) {
    (ids || []).forEach(function (id) {
      if (J.fichas[id] && estado.fichas.indexOf(id) < 0) { estado.fichas.push(id); estado.novas.push(id); }
    });
    atualizarBotaoFichas();
  }
  function atualizarBotaoFichas() {
    var n = estado.novas.length;
    botaoFichas.innerHTML = "Fichas" + (n ? ' <span class="selo-nova" aria-label="' + n + ' nova(s)">' + n + "</span>" : "");
  }
  function desenharFichas() {
    listaFichas.innerHTML = Object.keys(J.fichas).map(function (id) {
      var f = J.fichas[id];
      if (estado.fichas.indexOf(id) < 0) {
        return '<li class="ficha bloqueada"><h3>???</h3><p class="papel">Ainda não apareceu na história.</p></li>';
      }
      var nova = estado.novas.indexOf(id) >= 0 ? ' <span class="selo-nova">nova</span>' : "";
      return '<li class="ficha"><details' + (nova ? " open" : "") + "><summary><h3>" + esc(f.nome) + nova + '</h3><p class="papel">' + esc(f.papel) + "</p></summary>" + paragrafos(f.texto) + "</details></li>";
    }).join("");
  }
  botaoFichas.addEventListener("click", function () {
    desenharFichas();
    if (typeof painel.showModal === "function") painel.showModal(); else painel.setAttribute("open", "");
  });
  painel.addEventListener("close", function () { estado.novas = []; salvar(); atualizarBotaoFichas(); });
  document.getElementById("fechar-fichas").addEventListener("click", function () {
    if (typeof painel.close === "function") painel.close(); else { painel.removeAttribute("open"); estado.novas = []; salvar(); atualizarBotaoFichas(); }
  });
  painel.addEventListener("click", function (e) { if (e.target === painel && painel.close) painel.close(); });

  /* ---------- telas ---------- */
  function telaInicio() {
    rotulo("");
    var temProgresso = estado.iniciado && !estado.venceu;
    var html =
      '<section class="tela inicio">' +
      '<p class="rotulo">Um jogo de escolhas</p>' +
      "<h1>" + esc(J.titulo) + "</h1>" +
      '<p class="subtitulo">' + esc(J.subtitulo) + "</p>" +
      '<div class="aviso"><strong>Aviso</strong> ' + esc(J.aviso) + "</div>" +
      '<div class="acoes">';
    if (estado.venceu) {
      html += '<button class="botao principal" data-acao="vitoria">Ver minha tela de vitória</button>' +
        '<button class="botao" data-acao="zerar">Jogar de novo</button>';
    } else if (temProgresso) {
      html += '<button class="botao principal" data-acao="continuar">Continuar do arco ' + numeral(estado.arco) + "</button>" +
        '<button class="botao" data-acao="zerar">Começar do zero</button>';
    } else {
      html += '<button class="botao principal" data-acao="comecar">Começar</button>';
    }
    html += "</div>";
    if (J.outraVersao) html += '<p class="outra-versao"><a href="' + esc(J.outraVersao.link) + '">' + esc(J.outraVersao.texto) + "</a></p>";
    html += "</section>";
    mostrar(html, "h1");
  }

  function telaAbertura() {
    rotulo("Prólogo");
    mostrar(
      '<section class="tela">' +
      '<p class="rotulo">Prólogo</p><h2>Antes de começar</h2>' +
      '<div class="texto">' + paragrafos(J.abertura) + "</div>" +
      '<div class="acoes"><button class="botao principal" data-acao="arco">Entrar em Serra Verde</button></div>' +
      "</section>"
    );
  }

  function telaArco() {
    var a = J.arcos[estado.arco];
    rotulo("Arco " + numeral(estado.arco) + " · " + a.titulo);
    mostrar(
      '<section class="tela arco">' +
      '<p class="rotulo">Arco ' + numeral(estado.arco) + " de " + numeral(J.arcos.length - 1) + "</p>" +
      "<h2>" + esc(a.titulo) + "</h2>" +
      '<div class="texto epigrafe">' + paragrafos(a.abertura) + "</div>" +
      '<div class="acoes"><button class="botao principal" data-acao="cena" data-cena="0">Começar o arco</button></div>' +
      "</section>"
    );
  }

  function telaCena(i) {
    var a = J.arcos[estado.arco], c = a.cenas[i];
    abrirFichas(c.desbloqueia);
    salvar();
    rotulo("Arco " + numeral(estado.arco) + " · " + a.titulo);
    var novas = (c.desbloqueia || []).map(function (id) { return J.fichas[id] ? J.fichas[id].nome : ""; }).filter(Boolean);
    var opcoes = embaralhar(c.opcoes.map(function (o, k) { return { o: o, k: k }; }));
    mostrar(
      '<section class="tela cena">' +
      '<p class="rotulo">Encruzilhada ' + (i + 1) + " de " + a.cenas.length + "</p>" +
      "<h2>" + esc(c.titulo) + "</h2>" +
      (novas.length ? '<p class="aviso-ficha">Nova ficha: ' + esc(novas.join(", ")) + ". Abra em <em>Fichas</em>, lá em cima.</p>" : "") +
      '<div class="texto">' + paragrafos(c.texto) + "</div>" +
      '<fieldset class="escolha"><legend>' + esc(c.pergunta) + "</legend>" +
      opcoes.map(function (x) {
        return '<button class="opcao" data-acao="escolher" data-cena="' + i + '" data-opcao="' + x.k + '">' + fmt(x.o.texto) + "</button>";
      }).join("") +
      "</fieldset></section>"
    );
  }

  function escolher(i, k) {
    var a = J.arcos[estado.arco], c = a.cenas[i], o = c.opcoes[k];
    if (o.certa) {
      abrirFichas(o.desbloqueia);
      salvar();
      var ultima = i === a.cenas.length - 1;
      mostrar(
        '<section class="tela resultado">' +
        '<p class="rotulo">' + esc(c.titulo) + "</p>" +
        '<blockquote class="escolhida">' + fmt(o.texto) + "</blockquote>" +
        '<div class="texto">' + paragrafos(o.resultado) + "</div>" +
        '<div class="acoes">' +
        (ultima
          ? '<button class="botao principal" data-acao="fecho">Continuar</button>'
          : '<button class="botao principal" data-acao="cena" data-cena="' + (i + 1) + '">Continuar</button>') +
        "</div></section>", ".rotulo"
      );
    } else {
      mostrar(
        '<section class="tela derrota">' +
        '<p class="rotulo">Fim da linha</p>' +
        '<blockquote class="escolhida">' + fmt(o.texto) + "</blockquote>" +
        '<div class="texto">' + paragrafos(o.resultado) + "</div>" +
        '<p class="selo-fim">A história de Carmen terminou aqui.</p>' +
        '<div class="acoes">' +
        '<button class="botao principal" data-acao="arco">Tentar de novo do início do arco ' + numeral(estado.arco) + "</button>" +
        '<a class="botao" href="' + esc(J.linkLivro) + '" target="_blank" rel="noopener">Ler o livro</a>' +
        "</div></section>", ".rotulo"
      );
    }
  }

  function telaFecho() {
    var a = J.arcos[estado.arco];
    var ultimo = estado.arco === J.arcos.length - 1;
    mostrar(
      '<section class="tela fecho">' +
      '<p class="rotulo">Fim do arco ' + numeral(estado.arco) + "</p>" +
      "<h2>" + esc(a.titulo) + "</h2>" +
      '<div class="texto">' + paragrafos(a.fecho) + "</div>" +
      '<div class="acoes"><button class="botao principal" data-acao="' + (ultimo ? "vencer" : "proximo") + '">' +
      (ultimo ? "Ver o final" : "Seguir para o arco " + numeral(estado.arco + 1)) + "</button></div>" +
      "</section>"
    );
  }

  function telaVitoria() {
    rotulo("Vitória");
    var temCodigo = estado.arroba && window.CODIGO.valido(estado.arroba);
    var html =
      '<section class="tela vitoria">' +
      '<p class="rotulo">Vitória</p>' +
      '<p class="ornamento" aria-hidden="true">❦</p>' +
      "<h2>" + esc(J.tituloVitoria || "Carmen chegou ao Palácio Real") + "</h2>" +
      '<div class="texto">' + paragrafos(J.vitoria) + "</div>" +
      '<div class="premio">';
    if (temCodigo) {
      html +=
        '<p class="premio-valor">' + esc(J.premio.valor) + "</p>" +
        '<p class="premio-de">no livro <em>Carmen</em> para <strong>@' + esc(estado.arroba) + "</strong></p>" +
        '<p class="codigo">' + esc(window.CODIGO.gerar(estado.arroba)) + "</p>" +
        '<p class="premio-data">Concluído em ' + esc(estado.data) + "</p>" +
        '<p class="premio-instrucao">' + esc(J.premio.instrucao) + "</p>" +
        '<div class="acoes"><a class="botao principal" href="' + esc(J.premio.instagram) + '" target="_blank" rel="noopener">Abrir o Instagram</a></div>';
    } else {
      html +=
        '<p class="premio-valor">' + esc(J.premio.valor) + "</p>" +
        '<p>Digite o seu @ do Instagram para gerar o seu código de desconto. Ele vale só para o seu perfil.</p>' +
        '<form class="form-arroba" data-acao="arroba">' +
        '<label for="arroba">Seu @ no Instagram</label>' +
        '<div class="linha-arroba"><span aria-hidden="true">@</span><input id="arroba" name="arroba" autocomplete="username" autocapitalize="none" spellcheck="false" required maxlength="31" placeholder="seuperfil"></div>' +
        '<p class="erro" id="erro-arroba" hidden>Use só letras, números, ponto e sublinhado.</p>' +
        '<button class="botao principal" type="submit">Gerar meu código</button>' +
        "</form>";
    }
    html += "</div>" +
      '<div class="acoes"><a class="botao" href="' + esc(J.linkLivro) + '" target="_blank" rel="noopener">Continuar a história no livro</a></div>' +
      "</section>";
    mostrar(html);
  }

  /* ---------- ações ---------- */
  palco.addEventListener("click", function (e) {
    var b = e.target.closest("[data-acao]");
    if (!b || b.tagName === "FORM") return;
    var acao = b.getAttribute("data-acao");
    if (acao === "comecar") { estado = novoEstado(); estado.iniciado = true; salvar(); telaAbertura(); }
    else if (acao === "continuar") { telaArco(); }
    else if (acao === "zerar") { estado = novoEstado(); estado.iniciado = true; salvar(); atualizarBotaoFichas(); telaAbertura(); }
    else if (acao === "arco") { telaArco(); }
    else if (acao === "cena") { telaCena(+b.getAttribute("data-cena")); }
    else if (acao === "escolher") { escolher(+b.getAttribute("data-cena"), +b.getAttribute("data-opcao")); }
    else if (acao === "fecho") { telaFecho(); }
    else if (acao === "proximo") { estado.arco += 1; salvar(); telaArco(); }
    else if (acao === "vencer") { estado.venceu = true; salvar(); telaVitoria(); }
    else if (acao === "vitoria") { telaVitoria(); }
  });
  palco.addEventListener("submit", function (e) {
    e.preventDefault();
    var campo = palco.querySelector("#arroba");
    var erro = palco.querySelector("#erro-arroba");
    if (!window.CODIGO.valido(campo.value)) { erro.hidden = false; campo.focus(); return; }
    estado.arroba = window.CODIGO.normalizar(campo.value);
    estado.data = new Date().toLocaleDateString("pt-BR");
    salvar();
    telaVitoria();
  });

  /* ---------- tema (mesmo do site) ---------- */
  atualizarBotaoFichas();
  telaInicio();
})();
