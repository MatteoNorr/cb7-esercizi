import { cE, qS } from "./utils/fn.js";

const containerForm = cE("form", "container-input");
const title = cE("h1", "title", "Todos");
const input = cE("input", "input");
const submit = cE("input", "button");
const idGen = Math.random();
let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

input.placeholder = "Aggiungi qualcosa da fare...";
submit.type = "submit";
submit.value = "Aggiungi";
const todoContainer = cE("ul", "todo-container");

document.body.append(title, containerForm, todoContainer);
containerForm.append(input, submit);

const render = () => {
  todoList.forEach((el) => {
    const renderEl = cE("li", "list-el", el.content);

    todoContainer.append(renderEl);

    localStorage.setItem("todoList", JSON.stringify(todoList));
  });
};

containerForm.addEventListener("submit", (e) => {
  {
    const addEl = cE("li", "list-el", input.value);
    e.preventDefault();
    if (input.value === "") {
      alert("Inserisci almeno un valore");
    } else {
      todoList.push({ id: Math.random(), content: input.value });
    }

    todoContainer.appendChild(addEl);

    localStorage.setItem("todoList", JSON.stringify(todoList));

    addEl.addEventListener("click", (e) => {
      todoList = todoList.filter(
        (todo) => todo.content !== e.target.textContent
      );

      addEl.classList.toggle("check");
      localStorage.setItem("todoList", JSON.stringify(todoList));
    });

    input.value = "";
  }
});

render();
