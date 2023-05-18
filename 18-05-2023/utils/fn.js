import { cart, cartBtn } from "/script.js";

export const cE = (el) => document.createElement(el);
export const qS = (el) => document.querySelector(el);
export const qSA = (els) => document.querySelectorAll(els);

export const addProduct = (data) => {
  const productContainer = cE("div");
  const imageEl = cE("img");
  const titleProd = cE("h3");
  const descriptionProd = cE("p");
  const priceProd = cE("h4");

  productContainer.className = "product-container";
  productContainer.setAttribute("id", data.id);
  imageEl.src = data.thumbnail;
  titleProd.textContent = data.title.substring(0, 8);
  titleProd.className = "prod-title";
  descriptionProd.textContent = data.description.substring(0, 20) + "...";
  descriptionProd.className = "description-prod";
  priceProd.textContent = "€ " + data.price;
  priceProd.className = "price";

  productContainer.append(imageEl, titleProd, descriptionProd, priceProd);

  return productContainer;
};

export const createProductPopup = (productData) => {
  const productContainer = cE("div");
  const prodGallery = cE("div");
  const mainGalleryImg = cE("img");
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

  buyTxtEl2.addEventListener("click", () => {
    cart.push(productData);
    productContainer.remove(productContainer);
    document.body.removeChild(overlayPopup);
    if (cart.length > 0) {
      cartBtn.textContent = "🛒" + cart.length;
      cartBtn.classList.add("badge");
    }
  });

  return productContainer;
};

export const createCartModal = (cartItems) => {
  const cartContainer = cE("div");
  cartContainer.className = "cart-container";
  const cartCloseBtn = cE("div");
  cartCloseBtn.className = "cart-close-btn";
  cartCloseBtn.textContent = "x";

  cartItems.forEach((item) => {
    cartContainer.appendChild(addProduct(item));
  });

  cartContainer.append(cartCloseBtn);

  cartCloseBtn.addEventListener("click", () =>
    cartContainer.remove(qS(".cartContainer"))
  );

  return cartContainer;
};
