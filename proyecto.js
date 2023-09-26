const listadeContactos =[
    {
    id: 1,
    nombre: "Jose",
    apellido: "Garcia",
    telefono: 3101238789,
    ciudad: "Bogota",
    direccion: "carera 2 # 10- 30"
    },
    {
    id: 2,
    nombre: "Maria",
    apellido: "Lugo",
    telefono: 3124567890,
    ciudad: "Cartagena",
    direccion: "Trv 2 h # 52-45"
    },
    {
    id: 3,
    nombre: "Jorgw",
    apellido: "Rico",
    telefono: 3245678900,
    ciudad: "Tunja",
    direccion: "Crr 5 # 10-20"
    }
]

function crearContacto(id, nombre, apellido, telefono,ciudad, direccion) {
    const nuevoContacto = {
    id: id,
    nombre: nombre,
    apellido: apellido,
    telefono: telefono,
    ciudad: ciudad,
    direccion: direccion
    }
    listadeContactos.push(nuevoContacto);
}

function eliminarContacto(id) {
    // Buscar el índice del contacto que tenga el mismo id que el parámetro
    const indice = listadeContactos.findIndex(contacto => contacto.id === id);

    // Verificar si se encontró el índice
    if (indice !== -1) {
        // Eliminar el contacto de la lista usando el método splice
        listadeContactos.splice(indice, 1);
        // Mostrar un mensaje indicando que el contacto fue eliminado
        console.log('El contacto con el id ' + id + ' fue eliminado.');
    } else {
        // Mostrar un mensaje indicando que el contacto no existe
        console.log('No se encontró ningún contacto con el id ' + id + '.');
    }
}
    
    function modificarContacto(id, nombre, valor) {
        // Buscar el índice del contacto que tenga el mismo id que el parámetro
        const indice = listadeContactos.findIndex(contacto => contacto.id === id);

        // Verificar si se encontró el índice
        if (indice !== -1) {
            // Modificar el campo del contacto con el valor dado usando la notación de corchetes
            listadeContactos[indice][nombre] = valor;
            // Mostrar un mensaje indicando que el contacto fue modificado
            console.log('El contacto con el id ' + id + ' fue modificado.');
        } else {
            // Mostrar un mensaje indicando que el contacto no existe
            console.log('No se encontró ningún contacto con el id ' + id + '.');
        }
    }

console.log(listadeContactos);
crearContacto(99, "mauricio", "ramirez", 3106211383, "Bogota", "trv 5 j # 48 a 61 sur apto 301");
console.log(listadeContactos);
eliminarContacto(99);
console.log(listadeContactos);
modificarContacto(2, "nombre", "Rosa");
console.log(listadeContactos);