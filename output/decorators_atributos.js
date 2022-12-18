"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function decoratorAttr(target, nomePropriedade) {
    var novoNome = "_".concat(nomePropriedade);
    Object.defineProperty(target, nomePropriedade, {
        get: function () {
            return this[novoNome].toUpperCase();
        },
        set: function (novoValor) {
            this[novoNome] = novoValor.split('').reverse().join('');
        }
    });
}
var Animal = (function () {
    function Animal(nome) {
        this.nome = nome;
    }
    __decorate([
        decoratorAttr
    ], Animal.prototype, "nome", void 0);
    return Animal;
}());
var cachorro = new Animal("Pluto");
cachorro.nome = "Snoopy";
console.log(cachorro.nome);
//# sourceMappingURL=decorators_atributos.js.map