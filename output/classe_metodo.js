"use strict";
var Professor = (function () {
    function Professor(nome, idade, materia) {
        this.nome = nome;
        this.idade = idade;
        this.materia = materia;
    }
    Professor.prototype.seApresentar = function () {
        return "Meu nome \u00E9 ".concat(this.nome, ", tenho ").concat(this.idade, " anos e vou lecionar ").concat(this.materia, ".");
    };
    Professor.prototype.dizerNotas = function () {
        var notas = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            notas[_i] = arguments[_i];
        }
        var notasTotal = notas.reduce(function (total, notaAtual) { return total + notaAtual; }, 0);
        return notasTotal / notas.length;
    };
    return Professor;
}());
var glaucio = new Professor("Glaucio Daniel", 45, "DBA");
console.log(glaucio.seApresentar());
console.log("==========");
var joaoRangel = new Professor("João Rangel", 25, "TypeScript");
console.log(joaoRangel.seApresentar());
console.log(joaoRangel.dizerNotas(8, 10, 5.5, 7.5));
//# sourceMappingURL=classe_metodo.js.map