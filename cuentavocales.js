const fraseIn = process.argv.slice(2)[0]

function esVocal(letra) {
  const vocales = ["a", "e", "i", "o", "u"]
  const vocalesMayusculas = vocales.map(l => l.toUpperCase())

  return vocales.includes(letra);
}

function cuentavocales(frase = "") {
  const posicionFinal = frase.length;

  let numeroDeVocales = 0;
  let posicion = 0;
  while (posicion < posicionFinal) {
    let letra = frase[posicion].toLowerCase();

    if (esVocal(letra) === true) {
      numeroDeVocales += 1;
    }
    posicion += 1;
  } 
  return numeroDeVocales
}

let numeroDeVocales = cuentavocales(fraseIn);
console.log(numeroDeVocales);
//6
