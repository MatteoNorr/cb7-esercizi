export const cE = (el) => document.createElement(el);
export const qS = (el) => document.querySelector(el);

export const addProduct = (data) => {
  const productContainer = cE("div");
  const imageEl = cE("img");
  const titleProd = cE("h3");
  const descriptionProd = cE("p");
  const priceProd = cE("h4");
  const buyButton = cE("button");

  productContainer.className = "product-container";
  imageEl.src = data.thumbnail;
  titleProd.textContent = data.title;
  descriptionProd.textContent = data.description;
  descriptionProd.className = "description-prod";
  priceProd.textContent = "€ " + data.price;
  priceProd.className = "price";
  buyButton.textContent = "Acquista ora";
  buyButton.className = "buy-button";

  productContainer.append(
    imageEl,
    titleProd,
    descriptionProd,
    priceProd,
    buyButton
  );

  // Esercizio avanzato
  if (data.id > 4) {
    productContainer.addClass("hidden-row");
  }

  const filter = document.qS(".filter-btn");

  filter.addEventListener("click", () =>
    productContainer.removeClass("hidden-row")
  );

  return productContainer;
};
