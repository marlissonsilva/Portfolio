// Variaveis ####################
const header = document.querySelector('header')
const menuHamburguer = document.querySelector('#menu-hamburguer')
const nav = document.querySelector('#nav')
const menuItems = document.querySelectorAll('#menu a')
const target = document.querySelectorAll('.anime');
const root = document.documentElement;
root.className += 'js'

// EVENTS ######################
menuHamburguer.addEventListener('click', toggleMneu);
window.addEventListener('scroll', toggleNavBg);
window.addEventListener('scroll', animeScroll);

menuItems.forEach(element => {
   element.addEventListener('click', hideMenu)
   element.addEventListener('click', scrollClick)
});

// FUNCTIONS ###################
function toggleMneu() {
   nav.classList.toggle('active')
   if (nav.classList.contains('active')) {
      menuHamburguer.innerHTML = '<i class="fa-solid fa-xmark"></i>';
      document.body.style.overflow = 'hidden'
   } else {
      menuHamburguer.innerHTML = '<i class="fa-solid fa-bars"></i>';
      document.body.style.overflow = 'auto'
   }
}

function toggleNavBg() {
   // posição do header em relação ao topo, retorna um valor negativo 
   const headerPosition = Math.abs(header.getBoundingClientRect().top) + 80;
   // usei o metodo abs transforma num ero negativo em positivo 
   const heightWindow = window.innerHeight;
   if (headerPosition > heightWindow) {
      nav.style.background = '#0f0e17';
      nav.style.transition = '.3s linear'
   } else {
      nav.style.background = '';
   }
}

function animeScroll() {
   target.forEach((element) => {
      let contentPosition = element.getBoundingClientRect().top;
      let screenPosition = window.innerHeight * 0.65;
      if (contentPosition < screenPosition) {
         element.classList.add('animate');
      } else {
         element.classList.remove('animate')
      }
   })
}

function hideMenu(event) {
   if (event.type === 'click') {
      nav.classList.remove('active')
      menuHamburguer.innerHTML = '<i class="fa-solid fa-bars"></i>';
      document.body.style.overflow = 'auto'
   }
}

function scrollClick(event) {
   event.preventDefault()
   const element = event.target;
   const id = element.getAttribute('href');
   const to = document.querySelector(id).offsetTop;

   window.scroll({
      top: to - 65,
      behavior: 'smooth'
   })
}






