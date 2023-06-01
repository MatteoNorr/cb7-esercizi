import { userTweet, followInfo } from "../script.js";

export const qSA = (el) => document.body.querySelectorAll(el);
export const qS = (el) => document.body.querySelector(el);

export const cE = (el, cl, txt) => {
  const element = document.createElement(el);
  element.className = cl;
  element.textContent = txt;

  return element;
};

export const tweetGen = (tweetData) => {
  const containerOut = cE("div", "container");
  const containerImg = cE("div", "container-img");
  const userImg = cE("img", "user-image");
  const containerTxt = cE("div", "container-txt");
  const name = cE(
    "p",
    "name",
    (tweetData.user?.firstName || "Pippo") +
      " " +
      (tweetData.user?.lastName || "Disney")
  );
  const username = cE(
    "span",
    "username",
    "@" + (tweetData.user?.username || "pippo")
  );
  const textContent = cE("p", "text-content", tweetData.body);
  const postImg = cE("img", "post-img");
  const hashTags = cE("div", "hashtags");
  const reactions = cE("p", "reactions", tweetData.reactions);
  const reactionLike = cE("img", "reaction-like");
  const separator = cE("hr", "separator");

  userImg.src = tweetData.user?.image || "https://robohash.org/cavallino";
  reactionLike.src = "./images/icons/heart.svg";

  // Generatore di immagini post
  tweetData.tags.forEach((tag) => {
    const hashTag = cE("p", "hashtag");
    hashTag.textContent = "#" + tag;
    hashTags.appendChild(hashTag);
    textContent.appendChild(hashTags);
  });

  postImg.src = `https://picsum.photos/id/${parseInt(
    Math.random() * 100
  )}/350/200`;
  // Fine generatore di immagini post

  // reaction like
  reactionLike.addEventListener("mouseover", () => {
    reactionLike.src = "./images/icons/heart copy.svg";
  });

  reactionLike.addEventListener("mouseout", () => {
    reactionLike.src = "./images/icons/heart.svg";
  });
  // fine reaction like

  // append elementi
  name.appendChild(username);
  containerImg.append(userImg);
  containerOut.append(containerImg, containerTxt, separator);
  containerTxt.append(name, username, textContent, postImg, reactions);
  reactions.append(reactionLike);
  userTweet.append(containerOut);
};

export const followGen = (followData) => {
  const containerOut = cE("div", "container-follower");
  const containerImg = cE("div", "container-follow-img");
  const followImg = cE("img", "follow-image");
  const containerTxt = cE("div", "container-follow-txt");
  const name = cE(
    "p",
    "follow-name",
    (followData.firstName || "Pippo") + " " + (followData.lastName || "Disney")
  );
  const username = cE(
    "span",
    "follow-username",
    "@" + (followData.username || "pippo")
  );
  const followBtn = cE("div", "follow-btn");
  const followBtnTxt = cE("p", "follow-btn-txt", "Segui");

  followImg.src = followData.image || "https://robohash.org/cavallino";

  name.appendChild(username);
  containerOut.append(containerImg, containerTxt, followBtn);
  containerImg.append(followImg);
  containerTxt.append(name, username);
  followBtn.append(followBtnTxt);
  followInfo.append(containerOut);
};
