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
var NotificacaoV2 = (function () {
    function NotificacaoV2() {
    }
    return NotificacaoV2;
}());
var EmailV2 = (function (_super) {
    __extends(EmailV2, _super);
    function EmailV2(usuario) {
        var _this = _super.call(this) || this;
        _this.nome = usuario.nome;
        _this.email = usuario.email;
        return _this;
    }
    EmailV2.prototype.enviar = function () {
        console.log("Enviando e-mail para o usuario ".concat(this.email, " ..."));
        return true;
    };
    return EmailV2;
}(NotificacaoV2));
var SMSV2 = (function (_super) {
    __extends(SMSV2, _super);
    function SMSV2(usuario) {
        var _this = _super.call(this) || this;
        _this.numero = usuario.telefone;
        return _this;
    }
    SMSV2.prototype.enviar = function () {
        console.log("Enviando SMS para o usuario ".concat(this.numero, " ..."));
        return true;
    };
    return SMSV2;
}(NotificacaoV2));
new EmailV2({
    nome: "Joao",
    email: "joao@hcode.com.br",
    telefone: "11912344321"
}).enviar();
new SMSV2({
    nome: "Joao",
    email: "joao@hcode.com.br",
    telefone: "11912344321"
}).enviar();
//# sourceMappingURL=classe_interface.js.map