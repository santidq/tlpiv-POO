var Contacto = /** @class */ (function () {
    function Contacto(nombre, correoElectronico, numeroTelefono) {
        this.nombre = nombre;
        this.correoElectronico = correoElectronico;
        this.numeroTelefono = numeroTelefono;
    }
    return Contacto;
}());
var GestorDeContactos = /** @class */ (function () {
    function GestorDeContactos() {
        this.contactos = [];
    }
    GestorDeContactos.prototype.agregarContacto = function (contacto) {
        this.contactos.push(contacto);
    };
    GestorDeContactos.prototype.buscarContactoPorNombre = function (nombre) {
        return this.contactos.filter(function (contacto) { return contacto.nombre === nombre; });
    };
    GestorDeContactos.prototype.mostrarListaDeContactos = function () {
        return this.contactos;
    };
    return GestorDeContactos;
}());
var gestorContactos = new GestorDeContactos();
var contacto1 = new Contacto(
  "Candela Dreven",
  "Cande@example.com",
  "3704-808050"
);
var contacto2 = new Contacto(
  "Ludmila Gonzalez",
  "Ludopata@example.com",
  "3705 - 102345"
);
var contacto3 = new Contacto(
  "José de Zanzo",
  "Jose@example.com",
  "3706-208090"
);
gestorContactos.agregarContacto(contacto1);
gestorContactos.agregarContacto(contacto2);
gestorContactos.agregarContacto(contacto3);
console.log("Lista de contactos:");
var listaDeContactos = gestorContactos.mostrarListaDeContactos();
listaDeContactos.forEach(function (contacto, index) {
    console.log("Contacto ".concat(index + 1, ":"));
    console.log("Nombre: ".concat(contacto.nombre));
    console.log("Correo Electr\u00F3nico: ".concat(contacto.correoElectronico));
    console.log("N\u00FAmero de Tel\u00E9fono: ".concat(contacto.numeroTelefono));
});
var resultadoBusqueda = gestorContactos.buscarContactoPorNombre("Candela Dreven");
console.log("Resultado de la búsqueda por nombre:");
resultadoBusqueda.forEach(function (contacto) {
    console.log("Nombre: ".concat(contacto.nombre));
    console.log("Correo Electr\u00F3nico: ".concat(contacto.correoElectronico));
    console.log("N\u00FAmero de Tel\u00E9fono: ".concat(contacto.numeroTelefono));
});
