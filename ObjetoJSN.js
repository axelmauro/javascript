const animal = {
    especie: "carnivoros",
    tamaño: ["pequeño", "mediano", "grande"],
    color: ["blanco", "negro"],
    edad: 20,
    comeCarne: true,

}

const json = JSON.stringify(animal);

console.log(json);
console.log(typeof json);