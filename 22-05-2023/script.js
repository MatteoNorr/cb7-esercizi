import { qS, cE, getData, weatherView } from "./fn/fn.js";

cE("h1", "title", "Cerca il meteo della tua città");
// const contain = qS(".container");
cE("input", "input");
const input = qS(".input");
cE("button", "reset", "Reset", "submit");
const reset = qS(".reset");

input.addEventListener("change", (e) => {
  getData(`${e.target.value}`).then(weatherView);
  input.value = "";
  reset.addEventListener("click", () => {
    const container = qS(".container");
    container.remove();
  });
});
