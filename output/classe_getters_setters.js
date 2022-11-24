"use strict";
class Permissao {
    _nome;
    _nivel;
    _idade;
    constructor(_idade, _nome, _nivel) {
        this._nome = _nome;
        this._nivel = _nivel;
        this._idade = _idade;
    }
    get nome() {
        return this._nome.toUpperCase();
    }
    set nome(novoNome) {
        if (novoNome.length < 5) {
            throw new Error("O nome da permissão deve ter no mínimo 5 letras");
        }
        this._nome = novoNome;
    }
    set lua(idade) {
        this._idade = idade;
    }
}
const permissao = new Permissao(18, "Administrador", 1);
console.log(permissao.nome);
try {
    permissao.nome = "adm";
}
catch (e) {
    console.log(e.message);
}
console.log(permissao);
//# sourceMappingURL=classe_getters_setters.js.map