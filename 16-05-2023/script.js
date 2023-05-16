import { cE, qS, addProduct, createProductPopup, qSA } from "./utils/fn.js";

const mainEl = qS("#main");
const menuContainer = qS(".hamburger-menu-container");

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    data.products.forEach((product) => mainEl.append(addProduct(product)));
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
