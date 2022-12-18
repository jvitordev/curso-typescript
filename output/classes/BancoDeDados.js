"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BancoDeDados = void 0;
var BancoDeDados = (function () {
    function BancoDeDados(ip, usuario, senha, tipoBanco) {
        this.ip = ip;
        this.usuario = usuario;
        this.senha = senha;
        this.tipoBanco = tipoBanco;
    }
    BancoDeDados.factory = function (parametros) {
        if (![
            BancoDeDados.TIPO_MYSQL,
            BancoDeDados.TIPO_SQLSERVER
        ].includes(parametros.tipoBanco)) {
            throw new Error("Tipo de banco incorreto");
        }
        return new BancoDeDados(parametros.ip, parametros.usuario, parametros.senha, parametros.tipoBanco);
    };
    BancoDeDados.LOCAL = "127.0.0.1";
    BancoDeDados.TIPO_MYSQL = "MySQL";
    BancoDeDados.TIPO_SQLSERVER = "SQL Server";
    return BancoDeDados;
}());
exports.BancoDeDados = BancoDeDados;
//# sourceMappingURL=BancoDeDados.js.map