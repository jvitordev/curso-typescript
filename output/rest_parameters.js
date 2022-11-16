"use strict";
function somarRenda(...meses) {
    return meses.reduce((rendaTotal, rendaAtual) => rendaTotal + rendaAtual, 0);
}
console.log(somarRenda(250, 780, 695, 2000, 6500));
console.log("================================");
function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
}
console.log(myFun("one", "two", "three", "four", "five", "six"));
//# sourceMappingURL=rest_parameters.js.map