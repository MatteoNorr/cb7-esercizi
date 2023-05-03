// Esercizio 1 - Il numero inserito è pari o dispari? Con if-else.

// alert("Esercizio 1");
// let num1 = prompt("Inserisci un numero");

// if (num1 % 2 === 0) {
//   console.log("Il numero è pari");
// } else {
//   console.log("Il tuo numero è dispari");
// }

// Esercizio 2 - Il numero inserito è pari o dispari? Con operatore ternario.
// alert("Esercizio 2");
// num1 % 2 === 0
//   ? console.log("Il numero è pari")
//   : console.log("Il tuo numero è dispari");

// Esercizio avanzato - Piccola calcolatrice.
alert("Esercizio avanzato");
let num1 = parseInt(prompt("Inserisci un numero"));
let operations = prompt("Quale operazione matematica vuoi eseguire?");
let num2 = parseInt(prompt("Inserisci un altro numero"));

switch (operations) {
  case "+":
    let add = num1 + num2;
    console.log(add);
    break;
  case "-":
    let subtract = num1 - num2;
    console.log(subtract);
    break;
  case "*":
    let multiply = num1 * num2;
    console.log(multiply);
    break;
  case "/":
    let divide = num1 / num2;
    console.log(divide);
    break;
  default:
    console.log("Il carattere inserito non presenta un operatore matematico!");
}
