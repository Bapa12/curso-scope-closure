'use strict';
pi = 3.1416;
console.log(pi); // Con el Strict Mode, JS ya no utiliza 'hoisting', es decir, que no elevará la variable (var pi; pi = 3.1416;), sino, que uno debe asignar y declarar una variable al mismo tiempo. 

function myFunction() {
  'use strict';
  return pi = 3.1416;
}

console.log(myFunction());