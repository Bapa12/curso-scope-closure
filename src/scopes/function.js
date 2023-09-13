function greeting() {
  let userName = 'Loki';
  console.log(userName);

  if (userName === 'Loki') {
    console.log(`Hello ${userName}!`);
  }
}

greeting();
console.log(userName); // No se puede acceder a esta variable, porque la variable está declarada dentro de una función