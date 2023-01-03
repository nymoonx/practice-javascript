const { verResultado } = require("../mostrarResultados");

// 1- Solicitar el nombre, que se guardará en una variable y mostrar un mensjae de bienvenida
function saludar(nombre) {
  let persona;
  persona = nombre;
  return "hola " + persona;
}

// verResultado(saludar("caracola"));

// 2- Solicitar dos números y sumarlos

function solicito(numero1, numero2) {
  return numero1 + numero2;
}

// verResultado(solicito(1.234, 5));

// 3- solicita 3 números, suma los dos primeros, y a esa suma, multiplica el tercero. Crear 3 variables

function calculadora(numero1, numero2, numero3) {
  let x = numero1;
  let y = numero2;
  let m = numero3;
  let suma = x + y;
  let multiplica = suma * m;
  return multiplica;
}

function calculadoraAlter(x, y, z) {
  return (x + y) * z;
}

// verResultado(calculadoraAlter(1, 2, 3));

// 4 - Solicita cantidad de kilómetors recorrida y los litros que se consumieron. Devolver los litros por kilómetro

function problema(kilómetros, litros) {
  return litros / kilómetros;
}

// verResultado(problema(100, 20));

// 5- solicita los grados en Fareheit y los devuelve ren celsius
function farenheitACelsius(gradosEnFareheit) {
  return gradosEnFareheit - 32 * (9 / 5);
}

// verResultado(farenheitACelsius(100));

// solicita tres números y devuelve la media
function mediaDeTres(x, y, z) {
  return (x + y + z) / 3;
}

verResultado(mediaDeTres(5, 7, 8));

// haz la función media
function media(...numeros) {
  if (numeros.length === 0) {
    return undefined;
  }
  return numeros.reduce((acc, x) => acc + x, 0) / numeros.length;
}
verResultado(media());

// función que dada una lista de números, devuelva los que son menores que 100
function menoresQue100(listaDeNumeros) {
  let resultados = [];
  for (let index = 0; index < listaDeNumeros.length; index++) {
    const numeroActual = listaDeNumeros[index];
    if (numeroActual < 100) {
      resultados.push(numeroActual);
    }
  }
  return resultados;
}

function menoresQue100Alter(listaDeNumeros) {
  return listaDeNumeros.filter((num) => num < 100);
}

verResultado(menoresQue100([1, 23423, 343, 2, 34324, 4, 657]));

// dada una lista de numeros, devolver una lista con los pares y otra con los impares

const esPar = (num) => num % 2 === 0;

const paresYNones = (listaDeNumeros) =>
  listaDeNumeros.reduce(
    (acc, numActual) => {
      esPar(numActual) ? acc.pares.push(numActual) : acc.nones.push(numActual);
      return acc;
    },
    {
      pares: [],
      nones: [],
    }
  );

verResultado(paresYNones([1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 7, 7, 7, 2, 1]));

function paresynoness(listadecompr) {
  let x=( < 1+ > 5)
}let y=6
let m= 7

