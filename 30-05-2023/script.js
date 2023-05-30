import { GET } from "./utils/https.js";
import { qS, tweetGen } from "./utils/fn.js";

const navItems = document.querySelectorAll(".nav-item");
const sectionContentForYou = document.querySelector(".for-you");
const sectionContentFw = document.querySelector(".following");
const navItemsLabel = document.querySelectorAll(".nav-link-label");

const tweetDataMock = {
  id: 1,
  image: "https://robohash.org/hicveldicta.png?size=50x50&set=set1",
  firstName: "Matteo",
  username: "Matt_",
  body: "Lorem ipsum",
  tags: "Lorem ipsum",
  reactions: "1",
};

let users = [];
let postList = [];

export const userTweet = qS(".user-tweet");
export const mainContent = qS(".main-content");

const remoteData = Promise.all([GET("/posts"), GET("/users")]);

remoteData
  .then((data) => {
    postList = data[0].posts;
    users = data[1].users;
  })
  .then(() => {
    postList.forEach((post) => {
      if (post.body.length > 300) {
        post.body =
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sunt ab quos voluptate nobis, qui dicta, maxime aspernatur debitis pariatur nemo sequi architecto ea, voluptatem saepe ratione dignissimos? Assumenda, consectetur";
      }
    });
    postList
      .filter((post) => {
        post.user = users.find((user) => user.id === post.userId);
        return post;
      })
      .forEach((post) => {
        tweetGen(post);
      });
  });

// ------

navItems.forEach((el) => {
  el.addEventListener("click", () => {
    navItems.forEach((item) => item.classList.remove("active"));
    el.classList.add("active");
  });
});

navItemsLabel.forEach((el) => {
  el.addEventListener("click", () => {
    navItemsLabel.forEach((item) => item.classList.remove("active"));
    el.classList.add("active");
  });
});

sectionContentForYou.addEventListener("click", () => {
  sectionContentForYou.classList.add("active-section");
  sectionContentFw.classList.remove("active-section");
});

sectionContentFw.addEventListener("click", () => {
  sectionContentFw.classList.add("active-section");
  sectionContentForYou.classList.remove("active-section");
});
