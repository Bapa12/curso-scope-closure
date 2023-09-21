function greeting() {
  let username = 'Loki';

  function displayUsername() {
    return `Hello ${username}`;
  }

  return displayUsername;
}

const g = greeting();
console.log(g); // Aquí se está retornando la función, es decir, la definición que tiene displayUsername
console.log(g()); // Aquí se está ejecutando la función, por lo que retorna el valor, con lo cual está accediendo al ámbito léxico, pero también está recordando el contexto