export const cE = (element, cl, txt, id) => {
  const el = document.createElement(element);
  el.className = cl;
  el.textContent = txt;
  el.setAttribute("id", Math.random());

  return el;
};
export const qS = (el) => document.body.querySelector(el);
