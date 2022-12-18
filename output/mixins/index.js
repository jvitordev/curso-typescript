"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var applyMixins_1 = __importDefault(require("./applyMixins"));
var ProdutoFinal = (function () {
    function ProdutoFinal() {
    }
    ProdutoFinal.prototype.vender = function (quantidade) {
        return "Foram vendidos ".concat(quantidade, " itens deste produto");
    };
    ProdutoFinal.prototype.comprar = function (quantidade) {
        return "Foram comprados ".concat(quantidade, " itens deste produto");
    };
    return ProdutoFinal;
}());
var Movel = (function () {
    function Movel() {
    }
    Movel.prototype.sentar = function () {
        return "Você sentou no móvel";
    };
    Movel.prototype.empurrar = function (metros) {
        return "O m\u00F3vel foi empurrado ".concat(metros, " metros.");
    };
    return Movel;
}());
var Sofa = (function () {
    function Sofa(nome) {
        this.nome = nome;
    }
    return Sofa;
}());
(0, applyMixins_1.default)(Sofa, [ProdutoFinal, Movel]);
var produto = new Sofa("Meu sofá");
console.log(produto.vender(25));
console.log(produto.empurrar(50));
console.log(produto.nome);
//# sourceMappingURL=index.js.map