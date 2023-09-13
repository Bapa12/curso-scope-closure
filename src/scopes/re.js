// VAR

var firstName; // Aquí se está declarando una variable, pero cuando se declara a la variable se le asigna un valor 'undefined'.
firstName = 'Loki';
console.log(firstName);

var lastName = 'Hermoso'; // Se está declarando una variable y asignándole un valor al mismo tiempo
lastName = 'Caloguerea'; // Reasignación
console.log(lastName);

var secondName = 'Pechonchi'; // Declarando y asignando
var secondName = 'Arístides'; // Reasignando 
console.log(secondName);

// LET

let fruit = 'Apple'; // Declarando y asignando
fruit = 'Kiwi'; // Reasignando
console.log(fruit);

/* let fruit = 'Banana'; // No se puede redeclarar una variable let */
console.log(fruit);

// CONST

const animal = 'Dog'; // Declarando y asignando
/* animal = 'Cat'; // No se puede reasignar una variable 'const' */
/* const animal = 'Monkey'; // No se puede redeclarar una variable 'const' */
console.log(animal);


const vehicles = [];
vehicles.push("🚗");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);