export const cE = (el, cl, txt, att, id) => {
  const element = document.createElement(el);
  element.className = cl;
  element.textContent = txt;
  element.setAttribute(att, id);

  return element;
};

export const qS = (el) => document.querySelector(el);
