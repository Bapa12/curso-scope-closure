// VARIABLES

var a; // Declarando una variable
var b = 'b'; // Declarando y asignando
b = 'bb'; // Reasignando un valor
var a = 'aa'; // Redeclaración


// GLOBAL SCOPE

var fruit = 'Apple'; // Variable asignada en global scope
console.log(fruit);

function bestFruit() {
  console.log(fruit);
}

bestFruit();

/* Mala Práctica!! */
function countries() {
  country = 'Japan'; // Asignando un valor sin declarar una variable
  console.log(country);
}

countries();
console.log(country);