// Importa las clases de formas geométricas
import { Circulo, FormaGeometrica, Rectangulo, Triangulo } from '../Formas';

export class Calculadora {
    formas: FormaGeometrica

    constructor(formas: FormaGeometrica) {
        this.formas = formas;
    }

    area (){
        return this.formas.calcularArea()
    }
}

const triangulo = new Calculadora (new Triangulo(50,20));
const circulo = new Calculadora (new Circulo(70));
const rectangulo = new Calculadora (new Rectangulo(30,25));

console.log("Area de triangulo:", triangulo.area());
console.log("Area de circulo:" ,circulo.area());
console.log("Area de rectangulo:", rectangulo.area());