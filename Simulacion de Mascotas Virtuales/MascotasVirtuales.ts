export interface Animal {
    nombre: string
    genero: string
    nivelDeFelicidad: number
    nivelCansancio: number; 
    nivelTristeza: number;

    alimentar(): void;
    jugar(): void;
    cuidar_mascota(): void;
}

export class Gato implements Animal {
    nombre: string
    genero: string
    nivelDeFelicidad: number;
    nivelCansancio: number; 
    nivelTristeza: number;


    constructor(nombre: string, genero: string, ) {
        this.nombre = nombre
        this.genero = genero
        this.nivelDeFelicidad = 0;
        this.nivelCansancio= 0;
        this.nivelTristeza= 0;
    }

    alimentar() {
        console.log('Su mascota está más contenta')
        this.nivelDeFelicidad = +15;
        this.nivelCansancio -= 10;
        this.nivelTristeza-= 5;
    }

    jugar() {
        console.log('Su mascota está feliz por que has jugado con ella')
        this.nivelDeFelicidad = +10;
        this.nivelCansancio +=20;
        this.nivelTristeza -= 2;
    }

    cuidar_mascota() {
        console.log('Su mascota se siente muy cuidada <3 ')
        this.nivelDeFelicidad = +20;
        this.nivelCansancio -= 10; 
        this.nivelTristeza -=2;
    }
}

export class Perro implements Animal {
    nombre: string
    genero: string
    nivelDeFelicidad: number;
    nivelCansancio: number;
    nivelTristeza: number;


    constructor(nombre: string, genero: string) {
        this.nombre = nombre
        this.genero = genero
        this.nivelDeFelicidad = 0;
        this.nivelCansancio= 0;
        this.nivelTristeza = 0;
    }

    alimentar() {
        console.log('Su mascota está más contenta por habaerla alimentado')
        this.nivelDeFelicidad = +25;
        this.nivelCansancio -= 10;
        this.nivelTristeza -= 5;

    }

    jugar() {
        console.log('Su mascota está feliz por que has jugado con ella')
        this.nivelDeFelicidad = +20;
        this.nivelCansancio += 25;
        this.nivelTristeza -= 5;
    }

    cuidar_mascota() {
        console.log('Su mascota se siente my cuidada... <3 ')
        this.nivelDeFelicidad = +15;
        this.nivelCansancio -= 10;
        this.nivelTristeza -= 5;
    }
}

export class Criatura implements Animal {
    nombre: string
    genero: string
    nivelDeFelicidad: number;
    nivelCansancio: number;
    nivelTristeza: number;
    

    constructor(nombre: string, genero: string) {
        this.nombre = nombre
        this.genero = genero
        this.nivelDeFelicidad = 0;
        this.nivelCansancio = 0;
        this.nivelTristeza = 0;
    }

    alimentar() {
        console.log('Su mascota está más contenta por haber comido')
        this.nivelDeFelicidad = +28;
        this.nivelCansancio -= 10;
        this.nivelTristeza -= 5;
    }

    jugar() {
        console.log('Su mascota está feliz por que has jugado con ella')
        this.nivelDeFelicidad = +28;
        this.nivelCansancio += 20;
        this.nivelTristeza -= 5;
    }

    cuidar_mascota() {
        console.log('Su mascota está más contenta por ser bien cuidada')
        this.nivelDeFelicidad = +55;
        this.nivelCansancio -= 10;
        this.nivelTristeza -= 5;
    }
}

const miGato = new Gato('Casimiro', 'Felino')
miGato.alimentar()
miGato.jugar()
miGato.cuidar_mascota()

console.log(`Nivel de felicidad de ${miGato.nombre}: ${miGato.nivelDeFelicidad}`);
console.log(`Nivel de cansancio de ${miGato.nombre}: ${miGato.nivelCansancio}`);
console.log(`Nivel de tristeza de ${miGato.nombre}: ${miGato.nivelTristeza}`);

const miPerro = new Perro('Aranza', 'Canino')
miPerro.alimentar()
miPerro.jugar()
miPerro.cuidar_mascota()

console.log(`Nivel de felicidad de ${miPerro.nombre}: ${miPerro.nivelDeFelicidad}`);
console.log(`Nivel de cansancio de ${miPerro.nombre}: ${miPerro.nivelCansancio}`);
console.log(`Nivel de tristeza de ${miPerro.nombre}: ${miPerro.nivelTristeza}`);

const miMonstruo = new Criatura('ChanchiPato', 'Criatura Fantástica')
miMonstruo.alimentar()
miMonstruo.jugar()
miMonstruo.cuidar_mascota()

console.log(`Nivel de felicidad de ${miMonstruo.nombre}: ${miMonstruo.nivelDeFelicidad}`);
console.log(`Nivel de cansancio de ${miMonstruo.nombre}: ${miMonstruo.nivelCansancio}`);
console.log(`Nivel de tristeza de ${miMonstruo.nombre}: ${miMonstruo.nivelTristeza}`);


