let x;
let y;

// array (lista de elementos)
console.log("------------------------------------");
x = [10, 20, 34, 5];
console.log(x);
console.log(typeof x);
console.log(Array.isArray(x));
console.log(Array.isArray(9));
console.log(Array.isArray(null));
console.log(Array.isArray(undefined));
console.log(Array.isArray([]));

x = ["black cat", 5, null, NaN, true];
console.log(x);
console.log(typeof x);
console.log(Array.isArray(x));

x = ["apple", [78, 89, 90, 45, 23], null];
console.log(x);
console.log(typeof x);
console.log(Array.isArray(x));

let tablero = [
  [1, 2, 3, 4, 5, 6, 7, 8],
  [1, 2, 3, 4, 5, 6, 7, 8],
  [1, 2, 3, 4, 5, 6, 7, 8],
  [1, 2, 3, 4, 5, 6, 7, 8],
  [1, 2, 3, 4, 5, 6, 7, 8],
  [1, 2, 3, 4, 5, 6, 7, 8],
];
console.log(tablero);
console.log(typeof tablero);
console.log(Array.isArray(tablero));

x = [1, 5, 6, 7, 5];
console.log(x.sort());
console.log(x);
console.log(x.splice(0, 2));
console.log(x);

x = [1, 5, 6, 7, 5];
y = x;
console.log(y);
y = x[2];
console.log(y);
console.log(x);
console.log(x.length);

//object (es una lista en la que los elementos tienen nombre)
x = {
  nombre: "marta",
  edad: 160,
  raza: undefined,
  telefonos: [1234567, 1928374],
  direccion: {
      calle:"dfpgofrorneg",
      numero:9999999
  }
};
console.log(x);
console.log(typeof x);
y = x["nombre"]
console.log(y);

//el punto sirve para extraer un campo de mi objeto
y = x.nombre
console.log(y);

y=x.direccion.calle;
console.log(y);
