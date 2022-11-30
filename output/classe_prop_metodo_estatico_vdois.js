"use strict";
const BancoDeDados = require("./classes/BancoDeDados");
const conexaoBanco = BancoDeDados.factory({
    tipoBanco: BancoDeDados.TIPO_MYSQL,
    senha: "root",
    usuario: "root",
    ip: BancoDeDados.LOCAL
});
console.log(conexaoBanco);
//# sourceMappingURL=classe_prop_metodo_estatico_vdois.js.map