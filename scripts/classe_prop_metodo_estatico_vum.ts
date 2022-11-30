interface IBancoDeDados {

    ip: string;
    usuario: string;
    senha: string;
    tipoBanco: string;

}

class BancoDeDados2 {

    static LOCAL = "127.0.0.1";
    static TIPO_MYSQL = "MySQL";
    static TIPO_SQLSERVER = "SQL Server";

    constructor(
        private ip: string,
        private usuario: string,
        private senha: string,
        private tipoBanco: string
    ) { }

    static factory(parametros: IBancoDeDados) {

        if (![
            BancoDeDados2.TIPO_MYSQL,
            BancoDeDados2.TIPO_SQLSERVER
        ].includes(parametros.tipoBanco)) {
            throw new Error("Tipo de banco incorreto");
        }

        return new BancoDeDados2(
            parametros.ip,
            parametros.usuario,
            parametros.senha,
            parametros.tipoBanco
        );

    }

}

const conexaoBanco = BancoDeDados2.factory({
    tipoBanco: BancoDeDados2.TIPO_MYSQL,
    senha: "root",
    usuario: "root",
    ip: BancoDeDados2.LOCAL
});

console.log(conexaoBanco);