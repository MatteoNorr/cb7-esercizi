import {
  cE,
  qS,
  createCartModal,
  addProduct,
  createProductPopup,
  qSA,
} from "./utils/fn.js";

const mainEl = qS("#main");
const menuContainer = qS(".hamburger-menu-container");
const searchProd = qS(".navbar-input");
let productListData = [];
export let cartBtn = qS(".cart");
export let cart = [];

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    productListData = data.products;
    productListData.forEach((product) => mainEl.append(addProduct(product)));
  })
  .then(() => {
    const productContainerEls = qSA(".product-container");

    productContainerEls.forEach((product) =>
      product.addEventListener("click", () =>
        fetch(`https://dummyjson.com/products/${product.id}`)
          .then((res) => res.json())
          .then((data) => mainEl.append(createProductPopup(data)))
      )
    );
  });

/*hamburger*/
const hamburger = qS(".humburger-menu");

hamburger.addEventListener("click", () =>
  menuContainer.classList.toggle("visible")
);
/* fine hamburger*/

/* filters*/
/* Esercizio avanzato*/
const filterSmartphone = qS(".filter-smartphone");
const filterLaptop = qS(".filter-laptop");
const filterOther = qS(".filter-other");
const filterReset = qS(".filter-reset");

filterSmartphone.addEventListener("click", () => {
  mainEl.textContent = "";
  productListData
    .filter((product) => product.category === "smartphones")
    .forEach((obj) => mainEl.append(addProduct(obj)));
});

filterLaptop.addEventListener("click", () => {
  mainEl.textContent = "";
  productListData
    .filter((product) => product.category === "laptops")
    .forEach((obj) => mainEl.append(addProduct(obj)));
});

filterOther.addEventListener("click", () => {
  mainEl.textContent = "";
  productListData
    .filter(
      (product) =>
        product.category !== "laptops" && product.category !== "smartphones"
    )
    .forEach((obj) => mainEl.append(addProduct(obj)));
});

filterReset.addEventListener("click", () => {
  mainEl.textContent = "";
  productListData.forEach((obj) => mainEl.append(addProduct(obj)));
});

//Search bar
searchProd.addEventListener("input", (event) => {
  if (event.target.value.length >= 1) {
    mainEl.textContent = "";
  }

  productListData
    .filter((product) =>
      product.title.toLowerCase().includes(event.target.value.toLowerCase())
    )
    .forEach((filterProd) => mainEl.append(addProduct(filterProd)));
});

//Cart
cartBtn.addEventListener("click", () => {
  mainEl.appendChild(createCartModal(cart));
});
