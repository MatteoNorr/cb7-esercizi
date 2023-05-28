import { cE } from "./utils/fn.js";

const containerForm = cE("form", "container-form", "", "type", "form");
const input = cE(
  "input",
  "input",
  "",
  "placeholder",
  "Aggiungi qualcosa da fare"
);
const submit = cE("input", "submit", "", "type", "submit");
submit.value = "+";
const listContent = cE("ul", "list-content", "", "id", "list-content");
let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

document.body.append(containerForm, listContent);
containerForm.append(input, submit);

const addEl = () => {
  listContent.textContent = "";
  todoList.push({ id: Math.random(), content: input.value });
  localStorage.setItem("todoList", JSON.stringify(todoList));
};

const renderEl = () => {
  todoList.forEach((todo) => {
    const todoLi = cE("li", "todo", todo.content, "id", todo.id);
    listContent.appendChild(todoLi);
    localStorage.setItem("todoList", JSON.stringify(todoList));

    todoLi.addEventListener("click", (e) => {
      todoList = todoList.filter((todo) => todo.id !== parseFloat(e.target.id));
      e.target.classList.toggle("check");
      setTimeout(() => {
        e.target.remove();
      }, 1500);
      localStorage.setItem("todoList", JSON.stringify(todoList));
    });
  });
};

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
