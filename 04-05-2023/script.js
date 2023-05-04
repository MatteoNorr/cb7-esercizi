// Esercizio 1
let arrNumber = [1, 2, 3, 4, 5];

let arrNumberMax = Math.max(...arrNumber);
let arrNumberMin = Math.min(...arrNumber);

console.log(arrNumberMax);
console.log(arrNumberMin);

// Esercizio 2
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrayReverse = [];

for (let i = array.length - 1; i >= 0; i--) {
  arrayReverse.push(array[i]);
}

console.log(arrayReverse);
