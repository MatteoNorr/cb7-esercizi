import { qSA, qS, cE } from "./utils/fn.js";
import { GET } from "./utils/https.js";

const userContainer = qS(".content-section");
const lightModeBtn = qS(".light-mode");
const users = cE("div", "users");
const dataTitle = qS(".data-title");
const contentTitle = qS(".content-section__title");
const header = qS(".header");
const sidebar = qS(".sidebar");
const gamersContainer = cE("div", "container-gamers");
const gamersTitle = qS(".other-players h2");

sidebar.append(gamersContainer);
userContainer.append(users);

GET("https://jsonplaceholder.typicode.com/users").then((data) => {
  data.forEach((user) => {
    const userInfo = cE("div", "user-info");
    let textEmail = user.email.replace("@", "👾");
    const userMail = cE("p", "user-mail", textEmail);
    const nameContainer = cE("div", "name-container");
    const username = cE("p", "username", user.username);
    const name = cE("span", "name", user.name);

    user.points = user.id;

    const userPoints = cE("p", "user-points", user.points);

    lightModeBtn.addEventListener("click", () => {
      userInfo.classList.toggle("user-info-light");
    });

    nameContainer.append(username, name);
    userInfo.append(nameContainer, userMail, userPoints);
    users.append(userInfo);
    userContainer.append(users);
  });
});

lightModeBtn.addEventListener("click", (e) => {
  e.target.classList.toggle("light-mode-toggle");
  header.classList.toggle("header-light");
  document.body.classList.toggle("body-light");
  contentTitle.classList.toggle("content-title-light");
  dataTitle.classList.toggle("data-title-light");
  gamersTitle.classList.toggle("global-rank-title-light");
});
