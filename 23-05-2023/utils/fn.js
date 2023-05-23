import { users } from "./users.js";
import { GET, POST } from "./http.js";

export const cE = (element, cl, txt) => {
  const el = document.createElement(element);
  el.className = cl;
  el.textContent = txt;

  return el;
};

export const addProduct = (productData) => {
  const mainEl = cE("div", "cart");
  const title = cE("h4", "prod-title", productData.title);
  const price = cE("p", "prod-price", productData.price + "€");
  const qTY = cE("p", "prod-qty", `QT: ${productData.quantity}`);

  document.body.append(mainEl);
  mainEl.append(title, price, qTY);

  return mainEl;
};

export const createLogin = () => {
  const containerForm = cE("form", "container-form");
  const formTitle = cE("h1", "form-title", "Accedi al carrello");
  const login = cE("input", "username", "");
  const loginId = cE("input", "id", "");
  const submit = cE("button", "submit", "Accedi");

  login.placeholder = "Username";
  loginId.placeholder = "Identificativo carrello";
  submit.type = "submit";

  document.body.append(containerForm);
  containerForm.append(formTitle, login, loginId, submit);

  containerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (
      users.find(
        (user) =>
          (user.username === e.target[0].value ||
            user.username.toLowerCase() === e.target[0].value) &&
          user.id === e.target[1].value
      )
    ) {
      GET(`/carts/${e.target[1].value}`).then((data) =>
        data.products.forEach((product) => {
          document.body.append(addProduct(product));
          containerForm.remove();
        })
      );
      add2Cart();
      const title = cE(
        "h1",
        "welcome",
        `Welcome ${e.target[0].value}!`.toUpperCase()
      );
      document.body.appendChild(title);
    } else {
      alert("Nome utente o identificativo errati!");
    }
  });
};

export const add2Cart = () => {
  const containerFormAdd = cE("form", "container-form-add");
  const addProdTitle = cE(
    "h1",
    "form-title",
    "Aggiungi un prodotto alla lista dei desideri"
  );
  const prodTitle = cE("input", "prod-title-add");
  const addProd = cE("button", "submit add", "Aggiungi");

  document.body.append(containerFormAdd);
  containerFormAdd.append(addProdTitle, prodTitle, addProd);

  addProd.addEventListener("click", (e) => {
    e.preventDefault();
    if (prodTitle.value === "") {
      alert("Inserisci almeno un prodotto!");
    } else {
      POST("/products/add", { title: prodTitle.value })
        .then((data) => (addProduct(data).textContent = prodTitle.value))
        .then(() => (prodTitle.value = ""));
      alert("Prodotto aggiunto correttamente");
    }
  });
};
