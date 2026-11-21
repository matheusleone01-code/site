/* Gera o código de vitória a partir do @ do Instagram.
   O mesmo @ sempre gera o mesmo código; um @ diferente gera outro.
   Se um dia quiser invalidar todos os códigos antigos, troque o SEGREDO. */
(function () {
  var SEGREDO = "madalena-pequena-cancao-1";
  var ALFABETO = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

  function normalizar(arroba) {
    return String(arroba || "").trim().toLowerCase().replace(/^@+/, "").replace(/\s+/g, "");
  }
  function valido(arroba) {
    return /^[a-z0-9._]{1,30}$/.test(normalizar(arroba));
  }
  function fnv(texto, semente) {
    var h = semente >>> 0;
    for (var i = 0; i < texto.length; i++) {
      h ^= texto.charCodeAt(i);
      h = Math.imul(h, 16777619) >>> 0;
    }
    return h >>> 0;
  }
  // valor = desconto em reais; sem valor, é o código antigo (R$ 10 fixo)
  function codigo(arroba, valor) {
    var base = "carmen|" + normalizar(arroba) + "|" + SEGREDO + (valor ? "|" + valor : "");
    var a = fnv(base, 2166136261), b = fnv(base + "#", 3735928559);
    var s = "";
    for (var i = 0; i < 4; i++) { s += ALFABETO[a % 32]; a = Math.floor(a / 32); }
    s += "-";
    for (var j = 0; j < 4; j++) { s += ALFABETO[b % 32]; b = Math.floor(b / 32); }
    return s;
  }
  // descobre de quanto é o desconto de um código (0 se não confere)
  function valorDe(arroba, cod) {
    for (var v = 1; v <= 60; v++) if (codigo(arroba, v) === cod) return v;
    return codigo(arroba) === cod ? 10 : 0;
  }
  window.CODIGO = { normalizar: normalizar, valido: valido, gerar: codigo, valorDe: valorDe };
})();
