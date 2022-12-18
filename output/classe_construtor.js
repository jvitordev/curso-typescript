"use strict";
var Pedido = (function () {
    function Pedido(produto, valorTotal, previsaoEntrega) {
        this.produto = produto;
        this.valorTotal = valorTotal;
        this.previsaoEntrega = previsaoEntrega;
        this.id = 1n;
    }
    Pedido.prototype.getId = function () {
        return this.id;
    };
    Pedido.prototype.toString = function () {
        return "id: " + this.id;
    };
    return Pedido;
}());
var meuPedido = new Pedido("TV 64 polegadas", 2000, new Date("2021-05-01"));
console.log(meuPedido);
console.log(meuPedido.toString());
//# sourceMappingURL=classe_construtor.js.map