"use strict";
console.log("Hello world! Este é meu primeiro código TypeScript");
console.log("================================================");
var nome = "João";
console.log("Olá" + nome + ". Seja bem-vindo!");
var Produto = (function () {
    function Produto(ProdutoNome, ProdutoValor) {
        this.nome = ProdutoNome;
        this.valor = ProdutoValor;
    }
    return Produto;
}());
var playsation5 = new Produto("PlayStation 5", 5000);
//# sourceMappingURL=primeiro_codigo.js.map