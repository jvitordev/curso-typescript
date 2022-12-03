var Autenticacao;
(function (Autenticacao) {
    var LoginRegistro = /** @class */ (function () {
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
    var Recuperacao = /** @class */ (function () {
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
/// <reference path="./autenticacao/index.ts" />
var novoRegistro = new Autenticacao.LoginRegistro();
var resultadoRegistro = novoRegistro.registro({
    nome: "Djalma",
    email: "dj@hcode.com.br",
    senha: "djalmaroot",
    dataNascimento: new Date("1995-02-20")
});
console.log(resultadoRegistro);
