"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
var Libro_1 = require("../Libro");
var Biblioteca = /** @class */ (function () {
    function Biblioteca() {
        this.librosDisponibles = [];
        this.librosPrestados = [];
    }
    Biblioteca.prototype.agregarLibro = function (libro) {
        this.librosDisponibles.push(libro);
        console.log("El Libro: ".concat(libro.titulo, " se agreg\u00F3 a la biblioteca"));
        // console.log(this.librosDisponibles)
    };
    Biblioteca.prototype.buscarLibroDisponible = function (libro) {
        for (var _i = 0, _a = this.librosDisponibles; _i < _a.length; _i++) {
            var lib = _a[_i];
            if (lib.titulo === libro.titulo && lib.autor === libro.autor) {
                return lib;
            }
        }
        return false;
    };
    Biblioteca.prototype.buscarLibroPrestado = function (libro) {
        for (var _i = 0, _a = this.librosPrestados; _i < _a.length; _i++) {
            var lib = _a[_i];
            if (lib.titulo === libro.titulo && lib.autor === libro.autor) {
                return lib;
            }
        }
        return false;
    };
    Biblioteca.prototype.prestarLibro = function (libro) {
        var lib = this.buscarLibroDisponible(libro);
        if (lib) {
            this.librosDisponibles.splice(this.librosDisponibles.indexOf(lib), 1);
            this.librosPrestados.push(lib);
            console.log("El libro ".concat(libro.titulo, " se prest\u00F3 con \u00E9xito"));
        }
        else {
            console.log('El libro no existe en la biblioteca');
            // console.log(this.librosPrestados)
        }
        return lib;
    };
    Biblioteca.prototype.devolverLibro = function (libro) {
        var lib = this.buscarLibroPrestado(libro);
        if (lib) {
            this.librosPrestados.splice(this.librosPrestados.indexOf(lib), 1);
            this.librosDisponibles.push(lib);
            console.log("El libro ".concat(lib.titulo, " se devolvi\u00F3 con \u00E9xito"));
        }
        else {
            console.log('El libro no se ah prestado');
        }
        return lib;
    };
    return Biblioteca;
}());
exports.Biblioteca = Biblioteca;
var biblioteca = new Biblioteca();
var miLibro1 = new Libro_1.Libro('A través de mi ventana', 'Ariana Godoy');
var miLibro2 = new Libro_1.Libro('Heist', 'Ariana Godoy');
var miLibro3 = new Libro_1.Libro('El chico que pintaba constelaciones', 'Alice Kellen');
biblioteca.agregarLibro(miLibro1);
biblioteca.agregarLibro(miLibro2);
biblioteca.agregarLibro(miLibro3);
biblioteca.prestarLibro(miLibro1);
biblioteca.devolverLibro(miLibro1);
