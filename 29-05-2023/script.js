const navItems = document.querySelectorAll(".nav-item");
const sectionContentForYou = document.querySelector(".for-you");
const sectionContentFw = document.querySelector(".following");
const navItemsLabel = document.querySelectorAll(".nav-link-label");

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
