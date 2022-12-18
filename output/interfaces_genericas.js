"use strict";
var texto = {
    valor: "hcode",
    realizarProcessamento: function (argumento) {
        return argumento.toUpperCase();
    }
};
console.log(texto.valor);
console.log(texto.realizarProcessamento("hcode treinamentos"));
var numero = {
    valor: 10,
    realizarProcessamento: function (v) {
        return v * v;
    }
};
console.log(numero.realizarProcessamento(numero.valor));
//# sourceMappingURL=interfaces_genericas.js.map