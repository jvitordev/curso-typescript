"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function decoratorMetodo(target, propertyKey, descriptor) {
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return args.map(function (item) { return item.toLowerCase(); });
    };
}
var TratarMensagem = (function () {
    function TratarMensagem() {
    }
    TratarMensagem.prototype.dizerMensagem = function () {
        var mensagens = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            mensagens[_i] = arguments[_i];
        }
        return mensagens;
    };
    __decorate([
        decoratorMetodo
    ], TratarMensagem.prototype, "dizerMensagem", null);
    return TratarMensagem;
}());
var instancia = new TratarMensagem();
console.log(instancia.dizerMensagem("Olá", "Seja bem-vindo", "Hcode"));
//# sourceMappingURL=decorators_metodos.js.map