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
var Cadastro = (function () {
    function Cadastro(nome, nascimento) {
        this.nome = nome;
        this.nascimento = nascimento;
    }
    return Cadastro;
}());
var Cliente = (function (_super) {
    __extends(Cliente, _super);
    function Cliente(nome, nascimento, email, empresa) {
        var _this = _super.call(this, nome, nascimento) || this;
        _this.email = email;
        _this.empresa = empresa;
        return _this;
    }
    return Cliente;
}(Cadastro));
var clienteJoao = new Cliente("Joao", new Date("2000-01-01"), "joao@hcode.com.br", "Hcode");
console.log(clienteJoao);
//# sourceMappingURL=classe_heranca.js.map