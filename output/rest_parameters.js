"use strict";
function somarRenda() {
    var meses = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        meses[_i] = arguments[_i];
    }
    return meses.reduce(function (rendaTotal, rendaAtual) { return rendaTotal + rendaAtual; }, 0);
}
console.log(somarRenda(250, 780, 695, 2000, 6500));
console.log("================================");
function myFun(a, b) {
    var manyMoreArgs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        manyMoreArgs[_i - 2] = arguments[_i];
    }
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
}
console.log(myFun("one", "two", "three", "four", "five", "six"));
//# sourceMappingURL=rest_parameters.js.map