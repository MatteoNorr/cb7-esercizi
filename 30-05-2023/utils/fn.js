import { userTweet } from "../script.js";

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
  const name = cE("p", "name", tweetData.user?.firstName || "Pippo");
  const username = cE("span", "username", tweetData.user?.username || "@pippo");
  const textContent = cE("p", "text-content", tweetData.body);
  const postImg = cE("img", "post-img");
  const hashTags = cE("div", "hashtags");
  const reaction = cE("p", "reactions", "🤍" + tweetData.reactions);
  const separator = cE("hr", "separator");

  userImg.src = tweetData.user?.image || "https://robohash.org/cavallino";

  // Esercizio avanzato
  tweetData.tags.forEach((tag) => {
    const hashTag = cE("p", "hashtag");
    hashTag.textContent = "#" + tag;
    hashTags.appendChild(hashTag);
    textContent.appendChild(hashTags);
  });

  postImg.src = "https://picsum.photos/470/300";
  // Fine esercizio avanzato

  // containerImg.append();
  name.appendChild(username);
  containerImg.append(userImg);
  containerOut.append(containerImg, containerTxt, separator);
  containerTxt.append(name, username, textContent, postImg, reaction);
  userTweet.append(containerOut);
};
