const { verResultado } = require("../mostrarResultados");

// 3 formas de escribir la misma función
function holaMundo() {
  return "hola mundo";
}

const holaMundoFlecha = () => {
  return "hola mundo";
};

const holaMundoFlechaSimple = () => "hola mundo";

verResultado(holaMundo());
verResultado(holaMundoFlecha());
verResultado(holaMundoFlechaSimple());


