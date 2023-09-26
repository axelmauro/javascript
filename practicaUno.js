let myArray = {
    cantante: ["Shakira","Yeison Jimenez","Heroes del silencio"],
}

console.log(myArray.cantante)

//se remeplazan los 2 primeros elmentos de myArray
myArray.cantante[0] = "Metallica";
myArray.cantante[1] = "Jhon Alex Castaño";

console.log(myArray.cantante)
//Se agrega un elemento adicional al inicio de la matriz
myArray.cantante.unshift("Juanes");
console.log(myArray.cantante)

//se separan por (-) los elementos dentro de la matriz
let string = myArray.cantante.join("-");
console.log(string)
