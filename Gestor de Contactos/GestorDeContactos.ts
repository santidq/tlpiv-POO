class Contacto {
    constructor(public nombre: string, public correoElectronico: string, public numeroTelefono: string) { }
}

class GestorDeContactos {
    private contactos: Contacto[] = [];

    agregarContacto(contacto: Contacto) {
        this.contactos.push(contacto);
    }

    buscarContactoPorNombre(nombre: string) {
        return this.contactos.filter((contacto) => contacto.nombre === nombre);
    }

    mostrarListaDeContactos() {
        return this.contactos;
    }
}


const gestorContactos = new GestorDeContactos();

const contacto1 = new Contacto("Candela Dreven", "Cande@example.com", "3704-808050");
const contacto2 = new Contacto("Ludmila Gonzalez", "Ludopata@example.com", "3705 - 102345");
const contacto3 = new Contacto("José de Zanzo", "Jose@example.com", "3706-208090");

gestorContactos.agregarContacto(contacto1);
gestorContactos.agregarContacto(contacto2);
gestorContactos.agregarContacto(contacto3);

console.log("Lista de contactos:");
const listaDeContactos = gestorContactos.mostrarListaDeContactos();
listaDeContactos.forEach((contacto, index) => {
    console.log(`Contacto ${index + 1}:`);
    console.log(`Nombre: ${contacto.nombre}`);
    console.log(`Correo Electrónico: ${contacto.correoElectronico}`);
    console.log(`Número de Teléfono: ${contacto.numeroTelefono}`);
});

const resultadoBusqueda = gestorContactos.buscarContactoPorNombre("Candela Dreven");
console.log("Resultado de la búsqueda por nombre:");
resultadoBusqueda.forEach((contacto) => {
    console.log(`Nombre: ${contacto.nombre}`);
    console.log(`Correo Electrónico: ${contacto.correoElectronico}`);
    console.log(`Número de Teléfono: ${contacto.numeroTelefono}`);
});
