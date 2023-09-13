function fruits() {
  if (true) {
    var fruit1 = 'Apple'; // Variable 'var' va a tener Function Scope
    let fruit2 = 'Kiwi'; // Variable 'let' va a tener Block Scope
    const fruit3 = 'Banana'; // Variable 'const' va a tener Block Scope
    console.log(fruit2);
    console.log(fruit3);
  }
  console.log(fruit1);
  /* console.log(fruit2); // Saldrá que no está definido
  console.log(fruit3); // Saldrá que no está definido */
}

fruits();