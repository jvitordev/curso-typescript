class Permissao {

    private _idade: number;

    constructor(
        _idade: number,
        private _nome: string,
        private _nivel: number
    ) {this._idade = _idade;}

    get nome() {
        return this._nome.toUpperCase();
    }

    set nome(novoNome: string) {

        if (novoNome.length < 5) {
            throw new Error("O nome da permissão deve ter no mínimo 5 letras");
        }
        
        this._nome = novoNome;

    }

    set lua(idade: number) {
        this._idade = idade;
    }

}

const permissao = new Permissao(18, "Administrador", 1);

console.log(permissao.nome);

try {

    permissao.nome = "adm";

} catch (e: any) {

    console.log(e.message);

}

console.log(permissao);