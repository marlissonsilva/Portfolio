const menuMobile = document.querySelector(".menu-mobile");
const nav = document.querySelector(".nav");
const target = document.querySelectorAll(".anime");
const root = document.documentElement;
root.className += "js";

const showMenu = (event) => {
  const isTouchstart = event.type === "touchstart";
  const isActiveExists = nav.classList.contains("active");
  if (isTouchstart) {
    event.preventDefault();
  }
  nav.classList.toggle("active");
  if (isActiveExists) {
    document.body.style.overflow = "visible";
    return;
  }
  document.body.style.overflow = "hidden";
};


const addAnimationOnElement = (element) => {
  let contentPosition = element.getBoundingClientRect().top;
  let screenPosition = window.innerHeight * 0.65;
  if (contentPosition < screenPosition) {
    element.classList.add("animate");
  } else {
    element.classList.remove("animate");
  }
};

const animeScroll = () => {
  target.forEach(addAnimationOnElement);
};


animeScroll();

menuMobile.addEventListener("click",showMenu);
window.addEventListener("scroll", animeScroll);
