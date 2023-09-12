"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Criatura = exports.Perro = exports.Gato = void 0;
var Gato = /** @class */ (function () {
    function Gato(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
        this.nivelDeFelicidad = 0;
        this.nivelCansancio = 0;
        this.nivelTristeza = 0;
    }
    Gato.prototype.alimentar = function () {
        console.log('Su mascota está más contenta');
        this.nivelDeFelicidad = +15;
        this.nivelCansancio -= 10;
        this.nivelTristeza -= 5;
    };
    Gato.prototype.jugar = function () {
        console.log('Su mascota está feliz por que has jugado con ella');
        this.nivelDeFelicidad = +10;
        this.nivelCansancio += 20;
        this.nivelTristeza -= 2;
    };
    Gato.prototype.cuidar_mascota = function () {
        console.log('Su mascota se siente muy cuidada <3 ');
        this.nivelDeFelicidad = +20;
        this.nivelCansancio -= 10;
        this.nivelTristeza -= 2;
    };
    return Gato;
}());
exports.Gato = Gato;
var Perro = /** @class */ (function () {
    function Perro(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
        this.nivelDeFelicidad = 0;
        this.nivelCansancio = 0;
        this.nivelTristeza = 0;
    }
    Perro.prototype.alimentar = function () {
        console.log('Su mascota está más contenta por habaerla alimentado');
        this.nivelDeFelicidad = +25;
        this.nivelCansancio -= 10;
        this.nivelTristeza -= 5;
    };
    Perro.prototype.jugar = function () {
        console.log('Su mascota está feliz por que has jugado con ella');
        this.nivelDeFelicidad = +20;
        this.nivelCansancio += 25;
        this.nivelTristeza -= 5;
    };
    Perro.prototype.cuidar_mascota = function () {
        console.log('Su mascota se siente my cuidada... <3 ');
        this.nivelDeFelicidad = +15;
        this.nivelCansancio -= 10;
        this.nivelTristeza -= 5;
    };
    return Perro;
}());
exports.Perro = Perro;
var Criatura = /** @class */ (function () {
    function Criatura(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
        this.nivelDeFelicidad = 0;
        this.nivelCansancio = 0;
        this.nivelTristeza = 0;
    }
    Criatura.prototype.alimentar = function () {
        console.log('Su mascota está más contenta por haber comido');
        this.nivelDeFelicidad = +28;
        this.nivelCansancio -= 10;
        this.nivelTristeza -= 5;
    };
    Criatura.prototype.jugar = function () {
        console.log('Su mascota está feliz por que has jugado con ella');
        this.nivelDeFelicidad = +28;
        this.nivelCansancio += 20;
        this.nivelTristeza -= 5;
    };
    Criatura.prototype.cuidar_mascota = function () {
        console.log('Su mascota está más contenta por ser bien cuidada');
        this.nivelDeFelicidad = +55;
        this.nivelCansancio -= 10;
        this.nivelTristeza -= 5;
    };
    return Criatura;
}());
exports.Criatura = Criatura;
var miGato = new Gato('Casimiro', 'Felino');
miGato.alimentar();
miGato.jugar();
miGato.cuidar_mascota();
console.log("Nivel de felicidad de ".concat(miGato.nombre, ": ").concat(miGato.nivelDeFelicidad));
console.log("Nivel de cansancio de ".concat(miGato.nombre, ": ").concat(miGato.nivelCansancio));
console.log("Nivel de tristeza de ".concat(miGato.nombre, ": ").concat(miGato.nivelTristeza));
var miPerro = new Perro('Aranza', 'Canino');
miPerro.alimentar();
miPerro.jugar();
miPerro.cuidar_mascota();
console.log("Nivel de felicidad de ".concat(miPerro.nombre, ": ").concat(miPerro.nivelDeFelicidad));
console.log("Nivel de cansancio de ".concat(miPerro.nombre, ": ").concat(miPerro.nivelCansancio));
console.log("Nivel de tristeza de ".concat(miPerro.nombre, ": ").concat(miPerro.nivelTristeza));
var miMonstruo = new Criatura('ChanchiPato', 'Criatura Fantástica');
miMonstruo.alimentar();
miMonstruo.jugar();
miMonstruo.cuidar_mascota();
console.log("Nivel de felicidad de ".concat(miMonstruo.nombre, ": ").concat(miMonstruo.nivelDeFelicidad));
console.log("Nivel de cansancio de ".concat(miMonstruo.nombre, ": ").concat(miMonstruo.nivelCansancio));
console.log("Nivel de tristeza de ".concat(miMonstruo.nombre, ": ").concat(miMonstruo.nivelTristeza));
