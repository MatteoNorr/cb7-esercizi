import { qSA, qS, cE } from "./utils/fn.js";
import { GET } from "./utils/https.js";

const userContainer = qS(".content-section");

GET().then((data) => {
  data.forEach((user) => {
    const userList = cE("div", "user-info");
    let textEmail = user.email.replace("@", "👾");
    const userMail = cE("p", "user-mail", textEmail);
    const userName = cE("p", "username", user.name);

    for (let i = 1; i <= 10; i++) {
      data[i - 1].userRank = i;
    }
    const userRank = cE("p", "user-rank", user.userRank);

    userList.append(userRank, userName, userMail);
    userContainer.append(userList);
  });
  return data;
});
