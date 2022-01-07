// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  var c,c2=''
   for (var i=0 ; i <= nombre.length-1 ; i++) {
         if (i === 0) {
             c = nombre[i].toUpperCase();
         }
         else {
            c = nombre[i];
         }
         c2=c2+c;
   }
   return c2;
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
    return cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
    return cb(n1,n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
    var suma = numeros.reduce(function(x,y){
                               return(x+y);
                              });
    cb(suma);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
    array.forEach( function (it,ind) {
                       cb(it)
                   });


}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
    var nuevoArr=[];
    nuevoArr = array.map(function(it,ind){return cb(it); } );
    return nuevoArr;

}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
    var nuevoArr = array.filter(function(x){ if (x[0] === 'a') {return(x)} })
    return nuevoArr;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
