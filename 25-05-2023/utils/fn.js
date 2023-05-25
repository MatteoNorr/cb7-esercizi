export const cE = (element, cl, txt) => {
  const el = document.createElement(element);
  el.className = cl;
  el.textContent = txt;

  return el;
};
export const qS = (el) => document.body.querySelector(el);
