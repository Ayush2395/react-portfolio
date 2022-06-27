const arrowUp = document.querySelector(".up_btn");
const scrollFunction = () => {
  const scrollY = window.pageYOffset;
  if (scrollY >= 560) {
    arrowUp.classList.add("popUp");
  } else {
    arrowUp.classList.remove("popUp");
  }
};
window.addEventListener("scroll", scrollFunction);
