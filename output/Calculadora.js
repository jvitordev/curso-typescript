"use strict";
var SOMA = '+';
var SUBTRACAO = '-';
var MULTIPLICACAO = '*';
var DIVISAO = '/';
var Calculadora = (function () {
    function Calculadora() {
    }
    Calculadora.calcular = function (operando1, operando2, operador) {
        switch (operador) {
            case SOMA:
                return operando1 + operando2;
            case SUBTRACAO:
                return operando1 - operando2;
            case MULTIPLICACAO:
                return operando1 * operando2;
            case DIVISAO:
                return operando1 / operando2;
            default:
                throw new Error('Operador inválido');
        }
    };
    return Calculadora;
}());
console.log(Calculadora.calcular(1, 2, SOMA));
console.log(Calculadora.calcular(10, 5, SUBTRACAO));
console.log(Calculadora.calcular(3, 3, MULTIPLICACAO));
console.log(Calculadora.calcular(9, 3, DIVISAO));
//# sourceMappingURL=Calculadora.js.map