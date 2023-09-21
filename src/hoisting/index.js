
/* var nameOfDog; // Lo que hace el 'Hoisting' es asignar la variable nameOfDog de la forma var nameOfDog;. Por lo que cuando se hace el llamado el valor que se le asigna es 'undefined'. 
console.log(nameOfDog); // Esta sentencia al no saber qué es, pero lo que hace y supone, es que agarra el valor var nameOfDog; y la eleva para crear la asignación
var nameOfDog = 'Loki'; // Undefined porque la asignación se está haciendo después del llamado.
console.log(nameOfDog); */

/* var loki; // la variable loki se eleva y se asignó de esta forma y al no tener un valor definido es 'undefined' */ 
nameOfDog(); // Aunque este valor no esté asignado aún, la función de abajo es elevada durante la compilación

function nameOfDog() {
  console.log(`El mejor perrito es ${loki}`);
}

var loki = 'Lokimaru';