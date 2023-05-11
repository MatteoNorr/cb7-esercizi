// Esercizio 1

const flowers = [
  {
    id: 1,
    name: "Rosa",
  },
  {
    id: 2,
    name: "Margherita",
  },
  {
    id: 3,
    name: "Tulipano",
  },
  {
    id: 4,
    name: "Garofano",
  },
  {
    id: 5,
    name: "Girasole",
  },
];

const cE = (element) => document.createElement(element);
const qS = (element) => document.querySelector(element);

const head = cE("h2");
head.classList.add("title");
head.textContent = "Quali fiori conosci?";
const subTitle = cE("p");
subTitle.classList.add("sub-title");
subTitle.textContent = "Se non conosci un fiore, cliccaci per rimuoverlo";
const listUl = cE("ul");

document.body.appendChild(head);
document.body.appendChild(subTitle);
document.body.appendChild(listUl);

flowers.forEach((key) => {
  listUl.classList.add("flowers");
  const listLi = cE("li");
  listLi.classList.add("flower");
  listLi.textContent = key.name;
  listUl.appendChild(listLi);
});

// Esercizio avanzato

const inputEl = cE("input");
inputEl.classList.add("input");
inputEl.setAttribute("placeholder", "Inserisci un fiore");
const button = cE("button");
button.setAttribute("type", "submit");
button.textContent = "Invia";
button.classList.add("submit");

document.body.appendChild(inputEl);
document.body.appendChild(button);

const addEl = () => {
  if (inputEl.value === "") {
    alert("Inserisci un fiore!");
  } else {
    const listLi = cE("li");
    listLi.textContent = inputEl.value;
    listLi.classList.add("flower");
    listUl.appendChild(listLi);
    inputEl.value = "";
  }
};

button.addEventListener("click", addEl);
