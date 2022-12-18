"use strict";
var Permissao = (function () {
    function Permissao(_idade, _nome, _nivel) {
        this._nome = _nome;
        this._nivel = _nivel;
        this._idade = _idade;
    }
    Object.defineProperty(Permissao.prototype, "nome", {
        get: function () {
            return this._nome.toUpperCase();
        },
        set: function (novoNome) {
            if (novoNome.length < 5) {
                throw new Error("O nome da permissão deve ter no mínimo 5 letras");
            }
            this._nome = novoNome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Permissao.prototype, "lua", {
        set: function (idade) {
            this._idade = idade;
        },
        enumerable: false,
        configurable: true
    });
    return Permissao;
}());
var permissao = new Permissao(18, "Administrador", 1);
console.log(permissao.nome);
try {
    permissao.nome = "adm";
}
catch (e) {
    console.log(e.message);
}
console.log(permissao);
//# sourceMappingURL=classe_getters_setters.js.map