// Interfaz para formas geométricas
export interface FormaGeometrica {
    calcularArea(): number;
    //calcularPerimetro(): number;
}

// Clase para círculos
export class Circulo implements FormaGeometrica {
    radio: number;

    constructor(radio: number) {
        this.radio = radio;
    }

    calcularArea(): number {
        return Math.PI * (this.radio * this.radio);
    }

}

// Clase para rectángulos
export class Rectangulo implements FormaGeometrica {
    base: number;
    altura: number;

    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }

    calcularArea(): number {
        return this.base * this.altura;
    }
}

// Clase para triángulos
export class Triangulo implements FormaGeometrica {
    base: number;
    altura: number;

    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }

    calcularArea(): number {
        return (this.base * this.altura) / 2;
    }
}
