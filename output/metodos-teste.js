"use strict";
class Professora {
    nome;
    idade;
    materia;
    constructor(nome, idade, materia) {
        this.nome = nome;
        this.idade = idade;
        this.materia = materia;
    }
    seApresentar() {
        return 'Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e ensino a matéria ${this.materia}.';
    }
    dizerNotas(...notas) {
        let qtdNotas = 0;
        let soma = 0;
        notas.forEach(nota => {
            qtdNotas++;
            soma += nota;
        });
        let media = soma / qtdNotas;
        return media;
    }
}
let galega = new Professora("galega", 33, "Física");
console.log(galega.dizerNotas(5, 10, 7, 3, 5));
//# sourceMappingURL=metodos-teste.js.map