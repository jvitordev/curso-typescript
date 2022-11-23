"use strict";
class Banco {
    cofreQtd = 10000;
    debitarCofre(quantidade) {
        if (this.cofreQtd >= quantidade) {
            this.cofreQtd -= quantidade;
            return this.cofreQtd;
        }
        else {
            return "O cofre não possui a quantidade requisitada";
        }
    }
    sacarDoCaixa(quantidade) {
        return this.debitarCofre(quantidade);
    }
    sacarDoCaixaEletronico(quantidade) {
        return this.debitarCofre(quantidade);
    }
}
class Banco24Horas extends Banco {
    nome;
    constructor(nome) {
        super();
        this.nome = nome;
    }
    sacar(qtd) {
        return this.sacarDoCaixa(qtd);
    }
}
const nubank = new Banco();
const banco24horas = new Banco24Horas("C6");
const saldo = banco24horas.sacar(2500);
let nomeBanco = banco24horas.nome;
console.log(nomeBanco + ": " + saldo);
//# sourceMappingURL=classe_private.js.map