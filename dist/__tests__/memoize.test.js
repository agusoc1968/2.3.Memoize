"use strict";
// Definir una función memoize para la suma de dos números
function memoizeSum(a, b) {
    const cache = new Map();
    const key = `${a}-${b}`;
    if (cache.has(key)) {
        // Si el resultado está en la caché, devolverlo directamente
        return cache.get(key);
    }
    // Si no está en la caché, calcular el resultado y almacenarlo en la caché
    const result = a + b;
    cache.set(key, result);
    return result;
}
// Ejemplos de uso de la función memoizeSum
console.log(memoizeSum(2, 3)); // Calcula y almacena la suma de 2 y 3
console.log(memoizeSum(2, 3)); // Obtiene el resultado almacenado de la caché
console.log(memoizeSum(1, 4)); // Calcula y almacena la suma de 1 y 4
console.log(memoizeSum(1, 4)); // Obtiene el resultado almacenado de la caché
//import { describe } from "node:test";
describe("memoizeSum", () => {
    2;
    3;
});
it("deberia poder sumar", () => {
    expect(memoizeSum(2, 3)).toBe(5);
});
describe("memoizeSum", () => {
    1;
    4;
});
it("deberia poder sumar", () => {
    expect(memoizeSum(1, 4)).toBe(5);
});
//# sourceMappingURL=memoize.test.js.map