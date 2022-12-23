"use strict";
class BancoDeDados2 {
    ip;
    usuario;
    senha;
    tipoBanco;
    static LOCAL = "127.0.0.1";
    static TIPO_MYSQL = "MySQL";
    static TIPO_SQLSERVER = "SQL Server";
    constructor(ip, usuario, senha, tipoBanco) {
        this.ip = ip;
        this.usuario = usuario;
        this.senha = senha;
        this.tipoBanco = tipoBanco;
    }
    static factory(parametros) {
        if (![
            BancoDeDados2.TIPO_MYSQL,
            BancoDeDados2.TIPO_SQLSERVER
        ].includes(parametros.tipoBanco)) {
            throw new Error("Tipo de banco incorreto");
        }
        return new BancoDeDados2(parametros.ip, parametros.usuario, parametros.senha, parametros.tipoBanco);
    }
}
const conexaoBanco = BancoDeDados2.factory({
    tipoBanco: BancoDeDados2.TIPO_MYSQL,
    senha: "root",
    usuario: "root",
    ip: BancoDeDados2.LOCAL
});
console.log(conexaoBanco);
//# sourceMappingURL=classe_prop_metodo_estatico_vum.js.map