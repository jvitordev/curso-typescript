"use strict";
var Pessoa = (function () {
    function Pessoa(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
    Pessoa.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Pessoa.prototype.toString = function () {
        return "A pessoa ".concat(this.nome, " tem ").concat(this.idade, " anos e mede ").concat(this.altura, " de altura.");
    };
    return Pessoa;
}());
var ronaldo = new Pessoa("Ronaldo Braz", 30, 1.85);
var marcus = new Pessoa("Marcus Ribeiro", 19, 2);
ronaldo.nome = "Ronaldo";
console.log("Pessoa: " + ronaldo);
console.log("Pessoa: " + marcus);
//# sourceMappingURL=primeira_classe.js.map