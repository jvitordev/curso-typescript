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
var Domicilio = (function () {
    function Domicilio(cor, endereco) {
        this.cor = cor;
        this.endereco = endereco;
    }
    Domicilio.prototype.tocarInterfone = function () {
        return "Interfone tocado!";
    };
    Domicilio.prototype.atenderInterfone = function (mensagem) {
        return mensagem;
    };
    return Domicilio;
}());
var Casa = (function (_super) {
    __extends(Casa, _super);
    function Casa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Casa.prototype.entrarNaCasa = function () {
        return this.atenderInterfone("Oi, quem é?");
    };
    return Casa;
}(Domicilio));
var casaDoHomer = new Casa("Rosa", { cidade: "Springfield" });
console.log(casaDoHomer.entrarNaCasa());
//# sourceMappingURL=classe_protected.js.map