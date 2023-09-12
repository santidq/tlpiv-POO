var Tarea = /** @class */ (function () {
    function Tarea(nombre, fechaVencimiento) {
        this.nombre = nombre;
        this.fechaVencimiento = fechaVencimiento;
        this.completada = false;
    }
    Tarea.prototype.completar = function () {
        this.completada = true;
    };
    Tarea.prototype.descompletar = function () {
        this.completada = false;
    };
    return Tarea;
}());
var ListaDeTareas = /** @class */ (function () {
    function ListaDeTareas() {
        this.tareas = [];
    }
    ListaDeTareas.prototype.agregarTarea = function (tarea) {
        this.tareas.push(tarea);
    };
    ListaDeTareas.prototype.eliminarTarea = function (tarea) {
        var index = this.tareas.indexOf(tarea);
        if (index !== -1) {
            this.tareas.splice(index, 1);
        }
    };
    return ListaDeTareas;
}());
// instancia un objeto listar tareas
var listaTareas = new ListaDeTareas();
var tarea1 = new Tarea('Prueba', new Date('2023-09-10'));
listaTareas.agregarTarea(tarea1);
// Obtén una referencia al formulario y a los campos de entrada
var agregarTareaForm = document.getElementById('agregar-tarea-form');
var nombreTareaInput = document.getElementById('nombre-tarea');
var fechaVencimientoInput = document.getElementById('fecha-vencimiento');
// Agrega un controlador de eventos para el envío del formulario
agregarTareaForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
    // Captura los valores de los campos de entrada
    var nombreTarea = nombreTareaInput.value;
    var fechaVencimiento = new Date(fechaVencimientoInput.value);
    // Crea una nueva tarea y agrégala a la lista de tareas
    agregarTarea(nombreTarea, fechaVencimiento);
    // Limpia los campos del formulario
    nombreTareaInput.value = '';
    fechaVencimientoInput.value = '';
});
function agregarTarea(nombre, fechaVencimiento) {
    var tarea1 = new Tarea(nombre, fechaVencimiento);
    listaTareas.agregarTarea(tarea1);
    console.log(listaTareas.tareas);
    renderizarTareas();
}
function renderizarTareas() {
    var tareasLista = document.getElementById('tareas-lista');
    // Limpia la lista existente para evitar duplicados
    tareasLista.innerHTML = '';
    // Recorre la lista de tareas y crea elementos <li> para cada tarea
    listaTareas.tareas.forEach(function (tarea, index) {
        var tareaItem = document.createElement('li');
        tareaItem.innerHTML = "\n            <input type=\"checkbox\" id=\"tarea-".concat(index, "\" ").concat(tarea.completada ? 'checked' : '', ">\n            <label for=\"tarea-").concat(index, "\">").concat(tarea.nombre, " (Fecha de vencimiento: ").concat(tarea.fechaVencimiento.toDateString(), ")</label>\n            <button onclick=\"marcarCompleta(").concat(index, ")\">Marcar Completa</button>\n            <button onclick=\"eliminarTarea(").concat(index, ")\">Eliminar</button>\n        ");
        tareaItem.querySelector('input').addEventListener('change', function () {
            // Manejar el cambio de estado de completada/no completada aquí
            if (tarea.completada) {
                tarea.descompletar();
            }
            else {
                tarea.completar();
            }
            renderizarTareas(); // Vuelve a renderizar la lista después del cambio
        });
        tareasLista.appendChild(tareaItem);
    });
}
function marcarCompleta(index) {
    // Obtenemos la tarea actual en base al índice
    var tarea = listaTareas.tareas[index];
    if (tarea) {
        // Cambiamos el estado de completada/no completada de la tarea
        if (tarea.completada) {
            tarea.descompletar();
        }
        else {
            tarea.completar();
        }
        // Vuelve a renderizar la lista después del cambio
        renderizarTareas();
    }
}
function eliminarTarea(index) {
    // Obtenemos la tarea actual en base al índice
    var tarea = listaTareas.tareas[index];
    if (tarea) {
        // Eliminamos la tarea de la lista
        listaTareas.eliminarTarea(tarea);
        // Vuelve a renderizar la lista después del cambio
        renderizarTareas();
    }
}
// Llama a la función para renderizar las tareas al cargar la página
renderizarTareas();
