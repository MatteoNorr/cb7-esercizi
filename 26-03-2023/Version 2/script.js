import { cE, addEl, addElComplete, renderEl } from "./utils/fn.js";

const containerForm = cE("form", "container-form", "", "type", "form");
export const input = cE(
  "input",
  "input",
  "",
  "placeholder",
  "Aggiungi qualcosa da fare"
);
export const submit = cE("input", "submit", "", "type", "submit");
submit.value = "+";
const listContainer = cE("div", "list-container", "", "id", "list-container");
export const listContentUncheck = cE(
  "ul",
  "list-content",
  "",
  "id",
  "list-content"
);
export const listContentCheck = cE(
  "ul",
  "list-content-completed",
  "Completato",
  "id",
  "list-content"
);

document.body.append(containerForm, listContainer);
listContainer.append(listContentUncheck, listContentCheck);
containerForm.append(input, submit);

containerForm.addEventListener("submit", (e) => {
  if (input.value === "") {
    alert("Inserisci almeno un valore");
  } else {
    e.preventDefault();
    addEl();
    renderEl();
    input.value = "";
  }
});

renderEl();
addElComplete();
