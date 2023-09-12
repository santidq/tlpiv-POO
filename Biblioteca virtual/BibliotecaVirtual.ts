
import { Libro } from '../Libro'

export class Biblioteca {
    librosDisponibles: Libro[] = []
    librosPrestados: Libro[] = []

    constructor() { }

    agregarLibro(libro: Libro) {
        this.librosDisponibles.push(libro)
        console.log(`El Libro: ${ libro.titulo } se agregó a la biblioteca`)
        // console.log(this.librosDisponibles)
    }

    buscarLibroDisponible(libro: Libro) {
        for (const lib of this.librosDisponibles) {
            if (lib.titulo === libro.titulo && lib.autor === libro.autor) {
                return lib
            }
        }
        return false
    }

    buscarLibroPrestado(libro: Libro) {
        for (const lib of this.librosPrestados) {
            if (lib.titulo === libro.titulo && lib.autor === libro.autor) {
                return lib
            }
        }
        return false
    }

    prestarLibro(libro: Libro) {
        const lib = this.buscarLibroDisponible(libro)
        if (lib) {
            this.librosDisponibles.splice(this.librosDisponibles.indexOf(lib), 1)
            this.librosPrestados.push(lib)
            console.log(`El libro ${ libro.titulo } se prestó con éxito`)
        } else {
            console.log('El libro no existe en la biblioteca')
            // console.log(this.librosPrestados)
        }
        return lib
    }

    devolverLibro(libro: Libro) {
        const lib = this.buscarLibroPrestado(libro)
        if (lib) {
            this.librosPrestados.splice(this.librosPrestados.indexOf(lib), 1)
            this.librosDisponibles.push(lib)
            console.log(`El libro ${ lib.titulo } se devolvió con éxito`)
        } else {
            console.log('El libro no se ah prestado')
        }
        return lib
    }
}

const biblioteca = new Biblioteca()

const miLibro1 = new Libro('El Cuervo', 'Edgar Allan Poe')
const miLibro2 = new Libro('Corazón Deltador', 'Edgar Allan Poe')
const miLibro3 = new Libro('El Fantasma del Titanic', 'Arthur C. Clarke')

biblioteca.agregarLibro(miLibro1)
biblioteca.agregarLibro(miLibro2)
biblioteca.agregarLibro(miLibro3)

biblioteca.prestarLibro(miLibro1)
biblioteca.devolverLibro(miLibro1)

