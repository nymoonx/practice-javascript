const fraseIn = process.argv.slice(2)[0]

function quitaEspacios(frase = "") {
  const espacio = " ";
  let posicion = 0;
  let resultado = "";
  while (posicion < frase.length) {
    let letra = frase[posicion];
    if (letra !== espacio) {
      resultado = resultado + letra;
    }
    posicion += 1;
  }
  return resultado;
}

console.log(quitaEspacios(fraseIn));
//estoesunafrase
