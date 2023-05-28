import { input, listContentUncheck, listContentCheck } from "../script.js";

export let todoList = JSON.parse(localStorage.getItem("todoList")) || [];
export let todoListCheck =
  JSON.parse(sessionStorage.getItem("todoListCheck")) || [];

export const qS = (el) => document.querySelector(el);
export const cE = (el, cl, txt, att, id) => {
  const element = document.createElement(el);
  element.className = cl;
  element.textContent = txt;
  element.setAttribute(att, id);

  return element;
};

export const addEl = () => {
  listContentUncheck.textContent = "";
  todoList.push({ id: Math.random(), content: input.value });
  localStorage.setItem("todoList", JSON.stringify(todoList));
};

export const addElComplete = () => {
  todoListCheck.forEach((todoCheck) => {
    const todoCheckEl = cE("li", "todo check", todoCheck.content);
    sessionStorage.setItem("todoListCheck", JSON.stringify(todoListCheck));
    listContentCheck.append(todoCheckEl);
  });
};

export const renderEl = () => {
  todoList.forEach((todo) => {
    const todoLi = cE("li", "todo", todo.content, "id", todo.id);
    listContentUncheck.appendChild(todoLi);

    todoLi.addEventListener("click", (e) => {
      todoList = todoList.filter((todo) => todo.id !== parseFloat(e.target.id));
      todoListCheck.push({ id: e.target.id, content: e.target.textContent });
      e.target.classList.add("check");
      setTimeout(() => {
        e.target.remove();
        listContentCheck.append(e.target);
      }, 1000);
      sessionStorage.setItem("todoListCheck", JSON.stringify(todoListCheck));
      localStorage.setItem("todoList", JSON.stringify(todoList));
    });
  });
};
