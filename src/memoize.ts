// // Definir una función memoize genérica
// function memoize<T, U>(func: (arg: T) => U): (arg: T) => U {
//   const cache: Map<T, U> = new Map();

//   return (arg: T) => {
//     if (cache.has(arg)) {
//       // Si el resultado está en la caché, devolverlo directamente
//       return cache.get(arg)!;
//     }

//     // Si no está en la caché, calcular el resultado y almacenarlo en la caché
//     const result = func(arg);
//     cache.set(arg, result);

//     return result;
//   };
// }

// // Ejemplo de una función costosa de cálculo
// function calcularFactorial(n: number): number {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * calcularFactorial(n - 1);
//   }
// }

// // Aplicar memoize a la función de cálculo del factorial
// const memoizedFactorial = memoize(calcularFactorial);

// // Ejemplos de uso
// console.log(memoizedFactorial(5)); // Calcula y almacena el factorial de 5
// console.log(memoizedFactorial(5)); // Obtiene el resultado almacenado de la caché

// console.log(memoizedFactorial(3)); // Calcula y almacena el factorial de 3
// console.log(memoizedFactorial(3)); // Obtiene el resultado almacenado de la caché
