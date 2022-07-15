function suma(x, y) {
  return x + y;
}

function resta(soy1, soy4) {
  return soy1 - soy4;
}

function division(dividendo, divisor) {
  return dividendo / divisor;
}

function dameElementoArray(array, posicion) {
  return array[posicion];
}

function pasameObjetoCosa(object, key) {
  return object[key];
}

function getFromArray(array, x, y, z) {
  //suma x e y
  let resultadoSuma = x + y;
  //multiplica el resultado por z
  let posicion = resultadoSuma * z;
  //devuelve el elemento de array del resultado anterior
  return dameElementoArray(array, posicion);
}
console.log(getFromArray([12, 78, 90, 44], 1, 1, 1));
