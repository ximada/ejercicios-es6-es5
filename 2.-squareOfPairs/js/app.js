// 3 variables llamadas igual para hacer 3 pruebas (usa una variable y las otras 2 comentalas)

                                // ES5

// declara las variables ES5

//var  array = [2, 4, 6];
 var array = [-3, 2, -8, 12, 5];
// var array = [1, 2, 3, 4, 5];


// declaración de la funcion 

// function square () {
//   // escribe tu código aqui...
//  return array.filter(function(number){
//    return number > 0
//  })
//  .map(function(number){
//    return Math.sqrt(number)
//  })
// }

// console.log(square(array));


                      //  ES6

// Ahora comenta todo el codigo de arriba y escribelo en ES6

// declara variables (let-const)

// declara la funcion y ejecuta el código 
const square = array => {
  return array.filter(number => number > 0).map(number => Math.sqrt(number))
}
console.log(square(array));









// ejecuta la funcion 

