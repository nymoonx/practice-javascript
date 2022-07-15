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

// Diferencia ¿? scope
function scope1() {
  this.atributo = 1;
  verResultado("scope1", this.atributo);

  function scope2() {
    this.atributo = 2;
    verResultado("scope2", this.atributo);
  }

  scope2();
  verResultado("scope1", this.atributo);

  const scope3 = () => {
    this.atributo = 3;
    verResultado("scope3", this.atributo);
  }

  scope3();
  
  verResultado("scope1", this.atributo);
}

scope1();
