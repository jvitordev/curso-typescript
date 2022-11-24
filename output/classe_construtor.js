"use strict";
class Pedido {
    produto;
    valorTotal;
    previsaoEntrega;
    id = 1n;
    constructor(produto, valorTotal, previsaoEntrega) {
        this.produto = produto;
        this.valorTotal = valorTotal;
        this.previsaoEntrega = previsaoEntrega;
    }
    getId() {
        return this.id;
    }
    toString() {
        return "id: " + this.id;
    }
}
const meuPedido = new Pedido("TV 64 polegadas", 2000, new Date("2021-05-01"));
console.log(meuPedido);
console.log(meuPedido.toString());
//# sourceMappingURL=classe_construtor.js.map