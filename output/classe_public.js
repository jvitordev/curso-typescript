"use strict";
var Veiculo = (function () {
    function Veiculo(cor) {
        this.cor = cor;
    }
    Veiculo.prototype.tentarAbrirPorta = function () {
        return false;
    };
    return Veiculo;
}());
var carro = new Veiculo("Branco");
carro.cor = "Preto";
console.log(carro.cor);
console.log(carro.tentarAbrirPorta());
//# sourceMappingURL=classe_public.js.map