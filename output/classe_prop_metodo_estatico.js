"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BancoDeDados_1 = require("./classes/BancoDeDados");
var conexaoBanco = BancoDeDados_1.BancoDeDados.factory({
    tipoBanco: BancoDeDados_1.BancoDeDados.TIPO_MYSQL,
    senha: "root",
    usuario: "root",
    ip: BancoDeDados_1.BancoDeDados.LOCAL
});
console.log(conexaoBanco);
//# sourceMappingURL=classe_prop_metodo_estatico.js.map