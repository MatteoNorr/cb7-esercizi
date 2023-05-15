import { cE, qS, addProduct } from "./utils/fn.js";

const mainEl = qS("#main");

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) =>
    data.products.forEach((product) => mainEl.append(addProduct(product)))
  );
