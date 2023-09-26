const estudiantes01 = [
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
  {
    nombre: "Ana",
    nota: 3,
  },
  {
    nombre: "Juan",
    nota: 1,
  },
];
const estudiantes02 = [
  //objetos
  {
    nombre: "Rube",
    nota: 3,
  },
  {
    nombre: "Luis",
    nota: 10,
  },
];
//                                    estudiantes     9
const notasEstudianteAprobados = (listaEstudiantes, notaMin) => {
  for (let i = 0; i < listaEstudiantes.length; i++) {
    if (listaEstudiantes[i].nota > notaMin) {
      console.log(
        listaEstudiantes[i].nombre +
          " --> Aprobado con la nota de --> " +
          listaEstudiantes[i].nota
      );
    } else if (listaEstudiantes[i].nota == notaMin) {
      console.log(
        listaEstudiantes[i].nombre +
          " --> Aprobado con la nota de --> " +
          listaEstudiantes[i].nota +
          " Raspando"
      );
    } else {
      console.log(
        listaEstudiantes[i].nombre +
          " --> Reprobado con la nota de --> " +
          listaEstudiantes[i].nota
      );
    }
  }
};

console.log(notasEstudianteAprobados(estudiantes01, 9));
console.log("Segunda lista");
console.log(notasEstudianteAprobados(estudiantes02, 5));
