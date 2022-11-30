// importando com JS
import { BancoDeDados } from "./classes/BancoDeDados";

// importacao com CammonJS
// const BancoDeDados = require("./classes/BancoDeDados");

const conexaoBanco = BancoDeDados.factory({
    tipoBanco: BancoDeDados.TIPO_MYSQL,
    senha: "root",
    usuario: "root",
    ip: BancoDeDados.LOCAL
});

console.log(conexaoBanco);