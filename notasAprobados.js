// Escribe bucle que evalue las notas (imprimir en consola)
//de los estudiantes que están almacenadas en un array.
//(Crear ese array)

const estudiantes = [
  //objetos
  {
    nombre: "Ada",
    nota: 8,
  },
  {
    nombre: "Diego",
    nota: 4,
  },
  {
    nombre: "Carlos",
    nota: 6,
  },
  {
    nombre: "Maria",
    nota: 10,
  },
];

/* console.log(estudiantes[2].nombre);
console.log(estudiantes[2].nota); */

for (let i = 0; i < estudiantes.length; i++) {
  if (estudiantes[i].nota > 6) {
    console.log(
      estudiantes[i].nombre +
        " --> Aprobado con la nota de --> " +
        estudiantes[i].nota
    );
  } else if (estudiantes[i].nota == 6) {
    console.log(
      estudiantes[i].nombre +
        " --> Aprobado con la nota de --> " +
        estudiantes[i].nota +
        " Raspando"
    );
  } else {
    console.log(
      estudiantes[i].nombre +
        " --> Reprobado con la nota de --> " +
        estudiantes[i].nota
    );
  }
}
