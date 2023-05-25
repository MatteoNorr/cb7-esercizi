import { cE } from "./utils/fn.js";
import { GET, POST, DELETE } from "./utils/http.js";

const containerInput = cE("div", "container-input");
const title = cE("h1", "title", "Todos");
const input = cE("input", "input");
const submit = cE("input", "button", "Invia");

input.placeholder = "Aggiungi qualcosa da fare...";
submit.type = "submit";
const todoContainer = cE("ul", "todo-container");

document.body.append(title, containerInput, todoContainer);
containerInput.append(input, submit);

GET("/todos").then(({ todos }) => {
  todos.forEach((element) => {
    const listEl = cE("li", "list-el", element.todo);

    listEl.addEventListener("click", () => {
      DELETE("/todos/1");
      listEl.classList.toggle("check");
    });

    todoContainer.append(listEl);
  });
});

submit.addEventListener("click", () => {
  {
    POST("/todos/add", {
      todo: input.value,
      userId: 7,
    });
    const addEl = cE("li", "list-el", input.value);
    todoContainer.appendChild(addEl);
    addEl.addEventListener("click", () => {
      DELETE("/todos/1");
      addEl.classList.toggle("check");
    });
    input.value = "";
  }
});
