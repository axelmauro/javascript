let myString = 'Javascript+es+super+cool';

let myArray = myString.split('+');
console.log(myArray);

let arrayLength = myArray.length;
console.log(arrayLength);

let lastItem = myArray[myArray.length-1];
console.log(lastItem);

// Crear un nuevo array que tenga los elementos ordenados en orden inverso que myArray usando el método reverse
let myInverseArray = myArray.reverse();
console.log(myInverseArray);

// Agregar un elemento al final de myInverseArray usando el método push
myInverseArray.push("impresionante");
console.log(myInverseArray);