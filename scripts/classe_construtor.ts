class Pedido {

    private id: bigint = 1n;

    constructor(
        private produto: string,
        protected valorTotal: number,
        public previsaoEntrega: Date
    ) {}

    public getId(): bigint {
        return this.id;
    }

    toString(): string {
        return "id: " + this.id;
    }

}

const meuPedido = new Pedido("TV 64 polegadas", 2000, new Date("2021-05-01"));

console.log(meuPedido);
console.log(meuPedido.toString());