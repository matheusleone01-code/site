/* Métricas do site (GoatCounter: grátis, sem cookies).
   Painel: https://omatheusleone.goatcounter.com
   Para trocar a conta, mude só a linha CODIGO abaixo. */
(function () {
  var CODIGO = "omatheusleone";

  // Não conta prévias locais nem páginas fora do domínio oficial.
  if (!/(^|\.)omatheusleone\.com\.br$/.test(location.hostname)) return;

  window.goatcounter = { endpoint: "https://" + CODIGO + ".goatcounter.com/count" };
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://gc.zgo.at/count.js";
  document.head.appendChild(s);

  // Nome amigável do destino de cada link externo.
  function destino(host) {
    if (/(^|\.)(amazon\.|a\.co$|amzn\.)/.test(host)) return "Amazon";
    if (/(^|\.)(instagram\.com|ig\.me)$/.test(host)) return "Instagram";
    if (/(^|\.)tiktok\.com$/.test(host)) return "TikTok";
    if (/(^|\.)(youtube\.com|youtu\.be)$/.test(host)) return "YouTube";
    if (/(^|\.)flyve\.com\.br$/.test(host)) return "Livro físico";
    if (/(^|\.)meet\.google\.com$/.test(host)) return "Google Meet";
    return host.replace(/^www\./, "");
  }

  // Conta cada clique em link que sai do site, como "evento".
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[href]");
    if (!a || a.host === location.host || !/^https?:$/.test(a.protocol)) return;
    var onde = destino(a.hostname);
    var livro = a.closest(".ebook");
    var titulo = livro && livro.querySelector("h3");
    var texto = (titulo ? titulo.textContent : (a.getAttribute("aria-label") || a.textContent)).replace(/\s+/g, " ").trim();
    var pagina = /^\/carmen\//.test(location.pathname) ? " (jogo)" : "";
    var nome = (texto && texto !== onde ? onde + " · " + texto : onde) + pagina;
    if (window.goatcounter && window.goatcounter.count) {
      window.goatcounter.count({ path: "clique: " + nome, title: nome, event: true });
    }
  });
})();
