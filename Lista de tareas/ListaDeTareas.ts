class Tarea {
    nombre: string;
    fechaVencimiento: Date;
    completada: boolean;

    constructor(nombre: string, fechaVencimiento: Date) {
        this.nombre = nombre;
        this.fechaVencimiento = fechaVencimiento;
        this.completada = false;
    }

    completar() {
        this.completada = true;
    }

    descompletar() {
        this.completada = false;
    }
}


class ListaDeTareas {
    tareas: Tarea[] = [];

    agregarTarea(tarea: Tarea) {
        this.tareas.push(tarea);
    }

    eliminarTarea(tarea: Tarea) {
        const index = this.tareas.indexOf(tarea);
        if (index !== -1) {
            this.tareas.splice(index, 1);
        }
    }
}

// instancia un objeto listar tareas
const listaTareas = new ListaDeTareas();


const tarea1 = new Tarea('Prueba', new Date('2023-09-10'));

listaTareas.agregarTarea(tarea1)

// Obtén una referencia al formulario y a los campos de entrada
const agregarTareaForm = document.getElementById('agregar-tarea-form') as HTMLFormElement;
const nombreTareaInput = document.getElementById('nombre-tarea') as HTMLInputElement;
const fechaVencimientoInput = document.getElementById('fecha-vencimiento') as HTMLInputElement;

// Agrega un controlador de eventos para el envío del formulario
agregarTareaForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Captura los valores de los campos de entrada
    const nombreTarea = nombreTareaInput.value;
    const fechaVencimiento = new Date(fechaVencimientoInput.value);

    // Crea una nueva tarea y agrégala a la lista de tareas
    agregarTarea(nombreTarea, fechaVencimiento);

    // Limpia los campos del formulario
    nombreTareaInput.value = '';
    fechaVencimientoInput.value = '';
});


function agregarTarea(nombre: string, fechaVencimiento: Date) {
    const tarea1 = new Tarea(nombre, fechaVencimiento);
    listaTareas.agregarTarea(tarea1);
    console.log(listaTareas.tareas);
    renderizarTareas();
}

function renderizarTareas() {
    const tareasLista = document.getElementById('tareas-lista');

    // Limpia la lista existente para evitar duplicados
    tareasLista.innerHTML = '';

    // Recorre la lista de tareas y crea elementos <li> para cada tarea
    listaTareas.tareas.forEach((tarea, index) => {
        const tareaItem = document.createElement('li');
        tareaItem.innerHTML = `
            <input type="checkbox" id="tarea-${index}" ${tarea.completada ? 'checked' : ''}>
            <label for="tarea-${index}">${tarea.nombre} (Fecha de vencimiento: ${tarea.fechaVencimiento.toDateString()})</label>
            <button onclick="marcarCompleta(${index})">Marcar Completa</button>
            <button onclick="eliminarTarea(${index})">Eliminar</button>
        `;

        tareaItem.querySelector('input').addEventListener('change', () => {
            // Manejar el cambio de estado de completada/no completada aquí
            if (tarea.completada) {
                tarea.descompletar();
            } else {
                tarea.completar();
            }
            renderizarTareas(); // Vuelve a renderizar la lista después del cambio
        });

        tareasLista.appendChild(tareaItem);
    });
}

function marcarCompleta(index) {
    // Obtenemos la tarea actual en base al índice
    const tarea = listaTareas.tareas[index];

    if (tarea) {
        // Cambiamos el estado de completada/no completada de la tarea
        if (tarea.completada) {
            tarea.descompletar();
        } else {
            tarea.completar();
        }

        // Vuelve a renderizar la lista después del cambio
        renderizarTareas();
    }
}

function eliminarTarea(index) {
    // Obtenemos la tarea actual en base al índice
    const tarea = listaTareas.tareas[index];

    if (tarea) {
        // Eliminamos la tarea de la lista
        listaTareas.eliminarTarea(tarea);

        // Vuelve a renderizar la lista después del cambio
        renderizarTareas();
    }
}

// Llama a la función para renderizar las tareas al cargar la página
renderizarTareas();
