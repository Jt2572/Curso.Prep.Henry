// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
    var matriz = [];
    for (var prop in objeto) {
       matriz.push([prop,objeto[prop]]);
    }
    return matriz;

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí
    var obj={}; var n=0;
    for (var c in string) {
        for (var i=0; i<=string.length-1; i++) {
            if (string[c] === string[i]) {
                n++;
                obj[string[c]] = n;
            }
        }
        n=0;
    }
    return(obj);
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
    var caps='', lower ='';
    for (var i=0; i <= s.length-1; i++) {
        if ( s[i] !== (s[i]).toUpperCase() ) {
             lower = lower + s[i]
        }
        else {
              caps = caps + s[i];
             }
    }
    return caps + lower;
}


function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
   var strS = str.split(' ');
   var rev = '';
   for (var i=0; i<=strS.length-1; i++) {
       for (var j=strS[i].length-1; j>=0; j--) {
            rev = rev+strS[i][j];
       }
       if (i<strS.length-1) {
           rev = rev +' ';
       };
   }
   return(rev);
}


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
    var numSt = numero.toString(), st='';
    for (var i = numSt.length-1; i >= 0; i--) {
       st=st+numSt[i];
    }
    if (st === numSt) {
         return 'Es capicua';
    }
    else return('No es capicua');
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
    var newStr = '';
    for (var i = 0; i <= cadena.length-1; i++) {
        if (cadena[i] === 'a' || cadena[i] === 'b' || cadena[i] === 'c') {
             newStr[i] = cadena[i];
        }
        else newStr = newStr + cadena[i];
    }
    return newStr;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
    var newArr = arr.sort((x, y) => x.length - y.length);
    return newArr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var newArr=[];
       for (var i=0; i<=arreglo1.length-1; i++) {
           for (var j=0; j<= arreglo2.length-1; j++) {
              if (arreglo2[j] === arreglo1[i]) {
                 newArr.push(arreglo2[j])
              }
           }
       }
       newArr.sort((x,y) => x-y );
       return newArr; 

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
