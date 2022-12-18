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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Android = exports.SMS = exports.Email = void 0;
var Notificacao_1 = __importDefault(require("./Notificacao"));
var Email = (function (_super) {
    __extends(Email, _super);
    function Email() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Email.prototype.enviar = function (usuario) {
        console.log("Enviando e-mail para o usuario ".concat(usuario.email, " ..."));
        return true;
    };
    return Email;
}(Notificacao_1.default));
exports.Email = Email;
var SMS = (function (_super) {
    __extends(SMS, _super);
    function SMS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SMS.prototype.enviar = function (usuario) {
        console.log("Enviando SMS para o usuario ".concat(usuario.telefone, " ..."));
        return true;
    };
    return SMS;
}(Notificacao_1.default));
exports.SMS = SMS;
var Android = (function (_super) {
    __extends(Android, _super);
    function Android() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Android.prototype.enviar = function (usuario) {
        console.log("Enviando mensagem para o usuario no Android ".concat(usuario.idAndroid, " ..."));
        return true;
    };
    return Android;
}(Notificacao_1.default));
exports.Android = Android;
//# sourceMappingURL=MeiosDeNotificacao.js.map