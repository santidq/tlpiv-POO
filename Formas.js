"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangulo = exports.Rectangulo = exports.Circulo = void 0;
// Clase para círculos
var Circulo = /** @class */ (function () {
    function Circulo(radio) {
        this.radio = radio;
    }
    Circulo.prototype.calcularArea = function () {
        return Math.PI * (this.radio * this.radio);
    };
    return Circulo;
}());
exports.Circulo = Circulo;
// Clase para rectángulos
var Rectangulo = /** @class */ (function () {
    function Rectangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Rectangulo.prototype.calcularArea = function () {
        return this.base * this.altura;
    };
    return Rectangulo;
}());
exports.Rectangulo = Rectangulo;
// Clase para triángulos
var Triangulo = /** @class */ (function () {
    function Triangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Triangulo.prototype.calcularArea = function () {
        return (this.base * this.altura) / 2;
    };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
