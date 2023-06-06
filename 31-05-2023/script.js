import { GET, POST } from "./utils/https.js";
import { cE, qS, qSA, tweetGen, followGen } from "./utils/fn.js";

const navItems = qSA(".nav-item");
const sectionContentForYou = qS(".for-you");
const sectionContentFw = qS(".following");
const navItemsLabel = qSA(".nav-link-label");
const newTweetContent = qS(".tweet-input-txt");
const newTweetBtn = qS(".tweet-input-btn");

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

sectionContentForYou.append(bar);

// Eventi
sectionContentForYou.addEventListener("click", () => {
  sectionContentForYou.append(bar);
});

sectionContentFw.addEventListener("click", () => {
  sectionContentFw.append(bar);
});

newTweetBtn.addEventListener("click", () => {
  POST("/post/add", newTweetContent.value);
  const newTweet = cE("div", "text-content", newTweetContent.value);
  newTweetContent.value = "";
  userTweet.append(newTweet);
});
