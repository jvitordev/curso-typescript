"use strict";
let primeiraSoma;
primeiraSoma = (numero1, numero2) => {
    return numero1 + numero2;
};
let calculadora;
function adicao(a, b) {
    return a + b;
}
const subtrair = (n1, n2) => n1 - n2;
calculadora = {
    multiplicar: function (numero1, numero2) {
        return numero1 * numero2;
    },
    dividir: (numero1, numero2) => {
        let r = numero1 / numero2;
        return r;
    },
    somar: adicao,
    subtrair
};
console.log(calculadora.dividir(10, 2));
//# sourceMappingURL=interface_funcoes.js.map