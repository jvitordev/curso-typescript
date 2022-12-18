"use strict";
var Autenticacao;
(function (Autenticacao) {
    var LoginRegistro = (function () {
        function LoginRegistro() {
        }
        LoginRegistro.prototype.login = function (usuario) {
            return usuario;
        };
        LoginRegistro.prototype.registro = function (novoUsuario) {
            return novoUsuario;
        };
        return LoginRegistro;
    }());
    Autenticacao.LoginRegistro = LoginRegistro;
    var Recuperacao = (function () {
        function Recuperacao() {
        }
        Recuperacao.prototype.recuperarSenha = function () {
            return "Enviando e-mail para recuperação de senha";
        };
        Recuperacao.prototype.recuperarUsuario = function () {
            return "Enviando e-mail para recuperação de nome de usuário";
        };
        return Recuperacao;
    }());
    Autenticacao.Recuperacao = Recuperacao;
})(Autenticacao || (Autenticacao = {}));
//# sourceMappingURL=index.js.map