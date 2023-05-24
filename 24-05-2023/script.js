// Esercizio 1
const persona = ["Matteo", "Norrito", "Italia"];

//Esercizio avanzato 1 (soluzione 1)
for (let i = 3; i > 2 && i < 100; i++) {
  persona[i] = "Non specificato";
}

const [
  arrName,
  arrSurname,
  arrCountry,
  /* soluzione 1 */ height,
  /* soluzione 2 */ age = "Non specificato",
] = persona;

console.log(arrName);
console.log(arrSurname);
console.log(arrCountry);
console.log(height);
console.log(age);

// Esercizio 2
const book = {
  title: "Norwegian wood. Tokyo blues",
  author: "Haruki Murakami",
  year: undefined,
};

//Esercizio avanzato 1
const { year = "Non specificato" } = book;

const { title, author } = book;

console.log(title);
console.log(author);
console.log(year);
