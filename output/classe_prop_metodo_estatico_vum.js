"use strict";
var BancoDeDados2 = (function () {
    function BancoDeDados2(ip, usuario, senha, tipoBanco) {
        this.ip = ip;
        this.usuario = usuario;
        this.senha = senha;
        this.tipoBanco = tipoBanco;
    }
    BancoDeDados2.factory = function (parametros) {
        if (![
            BancoDeDados2.TIPO_MYSQL,
            BancoDeDados2.TIPO_SQLSERVER
        ].includes(parametros.tipoBanco)) {
            throw new Error("Tipo de banco incorreto");
        }
        return new BancoDeDados2(parametros.ip, parametros.usuario, parametros.senha, parametros.tipoBanco);
    };
    BancoDeDados2.LOCAL = "127.0.0.1";
    BancoDeDados2.TIPO_MYSQL = "MySQL";
    BancoDeDados2.TIPO_SQLSERVER = "SQL Server";
    return BancoDeDados2;
}());
var conexaoBanco = BancoDeDados2.factory({
    tipoBanco: BancoDeDados2.TIPO_MYSQL,
    senha: "root",
    usuario: "root",
    ip: BancoDeDados2.LOCAL
});
console.log(conexaoBanco);
//# sourceMappingURL=classe_prop_metodo_estatico_vum.js.map