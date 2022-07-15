function factorial(numero) {
  let resultado = numero;
  while (numero > 1) {
    resultado = resultado * (numero - 1);
    numero = numero - 1;
  }
  return resultado
}

console.log(factorial(3));
// 6

console.log(factorial(10));
// 24
