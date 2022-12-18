"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Banco = (function () {
    function Banco() {
        this.cofreQtd = 10000;
    }
    Banco.prototype.debitarCofre = function (quantidade) {
        if (this.cofreQtd >= quantidade) {
            this.cofreQtd -= quantidade;
            return this.cofreQtd;
        }
        else {
            return "O cofre não possui a quantidade requisitada";
        }
    };
    Banco.prototype.sacarDoCaixa = function (quantidade) {
        return this.debitarCofre(quantidade);
    };
    Banco.prototype.sacarDoCaixaEletronico = function (quantidade) {
        return this.debitarCofre(quantidade);
    };
    return Banco;
}());
var Banco24Horas = (function (_super) {
    __extends(Banco24Horas, _super);
    function Banco24Horas(nome) {
        var _this = _super.call(this) || this;
        _this.nome = nome;
        return _this;
    }
    Banco24Horas.prototype.sacar = function (qtd) {
        return this.sacarDoCaixa(qtd);
    };
    return Banco24Horas;
}(Banco));
var nubank = new Banco();
var banco24horas = new Banco24Horas("C6");
var saldo = banco24horas.sacar(2500);
var nomeBanco = banco24horas.nome;
console.log(nomeBanco + ": " + saldo);
//# sourceMappingURL=classe_private.js.map