import { debug, log } from "./utils";

// adiciona a função debug em PrimeiraClasse
@debug
class PrimeiraClasse {

    constructor() { }

}

// adiciona a função debug em SegundaClasse
@log
class SegundaClasse {

    constructor() { }

}

console.log(new PrimeiraClasse());
console.log(new SegundaClasse());