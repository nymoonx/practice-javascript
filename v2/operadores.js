const { verResultado } = require('../mostrarResultados');

let x = 0;
let y = 1;
let z = 14321234;

// Operadores de asignacion
// ------------------------------------------------------------
x = 56;
verResultado(x);

y += x;
verResultado(y);

y += y;
verResultado(y);

y -= x;
verResultado(y);

y = 2;
x = 3;

y *= x;
verResultado(y);

y *= x;
verResultado(y);

y /= x;
verResultado(y);

y = 140 % 12;
verResultado(y);

y %= 3;
verResultado(y);
// ----------------
x = 1;
y = 2;
z = 1;
let resultado;

// Operadores de comparacion
// ------------------------------------------------------------

resultado = x == z;
verResultado(resultado);
// no usar nunca ==
// usar ===
// https://www.oscarlijo.com/blog/diferencias-entre-y-en-javascript/
// Explicar https://i.redd.it/4skcofasa1p01.png

resultado = x === z;
verResultado(resultado);

resultado = x !== z;
verResultado(resultado);

resultado = x > z;
verResultado(resultado);

resultado = x >= z;
verResultado(resultado);

resultado = x < z;
verResultado(resultado);

resultado = x <= z;
verResultado(resultado);

// Operadores aritmeticos
// ------------------------------------------------------------
resultado = x + y;
verResultado(resultado);

resultado = x - y;
verResultado(resultado);

resultado = x * y;
verResultado(resultado);

resultado = x / y;
verResultado(resultado);

resultado = x % y;
verResultado(resultado);

resultado = 5 ** 3;
verResultado(resultado);

verResultado(x, null);
resultado = x++;
verResultado(x, resultado);
resultado = x++;
verResultado(x, resultado);

verResultado(x, null);
resultado = x--;
verResultado(x, resultado);
resultado = x--;
verResultado(x, resultado);

// -----------------------------------------------------------
let a = true;
let b = false;
x = 1;
y = 2;
z = 1;

// Operadores logicos
// ------------------------------------------------------------
// operador AND
// A  |  B  | A && B
// 0  |  0  |  0
// 0  |  1  |  0
// 1  |  0  |  0
// 1  |  1  |  1  
resultado = a && b;
verResultado(resultado);

//operador OR
// A  |  B  | A || B
// 0  |  0  |  0
// 0  |  1  |  1
// 1  |  0  |  1
// 1  |  1  |  1 
resultado = a || b;
verResultado(resultado); 

resultado = !a;
verResultado(resultado);

resultado = z === x && z <= x;
verResultado(resultado);

resultado = x === y || z === x;
verResultado(resultado);

// Operador typeof
// --------------------------------------------------------
resultado = typeof x;
verResultado(resultado)

