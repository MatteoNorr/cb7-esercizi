export const cE = (el) => document.createElement(el);
export const qS = (el) => document.querySelector(el);
export const qSA = (els) => document.querySelectorAll(els);

export const addProduct = (data) => {
  const productContainer = cE("div");
  const imageEl = cE("img");
  const titleProd = cE("h3");
  const descriptionProd = cE("p");
  const priceProd = cE("h4");
  const buyButton = cE("button");

  productContainer.className = "product-container";
  productContainer.setAttribute("id", data.id);
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
  if (data.brand === "Apple") {
    productContainer.classList.add("apple");
  } else {
    productContainer.classList.add("other");
  }

  return productContainer;
};

export const createProductPopup = (productData) => {
  const productContainer = cE("div");
  const prodGallery = cE("div");
  const mainGalleryImg = cE("img");
  const thumbGalleryImg = cE("img");
  const prodTxt = cE("div");
  const prodTxtMainTitle = cE("h1");
  const prodTxtMainDescr = cE("p");
  const buyTxtEl = cE("div");
  const buyTxtEl1 = cE("button");
  const buyTxtEl2 = cE("button");
  const overlayPopup = cE("div");

  productContainer.className = "modalProduct";
  overlayPopup.className = "overlay-popup";
  prodTxt.className = "modalProduct-txt";
  prodTxtMainTitle.textContent = productData.title;
  prodTxtMainDescr.textContent = productData.description;
  mainGalleryImg.src = productData.thumbnail;
  mainGalleryImg.className = "modalProduct-img";
  mainGalleryImg.alt = productData.title;
  buyTxtEl.className = "modalProduct-buy";

  buyTxtEl1.textContent = "Compra ora";
  buyTxtEl2.textContent = "Aggiungi al carrello";
  buyTxtEl1.className = "modalProduct-buy-btn";
  buyTxtEl2.className = "modalProduct-cart-btn";

  prodTxt.append(prodTxtMainTitle, prodTxtMainDescr, buyTxtEl);
  buyTxtEl.append(buyTxtEl1, buyTxtEl2);
  prodGallery.append(mainGalleryImg);
  productContainer.append(prodGallery, prodTxt);
  document.body.append(overlayPopup);

  overlayPopup.addEventListener("click", () =>
    productContainer.remove(productContainer)
  );

  overlayPopup.addEventListener("click", () =>
    document.body.removeChild(overlayPopup)
  );

  return productContainer;
};
