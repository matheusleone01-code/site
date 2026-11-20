/* Motor do jogo. Não precisa mexer aqui: as cenas ficam em cenas.js. */
(function () {
  var J = window.JOGO;
  var CHAVE = J.chave || "carmen-jogo-v1";
  var palco = document.getElementById("palco");
  var rotuloArco = document.getElementById("rotulo-arco");
  var botaoFichas = document.getElementById("botao-fichas");
  var painel = document.getElementById("painel-fichas");
  var listaFichas = document.getElementById("lista-fichas");
  var botaoBolsa = document.getElementById("botao-bolsa");
  var painelBolsa = document.getElementById("painel-bolsa");
  var listaBolsa = document.getElementById("lista-bolsa");
  J.itens = J.itens || {};
  J.atributos = J.atributos || {};

  /* ---------- estado (checkpoint) ---------- */
  var estado = carregar() || novoEstado();
  function novoEstado() {
    var abertas = Object.keys(J.fichas).filter(function (k) { return J.fichas[k].inicial; });
    return { arco: 0, fichas: abertas, novas: [], itens: [], itensNovos: [], atributos: {}, desvios: 0, marco: null, venceu: false, arroba: "", data: "", iniciado: false };
  }
  function completar(s) {
    if (!s) return s;
    s.itens = s.itens || []; s.itensNovos = s.itensNovos || []; s.desvios = s.desvios || 0; s.atributos = s.atributos || {};
    return s;
  }
  function carregar() {
    try { var s = JSON.parse(localStorage.getItem(CHAVE)); return s && typeof s.arco === "number" ? completar(s) : null; } catch (e) { return null; }
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
  function campos(lista) {
    return (lista || []).map(function (p) {
      var m = /^([^:—“*]{2,24}):\s(.*)$/.exec(p);
      return '<p class="campo">' + (m ? "<strong>" + esc(m[1]) + ":</strong> " + fmt(m[2]) : fmt(p)) + "</p>";
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
  function cenario(id) { if (id) document.body.setAttribute("data-cenario", id); else document.body.removeAttribute("data-cenario"); }
  function cenarioDoArco() { cenario(J.arcos[estado.arco] && J.arcos[estado.arco].cenario); }
  function retrato(f, grande) {
    if (f.retrato) return '<img class="' + (grande ? "retrato-grande" : "retrato") + '" src="' + esc(f.retrato) + '" alt="Retrato de ' + esc(f.nome) + '" loading="lazy">';
    if (grande) return "";
    var ini = String(f.nome).replace(/^(A|As|O|Os|Dona)\s+/, "").charAt(0);
    return '<span class="retrato medalhao" aria-hidden="true">' + esc(ini) + "</span>";
  }

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
        return '<li class="ficha bloqueada"><div class="ficha-topo"><span class="retrato medalhao" aria-hidden="true">?</span><div><h3>???</h3><p class="papel">Ainda não apareceu na história.</p></div></div></li>';
      }
      var nova = estado.novas.indexOf(id) >= 0 ? ' <span class="selo-nova">nova</span>' : "";
      return '<li class="ficha" data-id="' + esc(id) + '"><details' + (nova ? " open" : "") + '><summary><div class="ficha-topo">' + retrato(f) + "<div><h3>" + esc(f.nome) + nova + '</h3><p class="papel">' + esc(f.papel) + "</p></div></div></summary>" + retrato(f, true) + campos(f.texto) + "</details></li>";
    }).join("");
  }
  function verFicha(id) {
    abrirFichas([id]); desenharFichas();
    var li = listaFichas.querySelector('li[data-id="' + id + '"]');
    if (li) { var d = li.querySelector("details"); if (d) d.open = true; }
    if (typeof painel.showModal === "function") painel.showModal(); else painel.setAttribute("open", "");
    if (li) li.scrollIntoView({ block: "start" });
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

  /* ---------- bolsa (itens) ---------- */
  function temItem(id) { return estado.itens.indexOf(id) >= 0; }
  function ganhar(ids) {
    var novos = [];
    (ids || []).forEach(function (id) {
      if (J.itens[id] && !temItem(id)) { estado.itens.push(id); estado.itensNovos.push(id); novos.push(J.itens[id].nome); }
    });
    atualizarBotaoBolsa();
    return novos;
  }
  function perder(ids) {
    var foram = [];
    (ids || []).forEach(function (id) {
      var i = estado.itens.indexOf(id);
      if (i >= 0) { estado.itens.splice(i, 1); foram.push(J.itens[id].nome); }
      var n = estado.itensNovos.indexOf(id); if (n >= 0) estado.itensNovos.splice(n, 1);
    });
    atualizarBotaoBolsa();
    return foram;
  }
  function atualizarBotaoBolsa() {
    if (!botaoBolsa) return;
    botaoBolsa.hidden = !Object.keys(J.itens).length;
    var n = estado.itensNovos.length;
    botaoBolsa.innerHTML = "Bolsa" + (n ? ' <span class="selo-nova" aria-label="' + n + ' novo(s)">' + n + "</span>" : "");
  }
  function desenharBolsa() {
    var at = document.getElementById("lista-atributos");
    if (at) at.innerHTML = Object.keys(J.atributos).map(function (k) {
      var a = J.atributos[k], n = pontosDe(k);
      return '<li class="atributo"><div class="atributo-topo"><h3>' + esc(a.nome) + '</h3><span class="atributo-valor">' + n + "</span></div><p>" + esc(a.texto) + "</p></li>";
    }).join("");
    listaBolsa.innerHTML = estado.itens.length ? estado.itens.map(function (id) {
      var it = J.itens[id];
      var novo = estado.itensNovos.indexOf(id) >= 0 ? ' <span class="selo-nova">novo</span>' : "";
      return '<li class="ficha item"><h3>' + esc(it.nome) + novo + "</h3>" + paragrafos(it.texto) + "</li>";
    }).join("") : '<li class="ficha bloqueada"><p class="papel">A bolsa está vazia. Algumas escolhas deixam Carmen levar coisas consigo.</p></li>';
  }
  if (botaoBolsa) {
    botaoBolsa.addEventListener("click", function () {
      desenharBolsa();
      if (typeof painelBolsa.showModal === "function") painelBolsa.showModal(); else painelBolsa.setAttribute("open", "");
    });
    painelBolsa.addEventListener("close", function () { estado.itensNovos = []; salvar(); atualizarBotaoBolsa(); });
    document.getElementById("fechar-bolsa").addEventListener("click", function () {
      if (typeof painelBolsa.close === "function") painelBolsa.close(); else { painelBolsa.removeAttribute("open"); estado.itensNovos = []; salvar(); atualizarBotaoBolsa(); }
    });
    painelBolsa.addEventListener("click", function (e) { if (e.target === painelBolsa && painelBolsa.close) painelBolsa.close(); });
  }
  /* ---------- atributos ---------- */
  function pontosDe(k) { return estado.atributos[k] || 0; }
  function temAtributo(req) { return Object.keys(req || {}).every(function (k) { return pontosDe(k) >= req[k]; }); }
  function somar(p) {
    var ganhos = [];
    Object.keys(p || {}).forEach(function (k) {
      if (!J.atributos[k]) return;
      estado.atributos[k] = pontosDe(k) + p[k];
      ganhos.push("+" + p[k] + " " + J.atributos[k].nome);
    });
    return ganhos;
  }
  function placarAtributos() {
    return Object.keys(J.atributos).map(function (k) { return J.atributos[k].nome + " " + pontosDe(k); }).join(" · ");
  }
  function avisos(novos, foram, ganhos) {
    var h = "";
    if (ganhos && ganhos.length) h += '<p class="aviso-ponto">' + esc(ganhos.join(" · ")) + "</p>";
    if (novos && novos.length) h += '<p class="aviso-ficha">Na bolsa: ' + esc(novos.join(", ")) + ". Abra em <em>Bolsa</em>, lá em cima.</p>";
    if (foram && foram.length) h += '<p class="aviso-ficha">Saiu da bolsa: ' + esc(foram.join(", ")) + ".</p>";
    return h;
  }

  /* ---------- telas ---------- */
  function telaInicio() {
    rotulo(""); cenario(null);
    var temProgresso = estado.iniciado && !estado.venceu;
    var html =
      '<section class="tela inicio">' +
      '<p class="rotulo">Um jogo de escolhas</p>' +
      "<h1>" + esc(J.titulo) + "</h1>" +
      '<p class="subtitulo">' + esc(J.subtitulo) + "</p>" +
      (J.abertura && J.abertura.length ? '<div class="texto chamada">' + paragrafos(J.abertura) + "</div>" : "") +
      '<div class="aviso"><strong>Aviso</strong> ' + esc(J.aviso) + "</div>" +
      (J.comoJogar ? '<details class="como-jogar"><summary class="rotulo">Como jogar</summary><ul>' + J.comoJogar.map(function (t) { return "<li>" + fmt(t) + "</li>"; }).join("") + "</ul></details>" : "") +
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
    rotulo("Prólogo"); cenario(J.arcos[0].cenario);
    mostrar(
      '<section class="tela">' +
      '<p class="rotulo">Prólogo</p><h2>Antes de começar</h2>' +
      '<div class="texto">' + paragrafos(J.abertura) + "</div>" +
      (J.comoJogar ? '<aside class="como-jogar"><p class="rotulo">Como jogar</p><ul>' + J.comoJogar.map(function (t) { return "<li>" + fmt(t) + "</li>"; }).join("") + "</ul></aside>" : "") +
      '<div class="acoes"><button class="botao principal" data-acao="arco">Entrar em Serra Verde</button></div>' +
      "</section>"
    );
  }

  function telaArco() {
    var a = J.arcos[estado.arco];
    // checkpoint: ao (re)começar um arco, a bolsa e os desvios voltam ao que eram no início dele
    if (estado.marco && estado.marco.arco === estado.arco) {
      estado.itens = estado.marco.itens.slice(); estado.desvios = estado.marco.desvios;
      estado.atributos = JSON.parse(JSON.stringify(estado.marco.atributos || {}));
      estado.itensNovos = estado.itensNovos.filter(temItem);
    } else {
      estado.marco = { arco: estado.arco, itens: estado.itens.slice(), desvios: estado.desvios, atributos: JSON.parse(JSON.stringify(estado.atributos)) };
    }
    salvar(); atualizarBotaoBolsa(); cenarioDoArco();
    rotulo("Arco " + numeral(estado.arco) + " · " + a.titulo);
    mostrar(
      '<section class="tela arco">' +
      '<p class="rotulo">Arco ' + numeral(estado.arco) + " de " + numeral(J.arcos.length - 1) + "</p>" +
      "<h2>" + esc(a.titulo) + "</h2>" +
      (a.imagem ? '<figure class="ilustracao"><img src="' + esc(a.imagem.arquivo) + '" alt="' + esc(a.imagem.descricao || "") + '" decoding="async"></figure>' : "") +
      '<div class="texto epigrafe">' + paragrafos(a.abertura) + "</div>" +
      (a.apresenta ? '<div class="apresenta">' + a.apresenta.filter(function (id) { return J.fichas[id]; }).map(function (id) {
        var f = J.fichas[id];
        return '<button class="apresenta-pessoa" data-acao="ficha" data-ficha="' + esc(id) + '">' + retrato(f) + '<span class="apresenta-nome">' + esc(f.nome) + '</span><span class="apresenta-ver">Ver ficha</span></button>';
      }).join("") + "</div>" : "") +
      '<div class="acoes"><button class="botao principal" data-acao="cena" data-cena="0">Começar o arco</button></div>' +
      "</section>"
    );
  }

  function telaCena(i) {
    var a = J.arcos[estado.arco], c = a.cenas[i];
    abrirFichas(c.desbloqueia);
    salvar(); cenarioDoArco();
    rotulo("Arco " + numeral(estado.arco) + " · " + a.titulo);
    var novas = (c.desbloqueia || []).map(function (id) { return J.fichas[id] ? J.fichas[id].nome : ""; }).filter(Boolean);
    var opcoes = embaralhar(c.opcoes.map(function (o, k) { return { o: o, k: k }; }).filter(function (x) { return (!x.o.requer || temItem(x.o.requer)) && temAtributo(x.o.requerAtributo); }));
    mostrar(
      '<section class="tela cena">' +
      '<p class="rotulo">Encruzilhada ' + (i + 1) + " de " + a.cenas.length + "</p>" +
      "<h2>" + esc(c.quando || c.titulo) + "</h2>" +
      (novas.length ? '<p class="aviso-ficha">Nova ficha: ' + esc(novas.join(", ")) + ". Abra em <em>Fichas</em>, lá em cima.</p>" : "") +
      (c.imagem ? '<figure class="ilustracao"><img src="' + esc(c.imagem.arquivo) + '" alt="' + esc(c.imagem.descricao || "") + '" loading="lazy" decoding="async"></figure>' : "") +
      '<div class="texto">' + paragrafos(c.texto) + "</div>" +
      '<fieldset class="escolha"><legend>' + esc(c.pergunta) + "</legend>" +
      opcoes.map(function (x) {
        var item = x.o.requer && J.itens[x.o.requer];
        var req = x.o.requerAtributo ? Object.keys(x.o.requerAtributo).map(function (k) { return (J.atributos[k] ? J.atributos[k].nome : k) + " " + x.o.requerAtributo[k]; }).join(", ") : "";
        return '<button class="opcao' + (item ? " opcao-item" : "") + (req ? " opcao-atributo" : "") + '" data-acao="escolher" data-cena="' + i + '" data-opcao="' + x.k + '">' +
          (item ? '<span class="marca-item">Da bolsa: ' + esc(item.nome) + "</span>" : "") +
          (req ? '<span class="marca-item">' + esc(req) + "</span>" : "") + fmt(x.o.texto) + "</button>";
      }).join("") +
      "</fieldset></section>"
    );
  }

  function escolher(i, k) {
    var a = J.arcos[estado.arco], c = a.cenas[i], o = c.opcoes[k];
    if (o.certa || o.desvio) {
      var ultima = i === a.cenas.length - 1;
      var corpo;
      if (o.desvio) {
        // erro com conserto: mostra a consequência e depois a fala certa, e a história segue
        var certa = c.opcoes.filter(function (x) { return x.certa && !x.requer && !x.requerAtributo; })[0];
        estado.desvios += 1;
        abrirFichas(certa.desbloqueia);
        var novosD = ganhar(certa.ganha), forD = perder(certa.perde);
        var ganhosDesvio = somar(o.pontos), ganhosD = somar(certa.pontos);
        corpo =
          '<p class="rotulo">Desvio · ' + esc(c.quando || c.titulo) + "</p>" +
          '<blockquote class="escolhida">' + fmt(o.texto) + "</blockquote>" +
          '<div class="texto">' + paragrafos(o.resultado) + "</div>" +
          avisos(null, null, ganhosDesvio) +
          '<p class="conserto">' + esc(J.textoConserto || "Carmen respirou fundo e consertou o rumo:") + "</p>" +
          '<blockquote class="escolhida">' + fmt(certa.texto) + "</blockquote>" +
          avisos(novosD, forD, ganhosD) +
          '<div class="texto">' + paragrafos(certa.resultado) + "</div>";
      } else {
        abrirFichas(o.desbloqueia);
        var novos = ganhar(o.ganha), foram = perder(o.perde), ganhos = somar(o.pontos);
        corpo =
          '<p class="rotulo">' + esc(c.quando || c.titulo) + "</p>" +
          '<blockquote class="escolhida">' + fmt(o.texto) + "</blockquote>" +
          avisos(novos, foram, ganhos) +
          '<div class="texto">' + paragrafos(o.resultado) + "</div>";
      }
      salvar();
      mostrar(
        '<section class="tela resultado' + (o.desvio ? " desvio" : "") + '">' + corpo +
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
    rotulo("Vitória"); cenarioDoArco();
    var temCodigo = estado.arroba && window.CODIGO.valido(estado.arroba);
    var html =
      '<section class="tela vitoria">' +
      '<p class="rotulo">Vitória</p>' +
      '<p class="ornamento" aria-hidden="true">❦</p>' +
      "<h2>" + esc(J.tituloVitoria || "Carmen chegou ao Palácio Real") + "</h2>" +
      '<div class="texto">' + paragrafos(J.vitoria) + "</div>" +
      '<p class="placar">' + (estado.desvios ? "Você chegou com " + estado.desvios + (estado.desvios === 1 ? " desvio" : " desvios") + " no caminho." : "Você chegou sem nenhum desvio. Caminho limpo.") + "</p>" +
      (Object.keys(J.atributos).length ? '<p class="placar">' + esc(placarAtributos()) + "</p>" : "") +
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
    if (acao === "comecar") { estado = novoEstado(); estado.iniciado = true; salvar(); atualizarBotaoFichas(); atualizarBotaoBolsa(); telaArco(); }
    else if (acao === "continuar") { telaArco(); }
    else if (acao === "zerar") { estado = novoEstado(); estado.iniciado = true; salvar(); atualizarBotaoFichas(); atualizarBotaoBolsa(); telaArco(); }
    else if (acao === "arco") { telaArco(); }
    else if (acao === "ficha") { verFicha(b.getAttribute("data-ficha")); }
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
  atualizarBotaoBolsa();
  telaInicio();
})();
