
//Primero definimos la funcion y que quiero que haga
function dameNombreCompleto(datosPersona) {
  let name = datosPersona.nombre;
  let surname = datosPersona.apellido;
  let espacio = " "
  return name + espacio + surname;
}

//Ahora lo usamos
const persona1={
    nombre:"Maria",
    apellido:"Lopez",
}

console.log(dameNombreCompleto(persona1))
/*
Ejercicio:
definir una funcion que dado un nombre,te salude (que te devuelva un saludo con tu nombre)
*/


