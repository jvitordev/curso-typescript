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
var CadastroBasico = (function () {
    function CadastroBasico() {
    }
    CadastroBasico.prototype.criar = function (dados) {
        console.log("Criando novo registro");
        return dados;
    };
    CadastroBasico.prototype.selecionar = function (id) {
        console.log("Dados do registro de ID " + id);
        return {};
    };
    CadastroBasico.prototype.editar = function (id, dadosAtualizacao) {
        console.log("Editando dados do ID " + id);
        return dadosAtualizacao;
    };
    CadastroBasico.prototype.excluir = function (id) {
        console.log("Excluindo registro do ID " + id);
        return true;
    };
    return CadastroBasico;
}());
var UsuarioModelo = (function (_super) {
    __extends(UsuarioModelo, _super);
    function UsuarioModelo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UsuarioModelo;
}(CadastroBasico));
var novoUsuario = new UsuarioModelo();
console.log(novoUsuario.criar({
    id: 1,
    nome: "Glaucio Daniel",
    email: "glaucio_daniel@hcode.com.br",
    senha: "gl@uc1o",
    created_at: new Date("2015-06-01"),
    updated_at: new Date("2020-01-20")
}));
var CategoriaModelo = (function (_super) {
    __extends(CategoriaModelo, _super);
    function CategoriaModelo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CategoriaModelo;
}(CadastroBasico));
var novaCategoria = new CategoriaModelo();
novaCategoria.criar({
    id: 1,
    nome: "JavaScript",
    created_at: new Date("2015-06-01"),
    updated_at: new Date("2020-01-20")
});
//# sourceMappingURL=classes_genericas.js.map