//Esercizio 1

const imgGallery = [
  "https://picsum.photos/1000/500?1",
  "https://picsum.photos/1000/500?2",
  "https://picsum.photos/1000/500?3",
  "https://picsum.photos/1000/500?4",
  "https://picsum.photos/1000/500?5",
];

const cE = (element) => document.createElement(element);

let imgIndx = 1;
const header = cE("h2");
header.classList.add("header");
header.textContent = "Aggiungi immagini al carosello";
const input = cE("input");
input.classList.add("input");
input.setAttribute("placeholder", "Inserisci il link...");
const div = cE("div");
const img = cE("img");
img.setAttribute("src", imgGallery[0]);
img.classList.add("slides");
const arrowPrev = cE("div");
arrowPrev.textContent = "<";
arrowPrev.classList.add("gallery-img-prev");
const arrowNext = cE("div");
arrowNext.textContent = ">";
arrowNext.classList.add("gallery-img-next");
const submit = cE("input");
submit.setAttribute("type", "submit");
submit.classList.add("submit");
submit.value = "Aggiungi";

document.body.appendChild(header);
document.body.appendChild(input);
document.body.appendChild(submit);
document.body.appendChild(div);

div.append(arrowPrev, img, arrowNext);

const autoImgSlide = setInterval(() => {
  img.src = imgGallery[imgIndx];
  imgIndx++;
  if (imgIndx > imgGallery.length - 1) {
    imgIndx = 0;
  }
}, 5000);

arrowNext.addEventListener("click", () => {
  img.src = imgGallery[imgIndx];
  imgIndx++;
  if (imgIndx >= imgGallery.length) {
    imgIndx = 0;
  }
  clearInterval(autoImgSlide);
});

arrowPrev.addEventListener("click", () => {
  img.src = imgGallery[imgIndx];
  imgIndx--;
  if (imgIndx < 0) {
    imgIndx = imgGallery.length - 1;
  }
  clearInterval(autoImgSlide);
});

submit.addEventListener("click", () => {
  const newImg = input.value;
  imgGallery.push(newImg);
  input.value = "";
});
