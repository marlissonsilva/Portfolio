const menuMobile = document.querySelector(".menu-mobile");
const nav = document.querySelector(".nav");
const menuItens = document.querySelector(".menu");
const target = document.querySelectorAll(".anime");
const root = document.documentElement;
root.className += "js";

const removeActiveClass = () => {
  nav.classList.remove("active");
  document.body.style.overflow = "visible";
};

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

const resizeNavWidth = () => {
  if (document.body.clientWidth > "765") {
    removeActiveClass();
  }
};

const addAnimationOnElement = (element) => {
  let contentPosition = element.getBoundingClientRect().top;
  let screenPosition = window.innerHeight * 0.65;
  if (contentPosition < screenPosition) {
    element.classList.add("animate");
    return;
  }
  element.classList.remove("animate");
};

const animeScroll = () => {
  target.forEach(addAnimationOnElement);
};

const hiddenMenu = (event) => {
  const isEventTypeTouchstartOrClick =
    event.type === "touchstart" || event.type === "click";
  if (isEventTypeTouchstartOrClick) {
    event.preventDefault();
    removeActiveClass();
  }
};

const scrollClick = (event) => {
  event.preventDefault();
  const element = event.target;
  const id = element.getAttribute("href");
  const to = document.querySelector(id).offsetTop;

  window.scroll({
    top: to - 65,
    behavior: "smooth",
  });
};

const menuItensClicked = (event) => {
  const clickedElement = event.target;
  if (clickedElement.tagName === "A") {
    scrollClick(event);
    hiddenMenu(event);
  }
};

animeScroll();

menuItens.addEventListener("click", menuItensClicked);
menuMobile.addEventListener("click", showMenu);
window.addEventListener("scroll", animeScroll);
window.addEventListener("resize", resizeNavWidth);
