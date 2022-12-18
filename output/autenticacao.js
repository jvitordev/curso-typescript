"use strict";
var novoRegistro = new Autenticacao.LoginRegistro();
var resultadoRegistro = novoRegistro.registro({
    nome: "Djalma",
    email: "dj@hcode.com.br",
    senha: "djalmaroot",
    dataNascimento: new Date("1995-02-20")
});
console.log(resultadoRegistro);
//# sourceMappingURL=autenticacao.js.map