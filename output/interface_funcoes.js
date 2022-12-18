"use strict";
var primeiraSoma;
primeiraSoma = function (numero1, numero2) {
    return numero1 + numero2;
};
var calculadora;
function adicao(a, b) {
    return a + b;
}
var subtrair = function (n1, n2) { return n1 - n2; };
calculadora = {
    multiplicar: function (numero1, numero2) {
        return numero1 * numero2;
    },
    dividir: function (numero1, numero2) {
        var r = numero1 / numero2;
        return r;
    },
    somar: adicao,
    subtrair: subtrair
};
console.log(calculadora.dividir(10, 2));
//# sourceMappingURL=interface_funcoes.js.map