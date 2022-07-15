const { verResultado } = require('../mostrarResultados');

/** 
 * Con `let` se crean variables
 */
let numero;

// Guardamos en la variable, el `1`
numero = 1;

// Sobreescribimos el 1 por el 2
numero = 2;

verResultado(numero);

let palabra;

palabra = 'vaso';

verResultado(palabra);


// Las variables también se pueden devinir con `var`pero no lo hagas.
// es una mala práctica porque se declaran de manera global

/**
 * Definir variables que no pueden cambiar:
 * Constantes
 * `const`
 */
const numeroDeDiasDeLaSemana = 7;
// numeroDeDiasDeLaSemana = 8; ¡Esto da error!

// Puedes igualar variables
let nuevaVariable = numero;
verResultado(numero, nuevaVariable);

nuevaVariable = numeroDeDiasDeLaSemana;
verResultado(nuevaVariable);
