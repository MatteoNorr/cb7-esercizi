export const qS = (el) => document.querySelector(el);
export const qSA = (el) => document.querySelectorAll(el);

export const cE = (el, cl, txt) => {
  const element = document.createElement(el);
  element.classList.add(cl);
  element.textContent = txt;

  return element;
};
