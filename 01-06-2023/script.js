import { GET, POST } from "./utils/https.js";
import { cE, qS, qSA, tweetGen, followGen } from "./utils/fn.js";

const navItems = qSA(".nav-item, .nav-link-label");
const sectionContentForYou = qS(".for-you");
const sectionContentFw = qS(".following");
const newTweetContent = qS(".tweet-input-txt");
const newTweetForm = qS(".tweet-input");
const searchbar = qS(".search-bar");

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
export const followInfo = qS(".follow-info");
export const mainContent = qS(".main-content");
const bar = cE("div", "active-section");

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
    postList.forEach((post) => {
      post.user = users.find((user) => user.id === post.userId);
      tweetGen(post);
    });
    users.slice(0, 5).forEach((follow) => {
      followGen(follow);
    });
  });

// Eventi

navItems.forEach((el) => {
  el.addEventListener("click", () => {
    navItems.forEach((item) => item.classList.remove("active"));
    el.classList.add("active");
  });
});

sectionContentForYou.append(bar);

sectionContentForYou.addEventListener("click", () => {
  sectionContentForYou.append(bar);
});

sectionContentFw.addEventListener("click", () => {
  sectionContentFw.append(bar);
});

newTweetForm.addEventListener("submit", (e) => {
  e.preventDefault();
  POST("/post/add", newTweetContent.value);
  const newTweet = cE("div", "text-content", newTweetContent.value);
  newTweetContent.value = "";
  userTweet.append(newTweet);
});

document.body.addEventListener("click", (e) => {
  if (e.target === searchbar) {
    searchbar.classList.add("active-search-bar");
  } else {
    searchbar.classList.remove("active-search-bar");
  }
});
