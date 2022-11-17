interface ISoma {
    (num1: number, num2: number): number;
}

let primeiraSoma: ISoma;

primeiraSoma = (numero1: number, numero2: number): number => {
    return numero1 + numero2;
}

interface Calculos {
    multiplicar(a: number, b: number): number;
    somar(a: number, b: number): number;
    subtrair(a: number, b: number): number;
    dividir(a: number, b: number): number;
}

let calculadora: Calculos;

function adicao(a:number, b:number) {
    return a + b;
}

const subtrair = (n1: number, n2: number) => n1 - n2;

calculadora = {
    multiplicar: function (numero1: number, numero2: number) {
        return numero1 * numero2;
    },
    dividir: (numero1: number, numero2: number) => {
        let r = numero1 / numero2;
        return r;
    },
    somar: adicao,
    subtrair
}

console.log(calculadora.dividir(10, 2));