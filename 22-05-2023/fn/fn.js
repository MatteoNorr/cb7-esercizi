export const cE = (element, clas, txt, type) => {
  const el = document.createElement(element);
  el.className = clas;
  el.setAttribute("type", type);
  el.textContent = txt;
  document.body.append(el);
};

export const qS = (el) => document.querySelector(el);

export const getData = async (city) => {
  const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=3ea6af35ca044dcd99e132146232205&q=${city}&aqi=yes`
  );
  const data = await res.json();
  return data;
};

export const weatherView = (data) => {
  const container = document.createElement("div");
  const celsius = document.createElement("h2");
  const update = document.createElement("p");
  const condition = document.createElement("img");

  container.className = "container";
  container.setAttribute("id", "container");
  celsius.textContent = data.current.temp_c + "°";
  update.className = "update";
  update.textContent = "Ultimo aggionrnamento: " + data.current.last_updated;
  condition.className = "icon";
  condition.src = data.current.condition.icon;

  document.body.appendChild(container);
  container.append(celsius, condition, update);
};
