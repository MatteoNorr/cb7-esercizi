//  Esercizio 1

function addText() {
  textP.textContent = "Benvenuto!";
}

const textP = document.querySelector(".text-p");
const button = document.querySelector(".button-html");

button.addEventListener("click", addText);

//  Esercizio 2
const formElement = document.querySelector(".ex2-id");
const textInput = document.querySelector(".input");
const textReturn = document.querySelector(".text-output");

function handleSubmit(event) {
  event.preventDefault();
  textReturn.textContent = textInput.value;
  textInput.value = "";
}

formElement.addEventListener("submit", handleSubmit);
textInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    handleSubmit();
  }
});

// Esercizio avanzato
const inputText = document.querySelector(".input-element");
const listDiv = document.querySelector(".list");
const addBtn = document.querySelector(".add-on-list");

function addElement() {
  let newElement = document.createElement("li");
  newElement.textContent = inputText.value;
  listDiv.appendChild(newElement);
  inputText.value = "";
}

addBtn.addEventListener("click", addElement);
inputText.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && inputText.value != "") {
    addElement();
  }
});
