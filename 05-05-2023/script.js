// Esercizio 2
// function calculator(num1, num2, operation) {
//   let result;
//   switch (operation) {
//     case "+":
//       result = num1 + num2;
//       return result;
//     case "-":
//       result = num1 - num2;
//       return result;
//     case "*":
//       result = num1 * num2;
//       return result;
//     case "/":
//       result = num1 / num2;
//       return result;
//   }
// }

// let num1 = parseInt(prompt("Inserisci un numero"));
// let num2 = parseInt(prompt("Inserisci un altro numero"));
// let operation = prompt("Quale operazione vuoi eseguire?");
// alert("Il tuo risultato è " + calculator(num1, num2, operation));
// console.log("Il tuo risultato è " + calculator(num1, num2, operation));

// Esercizio 3
// let me = {
//   name: "Matteo",
//   surname: "Norrito",
//   age: 27,
//   adress: "Palermo",
//   hobbie: "disegnare",
//   favMovie: "Adventure Time",
// };

// me.favMovie = "Adventure Time";

// console.log(
//   "Mi chiamo " +
//     me.name +
//     " " +
//     me.surname +
//     ", " +
//     "ho " +
//     me.age +
//     " anni" +
//     " e " +
//     "abito a " +
//     me.adress +
//     "."
// );

// console.log("Mi piace " + me.hobbie + ".");
// console.log(`La mia serie preferita è ${me.favMovie}` + ".");

// Esercizio avanzato
function calculateAdd(a, b) {
  function add() {
    return a + b;
  }
  return add();
}

function calculateSub(a, b) {
  function subtraction() {
    return a - b;
  }
  return subtraction();
}

function calculateMult(a, b) {
  function multiply() {
    return a * b;
  }
  return multiply();
}

function calculateDiv(a, b) {
  function divide() {
    return a / b;
  }
  return divide();
}

console.log("Il tuo risultato è " + calculateAdd(3, 2));
console.log("Il tuo risultato è " + calculateSub(3, 2));
console.log("Il tuo risultato è " + calculateMult(3, 2));
console.log("Il tuo risultato è " + calculateDiv(3, 2));
