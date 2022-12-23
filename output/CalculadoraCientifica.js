"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var math = __importStar(require("mathjs"));
var SOMA = '+';
var SUBTRACAO = '-';
var MULTIPLICACAO = '*';
var DIVISAO = '/';
var POTENCIACAO = '^';
var RADICIACAO = '√';
var SENO = 'sin';
var COSSENO = 'cos';
var TANGENTE = 'tan';
function grausParaRadianos(graus) {
    return graus * (Math.PI / 180);
}
var CalculadoraCientifica = (function () {
    function CalculadoraCientifica() {
    }
    CalculadoraCientifica.calcular = function (operando1, operando2, operador) {
        switch (operador) {
            case SOMA:
                return operando1 + operando2;
            case SUBTRACAO:
                return operando1 - operando2;
            case MULTIPLICACAO:
                return operando1 * operando2;
            case DIVISAO:
                return operando1 / operando2;
            case POTENCIACAO:
                return math.pow(operando1, operando2);
            case RADICIACAO:
                return math.sqrt(operando1, operando2);
            case SENO:
                return math.sin(grausParaRadianos(operando1));
            case COSSENO:
                return math.cos(grausParaRadianos(operando1));
            case TANGENTE:
                return math.tan(grausParaRadianos(operando1));
            default:
                throw new Error('Operador inválido');
        }
    };
    return CalculadoraCientifica;
}());
console.log(CalculadoraCientifica.calcular(1, 2, SOMA));
console.log(CalculadoraCientifica.calcular(1, 2, SUBTRACAO));
console.log(CalculadoraCientifica.calcular(3, 2, MULTIPLICACAO));
console.log(CalculadoraCientifica.calcular(4, 2, DIVISAO));
console.log(CalculadoraCientifica.calcular(2, 3, POTENCIACAO));
console.log(CalculadoraCientifica.calcular(9, null, RADICIACAO));
console.log(CalculadoraCientifica.calcular(90, null, SENO));
console.log(CalculadoraCientifica.calcular(0, null, COSSENO));
console.log(CalculadoraCientifica.calcular(45, null, TANGENTE));
console.log(CalculadoraCientifica.calcular(1, 2, '%'));
//# sourceMappingURL=CalculadoraCientifica.js.map