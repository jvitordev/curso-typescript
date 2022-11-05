console.log("Hello world! Este é meu primeiro código TypeScript");

console.log("================================================");

const nome = "João";

console.log("Olá" + nome + ". Seja bem-vindo!");

class Produto {

    nome: string;
    valor: number;

    constructor(ProdutoNome: string, ProdutoValor: number) {
        this.nome = ProdutoNome;
        this.valor = ProdutoValor;
    }
}

const playsation5 = new Produto("PlayStation 5", 5000);