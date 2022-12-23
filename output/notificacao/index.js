"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MeiosDeNotificacao_1 = require("./classes/MeiosDeNotificacao");
new MeiosDeNotificacao_1.Email().enviar({
    nome: "Joao",
    email: "joao@hcode.com.br",
    telefone: "11912344321"
});
new MeiosDeNotificacao_1.SMS().enviar({
    nome: "Joao",
    email: "joao@hcode.com.br",
    telefone: "11912344321"
});
new MeiosDeNotificacao_1.Android().enviar({
    nome: "Joao",
    email: "joao@hcode.com.br",
    telefone: "11912344321",
    idAndroid: "sdfgsdgdf"
});
//# sourceMappingURL=index.js.map